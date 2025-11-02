# Mrs Vicola

A modern React application built with TypeScript, Tailwind CSS, and SCSS.

## Tech Stack

- ⚛️ **React 19** - Latest React with modern features
- 📘 **TypeScript** - Type-safe development
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework
- 💅 **SCSS** - Advanced CSS preprocessing
- ⚡ **Vite** - Lightning-fast build tool
- 🎯 **ESLint** - Code quality and consistency

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
Mrs Vicola/
├── src/
│   ├── App.tsx          # Main application component
│   ├── App.scss         # SCSS styles
│   ├── main.tsx         # Application entry point
│   ├── index.css        # Global styles with Tailwind
│   └── vite-env.d.ts    # Vite type definitions
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md           # This file
```

## Features

- ✅ React 19 with TypeScript
- ✅ Tailwind CSS v4 for utility-first styling
- ✅ SCSS support for advanced CSS features
- ✅ Hot Module Replacement (HMR)
- ✅ ESLint for code quality
- ✅ Path aliases (@/* for src/*)
- ✅ Modern build tooling with Vite

## Development

The project uses:
- **Tailwind CSS** for utility classes and rapid UI development
- **SCSS** for component-specific styles with nesting and variables
- **TypeScript** for type safety and better developer experience

You can mix and match Tailwind utilities with SCSS as needed!

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## License

MIT