import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ShoppingCart, BarChart3, Package, Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';

import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Recommendations from './pages/Recommendations';
import PurchaseHistory from './pages/PurchaseHistory';

function NavLink({ to, icon: Icon, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
          : 'text-slate-600 hover:bg-slate-100'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{children}</span>
    </Link>
  );
}

function AppContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary-500 to-secondary-600 p-2 rounded-xl shadow-lg">
                <ShoppingCart className="text-white" size={24} />
              </div>

              <div>
                <h1 className="text-2xl font-bold gradient-text">
                  SmartCart
                </h1>

                <p className="text-xs text-slate-500">
                  AI-Powered Recommendations
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              <NavLink to="/" icon={BarChart3}>
                Dashboard
              </NavLink>

              <NavLink to="/products" icon={Package}>
                Products
              </NavLink>

              <NavLink to="/recommendations" icon={Sparkles}>
                Recommendations
              </NavLink>

              <NavLink to="/history" icon={ShoppingCart}>
                My Orders
              </NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 space-y-2 animate-slide-up">

              <NavLink to="/" icon={BarChart3}>
                Dashboard
              </NavLink>

              <NavLink to="/products" icon={Package}>
                Products
              </NavLink>

              <NavLink to="/recommendations" icon={Sparkles}>
                Recommendations
              </NavLink>

              <NavLink to="/history" icon={ShoppingCart}>
                My Orders
              </NavLink>

            </nav>
          )}

        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/recommendations"
            element={<Recommendations />}
          />
          <Route
            path="/history"
            element={<PurchaseHistory />}
          />
        </Routes>

      </main>

    </div>
  );
}

function App() {
  return (
    <Router basename="/ecommerce-recommender">
      <AppContent />
    </Router>
  );
}

export default App;