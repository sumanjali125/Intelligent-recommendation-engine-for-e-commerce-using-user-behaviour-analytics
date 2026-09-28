#!/bin/bash

echo "╔══════════════════════════════════════════════════════════╗"
echo "║  SmartCart - Quick Setup Script                         ║"
echo "║  Setting up your development environment...             ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js $(node --version) detected"
echo ""

# Frontend setup
echo "📦 Installing frontend dependencies..."
cd frontend
npm install

if [ $? -eq 0 ]; then
    echo "✅ Frontend dependencies installed successfully!"
else
    echo "❌ Frontend installation failed"
    exit 1
fi

echo ""
echo "╔══════════════════════════════════════════════════════════╗"
echo "║  Setup Complete! 🎉                                      ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""
echo "🚀 Quick Commands:"
echo ""
echo "  Start Development Server:"
echo "    cd frontend && npm run dev"
echo ""
echo "  Build for Production:"
echo "    cd frontend && npm run build"
echo ""
echo "  Deploy to GitHub Pages:"
echo "    cd frontend && npm run deploy"
echo ""
echo "📚 Read README.md for detailed instructions"
echo "🚀 Read DEPLOYMENT.md for deployment guide"
echo "🎯 Read DEMO_GUIDE.md for presentation tips"
echo ""
