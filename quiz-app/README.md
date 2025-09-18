# AZ-204 Quiz App

A comprehensive quiz application for Microsoft Azure Developer Associate (AZ-204) certification preparation. Built with React, TypeScript, and modern web technologies.

## ✨ Features

- **Interactive Quiz Experience**: Multiple choice questions with instant feedback
- **Topic-Based Learning**: Organized by Azure service categories
- **Exam Simulation**: Timed full exam mode with 54 questions
- **Study Materials**: Comprehensive guides and documentation
- **Progress Tracking**: Local storage of answer history and statistics
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Code Syntax Highlighting**: Support for code examples in questions
- **Markdown Support**: Rich content formatting for questions and explanations

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm package manager
- Make (for build automation)

### Installation & Setup
```bash
# Clone and setup the project
git clone <repository-url>
cd quiz-app

# Complete setup (install dependencies + seed database)
make setup

# Start development server
make dev
```

The application will be available at `http://localhost:5173` (or next available port).

## 📋 Available Commands

### Development
```bash
make dev           # Start development server
make work          # Complete development workflow (install + seed + dev)
make dev-clean     # Clean, seed, and start development
```

### Data Management
```bash
make seed          # Seed database with questions
make reset-data    # Reset and reseed database
make convert-study-materials  # Convert markdown to study materials
```

### Code Quality
```bash
make lint          # Run linter
make format        # Format code
make typecheck     # TypeScript type checking
make check         # Run all quality checks
make fix           # Format and auto-fix issues
make pre-commit    # Run pre-commit checks
```

### Build & Production
```bash
make build         # Production build
make build-clean   # Clean and build
make start         # Start production server
make preview       # Build and start production preview
```

### Maintenance
```bash
make clean         # Clean build artifacts
make clean-all     # Deep clean including node_modules
make update        # Update dependencies
make audit         # Security audit
make maintenance   # Complete maintenance cycle
```

### Information
```bash
make help          # Show all available commands
make info          # Show project information
make status        # Show project status
```

## 📁 Project Structure

```
quiz-app/
├── app/                    # Application source code
│   ├── components/         # Reusable React components
│   ├── lib/               # Utility libraries
│   ├── routes/            # Route components and API endpoints
│   ├── styles/            # Stylesheets
│   └── types/             # TypeScript type definitions
├── tools/                 # Development tools and scripts
│   └── scripts/           # Build and data processing scripts
├── public/                # Static assets
├── build/                 # Production build output (generated)
├── docs/                  # Project documentation
├── Makefile              # Build automation
└── package.json          # Dependencies and scripts
```

## 🛠 Technology Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS with responsive design
- **Build Tool**: Vite for fast development and optimized builds
- **Code Quality**: Biome for linting and formatting
- **Database**: SQLite for question storage
- **Markdown**: react-markdown with syntax highlighting
- **Icons**: Custom SVG icons and components

## 🎯 Usage Guide

### Quiz Features
1. **Topic Selection**: Choose from 30+ Azure service topics
2. **Question Navigation**: Previous/Next navigation with progress tracking
3. **Answer Submission**: Submit answers to reveal correct solutions
4. **Detailed Explanations**: Comprehensive rationales and reference links
5. **Multiple Answer Support**: Questions with multiple correct answers

### Study Mode
- Browse organized study materials by topic
- Comprehensive guides for each Azure service
- Code examples and implementation details

### Exam Mode
- Timed 130-minute exam simulation
- 54 questions covering all AZ-204 domains
- Results summary with performance breakdown

## 🔧 Development

### Local Development
```bash
# Start development with hot reload
make dev

# Run with fresh data
make dev-clean
```

### Adding New Questions
1. Add markdown files to the questions directory
2. Run `make seed` to process and import questions
3. Questions automatically categorized by topic

### Code Quality
The project uses Biome for consistent code formatting and linting:
```bash
make fix           # Auto-format and fix issues
make validate      # Check code quality
```

### Database Management
Questions are stored in SQLite and seeded from markdown files:
```bash
make reset-data    # Reset database with latest questions
make seed          # Reseed without clearing existing data
```

## 📊 Performance

- **Optimized Bundle**: Tree-shaking and code splitting
- **Fast Development**: Vite's hot module replacement
- **Responsive Design**: Mobile-first approach
- **Efficient Rendering**: Optimized React component structure

## 🔒 Security

- Regular dependency audits with `make audit`
- No sensitive data in client-side code
- Content Security Policy headers
- Safe markdown rendering

## 📚 Documentation

- [Development Guide](docs/DEVELOPMENT.md) - Comprehensive development instructions
- [Project Structure](docs/PROJECT_STRUCTURE.md) - Detailed folder organization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `make pre-commit` to ensure code quality
5. Submit a pull request

### Development Workflow
```bash
# Prepare for development
make work

# Make changes...

# Before committing
make pre-commit
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Troubleshooting

### Common Issues

**Development server won't start:**
```bash
make clean-all && make setup
```

**Database issues:**
```bash
make reset-data
```

**Build failures:**
```bash
make clean && make typecheck && make lint
```

### Getting Help
```bash
make help          # Show all commands
make status        # Check project status
make info          # Show environment info
```

## 🏆 Acknowledgments

- Microsoft Azure documentation and learning materials
- Azure community for question feedback and improvements
- Open source libraries and tools that make this project possible

---

**Ready to ace your AZ-204 certification?** Start studying with `make work` and build your Azure development skills! 🚀
