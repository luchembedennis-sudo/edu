import { BookOpen, FileText, Users, Bell, Search, Calendar, Newspaper, LogOut } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface StudentHomeProps {
  userData: any;
  onCourseSelect: (course: any) => void;
  onNavigate: (screen: string) => void;
  onLogout: () => void;
}

export function StudentHome({ userData, onCourseSelect, onNavigate, onLogout }: StudentHomeProps) {
  const courses = [
    {
      id: 1,
      name: 'Data Structures & Algorithms',
      code: 'CS201',
      lecturer: 'Dr. Sarah Johnson',
      students: 45,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      name: 'Database Management Systems',
      code: 'CS301',
      lecturer: 'Prof. Michael Chen',
      students: 38,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      name: 'Software Engineering',
      code: 'CS302',
      lecturer: 'Dr. Emily Brown',
      students: 42,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      name: 'Operating Systems',
      code: 'CS303',
      lecturer: 'Dr. David Wilson',
      students: 40,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const quickActions = [
    { icon: Search, label: 'Search', color: 'bg-blue-100 text-blue-600' },
    { icon: FileText, label: 'Notes', color: 'bg-purple-100 text-purple-600', action: () => onNavigate('notes') },
    { icon: Calendar, label: 'Schedule', color: 'bg-green-100 text-green-600' },
    { icon: Bell, label: 'Notifications', color: 'bg-orange-100 text-orange-600' }
  ];

  const dashboardItems = [
    { icon: FileText, label: 'Class Notes', screen: 'notes', color: 'from-blue-500 to-blue-600' },
    { icon: Users, label: 'Class Mates', screen: 'classmates', color: 'from-purple-500 to-purple-600' },
    { icon: Newspaper, label: 'News', screen: 'news', color: 'from-green-500 to-green-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 pt-8 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="mb-1">Welcome Back!</h1>
              <p className="text-blue-100">{userData?.name || 'Student'}</p>
            </div>
            <button
              onClick={onLogout}
              className="p-3 hover:bg-blue-500/50 rounded-xl transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input 
              placeholder="Search courses, materials..." 
              className="pl-12 h-14 rounded-2xl bg-white border-0 shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-16 pb-12">
        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <action.icon className="w-6 h-6" />
              </div>
              <p className="text-gray-700">{action.label}</p>
            </button>
          ))}
        </div>

        {/* My Courses */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-gray-900">My Courses</h2>
            <Button variant="ghost" className="text-blue-600">
              View All
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => onCourseSelect(course)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-left"
              >
                <div className={`bg-gradient-to-r ${course.color} p-6`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-white/80 mb-1">{course.code}</p>
                      <h3 className="text-white">{course.name}</h3>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                      <p className="text-white">{course.students}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center text-gray-600">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <p>{course.lecturer}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Navigation */}
        <div className="mb-8">
          <h2 className="text-gray-900 mb-6">Quick Access</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {dashboardItems.map((item, index) => (
              <button
                key={index}
                onClick={() => onNavigate(item.screen)}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-r ${item.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-gray-900 text-left">{item.label}</h3>
              </button>
            ))}
          </div>
        </div>

        {/* Recent News */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-gray-900">Recent News</h2>
            <Button 
              variant="ghost" 
              className="text-blue-600"
              onClick={() => onNavigate('news')}
            >
              View All
            </Button>
          </div>

          <div className="space-y-4">
            {[
              {
                title: 'Semester Break Announcement',
                content: 'The university will be on break from December 15th to January 8th.',
                date: '2 days ago'
              },
              {
                title: 'New Library Resources Available',
                content: 'Digital resources have been added to the library database.',
                date: '5 days ago'
              }
            ].map((news, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-gray-900 mb-2">{news.title}</h3>
                <p className="text-gray-600 mb-3">{news.content}</p>
                <p className="text-gray-400">{news.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-around">
          <button 
            className="flex flex-col items-center text-blue-600"
            onClick={() => onNavigate('home')}
          >
            <BookOpen className="w-6 h-6 mb-1" />
            <span>Home</span>
          </button>
          <button 
            className="flex flex-col items-center text-gray-400"
            onClick={() => onNavigate('notes')}
          >
            <FileText className="w-6 h-6 mb-1" />
            <span>Notes</span>
          </button>
          <button 
            className="flex flex-col items-center text-gray-400"
            onClick={() => onNavigate('classmates')}
          >
            <Users className="w-6 h-6 mb-1" />
            <span>Classmates</span>
          </button>
          <button 
            className="flex flex-col items-center text-gray-400"
            onClick={() => onNavigate('profile')}
          >
            <Users className="w-6 h-6 mb-1" />
            <span>Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
