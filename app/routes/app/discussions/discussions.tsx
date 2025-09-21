import type { Route } from "./+types/discussions";
import { useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router';
import { paths } from '~/config/paths';

export function loader() {
  // This would typically fetch discussions from an API
  return {
    discussions: [
      { id: '1', title: 'Welcome to our platform!', author: 'Admin', replies: 5, lastActivity: '2 hours ago' },
      { id: '2', title: 'Feature requests', author: 'User123', replies: 12, lastActivity: '4 hours ago' },
      { id: '3', title: 'Bug reports', author: 'Developer', replies: 3, lastActivity: '1 day ago' },
    ]
  };
}

export default function Discussions() {
  const queryClient = useQueryClient();
  
  // In a real app, you'd get this data from the loader
  const discussions = [
    { id: '1', title: 'Welcome to our platform!', author: 'Admin', replies: 5, lastActivity: '2 hours ago' },
    { id: '2', title: 'Feature requests', author: 'User123', replies: 12, lastActivity: '4 hours ago' },
    { id: '3', title: 'Bug reports', author: 'Developer', replies: 3, lastActivity: '1 day ago' },
  ];

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Discussions</h1>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            New Discussion
          </button>
        </div>
        
        <div className="mt-6">
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {discussions.map((discussion) => (
                <li key={discussion.id}>
                  <Link
                    to={paths.app.discussion.getHref(discussion.id)}
                    className="block hover:bg-gray-50 px-4 py-4 sm:px-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <p className="text-sm font-medium text-indigo-600 truncate">
                          {discussion.title}
                        </p>
                      </div>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {discussion.replies} replies
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          By {discussion.author}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <p>Last activity {discussion.lastActivity}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
