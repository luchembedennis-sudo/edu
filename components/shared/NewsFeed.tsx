import { ArrowLeft, Calendar, Bell } from 'lucide-react';

interface NewsFeedProps {
  onBack: () => void;
}

export function NewsFeed({ onBack }: NewsFeedProps) {
  const news = [
    {
      id: 1,
      title: 'Semester Break Announcement',
      content: 'The university will be on break from December 15th to January 8th. All academic activities will resume on January 9th, 2026.',
      date: 'Nov 20, 2025',
      category: 'Academic'
    },
    {
      id: 2,
      title: 'New Library Resources Available',
      content: 'Digital resources including research journals and e-books have been added to the library database. Students can access these resources through the university portal.',
      date: 'Nov 17, 2025',
      category: 'Library'
    },
    {
      id: 3,
      title: 'Exam Schedule Released',
      content: 'The final examination schedule for Semester 1 has been published. Students can check their exam dates on the academic portal.',
      date: 'Nov 15, 2025',
      category: 'Examinations'
    },
    {
      id: 4,
      title: 'Campus Maintenance Notice',
      content: 'Scheduled maintenance will be conducted in Building A from November 25-27. Classes will be relocated to Building B during this period.',
      date: 'Nov 12, 2025',
      category: 'Facilities'
    },
    {
      id: 5,
      title: 'Career Fair 2025',
      content: 'The annual career fair will be held on December 5th at the Main Hall. Top companies will be present for recruitment and networking.',
      date: 'Nov 10, 2025',
      category: 'Events'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Academic': 'bg-blue-100 text-blue-700',
      'Library': 'bg-purple-100 text-purple-700',
      'Examinations': 'bg-orange-100 text-orange-700',
      'Facilities': 'bg-green-100 text-green-700',
      'Events': 'bg-pink-100 text-pink-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 pt-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center text-white/90 hover:text-white mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-white mb-2">University News</h1>
              <p className="text-blue-100">Stay updated with the latest announcements</p>
            </div>
            <button className="p-3 hover:bg-blue-500/50 rounded-xl transition-colors">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-6">
        <div className="space-y-4">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <span className={`px-3 py-1 rounded-full ${getCategoryColor(item.category)}`}>
                  {item.category}
                </span>
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{item.date}</span>
                </div>
              </div>
              <h3 className="text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
