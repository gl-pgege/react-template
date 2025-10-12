# 🚀 React Starter Template

A **minimal, feature-based** React starter template that perfectly demonstrates scalable architecture patterns. Built with React 19, TypeScript, shadcn/ui, and React Router v7.

![React](https://img.shields.io/badge/React-19-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-components-blue) ![Vite](https://img.shields.io/badge/Vite-6.0-purple)

## ✨ What Makes This Special

- **🏗️ Perfect Architecture Example**: Follows feature-based patterns exactly as recommended
- **🎨 All shadcn/ui Components**: 52+ components pre-installed and ready to use  
- **📁 Clean Structure**: Empty placeholder folders show exactly where everything goes
- **⚡ Minimal but Complete**: Just one landing page feature to demonstrate the pattern
- **🔍 TypeScript**: Full type safety with proper path aliases

## 🗄️ Project Structure

This template follows the **exact structure recommended** for scalable React applications:

```
src/
├── app/                    # Application layer
│   ├── routes/            # React Router v7 file-based routes
│   │   ├── landing.tsx    # Landing page route
│   │   └── not-found.tsx  # 404 page
│   ├── root.tsx           # Main application component  
│   ├── routes.ts          # Route configuration
│   └── app.css            # Global styles
│
├── assets/                 # Static files (images, fonts, etc.)
├── components/             # Shared components across the app
│   └── ui/                # shadcn/ui component library (52+ components)
├── config/                 # Global configurations and env variables  
├── features/               # Feature-based modules
│   └── landing/           # Landing page feature (example)
│       ├── api/           # Landing-specific API calls
│       ├── assets/        # Landing-specific assets
│       ├── components/    # Landing-specific components
│       │   └── hero-section.tsx
│       ├── hooks/         # Landing-specific hooks
│       ├── stores/        # Landing-specific state
│       ├── types/         # Landing-specific types
│       │   └── index.ts
│       └── utils/         # Landing-specific utilities
│
├── hooks/                  # Shared hooks across the app
│   └── use-mobile.ts      # Mobile breakpoint hook
├── lib/                    # Reusable libraries and configurations
│   └── utils.ts           # Utility functions
├── stores/                 # Global state management
├── testing/                # Test utilities and mocks
├── types/                  # Shared TypeScript types
│   └── index.ts
└── utils/                  # Shared utility functions  
    └── index.ts
```

## 🎯 Architecture Principles Demonstrated

### 1. **Feature-Based Organization**
Each feature is completely self-contained:
- ✅ `landing/` feature shows the complete structure
- ✅ All feature folders present (even if empty) to show where code goes
- ✅ Clear separation between feature-specific and shared code

### 2. **Unidirectional Dependencies** 
```
Shared (components, hooks, lib, types, utils)
    ↓
Features (landing, future features...)  
    ↓
App (routes, root component)
```

### 3. **Import Rules**
- ✅ Features can import from shared modules: `~/components/ui/button`
- ✅ App can import from features: `~/features/landing/components/hero-section`  
- ❌ Features cannot import from other features
- ❌ Shared modules cannot import from features

## 🚀 Quick Start

```bash
# Clone the repository
git clone <your-repo>
cd react-starter-template

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the landing page!

## 📦 What's Included

### Landing Page Feature
The `src/features/landing/` demonstrates the complete feature structure:
- **Components**: `hero-section.tsx` using shadcn/ui components
- **Types**: Landing-specific TypeScript interfaces
- **Empty folders**: Show where API calls, hooks, stores, etc. would go

### All shadcn/ui Components
Import any of the 52+ components:
```tsx
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
// ... and 49+ more components
```

### Shared Infrastructure
- **Config**: Environment variables and app configuration
- **Types**: Shared TypeScript interfaces
- **Utils**: Shared utility functions
- **Hooks**: Shared custom hooks like `use-mobile`

## 🏗️ Adding Your First Feature

Follow this exact pattern to add new features:

### 1. Create Feature Structure
```bash
mkdir -p src/features/my-feature/{api,assets,components,hooks,stores,types,utils}
```

### 2. Add Feature Component
```tsx
// src/features/my-feature/components/my-component.tsx
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My New Feature</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This follows the feature-based architecture!</p>
      </CardContent>
    </Card>
  );
}
```

### 3. Create Route
```tsx
// src/app/routes/my-feature.tsx
import type { Route } from "./+types/my-feature";
import { MyComponent } from "~/features/my-feature/components/my-component";

export function loader() {
  return null;
}

export default function MyFeaturePage() {
  return <MyComponent />;
}
```

### 4. Add to Route Config
```tsx
// src/app/routes.ts
export default [
  index("routes/landing.tsx"),
  route("my-feature", "routes/my-feature.tsx"), // Add this
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
```

## 🎨 Why This Architecture?

### Traditional Flat Structure ❌
```
src/
├── components/     # Everything mixed together
├── pages/         # Routes scattered  
├── utils/         # Utilities everywhere
└── types/         # Types all over
```

### Feature-Based Structure ✅  
```
src/
├── features/
│   ├── auth/      # Everything auth-related
│   ├── dashboard/ # Everything dashboard-related  
│   └── profile/   # Everything profile-related
├── components/    # Only shared UI
└── app/          # Only routing
```

## 📚 Perfect For Learning

This template is **ideal for understanding** scalable React architecture because:

- **🔍 Minimal Complexity**: Just one feature to understand the pattern
- **📁 Complete Structure**: All folders present to show where everything goes
- **🎨 Real Components**: Uses actual shadcn/ui components, not placeholders  
- **📖 Self-Documenting**: README files in empty folders explain their purpose
- **🚀 Ready to Extend**: Add features following the established pattern

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build  
npm run typecheck    # Run TypeScript checks
```

## 🎯 What's Next?

1. **Explore the landing feature** to understand the pattern
2. **Add your own features** following the same structure  
3. **Use shadcn/ui components** for consistent, beautiful UI
4. **Scale confidently** knowing your architecture supports growth

## 📖 Learn More

- [React Router v7](https://reactrouter.com/) - File-based routing
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## 📄 License

MIT License - Use this template for any project!

---

**Perfect starting point** for scalable React applications. This template shows you exactly how to organize code that grows with your project! 🚀