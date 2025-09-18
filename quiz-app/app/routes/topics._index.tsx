import type { MetaFunction } from 'react-router';
import { Link } from 'react-router';

import { InputStyle } from '~/components/Input';
import { topics, getTopicQuestionCounts } from '~/lib/qa';

export const meta: MetaFunction = () => {
	return [{ title: 'Developing Solutions for Microsoft Azure: Topics' }];
};

export default function Index() {
	const questionCounts = getTopicQuestionCounts();
	
	return (
		<div className="space-y-4">
			<div className="text-center mb-6">
				<h1 className="text-2xl font-bold text-gray-900 mb-2">Choose a Topic</h1>
				<p className="text-gray-600">Select a topic to start practicing questions</p>
			</div>
			
			<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
				{topics.map((topic: string) => (
					<Link 
						key={topic} 
						to={`/topics/${topic}`}
						className="group block p-4 rounded-lg border border-gray-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all duration-200 no-underline"
					>
						<div className="flex items-center justify-between">
							<div className="flex-1 min-w-0">
								<h3 className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
									{topic}
								</h3>
							</div>
							<div className="ml-3 flex items-center">
								<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
									{questionCounts[topic] || 0} questions
								</span>
							</div>
						</div>
					</Link>
				))}
			</div>
			
			<div className="text-center pt-6">
				<Link 
					to="/"
					className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors no-underline"
				>
					← Back to Quiz
				</Link>
			</div>
		</div>
	);
}
