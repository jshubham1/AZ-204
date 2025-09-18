import { useEffect, useState } from 'react';
import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from 'react-router';
import { Form, redirect, useLoaderData, useNavigation, useNavigate } from 'react-router';
import { AnswerOptions } from '~/components/AnswerOptions';
import { RichMarkdown } from '~/components/RichMarkdown';
import { data } from '~/lib/qa';
import type { QAPair } from '~/types/QAPair';

export const meta: MetaFunction = () => {
	return [{ title: 'AZ-204 Exam in Progress' }];
};

interface ExamQuestion extends QAPair {
	index: number;
}

interface ExamSession {
	questions: ExamQuestion[];
	startTime: number;
	duration: number; // in minutes
	answers: Record<number, number[]>;
	submittedAnswers?: Record<number, boolean>;
	currentQuestion: number;
}

const EXAM_DURATION = 130; // minutes
const EXAM_QUESTIONS_COUNT = 54;

function shuffleArray<T>(array: T[]): T[] {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

function getStoredSession(): ExamSession | null {
	if (typeof window === 'undefined') return null;
	try {
		const stored = localStorage.getItem('az204:exam-session');
		return stored ? JSON.parse(stored) as ExamSession : null;
	} catch {
		return null;
	}
}

function saveSession(session: ExamSession) {
	if (typeof window !== 'undefined') {
		localStorage.setItem('az204:exam-session', JSON.stringify(session));
	}
}

function clearSession() {
	if (typeof window !== 'undefined') {
		localStorage.removeItem('az204:exam-session');
	}
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const url = new URL(request.url);
	const restart = url.searchParams.get('restart');
	
	if (restart) {
		// Clear existing session and start fresh
		return redirect('/exam/start');
	}

	// Try to get existing session
	const existingSession = getStoredSession();
	
	if (existingSession) {
		// Check if session is still valid (not expired)
		const elapsed = Date.now() - existingSession.startTime;
		const maxTime = existingSession.duration * 60 * 1000; // convert to ms
		
		if (elapsed < maxTime) {
			return { session: existingSession, isNewSession: false };
		} else {
			// Session expired, redirect to results
			clearSession();
			return redirect(`/exam/results?timeout=true`);
		}
	}
	
	// Create new session
	const shuffledQuestions = shuffleArray(data.filter(q => q.options.length > 0));
	const examQuestions: ExamQuestion[] = shuffledQuestions
		.slice(0, EXAM_QUESTIONS_COUNT)
		.map((q, index) => ({ ...q, index }));
	
	const newSession: ExamSession = {
		questions: examQuestions,
		startTime: Date.now(),
		duration: EXAM_DURATION,
		answers: {},
		submittedAnswers: {},
		currentQuestion: 0,
	};
	
	return { session: newSession, isNewSession: true };
};

export const action = async ({ request }: ActionFunctionArgs) => {
	// No server-side actions needed anymore
	// Exam completion is handled client-side
	return null;
};

export default function ExamStart() {
	const { session: initialSession, isNewSession } = useLoaderData<typeof loader>();
	const navigation = useNavigation();
	const navigate = useNavigate();
	const [session, setSession] = useState<ExamSession>(initialSession);
	const [timeLeft, setTimeLeft] = useState(0);
	const [answers, setAnswers] = useState<Record<number, number[]>>(session.answers);
	const [submittedAnswers, setSubmittedAnswers] = useState<Record<number, boolean>>(session.submittedAnswers || {});
	const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

	// Timer effect
	useEffect(() => {
		const updateTimer = () => {
			const elapsed = Date.now() - session.startTime;
			const totalTime = session.duration * 60 * 1000;
			const remaining = Math.max(0, totalTime - elapsed);
			setTimeLeft(remaining);
			
			if (remaining === 0) {
				// Time's up - auto submit
				handleSubmitExam(true);
			}
		};

		updateTimer();
		const interval = setInterval(updateTimer, 1000);
		return () => clearInterval(interval);
	}, [session.startTime, session.duration]);

	// Save session on changes
	useEffect(() => {
		const updatedSession = { ...session, answers, submittedAnswers };
		setSession(updatedSession);
		saveSession(updatedSession);
	}, [answers, submittedAnswers, session.currentQuestion]);

	const currentQuestion = session.questions[session.currentQuestion];
	const totalQuestions = session.questions.length;
	
	const formatTime = (ms: number) => {
		const minutes = Math.floor(ms / 60000);
		const seconds = Math.floor((ms % 60000) / 1000);
		return `${minutes}:${seconds.toString().padStart(2, '0')}`;
	};

	const handleAnswerChange = (questionIndex: number, selectedAnswers: number[]) => {
		setAnswers(prev => ({
			...prev,
			[questionIndex]: selectedAnswers
		}));
	};

	const handleSubmitAnswer = (questionIndex: number) => {
		setSubmittedAnswers(prev => ({
			...prev,
			[questionIndex]: true
		}));
	};

	const handleSubmitExam = (isTimeout: boolean = false) => {
		if (!session) return;
		
		// Save final results to localStorage
		const results = {
			...session,
			endTime: Date.now(),
			answers: answers,
			submittedAnswers: submittedAnswers
		};
		
		try {
			localStorage.setItem('az204:exam-results', JSON.stringify(results));
			localStorage.removeItem('az204:exam-session');
		} catch (error) {
			console.error('Error saving exam results:', error);
		}
		
		// Navigate to results page
		if (isTimeout) {
			navigate('/exam/results?timeout=true');
		} else {
			navigate('/exam/results');
		}
	};

	const goToQuestion = (index: number) => {
		setSession(prev => ({ ...prev, currentQuestion: index }));
	};

	const nextQuestion = () => {
		if (session.currentQuestion < totalQuestions - 1) {
			goToQuestion(session.currentQuestion + 1);
		}
	};

	const prevQuestion = () => {
		if (session.currentQuestion > 0) {
			goToQuestion(session.currentQuestion - 1);
		}
	};

	const answeredCount = Object.keys(answers).length;
	const progress = (answeredCount / totalQuestions) * 100;

	if (!currentQuestion) {
		return <div>Loading...</div>;
	}

	return (
		<div className="max-w-6xl mx-auto space-y-6">
			{/* Exam Header */}
			<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-6">
						<div className="text-lg font-semibold text-gray-900">
							AZ-204 Exam Simulation
						</div>
						<div className="text-sm text-gray-600">
							Question {session.currentQuestion + 1} of {totalQuestions}
						</div>
					</div>
					
					<div className="flex items-center space-x-4">
						<div className={`text-lg font-mono font-bold ${timeLeft < 300000 ? 'text-red-600' : 'text-gray-700'}`}>
							{formatTime(timeLeft)}
						</div>
						<button
							onClick={() => setShowSubmitConfirm(true)}
							className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
						>
							Submit Exam
						</button>
					</div>
				</div>
				
				{/* Progress Bar */}
				<div className="mt-4">
					<div className="flex justify-between text-sm text-gray-600 mb-1">
						<span>Progress: {answeredCount}/{totalQuestions} answered</span>
						<span>{Math.round(progress)}% complete</span>
					</div>
					<div className="w-full bg-gray-200 rounded-full h-2">
						<div 
							className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
							style={{ width: `${progress}%` }}
						/>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
				{/* Question Navigation Sidebar */}
				<div className="lg:col-span-1">
					<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-4">
						<h3 className="text-sm font-medium text-gray-900 mb-3">Questions</h3>
						<div className="grid grid-cols-6 lg:grid-cols-3 gap-2">
							{session.questions.map((_, index) => (
								<button
									key={index}
									onClick={() => goToQuestion(index)}
									className={`
										w-8 h-8 text-xs font-medium rounded transition-colors
										${session.currentQuestion === index 
											? 'bg-blue-600 text-white' 
											: answers[index] 
												? 'bg-green-100 text-green-800 hover:bg-green-200' 
												: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
										}
									`}
								>
									{index + 1}
								</button>
							))}
						</div>
						
						<div className="mt-4 text-xs text-gray-500">
							<div className="flex items-center mb-1">
								<div className="w-3 h-3 bg-green-100 rounded mr-2"></div>
								Answered
							</div>
							<div className="flex items-center mb-1">
								<div className="w-3 h-3 bg-gray-100 rounded mr-2"></div>
								Not answered
							</div>
							<div className="flex items-center">
								<div className="w-3 h-3 bg-blue-600 rounded mr-2"></div>
								Current
							</div>
						</div>
					</div>
				</div>

				{/* Main Question Area */}
				<div className="lg:col-span-3 space-y-6">
					{/* Question */}
					<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
						<div className="mb-4">
							<div className="text-sm text-gray-500 mb-2">
								Topic: {currentQuestion.topic}
							</div>
							<RichMarkdown interactive>{currentQuestion.question}</RichMarkdown>
						</div>

						{currentQuestion.options && currentQuestion.options.length > 0 && (
							<div>
								<AnswerOptions
									name={`question-${currentQuestion.index}`}
									options={currentQuestion.options}
									checkedValues={answers[currentQuestion.index] || []}
									setCheckedValues={(values) => {
										const resolvedValues = typeof values === 'function' ? values(answers[currentQuestion.index] || []) : values;
										handleAnswerChange(currentQuestion.index, resolvedValues);
									}}
									showAnswer={submittedAnswers[currentQuestion.index] || false}
									answerIndexes={currentQuestion.answerIndexes}
									disabled={submittedAnswers[currentQuestion.index] || false}
									showRationales={false}
								/>
								
								{!submittedAnswers[currentQuestion.index] && (answers[currentQuestion.index]?.length > 0) && (
									<div className="mt-4">
										<button
											onClick={() => handleSubmitAnswer(currentQuestion.index)}
											className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
										>
											Submit Answer
										</button>
									</div>
								)}
								
								{submittedAnswers[currentQuestion.index] && (
									<div className="mt-4 p-3 bg-gray-50 rounded-md">
										<div className="text-sm text-gray-600">
											✓ Answer submitted. You can still change your selection and resubmit if needed.
										</div>
										<button
											onClick={() => {
												setSubmittedAnswers(prev => {
													const updated = { ...prev };
													delete updated[currentQuestion.index];
													return updated;
												});
											}}
											className="mt-2 px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded hover:bg-blue-100"
										>
											Change Answer
										</button>
									</div>
								)}
							</div>
						)}
					</div>

					{/* Navigation */}
					<div className="flex justify-between">
						<button
							onClick={prevQuestion}
							disabled={session.currentQuestion === 0}
							className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							← Previous
						</button>
						
						<button
							onClick={nextQuestion}
							disabled={session.currentQuestion === totalQuestions - 1}
							className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							Next →
						</button>
					</div>
				</div>
			</div>

			{/* Submit Confirmation Modal */}
			{showSubmitConfirm && (
				<div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
					<div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
						<div className="mt-3">
							<h3 className="text-lg font-medium text-gray-900 mb-4">Submit Exam?</h3>
							<p className="text-sm text-gray-600 mb-4">
								You have answered {answeredCount} out of {totalQuestions} questions. 
								{totalQuestions - answeredCount > 0 && (
									<span className="text-red-600 font-medium">
										{' '}{totalQuestions - answeredCount} questions remain unanswered.
									</span>
								)}
							</p>
							<p className="text-sm text-gray-600 mb-6">
								Are you sure you want to submit your exam? This action cannot be undone.
							</p>
							<div className="flex space-x-3">
								<button
									onClick={() => setShowSubmitConfirm(false)}
									className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
								>
									Continue Exam
								</button>
								<button
									onClick={() => handleSubmitExam(false)}
									className="flex-1 px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700"
								>
									Submit Exam
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
