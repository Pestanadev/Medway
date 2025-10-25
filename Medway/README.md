# Medway Project Documentation

## Overview
Medway is a React-based project built with Vite, featuring modern development tools and optimizations.

## Tech Stack
- **React**: Frontend library for building user interfaces
- **Vite**: Next-generation frontend tooling
- **ESLint**: Code quality and style checking

## Available Plugin Configurations
Two official plugins are currently supported:
1. `@vitejs/plugin-react`
    - Uses Babel/oxc for Fast Refresh
    - Supports rolldown-vite integration
2. `@vitejs/plugin-react-swc`
    - Utilizes SWC for Fast Refresh
    - Optimized for performance

## Development Notes
- React Compiler is not enabled by default
- HMR (Hot Module Replacement) is configured
- Basic ESLint rules are included

## TypeScript Support
- TypeScript integration available
- Type-aware lint rules recommended for production
- See the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for setup

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

## Additional Resources
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [ESLint Configuration Guide](https://eslint.org/docs/user-guide/configuring)
