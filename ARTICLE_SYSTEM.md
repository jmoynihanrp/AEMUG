# Article System Implementation

This project now includes a complete article management system with the following features:

## New Blocks

### 1. Article List Block (`blocks/article-list`)
Displays the top 10 most recent articles sorted by publication date in descending order.

**Features:**
- Fetches articles from the query index (`/query-index.json`)
- Filters pages in the `/articles/` path
- Shows linked article titles, publication dates, and descriptions
- Automatically sorts by most recent first

**Usage:**
Add an "Article List" block to any page in the Universal Editor.

### 2. Article Block (`blocks/article`)
Displays full article content with proper formatting.

**Features:**
- Shows article title as H1
- Displays publication date (formatted)
- Shows author with "By" prefix
- Featured image display
- Rich text body content with proper styling

**Article Structure:**
The block expects the following fields in a table format:
- Title
- Date (will be formatted as "Month DD, YYYY")
- Author
- Image (optional)
- Body (rich text content)

**Usage:**
Add an "Article" block to article pages and fill in the fields.

### 3. Create Page Form Block (`blocks/create-page-form`)
Provides a form interface for creating new pages with AI assistance.

**Features:**
- Text area for page content or prompts
- Form validation
- Submit functionality with loading states
- Success/error feedback
- OpenAI integration ready (requires implementation)

**Usage:**
Add a "Create Page Form" block to any page where content creation is needed.

## Article System Setup

### 1. Query Index Configuration
The `helix-query.yaml` has been updated to index article metadata:
- Title (from og:title meta tag)
- Description (from description meta tag)
- Author (from author meta tag)
- Publication Date (from publication-date meta tag)
- Last Modified timestamp

### 2. Article Content Structure
Articles should be created in the `/articles/` directory with proper metadata.

**Required Meta Tags:**
```html
<meta property="og:title" content="Article Title">
<meta name="description" content="Article summary">
<meta name="author" content="Author Name">
<meta name="publication-date" content="2026-02-12">
```

### 3. OpenAI Integration
The `openai` npm package has been installed and is available for use. The Create Page Form can be extended to integrate with OpenAI for content generation.

**Installation:**
```bash
npm install openai
```

**Usage Example:**
```javascript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const completion = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [{ role: "user", content: "Create article content..." }],
});
```

## Development

### Building
```bash
npm run build:json  # Rebuild component models and definitions
```

### Linting
```bash
npm run lint        # Check code quality
npm run lint:fix    # Auto-fix linting issues
```

### Testing
To test the article system:
1. Create article pages in `/articles/` directory
2. Add the Article block with proper fields
3. Add required meta tags for article metadata
4. Create a home page with the Article List block
5. Verify articles are listed correctly

## Component Models

All new blocks have been registered in the component model system:
- `blocks/article-list/_article-list.json`
- `blocks/article/_article.json`
- `blocks/create-page-form/_create-page-form.json`

These are automatically included in the build process via `npm run build:json`.

## Styling

Each block includes its own CSS file:
- `blocks/article-list/article-list.css` - Article list styling
- `blocks/article/article.css` - Full article page styling
- `blocks/create-page-form/create-page-form.css` - Form styling

All styles follow the project's style guide and have been validated with stylelint.
