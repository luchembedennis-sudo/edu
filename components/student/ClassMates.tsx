import { ArrowLeft, Search, Mail, MessageCircle, Phone } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';

interface ClassMatesProps {
  onBack: () => void;
}

export function ClassMates({ onBack }: ClassMatesProps) {
  const classmates = [
    { 
      id: 1, 
      name: 'Alice Johnson', 
      department: 'Computer Science',
      year: 'Year 3',
      section: 'A',
      courses: 4,
      email: 'alice.j@mukuba.edu'
    },
    { 
      id: 2, 
      name: 'Bob Smith', 
      department: 'Computer Science',
      year: 'Year 3',
      section: 'A',
      courses: 4,
      email: 'bob.s@mukuba.edu'
    },
    { 
      id: 3, 
      name: 'Carol White', 
      department: 'Computer Science',
      year: 'Year 3',
      section: 'A',
      courses: 3,
      email: 'carol.w@mukuba.edu'
    },
    { 
      id: 4, 
      name: 'David Lee', 
      department: 'Computer Science',
      year: 'Year 3',
      section: 'B',
      courses: 4,
      email: 'david.l@mukuba.edu'
    },
    { 
      id: 5, 
      name: 'Emma Davis', 
      department: 'Computer Science',
      year: 'Year 3',
      section: 'A',
      courses: 4,
      email: 'emma.d@mukuba.edu'
    },
    { 
      id: 6, 
      name: 'Frank Miller', 
      department: 'Computer Science',
      year: 'Year 3',
      section: 'B',
      courses: 3,
      email: 'frank.m@mukuba.edu'
    }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const getRandomColor = (index: number) => {
    const colors = [
      'from-blue-500 to-blue-600',
      'from-purple-500 to-purple-600',
      'from-green-500 to-green-600',
      'from-orange-500 to-orange-600',
      'from-pink-500 to-pink-600',
      'from-indigo-500 to-indigo-600'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 pt-8 pb-12">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center text-white/90 hover:text-white mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>

          <h1 className="text-white mb-2">Classmates</h1>
          <p className="text-blue-100 mb-6">{classmates.length} students in your department</p>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input 
              placeholder="Search by name or section..." 
              className="pl-12 h-12 rounded-xl bg-white border-0"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-6">
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
          <div className="flex items-center space-x-2 overflow-x-auto">
            <Button variant="default" size="sm" className="bg-blue-600">All</Button>
            <Button variant="outline" size="sm">Section A</Button>
            <Button variant="outline" size="sm">Section B</Button>
            <Button variant="outline" size="sm">Section C</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {classmates.map((classmate, index) => (
            <div key={classmate.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4 mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${getRandomColor(index)} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white">{getInitials(classmate.name)}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-1">{classmate.name}</h3>
                  <p className="text-gray-600 mb-2">{classmate.department}</p>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{classmate.year}</Badge>
                    <Badge variant="outline">Section {classmate.section}</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-4 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{classmate.email}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
