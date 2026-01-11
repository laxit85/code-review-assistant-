import { Link } from 'react-router-dom';
import { Code2, Menu, X, Home, Info, Mail, LogIn, UserPlus } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6" />
            </div>
            <span className="text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              CodeReview AI
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
              <Info className="w-4 h-4" />
              <span>About</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </Link>
            <div className="flex items-center space-x-3">
              <Link
                to="/login"
                className="flex items-center space-x-1 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Link>
              <Link
                to="/register"
                className="flex items-center space-x-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity"
              >
                <UserPlus className="w-4 h-4" />
                <span>Sign Up</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-slate-700">
            <Link
              to="/"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </Link>
            <Link
              to="/login"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </Link>
            <Link
              to="/register"
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              <UserPlus className="w-4 h-4" />
              <span>Sign Up</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
