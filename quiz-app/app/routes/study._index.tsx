import { useState } from 'react';
import type { LoaderFunctionArgs, MetaFunction } from 'react-router';
import { useLoaderData, Link, useSearchParams } from 'react-router';
import { getAllStudyMaterials, searchStudyMaterials } from '~/lib/studyMaterials';
import type { StudyMaterial } from '~/types/StudyMaterial';

export const meta: MetaFunction = () => {
  return [{ title: 'AZ-204 Study Materials' }];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get('search');
  
  const materials = searchQuery 
    ? searchStudyMaterials(searchQuery)
    : getAllStudyMaterials();
    
  return { materials, searchQuery };
};

export default function StudyMaterials() {
  const { materials, searchQuery } = useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('');

  const filteredMaterials = materials.filter((material: StudyMaterial) => {
    const difficultyMatch = !selectedDifficulty || material.difficulty === selectedDifficulty;
    const tagMatch = !selectedTag || material.tags.includes(selectedTag);
    return difficultyMatch && tagMatch;
  });

  const allTags = Array.from(new Set(materials.flatMap((m: StudyMaterial) => m.tags))).sort();
  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

  const handleSearch = (query: string) => {
    if (query) {
      setSearchParams({ search: query });
    } else {
      setSearchParams({});
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          AZ-204 Study Materials
        </h1>
        <p className="text-gray-600">
          Comprehensive study resources for Azure Developer certification
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Search Materials
            </label>
            <input
              type="text"
              id="search"
              defaultValue={searchQuery || ''}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search by title, description, or tags..."
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Difficulty Filter */}
          <div className="lg:w-48">
            <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-2">
              Difficulty
            </label>
            <select
              id="difficulty"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Levels</option>
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>

          {/* Tag Filter */}
          <div className="lg:w-48">
            <label htmlFor="tag" className="block text-sm font-medium text-gray-700 mb-2">
              Topic
            </label>
            <select
              id="tag"
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Topics</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Clear Filters */}
        {(selectedDifficulty || selectedTag || searchQuery) && (
          <div className="mt-4">
            <button
              onClick={() => {
                setSelectedDifficulty('');
                setSelectedTag('');
                setSearchParams({});
              }}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Results Summary */}
      <div className="text-sm text-gray-600">
        Showing {filteredMaterials.length} of {materials.length} study materials
      </div>

      {/* Study Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map((material: StudyMaterial) => (
          <div key={material.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {material.title}
                </h3>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(material.difficulty)}`}>
                  {material.difficulty}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {material.description}
              </p>

              {/* Metadata */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">📖</span>
                  {material.estimatedReadTime} min read
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">📚</span>
                  {material.sections.length} sections
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">📅</span>
                  Updated {new Date(material.lastUpdated).toLocaleDateString()}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {material.tags.slice(0, 3).map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {tag}
                  </span>
                ))}
                {material.tags.length > 3 && (
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600">
                    +{material.tags.length - 3} more
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Link
                  to={`/study/${material.id}`}
                  className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors no-underline"
                >
                  Study Now
                </Link>
                <Link
                  to={`/study/${material.id}/overview`}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors no-underline"
                >
                  Preview
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredMaterials.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No study materials found</h3>
          <p className="text-gray-500">
            Try adjusting your search terms or filters to find what you're looking for.
          </p>
        </div>
      )}

      {/* Back to Quiz */}
      <div className="text-center pt-8">
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-medium no-underline"
        >
          ← Back to Quiz
        </Link>
      </div>
    </div>
  );
}
