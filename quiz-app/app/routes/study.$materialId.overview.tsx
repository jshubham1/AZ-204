import type { LoaderFunctionArgs, MetaFunction } from 'react-router';
import { useLoaderData, Link } from 'react-router';
import { getStudyMaterialByTopic } from '~/lib/studyMaterials';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: `${data?.material?.title} - Overview` || 'Study Material Not Found' }];
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

export default function StudyMaterialOverview() {
  const { material } = useLoaderData<typeof loader>();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{material.title}</h1>
            <p className="text-gray-600">{material.description}</p>
          </div>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(material.difficulty)}`}>
            {material.difficulty}
          </span>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{material.estimatedReadTime}</div>
            <div className="text-sm text-gray-600">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{material.sections.length}</div>
            <div className="text-sm text-gray-600">Sections</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{material.learningObjectives.length}</div>
            <div className="text-sm text-gray-600">Objectives</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{material.relatedTopics.length}</div>
            <div className="text-sm text-gray-600">Related Topics</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link
            to={`/study/${material.id}`}
            className="flex-1 bg-blue-600 text-white text-center py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors no-underline"
          >
            Start Studying
          </Link>
          <a
            href={material.officialDocs}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors no-underline"
          >
            Official Docs
          </a>
        </div>
      </div>

      {/* Learning Objectives */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {material.learningObjectives.map((objective: string, index: number) => (
            <div key={index} className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">🎯</span>
              <span className="text-gray-700">{objective}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Prerequisites */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Prerequisites</h2>
        <div className="space-y-2">
          {material.prerequisites.map((prereq: string, index: number) => (
            <div key={index} className="flex items-start">
              <span className="text-orange-600 mr-3 mt-1">📋</span>
              <span className="text-gray-700">{prereq}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
        <div className="space-y-3">
          {material.sections.map((section: any, index: number) => (
            <div key={section.id} className="flex items-center p-3 bg-gray-50 rounded-md">
              <span className="text-gray-500 mr-3 w-8">{index + 1}.</span>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{section.title}</div>
                {section.estimatedReadTime && (
                  <div className="text-sm text-gray-600">{section.estimatedReadTime} min read</div>
                )}
              </div>
              <span className="text-blue-600">📄</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Topics Covered</h2>
        <div className="flex flex-wrap gap-2">
          {material.tags.map((tag: string) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related Topics */}
      {material.relatedTopics.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Related Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {material.relatedTopics.map((topic: string) => (
              <Link
                key={topic}
                to={`/study/${topic.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors no-underline"
              >
                <span className="mr-2">🔗</span>
                <span className="text-gray-700">{topic}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        <Link
          to="/study"
          className="px-6 py-3 bg-gray-600 text-white rounded-md font-medium hover:bg-gray-700 transition-colors no-underline"
        >
          ← Back to Study Materials
        </Link>
        <Link
          to={`/study/${material.id}`}
          className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors no-underline"
        >
          Start Studying →
        </Link>
      </div>
    </div>
  );
}
