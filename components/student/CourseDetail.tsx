import { useState } from 'react';
import { ArrowLeft, FileText, Calendar, ClipboardList, Award, Users, Download, Upload } from 'lucide-react';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';

interface CourseDetailProps {
  course: any;
  onBack: () => void;
}

export function CourseDetail({ course, onBack }: CourseDetailProps) {
  const [activeTab, setActiveTab] = useState('materials');

  const materials = [
    { id: 1, name: 'Week 1 - Introduction to Data Structures.pdf', type: 'PDF', size: '2.3 MB', date: 'Nov 15, 2025' },
    { id: 2, name: 'Week 2 - Arrays and Linked Lists.pptx', type: 'PPT', size: '4.1 MB', date: 'Nov 18, 2025' },
    { id: 3, name: 'Week 3 - Stacks and Queues.pdf', type: 'PDF', size: '1.8 MB', date: 'Nov 20, 2025' }
  ];

  const assignments = [
    { id: 1, title: 'Assignment 1: Array Operations', dueDate: 'Nov 25, 2025', status: 'submitted', grade: 'A' },
    { id: 2, title: 'Assignment 2: Linked List Implementation', dueDate: 'Dec 2, 2025', status: 'pending', grade: '-' },
    { id: 3, title: 'Assignment 3: Stack & Queue Problems', dueDate: 'Dec 9, 2025', status: 'not-started', grade: '-' }
  ];

  const attendance = [
    { date: 'Nov 15, 2025', status: 'present' },
    { date: 'Nov 18, 2025', status: 'present' },
    { date: 'Nov 20, 2025', status: 'absent' },
    { date: 'Nov 22, 2025', status: 'present' }
  ];

  const grades = [
    { item: 'Assignment 1', score: 95, total: 100, percentage: 95 },
    { item: 'Quiz 1', score: 18, total: 20, percentage: 90 },
    { item: 'Midterm Exam', score: 85, total: 100, percentage: 85 }
  ];

  const people = [
    { name: 'Alice Johnson', role: 'student', section: 'A' },
    { name: 'Bob Smith', role: 'student', section: 'A' },
    { name: 'Carol White', role: 'student', section: 'A' },
    { name: 'Dr. Sarah Johnson', role: 'lecturer', section: '-' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className={`bg-gradient-to-r ${course.color} text-white px-6 pt-8 pb-12`}>
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center text-white/90 hover:text-white mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Courses
          </button>

          <div className="flex items-start justify-between">
            <div>
              <p className="text-white/80 mb-2">{course.code}</p>
              <h1 className="text-white mb-3">{course.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>{course.lecturer}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="bg-white rounded-2xl shadow-sm mb-6 overflow-hidden">
            <TabsList className="w-full bg-white justify-start p-0 h-auto border-b">
              <TabsTrigger value="materials" className="rounded-none border-b-2 data-[state=active]:border-blue-600">
                <FileText className="w-4 h-4 mr-2" />
                Materials
              </TabsTrigger>
              <TabsTrigger value="attendance" className="rounded-none border-b-2 data-[state=active]:border-blue-600">
                <Calendar className="w-4 h-4 mr-2" />
                Attendance
              </TabsTrigger>
              <TabsTrigger value="assignments" className="rounded-none border-b-2 data-[state=active]:border-blue-600">
                <ClipboardList className="w-4 h-4 mr-2" />
                Assignments
              </TabsTrigger>
              <TabsTrigger value="grades" className="rounded-none border-b-2 data-[state=active]:border-blue-600">
                <Award className="w-4 h-4 mr-2" />
                Grades
              </TabsTrigger>
              <TabsTrigger value="people" className="rounded-none border-b-2 data-[state=active]:border-blue-600">
                <Users className="w-4 h-4 mr-2" />
                People
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="materials" className="space-y-4 mt-0">
            {materials.map((material) => (
              <div key={material.id} className="bg-white rounded-2xl p-6 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">{material.name}</h3>
                    <div className="flex items-center space-x-4 text-gray-500">
                      <span>{material.size}</span>
                      <span>•</span>
                      <span>{material.date}</span>
                    </div>
                  </div>
                </div>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="attendance" className="space-y-4 mt-0">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-gray-900">Attendance Record</h3>
                <Badge className="bg-green-100 text-green-700">75% Present</Badge>
              </div>
              <div className="space-y-3">
                {attendance.map((record, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700">{record.date}</span>
                    <Badge className={record.status === 'present' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
                      {record.status === 'present' ? '✓ Present' : '✗ Absent'}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="assignments" className="space-y-4 mt-0">
            {assignments.map((assignment) => (
              <div key={assignment.id} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-gray-900 mb-2">{assignment.title}</h3>
                    <p className="text-gray-500">Due: {assignment.dueDate}</p>
                  </div>
                  <Badge className={
                    assignment.status === 'submitted' ? 'bg-green-100 text-green-700' :
                    assignment.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }>
                    {assignment.status === 'submitted' ? 'Submitted' :
                     assignment.status === 'pending' ? 'Pending' : 'Not Started'}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Grade: {assignment.grade}</span>
                  {assignment.status !== 'submitted' && (
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Upload className="w-4 h-4 mr-2" />
                      Submit
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="grades" className="mt-0">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-gray-900 mb-6">Grade Summary</h3>
              <div className="space-y-4">
                {grades.map((grade, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-900">{grade.item}</span>
                      <span className="text-gray-900">{grade.score}/{grade.total}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${grade.percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-500 mt-2">{grade.percentage}%</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-center justify-between">
                  <span className="text-blue-900">Overall Grade</span>
                  <span className="text-blue-900">90%</span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="people" className="space-y-4 mt-0">
            {people.map((person, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white">{person.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-gray-900">{person.name}</h3>
                    <p className="text-gray-500 capitalize">{person.role} {person.section !== '-' && `• Section ${person.section}`}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Message
                </Button>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
