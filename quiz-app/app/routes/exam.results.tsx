import { useEffect, useState } from 'react';
import type { LoaderFunctionArgs, MetaFunction } from 'react-router';
import { Link, useLoaderData } from 'react-router';
import { RichMarkdown } from '~/components/RichMarkdown';
import { topics } from '~/lib/qa';
import type { QAPair } from '~/types/QAPair';

export const meta: MetaFunction = () => {
	return [{ title: 'AZ-204 Exam Results' }];
};

interface ExamResult {
	questions: (QAPair & { index: number })[];
	startTime: number;
	duration: number;
	answers: Record<number, number[]>;
	endTime: number;
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const url = new URL(request.url);
	const timeout = url.searchParams.get('timeout') === 'true';
	
	return { timeout };
};

export default function ExamResults() {
	const { timeout } = useLoaderData<typeof loader>();
	const [results, setResults] = useState<ExamResult | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			try {
				const stored = localStorage.getItem('az204:exam-results');
				if (stored) {
					const parsed = JSON.parse(stored) as ExamResult;
					setResults(parsed);
				}
			} catch (error) {
				console.error('Error loading exam results:', error);
			} finally {
				setLoading(false);
			}
		}
	}, []);

	if (loading) {
		return (
			<div className="max-w-4xl mx-auto text-center py-12">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
				<p className="mt-4 text-gray-600">Loading your results...</p>
			</div>
		);
	}

	if (!results) {
		return (
			<div className="max-w-4xl mx-auto text-center py-12">
				<div className="bg-red-50 border border-red-200 rounded-lg p-6">
					<h2 className="text-lg font-semibold text-red-900 mb-2">No Results Found</h2>
					<p className="text-red-700 mb-4">We couldn't find your exam results. This might happen if:</p>
					<ul className="text-left text-red-700 text-sm space-y-1 mb-4">
						<li>• The exam was not completed properly</li>
						<li>• Browser data was cleared</li>
						<li>• You navigated away during the exam</li>
					</ul>
					<Link
						to="/exam"
						className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 no-underline"
					>
						Take Another Exam
					</Link>
				</div>
			</div>
		);
	}

	const totalQuestions = results.questions.length;
	const answeredQuestions = Object.keys(results.answers).length;
	
	// Calculate score
	let correctAnswers = 0;
	const questionResults: Array<{
		question: QAPair & { index: number };
		userAnswers: number[];
		isCorrect: boolean;
		isAnswered: boolean;
	}> = [];

	results.questions.forEach(question => {
		const userAnswers = results.answers[question.index] || [];
		const isAnswered = userAnswers.length > 0;
		
		// Check if answer is correct (all correct answers selected, no incorrect ones)
		const isCorrect = isAnswered && 
			question.answerIndexes.length === userAnswers.length &&
			question.answerIndexes.every(idx => userAnswers.includes(idx));
		
		if (isCorrect) correctAnswers++;
		
		questionResults.push({
			question,
			userAnswers,
			isCorrect,
			isAnswered
		});
	});

	const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
	const score = Math.round((correctAnswers / totalQuestions) * 1000); // AZ-204 uses 1000 point scale
	const passed = score >= 700; // AZ-204 passing score is 700

	const examDuration = results.endTime - results.startTime;
	const formatDuration = (ms: number) => {
		const minutes = Math.floor(ms / 60000);
		const seconds = Math.floor((ms % 60000) / 1000);
		return `${minutes}m ${seconds}s`;
	};

	// Performance by topic
	const topicPerformance: Record<string, { correct: number; total: number }> = {};
	questionResults.forEach(({ question, isCorrect }) => {
		if (!topicPerformance[question.topic]) {
			topicPerformance[question.topic] = { correct: 0, total: 0 };
		}
		topicPerformance[question.topic].total++;
		if (isCorrect) topicPerformance[question.topic].correct++;
	});

	const clearResults = () => {
		if (typeof window !== 'undefined') {
			localStorage.removeItem('az204:exam-results');
			setResults(null);
		}
	};

	return (
		<div className="max-w-6xl mx-auto space-y-8">
			{/* Header */}
			<div className="text-center">
				<h1 className="text-3xl font-bold text-gray-900 mb-2">
					AZ-204 Exam Results
				</h1>
				{timeout && (
					<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
						<p className="text-yellow-800 text-sm">
							⏰ Time expired - Your exam was automatically submitted
						</p>
					</div>
				)}
			</div>

			{/* Score Summary */}
			<div className={`rounded-xl border-2 p-8 ${passed ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'}`}>
				<div className="text-center">
					<div className={`text-6xl font-bold mb-2 ${passed ? 'text-green-600' : 'text-red-600'}`}>
						{score}
					</div>
					<div className="text-lg font-medium text-gray-700 mb-4">
						{scorePercentage}% ({correctAnswers}/{totalQuestions} correct)
					</div>
					<div className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold ${
						passed 
							? 'bg-green-600 text-white' 
							: 'bg-red-600 text-white'
					}`}>
						{passed ? '✓ PASSED' : '✗ FAILED'}
					</div>
					<div className="mt-4 text-sm text-gray-600">
						Passing score: 700 • Time taken: {formatDuration(examDuration)}
					</div>
				</div>
			</div>

			{/* Statistics */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				<div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
					<div className="text-2xl font-bold text-blue-600">{totalQuestions}</div>
					<div className="text-sm text-gray-600">Total Questions</div>
				</div>
				<div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
					<div className="text-2xl font-bold text-green-600">{correctAnswers}</div>
					<div className="text-sm text-gray-600">Correct Answers</div>
				</div>
				<div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
					<div className="text-2xl font-bold text-red-600">{answeredQuestions - correctAnswers}</div>
					<div className="text-sm text-gray-600">Incorrect Answers</div>
				</div>
				<div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
					<div className="text-2xl font-bold text-gray-600">{totalQuestions - answeredQuestions}</div>
					<div className="text-sm text-gray-600">Unanswered</div>
				</div>
			</div>

			{/* Performance by Topic */}
			<div className="bg-white rounded-lg border border-gray-200 p-6">
				<h3 className="text-lg font-semibold text-gray-900 mb-4">Performance by Topic</h3>
				<div className="space-y-3">
					{Object.entries(topicPerformance)
						.sort((a, b) => (b[1].correct / b[1].total) - (a[1].correct / a[1].total))
						.map(([topic, perf]) => {
							const percentage = Math.round((perf.correct / perf.total) * 100);
							return (
								<div key={topic} className="flex items-center">
									<div className="w-32 text-sm font-medium text-gray-700 truncate">{topic}</div>
									<div className="flex-1 mx-4">
										<div className="w-full bg-gray-200 rounded-full h-2">
											<div 
												className={`h-2 rounded-full ${percentage >= 70 ? 'bg-green-500' : percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
												style={{ width: `${percentage}%` }}
											/>
										</div>
									</div>
									<div className="text-sm text-gray-600 w-20 text-right">
										{perf.correct}/{perf.total} ({percentage}%)
									</div>
								</div>
							);
						})}
				</div>
			</div>

			{/* Detailed Results */}
			<div className="bg-white rounded-lg border border-gray-200 p-6">
				<h3 className="text-lg font-semibold text-gray-900 mb-4">Detailed Question Review</h3>
				<div className="space-y-6">
					{questionResults.map((result, index) => (
						<div key={result.question.index} className="border-b border-gray-200 pb-6 last:border-b-0">
							<div className="flex items-start justify-between mb-3">
								<div>
									<span className="text-sm font-medium text-gray-500">Question {index + 1}</span>
									<span className="ml-2 text-sm text-gray-500">• {result.question.topic}</span>
								</div>
								<div className={`px-2 py-1 rounded text-xs font-medium ${
									!result.isAnswered
										? 'bg-gray-100 text-gray-600'
										: result.isCorrect
											? 'bg-green-100 text-green-800'
											: 'bg-red-100 text-red-800'
								}`}>
									{!result.isAnswered ? 'Not Answered' : result.isCorrect ? 'Correct' : 'Incorrect'}
								</div>
							</div>
							
							<div className="mb-3">
								<RichMarkdown>{result.question.question}</RichMarkdown>
							</div>
							
							{result.question.options.map((option, optionIndex) => {
								const isCorrect = result.question.answerIndexes.includes(optionIndex);
								const wasSelected = result.userAnswers.includes(optionIndex);
								
								return (
									<div 
										key={optionIndex}
										className={`p-2 rounded mb-1 text-sm ${
											isCorrect && wasSelected
												? 'bg-green-100 border border-green-300'
												: isCorrect
													? 'bg-green-50 border border-green-200'
													: wasSelected
														? 'bg-red-100 border border-red-300'
														: 'bg-gray-50 border border-gray-200'
										}`}
									>
										<div className="flex items-center">
											<span className="mr-2">
												{isCorrect ? '✓' : wasSelected ? '✗' : '○'}
											</span>
											<RichMarkdown>{option}</RichMarkdown>
										</div>
									</div>
								);
							})}
							
							{result.question.rationale && (
								<div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded">
									<div className="text-sm font-medium text-blue-900 mb-1">Explanation:</div>
									<div className="text-sm text-blue-800">
										<RichMarkdown>{result.question.rationale}</RichMarkdown>
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>

			{/* Actions */}
			<div className="flex flex-wrap gap-4 justify-center">
				<Link
					to="/exam"
					className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium no-underline"
				>
					Take Another Exam
				</Link>
				<Link
					to="/"
					className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-medium no-underline"
				>
					Practice Mode
				</Link>
				<button
					onClick={clearResults}
					className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
				>
					Clear Results
				</button>
			</div>
		</div>
	);
}
