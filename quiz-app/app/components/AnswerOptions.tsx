import clsx from 'clsx';
import type { ChangeEventHandler, Dispatch, FC, SetStateAction } from 'react';
import { InputStyle } from '~/components/Input';
import { Markdown } from '~/components/Markdown';

interface AnswerOptionsProps {
	name: string;
	options: string[];
	checkedValues: number[];
	setCheckedValues: Dispatch<SetStateAction<number[]>>;
	showAnswer: boolean;
	answerIndexes: number[];
	disabled?: boolean;
	optionExplanations?: string[];
	showRationales?: boolean;
}

export const AnswerOptions: FC<AnswerOptionsProps> = ({
	name,
	options,
	checkedValues,
	setCheckedValues,
	showAnswer,
	answerIndexes,
	disabled,
	optionExplanations,
	showRationales,
}) => {
	const handleChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
		const { checked, value, type } = event.target;

		const index = Number.parseInt(value, 10);

		if (type === 'checkbox') {
			if (checked) {
				setCheckedValues((prev: number[]) => [...prev, index]);
			} else {
				setCheckedValues((prev: number[]) => prev.filter((v: number) => v !== index));
			}
		} else if (type === 'radio') {
			if (checked) {
				setCheckedValues([index]);
			}
		}
	};

	return (
		<div className="space-y-3 my-6">
			{options.map((option: string, index: number) => {
				const isCorrect = answerIndexes.includes(index);
				const isSelected = checkedValues.includes(index);
				const showExplanation =
					(showAnswer || showRationales) &&
					optionExplanations &&
					optionExplanations[index] &&
					optionExplanations[index]?.trim().length;
				
				return (
					<div key={`${name}-${index}`} className="space-y-2">
						<label
							className={clsx(
								'group relative flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all duration-200',
								'hover:shadow-md hover:border-indigo-300',
								// Only show correct/incorrect styling when answers are revealed
								showAnswer && isCorrect
									? 'border-green-400 bg-green-50'
									: showAnswer && isSelected && !isCorrect
										? 'border-red-400 bg-red-50'
									: isSelected && !showAnswer
										? 'border-indigo-400 bg-indigo-50'
									: 'border-gray-200 bg-white hover:bg-gray-50',
								disabled && 'cursor-not-allowed opacity-60'
							)}
						>
							<input
								type={answerIndexes.length < 2 ? 'radio' : 'checkbox'}
								checked={isSelected}
								onChange={handleChange}
								className={clsx(
									'mt-0.5 h-5 w-5 flex-shrink-0 transition-colors',
									answerIndexes.length < 2 
										? 'text-indigo-600 border-gray-300 focus:ring-indigo-500' 
										: 'text-indigo-600 border-gray-300 rounded focus:ring-indigo-500',
									// Only show correct/incorrect colors when answers are revealed
									showAnswer && isCorrect
										? 'border-green-500 text-green-600 focus:ring-green-500'
										: showAnswer && isSelected && !isCorrect
											? 'border-red-500 text-red-600 focus:ring-red-500'
											: 'border-gray-300 text-indigo-600 focus:ring-indigo-500'
								)}
								value={index}
								name={name}
								disabled={disabled}
							/>
							<div className="flex-1 min-w-0">
								<div className={clsx(
									'text-sm leading-relaxed',
									showAnswer && isCorrect ? 'text-green-800' : 'text-gray-900'
								)}>
									<Markdown
										components={{
											p({ className, children, ...props }: any) {
												return (
													<p className={clsx(className, 'my-0 leading-relaxed')} {...props}>
														{children}
													</p>
												);
											},
										}}
									>
										{option}
									</Markdown>
								</div>
							</div>
							{showAnswer && (
								<div className="flex-shrink-0">
									{isCorrect ? (
										<div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white">
											<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
											</svg>
										</div>
									) : (
										<div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-gray-600">
											<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
											</svg>
										</div>
									)}
								</div>
							)}
						</label>
						{showExplanation && (
							<div
								className={clsx(
									'ml-9 rounded-lg border-l-4 px-4 py-3 text-sm',
									isCorrect
										? 'border-green-400 bg-green-50 text-green-800'
										: 'border-red-400 bg-red-50 text-red-800',
								)}
							>
								<Markdown>{optionExplanations![index]}</Markdown>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};
