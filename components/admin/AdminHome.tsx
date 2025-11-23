import { Users, UserCheck, FileText, AlertCircle, TrendingUp, Settings, Newspaper, FolderOpen, LogOut } from 'lucide-react';
import { Button } from '../ui/button';

interface AdminHomeProps {
  onNavigate: (screen: string) => void;
  onLogout: () => void;
}

export function AdminHome({ onNavigate, onLogout }: AdminHomeProps) {
  const stats = [
    {
      label: 'Total Users',
      value: '1,234',
      change: '+12%',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      label: 'Active Users',
      value: '892',
      change: '+8%',
      icon: UserCheck,
      color: 'from-green-500 to-green-600'
    },
    {
      label: 'Total Files',
      value: '3,456',
      change: '+24%',
      icon: FileText,
      color: 'from-purple-500 to-purple-600'
    },
    {
      label: 'Reported Users',
      value: '12',
      change: '-3%',
      icon: AlertCircle,
      color: 'from-red-500 to-red-600'
    }
  ];

  const managementCards = [
    {
      title: 'User Management',
      description: 'View, edit, and manage all users',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      screen: 'users'
    },
    {
      title: 'News Management',
      description: 'Create and manage university announcements',
      icon: Newspaper,
      color: 'from-green-500 to-green-600',
      screen: 'news'
    },
    {
      title: 'File Management',
      description: 'Monitor and manage uploaded files',
      icon: FolderOpen,
      color: 'from-purple-500 to-purple-600',
      screen: 'files'
    },
    {
      title: 'Report Management',
      description: 'Review and handle reported content',
      icon: AlertCircle,
      color: 'from-orange-500 to-orange-600',
      screen: 'reports'
    }
  ];

  const recentActivity = [
    {
      action: 'New user registration',
      user: 'Alice Johnson (Student)',
      time: '5 minutes ago',
      type: 'user'
    },
    {
      action: 'Course created',
      user: 'Dr. Smith (Lecturer)',
      time: '1 hour ago',
      type: 'course'
    },
    {
      action: 'Content reported',
      user: 'System',
      time: '2 hours ago',
      type: 'report'
    },
    {
      action: 'File uploaded',
      user: 'Bob Smith (Student)',
      time: '3 hours ago',
      type: 'file'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 pt-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="mb-1">Admin Dashboard</h1>
              <p className="text-purple-100">EduChat Management System</p>
            </div>
            <button
              onClick={onLogout}
              className="p-3 hover:bg-purple-500/50 rounded-xl transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-8 pb-12">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className={`bg-gradient-to-r ${stat.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-gray-500 mb-1">{stat.label}</p>
              <p className="text-gray-900 text-3xl">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Management Cards */}
        <div className="mb-8">
          <h2 className="text-gray-900 mb-6">Management</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {managementCards.map((card, index) => (
              <button
                key={index}
                onClick={() => onNavigate(card.screen)}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-left"
              >
                <div className={`bg-gradient-to-r ${card.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      {activity.type === 'user' && <Users className="w-5 h-5 text-purple-600" />}
                      {activity.type === 'course' && <FileText className="w-5 h-5 text-purple-600" />}
                      {activity.type === 'report' && <AlertCircle className="w-5 h-5 text-purple-600" />}
                      {activity.type === 'file' && <FolderOpen className="w-5 h-5 text-purple-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 mb-1">{activity.action}</p>
                      <p className="text-gray-600">{activity.user}</p>
                      <p className="text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start h-12 rounded-xl"
                  onClick={() => onNavigate('users')}
                >
                  <Users className="w-5 h-5 mr-3 text-gray-600" />
                  Manage Users
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start h-12 rounded-xl"
                  onClick={() => onNavigate('news')}
                >
                  <Newspaper className="w-5 h-5 mr-3 text-gray-600" />
                  Create News
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start h-12 rounded-xl"
                  onClick={() => onNavigate('reports')}
                >
                  <AlertCircle className="w-5 h-5 mr-3 text-gray-600" />
                  View Reports
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start h-12 rounded-xl"
                >
                  <Settings className="w-5 h-5 mr-3 text-gray-600" />
                  System Settings
                </Button>
              </div>
            </div>

            {/* System Health */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mt-6">
              <h3 className="text-gray-900 mb-4">System Health</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Server Status</span>
                    <span className="text-green-600">Healthy</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Storage</span>
                    <span className="text-blue-600">65%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
