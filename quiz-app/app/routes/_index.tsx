import clsx from 'clsx';
import { useEffect, useMemo, useRef, useState } from 'react';
import type {
	ActionFunctionArgs,
	LoaderFunctionArgs,
	MetaFunction,
} from 'react-router';
import {
	Form,
	Link,
	redirect,
	useActionData,
	useLoaderData,
	useNavigation,
} from 'react-router';

import { AnswerOptions } from '~/components/AnswerOptions';
import { Button, LoadingButton, NextButton } from '~/components/Button';
import { TextInput } from '~/components/Input';
import { RichMarkdown } from '~/components/RichMarkdown';
import { type Question, getQA, getQAById, topics } from '~/lib/qa';

export const meta: MetaFunction = () => {
	return [{ title: 'Developing Solutions for Microsoft Azure: Quiz' }];
};

// Comment out loader for SPA mode compatibility
// export const loader = async ({ request }: LoaderFunctionArgs) => {
// 	const url = new URL(request.url);
// 	const topic = url.searchParams.get('topic');

// 	const id = url.searchParams.get('id');
// 	const data = id != null ? getQAById(id) : getQA(topic);

// 	if (!data)
// 		throw new Response(null, {
// 			status: 404,
// 			statusText: 'Not Found',
// 		});

// 	return { data, topic };
// };

// Comment out action for SPA mode compatibility
// export const action = async ({ request }: ActionFunctionArgs) => {
// 	const payload = await request.formData();
// 	const topic = payload.get('topic');
// 	const isTopicChange = payload.get('change-topic');

// 	// If this is a topic change, redirect to the new URL
// 	if (isTopicChange) {
// 		const url = new URL(request.url);
// 		url.searchParams.delete('id'); // Remove current question ID
// 		if (topic) {
// 			url.searchParams.set('topic', topic.toString());
// 		} else {
// 			url.searchParams.delete('topic');
// 		}
// 		return redirect(url.toString());
// 	}

// 	// Handle next question request
// 	const answered = new Set<number>(
// 		payload
// 			.get('answered')
// 			?.toString()
// 			?.split(',')
// 			.map((i) => Number.parseInt(i, 10)),
// 	);
// 	const data = getQA(topic?.toString(), answered);
// 	return data;
// };

export default function Index() {
	// For SPA mode, we'll load data client-side
	// const loaderData = useLoaderData<typeof loader>();
	// const actionData = useActionData<typeof action>();

	// const data = actionData || loaderData.data;

	// Placeholder for SPA mode - redirect to topics page
	return (
		<div className="max-w-4xl mx-auto p-6">
			<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
				<h1 className="text-2xl font-bold text-gray-900 mb-4">AZ-204 Quiz App</h1>
				<p className="text-gray-600 mb-6">Choose a topic to start practicing questions</p>
				<Link
					to="/topics"
					className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors no-underline"
				>
					Browse Topics
				</Link>
			</div>
		</div>
	);
}

// Original component (commented out for SPA compatibility):
// export default function Index() {
// 	const loaderData = useLoaderData<typeof loader>();
// 	const actionData = useActionData<typeof action>();

// 	const data = actionData || loaderData.data;

	// Placeholder for SPA mode - redirect to topics page
	return (
		<div className="max-w-4xl mx-auto p-6">
			<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
				<h1 className="text-2xl font-bold text-gray-900 mb-4">AZ-204 Quiz App</h1>
				<p className="text-gray-600 mb-6">Choose a topic to start practicing questions</p>
				<Link
					to="/topics"
					className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors no-underline"
				>
					Browse Topics
				</Link>
			</div>
		</div>
	);
}

