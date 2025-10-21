import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { paths } from '~/config/paths';

import AppRoot from './routes/app/root';

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.home.path,
      lazy: async () => {
        const { default: Component } = await import('./routes/landing');
        return { Component };
      },
    },
    {
      path: paths.app.root.path,
      element: <AppRoot />,
      children: [
        {
          path: paths.app.dashboard.path,
          lazy: async () => {
            const { default: Component } = await import('./routes/app/dashboard');
            return { Component };
          },
        },
      ],
    },
    {
      path: '*',
      lazy: async () => {
        const { default: Component } = await import('./routes/not-found');
        return { Component };
      },
    },
  ]);

export const AppRouter = () => {
  const router = useMemo(() => createAppRouter(), []);

  return <RouterProvider router={router} />;
};