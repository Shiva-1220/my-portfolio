# Portfolio Website

## Overview

This is a modern, responsive portfolio website built for Alex Chen, a UI/UX designer. The application showcases design work, skills, and provides a contact form for potential clients. Built with a full-stack architecture using React/TypeScript for the frontend and Express.js for the backend, with PostgreSQL database integration through Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom CSS variables for theming, supporting both light and dark modes
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod schema validation for type-safe form validation
- **Routing**: Wouter for lightweight client-side routing
- **Icons**: Lucide React for consistent iconography

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints for contact form submission and data retrieval
- **Database Integration**: Drizzle ORM for type-safe database operations
- **Development**: Hot module replacement and error overlays for enhanced developer experience
- **Logging**: Custom request/response logging middleware for API monitoring

### Data Storage
- **Database**: PostgreSQL configured through environment variables
- **ORM**: Drizzle ORM with automatic migrations and schema management
- **Schema Definition**: Shared schema definitions between frontend and backend using Zod
- **Backup Storage**: In-memory storage implementation for development/testing scenarios

### Design System
- **Component Library**: Comprehensive UI component system with consistent styling
- **Theme Support**: CSS custom properties for dynamic theming with light/dark mode toggle
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Animations**: CSS-based animations for smooth user interactions
- **Typography**: Consistent typography scale with proper contrast ratios

### Development Workflow
- **Monorepo Structure**: Client, server, and shared code organized in separate directories
- **Type Safety**: End-to-end TypeScript with shared types between frontend and backend
- **Build Process**: Separate build pipelines for client (Vite) and server (esbuild)
- **Development Server**: Integrated development environment with hot reloading

## External Dependencies

### Core Framework Dependencies
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form state management and validation
- **wouter**: Lightweight client-side routing
- **drizzle-orm**: Type-safe database ORM
- **zod**: Runtime type validation and schema definition

### UI and Styling
- **@radix-ui/***: Accessible UI primitives for components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Database and Infrastructure
- **@neondatabase/serverless**: PostgreSQL database driver optimized for serverless
- **drizzle-kit**: Database migration and schema management tools

### Development Tools
- **vite**: Frontend build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment

### Utility Libraries
- **date-fns**: Date manipulation and formatting
- **clsx**: Conditional className utility
- **nanoid**: Unique ID generation
- **embla-carousel-react**: Carousel/slider functionality