# Ray's Garden - Current State Audit

**Date**: January 19, 2026
**Purpose**: Document current project structure before website refactor

---

## Project Overview

**Name**: Ray's Garden (transitioning to racheltomasetti.com)
**Type**: Next.js 15 full-stack web application
**Current Purpose**: Interactive 3D mind garden + Ki AI toolkit showcase
**Future Vision**: Living editorial space documenting mind evolution and Ki development

### Tech Stack
- **Framework**: Next.js 15.5.9 (App Router, Turbopack)
- **React**: 19.1.0
- **TypeScript**: 5
- **Styling**: Tailwind CSS v4, Flexoki color system
- **3D Graphics**: Three.js 0.180.0
- **Animation**: Framer Motion, Motion, GSAP
- **Backend**: Supabase (captures, media, documents)
- **Content**: Currently markdown in `/src/story/`, moving to MDX in `/content/`

---

## Current Site Structure

### Page Routes
```
/ (page.tsx)                          → Redirects to /garden
/garden (garden/page.tsx)             → 3D interactive garden scene
/mind (mind/page.tsx)                 → Ki logo landing page
/mind/12-favorite-problems            → Interactive favorite problems viewer
```

### File Organization
```
/Users/raybuilds021/Master/rays-garden/
├── src/
│   ├── app/                          # Next.js pages & components
│   │   ├── components/               # All React components
│   │   ├── contexts/                 # Theme & Modal providers
│   │   ├── fonts.ts                  # Perpetua custom font
│   │   ├── globals.css               # Tailwind + Flexoki theme
│   │   └── styles/                   # Additional CSS
│   ├── lib/                          # Utilities & Supabase client
│   ├── types/                        # TypeScript definitions
│   └── story/                        # Markdown content files
├── public/
│   ├── assets/                       # Images, logos
│   ├── data/                         # JSON data files
│   └── story/                        # Audio/video files
├── content/                          # [NEW] MDX posts location
└── docs/                             # Documentation
```

---

## Current Color System

### Flexoki Theme (Current)
**Base Colors** (Keep these):
- `--bg`, `--bg-2` - Background layers
- `--tx`, `--tx-2`, `--tx-3` - Text hierarchy
- `--ui`, `--ui-2`, `--ui-3` - UI elements

**Accent Colors** (Replace with rebrand colors):
- Terra: `#9e2a2b` (brick red)
- Ray: `#efcb68` (golden yellow)
- Pacific: `#58a4b0` (teal blue)
- Sage: `#54783fff` (olive green)
- Dawn: `#e0bad7` (dusty rose)

**Color Series** (To review):
- Red, Orange, Yellow, Green, Cyan, Blue, Purple, Magenta (600 & 400 shades)

---

## Components Inventory

### Core Components (Status TBD)

#### Garden Components (`/app/components/garden/`)
- ✅ **Garden.tsx** (742 lines) - Main 3D visualization
  - Three.js scene with sky, terrain, lighting
  - Mountains, plants, particles, lighthouse
  - Theme-aware rendering
  - **Status**: KEEP for easter egg route

- ✅ **EnterButton.tsx** - Garden → Mind navigation
  - **Status**: KEEP or REPURPOSE for CTAs

- ⚠️ **MissionModal.tsx** - "unlock the mind" modal
  - **Status**: REVIEW - may not fit new vision

- ✅ **useThreeSetup.ts** - Three.js initialization hook
  - **Status**: KEEP with Garden

#### Garden Scene Components (`/components/garden/scene/`)
- ✅ Lighthouse.ts, Plants.ts, Particles.ts, Mountains.ts
  - **Status**: KEEP with Garden (easter egg)

#### Ki Components (`/app/components/ki/`)
All explain Ki philosophy and origin story:
- ⚠️ **WhatIsKi.tsx** - AI toolkit explanation
- ⚠️ **BobbingKi.tsx** - Animated logo
- ⚠️ **SpinningKi.tsx** - Spinning animation
- ⚠️ **Acknowledgements.tsx** - Long gratitude list
- ⚠️ **BuilderNote.tsx** - Personal builder note
- ⚠️ **AI.tsx** - "Goldilocks zone" philosophy
- ⚠️ **LOVE.tsx** - Love/compassion section
- ⚠️ **NOW.tsx** - Present moment awareness
- ⚠️ **KiOrigin.tsx** - Origin story
- ⚠️ **Connect.tsx** - Contact/connection info

**Status**: REVIEW ALL - May convert to MDX posts or keep as interactive components

#### Mind Components (`/app/components/mind/`)
- ✅ **FavProblems.tsx** - Interactive problems dropdown
  - **Status**: KEEP (easter egg route)

#### Story Components (`/app/components/story/`)
- ⚠️ **OriginStory.tsx** - Narrative component
  - **Status**: CONVERT TO MDX POST?

#### Utility Components
- ✅ **DecryptedText.tsx** - Text reveal animation
  - **Status**: POTENTIALLY USEFUL for editorial design

---

## State Management

