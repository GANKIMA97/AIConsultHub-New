# AI Consult Hub - Comprehensive Consulting Platform

## Overview

AI Consult Hub is a modern full-stack web application built for a comprehensive consulting firm that specializes in three core areas: IT consulting, business consulting, and international trade services. The platform serves as both a marketing website and a contact management system, designed to showcase services and capture leads from potential clients.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite with hot module replacement for development

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API architecture
- **Data Storage**: Currently in-memory storage with planned PostgreSQL integration via Drizzle ORM

### Component System
- **UI Components**: shadcn/ui component library providing consistent design system
- **Icons**: Lucide React for consistent iconography
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: Built-in accessibility features from Radix UI primitives

## Key Components

### 1. Service Presentation
- **IT Consulting Section**: Web development, AI tools, cybersecurity, cloud computing
- **Business Consulting Section**: Market analysis, digital marketing, finance support
- **International Trade Section**: Product sourcing, proxy purchasing, market entry

### 2. Contact Management System
- **Contact Form**: Structured form with service interest selection
- **Form Validation**: Zod schema validation for data integrity
- **Lead Storage**: Contact information persistence with timestamps

### 3. User Interface Components
- **Hero Section**: Gradient background with animated elements
- **Service Cards**: Interactive service showcases with hover effects
- **FAQ Section**: Collapsible accordion for common questions
- **Responsive Navigation**: Mobile-friendly header with smooth scrolling

## Data Flow

### Contact Form Submission
1. User fills out contact form with name, email, phone, service interest, and message
2. Client-side validation using React Hook Form with Zod resolvers
3. Form data sent to `/api/contacts` endpoint via POST request
4. Server validates data using shared Zod schema
5. Contact stored in memory (with database schema ready for PostgreSQL)
6. Success/error feedback displayed to user via toast notifications

### Service Information Display
1. Static service data rendered from component definitions
2. Interactive elements use React state for animations and user feedback
3. Smooth scrolling navigation between sections
4. Responsive design adapts to different screen sizes

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state and caching
- **UI Components**: Extensive Radix UI component collection via shadcn/ui

### Styling and Design
- **Tailwind CSS**: Utility-first CSS framework
- **Class Variance Authority**: Type-safe variant handling for components
- **Embla Carousel**: Touch-friendly carousel component
- **Lucide React**: Consistent icon library

### Backend Dependencies
- **Express.js**: Web application framework
- **Drizzle ORM**: Type-safe SQL ORM for PostgreSQL
- **Zod**: Runtime type validation and parsing
- **Connect PG Simple**: PostgreSQL session storage (for future use)

### Development Tools
- **Vite**: Fast build tool with HMR
- **TypeScript**: Type safety across the application
- **ESBuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express API server
- **Hot Module Replacement**: Instant feedback during development
- **Environment Variables**: Database URL and other configuration via environment variables

### Production Build
- **Frontend**: Vite builds optimized static assets
- **Backend**: ESBuild bundles server code for Node.js deployment
- **Static Assets**: Served from Express server in production
- **Database**: Ready for PostgreSQL connection via Drizzle ORM

### Database Migration
- **Schema Definition**: Shared TypeScript schema definitions
- **Migration Tool**: Drizzle Kit for database schema management
- **Current State**: In-memory storage with PostgreSQL schema prepared

