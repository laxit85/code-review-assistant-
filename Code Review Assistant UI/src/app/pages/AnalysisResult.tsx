import { CheckCircle2, AlertTriangle, XCircle, Info, Download, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function AnalysisResult() {
  const [result, setResult] = useState<any>(null);
  const [fileName, setFileName] = useState<string>('');

  useEffect(() => {
    const storedResult = localStorage.getItem('analysisResult');
    const storedFileName = localStorage.getItem('analyzedFile');

    if (storedResult) {
      setResult(JSON.parse(storedResult));
    }
    if (storedFileName) {
      setFileName(storedFileName);
    }
  }, []);

  if (!result) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <p>Loading analysis results...</p>
        </div>
      </div>
    );
  }

  const issues = result.issues || [];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl mb-2">Analysis Results</h1>
          <p className="text-slate-400">main.js - Reviewed 2 minutes ago</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          <button className="flex items-center px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </button>
          <Link
            to="/report"
            className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity"
          >
            View Full Report
          </Link>
        </div>
      </div>

      {/* Score Card */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl border border-green-500/30 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">Overall Score</span>
            <CheckCircle2 className="w-5 h-5 text-green-400" />
          </div>
          <p className="text-4xl text-green-400">{result.score}/100</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">Errors</span>
            <XCircle className="w-5 h-5 text-red-400" />
          </div>
          <p className="text-4xl">1</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">Warnings</span>
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
          </div>
          <p className="text-4xl">1</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">Info</span>
            <Info className="w-5 h-5 text-blue-400" />
          </div>
          <p className="text-4xl">1</p>
        </div>
      </div>

      {/* Issues List */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 mb-8">
        <h2 className="text-2xl mb-6">Issues Found</h2>
        <div className="space-y-4">
          {issues.map((issue: any, index: number) => (
            <div
              key={index}
              className="bg-slate-900/50 rounded-lg p-4 border-l-4 border-l-red-500"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <div>
                    <p className="mb-1">{issue.issue}</p>
                    <p className="text-sm text-slate-400">Line {issue.line}</p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    issue.severity === 'High'
                      ? 'bg-red-500/20 text-red-400'
                      : issue.severity === 'Medium'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}
                >
                  {issue.severity}
                </span>
              </div>
              <div className="mt-3 p-3 bg-slate-800/50 rounded-lg">
                <p className="text-sm text-slate-300">💡 {issue.suggestion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
          <h3 className="text-lg mb-4">Code Quality</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">Maintainability</span>
                <span>87%</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">Reliability</span>
                <span>92%</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">Security</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
          <h3 className="text-lg mb-4">Complexity</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-400 text-sm">Cyclomatic Complexity</span>
              <span>12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 text-sm">Cognitive Complexity</span>
              <span>8</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 text-sm">Lines of Code</span>
              <span>345</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
          <h3 className="text-lg mb-4">Coverage</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-400 text-sm">Test Coverage</span>
              <span>68%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 text-sm">Branch Coverage</span>
              <span>54%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 text-sm">Function Coverage</span>
              <span>82%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Optimization Suggestions */}
      {result.suggestions && result.suggestions.length > 0 && (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
          <h2 className="text-2xl mb-6">Optimization Suggestions</h2>
          <div className="space-y-4">
            {result.suggestions.map((suggestion: any, index: number) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-lg mb-2">{suggestion.issue}</p>
                <p className="text-sm text-slate-300">💡 {suggestion.suggestion}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
