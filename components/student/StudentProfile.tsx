import { ArrowLeft, User, Mail, Phone, Building2, BookOpen, Calendar, LogOut, Edit } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface StudentProfileProps {
  userData: any;
  onBack: () => void;
  onLogout: () => void;
}

export function StudentProfile({ userData, onBack, onLogout }: StudentProfileProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 pt-8 pb-24">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center text-white/90 hover:text-white mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>

          <div className="flex items-center justify-between">
            <h1 className="text-white">Profile</h1>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-16">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-white text-3xl">{userData?.name?.charAt(0) || 'S'}</span>
            </div>
            <h2 className="text-gray-900 mb-2">{userData?.name || 'Student Name'}</h2>
            <p className="text-gray-600 mb-4">{userData?.email || 'student@mukuba.edu'}</p>
            <div className="flex items-center space-x-2">
              <Badge className="bg-blue-100 text-blue-700">Student</Badge>
              <Badge variant="outline">Active</Badge>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-500">Email</p>
                <p className="text-gray-900">{userData?.email || 'student@mukuba.edu'}</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-gray-500">Phone</p>
                <p className="text-gray-900">+260 XXX XXX XXX</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <Building2 className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-500">University</p>
                <p className="text-gray-900">Mukuba University</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <BookOpen className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-gray-500">Department</p>
                <p className="text-gray-900">Computer Science</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                <Calendar className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <p className="text-gray-500">Academic Year</p>
                <p className="text-gray-900">Year 3, Section A</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <p className="text-gray-500 mb-2">Enrolled Courses</p>
            <p className="text-gray-900 text-3xl">4</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <p className="text-gray-500 mb-2">Attendance</p>
            <p className="text-gray-900 text-3xl">85%</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <p className="text-gray-500 mb-2">Average Grade</p>
            <p className="text-gray-900 text-3xl">A-</p>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button 
            variant="outline" 
            className="w-full h-14 rounded-xl justify-start"
          >
            <User className="w-5 h-5 mr-3 text-gray-600" />
            Account Settings
          </Button>
          <Button 
            variant="outline" 
            className="w-full h-14 rounded-xl justify-start"
          >
            <BookOpen className="w-5 h-5 mr-3 text-gray-600" />
            Academic Records
          </Button>
          <Button 
            onClick={onLogout}
            variant="outline" 
            className="w-full h-14 rounded-xl justify-start text-red-600 border-red-200 hover:bg-red-50"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
