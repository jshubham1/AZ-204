import fs from 'fs/promises';
import path from 'path';

// Mapping for topic IDs to avoid conflicts and maintain consistency
const topicIdMapping = {
  'API Management': 'api-management',
  'App Configuration': 'app-configuration', 
  'App Service': 'app-service',
  'Application Insights': 'application-insights',
  'Azure Portal': 'azure-portal',
  'AZ CLI': 'az-cli',
  'Blob Storage': 'blob-storage',
  'Compute Solutions': 'compute-solutions',
  'Containers': 'containers',
  'Cosmos DB': 'cosmos-db',
  'CosmoDB': 'cosmos-db', // Handle typo in Learning Path
  'Entra ID': 'entra-id',
  'Event Grid': 'event-grid',
  'Event Hub': 'event-hub',
  'Events': 'events',
  'Functions': 'azure-functions',
  'Graph': 'microsoft-graph',
  'Key Vault': 'key-vault',
  'Managed Identities': 'managed-identities',
  'Message Queues': 'message-queues',
  'Queue Storage': 'queue-storage',
  'Resource Group': 'resource-group',
  'Service Bus': 'service-bus',
  'Shared Access Signatures': 'shared-access-signatures'
};

// Clean and normalize markdown content
function cleanMarkdownContent(content) {
  // Remove excessive whitespace and normalize line endings
  content = content.replace(/\r\n/g, '\n');
  content = content.replace(/\n{3,}/g, '\n\n');
  content = content.replace(/[ \t]+$/gm, ''); // Remove trailing spaces
  
  // Fix common markdown issues
  content = content.replace(/^[ \t]*#(?!#)/gm, '#'); // Fix heading spacing
  content = content.replace(/```(\w+)?\n\n+/g, '```$1\n'); // Fix code block spacing
  content = content.replace(/\n\n+```/g, '\n```'); // Fix code block endings
  
  return content.trim();
}

// Extract clean title from markdown content
function extractCleanTitle(content) {
  // Look for the first h1 header
  const titleMatch = content.match(/^#\s+(.+)$/m);
  if (!titleMatch) return null;
  
  let title = titleMatch[1];
  
  // Remove markdown links but keep the text
  title = title.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  
  // Remove any remaining markdown formatting
  title = title.replace(/\*\*([^*]+)\*\*/g, '$1'); // Bold
  title = title.replace(/\*([^*]+)\*/g, '$1'); // Italic
  title = title.replace(/`([^`]+)`/g, '$1'); // Code
  
  return title.trim();
}

// Convert markdown content to clean HTML with proper link handling
function convertMarkdownToHtml(content) {
  let html = content;
  
  // Handle code blocks first (preserve them exactly)
  const codeBlocks = [];
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
    const index = codeBlocks.length;
    const language = lang || 'text';
    codeBlocks.push(`<pre><code class="language-${language}">${escapeHtml(code.trim())}</code></pre>`);
    return `__CODEBLOCK_${index}__`;
  });
  
  // Handle inline code
  html = html.replace(/`([^`\n]+)`/g, '<code>$1</code>');
  
  // Convert headers (clean up links in titles)
  html = html.replace(/^#{6}\s+(.+)$/gm, (match, title) => {
    const cleanTitle = title.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    return `<h6>${cleanTitle}</h6>`;
  });
  html = html.replace(/^#{5}\s+(.+)$/gm, (match, title) => {
    const cleanTitle = title.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    return `<h5>${cleanTitle}</h5>`;
  });
  html = html.replace(/^#{4}\s+(.+)$/gm, (match, title) => {
    const cleanTitle = title.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    return `<h4>${cleanTitle}</h4>`;
  });
  html = html.replace(/^#{3}\s+(.+)$/gm, (match, title) => {
    const cleanTitle = title.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    return `<h3>${cleanTitle}</h3>`;
  });
  html = html.replace(/^#{2}\s+(.+)$/gm, (match, title) => {
    const cleanTitle = title.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    return `<h2>${cleanTitle}</h2>`;
  });
  html = html.replace(/^#{1}\s+(.+)$/gm, (match, title) => {
    const cleanTitle = title.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    return `<h1>${cleanTitle}</h1>`;
  });
  
  // Convert markdown links to proper HTML links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  
  // Convert bare URLs to links
  html = html.replace(/https?:\/\/[^\s<>"']+/g, (url) => {
    // Don't convert if already in a link
    if (html.indexOf(`href="${url}"`) !== -1) return url;
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });
  
  // Convert bold and italic
  html = html.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*\n]+)\*/g, '<em>$1</em>');
  
  // Convert tables
  html = convertMarkdownTables(html);
  
  // Convert lists (handle properly nested lists)
  const lines = html.split('\n');
  let result = [];
  let inList = false;
  let listType = null;
  let inTable = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Check if we're entering or leaving a table
    if (trimmed.startsWith('<table')) {
      inTable = true;
    } else if (trimmed.startsWith('</table>')) {
      inTable = false;
    }
    
    // Skip list processing if we're inside a table
    if (inTable) {
      result.push(line);
      continue;
    }
    
    // Check for list items
    const unorderedMatch = trimmed.match(/^[-*+]\s+(.+)$/);
    const orderedMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    
    if (unorderedMatch) {
      if (!inList || listType !== 'ul') {
        if (inList) result.push(`</${listType}>`);
        result.push('<ul>');
        listType = 'ul';
        inList = true;
      }
      result.push(`<li>${unorderedMatch[1]}</li>`);
    } else if (orderedMatch) {
      if (!inList || listType !== 'ol') {
        if (inList) result.push(`</${listType}>`);
        result.push('<ol>');
        listType = 'ol';
        inList = true;
      }
      result.push(`<li>${orderedMatch[1]}</li>`);
    } else {
      if (inList) {
        result.push(`</${listType}>`);
        inList = false;
        listType = null;
      }
      if (trimmed) {
        result.push(line);
      } else {
        result.push('');
      }
    }
  }
  
  if (inList) {
    result.push(`</${listType}>`);
  }
  
  html = result.join('\n');
  
  // Convert paragraphs (but avoid wrapping headers, lists, code blocks, and tables)
  html = html.replace(/^(?!<[h|u|o|p|c|t])(?!\s*<\/)([^<\n][^\n]*?)$/gm, (match, p1) => {
    // Don't wrap lines that are part of table structure
    if (match.includes('<th>') || match.includes('<td>') || match.includes('<tr>') || 
        match.includes('</th>') || match.includes('</td>') || match.includes('</tr>') ||
        match.includes('<thead>') || match.includes('<tbody>') || match.includes('</thead>') || match.includes('</tbody>')) {
      return match;
    }
    return `<p>${match}</p>`;
  });
  
  // Clean up empty paragraphs and fix spacing
  html = html.replace(/<p><\/p>/g, '');
  html = html.replace(/<p>\s*<\/p>/g, '');
  html = html.replace(/\n{3,}/g, '\n\n');
  
  // Restore code blocks
  codeBlocks.forEach((block, index) => {
    html = html.replace(`__CODEBLOCK_${index}__`, block);
  });
  
  return html;
}

