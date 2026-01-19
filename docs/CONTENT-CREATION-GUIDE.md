# Content Creation Guide

## Overview

Ray's Garden uses a flat, stream-of-consciousness content structure. All posts live in `/content/posts/` as `.mdx` files. Categories emerge naturally from your content rather than being pre-defined.

## File Structure

```
/content/posts/
  ├── my-first-thought.mdx
  ├── building-ki-reflection.mdx
  └── love-is-the-answer.mdx
```

## Post Format

Every post is an `.mdx` file with frontmatter metadata followed by content.

### Basic Template

```mdx
---
title: "Your Post Title"
date: "YYYY-MM-DD"
category: "Category Name"
excerpt: "A brief preview of your post (1-2 sentences)"
---

Your content goes here. You can use markdown formatting, and even React components if needed.
```

## Frontmatter Fields

### Required Fields

- **title**: The headline of your post
  - Example: `"Why I'm Building Ki"`

- **date**: Publication date in YYYY-MM-DD format
  - Example: `"2026-01-19"`

- **category**: A category tag for your post
  - Examples: `"Reflections"`, `"Ki Updates"`, `"Build Log"`, `"Field Notes"`, `"Guides"`
  - Can be anything! Categories emerge naturally from what you create

- **excerpt**: A brief preview (1-2 sentences max)
  - Example: `"Exploring the journey from corporate burnout to building something meaningful."`

### Optional Fields

- **featured_image**: Path to a featured image
  - Example: `"/images/my-photo.jpg"`
  - If omitted, the post card will just show text

## File Naming Convention

Convert your post title to a slug for the filename:
- Use lowercase
- Replace spaces with hyphens
- Remove special characters
- Keep it short and descriptive

**Examples:**
- Title: "Why I'm Building Ki" → Filename: `why-im-building-ki.mdx`
- Title: "Love is the Key" → Filename: `love-is-the-key.mdx`
- Title: "My Origin Story" → Filename: `my-origin-story.mdx`

## Content Guidelines

### Markdown Support

Your content can use all standard markdown:

```mdx
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet lists
- Like this

1. Numbered lists
2. Like this

[Links](https://example.com)

> Blockquotes for emphasis

\`\`\`javascript
// Code blocks
console.log("Hello world");
\`\`\`
```

### Categories

Categories are flexible and emerge from your writing. Here are some themes you might use:

- **Reflections** - Personal evolution, philosophy, transformation journey
- **Build Log** - Dev updates, technical decisions, building in public
- **Ki Updates** - Product announcements, feature drops, vision shares
- **Field Notes** - Quick thoughts, fragments, observations
- **Guides** - How-to's, frameworks, tools, resources
- **Stream Notes** - Recaps from building streams

But feel free to create new categories as they emerge! The system discovers them automatically.

## Complete Example

**Filename:** `content/posts/finding-my-purpose.mdx`

```mdx
---
title: "Finding My Purpose Through Building"
date: "2026-01-19"
category: "Reflections"
excerpt: "How stepping away from corporate life led me to discover what I'm truly meant to create."
---

It started with a simple question: *What would I do if I wasn't afraid?*

I had spent years climbing the corporate ladder, checking boxes, meeting expectations. But something was missing. That gnawing feeling that I was built for something more.

## The Turning Point

May 28, 2023. The day everything changed. I made the decision to leave stability behind and chase the vision that had been haunting my dreams.

## What I Learned

Building in public has taught me:

- **Vulnerability is strength** - Sharing the journey, mistakes and all
- **Community amplifies** - You can't build meaningful things alone
- **Purpose drives persistence** - When you know your why, the how becomes clear

This is just the beginning.
```

## How to Create a Post

### Method 1: Write and Attach Markdown

1. Write your content in a markdown document
2. Attach it in a message
3. Specify:
   - The title you want
   - The category (or let it emerge naturally)
   - A brief excerpt/preview
4. I'll format it as an `.mdx` file and add it to `/content/posts/`

### Method 2: Direct Creation

Simply tell me:
- What you want to write about
- Share the content
- I'll handle the formatting and file creation

## What Happens After Creating a Post

1. **Automatic Discovery** - The system automatically finds your new post
2. **Category Routes** - If you used a new category, a filter page is created (e.g., `/reflections`)
3. **Main Feed** - Your post appears in the chronological stream on the homepage
4. **URL Structure** - Post is accessible at `/{category-slug}/{post-slug}`
   - Example: `/reflections/finding-my-purpose`

## Tips for Stream of Consciousness Writing

- **Don't overthink categories** - Tag it with what feels right in the moment
- **Short or long, both work** - Field Notes can be a paragraph, Reflections can be essays
- **Let patterns emerge** - You'll naturally gravitate toward certain themes
- **No pressure to be polished** - This is your authentic voice, not a corporate blog

## Need Help?

Just attach your markdown content and say:
- "Turn this into a post"
- "Add this to the garden"
- "Create a new post from this"

I'll handle the rest!