### Contexts (`/app/contexts/`)

#### ThemeContext.tsx ✅
```typescript
- Manages "dark" | "light" theme
- System preference detection
- localStorage persistence
- Keyboard shortcuts: D/L to toggle
```
**Status**: KEEP - Essential for light/dark mode

#### ModalContext.tsx ⚠️
```typescript
- Simple modal visibility state
```
**Status**: REVIEW - May not need if removing modals

---

## Data & Content

### Current Content Storage

#### Markdown Files (`/src/story/`)
- acknowledgements.md
- buildingme.md
- future-is-now.md
- love.md
- origin-story.md
- what-is-ki.md

**Status**: REVIEW & MIGRATE - Convert to MDX posts or keep as component content?

#### JSON Data (`/public/data/`)
- `favproblems.json` - Favorite problems versions
  - **Status**: KEEP (for easter egg)
- `deadline.json` - Timeline data
  - **Status**: UNCERTAIN (Supabase timeline may be deprecated)

#### Supabase Integration
**Current Schema** (from `/src/types/timeline.ts`):
- Captures (notes, transcriptions, files)
- Media (images, videos, captions)
- Documents (title, content, metadata)

**Status**: ON HOLD - Timeline feature uncertain, focus on MDX

---

## Typography

### Current Font
- **Perpetua** (custom .ttf) loaded via `/app/fonts.ts`
- CSS variable: `--font-perpetua`

**Status**: KEEP FOR NOW - May change later

---

## Animation Systems

### Current Libraries
- Tailwind Animate CSS
- Framer Motion (page transitions, micro-interactions)
- Motion (newer API)
- GSAP (advanced sequences)
- Three.js animations (shader effects, particles)

**Status**: KEEP - Will be useful for editorial design

---

## Key Interactions

### Keyboard Shortcuts
- **D / L**: Toggle theme
- **Escape**: Close modals
- **Arrow keys**: Navigation (framework in place)

**Status**: KEEP theme toggle, review others

### Mobile Optimizations
- Viewport: no zoom, single scale
- Touch-action: pan-x pan-y
- Responsive Three.js canvas
- Pixel ratio limiting (max 2x)

**Status**: KEEP ALL

---

## Build Configuration

### Next.js Config (`next.config.ts`)
- ReactStrictMode: false (prevents double-mounting)
- Minimalist setup

### PostCSS (`postcss.config.mjs`)
- @tailwindcss/postcss v4

### ESLint (`eslint.config.mjs`)
- next/core-web-vitals
- next/typescript

### TypeScript (`tsconfig.json`)
- Path alias: `@/*` → `./src/*`
- Strict mode enabled

**Status**: ALL GOOD - No changes needed

---

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=https://appahnoqhkthiwidjjcn.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[JWT token]
```

**Status**: KEEP but may not actively use if timeline deprecated

---

## Component Reusability Assessment

### High Reuse Potential ✅
1. **DecryptedText.tsx** - Could be great for editorial headlines
2. **Theme system** - Essential for light/dark mode
3. **Animation libraries** - Useful for editorial micro-interactions
4. **EnterButton** - Could be repurposed as CTA button component

### Keep As Easter Eggs 🎨
1. **Garden.tsx** + all scene components
2. **FavProblems.tsx**
3. **BobbingKi / SpinningKi** (for /mind route)

### Review & Decide ⚠️
1. **Ki content components** - Convert to MDX or keep as interactive?
2. **OriginStory.tsx** - Migrate to post?
3. **MissionModal** - Still relevant?
4. **Story markdown files** - Which become posts?

### Likely Deprecate 🗑️
1. **ModalContext** (if removing modals)
2. **Supabase timeline integration** (if timeline deprecated)
3. **Old home redirect logic** (new homepage = The Feed)

---

## Refactor Priorities

### Phase 1: Foundation
1. ✅ Set up `/content/` directory for MDX posts
2. ✅ Update color system (keep base, swap accents)
3. ✅ Configure MDX support in Next.js
4. ✅ Create post schema/frontmatter structure

### Phase 2: Core Pages
1. ✅ Build homepage ("The Feed") at `/`
2. ✅ Create post card components
3. ✅ Build individual post page template
4. ✅ Create About, Ki, Archive, Now pages

### Phase 3: Content Migration
1. ⚠️ Review story markdown files
2. ⚠️ Decide on Ki component → MDX conversion
3. ⚠️ Create initial posts

### Phase 4: Polish
1. ✅ Navigation component
2. ✅ Category filtering
3. ✅ Related posts
4. ✅ Easter egg integration

---

## Notes for Refactor

- **Hybrid approach**: Build new structure alongside existing
- **Preserve**: Garden route, Mind route, Favorite Problems
- **Transform**: Ki content → decide per component
- **Focus**: MDX foundation, custom components, clean editorial design
- **Font**: Keep Perpetua for now
- **Colors**: Keep light/dark, swap accent palette
- **Homepage**: No more redirect, show The Feed

---

**Next Steps**: Component audit → Color system update → MDX setup → The Feed
