// @ts-check
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * @typedef {Object} FileContent
 * @property {string} name
 * @property {string} content
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * @typedef {Object} QAPair
 * @property {string} id - Unique identifier for the QA pair.
 * @property {string} question - The question text.
 * @property {boolean} hasCode - Flag indicating if the question contains code.
 * @property {string[]} options - Array of options for the question.
 * @property {number[]} answerIndexes - Array of indexes indicating the correct answers.
 * @property {string} answer - The answer text.
 * @property {string} topic - The topic related to the question.
 * @property {string} [rationale]
 * @property {string[]} [optionExplanations]
 * @property {string[]} [references]
 * @property {('original'|'adjusted')} [correctnessReview]
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} DirDataItem
 * @property {string} name - The name of the item.
 * @property {string} path - The path of the item.
 * @property {"file" | "dir"} type - The type of the item, file or directory.
 */

/**
 * Parses Knowledge Check items in the format: md: Question \n <!-- Answer -->
 * @param {string} name - The name of the knowledge check items.
 * @param {string} text - The text string containing the knowledge check items.
 * @returns {QAPair[]} An array of QAPair objects.
 */
const parseKnowledgeCheckItems = (name, text) => {
	/** @type {QAPair[]} */
	const qaPairs = [];
	
	// Split by --- separator or multiple newlines
	const sections = text.split(/---+|\n\s*\n\s*\n/).filter(section => section.trim());
	
	for (const section of sections) {
		const lines = section.trim().split('\n');
		let question = '';
		let answer = '';
		let hasCode = false;
		
		for (let i = 0; i < lines.length; i++) {
			const line = lines[i].trim();
			
			// Look for md: Question format
			if (line.startsWith('md:')) {
				question = line.replace('md:', '').trim();
				
				// Check for code in question
				if (question.includes('```') || question.includes('`')) {
					hasCode = true;
				}
				
				// Look for answer in HTML comment format
				for (let j = i + 1; j < lines.length; j++) {
					const nextLine = lines[j].trim();
					if (nextLine.startsWith('<!--') && nextLine.endsWith('-->')) {
						answer = nextLine.replace(/<!--\s*/, '').replace(/\s*-->/, '').trim();
						break;
					}
				}
				
				if (question && answer) {
					qaPairs.push({
						id: createHash('sha256').update(question).digest('hex'),
						question,
						answer,
						options: [],
						answerIndexes: [],
						hasCode,
						topic: name,
						correctnessReview: 'original',
						updatedAt: new Date().toISOString(),
					});
				}
				break;
			}
		}
	}
	
	return qaPairs;
};

/**
 * Parses Case Study items with numbered questions and answers
 * @param {string} name - The name of the case study.
 * @param {string} text - The text string containing the case study.
 * @returns {QAPair[]} An array of QAPair objects.
 */
