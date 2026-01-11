import { History as HistoryIcon, FileCode, Calendar, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function History() {
  const history = [
    { id: 1, name: 'UserAuth.js', date: '2024-01-15', score: 92, issues: 3, status: 'Completed' },
    { id: 2, name: 'Dashboard.tsx', date: '2024-01-14', score: 88, issues: 5, status: 'Completed' },
    { id: 3, name: 'api/routes.js', date: '2024-01-13', score: 75, issues: 8, status: 'Completed' },
    { id: 4, name: 'utils/helpers.py', date: '2024-01-12', score: 95, issues: 2, status: 'Completed' },
    { id: 5, name: 'models/User.java', date: '2024-01-11', score: 82, issues: 6, status: 'Completed' },
    { id: 6, name: 'components/Form.tsx', date: '2024-01-10', score: 90, issues: 4, status: 'Completed' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <HistoryIcon className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-3xl">Review History</h1>
            <p className="text-slate-400">Browse your past code reviews</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search files..."
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <select className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors">
            <option>All Languages</option>
            <option>JavaScript</option>
            <option>TypeScript</option>
            <option>Python</option>
            <option>Java</option>
          </select>
          <select className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors">
            <option>All Time</option>
            <option>Last Week</option>
            <option>Last Month</option>
            <option>Last Year</option>
          </select>
          <button className="flex items-center justify-center px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </button>
        </div>
      </div>

      {/* History Table */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-900/50">
              <tr>
                <th className="px-6 py-4 text-left text-sm">File Name</th>
                <th className="px-6 py-4 text-left text-sm">Date</th>
                <th className="px-6 py-4 text-left text-sm">Score</th>
                <th className="px-6 py-4 text-left text-sm">Issues</th>
                <th className="px-6 py-4 text-left text-sm">Status</th>
                <th className="px-6 py-4 text-left text-sm">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {history.map((item) => (
                <tr key={item.id} className="hover:bg-slate-900/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <FileCode className="w-5 h-5 text-blue-400" />
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2 text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{item.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.score >= 90
                          ? 'bg-green-500/20 text-green-400'
                          : item.score >= 75
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {item.score}/100
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-slate-400">{item.issues}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      to="/analysis-result"
                      className="text-blue-400 hover:text-blue-300 text-sm"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-slate-900/50 px-6 py-4 flex items-center justify-between border-t border-slate-700">
          <p className="text-sm text-slate-400">Showing 1 to 6 of 48 results</p>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 bg-slate-800 rounded hover:bg-slate-700 transition-colors text-sm">
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-500 rounded hover:bg-blue-600 transition-colors text-sm">
              1
            </button>
            <button className="px-3 py-1 bg-slate-800 rounded hover:bg-slate-700 transition-colors text-sm">
              2
            </button>
            <button className="px-3 py-1 bg-slate-800 rounded hover:bg-slate-700 transition-colors text-sm">
              3
            </button>
            <button className="px-3 py-1 bg-slate-800 rounded hover:bg-slate-700 transition-colors text-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
