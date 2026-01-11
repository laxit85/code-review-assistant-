import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Zap, Shield, BarChart3, FileCode, GitBranch } from 'lucide-react';

export function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="inline-block p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl mb-6">
          <Code2 className="w-16 h-16 text-blue-400" />
        </div>
        <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          AI-Powered Code Review
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Elevate your code quality with intelligent analysis, automated reviews, and actionable insights
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity"
          >
            <span>Get Started</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-blue-500 transition-all hover:scale-105">
          <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
            <Zap className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-xl mb-2">Lightning Fast</h3>
          <p className="text-slate-400">
            Get instant code analysis and feedback with our powerful AI engine
          </p>
        </div>

        <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-purple-500 transition-all hover:scale-105">
          <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
            <Shield className="w-8 h-8 text-purple-400" />
          </div>
          <h3 className="text-xl mb-2">Security Focused</h3>
          <p className="text-slate-400">
            Identify security vulnerabilities and best practice violations
          </p>
        </div>

        <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-pink-500 transition-all hover:scale-105">
          <div className="p-3 bg-pink-500/20 rounded-lg w-fit mb-4">
            <BarChart3 className="w-8 h-8 text-pink-400" />
          </div>
          <h3 className="text-xl mb-2">Detailed Analytics</h3>
          <p className="text-slate-400">
            Comprehensive reports with metrics and improvement suggestions
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl mb-4">How It Works</h2>
        <p className="text-slate-400 mb-12">Simple, fast, and effective code review process</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="text-center">
          <div className="inline-block p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4">
            <FileCode className="w-8 h-8" />
          </div>
          <h3 className="text-xl mb-2">1. Upload Your Code</h3>
          <p className="text-slate-400">
            Simply upload your code files or paste code directly
          </p>
        </div>

        <div className="text-center">
          <div className="inline-block p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mb-4">
            <GitBranch className="w-8 h-8" />
          </div>
          <h3 className="text-xl mb-2">2. AI Analysis</h3>
          <p className="text-slate-400">
            Our AI analyzes your code for issues, bugs, and improvements
          </p>
        </div>

        <div className="text-center">
          <div className="inline-block p-4 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full mb-4">
            <BarChart3 className="w-8 h-8" />
          </div>
          <h3 className="text-xl mb-2">3. Get Results</h3>
          <p className="text-slate-400">
            Receive detailed reports with actionable insights
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-12 text-center border border-blue-500/20">
        <h2 className="text-3xl md:text-4xl mb-4">Ready to improve your code?</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          Join thousands of developers using CodeReview AI to write better code
        </p>
        <Link
          to="/register"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity"
        >
          <span>Start Free Trial</span>
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
