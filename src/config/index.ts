// Global configuration and environment variables
// Add your app-wide configuration here

export const config = {
  app: {
    name: "React Starter Template",
    version: "1.0.0",
  },
  api: {
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:3001",
    timeout: import.meta.env.VITE_API_TIMEOUT || 10000,
  },
} as const;

// Add more configuration as needed...