function TopicsPanel({ currentTopic }: { currentTopic: string | null }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* Mobile menu button */}
			<div className="lg:hidden fixed top-4 left-4 z-50">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="p-2 rounded-md bg-white shadow-lg border border-gray-200 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
				>
					<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
					</svg>
				</button>
			</div>

			{/* Overlay for mobile */}
			{isOpen && (
				<div 
					className="lg:hidden fixed inset-0 bg-gray-600 bg-opacity-75 z-40"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Side panel */}
			<div className={clsx(
				"fixed top-0 left-0 z-40 h-full w-80 bg-white border-r border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out overflow-y-auto",
				"lg:translate-x-0 lg:static lg:z-auto",
				isOpen ? "translate-x-0" : "-translate-x-full"
			)}>
				<div className="p-6">
					{/* Header */}
					<div className="mb-6">
						<h2 className="text-xl font-bold text-gray-900 mb-2">AZ-204 Topics</h2>
						<p className="text-sm text-gray-600">Choose a topic to practice questions</p>
					</div>

					{/* Quick Actions */}
					<div className="space-y-3 mb-6">
						<Link 
							to="/exam" 
							className="flex items-center p-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-200 no-underline group"
							onClick={() => setIsOpen(false)}
						>
							<span className="text-2xl mr-3">🎯</span>
							<div>
								<div className="font-semibold">Full Exam</div>
								<div className="text-xs text-blue-100">54 questions • 130 min</div>
							</div>
						</Link>
						
						<Link 
							to="/study" 
							className="flex items-center p-3 rounded-lg bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700 transition-all duration-200 no-underline group"
							onClick={() => setIsOpen(false)}
						>
							<span className="text-2xl mr-3">📚</span>
							<div>
								<div className="font-semibold">Study Materials</div>
								<div className="text-xs text-green-100">Guides & documentation</div>
							</div>
						</Link>
					</div>

					{/* All Topics Option */}
					<div className="mb-4">
						<Link
							to="/"
							className={clsx(
								"flex items-center p-3 rounded-lg transition-all duration-200 no-underline group",
								!currentTopic
									? "bg-indigo-100 text-indigo-900 border border-indigo-200"
									: "text-gray-700 hover:bg-gray-100"
							)}
							onClick={() => setIsOpen(false)}
						>
							<span className="text-lg mr-3">🎲</span>
							<div className="font-medium">All Topics (Random)</div>
						</Link>
					</div>

					{/* Topics List */}
					<div className="space-y-1">
						<h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Topics</h3>
						{topics.map((topic) => (
							<Link
								key={topic}
								to={`/?topic=${encodeURIComponent(topic)}`}
								className={clsx(
									"flex items-center p-3 rounded-lg transition-all duration-200 no-underline group",
									currentTopic === topic
										? "bg-indigo-100 text-indigo-900 border border-indigo-200"
										: "text-gray-700 hover:bg-gray-100"
								)}
								onClick={() => setIsOpen(false)}
							>
								<span className="text-lg mr-3">{getTopicIcon(topic)}</span>
								<div className="font-medium">{topic}</div>
								{currentTopic === topic && (
									<span className="ml-auto">
										<svg className="h-4 w-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
										</svg>
									</span>
								)}
							</Link>
						))}
					</div>

					{/* Footer */}
					<div className="mt-8 pt-6 border-t border-gray-200">
						<div className="text-xs text-gray-500 text-center">
							<div>AZ-204 Quiz App</div>
							<div className="mt-1">Practice for Microsoft Azure certification</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

function getTopicIcon(topic: string): string {
	const iconMap: Record<string, string> = {
		'API Management': '🌐',
		'AZ CLI': '💻',
		'App Configuration': '⚙️',
		'App Service': '🌍',
		'Application Insights': '📊',
		'Azure': '☁️',
		'Blob Storage': '📦',
		'Compute Solutions': '🖥️',
		'Containers': '�',
		'Cosmos DB': '🗄️',
		'Docker': '🐳',
		'Entra ID': '🔐',
		'Event Grid': '📡',
		'Event Hubs': '📨',
		'Functions': '⚡',
		'Graph': '🕸️',
		'Key Vault': '🔑',
		'Managed Identities': '👤',
		'Message Queues': '📬',
		'Monitor': '📈',
		'Queue Storage': '📥',
		'Resource Groups': '📋',
		'Service Bus': '🚌',
		'Shared Access Signatures': '🔏',
		'Storage Redundancy': '🔄',
		'Storage Security': '🔒',
		'AD Application Manifest': '📋',
		// Additional fallback mappings
		'Monitoring': '📈',
		'Networking': '🌐',
		'Redis': '🚀',
		'Resource Manager': '📋',
		'Security': '🔒',
		'SQL': '🗃️',
		'Storage': '💾',
		'Virtual Machines': '💻',
		'Web Apps': '🌐',
		'WebJobs': '⚡'
	};
	
	return iconMap[topic] || '📝';
}

function QuestionForm({
	data,
	answered,
	topic,
}: {
	data: Question;
	answered: string;
	topic: string | null;
}) {
	const [checkedValues, setCheckedValues] = useState<number[]>([]);
	const [showAnswer, setShowAnswer] = useState(false);
	const navigation = useNavigation();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		// Check if this is a topic change submission
		const formData = new FormData(event.currentTarget);
		const isTopicChange = formData.get('change-topic');
		
		// If changing topic, allow normal form submission without tracking stats
		if (isTopicChange) {
			return true;
		}
		
		// Track answer correctness for next question submissions only
		try {
			const statsRaw = localStorage.getItem('az204:answers');
			const stats = (statsRaw ? JSON.parse(statsRaw) : {}) as Record<string, {correct: boolean; attempts: number; lastAnsweredAt: number}>;
			stats[data.id] = {
				correct: isCorrectlyAnswered,
				attempts: (stats[data.id]?.attempts || 0) + 1,
				lastAnsweredAt: Date.now(),
			};
			localStorage.setItem('az204:answers', JSON.stringify(stats));
			window.dispatchEvent(new Event('az204-stats-updated'));
		} catch {}
		window.history.pushState({}, data.id, window.location.href);
		window.scrollTo({ top: 0, behavior: 'smooth' });
		return false;
	};

	const isLoading = navigation.state === 'submitting';
	const isCorrectlyAnswered =
		data.answerIndexes &&
		data.answerIndexes.length > 0 &&
		data.answerIndexes.length === checkedValues.length &&
		data.answerIndexes.every((value) => checkedValues.includes(value));

	const buttonColor = showAnswer || isCorrectlyAnswered ? 'green' : 'blue';

	return (
		<div className="max-w-4xl mx-auto p-6">
			<Form method="post" onSubmit={handleSubmit} className="space-y-6">
				{/* Question Header */}
				<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
					<h2 className="relative text-xl font-bold text-center text-gray-900 mb-2">
						<span className="text-indigo-600">{data.topic}</span>
						<Link
							to={'/topics'}
							title="Browse all topics"
							className="absolute -right-2 -top-2 scale-75 text-gray-400 hover:text-gray-600 no-underline transition-colors"
						>
							<svg
								role="img"
								aria-label="Open book"
								width="32px"
								height="32px"
								viewBox="0 0 64 64"
								xmlns="http://www.w3.org/2000/svg"
								className="fill-current"
							>
								<polyline
									points="50.83 18.04 55.47 18.04 55.47 51.97 8.53 51.97 8.53 18.04 13.05 18.04"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="3"
								/>
								<path
									d="M49.83,47V12c-13.57.44-17.89,6-17.89,6s-5.44-6.23-17.88-6V47a44.38,44.38,0,0,1,17.88,5S41.8,47.33,49.83,47Z"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="3"
								/>
								<line
									x1="31.94"
									x2="31.94"
									y1="18.04"
									y2="51.97"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="3"
								/>
							</svg>
						</Link>
					</h2>
					
					<input type="hidden" name="id" value={data.id} />
					<input type="hidden" name="answered" value={answered} />
					<input type="hidden" name="type" value={data.topic} />
					
					<div className="space-y-4">
						<div className="border-l-4 border-indigo-400 pl-4">
							<div className="text-sm font-semibold text-gray-600 mb-2">Question</div>
							<div className="text-lg leading-relaxed">
								<RichMarkdown interactive>{data.question}</RichMarkdown>
							</div>
						</div>
					</div>
				</div>

				{/* Answer Options */}
				{data.options && data.options.length > 0 && (
					<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
						<AnswerOptions
							name="answers"
							options={data.options}
							checkedValues={checkedValues}
							setCheckedValues={setCheckedValues}
							showAnswer={showAnswer}
							answerIndexes={data.answerIndexes}
							disabled={showAnswer}
							optionExplanations={data.optionExplanations}
						/>
						{data.answerIndexes && data.answerIndexes.length > 1 && (
							<div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-md">
								<div className="flex items-center">
									<svg className="h-5 w-5 text-amber-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
									</svg>
									<span className="text-amber-800 text-sm font-medium">
										This question has multiple correct answers
									</span>
								</div>
							</div>
						)}
					</div>
				)}

				{(!data.options || !data.options.length) && !data.hasCode && (
					<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
						<TextInput />
					</div>
				)}

				{/* Answer Section */}
				<div
					className={clsx(
						'bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-300 ease-in-out overflow-hidden',
						showAnswer ? 'p-6 opacity-100' : 'p-0 opacity-0 max-h-0',
					)}
				>
					{showAnswer && (
						<div className="space-y-4">
							<div className="border-l-4 border-green-400 pl-4">
								<div className="text-sm font-semibold text-green-700 mb-2">Correct Answer</div>
								<div className="text-gray-900">
									<RichMarkdown>{data.answer}</RichMarkdown>
								</div>
							</div>
						</div>
					)}
				</div>

				{/* Action Buttons */}
				<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-3">
						{/* Submit button - always show */}
						<Button
							type="button"
							className="sm:justify-self-start"
							disabled={isLoading}
							onClick={() => setShowAnswer(true)}
							bgColor={isLoading ? 'gray' : 'blue'}
						>
							Submit
						</Button>
						
						<a
							href={`/report?id=${data.id}`}
							target="_blank"
							className="inline-flex transform items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 text-sm shadow-sm transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:justify-self-center"
							rel="noreferrer"
						>
							<svg
								role="alert"
								width="20px"
								height="20px"
								fill="none"
								viewBox="-.5 0 25 25"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="m10.881 16.15c0-0.1479 0.0292-0.2944 0.0861-0.4309 0.057-0.1366 0.1403-0.2605 0.2454-0.3646s0.2298-0.1864 0.3668-0.2421c0.1371-0.0557 0.2837-0.0837 0.4317-0.0824 0.2182 4e-3 0.4304 0.0721 0.6101 0.196 0.1796 0.1239 0.3189 0.2981 0.4001 0.5006 0.0813 0.2026 0.1009 0.4246 0.0567 0.6383-0.0443 0.2137-0.1506 0.4096-0.3056 0.5633-0.155 0.1536-0.3518 0.2581-0.5659 0.3005s-0.436 0.0207-0.6378-0.0624c-0.2019-0.083-0.3747-0.2237-0.497-0.4045-0.1223-0.1807-0.1886-0.3935-0.1906-0.6118zm0.3599-2.73-0.14-5.22c-0.0133-0.12548 0-0.25235 0.039-0.37237 0.0389-0.12003 0.1026-0.23054 0.187-0.32434 0.0844-0.09381 0.1876-0.16881 0.3028-0.22016 0.1153-0.05134 0.2401-0.07788 0.3662-0.07788 0.1262 0 0.251 0.02654 0.3663 0.07788 0.1152 0.05135 0.2184 0.12635 0.3028 0.22016 0.0844 0.0938 0.1481 0.20431 0.187 0.32434 0.039 0.12002 0.0523 0.24689 0.039 0.37237l-0.13 5.22c0 0.2015-0.08 0.3949-0.2226 0.5374-0.1425 0.1425-0.3359 0.2226-0.5374 0.2226-0.2016 0-0.3949-0.0801-0.5374-0.2226s-0.2227-0.3359-0.2227-0.5374z"
									fill="#d73a49"
								/>
								<path
									d="m12 21.5c5.1086 0 9.25-4.1414 9.25-9.25 0-5.1086-4.1414-9.25-9.25-9.25-5.1086 0-9.25 4.1414-9.25 9.25 0 5.1086 4.1414 9.25 9.25 9.25z"
									stroke="#d73a49"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
								/>
							</svg>
							Report Issue
						</a>
						
						{isLoading ? (
							<LoadingButton className="sm:justify-self-end" text="Loading..." />
						) : (
							<NextButton
								className="sm:justify-self-end"
								bgColor={buttonColor}
								text="Next Question"
								topic={topic}
								entries={topics}
							/>
						)}
					</div>
				</div>

				{/* Rationales and References */}
				{showAnswer && (data.rationale || data.references?.length) && (
					<div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-sm border border-blue-200 p-6">
						<div className="space-y-4">
							{data.correctnessReview === 'adjusted' && (
								<span className="inline-block rounded-full bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-semibold text-amber-800">
									✓ Content Reviewed
								</span>
							)}
							{data.rationale && (
								<div>
									<div className="flex items-center gap-2 font-semibold text-blue-900 mb-3">
										<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
										</svg>
										Rationale
									</div>
									<div className="prose prose-sm max-w-none text-gray-800">
										<RichMarkdown>{data.rationale}</RichMarkdown>
									</div>
								</div>
							)}
							{data.references && data.references.length > 0 && (
								<div>
									<div className="flex items-center gap-2 font-semibold text-blue-900 mb-3">
										<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
											<path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" />
											<path d="M7.414 15.414a2 2 0 01-2.828-2.828l3-3a2 2 0 012.828 0 1 1 0 001.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5z" />
										</svg>
										Further Reading
									</div>
									<ul className="m-0 space-y-2 text-sm">
										{data.references.map((ref) => (
											<li key={ref} className="flex items-start">
												<span className="text-blue-400 mr-2 mt-1">→</span>
												<a
													href={ref}
													target="_blank"
													rel="noreferrer"
													className="text-blue-700 hover:text-blue-900 hover:underline break-all"
												>
													{ref}
												</a>
											</li>
										))}
									</ul>
								</div>
							)}
							{data.updatedAt && (
								<div className="text-right text-xs text-blue-600/60 pt-2 border-t border-blue-200">
									Last updated: {new Date(data.updatedAt).toLocaleDateString()}
								</div>
							)}
						</div>
					</div>
				)}
			</Form>
		</div>
	);
}
