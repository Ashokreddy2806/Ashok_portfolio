# Ashok Reddy - AI Developer Portfolio

A modern, responsive portfolio website built with **React 19**, **Tailwind CSS 4**, and **Framer Motion**. Features a Neo-Brutalism design philosophy with smooth animations and full EN/DE language support.

## 🎨 Design Features

- **Neo-Brutalism Design**: Sharp borders, bold typography, and intentional whitespace
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Scroll-triggered animations and typewriter effects
- **Language Toggle**: English and German language support
- **Dark/Light Theme Ready**: Built with semantic color tokens

## 🚀 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + custom design tokens
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📋 Prerequisites

Before running the project locally, ensure you have:

- **Node.js** (v18 or higher)
- **pnpm** (v10 or higher) - [Install pnpm](https://pnpm.io/installation)

## 🛠️ Local Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Ashokreddy2806/personal_portfolio_Ashok.git
cd personal_portfolio_Ashok
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start Development Server

```bash
pnpm dev
```

The development server will start at `http://localhost:3000/`. The page will automatically reload when you make changes.

### 4. Build for Production

```bash
pnpm build
```

This creates an optimized production build in the `dist/` directory.

### 5. Preview Production Build

```bash
pnpm preview
```

## 📁 Project Structure

```
personal_portfolio_ashok/
├── client/
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── contexts/          # React contexts
│   │   │   ├── LanguageContext.tsx
│   │   │   └── ThemeContext.tsx
│   │   ├── hooks/             # Custom React hooks
│   │   │   └── useScrollAnimation.ts
│   │   ├── App.tsx            # Main app component
│   │   ├── main.tsx           # Entry point
│   │   └── index.css          # Global styles & design tokens
│   ├── index.html
│   └── public/
├── server/
│   └── index.ts               # Express server (for production)
├── package.json
└── README.md
```

## 🎯 Key Features

### Sections

1. **Hero**: Typewriter effect with animated role cycling
2. **About**: Stats, current focus, and language proficiency
3. **Experience**: Timeline view of work experience
4. **Projects**: Grid of featured AI/ML projects
5. **Skills**: Categorized technical skills
6. **Education**: Academic background and awards
7. **Contact**: Multiple contact options

### Interactive Elements

- Smooth scroll navigation
- Hover effects on cards
- Language toggle (EN/DE)
- Social media links
- Responsive navigation bar

## 🌐 Language Support

The portfolio supports two languages:

- **English (EN)** - Default
- **German (DE)** - Full translations

Toggle languages using the button in the top-right corner.

## 📝 Customization

### Update Content

Edit the translations in `client/src/contexts/LanguageContext.tsx`:

```typescript
export const translations = {
  en: {
    'hero.name': 'Your Name',
    'hero.intro': 'Your introduction...',
    // ... more translations
  },
  de: {
    'hero.name': 'Dein Name',
    'hero.intro': 'Deine Einführung...',
    // ... more translations
  },
};
```

### Modify Design

Update design tokens in `client/src/index.css`:

```css
:root {
  --primary: #4F46E5;           /* Main accent color */
  --background: #F8F7F5;        /* Background color */
  --foreground: #1F2937;        /* Text color */
  /* ... more tokens */
}
```

### Add New Sections

1. Create a new component in `client/src/components/`
2. Import it in `client/src/App.tsx`
3. Add it to the main layout

## 🚢 Deployment

### Deploy to Manus

The portfolio is ready to deploy to Manus hosting:

1. Create a checkpoint in the Manus UI
2. Click the "Publish" button
3. Your portfolio will be live at a custom domain

### Deploy to Other Platforms

The project can also be deployed to:

- **Vercel**: `vercel deploy`
- **Netlify**: `netlify deploy`
- **GitHub Pages**: Configure in repository settings
- **Any Node.js host**: Run `pnpm build && pnpm start`

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm check` | Run TypeScript type checking |
| `pnpm format` | Format code with Prettier |

## 📞 Contact

- **Email**: k.venkataashok123@gmail.com
- **Phone**: +49 176 75243860
- **LinkedIn**: [linkedin.com/in/ashokreddykesari](https://linkedin.com/in/ashokreddykesari)
- **GitHub**: [github.com/Ashokreddy2806](https://github.com/Ashokreddy2806)

## 📄 License

This project is open source and available under the MIT License.

## 🎓 Credits

Built with React, Tailwind CSS, and Framer Motion. Designed with Neo-Brutalism principles.

---

**Made with ❤️ by Ashok Reddy**
