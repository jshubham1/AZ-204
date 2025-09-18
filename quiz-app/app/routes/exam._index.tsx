import type { MetaFunction } from 'react-router';
import { Link } from 'react-router';
import { data } from '~/lib/qa';

export const meta: MetaFunction = () => {
	return [{ title: 'AZ-204 Exam Simulation' }];
};

export default function ExamIndex() {
	const totalQuestions = data.length;
	const examQuestions = 54; // Real AZ-204 exam has 54 questions
	const examTimeMinutes = 130; // Real AZ-204 exam time

	return (
		<div className="max-w-4xl mx-auto space-y-8">
			{/* Header */}
			<div className="text-center">
				<h1 className="text-3xl font-bold text-gray-900 mb-2">
					AZ-204 Exam Simulation
				</h1>
				<p className="text-gray-600">
					Practice with the same format and timing as the real Microsoft AZ-204 exam
				</p>
			</div>

			{/* Exam Info Card */}
			<div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
					<div className="text-center">
						<div className="text-3xl font-bold text-blue-600 mb-2">{examQuestions}</div>
						<div className="text-sm font-medium text-gray-700">Questions</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-purple-600 mb-2">{examTimeMinutes}</div>
						<div className="text-sm font-medium text-gray-700">Minutes</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-green-600 mb-2">700</div>
						<div className="text-sm font-medium text-gray-700">Passing Score</div>
					</div>
				</div>

				<div className="bg-white rounded-lg p-6 border border-blue-200">
					<h3 className="text-lg font-semibold text-gray-900 mb-4">Exam Format</h3>
					<ul className="space-y-2 text-sm text-gray-700">
						<li className="flex items-center">
							<svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
							</svg>
							{examQuestions} randomly selected questions from {totalQuestions} available
						</li>
						<li className="flex items-center">
							<svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
							</svg>
							{examTimeMinutes} minutes total time limit
						</li>
						<li className="flex items-center">
							<svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
							</svg>
							No immediate feedback during the exam
						</li>
						<li className="flex items-center">
							<svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
							</svg>
							Detailed results and explanations at the end
						</li>
						<li className="flex items-center">
							<svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
							</svg>
							Navigate between questions freely
						</li>
					</ul>
				</div>
			</div>

			{/* Action Buttons */}
			<div className="flex flex-col sm:flex-row gap-4 justify-center">
				<Link
					to="/exam/start"
					className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 border border-transparent rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl no-underline"
				>
					<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
						<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
					</svg>
					Start Exam Simulation
				</Link>
				
				<Link
					to="/"
					className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 no-underline"
				>
					<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
						<path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
					</svg>
					Back to Practice Mode
				</Link>
			</div>

			{/* Warning */}
			<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
				<div className="flex">
					<svg className="h-5 w-5 text-yellow-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
						<path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
					</svg>
					<div>
						<h3 className="text-sm font-medium text-yellow-800">Important Note</h3>
						<p className="text-sm text-yellow-700 mt-1">
							Once you start the exam simulation, the timer will begin immediately. Make sure you have a quiet environment and {examTimeMinutes} minutes available. You can pause the exam, but the timer will continue running.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
