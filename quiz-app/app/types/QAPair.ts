export interface QAPair {
	id: string;
	question: string;
	hasCode: boolean;
	options: string[];
	answerIndexes: number[];
	answer: string;
	topic: string;
	// New optional overall rationale (distinct from per-option explanations)
	rationale?: string;
	// Per option explanations aligned by index
	optionExplanations?: string[];
	// Reference links for further reading
	references?: string[];
	// Indicates if answer was adjusted during curation
	correctnessReview?: 'original' | 'adjusted';
	// ISO timestamp when generated / last updated
	updatedAt?: string;
}
