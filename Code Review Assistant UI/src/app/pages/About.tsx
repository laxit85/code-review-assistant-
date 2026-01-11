import { Info, Target, Users, Award } from 'lucide-react';

export function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl mb-6">
            <Info className="w-12 h-12 text-blue-400" />
          </div>
          <h1 className="text-5xl mb-4">About CodeReview AI</h1>
          <p className="text-xl text-slate-300">
            Revolutionizing code quality through artificial intelligence
          </p>
        </div>

        {/* Mission */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8 mb-8">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-500/20 rounded-lg flex-shrink-0">
              <Target className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl mb-4">Our Mission</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                At CodeReview AI, we're on a mission to make high-quality code accessible to every
                developer. We believe that everyone deserves access to expert-level code reviews,
                regardless of their experience or team size.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Our AI-powered platform analyzes millions of lines of code to provide instant,
                actionable feedback that helps developers write better, more secure, and more
                maintainable code.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
              <Users className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl mb-2">Community First</h3>
            <p className="text-slate-400">
              We build tools for developers, by developers. Your feedback shapes our roadmap.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <div className="p-3 bg-pink-500/20 rounded-lg w-fit mb-4">
              <Award className="w-8 h-8 text-pink-400" />
            </div>
            <h3 className="text-xl mb-2">Excellence</h3>
            <p className="text-slate-400">
              We're committed to delivering the most accurate and helpful code analysis available.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20">
          <h2 className="text-2xl mb-6 text-center">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                1M+
              </p>
              <p className="text-slate-400">Code Reviews</p>
            </div>
            <div className="text-center">
              <p className="text-4xl mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                50K+
              </p>
              <p className="text-slate-400">Developers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                99.9%
              </p>
              <p className="text-slate-400">Accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
