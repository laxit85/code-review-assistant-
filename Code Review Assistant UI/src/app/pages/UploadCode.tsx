import { Upload, FileCode, X, Check } from 'lucide-react';
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function UploadCode() {
  const [files, setFiles] = useState<File[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleStartReview = async () => {
    if (files.length === 0) return;

    setIsAnalyzing(true);
    try {
      // Read the first file (for simplicity, handle one file at a time)
      const file = files[0];
      const code = await file.text();

      const response = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) {
        throw new Error('Analysis failed');
      }

      const result = await response.json();

      // Store result in localStorage for the results page
      localStorage.setItem('analysisResult', JSON.stringify(result));
      localStorage.setItem('analyzedFile', file.name);

      navigate('/analysis-result');
    } catch (error) {
      console.error('Error analyzing code:', error);
      alert('Error analyzing code. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl mb-4">
            <Upload className="w-12 h-12 text-blue-400" />
          </div>
          <h1 className="text-4xl mb-2">Upload Your Code</h1>
          <p className="text-slate-400">Drag and drop or click to upload files for review</p>
        </div>

        {/* Upload Area */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border-2 border-dashed border-slate-700 p-12 mb-6 hover:border-blue-500 transition-colors cursor-pointer" onClick={handleUploadClick}>
          <div className="text-center">
            <Upload className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <p className="text-lg mb-2">Drop files here or click to browse</p>
            <p className="text-sm text-slate-400 mb-4">
              Supports: .js, .jsx, .ts, .tsx, .py, .java, .cpp, .c, .php
            </p>
            <button className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors" onClick={handleUploadClick}>
              Choose Files
            </button>
          </div>
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          multiple
          accept=".js,.jsx,.ts,.tsx,.py,.java,.cpp,.c,.php"
          className="hidden"
        />

        {/* Uploaded Files */}
        {files.length > 0 && (
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 mb-6">
            <h3 className="text-lg mb-4">Uploaded Files</h3>
            <div className="space-y-2">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-slate-900/50 rounded-lg p-3"
                >
                  <div className="flex items-center space-x-3">
                    <FileCode className="w-5 h-5 text-blue-400" />
                    <span>{file.name}</span>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="p-1 hover:bg-slate-800 rounded transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Options */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 mb-6">
          <h3 className="text-lg mb-4">Review Options</h3>
          <div className="space-y-4">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 bg-slate-900 border-slate-700 rounded" defaultChecked />
              <span>Check for security vulnerabilities</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 bg-slate-900 border-slate-700 rounded" defaultChecked />
              <span>Analyze code complexity</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 bg-slate-900 border-slate-700 rounded" defaultChecked />
              <span>Review best practices</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 bg-slate-900 border-slate-700 rounded" />
              <span>Performance optimization suggestions</span>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handleStartReview}
            disabled={files.length === 0 || isAnalyzing}
            className="flex-1 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Check className="w-5 h-5 mr-2" />
            <span>{isAnalyzing ? 'Analyzing...' : 'Start Review'}</span>
          </button>
          <button className="px-6 py-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
