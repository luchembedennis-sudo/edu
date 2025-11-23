import { useState } from 'react';
import { ArrowLeft, Search, Filter, Edit, Trash2, Ban, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface UserManagementProps {
  onBack: () => void;
}

export function UserManagement({ onBack }: UserManagementProps) {
  const [activeTab, setActiveTab] = useState('all');

  const users = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.j@mukuba.edu',
      role: 'student',
      department: 'Computer Science',
      status: 'active',
      joinDate: 'Nov 15, 2025'
    },
    {
      id: 2,
      name: 'Dr. Sarah Johnson',
      email: 'sarah.j@mukuba.edu',
      role: 'lecturer',
      department: 'Computer Science',
      status: 'active',
      joinDate: 'Jan 10, 2024'
    },
    {
      id: 3,
      name: 'Bob Smith',
      email: 'bob.s@mukuba.edu',
      role: 'student',
      department: 'Engineering',
      status: 'active',
      joinDate: 'Oct 20, 2025'
    },
    {
      id: 4,
      name: 'Prof. Michael Chen',
      email: 'michael.c@mukuba.edu',
      role: 'lecturer',
      department: 'Business',
      status: 'active',
      joinDate: 'Mar 5, 2023'
    },
    {
      id: 5,
      name: 'Carol White',
      email: 'carol.w@mukuba.edu',
      role: 'student',
      department: 'Computer Science',
      status: 'blocked',
      joinDate: 'Sep 12, 2025'
    }
  ];

  const getFilteredUsers = () => {
    if (activeTab === 'all') return users;
    if (activeTab === 'students') return users.filter(u => u.role === 'student');
    if (activeTab === 'lecturers') return users.filter(u => u.role === 'lecturer');
    if (activeTab === 'blocked') return users.filter(u => u.status === 'blocked');
    return users;
  };

  const getRoleBadgeColor = (role: string) => {
    if (role === 'student') return 'bg-blue-100 text-blue-700';
    if (role === 'lecturer') return 'bg-green-100 text-green-700';
    return 'bg-gray-100 text-gray-700';
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const getRandomColor = (index: number) => {
    const colors = [
      'from-blue-500 to-blue-600',
      'from-purple-500 to-purple-600',
      'from-green-500 to-green-600',
      'from-orange-500 to-orange-600',
      'from-pink-500 to-pink-600'
    ];
    return colors[index % colors.length];
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

          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-white mb-2">User Management</h1>
              <p className="text-purple-100">{users.length} total users</p>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input 
              placeholder="Search users by name or email..." 
              className="pl-12 h-12 rounded-xl bg-white border-0"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="bg-white rounded-2xl shadow-sm mb-6 overflow-hidden">
            <div className="p-4 border-b">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all">All Users</TabsTrigger>
                <TabsTrigger value="students">Students</TabsTrigger>
                <TabsTrigger value="lecturers">Lecturers</TabsTrigger>
                <TabsTrigger value="blocked">Blocked</TabsTrigger>
              </TabsList>
            </div>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="space-y-4">
              {getFilteredUsers().map((user, index) => (
                <div key={user.id} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${getRandomColor(index)} rounded-full flex items-center justify-center`}>
                        <span className="text-white">{getInitials(user.name)}</span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-gray-900">{user.name}</h3>
                          <Badge className={getRoleBadgeColor(user.role)}>{user.role}</Badge>
                          {user.status === 'blocked' && (
                            <Badge className="bg-red-100 text-red-700">Blocked</Badge>
                          )}
                          {user.status === 'active' && (
                            <Badge className="bg-green-100 text-green-700">Active</Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-gray-600">
                          <span>{user.email}</span>
                          <span>•</span>
                          <span>{user.department}</span>
                          <span>•</span>
                          <span>Joined {user.joinDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                      {user.status === 'active' ? (
                        <Button size="sm" variant="outline" className="text-orange-600 border-orange-200 hover:bg-orange-50">
                          <Ban className="w-4 h-4 mr-2" />
                          Block
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" className="text-green-600 border-green-200 hover:bg-green-50">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Unblock
                        </Button>
                      )}
                      <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
