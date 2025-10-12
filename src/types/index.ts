// Shared types used across the entire application
// Add your global TypeScript interfaces and types here

export interface BaseEntity {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

// Add more shared types as needed...
