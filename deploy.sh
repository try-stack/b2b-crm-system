#!/bin/bash
# Quick deployment script for B2B CRM System

echo "🚀 B2B CRM System Deployment"
echo "=============================="

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Static files ready in 'out/' folder"
    echo ""
    echo "🌐 Deployment options:"
    echo "1. Drag 'out/' folder to Netlify/Vercel"
    echo "2. Upload to your web hosting"
    echo "3. Use GitHub Pages"
    echo ""
    echo "🔗 Local preview available at:"
    echo "   cd out && npx serve ."
else
    echo "❌ Build failed!"
    exit 1
fi