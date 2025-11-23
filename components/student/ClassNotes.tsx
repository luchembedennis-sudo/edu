import { ArrowLeft, FileText, Download, Upload, Search, Filter } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';

interface ClassNotesProps {
  onBack: () => void;
}

export function ClassNotes({ onBack }: ClassNotesProps) {
  const notes = [
    { 
      id: 1, 
      title: 'Data Structures - Chapter 1 Notes', 
      course: 'CS201', 
      uploadedBy: 'Alice Johnson',
      date: 'Nov 20, 2025',
      downloads: 45,
      type: 'PDF',
      size: '1.2 MB'
    },
    { 
      id: 2, 
      title: 'Database SQL Queries Cheat Sheet', 
      course: 'CS301', 
      uploadedBy: 'Bob Smith',
      date: 'Nov 19, 2025',
      downloads: 38,
      type: 'PDF',
      size: '850 KB'
    },
    { 
      id: 3, 
      title: 'Software Engineering UML Diagrams', 
      course: 'CS302', 
      uploadedBy: 'Carol White',
      date: 'Nov 18, 2025',
      downloads: 52,
      type: 'PDF',
      size: '2.1 MB'
    },
    { 
      id: 4, 
      title: 'Operating Systems - Process Management', 
      course: 'CS303', 
      uploadedBy: 'David Lee',
      date: 'Nov 17, 2025',
      downloads: 41,
      type: 'PDF',
      size: '1.8 MB'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 pt-8 pb-12">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center text-white/90 hover:text-white mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>

          <h1 className="text-white mb-6">Class Notes</h1>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input 
              placeholder="Search notes by title or course..." 
              className="pl-12 h-12 rounded-xl bg-white border-0"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-6">
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter by Course
              </Button>
              <Button variant="outline" size="sm">
                Sort by Date
              </Button>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Upload className="w-4 h-4 mr-2" />
              Upload Notes
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {notes.map((note) => (
            <div key={note.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-gray-900">{note.title}</h3>
                      <Badge variant="outline">{note.course}</Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-500">
                      <span>Uploaded by {note.uploadedBy}</span>
                      <span>•</span>
                      <span>{note.date}</span>
                      <span>•</span>
                      <span>{note.size}</span>
                    </div>
                  </div>
                </div>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700 flex-shrink-0">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-gray-500">
                <span className="flex items-center">
                  <Download className="w-4 h-4 mr-1" />
                  {note.downloads} downloads
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
