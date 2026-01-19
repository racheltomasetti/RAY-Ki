# Component Audit Decisions

**Date**: January 19, 2026
**Purpose**: Track decisions made during component audit and conversion to MDX

---

## Components Converted to MDX Posts

### 1. OriginStory.tsx → `/content/reflections/my-origin-story.mdx`
- **Decision**: CONVERTED
- **Category**: Reflections
- **Reason**: Powerful personal narrative, perfect editorial content
- **Status**: ✅ Complete

### 2. BuilderNote.tsx → `/content/reflections/why-im-building-ki.mdx`
- **Decision**: CONVERTED
- **Category**: Reflections
- **Reason**: Core "About" content explaining builder's motivation
- **Status**: ✅ Complete

### 3. WhatIsKi.tsx + AI.tsx + KiOrigin.tsx → `/content/ki-updates/what-is-ki.mdx`
- **Decision**: CONVERTED & MERGED
- **Category**: Ki Updates
- **Reason**: Combined all Ki philosophy/explanation content into one comprehensive post
- **Status**: ✅ Complete

### 4. Acknowledgements.tsx → `/content/reflections/gratitude.mdx`
- **Decision**: CONVERTED
- **Category**: Reflections
- **Reason**: Beautiful standalone piece expressing gratitude
- **Status**: ✅ Complete

### 5. LOVE.tsx → `/content/field-notes/love-is-the-key.mdx`
- **Decision**: CONVERTED
- **Category**: Field Notes
- **Reason**: Visual + quote format works well as field note
- **Status**: ✅ Complete

### 6. NOW.tsx → `/content/field-notes/the-future-is-now.mdx`
- **Decision**: CONVERTED
- **Category**: Field Notes
- **Reason**: Visual + quote format works well as field note
- **Status**: ✅ Complete

---

## Components Kept as Reusable Components

### 1. BobbingKi.tsx
- **Location**: `/src/app/components/ki/BobbingKi.tsx`
- **Decision**: KEEP
- **Reason**: Useful animation component for CTAs and visual interest
- **Use Cases**: Can be embedded in posts, used in CTAs, easter eggs

### 2. SpinningKi.tsx
- **Location**: `/src/app/components/ki/SpinningKi.tsx`
- **Decision**: KEEP
- **Reason**: Useful animation component for CTAs and visual interest
- **Use Cases**: Can be embedded in posts, used in CTAs, easter eggs

### 3. Connect.tsx
- **Location**: `/src/app/components/ki/Connect.tsx`
- **Decision**: KEEP
- **Reason**: CTA component linking to unlock-ki.com
- **Use Cases**: Can be used in posts, footer, Ki page

### 4. DecryptedText.tsx
- **Location**: `/src/app/components/DecryptedText.tsx`
- **Decision**: KEEP
- **Reason**: Cool text reveal animation, potentially useful for editorial design
- **Use Cases**: Headlines, special reveals, interactive elements

---

## Components to Keep for Easter Eggs

### Garden Components
- **Garden.tsx** + all scene components (Lighthouse, Plants, Particles, Mountains, etc.)
- **Location**: `/src/app/components/garden/`
- **Decision**: KEEP INTACT
- **Reason**: Easter egg route at `/garden`
- **Status**: No changes needed

### Mind Components
- **FavProblems.tsx**
- **Location**: `/src/app/components/mind/FavProblems.tsx`
- **Decision**: KEEP INTACT
- **Reason**: Easter egg route at `/mind/12-favorite-problems`
- **Status**: No changes needed

---

## Components Deprecated/Replaced

### 1. MissionModal.tsx
- **Location**: `/src/app/components/garden/MissionModal.tsx`
- **Decision**: REVIEW LATER
- **Reason**: May not fit new vision, but keeping for now
- **Action**: Decide later if still relevant

---

## Content Directory Structure Created

```
/content/
├── build-log/          # Dev updates, Ki progress, technical decisions
├── reflections/        # Personal evolution, philosophy, transformation
│   ├── my-origin-story.mdx
│   ├── why-im-building-ki.mdx
│   └── gratitude.mdx
├── stream-notes/       # Recaps and highlights from building streams
├── guides/             # How-to's, frameworks, tools, resources
├── ki-updates/         # Product announcements, feature drops, vision
│   └── what-is-ki.mdx
└── field-notes/        # Quick thoughts, fragments, observations
    ├── love-is-the-key.mdx
    └── the-future-is-now.mdx
```

---

## Next Steps

1. ✅ Content directory structure created
2. ✅ Initial MDX posts created (6 posts)
3. ⏳ Set up MDX configuration in Next.js
4. ⏳ Define post frontmatter schema
5. ⏳ Create post reading/parsing utilities
6. ⏳ Build post card components
7. ⏳ Build individual post page template
8. ⏳ Build "The Feed" homepage

---

## Notes

- All MDX posts use frontmatter with: title, date, category, excerpt, featured_image (optional)
- Posts maintain the original voice and formatting
- Images are referenced from existing `/public/` paths
- Posts can embed React components (like iframes, custom components)
- Original component files remain in place for now (can delete after verification)
