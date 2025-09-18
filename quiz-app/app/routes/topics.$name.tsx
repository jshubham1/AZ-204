import clsx from 'clsx';
import { type FormEventHandler, useState } from 'react';
import type { LoaderFunctionArgs, MetaFunction } from 'react-router';
import { Form, Link, useLoaderData, useParams } from 'react-router';

import { AnswerOptions } from '~/components/AnswerOptions';
import { Button } from '~/components/Button';
import { TextInput } from '~/components/Input';
import { RichMarkdown } from '~/components/RichMarkdown';
import { getQuestionsByTopic } from '~/lib/qa';

export const loader = async ({ params }: LoaderFunctionArgs) => {
	return getQuestionsByTopic(params.name || '');
};

export const meta: MetaFunction = ({ params }) => {
	return [
		{ title: `Developing Solutions for Microsoft Azure: ${params.name}` },
	];
};

export default function Topic() {
	const questions = useLoaderData<typeof loader>();
	const params = useParams();

	const [index, setIndex] = useState(0);

	const [checkedValues, setCheckedValues] = useState<number[]>([]);
	const [showAnswer, setShowAnswer] = useState(false);
	const [showRationales, setShowRationales] = useState(false);

	const question = index < questions.length ? questions[index] : null;

	const isCorrectlyAnswered =
		question?.answerIndexes &&
		question.answerIndexes.length > 0 &&
		question.answerIndexes.length === checkedValues.length &&
		question.answerIndexes.every((value) => checkedValues.includes(value));

	const buttonColor = showAnswer && isCorrectlyAnswered ? 'green' : 'blue';

	const handleSubmit: FormEventHandler<HTMLFormElement | HTMLButtonElement> = (
		e,
	) => {
		e.preventDefault();
		setCheckedValues([]);
		setShowAnswer(false);
		setShowRationales(false);
		setIndex((index) => index + 1);
		// window.scrollTo(0, 0);
		return false;
	};

	return (
		<Form method="post" onSubmit={handleSubmit}>
			<h2 className="mt-0 text-center">
				<Link to={'/topics'}>← Back to Topics</Link>
			</h2>
			{question ? (
				<>
					<div className="text-2x">
						<span className="font-bold">
							{params.name} ({index + 1} / {questions.length}):{' '}
						</span>
						<RichMarkdown interactive>{question.question}</RichMarkdown>
					</div>
					{question.options && question.options.length > 0 && (
						<AnswerOptions
							name="answers"
							options={question.options}
							checkedValues={checkedValues}
							setCheckedValues={setCheckedValues}
							showAnswer={showAnswer}
							answerIndexes={question.answerIndexes}
							disabled={showAnswer}
							optionExplanations={question.optionExplanations}
							showRationales={showRationales}
						/>
					)}
					{question.answerIndexes && question.answerIndexes.length > 1 && (
						<div className="text-gray-400 text-xs italic">
							Note: This question has more than one correct answer
						</div>
					)}
					{(!question.options || !question.options.length) &&
						!question.hasCode && <TextInput />}

					<div
						className={clsx(
							'mt-4 overflow-hidden transition-opacity duration-500 ease-in-out',
							showAnswer ? 'h-auto opacity-100' : 'h-0 opacity-0',
						)}
					>
						<div className="font-bold">Answer: </div>
						<RichMarkdown>{question.answer}</RichMarkdown>
					</div>
					<div className="mt-12 space-y-4">
						{/* Instructions when no answer is selected */}
						{!showAnswer && checkedValues.length === 0 && question.options && question.options.length > 0 && (
							<div className="text-sm text-gray-500 italic">
								Select an answer option above, then click "Submit Answer" to see if you're correct.
							</div>
						)}
						
						<div className="flex flex-wrap gap-3 justify-between">
							{/* Submit button - only show when answer is selected but not yet submitted */}
							{!showAnswer && checkedValues.length > 0 && (
								<Button
									type="button"
									onClick={() => setShowAnswer(true)}
									bgColor="blue"
								>
									Submit Answer
								</Button>
							)}
							
							{/* Show/Hide Answer button - only show when answer is submitted */}
							{showAnswer && (
								<Button
									type="button"
									onClick={() => setShowAnswer(false)}
									bgColor="green"
								>
									Hide Answer
								</Button>
							)}
							
							<Button
								type="button"
								bgColor={showRationales ? 'green' : 'blue'}
								onClick={() => setShowRationales((v) => !v)}
							>
								{showRationales ? 'Hide' : 'Show'} Rationales
							</Button>
							<Button bgColor={buttonColor} type="submit" onSubmit={handleSubmit}>
								Next
							</Button>
						</div>
					</div>
					{showAnswer && (question.rationale || question.references?.length) && (
						<div className="mt-8 space-y-4 rounded border border-gray-200 bg-gray-50 p-4">
							{question.correctnessReview === 'adjusted' && (
								<span className="inline-block rounded bg-amber-200 px-2 py-0.5 text-xs font-semibold text-amber-900">Reviewed</span>
							)}
							{question.rationale && (
								<div>
									<div className="font-semibold mb-1">Rationale</div>
									<RichMarkdown>{question.rationale}</RichMarkdown>
								</div>
							)}
							{question.references && question.references.length > 0 && (
								<div>
									<div className="font-semibold mb-1">Further Reading</div>
									<ul className="m-0 list-disc pl-5 text-sm">
										{question.references.map((ref) => (
											<li key={ref}><a href={ref} target="_blank" rel="noreferrer" className="text-indigo-600 no-underline hover:underline">{ref}</a></li>
										))}
									</ul>
								</div>
							)}
							{question.updatedAt && (
								<div className="text-right text-[10px] text-gray-400">Updated: {new Date(question.updatedAt).toLocaleDateString()}</div>
							)}
						</div>
					)}
				</>
			) : (
				<div className="text-center text-7xl italic">All done! 🎉</div>
			)}
		</Form>
	);
}
