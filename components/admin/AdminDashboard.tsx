import { useState } from 'react';
import { AdminHome } from './AdminHome';
import { UserManagement } from './UserManagement';
import { NewsManagement } from './NewsManagement';
import { FileManagement } from './FileManagement';
import { ReportManagement } from './ReportManagement';

interface AdminDashboardProps {
  onLogout: () => void;
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeScreen, setActiveScreen] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      {activeScreen === 'home' && (
        <AdminHome 
          onNavigate={setActiveScreen}
          onLogout={onLogout}
        />
      )}
      
      {activeScreen === 'users' && (
        <UserManagement 
          onBack={() => setActiveScreen('home')}
        />
      )}
      
      {activeScreen === 'news' && (
        <NewsManagement 
          onBack={() => setActiveScreen('home')}
        />
      )}
      
      {activeScreen === 'files' && (
        <FileManagement 
          onBack={() => setActiveScreen('home')}
        />
      )}
      
      {activeScreen === 'reports' && (
        <ReportManagement 
          onBack={() => setActiveScreen('home')}
        />
      )}
    </div>
  );
}
