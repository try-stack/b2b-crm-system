# B2B CRM System

> Modern Customer Relationship Management system built with Next.js, TypeScript, and Tailwind CSS

[![Deploy Status](https://github.com/try-stack/b2b-crm-system/actions/workflows/deploy.yml/badge.svg)](https://github.com/try-stack/b2b-crm-system/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://try-stack.github.io/b2b-crm-system/)

## 🚀 Live Demo

**[View Live Application →](https://try-stack.github.io/b2b-crm-system/)**

## 📋 Features

### 🎯 **Core CRM Functionality**
- **Dashboard** - Real-time business metrics and KPI overview
- **Client Management** - Comprehensive customer relationship tracking
- **Lead Pipeline** - Lead conversion tracking and management
- **Deal Management** - Sales opportunity tracking with stages
- **Task Management** - Priority-based task organization
- **Analytics** - Business intelligence and performance reports
- **Reporting** - Custom report generation and management

### 🎨 **Modern UI/UX**
- **Responsive Design** - Mobile and desktop optimized
- **Dark Mode Support** - Customizable theme preferences
- **Interactive Components** - Rich user interactions and feedback
- **Professional Styling** - Clean, modern business interface

### 🛠 **Technical Stack**
- **Framework:** Next.js 15.5.4 with App Router
- **Language:** TypeScript with strict mode
- **Styling:** Tailwind CSS v4
- **Build Tool:** Turbopack for fast development
- **Code Quality:** ESLint configuration
- **Deployment:** GitHub Pages with Actions

## 🏗 **Architecture**

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Dashboard homepage
│   ├── clients/        # Client management
│   ├── leads/          # Lead pipeline
│   ├── deals/          # Deal tracking
│   ├── tasks/          # Task management
│   ├── analytics/      # Business analytics
│   └── reports/        # Report generation
├── components/         # Shared components
│   ├── Sidebar.tsx     # Navigation sidebar
│   └── Header.tsx      # Top header component
└── globals.css         # Global styles
```

## 🚀 **Getting Started**

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/try-stack/b2b-crm-system.git
   cd b2b-crm-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build optimized production bundle
- `npm run start` - Start production server
- `npm run lint` - Run code quality checks

## 🌐 **Deployment**

### Automatic Deployment
This project automatically deploys to GitHub Pages using GitHub Actions:

- **Trigger:** Push to `main` branch
- **Build:** Next.js static export
- **Deploy:** GitHub Pages hosting
- **URL:** https://try-stack.github.io/b2b-crm-system/

### Manual Deployment
```bash
npm run build          # Build static export
# Upload ./out folder to your hosting provider
```

## 📊 **Project Status**

✅ **Completed Features:**
- Full CRM dashboard with 11 functional pages
- Responsive design for all screen sizes
- TypeScript integration with proper typing
- Component-based architecture
- GitHub Pages deployment pipeline
- Professional UI/UX design

🔄 **Future Enhancements:**
- Database integration for persistent data
- User authentication and authorization
- API routes for CRUD operations
- Advanced filtering and search
- Email integration
- Custom dashboards
- Testing suite implementation

## 🤝 **Contributing**

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- Built with [Next.js](https://nextjs.org) - React framework for production
- Styled with [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- Deployed on [GitHub Pages](https://pages.github.com) - Free hosting for open source

---

<div align="center">
  <p>⭐ If you find this project helpful, please consider giving it a star!</p>
  <p>Made with ❤️ for modern business management</p>
</div>