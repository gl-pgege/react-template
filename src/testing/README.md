# Testing

This project uses Vitest and React Testing Library for testing React Router functionality.

## Running Tests

```bash
# Run tests once (preferred)
yarn test:run

# Run tests with UI (optional)
yarn test:ui
```

## Focus: Router Testing

The primary testing focus is ensuring **routing works as expected**. Component-level UI tests are unnecessary - we only test routing behavior.

## Test Files

- `src/app/__tests__/router.test.tsx` - Integration tests for routing behavior

## What's Tested

### Routing Integration  
- Route navigation between pages
- URL matching and lazy loading
- 404 handling for unknown routes
- Layout preservation on app routes
- Navigation link functionality
- Direct URL access to routes

## Testing Utilities

The setup includes:
- `@testing-library/react` for component testing
- `@testing-library/user-event` for user interactions
- `@testing-library/jest-dom` for additional matchers
- `happy-dom` environment for DOM simulation

## Rule: Always Test Routing

When adding new routes or navigation features, **always add corresponding router tests** to verify the routing behavior works correctly.