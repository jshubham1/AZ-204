# Project Structure

This document describes the optimized folder structure of the AZ-204 Quiz App.

## Root Directory

```
quiz-app/
├── Makefile                    # Build automation and development commands
├── package.json                # Node.js dependencies and scripts
├── package-lock.json           # Locked dependency versions
├── README.md                   # Project documentation
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite build configuration
├── react-router.config.ts      # React Router configuration
├── biome.json                  # Biome linter/formatter configuration
├── postcss.config.mjs          # PostCSS configuration
├── .editorconfig               # Editor configuration
├── .prettierrc.json            # Prettier configuration
├── .prettierignore             # Prettier ignore patterns
├── .gitignore                  # Git ignore patterns
├── env.d.ts                    # Environment type definitions
└── global.d.ts                 # Global type definitions
```

## Application Structure

```
app/                            # Main application source code
├── components/                 # Reusable React components
│   ├── AnswerOptions.tsx       # Quiz answer options component
│   ├── Button.tsx              # Button components
│   ├── CodeEditor.tsx          # Code editor component
│   ├── Input.tsx               # Input components
│   ├── Markdown.tsx            # Markdown renderer
│   ├── RichMarkdown.tsx        # Enhanced markdown renderer
│   └── StatsBar.tsx            # Statistics bar component
├── lib/                        # Utility libraries and helpers
│   ├── ghcolors.ts             # GitHub color schemes
│   ├── languageServer.ts       # Language server utilities
│   ├── qa.ts                   # Question and answer utilities
│   └── studyMaterials.ts       # Study materials utilities
├── routes/                     # Route components
│   ├── _index.tsx              # Home page route
│   ├── exam._index.tsx         # Exam mode index
│   ├── exam.results.tsx        # Exam results page
│   ├── exam.start.tsx          # Exam start page
│   ├── questions.ts            # Questions API route
│   ├── report.ts               # Report API route
│   ├── study._index.tsx        # Study mode index
│   ├── study.$materialId.overview.tsx  # Study material overview
│   ├── study.$materialId.tsx   # Study material detail
│   ├── topics._index.tsx       # Topics index
│   └── topics.$name.tsx        # Topic detail page
├── styles/                     # Stylesheets
│   └── study-materials.css     # Study materials specific styles
├── types/                      # TypeScript type definitions
│   ├── QAPair.ts               # Question and answer pair types
│   └── StudyMaterial.ts        # Study material types
├── db.ts                       # Database configuration
├── entry.client.tsx            # Client-side entry point
├── entry.server.tsx            # Server-side entry point
├── root.tsx                    # Root application component
├── routes.ts                   # Route definitions
├── session.ts                  # Session management
└── tailwind.css                # Tailwind CSS styles
```

## Tools and Scripts

```
tools/                          # Development tools and utilities
├── scripts/                    # Build and development scripts
│   ├── seed.mjs                # Database seeding script
│   └── convertMarkdownToStudyMaterials.mjs  # Study material converter
└── (future tools)              # Additional development tools
```

## Static Assets

```
public/                         # Static assets served directly
├── favicon.ico                 # Main favicon
├── favicon-16x16.png           # 16x16 favicon
├── favicon-32x32.png           # 32x32 favicon
├── apple-touch-icon.png        # Apple touch icon
├── android-chrome-192x192.png  # Android chrome icon (192x192)
├── android-chrome-512x512.png  # Android chrome icon (512x512)
└── site.webmanifest            # Web app manifest
```

## Build Output

```
build/                          # Production build output (generated)
├── client/                     # Client-side assets
├── server/                     # Server-side bundles
└── static/                     # Static assets
```

## Documentation

```
docs/                           # Project documentation
├── README.md                   # Generated documentation
└── (future docs)               # Additional documentation files
```

## Hidden/Config Directories

```
.react-router/                  # React Router build cache
.vscode/                        # VS Code configuration
node_modules/                   # Node.js dependencies
```

## Key Improvements

### 1. **Organized Tools Directory**
- Centralized all development scripts in `tools/scripts/`
- Clear separation between application code and development tools
- Easy to extend with additional tooling

### 2. **Build Automation**
- Comprehensive Makefile with color-coded output
- Logical grouping of commands (development, production, maintenance)
- Self-documenting help system

### 3. **Clear Separation of Concerns**
- Application code in `app/`
- Static assets in `public/`
- Build output in `build/`
- Documentation in `docs/`
- Tools in `tools/`

### 4. **Improved Maintainability**
- Consistent naming conventions
- Logical file organization
- Clear dependency flow
- Easy navigation

### 5. **Development Workflow**
- Streamlined development commands
- Automated quality checks
- Easy setup and teardown processes
- Comprehensive maintenance tasks

## Usage Examples

```bash
# Quick start development
make work

# Production deployment check
make deploy-check

# Code quality maintenance
make pre-commit

# Complete maintenance cycle
make maintenance

# Get help
make help
```

This structure promotes better organization, easier maintenance, and improved developer experience while maintaining the existing functionality of the quiz application.
