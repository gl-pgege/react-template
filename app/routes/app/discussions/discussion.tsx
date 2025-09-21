import type { Route } from "./+types/discussion";
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router';

export function loader({ params }: Route.LoaderArgs) {
  // This would typically fetch the specific discussion from an API
  return {
    discussion: {
      id: params.discussionId,
      title: 'Welcome to our platform!',
      author: 'Admin',
      content: 'Welcome everyone! This is a great place to discuss ideas and share feedback.',
      createdAt: '2 hours ago',
      replies: [
        { id: '1', author: 'User1', content: 'Thanks for the welcome!', createdAt: '1 hour ago' },
        { id: '2', author: 'User2', content: 'Excited to be here!', createdAt: '30 minutes ago' },
      ]
    }
  };
}

export default function Discussion() {
  const { discussionId } = useParams();
  const queryClient = useQueryClient();
  
  // In a real app, you'd get this data from the loader
  const discussion = {
    id: discussionId,
    title: 'Welcome to our platform!',
    author: 'Admin',
    content: 'Welcome everyone! This is a great place to discuss ideas and share feedback.',
    createdAt: '2 hours ago',
    replies: [
      { id: '1', author: 'User1', content: 'Thanks for the welcome!', createdAt: '1 hour ago' },
      { id: '2', author: 'User2', content: 'Excited to be here!', createdAt: '30 minutes ago' },
    ]
  };

  return (
    <div className="py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-3xl font-bold text-gray-900">{discussion.title}</h1>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              By {discussion.author} • {discussion.createdAt}
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <p className="text-gray-900">{discussion.content}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Replies ({discussion.replies.length})
          </h2>
          
          <div className="space-y-4">
            {discussion.replies.map((reply) => (
              <div key={reply.id} className="bg-white shadow rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-gray-900">{reply.author}</span>
                  <span className="text-sm text-gray-500">{reply.createdAt}</span>
                </div>
                <p className="text-gray-700">{reply.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Add a reply</h3>
            <form className="space-y-4">
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Write your reply..."
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Post Reply
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
