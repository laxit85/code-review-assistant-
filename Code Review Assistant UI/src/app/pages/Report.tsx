import { FileText, Download, Share2, Printer, TrendingUp, TrendingDown } from 'lucide-react';
import { BarChart3 } from 'lucide-react';

export function Report() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <FileText className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-3xl">Detailed Report</h1>
            <p className="text-slate-400">main.js - Generated on Jan 15, 2024</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
            <Printer className="w-4 h-4 mr-2" />
            Print
          </button>
          <button className="flex items-center px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </button>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </button>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8 mb-8">
        <h2 className="text-2xl mb-4">Executive Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-slate-400 text-sm mb-2">Overall Grade</p>
            <p className="text-4xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              B+
            </p>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-2">Total Issues</p>
            <p className="text-4xl">8</p>
            <p className="text-sm text-red-400 flex items-center mt-1">
              <TrendingDown className="w-4 h-4 mr-1" />
              12% from last review
            </p>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-2">Code Quality</p>
            <p className="text-4xl">85%</p>
            <p className="text-sm text-green-400 flex items-center mt-1">
              <TrendingUp className="w-4 h-4 mr-1" />
              5% improvement
            </p>
          </div>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <BarChart3 className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl">Quality Metrics</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">Maintainability</span>
                <span>87/100</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-3">
                <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">Reliability</span>
                <span>92/100</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-3">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">Security</span>
                <span>75/100</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-3">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-3 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">Performance</span>
                <span>80/100</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-3">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
          <h3 className="text-xl mb-4">Issue Breakdown</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-red-500/10 rounded-lg">
              <div>
                <p className="mb-1">Critical</p>
                <p className="text-sm text-slate-400">Security vulnerabilities</p>
              </div>
              <span className="text-2xl text-red-400">1</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-orange-500/10 rounded-lg">
              <div>
                <p className="mb-1">High</p>
                <p className="text-sm text-slate-400">Major issues</p>
              </div>
              <span className="text-2xl text-orange-400">2</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-yellow-500/10 rounded-lg">
              <div>
                <p className="mb-1">Medium</p>
                <p className="text-sm text-slate-400">Code smell</p>
              </div>
              <span className="text-2xl text-yellow-400">3</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-blue-500/10 rounded-lg">
              <div>
                <p className="mb-1">Low</p>
                <p className="text-sm text-slate-400">Minor improvements</p>
              </div>
              <span className="text-2xl text-blue-400">2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
        <h2 className="text-2xl mb-6">Recommendations</h2>
        <div className="space-y-4">
          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm flex-shrink-0">
                Critical
              </span>
              <div>
                <p className="mb-2">Fix SQL injection vulnerability in user authentication</p>
                <p className="text-sm text-slate-400">
                  Replace string concatenation with parameterized queries to prevent SQL injection attacks.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm flex-shrink-0">
                Medium
              </span>
              <div>
                <p className="mb-2">Improve error handling in API routes</p>
                <p className="text-sm text-slate-400">
                  Add try-catch blocks and proper error messages for better debugging and user experience.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm flex-shrink-0">
                Low
              </span>
              <div>
                <p className="mb-2">Refactor duplicate code in helper functions</p>
                <p className="text-sm text-slate-400">
                  Extract common functionality into shared utilities to improve maintainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
