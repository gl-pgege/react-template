// Types specific to the landing feature
// This demonstrates the feature-based type organization

export interface Feature {
  icon: any;
  title: string;
  description: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  features: Feature[];
}

// Add more landing-specific types as needed...
