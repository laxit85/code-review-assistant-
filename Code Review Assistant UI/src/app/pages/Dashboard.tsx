import { Link } from 'react-router-dom';
import { LayoutDashboard, Upload, FileCode, History, Settings, BarChart3, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export function Dashboard() {
  const stats = [
    { label: 'Total Reviews', value: '48', icon: FileCode, color: 'from-blue-500 to-blue-600' },
    { label: 'This Week', value: '12', icon: Clock, color: 'from-purple-500 to-purple-600' },
    { label: 'Issues Found', value: '143', icon: AlertCircle, color: 'from-pink-500 to-pink-600' },
    { label: 'Resolved', value: '118', icon: CheckCircle2, color: 'from-green-500 to-green-600' },
  ];

  const recentReviews = [
    { id: 1, name: 'UserAuth.js', status: 'Completed', issues: 3, date: '2 hours ago' },
    { id: 2, name: 'Dashboard.tsx', status: 'Completed', issues: 0, date: '5 hours ago' },
    { id: 3, name: 'api/routes.js', status: 'In Progress', issues: 5, date: '1 day ago' },
    { id: 4, name: 'utils/helpers.py', status: 'Completed', issues: 2, date: '2 days ago' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl mb-2 flex items-center gap-3">
            <LayoutDashboard className="w-8 h-8 text-blue-400" />
            Dashboard
          </h1>
          <p className="text-slate-400">Welcome back! Here's your code review overview</p>
        </div>
        <Link
          to="/upload-code"
          className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity"
        >
          <Upload className="w-5 h-5 mr-2" />
          <span>New Review</span>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 hover:border-blue-500 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-lg`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
            <p className="text-3xl mb-1">{stat.value}</p>
            <p className="text-slate-400 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link
          to="/upload-code"
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 hover:border-blue-500 transition-all group"
        >
          <Upload className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl mb-2">Upload Code</h3>
          <p className="text-slate-400 text-sm">Upload files for instant review</p>
        </Link>

        <Link
          to="/code-editor"
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 hover:border-purple-500 transition-all group"
        >
          <FileCode className="w-8 h-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl mb-2">Code Editor</h3>
          <p className="text-slate-400 text-sm">Write and review code online</p>
        </Link>

        <Link
          to="/history"
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 hover:border-pink-500 transition-all group"
        >
          <History className="w-8 h-8 text-pink-400 mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl mb-2">View History</h3>
          <p className="text-slate-400 text-sm">Browse past reviews</p>
        </Link>
      </div>

      {/* Recent Reviews */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl">Recent Reviews</h2>
          <Link to="/history" className="text-blue-400 hover:text-blue-300 text-sm">
            View All
          </Link>
        </div>

        <div className="space-y-3">
          {recentReviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-900/50 rounded-lg p-4 hover:bg-slate-900 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <FileCode className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="mb-1">{review.name}</p>
                    <p className="text-sm text-slate-400">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      review.status === 'Completed'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}
                  >
                    {review.status}
                  </span>
                  <span className="text-sm text-slate-400">{review.issues} issues</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
