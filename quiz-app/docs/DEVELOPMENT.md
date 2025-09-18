# Development Guide

This guide provides comprehensive instructions for developing and maintaining the AZ-204 Quiz App.

## Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Git (for version control)
- Make (for build automation)

### Initial Setup
```bash
# Clone the repository (if not already done)
git clone <repository-url>
cd quiz-app

# Complete project setup
make setup
```

This will:
1. Install all dependencies
2. Seed the database with questions
3. Prepare the development environment

### Start Development
```bash
# Start development server
make dev

# Or use the complete workflow command
make work
```

## Development Workflow

### Daily Development
```bash
# Start a development session
make work              # Installs deps, seeds DB, starts dev server

# Code quality checks
make pre-commit        # Format code and run validation
make check             # Run linting and type checking
make fix               # Format and auto-fix code issues
```

### Common Tasks

#### Database Management
```bash
make seed              # Seed database with questions
make reset-data        # Reset and reseed database
make convert-study-materials  # Convert markdown to study materials
```

#### Code Quality
```bash
make lint              # Run linter
make format            # Format code
make typecheck         # TypeScript type checking
make validate          # Run all quality checks
```

#### Build and Test
```bash
make build             # Production build
make build-clean       # Clean and build
make preview           # Build and start production server
```

#### Maintenance
```bash
make clean             # Clean build artifacts
make clean-all         # Deep clean including node_modules
make update            # Update dependencies
make audit             # Security audit
make maintenance       # Complete maintenance cycle
```

## Project Architecture

### Technology Stack
- **Frontend**: React with TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Code Quality**: Biome (linting/formatting)
- **Database**: SQLite (via better-sqlite3)
- **Markdown**: react-markdown with syntax highlighting

### Key Concepts

#### Component Structure
- **Pages**: Located in `app/routes/`
- **Components**: Reusable UI components in `app/components/`
- **Types**: TypeScript definitions in `app/types/`
- **Utilities**: Helper functions in `app/lib/`

#### Data Flow
1. Questions are loaded from markdown files
2. Seeded into SQLite database via `tools/scripts/seed.mjs`
3. Served through API routes in `app/routes/`
4. Rendered by React components

#### Styling Approach
- Utility-first CSS with Tailwind
- Component-specific styles when needed
- Responsive design with mobile-first approach

## Development Guidelines

### Code Style
- TypeScript for type safety
- Functional components with hooks
- Props interfaces for component contracts
- Descriptive naming conventions

### File Organization
```
app/
├── components/     # Reusable UI components
├── lib/           # Utility functions and helpers
├── routes/        # Page components and API routes
├── styles/        # CSS files
└── types/         # TypeScript type definitions
```

### Component Guidelines
```typescript
// Component template
interface ComponentProps {
  // Define props with types
  title: string;
  isActive?: boolean;
}

export function Component({ title, isActive = false }: ComponentProps) {
  // Component logic
  return (
    <div className="component-class">
      {/* JSX content */}
    </div>
  );
}
```

### API Route Guidelines
```typescript
// Route template
import type { LoaderFunctionArgs } from 'react-router';

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  // Loader logic
  return data;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  // Action logic
  return response;
};
```

## Testing Strategy

### Current Testing
- TypeScript compilation checking
- Linting with Biome
- Code formatting validation

### Future Testing (Recommended)
- Unit tests for utilities and components
- Integration tests for user workflows
- End-to-end tests for critical paths

## Performance Optimization

### Current Optimizations
- React Router code splitting
- Optimized images and assets
- Efficient component re-rendering

### Monitoring
- Build size analysis
- Runtime performance profiling
- Core Web Vitals tracking

## Deployment

### Production Build
```bash
make deploy-check     # Full deployment readiness check
make build           # Create production build
make start           # Start production server
```

### Environment Configuration
- Development: Hot reload, debug info
- Production: Optimized bundles, minified assets

## Troubleshooting

### Common Issues

#### Development Server Won't Start
```bash
make clean-all       # Clean everything
make setup          # Reinstall and setup
```

#### Database Issues
```bash
make reset-data     # Reset database
```

#### Build Failures
```bash
make clean          # Clean build artifacts
make typecheck      # Check for type errors
make lint           # Check for linting errors
```

#### Dependency Issues
```bash
make audit-fix      # Fix security vulnerabilities
make update         # Update dependencies
```

### Getting Help
```bash
make help           # Show all available commands
make info           # Show project information
make status         # Show project status
```

## Contributing

### Before Committing
```bash
make pre-commit     # Format code and run validation
```

### Pull Request Checklist
- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] Documentation updated if needed
- [ ] Changes tested locally

## Advanced Features

### Custom Scripts
Add new scripts to `tools/scripts/` and update the Makefile:

```makefile
.PHONY: my-command
my-command: ## Description of my command
	@echo "$(CYAN)Running my command...$(RESET)"
	$(NODE) $(SCRIPTS_DIR)/my-script.mjs
```

### Database Customization
Modify `tools/scripts/seed.mjs` to:
- Add new question sources
- Change data processing logic
- Modify database schema

### UI Customization
- Modify Tailwind configuration
- Add new components to `app/components/`
- Update styling in `app/styles/`

## Resources

### Documentation
- [React Router v7 Docs](https://reactrouter.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Tools
- [Biome Configuration](https://biomejs.dev/)
- [Vite Configuration](https://vitejs.dev/)
- [Make Documentation](https://www.gnu.org/software/make/manual/)

This guide should be updated as the project evolves and new features are added.
