import { ArrowLeft, FileText, Download, Trash2, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';

interface FileManagementProps {
  onBack: () => void;
}

export function FileManagement({ onBack }: FileManagementProps) {
  const files = [
    {
      id: 1,
      name: 'Data Structures - Week 1.pdf',
      uploadedBy: 'Dr. Sarah Johnson',
      course: 'CS201',
      size: '2.3 MB',
      downloads: 42,
      uploadDate: 'Nov 20, 2025'
    },
    {
      id: 2,
      name: 'Database Assignment 1.pdf',
      uploadedBy: 'Alice Johnson',
      course: 'CS301',
      size: '1.1 MB',
      downloads: 15,
      uploadDate: 'Nov 19, 2025'
    },
    {
      id: 3,
      name: 'Software Engineering Notes.pptx',
      uploadedBy: 'Dr. Emily Brown',
      course: 'CS302',
      size: '4.5 MB',
      downloads: 38,
      uploadDate: 'Nov 18, 2025'
    },
    {
      id: 4,
      name: 'OS Concepts Chapter 3.pdf',
      uploadedBy: 'Bob Smith',
      course: 'CS303',
      size: '3.2 MB',
      downloads: 28,
      uploadDate: 'Nov 17, 2025'
    }
  ];

  const totalSize = files.reduce((acc, file) => {
    const size = parseFloat(file.size);
    return acc + size;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 pt-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center text-white/90 hover:text-white mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>

          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-white mb-2">File Management</h1>
              <p className="text-purple-100">{files.length} total files • {totalSize.toFixed(1)} MB storage used</p>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input 
              placeholder="Search files by name or course..." 
              className="pl-12 h-12 rounded-xl bg-white border-0"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-6">
        {/* Storage Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500 mb-2">Total Files</p>
            <p className="text-gray-900 text-3xl">{files.length}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500 mb-2">Storage Used</p>
            <p className="text-gray-900 text-3xl">{totalSize.toFixed(1)} MB</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500 mb-2">Total Downloads</p>
            <p className="text-gray-900 text-3xl">
              {files.reduce((acc, file) => acc + file.downloads, 0)}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500 mb-2">Storage Available</p>
            <p className="text-gray-900 text-3xl">89.2 GB</p>
          </div>
        </div>

        {/* Files List */}
        <div className="space-y-4">
          {files.map((file) => (
            <div key={file.id} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-gray-900">{file.name}</h3>
                      <Badge variant="outline">{file.course}</Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <span>Uploaded by {file.uploadedBy}</span>
                      <span>•</span>
                      <span>{file.size}</span>
                      <span>•</span>
                      <span>{file.downloads} downloads</span>
                      <span>•</span>
                      <span>{file.uploadDate}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
