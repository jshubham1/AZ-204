import { useEffect, useState } from 'react';
import { data, topics } from '~/lib/qa';

interface AnswerStatRecord {
  correct: boolean;
  attempts: number;
  lastAnsweredAt: number;
}

const STORAGE_KEY = 'az204:answers';

function readStats(): Record<string, AnswerStatRecord> {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') as Record<string, AnswerStatRecord>;
  } catch {
    return {};
  }
}

export const StatsBar = () => {
  const [answered, setAnswered] = useState(0);
  const [correct, setCorrect] = useState(0);

  const recalc = () => {
    const stats = Object.values(readStats());
    setAnswered(stats.length);
    setCorrect(stats.filter((s) => s.correct).length);
  };

  const clearStats = () => {
    if (typeof window !== 'undefined') {
      const confirmed = window.confirm('Are you sure you want to clear all answered questions? This cannot be undone.');
      if (confirmed) {
        localStorage.removeItem(STORAGE_KEY);
        recalc();
        window.dispatchEvent(new Event('az204-stats-updated'));
      }
    }
  };

  useEffect(() => {
    recalc();
    const handler = () => recalc();
    window.addEventListener('az204-stats-updated', handler);
    return () => window.removeEventListener('az204-stats-updated', handler);
  }, []);

  const totalQuestions = data.length;
  const totalTopics = topics.length;
  const percent = totalQuestions ? Math.round((correct / totalQuestions) * 100) : 0;

  return (
    <div className="mb-6 rounded-xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50 p-4 shadow-sm">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 mb-3">
        <div className="text-center">
          <div className="text-2xl font-bold text-indigo-600">{totalTopics}</div>
          <div className="text-xs font-medium text-gray-600 uppercase tracking-wide">Topics</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-indigo-600">{totalQuestions}</div>
          <div className="text-xs font-medium text-gray-600 uppercase tracking-wide">Questions</div>
        </div>
        <div className="text-center relative group">
          <div className="text-2xl font-bold text-blue-600">{answered}</div>
          <div className="flex items-center justify-center gap-1">
            <div className="text-xs font-medium text-gray-600 uppercase tracking-wide">Answered</div>
            {answered > 0 && (
              <button
                onClick={clearStats}
                className="ml-1 p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-700 transition-colors duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
                title="Clear all answered questions"
                aria-label="Clear all answered questions"
              >
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">{correct}</div>
          <div className="text-xs font-medium text-gray-600 uppercase tracking-wide">Correct</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">{percent}%</div>
          <div className="text-xs font-medium text-gray-600 uppercase tracking-wide">Score</div>
        </div>
      </div>
      <div className="relative">
        <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500 ease-out" 
            style={{ width: `${percent}%` }} 
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-semibold text-white drop-shadow-sm">
            {answered} / {totalQuestions}
          </span>
        </div>
      </div>
      
      {answered > 0 && (
        <div className="mt-3 text-center">
          <button
            onClick={clearStats}
            className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-red-600 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 hover:border-red-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
            Clear Progress
          </button>
        </div>
      )}
    </div>
  );
};
