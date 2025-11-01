import type { LoaderFunctionArgs, MetaFunction } from 'react-router';
import { useLoaderData, Link } from 'react-router';
import { getStudyMaterialByTopic } from '~/lib/studyMaterials';

// Comment out meta for SPA mode - will use default meta
// export const meta: MetaFunction<typeof loader> = ({ data }) => {
//   return [{ title: `${data?.material?.title} - Overview` || 'Study Material Not Found' }];
// };

// Comment out loader for SPA mode compatibility
// export const loader = async ({ params }: LoaderFunctionArgs) => {
//   const materialId = params.materialId;
//   if (!materialId) {
//     throw new Response('Material ID required', { status: 400 });
//   }

//   const material = getStudyMaterialByTopic(materialId);
//   if (!material) {
//     throw new Response('Study material not found', { status: 404 });
//   }

//   return { material };
// };

// For SPA mode, we'll need to load data client-side
// For now, create a placeholder component
export default function StudyMaterialOverview() {
  // const { material } = useLoaderData<typeof loader>();
  return (
    <div className="max-w-4xl mx-auto space-y-6 p-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Study Material Overview</h1>
        <p className="text-gray-600">This feature is currently being updated for SPA mode.</p>
        <Link
          to="/study"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors no-underline mt-4"
        >
          ← Back to Study Materials
        </Link>
      </div>
    </div>
  );
}

