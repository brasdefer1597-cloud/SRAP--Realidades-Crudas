# SRAP - Realidades Crudas

## Overview
A React application with a philosophical/introspective theme in Spanish. The app includes AI-powered analysis features using Google's Gemini API.

## Tech Stack
- React 19
- TypeScript
- Vite (build tool)
- Tailwind CSS (via CDN)
- Google Gemini AI integration

## Project Structure
```
├── components/          # React components
│   ├── SectionBreathing.tsx
│   ├── SectionExam.tsx
│   ├── SectionHeader.tsx
│   └── SectionTruths.tsx
├── services/
│   └── geminiService.ts # Gemini AI integration
├── App.tsx              # Main app component
├── index.tsx            # Entry point
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
└── package.json
```

## Development
- Frontend runs on port 5000
- Run with: `npm run dev`

## Environment Variables
- `GEMINI_API_KEY`: Required for AI analysis features (optional - app works without it)

## Deployment
- Static deployment using Vite build
- Build command: `npm run build`
- Output directory: `dist`
