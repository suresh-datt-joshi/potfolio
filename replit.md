# Portfolio Website - Suresh Datt Joshi (Enhanced)

## Overview
This is an enhanced React-based portfolio website for Suresh Datt Joshi, a Full-Stack Developer & DevOps Enthusiast. The website features modern animations, theme switching, and comprehensive sections showcasing skills, projects, education, certificates, testimonials, and contact information.

## Tech Stack
- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Styling**: Tailwind CSS 3.4.0 (with dark mode support)
- **Animations**: Framer Motion 12.23.12
- **Icons**: Lucide React 0.303.0
- **State Management**: React Context (Theme)

## Project Structure
```
portfolio-website/
├── public/                    # Static assets
│   ├── images/               # Project screenshots
│   ├── profile-picture.jpeg
│   └── suresh_resume.pdf
├── src/
│   ├── assets/               # Certificates and static files
│   ├── components/
│   │   ├── common/          # Reusable components (Header, Footer)
│   │   ├── home/            # Section components (enhanced versions)
│   │   ├── LoadingScreen.jsx
│   │   ├── ParticleBackground.jsx
│   │   └── SEO.jsx
│   ├── context/
│   │   └── ThemeContext.jsx  # Theme management
│   ├── AppEnhanced.jsx       # Main enhanced app
│   └── main.jsx              # Entry point
└── package.json
```

## Development
- **Dev Server**: Running on port 5000
- **Command**: `npm run dev` (from portfolio-website directory)
- **Environment**: Configured for Replit with allowedHosts: true
- **Hot Reload**: Vite HMR enabled

## Key Features

### 🎨 Visual Enhancements
- ✅ **Theme Switcher**: Light/Dark mode with localStorage persistence
- ✅ **Particle Background**: Canvas-based animated particle system
- ✅ **Loading Screen**: Animated progress bar on initial load
- ✅ **Smooth Animations**: Framer Motion throughout with stagger effects
- ✅ **Hover Effects**: Interactive micro-animations on cards and buttons

### ⚡ Functionality Upgrades
- ✅ **Smooth Scrolling**: Enhanced navigation with scroll-to-section
- ✅ **Active Section Highlighting**: Dynamic header state based on scroll position
- ✅ **Project Filters**: Filter projects by category (Full Stack, Frontend)
- ✅ **Contact Form**: Validated form with mailto integration
- ✅ **Testimonials Carousel**: Sliding testimonials with navigation

### 📊 Content Additions
- ✅ **Statistics Section**: Animated counters (50+ projects, 3+ years experience)
- ✅ **Enhanced Skills**: Progress bars with proficiency percentages
- ✅ **Tech Stack Badges**: Visual tags for each project's technologies
- ✅ **Live Demo Links**: Direct links to project demos and GitHub repos

### 🚀 Performance & SEO
- ✅ **SEO Meta Tags**: Open Graph and Twitter Card support
- ✅ **Lazy Loading**: Images load on scroll for better performance
- ✅ **Accessibility**: ARIA labels and keyboard navigation support
- ✅ **IntersectionObserver**: Efficient scroll-based animations

## Sections
1. **Home** - Hero section with animated introduction
2. **Statistics** - Animated achievement counters
3. **About** - Personal background and story
4. **Skills** - Technical skills with progress bars
5. **Projects** - Filterable project showcase with badges
6. **Education** - Academic background
7. **Certificates** - Professional certifications
8. **Testimonials** - Carousel of recommendations
9. **Contact** - Form with validation

## Deployment
- **Type**: Autoscale (stateless website)
- **Build Command**: `npm run build --prefix portfolio-website`
- **Run Command**: `npx vite preview --host 0.0.0.0 --port 5000 --strictPort`
- **Port**: 5000 (configured for production)

## Setup Status
✅ Node.js 20 installed
✅ Dependencies installed
✅ Vite configured for Replit (allowedHosts: true)
✅ Tailwind dark mode enabled
✅ Theme context with localStorage
✅ Workflow configured and running
✅ Deployment configuration set
✅ All enhancements implemented and tested

## Recent Updates (November 2025)
- Implemented comprehensive portfolio enhancements
- Added theme switching system (light/dark modes)
- Created particle background animation
- Built loading screen with progress indicator
- Enhanced all major sections with animations
- Added testimonials carousel
- Improved contact form with validation
- Optimized images (moved to public folder)
- Added SEO meta tags for better discoverability
