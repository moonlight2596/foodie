# foodie

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Information

Title: Initial Setup - FoodDrop Food Delivery Application

Description:
This PR establishes the foundational structure for the FoodDrop food delivery application using Vue 3, TypeScript, and Tailwind CSS. The initial setup includes:

Core Features:
- Homepage with animated landing content
- Service card components with ripple effect on click
- Basic routing setup with Home and Login pages
- Navigation bar with responsive design

Technical Implementation:
1. Vue 3 Setup:
   - TypeScript integration
   - Vue Router configuration
   - Component architecture established

2. UI/UX:
   - Responsive design using Tailwind CSS
   - Custom animations for fade and slide effects
   - Dark theme with gradient background
   - Interactive service cards with hover effects

3. Component Structure:
   - HomePage.vue: Main landing page
   - NavBar.vue: Navigation component
   - ServiceCard.vue: Reusable card component
   - LoginPage.vue: Authentication page (placeholder)

4. Styling:
   - Tailwind CSS for utility-first styling
   - Custom animations defined in scoped styles
   - Consistent dark theme with brand colors

Next Steps:
- Implement authentication flow
- Add actual service integration
- Expand routing for additional pages
- Add state management
- Implement actual service card functionality

Testing:
- Basic e2e test setup with Playwright
- Component test setup with Vitest

This PR serves as the foundation for future feature implementations and establishes the core architectural patterns we'll follow throughout the project.