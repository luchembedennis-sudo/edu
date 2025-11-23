import { useEffect } from 'react';
import { GraduationCap } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex flex-col items-center justify-center">
      <div className="animate-bounce">
        <div className="bg-white rounded-full p-8 shadow-2xl">
          <GraduationCap className="w-20 h-20 text-blue-600" />
        </div>
      </div>
      <h1 className="mt-8 text-white text-5xl tracking-tight">EduChat</h1>
      <p className="mt-3 text-blue-100 text-lg">Educational Platform</p>
      <div className="mt-12 flex space-x-2">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-100"></div>
        <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-200"></div>
      </div>
    </div>
  );
}
