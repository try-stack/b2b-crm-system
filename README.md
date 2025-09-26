# B2B CRM System

A modern, responsive Customer Relationship Management (CRM) system built with Next.js, TypeScript, and Tailwind CSS. This application helps businesses manage their client relationships, track leads, and monitor business performance through an intuitive dashboard.

## Features

- 📊 **Dashboard Analytics** - Real-time metrics for clients, leads, revenue, and conversion rates
- 👥 **Client Management** - Track and manage B2B client relationships
- 🎯 **Lead Tracking** - Monitor active leads and conversion pipeline
- 📈 **Revenue Monitoring** - Track monthly revenue and performance metrics
- 🔔 **Activity Feed** - Stay updated with recent business activities
- 🌙 **Dark Mode Support** - Full dark/light theme support
- 📱 **Responsive Design** - Optimized for desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Turbopack for fast development
- **Code Quality**: ESLint + TypeScript strict mode

## Getting Started

### Prerequisites

- Node.js 18+ installed on your system
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd b2b-crm-system
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint code quality checks

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main dashboard page
└── public/              # Static assets
```

## Development

The main application logic is in `src/app/page.tsx`, which contains:

- **Header Navigation** - Main navigation with CRM sections
- **Metrics Dashboard** - Key performance indicators cards
- **Activity Feed** - Recent business activity timeline

You can start customizing by modifying `src/app/page.tsx`. The page auto-updates as you edit the file thanks to Next.js hot reloading.

## Deployment

This application can be easily deployed to platforms like:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Docker containers**

For Vercel deployment:
```bash
npm run build
# Deploy to Vercel via their CLI or GitHub integration
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