// Escape HTML special characters
function escapeHtml(text) {
  const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return text.replace(/[&<>"']/g, (char) => htmlEscapes[char]);
}

// Convert markdown tables to HTML tables
function convertMarkdownTables(html) {
  const lines = html.split('\n');
  let result = [];
  let inTable = false;
  let tableRows = [];
  let tableHeaders = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Check if this line looks like a table row (contains | but not just in code)
    const isTableRow = line.includes('|') && !line.startsWith('```') && line.split('|').length >= 3;
    const isSeparatorRow = /^\s*\|?\s*[-:\s\|]+\s*\|?\s*$/.test(line);
    
    if (isTableRow && !isSeparatorRow) {
      if (!inTable) {
        // Starting a new table
        inTable = true;
        tableRows = [];
        tableHeaders = [];
      }
      
      // Parse table row
      const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell !== '');
      
      if (tableRows.length === 0) {
        // This is likely the header row
        tableHeaders = cells;
      }
      
      tableRows.push(cells);
    } else if (isSeparatorRow && inTable) {
      // Skip separator rows (---|---|---)
      continue;
    } else {
      // End of table or non-table line
      if (inTable && tableRows.length > 0) {
        // Convert accumulated table rows to HTML
        let tableHtml = '<table class="table table-striped">\n';
        
        // Add header if we have one
        if (tableHeaders.length > 0 && tableRows.length > 1) {
          tableHtml += '  <thead>\n    <tr>\n';
          tableHeaders.forEach(header => {
            const cleanHeader = header.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                                    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
                                    .replace(/`([^`]+)`/g, '<code>$1</code>');
            tableHtml += `      <th>${cleanHeader}</th>\n`;
          });
          tableHtml += '    </tr>\n  </thead>\n';
          
          // Skip the header row in body
          tableRows = tableRows.slice(1);
        }
        
        // Add body
        if (tableRows.length > 0) {
          tableHtml += '  <tbody>\n';
          tableRows.forEach(row => {
            tableHtml += '    <tr>\n';
            row.forEach(cell => {
              const cleanCell = cell.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                                  .replace(/\*([^*]+)\*/g, '<em>$1</em>')
                                  .replace(/`([^`]+)`/g, '<code>$1</code>')
                                  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
              tableHtml += `      <td>${cleanCell}</td>\n`;
            });
            tableHtml += '    </tr>\n';
          });
          tableHtml += '  </tbody>\n';
        }
        
        tableHtml += '</table>';
        result.push(tableHtml);
        
        // Reset table state
        inTable = false;
        tableRows = [];
        tableHeaders = [];
      }
      
      // Add the non-table line
      if (line.trim()) {
        result.push(line);
      } else {
        result.push('');
      }
    }
  }
  
  // Handle case where file ends with a table
  if (inTable && tableRows.length > 0) {
    let tableHtml = '<table class="table table-striped">\n';
    
    if (tableHeaders.length > 0 && tableRows.length > 1) {
      tableHtml += '  <thead>\n    <tr>\n';
      tableHeaders.forEach(header => {
        const cleanHeader = header.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                                .replace(/\*([^*]+)\*/g, '<em>$1</em>')
                                .replace(/`([^`]+)`/g, '<code>$1</code>');
        tableHtml += `      <th>${cleanHeader}</th>\n`;
      });
      tableHtml += '    </tr>\n  </thead>\n';
      tableRows = tableRows.slice(1);
    }
    
    if (tableRows.length > 0) {
      tableHtml += '  <tbody>\n';
      tableRows.forEach(row => {
        tableHtml += '    <tr>\n';
        row.forEach(cell => {
          const cleanCell = cell.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                            .replace(/\*([^*]+)\*/g, '<em>$1</em>')
                            .replace(/`([^`]+)`/g, '<code>$1</code>')
                            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
          tableHtml += `      <td>${cleanCell}</td>\n`;
        });
        tableHtml += '    </tr>\n';
      });
      tableHtml += '  </tbody>\n';
    }
    
    tableHtml += '</table>';
    result.push(tableHtml);
  }
  
  return result.join('\n');
}

