import { GraduationCap, BookOpen, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';

interface RoleSelectionProps {
  onRoleSelect: (role: 'student' | 'lecturer') => void;
  onBack: () => void;
}

export function RoleSelection({ onRoleSelect, onBack }: RoleSelectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        <div className="text-center mb-12">
          <h1 className="text-blue-900 mb-4">Choose Your Role</h1>
          <p className="text-gray-600 text-xl">
            Select how you'll be using EduChat
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <button
            onClick={() => onRoleSelect('student')}
            className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-gray-900 mb-3">Student</h2>
            <p className="text-gray-600 mb-6">
              Access courses, materials, assignments, and collaborate with classmates
            </p>
            <div className="space-y-2 text-left">
              <div className="flex items-center text-gray-600">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                View course materials
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                Submit assignments
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                Connect with classmates
              </div>
            </div>
          </button>

          <button
            onClick={() => onRoleSelect('lecturer')}
            className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-gray-900 mb-3">Lecturer</h2>
            <p className="text-gray-600 mb-6">
              Create courses, manage students, upload materials, and track progress
            </p>
            <div className="space-y-2 text-left">
              <div className="flex items-center text-gray-600">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                Create and manage courses
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                Upload course materials
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                Track student progress
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
