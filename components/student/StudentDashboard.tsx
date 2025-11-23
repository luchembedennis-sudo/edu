import { useState } from 'react';
import { StudentHome } from './StudentHome';
import { CourseDetail } from './CourseDetail';
import { ClassNotes } from './ClassNotes';
import { ClassMates } from './ClassMates';
import { StudentProfile } from './StudentProfile';
import { NewsFeed } from '../shared/NewsFeed';

interface StudentDashboardProps {
  userData: any;
  onLogout: () => void;
}

export function StudentDashboard({ userData, onLogout }: StudentDashboardProps) {
  const [activeScreen, setActiveScreen] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const handleCourseSelect = (course: any) => {
    setSelectedCourse(course);
    setActiveScreen('course-detail');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {activeScreen === 'home' && (
        <StudentHome 
          userData={userData}
          onCourseSelect={handleCourseSelect}
          onNavigate={setActiveScreen}
          onLogout={onLogout}
        />
      )}
      
      {activeScreen === 'course-detail' && (
        <CourseDetail 
          course={selectedCourse}
          onBack={() => setActiveScreen('home')}
        />
      )}
      
      {activeScreen === 'notes' && (
        <ClassNotes 
          onBack={() => setActiveScreen('home')}
        />
      )}
      
      {activeScreen === 'classmates' && (
        <ClassMates 
          onBack={() => setActiveScreen('home')}
        />
      )}
      
      {activeScreen === 'profile' && (
        <StudentProfile 
          userData={userData}
          onBack={() => setActiveScreen('home')}
          onLogout={onLogout}
        />
      )}
      
      {activeScreen === 'news' && (
        <NewsFeed 
          onBack={() => setActiveScreen('home')}
        />
      )}
    </div>
  );
}