// Enhanced extraction functions with better content parsing
function extractTags(content, title) {
  const tags = new Set();
  
  // Add primary tag from clean title
  const cleanTitle = extractCleanTitle(content) || title;
  const primaryTag = cleanTitle.replace(/Azure\s+/i, '').replace(/Microsoft\s+/i, '').trim();
  if (primaryTag && primaryTag.length > 2) {
    tags.add(primaryTag);
  }
  
  // Extract Azure services and technologies from clean content
  const cleanContent = content.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'); // Remove markdown links
  
  const servicePatterns = [
    /(App Service|Azure Functions|Blob Storage|Cosmos DB|Service Bus|Event Grid|Key Vault|Application Insights|API Management|Event Hub|Queue Storage)/gi,
    /(REST|API|SDK|CLI|PowerShell|ARM|JSON|YAML|Docker|Kubernetes)/gi,
    /(Authentication|Authorization|RBAC|Identity|Security|Monitoring)/gi,
    /(Scaling|Performance|Networking|Database|Storage|Computing)/gi
  ];
  
  servicePatterns.forEach(pattern => {
    const matches = cleanContent.match(pattern);
    if (matches) {
      matches.forEach(match => {
        const cleanTag = match.trim();
        if (cleanTag.length > 2 && cleanTag.length < 25) {
          tags.add(cleanTag);
        }
      });
    }
  });
  
  return Array.from(tags).slice(0, 6);
}