const parseCaseStudyItems = (name, text) => {
	/** @type {QAPair[]} */
	const qaPairs = [];
	
	// Split by ## Question and ## Answer patterns
	const sections = text.split(/##\s*(Question|Answer)\s*\d+/i);
	
	let currentQuestion = '';
	let currentAnswer = '';
	let currentOptions = [];
	let currentAnswerIndexes = [];
	let hasCode = false;
	
	for (let i = 1; i < sections.length; i += 2) {
		const sectionType = sections[i].toLowerCase();
		const content = sections[i + 1] || '';
		
		if (sectionType === 'question') {
			// Save previous question if exists
			if (currentQuestion && currentAnswer) {
				qaPairs.push({
					id: createHash('sha256').update(currentQuestion).digest('hex'),
					question: currentQuestion.trim(),
					answer: currentAnswer.trim(),
					options: currentOptions,
					answerIndexes: currentAnswerIndexes,
					hasCode,
					topic: name,
					correctnessReview: 'original',
					updatedAt: new Date().toISOString(),
				});
			}
			
			// Reset for new question
			currentQuestion = '';
			currentAnswer = '';
			currentOptions = [];
			currentAnswerIndexes = [];
			hasCode = false;
			
			// Parse question content
			const lines = content.trim().split('\n');
			const questionLines = [];
			
			for (const line of lines) {
				const trimmed = line.trim();
				
				// Check for multiple choice options
				if (/^\s*-\s*\[\s*[x\s]\s*\]\s*/.test(line)) {
					const isCorrect = /^\s*-\s*\[\s*x\s*\]\s*/.test(line);
					const optionText = line.replace(/^\s*-\s*\[\s*[x\s]\s*\]\s*/, '').trim();
					
					if (isCorrect) {
						currentAnswerIndexes.push(currentOptions.length);
					}
					currentOptions.push(optionText);
				} else if (trimmed && !trimmed.startsWith('#')) {
					questionLines.push(line);
				}
				
				// Check for code
				if (line.includes('```') || line.includes('`')) {
					hasCode = true;
				}
			}
			
			currentQuestion = questionLines.join('\n').trim();
		} else if (sectionType === 'answer') {
			currentAnswer = content.trim();
			
			// Check for code in answer
			if (content.includes('```') || content.includes('`')) {
				hasCode = true;
			}
		}
	}
	
	// Save last question
	if (currentQuestion && currentAnswer) {
		qaPairs.push({
			id: createHash('sha256').update(currentQuestion).digest('hex'),
			question: currentQuestion.trim(),
			answer: currentAnswer.trim(),
			options: currentOptions,
			answerIndexes: currentAnswerIndexes,
			hasCode,
			topic: name,
			correctnessReview: 'original',
			updatedAt: new Date().toISOString(),
		});
	}
	
	return qaPairs;
};

/**
 * Parses a text string containing Q&A items and returns an array of QAPair objects.
 * @param {string} name - The name of the Q&A items.
 * @param {string} text - The text string containing the Q&A items.
 * @returns {QAPair[]} An array of QAPair objects.
 */
const parseQuestionItems = (name, text) => {
	const lines = text.split('\n');
	/** @type {QAPair[]} */
	const qaPairs = [];
	/** @type {string[]} */
	let currentQuestion = [];
	/** @type {string[]} */
	let currentOptions = [];
	/** @type {string[]} */
	let currentAnswer = [];
	/** @type {number[]} */
	let currentAnswerIndex = [];
	/** @type {boolean} */
	let currentHasCode = false;
	/** @type {string | null} */
	let currentRationale = null;
	/** @type {string[]} */
	let currentOptionExplanations = [];
	/** @type {string[]} */
	let currentReferences = [];
	/** @type {('question'|'option'|'answer'|'rationales'|'references'|null)} */
	let section = null;

	/** @type {RegExp} */
	const optionRegex = /^\s*- \[(?:x|\s)\]\s/;

	/** @type {("question" | "option" | "answer" | null)} */
	let itemType = null;

	for (const line of lines) {
		// Section headers
		if (/^Rationales?:\s*$/i.test(line.trim())) { section = 'rationales'; continue; }
		if (/^References?:\s*$/i.test(line.trim())) { section = 'references'; continue; }
		if (line.startsWith('Question:')) {
			if (currentQuestion.length > 0) {
				const question = currentQuestion.join('\n').trimEnd();
				qaPairs.push({
					id: createHash('sha256').update(question).digest('hex'),
					question,
					answer: currentAnswer.join('\n').trimEnd(),
					options: [...currentOptions],
					answerIndexes: currentAnswerIndex,
					hasCode: currentHasCode,
					topic: name,
					rationale: currentRationale ? currentRationale.trim() : undefined,
					optionExplanations: currentOptionExplanations.length ? currentOptionExplanations : undefined,
					references: currentReferences.length ? currentReferences : undefined,
					correctnessReview: /Correction:/i.test(currentAnswer.join('\n')) ? 'adjusted' : 'original',
					updatedAt: new Date().toISOString(),
				});
				currentQuestion = [];
				currentAnswer = [];
				currentOptions = [];
				currentAnswerIndex = [];
				currentHasCode = false;
				currentRationale = null;
				currentOptionExplanations = [];
				currentReferences = [];
				section = 'question';
				itemType = null;
			}

			currentQuestion = [line.replace('Question:', '').trimStart()];
			itemType = 'question';
		} else if (line.startsWith('Answer:')) {
			section = 'answer';
			currentAnswer = [line.replace('Answer:', '').trimStart()];
			itemType = 'answer';
		} else if (section === 'rationales') {
			if (/^-\s+/.test(line.trim())) {
				const rationaleLine = line.replace(/^-\s+/, '').trim();
				const split = rationaleLine.split('=>');
				if (split.length === 2) {
					const optionText = split[0].trim();
					const explanation = split[1].trim();
					const optionIndex = currentOptions.findIndex(
						(o) => o.trim() === optionText,
					);
					if (optionIndex >= 0) currentOptionExplanations[optionIndex] = explanation;
				} else {
					currentRationale = (currentRationale || '') + rationaleLine + '\n';
				}
			}
			continue;
		} else if (section === 'references') {
			if (/^-\s+https?:\/\//i.test(line.trim())) {
				currentReferences.push(line.replace(/^-\s+/, '').trim());
			}
			continue;
		}

		// Parse options (multiple choice questions)
		if (optionRegex.test(line)) {
			section = 'option';
			const isCorrect = line.includes('[x]');
			const optionText = line.replace(optionRegex, '').trim();
			
			if (isCorrect) {
				currentAnswerIndex.push(currentOptions.length);
			}
			
			currentOptions.push(optionText);
			itemType = 'option';
			continue;
		}

		// Handle code detection
		if (line.includes('```') || line.includes('`')) {
			currentHasCode = true;
		}

		// Append content to current section
		if (itemType === 'question' && section !== 'rationales' && section !== 'references') {
			currentQuestion.push(line);
		} else if (itemType === 'answer' && section === 'answer') {
			currentAnswer.push(line);
		}
	}

	// For QA pair without trailing empty line
	if (currentQuestion.length > 0) {
		const question = currentQuestion.join('\n').trimEnd();
		// Don't require options - some questions are open-ended
		qaPairs.push({
			id: createHash('sha256').update(question).digest('hex'),
			question,
			answer: currentAnswer.join('\n').trimEnd(),
			options: [...currentOptions],
			answerIndexes: currentAnswerIndex,
			hasCode: currentHasCode,
			topic: name,
			rationale: currentRationale ? currentRationale.trim() : undefined,
			optionExplanations: currentOptionExplanations.length ? currentOptionExplanations : undefined,
			references: currentReferences.length ? currentReferences : undefined,
			correctnessReview: /Correction:/i.test(currentAnswer.join('\n')) ? 'adjusted' : 'original',
			updatedAt: new Date().toISOString(),
		});
	}

	return qaPairs;
};

/**
 * Loads the content of all markdown files in a given directory.
 * @async
 * @param {string} directory - The directory to load the markdown files from.
 * @returns {Promise<FileContent[]>} An array of FileContent objects.
 */
const loadContents = async (directory) => {
	const dirPath = path.join(__dirname, '..', '..', directory);
	console.log(`Loading questions from ${dirPath}`);
	const fileNames = await fs.readdir(dirPath);

	const filePromises = fileNames
		.filter((fileName) => fileName.toLowerCase() !== 'readme.md')
		.map(async (fileName) => {
			const filePath = path.join(dirPath, fileName);
			const content = await fs.readFile(filePath, 'utf-8');
			const name = path.parse(fileName).name; // remove extension

			return { name, content };
		});

	return await Promise.all(filePromises);
};

/**
 * Loads content from a GitHub repository.
 * @async
 * @param {string} directory - The repository directory to load the content from.
 * @returns {Promise<FileContent[]>} An array of FileContent objects.
 */
const loadContentFromGItHub = async (directory) => {
	const githubAPIUrl = 'https://api.github.com/repos';
	const repo = 'arvigeus/AZ-204';

	const repoDir = `${githubAPIUrl}/${repo}/contents/${directory}`;
	console.log(`Loading questions from ${repoDir}`);

	const dirResponse = await fetch(repoDir);
	/**
	 * @type {DirDataItem[]}
	 * An array of directory data items.
	 */
	const dirData = await dirResponse.json();
	const files = dirData.filter(
		(item) =>
			item.type === 'file' &&
			item.name.toLowerCase() !== 'readme.md' &&
			item.name.endsWith('.md'),
	);
	/**
	 * @type {FileContent[]}
	 * An array of directory data items.
	 */
	const items = [];

	for (const file of files) {
		const url = `${githubAPIUrl}/${repo}/contents/${file.path}`;
		const response = await fetch(url);
		const data = await response.json();
		const name = file.name.replace(/\.[^/.]+$/, '');
		const content = Buffer.from(data.content, 'base64').toString('utf-8');

		items.push({ name, content });
	}

	return items;
};

/**
 * Parses an array of files containing Q&A items, extracting topics and data.
 * @param {FileContent[]} files - The files to be parsed.
 * @param {string} [fileType] - Type of files being parsed ('questions', 'knowledge-check', 'case-studies')
 * @returns {Object} An object containing topics and data.
 */
const parseQuestionFiles = (files, fileType = 'questions') => {
	const topics = [];
	const data = [];

	for (const { name, content } of files) {
		topics.push(name);
		
		let items = [];
		if (fileType === 'knowledge-check') {
			items = parseKnowledgeCheckItems(name, content);
		} else if (fileType === 'case-studies') {
			items = parseCaseStudyItems(name, content);
		} else {
			items = parseQuestionItems(name, content);
		}
		
		data.push(...items);
	}

	return { topics, data };
};

/**
 * Serializes an item to a JSON string.
 * @param {any} item - The item to serialize.
 * @returns {string} The serialized string.
 */
const serialize = (item) => JSON.stringify(item, null, 2);

/**
 * Saves the provided topics and data to a file at the specified location.
 * @async
 * @param {string[]} topics - An array of topic names.
 * @param {QAPair[]} data - An array of QAPair items.
 * @param {string} location - The file location to save the data to.
 * @returns {Promise<void>}
 */
const saveData = async (topics, data, location) => {
	const content = `export const topics = ${serialize(
		topics,
	)};\n\nexport const data = ${serialize(data)};\n`;

	await fs.writeFile(location, content);
};

/**
 * Loads files either from the disk or from GitHub depending on the NODE_ENV.
 * @async
 * @param {string} dir - The directory containing the files to load.
 * @returns {Promise<FileContent[]>} An array of FileContent objects.
 */
const loadFiles = async (dir) =>
	await (process.env.NODE_ENV !== 'production'
		? loadContents(path.join(dir))
		: loadContentFromGItHub(path.join(dir)));

/**
 * Main function to initialize the process of loading, parsing, and saving Q&A pairs.
 * @async
 * @returns {Promise<void>}
 */
const init = async () => {
	console.log('Loading questions from multiple sources...');
	
	// Load regular questions
	const { topics: qaTopics, data: qaData } = parseQuestionFiles(
		await loadFiles('Questions'),
		'questions'
	);
	
	// Load knowledge check questions
	const { topics: kcTopics, data: kcData } = parseQuestionFiles(
		await loadFiles('Knowledge Check'),
		'knowledge-check'
	);
	
	// Load case study questions
	const { topics: csTopics, data: csData } = parseQuestionFiles(
		await loadFiles('Case Studies'),
		'case-studies'
	);
	
	// Combine all topics and data
	const allTopics = [...qaTopics, ...kcTopics, ...csTopics];
	const allData = [...qaData, ...kcData, ...csData];
	
	console.log(`Loaded ${allData.length} questions from ${allTopics.length} topics`);
	console.log(`- Regular questions: ${qaData.length}`);
	console.log(`- Knowledge check questions: ${kcData.length}`);
	console.log(`- Case study questions: ${csData.length}`);

	await saveData(allTopics, allData, path.join(process.cwd(), 'app', 'db.ts'));
};

init()
	.then(() => console.log('Questions saved to database successfully'))
	.catch((err) => console.error(err));
