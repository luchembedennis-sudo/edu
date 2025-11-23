import { useState } from 'react';
import { BookOpen, Users, UserCheck, FileText, Plus, LogOut, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface LecturerHomeProps {
  userData: any;
  onCourseSelect: (course: any) => void;
  onNavigate: (screen: string) => void;
  onLogout: () => void;
}

export function LecturerHome({ userData, onCourseSelect, onNavigate, onLogout }: LecturerHomeProps) {
  const [selectedCourseId, setSelectedCourseId] = useState('1');
  
  const courses = [
    {
      id: '1',
      name: 'Data Structures & Algorithms',
      code: 'CS201',
      department: 'Computer Science',
      enrolled: 45,
      pending: 8,
      materials: 12
    },
    {
      id: '2',
      name: 'Advanced Database Systems',
      code: 'CS401',
      department: 'Computer Science',
      enrolled: 32,
      pending: 5,
      materials: 15
    }
  ];

  const selectedCourse = courses.find(c => c.id === selectedCourseId) || courses[0];

  const stats = [
    {
      label: 'Enrolled Students',
      value: selectedCourse.enrolled,
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      label: 'Pending Approvals',
      value: selectedCourse.pending,
      icon: UserCheck,
      color: 'from-orange-500 to-orange-600'
    },
    {
      label: 'Total Courses',
      value: courses.length,
      icon: BookOpen,
      color: 'from-green-500 to-green-600'
    },
    {
      label: 'Course Materials',
      value: selectedCourse.materials,
      icon: FileText,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const recentActivity = [
    {
      action: 'New enrollment request',
      student: 'Alice Johnson',
      course: 'CS201',
      time: '5 minutes ago'
    },
    {
      action: 'Assignment submitted',
      student: 'Bob Smith',
      course: 'CS201',
      time: '1 hour ago'
    },
    {
      action: 'New enrollment request',
      student: 'Carol White',
      course: 'CS401',
      time: '2 hours ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 pt-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="mb-1">Lecturer Dashboard</h1>
              <p className="text-green-100">{userData?.name || 'Dr. John Smith'}</p>
            </div>
            <button
              onClick={onLogout}
              className="p-3 hover:bg-green-500/50 rounded-xl transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>

          {/* Course Selector */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <p className="text-white/80 mb-3">Selected Course</p>
            <Select value={selectedCourseId} onValueChange={setSelectedCourseId}>
              <SelectTrigger className="bg-white text-gray-900 border-0 h-14 rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {courses.map(course => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.code} - {course.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-12 pb-12">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className={`bg-gradient-to-r ${stat.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-500 mb-1">{stat.label}</p>
              <p className="text-gray-900 text-3xl">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Course Management */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-gray-900">Course Management</h2>
            <Button 
              onClick={() => onNavigate('create-course')}
              className="bg-green-600 hover:bg-green-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create New Course
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => onCourseSelect(course)}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all text-left"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-600 mb-1">{course.code}</p>
                    <h3 className="text-gray-900 mb-2">{course.name}</h3>
                    <p className="text-gray-500">{course.department}</p>
                  </div>
                  {course.pending > 0 && (
                    <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                      {course.pending} pending
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-6 text-gray-600">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{course.enrolled} students</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    <span>{course.materials} materials</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 mb-1">{activity.action}</p>
                  <p className="text-gray-600">{activity.student} • {activity.course}</p>
                  <p className="text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-around">
          <button className="flex flex-col items-center text-green-600">
            <BookOpen className="w-6 h-6 mb-1" />
            <span>Home</span>
          </button>
          <button 
            className="flex flex-col items-center text-gray-400"
            onClick={() => onNavigate('create-course')}
          >
            <Plus className="w-6 h-6 mb-1" />
            <span>Create</span>
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