function extractLearningObjectives(content, title) {
  const objectives = [];
  const lines = content.split('\n');
  
  // Look for explicit objective sections
  const objectiveKeywords = /(?:objective|learn|understand|implement|configure|manage|create|deploy|develop|explore|discover)/i;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Check for bullet points that look like objectives
    const bulletMatch = line.match(/^[-*+]\s+(.+)$/);
    const numberedMatch = line.match(/^\d+\.\s+(.+)$/);
    
    if (bulletMatch || numberedMatch) {
      const objective = (bulletMatch ? bulletMatch[1] : numberedMatch[1]).trim();
      
      // Filter for learning-related content
      if (objective.length > 10 && objective.length < 120 && 
          (objectiveKeywords.test(objective) || objectives.length < 3)) {
        objectives.push(objective.replace(/\*\*([^*]+)\*\*/g, '$1')); // Remove bold formatting
      }
    }
  }
  
  // If no explicit objectives, generate from main headers
  if (objectives.length === 0) {
    const headers = content.match(/^#{2,3}\s+(.+)$/gm);
    if (headers) {
      headers.slice(0, 4).forEach(header => {
        const title = header.replace(/^#{2,3}\s+/, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
        if (title.length > 5 && title.length < 80) {
          objectives.push(`Understand ${title.toLowerCase()}`);
        }
      });
    }
  }
  
  return objectives.slice(0, 5);
}

function extractPrerequisites(content, title) {
  const prerequisites = [
    'Basic understanding of cloud computing concepts',
    'Familiarity with Azure portal and Azure services'
  ];
  
  const lowerTitle = title.toLowerCase();
  const lowerContent = content.toLowerCase();
  
  // Add specific prerequisites based on content
  if (lowerTitle.includes('function') || lowerContent.includes('serverless')) {
    prerequisites.push('Basic programming knowledge (C#, JavaScript, or Python)');
  }
  
  if (lowerTitle.includes('storage') || lowerTitle.includes('blob') || lowerTitle.includes('database')) {
    prerequisites.push('Understanding of data storage and database concepts');
  }
  
  if (lowerTitle.includes('identity') || lowerTitle.includes('entra') || lowerTitle.includes('security')) {
    prerequisites.push('Knowledge of identity and access management principles');
  }
  
  if (lowerTitle.includes('api') || lowerTitle.includes('graph') || lowerContent.includes('rest api')) {
    prerequisites.push('Experience with REST APIs and HTTP protocols');
  }
  
  if (lowerTitle.includes('container') || lowerTitle.includes('docker')) {
    prerequisites.push('Basic understanding of containerization concepts');
  }
  
  if (lowerContent.includes('cli') || lowerContent.includes('powershell') || lowerContent.includes('script')) {
    prerequisites.push('Command line interface experience');
  }
  
  return prerequisites.slice(0, 4);
}

// Get related topics based on content analysis
function getRelatedTopics(content, currentTitle, allTopics) {
  const relatedTopics = [];
  const lowerContent = content.toLowerCase();
  const currentTopic = currentTitle.toLowerCase();
  
  for (const topic of allTopics) {
    const topicLower = topic.toLowerCase();
    if (topicLower !== currentTopic && 
        (lowerContent.includes(topicLower) || 
         topicLower.includes(currentTopic.split(' ')[0]))) {
      relatedTopics.push(topic);
    }
  }
  
  return relatedTopics.slice(0, 4);
}

// Calculate total estimated read time
function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).filter(word => word.length > 0).length;
  const codeBlocks = (content.match(/```[\s\S]*?```/g) || []).length;
  
  // Add extra time for code blocks and complex content
  const baseTime = Math.ceil(wordCount / wordsPerMinute);
  const codeTime = codeBlocks * 2; // 2 minutes per code block
  
  return Math.max(3, baseTime + codeTime);
}

