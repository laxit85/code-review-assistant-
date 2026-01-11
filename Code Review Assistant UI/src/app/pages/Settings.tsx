import { Settings as SettingsIcon, User, Bell, Lock, Palette, Code2, Save } from 'lucide-react';

export function Settings() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-8">
        <SettingsIcon className="w-8 h-8 text-blue-400" />
        <div>
          <h1 className="text-3xl">Settings</h1>
          <p className="text-slate-400">Manage your account and preferences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-4 space-y-2">
            <button className="w-full flex items-center space-x-3 px-4 py-3 bg-blue-500/20 text-blue-400 rounded-lg">
              <User className="w-5 h-5" />
              <span>Profile</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-slate-700 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              <span>Notifications</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-slate-700 rounded-lg transition-colors">
              <Lock className="w-5 h-5" />
              <span>Security</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-slate-700 rounded-lg transition-colors">
              <Palette className="w-5 h-5" />
              <span>Appearance</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-slate-700 rounded-lg transition-colors">
              <Code2 className="w-5 h-5" />
              <span>Code Preferences</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Profile Settings */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <h2 className="text-2xl mb-6">Profile Information</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    defaultValue="John"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    defaultValue="Doe"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue="john.doe@example.com"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="bio" className="block text-sm mb-2">
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell us about yourself..."
                ></textarea>
              </div>

              <div className="flex items-center justify-end space-x-3">
                <button
                  type="button"
                  className="px-6 py-3 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          {/* Notification Preferences */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <h2 className="text-2xl mb-6">Notification Preferences</h2>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg cursor-pointer">
                <div>
                  <p className="mb-1">Email Notifications</p>
                  <p className="text-sm text-slate-400">Receive email updates about your reviews</p>
                </div>
                <input type="checkbox" className="w-5 h-5 bg-slate-900 border-slate-700 rounded" defaultChecked />
              </label>

              <label className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg cursor-pointer">
                <div>
                  <p className="mb-1">Weekly Summary</p>
                  <p className="text-sm text-slate-400">Get a weekly summary of your code reviews</p>
                </div>
                <input type="checkbox" className="w-5 h-5 bg-slate-900 border-slate-700 rounded" defaultChecked />
              </label>

              <label className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg cursor-pointer">
                <div>
                  <p className="mb-1">Critical Issues Alert</p>
                  <p className="text-sm text-slate-400">Get notified immediately about critical issues</p>
                </div>
                <input type="checkbox" className="w-5 h-5 bg-slate-900 border-slate-700 rounded" defaultChecked />
              </label>

              <label className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg cursor-pointer">
                <div>
                  <p className="mb-1">Marketing Updates</p>
                  <p className="text-sm text-slate-400">Receive updates about new features and promotions</p>
                </div>
                <input type="checkbox" className="w-5 h-5 bg-slate-900 border-slate-700 rounded" />
              </label>
            </div>
          </div>

          {/* Code Preferences */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <h2 className="text-2xl mb-6">Code Review Preferences</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="language" className="block text-sm mb-2">
                  Default Language
                </label>
                <select
                  id="language"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option>JavaScript</option>
                  <option>TypeScript</option>
                  <option>Python</option>
                  <option>Java</option>
                  <option>C++</option>
                </select>
              </div>

              <div>
                <label htmlFor="strictness" className="block text-sm mb-2">
                  Review Strictness
                </label>
                <select
                  id="strictness"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option>Standard</option>
                  <option>Strict</option>
                  <option>Lenient</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
