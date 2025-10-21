import { Link, Outlet } from 'react-router-dom';

export default function AppRoot() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* App header/navigation can go here */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-semibold text-gray-900 hover:text-gray-700">App</Link>
            <nav className="flex space-x-4">
              <Link to="/app/dashboard" className="text-gray-700 hover:text-gray-900">Dashboard</Link>
            </nav>
          </div>
        </div>
      </header>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Application Error</h1>
        <p className="text-gray-600 mb-4">Something went wrong in the app.</p>
        <pre className="text-sm text-gray-500 bg-gray-100 p-4 rounded">
          {error.message}
        </pre>
      </div>
    </div>
  );
}
