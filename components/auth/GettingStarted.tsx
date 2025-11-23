import { BookOpen, Users, FileText, Bell } from 'lucide-react';
import { Button } from '../ui/button';

interface GettingStartedProps {
  onGetStarted: () => void;
}

export function GettingStarted({ onGetStarted }: GettingStartedProps) {
  const features = [
    {
      icon: BookOpen,
      title: 'Course Management',
      description: 'Access all your courses and materials in one place'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Connect with classmates and lecturers easily'
    },
    {
      icon: FileText,
      title: 'File Sharing',
      description: 'Share and access notes, assignments, and resources'
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Stay updated with class announcements'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-blue-900 mb-4">Welcome to EduChat</h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Your comprehensive educational platform for course management, collaboration, and academic success
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={onGetStarted}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-xl"
          >
            Get Started
          </Button>
          <p className="mt-6 text-gray-500">
            Join Mukuba University's educational platform
          </p>
        </div>
      </div>
    </div>
  );
}
