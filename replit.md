# DigitalBanao - IT Consulting Website

## Overview

DigitalBanao is a modern full-stack web application built as a business website for an IT consulting firm. The application features a React frontend with TypeScript, an Express.js backend, and uses Drizzle ORM for database operations. The project is structured as a monorepo with shared schemas and types between the frontend and backend.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: In-memory storage with fallback to PostgreSQL sessions
- **Development**: Hot reload with custom Vite integration

### Key Design Decisions
1. **Monorepo Structure**: Shared schemas and types between client and server to ensure type safety
2. **Dual Storage System**: Memory storage for development with PostgreSQL for production
3. **Component-Based UI**: Modular design with reusable shadcn/ui components
4. **Server-Side Rendering Ready**: Vite configuration supports SSR patterns
5. **Mobile-First Design**: Responsive layout with Tailwind CSS breakpoints

## Key Components

### Frontend Components
- **Pages**: Home page with multiple sections (Hero, Services, About, Portfolio, Testimonials, Contact)
- **UI Library**: Complete set of accessible UI components based on Radix UI
- **Form Handling**: React Hook Form with Zod validation
- **Responsive Design**: Mobile-first approach with responsive navigation

### Backend Components
- **API Routes**: RESTful endpoints for contact form submissions
- **Storage Layer**: Abstracted storage interface with memory and database implementations
- **Database Schema**: User management and contact submission tables
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Shared Components
- **Schema Definitions**: Drizzle schema with Zod validation
- **Type Definitions**: Shared TypeScript interfaces
- **Database Models**: User and ContactSubmission models

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data validated using Zod schema
   - POST request sent to `/api/contact` endpoint
   - Server validates data and stores in database
   - Success/error response sent back to client
   - Client displays toast notification

2. **Data Persistence**:
   - Development: In-memory storage for fast iteration
   - Production: PostgreSQL database with Drizzle ORM
   - Schema migrations handled by Drizzle Kit

3. **Frontend State Management**:
   - TanStack Query handles API calls and caching
   - Form state managed by React Hook Form
   - UI state handled by React hooks

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **zod**: Schema validation
- **wouter**: Lightweight routing

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied with `db:push`

### Environment Configuration
- **Development**: Uses in-memory storage and Vite dev server
- **Production**: PostgreSQL database with static file serving
- **Database URL**: Required environment variable for PostgreSQL connection

### Deployment Commands
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build
- `npm run start`: Production server
- `npm run db:push`: Apply database schema changes

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 04, 2025. Initial setup