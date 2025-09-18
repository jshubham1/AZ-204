export interface StudyMaterialSection {
  id: string;
  title: string;
  content: string;
  type: 'content' | 'video' | 'interactive' | 'quiz';
  estimatedReadTime?: number;
}

export interface StudyMaterial {
  id: string;
  topic: string;
  title: string;
  description: string;
  estimatedReadTime: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  lastUpdated: string;
  sections: StudyMaterialSection[];
  tags: string[];
  prerequisites: string[];
  learningObjectives: string[];
  relatedTopics: string[];
  officialDocs: string;
  userNotes: string;
}

export interface UserProgress {
  materialId: string;
  completedSections: string[];
  bookmarked: boolean;
  notes: string;
  lastAccessed: string;
  timeSpent: number; // in minutes
}
