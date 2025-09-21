import type { ReactNode } from 'react';
import type { Route } from "./+types/root";
import { Outlet, Link } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';
import { ProtectedRoute } from '~/lib/auth';
import { paths } from '~/config/paths';

export function loader() {
  return null;
}

export default function AppRoot() {
  const queryClient = useQueryClient();
  
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold">My App</h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    to={paths.app.dashboard.path}
                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to={paths.app.discussions.path}
                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm"
                  >
                    Discussions
                  </Link>
                  <Link
                    to={paths.app.users.path}
                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm"
                  >
                    Users
                  </Link>
                  <Link
                    to={paths.app.profile.path}
                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm"
                  >
                    Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </ProtectedRoute>
  );
}

export function ErrorBoundary() {
  // In React Router v6/v7, error boundaries receive error via useRouteError hook
  // This is a simplified version - you can enhance it with proper error handling
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h1>
        <p className="text-gray-600 mb-4">An unexpected error occurred.</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Reload page
        </button>
      </div>
    </div>
  );
}