// Extract official documentation links
function extractOfficialDocsLink(content) {
  const linkPatterns = [
    /https:\/\/learn\.microsoft\.com[^\s)]+/,
    /https:\/\/docs\.microsoft\.com[^\s)]+/,
    /https:\/\/azure\.microsoft\.com[^\s)]+/
  ];
  
  for (const pattern of linkPatterns) {
    const match = content.match(pattern);
    if (match) return match[0];
  }
  
  return 'https://learn.microsoft.com/en-us/azure/';
}

// Extract difficulty based on content complexity and structure
function extractDifficulty(content, title) {
  const lowerContent = content.toLowerCase();
  const lowerTitle = title.toLowerCase();
  
  // Check for advanced indicators
  const advancedKeywords = [
    'enterprise', 'production', 'scale', 'architecture', 'security', 'networking',
    'performance', 'troubleshooting', 'optimization', 'deployment', 'ci/cd',
    'automation', 'monitoring', 'logging', 'compliance', 'governance'
  ];
  
  // Check for beginner indicators
  const beginnerKeywords = [
    'introduction', 'getting started', 'overview', 'basics', 'fundamentals',
    'simple', 'tutorial', 'quickstart', 'hello world'
  ];
  
  // Check for intermediate indicators
  const intermediateKeywords = [
    'configuration', 'setup', 'implementation', 'integration', 'development',
    'features', 'options', 'management', 'administration'
  ];
  
  const advancedCount = advancedKeywords.filter(keyword => lowerContent.includes(keyword)).length;
  const beginnerCount = beginnerKeywords.filter(keyword => lowerContent.includes(keyword) || lowerTitle.includes(keyword)).length;
  const intermediateCount = intermediateKeywords.filter(keyword => lowerContent.includes(keyword)).length;
  
  // Analyze content structure complexity
  const hasCodeExamples = (content.match(/```/g) || []).length >= 4;
  const hasComplexTables = (content.match(/\|.*\|/g) || []).length >= 10;
  const hasDeepSections = (content.match(/^#{4,}/gm) || []).length >= 3;
  
  if (beginnerCount >= 2 || lowerTitle.includes('introduction') || lowerTitle.includes('overview')) {
    return 'Beginner';
  }
  
  if (advancedCount >= 3 || (hasCodeExamples && hasComplexTables && hasDeepSections)) {
    return 'Advanced';
  }
  
  return 'Intermediate';
}

// Smart content parsing and section creation
function createSections(content, title) {
  const sections = [];
  const lines = content.split('\n');
  let currentSection = null;
  let sectionCounter = 1;
  
  // Skip the main title if it's the first line
  let startIndex = 0;
  if (lines[0] && lines[0].match(/^#\s+/)) {
    startIndex = 1;
  }
  
  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Check for section headers (## or ### only, ignore deeper levels for main sections)
    const headerMatch = trimmed.match(/^(#{2,3})\s+(.+)$/);
    if (headerMatch) {
      // Save previous section if it has meaningful content
      if (currentSection && currentSection.content.trim().length > 50) {
        const processedContent = convertMarkdownToHtml(currentSection.content.trim());
        sections.push({
          id: `section-${sectionCounter++}`,
          title: currentSection.title,
          content: processedContent,
          type: 'content',
          estimatedReadTime: calculateSectionReadTime(currentSection.content)
        });
      }
      
      // Start new section
      currentSection = {
        title: headerMatch[2].replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'), // Remove links from titles
        content: ''
      };
    } else if (currentSection) {
      currentSection.content += line + '\n';
    } else if (trimmed) {
      // Content before first section - create an overview section
      if (!currentSection) {
        currentSection = {
          title: 'Overview',
          content: line + '\n'
        };
      }
    }
  }
  
  // Add the last section
  if (currentSection && currentSection.content.trim().length > 50) {
    const processedContent = convertMarkdownToHtml(currentSection.content.trim());
    sections.push({
      id: `section-${sectionCounter}`,
      title: currentSection.title,
      content: processedContent,
      type: 'content',
      estimatedReadTime: calculateSectionReadTime(currentSection.content)
    });
  }
  
  // If no sections found or only one small section, create a single comprehensive section
  if (sections.length === 0 || (sections.length === 1 && sections[0].content.length < 200)) {
    const fullContent = lines.slice(startIndex).join('\n').trim();
    if (fullContent.length > 100) {
      return [{
        id: 'section-1',
        title: 'Overview',
        content: convertMarkdownToHtml(fullContent),
        type: 'content',
        estimatedReadTime: calculateSectionReadTime(fullContent)
      }];
    }
  }
  
  return sections;
}

// Calculate read time for a section
function calculateSectionReadTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).filter(word => word.length > 0).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

// Main conversion function with better file handling
async function convertMarkdownFiles() {
  const studyMaterials = [];
  const processedTopics = new Set();
  
  console.log('🔍 Discovering markdown files...');
  
  // Get all available topics from both directories
  const allTopics = [...Object.keys(topicIdMapping)];
  
  // Process Topics directory first (primary source)
  const topicsPath = '/Users/shubhamjain/Documents/Az-204/AZ-204/Topics';
  try {
    const topicsFiles = await fs.readdir(topicsPath);
    console.log(`📁 Found ${topicsFiles.filter(f => f.endsWith('.md')).length} files in Topics directory`);
    
    for (const file of topicsFiles) {
      if (file.endsWith('.md')) {
        const filePath = path.join(topicsPath, file);
        const fileName = path.basename(file, '.md');
        
        console.log(`🔄 Processing Topics/${file}...`);
        const material = await processMarkdownFile(filePath, 'Topics', allTopics);
        
        if (material) {
          studyMaterials.push(material);
          processedTopics.add(fileName);
          console.log(`✅ Successfully processed: ${material.title}`);
        }
      }
    }
  } catch (error) {
    console.error('❌ Error reading Topics directory:', error.message);
  }
  
  // Process Learning Path directory (supplementary content)
  const learningPathPath = '/Users/shubhamjain/Documents/Az-204/AZ-204/Learning Path';
  try {
    const learningFiles = await fs.readdir(learningPathPath);
    const mdFiles = learningFiles.filter(f => f.endsWith('.md') && f !== 'README.md');
    console.log(`📁 Found ${mdFiles.length} files in Learning Path directory`);
    
    for (const file of mdFiles) {
      const filePath = path.join(learningPathPath, file);
      const fileName = path.basename(file, '.md');
      
      // Check if we already processed this topic from Topics directory
      if (processedTopics.has(fileName) || processedTopics.has(fileName.replace('CosmoDB', 'Cosmos DB'))) {
        console.log(`⏭️  Skipping Learning Path/${file} - already processed from Topics`);
        continue;
      }
      
      console.log(`🔄 Processing Learning Path/${file}...`);
      const material = await processMarkdownFile(filePath, 'Learning Path', allTopics);
      
      if (material) {
        studyMaterials.push(material);
        processedTopics.add(fileName);
        console.log(`✅ Successfully processed: ${material.title}`);
      }
    }
  } catch (error) {
    console.error('❌ Error reading Learning Path directory:', error.message);
  }
  
  return studyMaterials;
}

// Process a single markdown file with improved content handling
async function processMarkdownFile(filePath, source, allTopics) {
  try {
    const rawContent = await fs.readFile(filePath, 'utf-8');
    const content = cleanMarkdownContent(rawContent);
    const fileName = path.basename(filePath, '.md');
    
    // Skip if content is too short or empty
    if (content.length < 100) {
      console.log(`⚠️  Skipping ${fileName}: Content too short`);
      return null;
    }
    
    // Extract clean title
    let title = extractCleanTitle(content) || fileName;
    
    // Get clean topic ID
    const topicId = topicIdMapping[fileName] || fileName.toLowerCase().replace(/\s+/g, '-');
    
    // Extract clean description from content after the title
    let description = '';
    const lines = content.split('\n');
    let descriptionLines = [];
    let foundTitle = false;
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (!foundTitle && trimmed.match(/^#\s+/)) {
        foundTitle = true;
        continue;
      }
      if (foundTitle && trimmed && !trimmed.match(/^#{2,}/) && !trimmed.startsWith('http')) {
        // Clean the line from markdown formatting
        let cleanLine = trimmed.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'); // Remove markdown links
        cleanLine = cleanLine.replace(/\*\*([^*]+)\*\*/g, '$1'); // Remove bold
        cleanLine = cleanLine.replace(/\*([^*]+)\*/g, '$1'); // Remove italic
        cleanLine = cleanLine.replace(/`([^`]+)`/g, '$1'); // Remove code
        
        if (cleanLine.length > 10) {
          descriptionLines.push(cleanLine);
          if (descriptionLines.join(' ').length > 150) break;
        }
      }
      if (foundTitle && trimmed.match(/^#{2,}/)) break;
    }
    
    description = descriptionLines.join(' ').substring(0, 200).trim();
    if (!description) {
      description = `Comprehensive guide to ${title} in Microsoft Azure platform`;
    }
    if (description.length > 197) {
      description = description.substring(0, 197) + '...';
    }
    
    // Create sections with improved content handling
    const sections = createSections(content, title);
    
    // Skip if no meaningful sections were created
    if (sections.length === 0) {
      console.log(`⚠️  Skipping ${fileName}: No meaningful sections found`);
      return null;
    }
    
    // Create study material object
    const studyMaterial = {
      id: topicId,
      topic: topicId,
      title: title,
      description: description,
      difficulty: extractDifficulty(content, title),
      estimatedReadTime: calculateReadTime(content),
      tags: extractTags(content, title),
      learningObjectives: extractLearningObjectives(content, title),
      prerequisites: extractPrerequisites(content, title),
      sections: sections,
      relatedTopics: getRelatedTopics(content, fileName, allTopics),
      officialDocs: extractOfficialDocsLink(content),
      userNotes: '',
      lastUpdated: new Date().toISOString().split('T')[0]
    };
    
    return studyMaterial;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return null;
  }
}

// Generate the study materials file with improved output
async function generateStudyMaterialsFile() {
  console.log('🚀 Starting markdown to study materials conversion...');
  console.log('=' .repeat(60));
  
  const materials = await convertMarkdownFiles();
  
  if (materials.length === 0) {
    console.error('❌ No study materials were generated');
    return;
  }
  
  console.log('\n' + '=' .repeat(60));
  console.log(`🎉 Successfully generated ${materials.length} study materials`);
  
  // Validate materials before writing
  const validMaterials = materials.filter(material => {
    if (!material.sections || material.sections.length === 0) {
      console.warn(`⚠️  Warning: ${material.title} has no sections`);
      return false;
    }
    return true;
  });
  
  console.log(`📋 ${validMaterials.length} materials passed validation`);
  
  // Create the study materials file content
  const fileContent = `// Auto-generated study materials from markdown files
// Generated on: ${new Date().toISOString()}
// Total materials: ${validMaterials.length}

import type { StudyMaterial } from '~/types/StudyMaterial';

export const studyMaterials: StudyMaterial[] = ${JSON.stringify(validMaterials, null, 2)};

// Helper functions for working with study materials
export function getAllStudyMaterials(): StudyMaterial[] {
  return studyMaterials;
}

export function getStudyMaterialByTopic(topicId: string): StudyMaterial | undefined {
  return studyMaterials.find(material => material.id === topicId);
}

export function getStudyMaterialsByDifficulty(difficulty: string): StudyMaterial[] {
  return studyMaterials.filter(material => material.difficulty === difficulty);
}

export function getStudyMaterialsByTag(tag: string): StudyMaterial[] {
  return studyMaterials.filter(material => 
    material.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
}

export function searchStudyMaterials(query: string): StudyMaterial[] {
  const searchTerm = query.toLowerCase();
  return studyMaterials.filter(material =>
    material.title.toLowerCase().includes(searchTerm) ||
    material.description.toLowerCase().includes(searchTerm) ||
    material.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    material.sections.some(section => 
      section.title.toLowerCase().includes(searchTerm) ||
      section.content.toLowerCase().includes(searchTerm)
    )
  );
}

export function getTopicSuggestions(query: string): string[] {
  const suggestions = new Set<string>();
  const searchTerm = query.toLowerCase();
  
  studyMaterials.forEach(material => {
    if (material.title.toLowerCase().includes(searchTerm)) {
      suggestions.add(material.title);
    }
    material.tags.forEach(tag => {
      if (tag.toLowerCase().includes(searchTerm)) {
        suggestions.add(tag);
      }
    });
  });
  
  return Array.from(suggestions).slice(0, 10);
}
`;

  // Write the file
  const outputPath = '/Users/shubhamjain/Documents/Az-204/AZ-204/quiz-app/app/lib/studyMaterials.ts';
  await fs.writeFile(outputPath, fileContent, 'utf-8');
  
  console.log('\nStudy materials file generated successfully!');
  console.log('File:', outputPath);
  console.log('Total materials:', validMaterials.length);
  
  // Statistics
  const difficultyStats = validMaterials.reduce((acc, material) => {
    acc[material.difficulty] = (acc[material.difficulty] || 0) + 1;
    return acc;
  }, {});
  
  const totalSections = validMaterials.reduce((acc, material) => acc + material.sections.length, 0);
  const avgReadTime = Math.round(validMaterials.reduce((acc, material) => acc + material.estimatedReadTime, 0) / validMaterials.length);
  
  console.log('\nStatistics:');
  console.log('   Total sections:', totalSections);
  console.log('   Average read time:', avgReadTime, 'minutes');
  console.log('   Difficulty breakdown:');
  Object.entries(difficultyStats).forEach(([difficulty, count]) => {
    console.log('      ' + difficulty + ':', count, 'materials');
  });
  
  console.log('\nSample materials:');
  validMaterials.slice(0, 5).forEach((material, index) => {
    console.log('   ' + (index + 1) + '.', material.title);
    console.log('      ' + material.difficulty + ' |', material.estimatedReadTime + 'min |', material.sections.length, 'sections');
    console.log('      Tags:', material.tags.slice(0, 3).join(', '));
  });
  
  console.log('\nTo use these materials in your app:');
  console.log('   import { studyMaterials, getAllStudyMaterials } from \'~/lib/studyMaterials\';');
  console.log('\nConversion completed successfully!');
}

// Run the conversion
generateStudyMaterialsFile().catch(console.error);