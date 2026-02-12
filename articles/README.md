# Articles Directory

This directory contains article pages that will be displayed using the Article block and listed on the home page using the Article List block.

## Article Structure

Each article should be created in AEM's Universal Editor with the following fields:

- **Title**: The article title
- **Date**: Publication date (YYYY-MM-DD format)
- **Author**: Article author name
- **Image**: Featured image (AEM Asset)
- **Description**: Article summary/description
- **Body**: Main article content (rich text)
- **URL Key**: Unique identifier for the article URL (e.g., "my-first-article")

## How to Create Articles

### Using Universal Editor

1. In AEM's Universal Editor, create a new page in the `/articles/` path
2. Add the Article block to the page
3. Fill in the article fields:
   - Title
   - Date
   - Author
   - Image
   - Body (main content)
4. Add metadata in the page properties:
   - Description (for the article list)
   - Publication Date (for sorting)
   - Author (for metadata)

### Article List Block

The Article List block automatically fetches and displays:
- Top 10 most recent articles
- Sorted by publication date (descending)
- Shows: Title (linked), Date, Description

To use on a page, simply add the Article List block.

## URL Structure

Articles are accessible via their URL key:
- `/articles/{urlkey}` - Individual article page

## Example Article Metadata

Add these meta tags to your article pages:

```html
<meta name="description" content="Article description here">
<meta name="author" content="Author Name">
<meta name="publication-date" content="2026-02-12">
<meta property="og:title" content="Article Title">
```

## Create Page Form

The Create Page Form block allows content creators to initiate new page creation with OpenAI assistance. This is a placeholder implementation that can be extended to integrate with AEM's authoring APIs.
