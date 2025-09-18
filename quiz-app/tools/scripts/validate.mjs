#!/usr/bin/env node
// @ts-check
/**
 * Project validation script
 * Checks project structure, dependencies, and configuration
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..', '..');

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

const log = {
  success: (msg) => console.log(`${colors.green}✓ ${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.red}✗ ${msg}${colors.reset}`),
  warning: (msg) => console.log(`${colors.yellow}⚠ ${msg}${colors.reset}`),
  info: (msg) => console.log(`${colors.blue}ℹ ${msg}${colors.reset}`)
};

/**
 * Check if a file or directory exists
 */
async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Check required project structure
 */
async function checkProjectStructure() {
  log.info('Checking project structure...');
  
  const requiredPaths = [
    'app',
    'app/components',
    'app/lib',
    'app/routes',
    'app/types',
    'tools',
    'tools/scripts',
    'public',
    'docs',
    'package.json',
    'tsconfig.json',
    'Makefile'
  ];

  let allGood = true;
  
  for (const reqPath of requiredPaths) {
    const fullPath = path.join(projectRoot, reqPath);
    if (await exists(fullPath)) {
      log.success(`${reqPath} exists`);
    } else {
      log.error(`${reqPath} is missing`);
      allGood = false;
    }
  }
  
  return allGood;
}

/**
 * Check package.json configuration
 */
async function checkPackageJson() {
  log.info('Checking package.json configuration...');
  
  try {
    const packagePath = path.join(projectRoot, 'package.json');
    const packageContent = await fs.readFile(packagePath, 'utf-8');
    const packageJson = JSON.parse(packageContent);
    
    const requiredScripts = [
      'seed',
      'build',
      'dev',
      'start',
      'lint',
      'typecheck'
    ];
    
    let allGood = true;
    
    for (const script of requiredScripts) {
      if (packageJson.scripts[script]) {
        log.success(`Script "${script}" is defined`);
      } else {
        log.error(`Script "${script}" is missing`);
        allGood = false;
      }
    }
    
    // Check if seed script uses correct path
    if (packageJson.scripts.seed && packageJson.scripts.seed.includes('tools/scripts/seed.mjs')) {
      log.success('Seed script uses correct path');
    } else {
      log.error('Seed script path is incorrect');
      allGood = false;
    }
    
    return allGood;
  } catch (error) {
    log.error(`Failed to read package.json: ${error.message}`);
    return false;
  }
}

/**
 * Check TypeScript configuration
 */
async function checkTypeScript() {
  log.info('Checking TypeScript configuration...');
  
  const tsconfigPath = path.join(projectRoot, 'tsconfig.json');
  if (await exists(tsconfigPath)) {
    log.success('tsconfig.json exists');
    return true;
  } else {
    log.error('tsconfig.json is missing');
    return false;
  }
}

/**
 * Check database generation
 */
async function checkDatabase() {
  log.info('Checking database...');
  
  const dbPath = path.join(projectRoot, 'app', 'db.ts');
  if (await exists(dbPath)) {
    log.success('Database file exists');
    
    try {
      const dbContent = await fs.readFile(dbPath, 'utf-8');
      if (dbContent.includes('export const topics') && dbContent.includes('export const qa')) {
        log.success('Database contains required exports');
        return true;
      } else {
        log.error('Database is missing required exports');
        return false;
      }
    } catch (error) {
      log.error(`Failed to read database file: ${error.message}`);
      return false;
    }
  } else {
    log.warning('Database file is missing - run "make seed" to generate it');
    return false;
  }
}

/**
 * Check essential dependencies
 */
async function checkDependencies() {
  log.info('Checking essential dependencies...');
  
  try {
    const packagePath = path.join(projectRoot, 'package.json');
    const packageContent = await fs.readFile(packagePath, 'utf-8');
    const packageJson = JSON.parse(packageContent);
    
    const requiredDeps = [
      'react',
      'react-dom',
      'react-router',
      'clsx'
    ];
    
    const requiredDevDeps = [
      '@react-router/dev',
      '@types/react',
      'typescript'
    ];
    
    let allGood = true;
    
    for (const dep of requiredDeps) {
      if (packageJson.dependencies[dep]) {
        log.success(`Dependency "${dep}" is installed`);
      } else {
        log.error(`Dependency "${dep}" is missing`);
        allGood = false;
      }
    }
    
    for (const dep of requiredDevDeps) {
      if (packageJson.devDependencies[dep]) {
        log.success(`Dev dependency "${dep}" is installed`);
      } else {
        log.error(`Dev dependency "${dep}" is missing`);
        allGood = false;
      }
    }
    
    return allGood;
  } catch (error) {
    log.error(`Failed to check dependencies: ${error.message}`);
    return false;
  }
}

/**
 * Main validation function
 */
async function validate() {
  console.log(`${colors.blue}=== AZ-204 Quiz App Project Validation ===${colors.reset}\n`);
  
  const checks = [
    checkProjectStructure,
    checkPackageJson,
    checkTypeScript,
    checkDependencies,
    checkDatabase
  ];
  
  let allPassed = true;
  
  for (const check of checks) {
    const result = await check();
    allPassed = allPassed && result;
    console.log('');
  }
  
  if (allPassed) {
    log.success('All validation checks passed! 🎉');
    console.log(`\n${colors.green}Project is ready for development.${colors.reset}`);
    console.log(`Run "${colors.blue}make dev${colors.reset}" to start the development server.`);
  } else {
    log.error('Some validation checks failed.');
    console.log(`\n${colors.yellow}Recommended actions:${colors.reset}`);
    console.log(`1. Run "${colors.blue}make clean-all && make setup${colors.reset}" to reset the project`);
    console.log(`2. Check the error messages above for specific issues`);
    console.log(`3. Ensure all required files and dependencies are present`);
  }
  
  process.exit(allPassed ? 0 : 1);
}

// Run validation
validate().catch(error => {
  log.error(`Validation failed: ${error.message}`);
  process.exit(1);
});
