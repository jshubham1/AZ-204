# AZ-204 Quiz App Makefile
# ======================

# Variables
NODE := node
NPM := npm
TOOLS_DIR := tools
SCRIPTS_DIR := $(TOOLS_DIR)/scripts
BUILD_DIR := build
DOCS_DIR := docs
APP_DIR := app
PUBLIC_DIR := public

# Colors for output
CYAN := \033[36m
GREEN := \033[32m
YELLOW := \033[33m
RED := \033[31m
RESET := \033[0m

# Default target
.DEFAULT_GOAL := help

# Help target
.PHONY: help
help: ## Show this help message
	@echo "$(CYAN)AZ-204 Quiz App - Available Commands$(RESET)"
	@echo "======================================"
	@awk 'BEGIN {FS = ":.*##"} /^[a-zA-Z_-]+:.*##/ { printf "$(GREEN)%-20s$(RESET) %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

# Setup and Installation
.PHONY: install
install: ## Install dependencies
	@echo "$(CYAN)Installing dependencies...$(RESET)"
	$(NPM) install

.PHONY: setup
setup: install seed ## Complete project setup
	@echo "$(GREEN)Project setup complete!$(RESET)"

# Development
.PHONY: dev
dev: ## Start development server
	@echo "$(CYAN)Starting development server...$(RESET)"
	$(NPM) run dev

.PHONY: dev-clean
dev-clean: clean seed dev ## Clean, seed, and start development server
	@echo "$(GREEN)Clean development environment started!$(RESET)"

# Data Management
.PHONY: seed
seed: ## Seed the database with questions
	@echo "$(CYAN)Seeding database...$(RESET)"
	$(NODE) $(SCRIPTS_DIR)/seed.mjs

.PHONY: convert-study-materials
convert-study-materials: ## Convert markdown to study materials
	@echo "$(CYAN)Converting study materials...$(RESET)"
	$(NODE) $(SCRIPTS_DIR)/convertMarkdownToStudyMaterials.mjs

# Build and Production
.PHONY: build
build: ## Build for production
	@echo "$(CYAN)Building for production...$(RESET)"
	$(NPM) run build

.PHONY: build-clean
build-clean: clean build ## Clean and build for production
	@echo "$(GREEN)Clean production build complete!$(RESET)"

.PHONY: start
start: ## Start production server
	@echo "$(CYAN)Starting production server...$(RESET)"
	$(NPM) run start

.PHONY: preview
preview: build start ## Build and start production server
	@echo "$(GREEN)Production preview started!$(RESET)"

# Code Quality
.PHONY: lint
lint: ## Run linter
	@echo "$(CYAN)Running linter...$(RESET)"
	$(NPM) run lint

.PHONY: format
format: ## Format code
	@echo "$(CYAN)Formatting code...$(RESET)"
	$(NPM) run format

.PHONY: typecheck
typecheck: ## Run TypeScript type checking
	@echo "$(CYAN)Running type check...$(RESET)"
	$(NPM) run typecheck

.PHONY: check
check: ## Run all checks (lint + typecheck)
	@echo "$(CYAN)Running all checks...$(RESET)"
	$(NPM) run check

.PHONY: fix
fix: format lint ## Format and fix code issues
	@echo "$(GREEN)Code formatting and linting complete!$(RESET)"

# Testing and Quality Assurance
.PHONY: validate-project
validate-project: ## Validate project structure and configuration
	@echo "$(CYAN)Validating project...$(RESET)"
	$(NODE) $(SCRIPTS_DIR)/validate.mjs

.PHONY: validate
validate: typecheck lint ## Validate code quality
	@echo "$(GREEN)Code validation complete!$(RESET)"

.PHONY: pre-commit
pre-commit: fix validate validate-project ## Run pre-commit checks
	@echo "$(GREEN)Pre-commit checks passed!$(RESET)"

# Cleanup
.PHONY: clean
clean: ## Clean build artifacts and temporary files
	@echo "$(CYAN)Cleaning build artifacts...$(RESET)"
	rm -rf $(BUILD_DIR)
	rm -rf .react-router
	rm -rf node_modules/.cache
	@echo "$(GREEN)Cleanup complete!$(RESET)"

.PHONY: clean-all
clean-all: clean ## Clean everything including node_modules
	@echo "$(CYAN)Cleaning all artifacts including node_modules...$(RESET)"
	rm -rf node_modules
	rm -rf package-lock.json
	@echo "$(GREEN)Deep cleanup complete!$(RESET)"

# Database and Data
.PHONY: reset-data
reset-data: ## Reset and reseed database
	@echo "$(CYAN)Resetting database...$(RESET)"
	rm -f $(APP_DIR)/quiz.db
	$(MAKE) seed
	@echo "$(GREEN)Database reset complete!$(RESET)"

# Documentation
.PHONY: docs
docs: ## Generate documentation
	@echo "$(CYAN)Generating documentation...$(RESET)"
	@mkdir -p $(DOCS_DIR)
	@echo "# AZ-204 Quiz App Documentation" > $(DOCS_DIR)/README.md
	@echo "" >> $(DOCS_DIR)/README.md
	@echo "## Project Structure" >> $(DOCS_DIR)/README.md
	@echo "" >> $(DOCS_DIR)/README.md
	@echo "- \`app/\` - Application source code" >> $(DOCS_DIR)/README.md
	@echo "- \`tools/\` - Development tools and scripts" >> $(DOCS_DIR)/README.md
	@echo "- \`public/\` - Static assets" >> $(DOCS_DIR)/README.md
	@echo "- \`build/\` - Production build output" >> $(DOCS_DIR)/README.md
	@echo "" >> $(DOCS_DIR)/README.md
	@echo "## Available Commands" >> $(DOCS_DIR)/README.md
	@echo "" >> $(DOCS_DIR)/README.md
	@$(MAKE) help >> $(DOCS_DIR)/README.md
	@echo "$(GREEN)Documentation generated in $(DOCS_DIR)/$(RESET)"

# Deployment Preparation
.PHONY: deploy-check
deploy-check: clean-all install validate build ## Full deployment preparation check
	@echo "$(GREEN)Deployment readiness check complete!$(RESET)"

# Development Workflow
.PHONY: work
work: ## Start a complete development session
	@echo "$(CYAN)Starting development workflow...$(RESET)"
	$(MAKE) install
	$(MAKE) seed
	$(MAKE) dev

# Production Workflow
.PHONY: prod
prod: ## Prepare and start production
	@echo "$(CYAN)Preparing production environment...$(RESET)"
	$(MAKE) build-clean
	$(MAKE) start

# Package Management
.PHONY: update
update: ## Update dependencies
	@echo "$(CYAN)Updating dependencies...$(RESET)"
	$(NPM) update
	@echo "$(GREEN)Dependencies updated!$(RESET)"

.PHONY: audit
audit: ## Run security audit
	@echo "$(CYAN)Running security audit...$(RESET)"
	$(NPM) audit
	@echo "$(GREEN)Security audit complete!$(RESET)"

.PHONY: audit-fix
audit-fix: ## Fix security vulnerabilities
	@echo "$(CYAN)Fixing security vulnerabilities...$(RESET)"
	$(NPM) audit fix
	@echo "$(GREEN)Security fixes applied!$(RESET)"

# Information
.PHONY: info
info: ## Show project information
	@echo "$(CYAN)Project Information$(RESET)"
	@echo "=================="
	@echo "Name: AZ-204 Quiz App"
	@echo "Node Version: $$(node --version)"
	@echo "NPM Version: $$(npm --version)"
	@echo "Project Root: $$(pwd)"
	@echo "Build Directory: $(BUILD_DIR)"
	@echo "Tools Directory: $(TOOLS_DIR)"

.PHONY: status
status: ## Show project status
	@echo "$(CYAN)Project Status$(RESET)"
	@echo "=============="
	@echo "Git Status:"
	@git status --short 2>/dev/null || echo "Not a git repository"
	@echo ""
	@echo "Build Status:"
	@[ -d "$(BUILD_DIR)" ] && echo "$(GREEN)Build directory exists$(RESET)" || echo "$(YELLOW)Build directory missing$(RESET)"
	@echo ""
	@echo "Dependencies:"
	@[ -d "node_modules" ] && echo "$(GREEN)Dependencies installed$(RESET)" || echo "$(RED)Dependencies missing - run 'make install'$(RESET)"

# Advanced Operations
.PHONY: benchmark
benchmark: build ## Run performance benchmark
	@echo "$(CYAN)Running performance benchmark...$(RESET)"
	@echo "$(YELLOW)Benchmark feature not implemented yet$(RESET)"

.PHONY: profile
profile: ## Profile the application
	@echo "$(CYAN)Profiling application...$(RESET)"
	@echo "$(YELLOW)Profiling feature not implemented yet$(RESET)"

# Maintenance
.PHONY: maintenance
maintenance: clean-all install audit-fix update check build ## Full maintenance cycle
	@echo "$(GREEN)Maintenance cycle complete!$(RESET)"
