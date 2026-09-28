@echo off
echo ╔══════════════════════════════════════════════════════════╗
echo ║  SmartCart - Quick Setup Script                         ║
echo ║  Setting up your development environment...             ║
echo ╚══════════════════════════════════════════════════════════╝
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

echo ✅ Node.js detected
echo.

REM Frontend setup
echo 📦 Installing frontend dependencies...
cd frontend
call npm install

if %ERRORLEVEL% EQU 0 (
    echo ✅ Frontend dependencies installed successfully!
) else (
    echo ❌ Frontend installation failed
    pause
    exit /b 1
)

echo.
echo ╔══════════════════════════════════════════════════════════╗
echo ║  Setup Complete! 🎉                                      ║
echo ╚══════════════════════════════════════════════════════════╝
echo.
echo 🚀 Quick Commands:
echo.
echo   Start Development Server:
echo     cd frontend ^&^& npm run dev
echo.
echo   Build for Production:
echo     cd frontend ^&^& npm run build
echo.
echo   Deploy to GitHub Pages:
echo     cd frontend ^&^& npm run deploy
echo.
echo 📚 Read README.md for detailed instructions
echo 🚀 Read DEPLOYMENT.md for deployment guide
echo 🎯 Read DEMO_GUIDE.md for presentation tips
echo.
pause