## Changelog
```
Changelog:
- June 29, 2025. Initial setup
- June 29, 2025. Updated company name formatting from "AI Consult Hub" to "AIConsult Hub" throughout entire website including header, footer, content sections, and SEO meta tags
- June 29, 2025. Implemented comprehensive multilingual functionality with English, Chinese, and French support
- June 29, 2025. Fixed mixed language issues in hero section and throughout website
- June 29, 2025. Added complete translation coverage for all components including FAQ, Why Choose Us, and contact sections
- June 29, 2025. Fixed FAQ questions and answers to be fully translated into Chinese and French, completing comprehensive multilingual functionality
- June 29, 2025. Enhanced language selector UI with flag icons and cleaner dropdown display
- June 29, 2025. Added French language support to Language Support section in contact page
- June 29, 2025. Implemented comprehensive mobile responsiveness across all components with improved layouts, typography, padding, and touch targets for optimal mobile user experience
- June 30, 2025. Enhanced Business Consulting Services section with four new service grids: Customer Support, Project Management, Career Development, and Translation Services
- June 30, 2025. Updated Finance Support service description to include bookkeeping services
- June 30, 2025. Removed three service grids: Operations Optimization, Business Strategy, and Performance Analytics per user request
- June 30, 2025. Changed Translation Services icon from document icon to Network icon (interconnected nodes style) per user specification
- June 30, 2025. Optimized grid layout for 7 business consulting services with responsive design
- July 3, 2025. Updated Cars & Vehicles image in International Trade section from city skyline to proper automotive dealership image showing multiple vehicles
- July 3, 2025. Replaced Cars & Vehicles image with user-provided aerial view of car lot showing hundreds of vehicles in organized parking sections
- July 3, 2025. Updated expertise description from "Years of experience across technology, business, and international trade" to "Specialized knowledge and proven experience across technology, business consulting, and global trade" in all three languages (English, Chinese, French)
- July 3, 2025. Updated "What Our Clients Say" testimonials: replaced testimonial 2 (green) with market analysis/financial advisory feedback and testimonial 3 (yellow) with product sourcing/trade support feedback, maintaining blue/green/yellow color scheme
- July 3, 2025. Removed "Proven Results" bullet point from About section, now displays only three items: Our Mission, Global Reach, and Expert Team
- July 3, 2025. Updated FAQ answers: simplified industries answer, expanded timeline details with specific project durations, updated language support to include French, and enhanced IT consulting differentiator with comprehensive technical expertise list across all three languages
- July 3, 2025. Updated social media: replaced Twitter with X logo, added working social media links (LinkedIn, X/Twitter, Instagram, WhatsApp, WeChat), all links open in new tabs with proper security
- July 3, 2025. Changed IT Consulting icon from laptop to code/programming brackets to better represent development services
- July 3, 2025. Updated contact section social media to match footer: added Instagram as 5th platform, implemented same clickable functionality with proper links, X logo, and WeChat clipboard copy with toast notifications
- July 3, 2025. Updated IT Consulting icons to use code brackets symbol "</>" in both service overview and detailed IT consulting sections for better representation of programming/development services
- July 3, 2025. Implemented WeChat QR code modal popup: replaced clipboard copy functionality with modal displaying QR code, WeChat ID, and scan instructions for both footer and contact sections
- July 3, 2025. Updated X (Twitter) link to https://x.com/GANKIMA_GOLI in both footer and contact sections
- July 7, 2025. Fixed complete translation coverage: added missing translation keys for Data Analysis, Robotics Engineering, Web Development, Expert Team description, and Global Reach footer text across all three languages (English, Chinese, French)
- July 7, 2025. Updated copyright year from 2024 to 2025 in all three languages
- July 7, 2025. Replaced all hardcoded English text in IT consulting and footer sections with proper translation keys to ensure 100% translation coverage when switching languages
- July 7, 2025. Updated FAQ language question answer from "bilingual team" to "multilingual team" across all three languages (English, Chinese, French) to accurately reflect the company's three-language capability
- July 7, 2025. Prepared deployment configuration for Render.com: created render.yaml, Dockerfile, .dockerignore, and deployment guide; updated server to use PORT environment variable for cloud deployment compatibility
- July 7, 2025. Fixed Node.js compatibility issue for Render deployment: created .nvmrc file specifying Node.js 18.20.4, updated render.yaml with explicit build commands to resolve "Could not resolve entry module" error
- July 7, 2025. Prepared custom domain setup for aiconsulthub.com: created domain setup checklist and updated deployment guide with DNS configuration instructions for connecting custom domain to Render deployment
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```