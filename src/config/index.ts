// Global configuration and environment variables
// Add your app-wide configuration here

export const config = {
  app: {
    name: "React Starter Template",
    version: "1.0.0",
  },
  api: {
    baseUrl: "http://localhost:3001",
    timeout: 10000,
  },
} as const;

export { paths } from './paths';
