import { useState } from 'react';
import { LecturerHome } from './LecturerHome';
import { LecturerCourseDetail } from './LecturerCourseDetail';
import { CreateCourse } from './CreateCourse';
import { LecturerProfile } from './LecturerProfile';

interface LecturerDashboardProps {
  userData: any;
  onLogout: () => void;
}

export function LecturerDashboard({ userData, onLogout }: LecturerDashboardProps) {
  const [activeScreen, setActiveScreen] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const handleCourseSelect = (course: any) => {
    setSelectedCourse(course);
    setActiveScreen('course-detail');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {activeScreen === 'home' && (
        <LecturerHome 
          userData={userData}
          onCourseSelect={handleCourseSelect}
          onNavigate={setActiveScreen}
          onLogout={onLogout}
        />
      )}
      
      {activeScreen === 'course-detail' && (
        <LecturerCourseDetail 
          course={selectedCourse}
          onBack={() => setActiveScreen('home')}
        />
      )}
      
      {activeScreen === 'create-course' && (
        <CreateCourse 
          onBack={() => setActiveScreen('home')}
          onComplete={() => setActiveScreen('home')}
        />
      )}
      
      {activeScreen === 'profile' && (
        <LecturerProfile 
          userData={userData}
          onBack={() => setActiveScreen('home')}
          onLogout={onLogout}
        />
      )}
    </div>
  );
}
