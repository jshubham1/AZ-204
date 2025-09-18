import { useState, useEffect } from 'react';
import type { LoaderFunctionArgs, MetaFunction } from 'react-router';
import { useLoaderData, Link, useParams } from 'react-router';
import { getStudyMaterialByTopic } from '~/lib/studyMaterials';
import type { StudyMaterial, StudyMaterialSection } from '~/types/StudyMaterial';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data?.material?.title || 'Study Material Not Found' }];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const materialId = params.materialId;
  if (!materialId) {
    throw new Response('Material ID required', { status: 400 });
  }

  const material = getStudyMaterialByTopic(materialId);
  if (!material) {
    throw new Response('Study material not found', { status: 404 });
  }

  return { material };
};

export default function StudyMaterial() {
  const { material } = useLoaderData<typeof loader>();
  const [activeSection, setActiveSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());
  const [userNotes, setUserNotes] = useState('');
  const [timeSpent, setTimeSpent] = useState(0);
  const [startTime] = useState(Date.now());

  // Track time spent
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpent(Math.floor((Date.now() - startTime) / 1000 / 60)); // minutes
    }, 60000);

    return () => clearInterval(interval);
  }, [startTime]);

  // Load user progress from localStorage
  useEffect(() => {
    try {
      const progressData = localStorage.getItem(`az204:study-progress:${material.id}`);
      if (progressData) {
        const progress = JSON.parse(progressData) as any;
        setCompletedSections(new Set(progress.completedSections || []));
        setUserNotes(progress.notes || '');
      }
    } catch (error) {
      console.error('Error loading study progress:', error);
    }
  }, [material.id]);

  // Save user progress to localStorage
  const saveProgress = () => {
    try {
      const progress = {
        materialId: material.id,
        completedSections: Array.from(completedSections),
        notes: userNotes,
        lastAccessed: new Date().toISOString(),
        timeSpent
      };
      localStorage.setItem(`az204:study-progress:${material.id}`, JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving study progress:', error);
    }
  };

  const toggleSectionCompletion = (sectionId: string) => {
    const newCompleted = new Set(completedSections);
    if (newCompleted.has(sectionId)) {
      newCompleted.delete(sectionId);
    } else {
      newCompleted.add(sectionId);
    }
    setCompletedSections(newCompleted);
  };

  const currentSection = material.sections[activeSection];
  const progressPercentage = Math.round((completedSections.size / material.sections.length) * 100);

  // Auto-save progress when notes change
  useEffect(() => {
    const timer = setTimeout(saveProgress, 1000);
    return () => clearTimeout(timer);
  }, [userNotes, completedSections, timeSpent]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar - Table of Contents */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-4">
            {/* Material Info */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">{material.title}</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <div>📖 {material.estimatedReadTime} min read</div>
                <div>📊 {material.difficulty}</div>
                <div>✅ {completedSections.size}/{material.sections.length} completed</div>
                <div>⏱️ {timeSpent} min spent</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>{progressPercentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Table of Contents */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Table of Contents</h3>
              <nav className="space-y-1">
                {material.sections.map((section: StudyMaterialSection, index: number) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(index)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      activeSection === index
                        ? 'bg-blue-100 text-blue-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="mr-2">
                        {completedSections.has(section.id) ? '✅' : '📄'}
                      </span>
                      <span className="flex-1">{section.title}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 space-y-2">
              <Link
                to="/study"
                className="w-full bg-gray-600 text-white text-center py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors no-underline block"
              >
                ← All Materials
              </Link>
              <a
                href={material.officialDocs}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors no-underline block"
              >
                📚 Official Docs
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Section Header */}
            <div className="border-b border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{currentSection.title}</h1>
                  <p className="text-gray-600 mt-1">
                    Section {activeSection + 1} of {material.sections.length}
                  </p>
                </div>
                <button
                  onClick={() => toggleSectionCompletion(currentSection.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    completedSections.has(currentSection.id)
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {completedSections.has(currentSection.id) ? '✅ Completed' : '☐ Mark Complete'}
                </button>
              </div>
            </div>

            {/* Section Content */}
            <div className="p-6">
              <div 
                className="prose prose-lg max-w-none study-material-content"
                dangerouslySetInnerHTML={{ __html: currentSection.content }}
              />
            </div>

            {/* Navigation */}
            <div className="border-t border-gray-200 p-6">
              <div className="flex justify-between">
                <button
                  onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
                  disabled={activeSection === 0}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setActiveSection(Math.min(material.sections.length - 1, activeSection + 1))}
                  disabled={activeSection === material.sections.length - 1}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>

          {/* User Notes */}
          <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Notes</h3>
            <textarea
              value={userNotes}
              onChange={(e) => setUserNotes(e.target.value)}
              placeholder="Add your personal notes about this topic..."
              className="w-full h-32 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="text-xs text-gray-500 mt-2">
              Notes are automatically saved as you type
            </p>
          </div>

          {/* Learning Objectives & Prerequisites */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Learning Objectives */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Objectives</h3>
              <ul className="space-y-2">
                {material.learningObjectives.map((objective: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">🎯</span>
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Prerequisites</h3>
              <ul className="space-y-2">
                {material.prerequisites.map((prereq: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-600 mr-2">📋</span>
                    <span className="text-gray-700">{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Topics */}
          {material.relatedTopics.length > 0 && (
            <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                {material.relatedTopics.map((topic: string) => (
                  <Link
                    key={topic}
                    to={`/study/${topic.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors no-underline"
                  >
                    🔗 {topic}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
