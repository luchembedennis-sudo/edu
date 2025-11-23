import { useState } from 'react';
import { ArrowLeft, Plus, Edit, Trash2, Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';

interface NewsManagementProps {
  onBack: () => void;
}

export function NewsManagement({ onBack }: NewsManagementProps) {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const news = [
    {
      id: 1,
      title: 'Semester Break Announcement',
      content: 'The university will be on break from December 15th to January 8th. All academic activities will resume on January 9th.',
      publishDate: 'Nov 20, 2025',
      status: 'published'
    },
    {
      id: 2,
      title: 'New Library Resources Available',
      content: 'Digital resources including research journals and e-books have been added to the library database.',
      publishDate: 'Nov 17, 2025',
      status: 'published'
    },
    {
      id: 3,
      title: 'Exam Schedule Released',
      content: 'The final examination schedule for Semester 1 has been published. Students can check their exam dates on the portal.',
      publishDate: 'Nov 15, 2025',
      status: 'published'
    },
    {
      id: 4,
      title: 'Campus Maintenance Notice',
      content: 'Scheduled maintenance will be conducted in Building A from November 25-27. Classes will be relocated.',
      publishDate: 'Draft',
      status: 'draft'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCreateForm(false);
    setFormData({ title: '', content: '' });
  };

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

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-white mb-2">News Management</h1>
              <p className="text-purple-100">{news.length} total announcements</p>
            </div>
            <Button 
              onClick={() => setShowCreateForm(true)}
              className="bg-white text-purple-600 hover:bg-white/90"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create News
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-6">
        {showCreateForm ? (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <h2 className="text-gray-900 mb-6">Create News Announcement</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter announcement title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="h-12 rounded-xl"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="Enter announcement content..."
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="rounded-xl min-h-[200px]"
                  required
                />
              </div>

              <div className="flex space-x-4">
                <Button 
                  type="button"
                  variant="outline"
                  className="flex-1 h-12 rounded-xl"
                  onClick={() => setShowCreateForm(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  variant="outline"
                  className="h-12 rounded-xl"
                >
                  Save as Draft
                </Button>
                <Button 
                  type="submit"
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white h-12 rounded-xl"
                >
                  Publish
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-4">
            {news.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-gray-900">{item.title}</h3>
                      <Badge className={item.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{item.content}</p>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{item.publishDate}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
