import { FileCode, Play, Save, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CodeEditor() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <FileCode className="w-8 h-8 text-blue-400" />
          <h1 className="text-3xl">Code Editor</h1>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
            <Save className="w-4 h-4 mr-2" />
            Save
          </button>
          <button className="flex items-center px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          <Link
            to="/analysis-result"
            className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Play className="w-4 h-4 mr-2" />
            Analyze
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Editor */}
        <div className="lg:col-span-2 bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
          <div className="bg-slate-800 border-b border-slate-700 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm">main.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <select className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-sm">
                <option>JavaScript</option>
                <option>TypeScript</option>
                <option>Python</option>
                <option>Java</option>
              </select>
            </div>
          </div>
          <div className="p-4">
            <textarea
              className="w-full h-[600px] bg-transparent text-green-400 font-mono text-sm resize-none focus:outline-none"
              placeholder="// Write your code here..."
              defaultValue={`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(10);
console.log('Fibonacci result:', result);

// More code here...`}
            ></textarea>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* File Explorer */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-4">
            <h3 className="mb-4">Files</h3>
            <div className="space-y-1">
              <div className="px-3 py-2 bg-blue-500/20 rounded-lg cursor-pointer">
                <span className="text-sm">main.js</span>
              </div>
              <div className="px-3 py-2 hover:bg-slate-700 rounded-lg cursor-pointer">
                <span className="text-sm text-slate-400">utils.js</span>
              </div>
              <div className="px-3 py-2 hover:bg-slate-700 rounded-lg cursor-pointer">
                <span className="text-sm text-slate-400">helpers.js</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-4">
            <h3 className="mb-4">Statistics</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Lines</span>
                <span className="text-sm">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Characters</span>
                <span className="text-sm">178</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Words</span>
                <span className="text-sm">24</span>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-xl border border-blue-500/20 p-4">
            <h3 className="mb-2 text-sm">💡 Pro Tip</h3>
            <p className="text-xs text-slate-400">
              Use Ctrl+Space for autocomplete and Ctrl+S to save your code
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
