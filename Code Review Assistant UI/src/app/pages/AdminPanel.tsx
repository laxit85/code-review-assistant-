import { Shield, Users, FileCode, Activity, TrendingUp, AlertCircle } from 'lucide-react';

export function AdminPanel() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', reviews: 48, status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', reviews: 32, status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', reviews: 15, status: 'Inactive' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-8">
        <Shield className="w-8 h-8 text-purple-400" />
        <div>
          <h1 className="text-3xl">Admin Panel</h1>
          <p className="text-slate-400">Manage users and system settings</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-500/30 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-500/20 rounded-lg">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <TrendingUp className="w-5 h-5 text-blue-400" />
          </div>
          <p className="text-3xl mb-1">1,284</p>
          <p className="text-slate-400 text-sm">Total Users</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl border border-purple-500/30 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-500/20 rounded-lg">
              <FileCode className="w-6 h-6 text-purple-400" />
            </div>
            <TrendingUp className="w-5 h-5 text-purple-400" />
          </div>
          <p className="text-3xl mb-1">15,428</p>
          <p className="text-slate-400 text-sm">Total Reviews</p>
        </div>

        <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl border border-green-500/30 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-500/20 rounded-lg">
              <Activity className="w-6 h-6 text-green-400" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <p className="text-3xl mb-1">98.5%</p>
          <p className="text-slate-400 text-sm">System Uptime</p>
        </div>

        <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl border border-red-500/30 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-500/20 rounded-lg">
              <AlertCircle className="w-6 h-6 text-red-400" />
            </div>
          </div>
          <p className="text-3xl mb-1">12</p>
          <p className="text-slate-400 text-sm">Active Issues</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Management */}
        <div className="lg:col-span-2">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl">User Management</h2>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity text-sm">
                Add User
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-900/50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm">Name</th>
                    <th className="px-4 py-3 text-left text-sm">Email</th>
                    <th className="px-4 py-3 text-left text-sm">Reviews</th>
                    <th className="px-4 py-3 text-left text-sm">Status</th>
                    <th className="px-4 py-3 text-left text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-900/30 transition-colors">
                      <td className="px-4 py-3">{user.name}</td>
                      <td className="px-4 py-3 text-slate-400 text-sm">{user.email}</td>
                      <td className="px-4 py-3">{user.reviews}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            user.status === 'Active'
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-slate-500/20 text-slate-400'
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-blue-400 hover:text-blue-300 text-sm mr-3">
                          Edit
                        </button>
                        <button className="text-red-400 hover:text-red-300 text-sm">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* System Settings */}
        <div className="space-y-6">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <h3 className="text-lg mb-4">System Settings</h3>
            <div className="space-y-3">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm">Maintenance Mode</span>
                <input type="checkbox" className="w-4 h-4 bg-slate-900 border-slate-700 rounded" />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm">Debug Mode</span>
                <input type="checkbox" className="w-4 h-4 bg-slate-900 border-slate-700 rounded" />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm">Auto Backup</span>
                <input type="checkbox" className="w-4 h-4 bg-slate-900 border-slate-700 rounded" defaultChecked />
              </label>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <h3 className="text-lg mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors text-sm text-left">
                View Logs
              </button>
              <button className="w-full px-4 py-2 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors text-sm text-left">
                Database Backup
              </button>
              <button className="w-full px-4 py-2 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors text-sm text-left">
                Clear Cache
              </button>
              <button className="w-full px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors text-sm text-left">
                System Restart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
