import { useState } from 'react';
import { SplashScreen } from './components/auth/SplashScreen';
import { GettingStarted } from './components/auth/GettingStarted';
import { LoginScreen } from './components/auth/LoginScreen';
import { RoleSelection } from './components/auth/RoleSelection';
import { StudentSignup } from './components/auth/StudentSignup';
import { LecturerSignup } from './components/auth/LecturerSignup';
import { StudentDashboard } from './components/student/StudentDashboard';
import { LecturerDashboard } from './components/lecturer/LecturerDashboard';
import { AdminDashboard } from './components/admin/AdminDashboard';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [selectedRole, setSelectedRole] = useState<'student' | 'lecturer' | 'admin' | null>(null);
  const [userData, setUserData] = useState<any>(null);

  // Handle navigation
  const navigateToScreen = (screen: string) => {
    setCurrentScreen(screen);
  };

  // Handle role selection
  const handleRoleSelect = (role: 'student' | 'lecturer' | 'admin') => {
    setSelectedRole(role);
    if (role === 'student') {
      setCurrentScreen('student-signup');
    } else if (role === 'lecturer') {
      setCurrentScreen('lecturer-signup');
    }
  };

  // Handle signup completion
  const handleSignupComplete = (data: any) => {
    setUserData(data);
    if (selectedRole === 'student') {
      setCurrentScreen('student-dashboard');
    } else if (selectedRole === 'lecturer') {
      setCurrentScreen('lecturer-dashboard');
    }
  };

  // Handle login (including admin)
  const handleLogin = (role: 'student' | 'lecturer' | 'admin', data?: any) => {
    setSelectedRole(role);
    setUserData(data);
    if (role === 'student') {
      setCurrentScreen('student-dashboard');
    } else if (role === 'lecturer') {
      setCurrentScreen('lecturer-dashboard');
    } else if (role === 'admin') {
      setCurrentScreen('admin-dashboard');
    }
  };

  // Handle logout
  const handleLogout = () => {
    setCurrentScreen('login');
    setSelectedRole(null);
    setUserData(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentScreen === 'splash' && (
        <SplashScreen onComplete={() => navigateToScreen('getting-started')} />
      )}
      
      {currentScreen === 'getting-started' && (
        <GettingStarted onGetStarted={() => navigateToScreen('login')} />
      )}
      
      {currentScreen === 'login' && (
        <LoginScreen 
          onLogin={handleLogin}
          onSignup={() => navigateToScreen('role-selection')}
        />
      )}
      
      {currentScreen === 'role-selection' && (
        <RoleSelection 
          onRoleSelect={handleRoleSelect}
          onBack={() => navigateToScreen('login')}
        />
      )}
      
      {currentScreen === 'student-signup' && (
        <StudentSignup 
          onComplete={handleSignupComplete}
          onBack={() => navigateToScreen('role-selection')}
        />
      )}
      
      {currentScreen === 'lecturer-signup' && (
        <LecturerSignup 
          onComplete={handleSignupComplete}
          onBack={() => navigateToScreen('role-selection')}
        />
      )}
      
      {currentScreen === 'student-dashboard' && (
        <StudentDashboard 
          userData={userData}
          onLogout={handleLogout}
        />
      )}
      
      {currentScreen === 'lecturer-dashboard' && (
        <LecturerDashboard 
          userData={userData}
          onLogout={handleLogout}
        />
      )}
      
      {currentScreen === 'admin-dashboard' && (
        <AdminDashboard 
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}
