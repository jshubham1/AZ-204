import { useState, useMemo } from 'react';
import type { MetaFunction } from 'react-router';
import { Link } from 'react-router';

import { InputStyle } from '~/components/Input';
import { topics, getTopicQuestionCounts } from '~/lib/qa';

export const meta: MetaFunction = () => {
	return [{ title: 'Developing Solutions for Microsoft Azure: Topics' }];
};

export default function Index() {
	const questionCounts = getTopicQuestionCounts();
	const [searchTerm, setSearchTerm] = useState('');

	const filteredTopics = useMemo(() => {
		if (!searchTerm.trim()) return topics;
		return topics.filter(topic =>
			topic.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}, [searchTerm]);

	return (
		<div className="space-y-4">
			<div className="text-center mb-6">
				<h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Choose a Topic</h1>
				<p className="text-gray-600 dark:text-gray-400">Select a topic to start practicing questions</p>
			</div>

			{/* Search Input */}
			<div className="max-w-md mx-auto">
				<div className="relative">
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</div>
					<input
						type="text"
						placeholder="Search topics..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className={`${InputStyle} pl-10`}
					/>
				</div>
			</div>

			{/* Results Count */}
			{searchTerm && (
				<div className="text-center text-sm text-gray-600 dark:text-gray-400">
					{filteredTopics.length} of {topics.length} topics
				</div>
			)}

			<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
				{filteredTopics.map((topic: string) => (
					<Link
						key={topic}
						to={`/topics/${topic}`}
						className="group block p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-md transition-all duration-200 no-underline"
					>
						<div className="flex items-center justify-between">
							<div className="flex-1 min-w-0">
								<h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
									{topic}
								</h3>
							</div>
							<div className="ml-3 flex items-center">
								<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
									{questionCounts[topic] || 0} questions
								</span>
							</div>
						</div>
					</Link>
				))}
			</div>

			{/* No Results */}
			{searchTerm && filteredTopics.length === 0 && (
				<div className="text-center py-8">
					<div className="text-gray-500 dark:text-gray-400 mb-2">No topics found</div>
					<button
						onClick={() => setSearchTerm('')}
						className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm underline"
					>
						Clear search
					</button>
				</div>
			)}
			
			<div className="text-center pt-6">
				<Link
					to="/"
					className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors no-underline"
				>
					← Back to Quiz
				</Link>
			</div>
		</div>
	);
}
