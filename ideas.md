# Portfolio Design Brainstorm

## Selected Design Philosophy: Neo-Brutalism meets Technical Minimalism

**Design Movement:** Neo-Brutalism with Technical Minimalism

**Core Principles:**
1. **Bold Typography Hierarchy** – Space Grotesk for headings (heavy weight), DM Sans for body text. Sharp, geometric letterforms convey technical precision.
2. **Intentional Whitespace** – Ample breathing room around content blocks. Asymmetric layouts with strategic negative space.
3. **Sharp Borders & Offset Shadows** – Cards and sections feature clean borders with subtle offset shadows (not soft blur). Creates depth without softness.
4. **Slate-Blue Accent System** – Primary accent in slate-blue (#4F46E5 or similar). Complements light gray backgrounds and creates visual hierarchy.

**Color Philosophy:**
- **Background:** Off-white/light gray (#F8F7F5 or #F5F3F0) – warm, approachable, not sterile white.
- **Text:** Dark slate (#1F2937 or #0F172A) – high contrast, readable, professional.
- **Accents:** Slate-blue (#4F46E5, #5B5FDE) – conveys technical sophistication and trust.
- **Borders:** Subtle gray (#E5E7EB or #D1D5DB) – defines structure without harshness.
- **Cards:** White with 1-2px solid borders, offset shadow (e.g., `0 4px 0 rgba(0,0,0,0.1)`).

**Layout Paradigm:**
- **Hero Section:** Asymmetric split – text on left (60%), AI avatar image on right (40%). Typewriter effect on role title.
- **Content Sections:** Full-width with max-width container. Cards arranged in grids (2-3 columns on desktop, 1 on mobile).
- **Timeline (Experience):** Vertical timeline with alternating cards (left/right). Blue accent line down the center.
- **Projects Grid:** 3-column grid with hover effects (slight lift, border color change to slate-blue).

**Signature Elements:**
1. **Typewriter Effect** – Hero section cycles through roles (AI/ML Engineer, LLM Developer, Full-Stack Developer) with smooth typing animation.
2. **Scroll-Triggered Animations** – Sections fade in and slide up as user scrolls (using Intersection Observer or Framer Motion).
3. **Card Hover Effects** – On hover: border color shifts to slate-blue, shadow deepens, slight upward translate (2-4px).

**Interaction Philosophy:**
- Smooth, purposeful transitions (200-300ms). No jarring changes.
- Hover states provide visual feedback without overwhelming.
- Language toggle (EN/DE) in top-right corner – subtle button with flag icons or text labels.
- Smooth scroll navigation to sections (no page reload).

**Animation Guidelines:**
- **Entrance Animations:** Fade-in + slide-up (0.6s, ease-out). Stagger children by 100-150ms.
- **Hover Animations:** Border color transition (200ms), shadow deepening, slight translate (100ms).
- **Scroll Animations:** Parallax on hero background (subtle, 0.5x speed). Fade-in sections on scroll.
- **Typewriter Effect:** 50-100ms per character, smooth cursor blink.

**Typography System:**
- **Display Font:** Space Grotesk (700, 800 weights) – headings, hero title, section titles.
- **Body Font:** DM Sans (400, 500 weights) – paragraphs, descriptions, labels.
- **Code Font:** Fira Code (400) – for tech tags, code snippets.
- **Hierarchy:**
  - H1 (Hero): 48-56px, Space Grotesk 800, line-height 1.1
  - H2 (Section): 32-40px, Space Grotesk 700, line-height 1.2
  - H3 (Card titles): 18-20px, Space Grotesk 700
  - Body: 16px, DM Sans 400, line-height 1.6
  - Small: 14px, DM Sans 400, opacity 0.7

---

This design balances technical sophistication (sharp borders, bold typography) with approachability (warm colors, ample whitespace). The result is a premium, modern portfolio that feels intentional and crafted.
