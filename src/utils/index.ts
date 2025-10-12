// Shared utility functions used across the entire application
// Add your utility functions here

export function formatDate(date: Date): string {
  return date.toLocaleDateString();
}

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Add more utility functions as needed...
