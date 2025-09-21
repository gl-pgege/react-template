import type { Route } from "./+types/not-found";
import { useQueryClient } from '@tanstack/react-query';

export function loader() {
  return null;
}

export default function NotFound() {
  const queryClient = useQueryClient();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Page not found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="space-x-4">
          <a
            href="/"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 inline-block"
          >
            Go back home
          </a>
          <button
            onClick={() => window.history.back()}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
