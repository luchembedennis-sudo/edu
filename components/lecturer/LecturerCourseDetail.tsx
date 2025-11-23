import { useState } from 'react';
import { ArrowLeft, FileText, Calendar, ClipboardList, Award, Users, UserCheck, Upload, Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';

interface LecturerCourseDetailProps {
  course: any;
  onBack: () => void;
}

export function LecturerCourseDetail({ course, onBack }: LecturerCourseDetailProps) {
  const [activeTab, setActiveTab] = useState('materials');

  const materials = [
    { id: 1, name: 'Week 1 - Introduction.pdf', type: 'PDF', uploadDate: 'Nov 15, 2025', downloads: 42 },
    { id: 2, name: 'Week 2 - Data Structures.pptx', type: 'PPT', uploadDate: 'Nov 18, 2025', downloads: 38 },
    { id: 3, name: 'Week 3 - Algorithms.pdf', type: 'PDF', uploadDate: 'Nov 20, 2025', downloads: 35 }
  ];

  const students = [
    { id: 1, name: 'Alice Johnson', section: 'A', attendance: 95, grade: 'A', status: 'active' },
    { id: 2, name: 'Bob Smith', section: 'A', attendance: 88, grade: 'B+', status: 'active' },
    { id: 3, name: 'Carol White', section: 'B', attendance: 92, grade: 'A-', status: 'active' }
  ];

  const pendingApprovals = [
    { id: 1, name: 'David Lee', department: 'Computer Science', year: 'Year 3', requestDate: 'Nov 22, 2025' },
    { id: 2, name: 'Emma Davis', department: 'Computer Science', year: 'Year 3', requestDate: 'Nov 22, 2025' }
  ];

  const assignments = [
    { id: 1, title: 'Assignment 1: Array Operations', dueDate: 'Nov 25, 2025', submissions: 38, total: 45 },
    { id: 2, title: 'Assignment 2: Linked Lists', dueDate: 'Dec 2, 2025', submissions: 12, total: 45 }
  ];

  const attendanceSessions = [
    { date: 'Nov 22, 2025', present: 42, absent: 3, total: 45 },
    { date: 'Nov 20, 2025', present: 40, absent: 5, total: 45 },
    { date: 'Nov 18, 2025', present: 43, absent: 2, total: 45 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 pt-8 pb-12">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center text-white/90 hover:text-white mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>

          <div className="flex items-start justify-between">
            <div>
              <p className="text-white/80 mb-2">{course.code}</p>
              <h1 className="text-white mb-3">{course.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{course.enrolled} students</span>
                </div>
                <div className="flex items-center">
                  <UserCheck className="w-4 h-4 mr-2" />
                  <span>{course.pending} pending</span>
                </div>
              </div>
            </div>
            <Button className="bg-white text-green-600 hover:bg-white/90">
              <Upload className="w-4 h-4 mr-2" />
              Upload Material
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="bg-white rounded-2xl shadow-sm mb-6 overflow-hidden">
            <TabsList className="w-full bg-white justify-start p-0 h-auto border-b">
              <TabsTrigger value="materials" className="rounded-none border-b-2 data-[state=active]:border-green-600">
                <FileText className="w-4 h-4 mr-2" />
                Materials
              </TabsTrigger>
              <TabsTrigger value="people" className="rounded-none border-b-2 data-[state=active]:border-green-600">
                <Users className="w-4 h-4 mr-2" />
                Students
              </TabsTrigger>
              <TabsTrigger value="approvals" className="rounded-none border-b-2 data-[state=active]:border-green-600">
                <UserCheck className="w-4 h-4 mr-2" />
                Approvals
                {pendingApprovals.length > 0 && (
                  <Badge className="ml-2 bg-orange-100 text-orange-700">{pendingApprovals.length}</Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="assignments" className="rounded-none border-b-2 data-[state=active]:border-green-600">
                <ClipboardList className="w-4 h-4 mr-2" />
                Assignments
              </TabsTrigger>
              <TabsTrigger value="attendance" className="rounded-none border-b-2 data-[state=active]:border-green-600">
                <Calendar className="w-4 h-4 mr-2" />
                Attendance
              </TabsTrigger>
              <TabsTrigger value="grades" className="rounded-none border-b-2 data-[state=active]:border-green-600">
                <Award className="w-4 h-4 mr-2" />
                Grades
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="materials" className="space-y-4 mt-0">
            <div className="flex justify-end mb-4">
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Material
              </Button>
            </div>
            {materials.map((material) => (
              <div key={material.id} className="bg-white rounded-2xl p-6 shadow-sm flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">{material.name}</h3>
                    <div className="flex items-center space-x-4 text-gray-500">
                      <span>Uploaded: {material.uploadDate}</span>
                      <span>•</span>
                      <span>{material.downloads} downloads</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="people" className="space-y-4 mt-0">
            {students.map((student) => (
              <div key={student.id} className="bg-white rounded-2xl p-6 shadow-sm flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white">{student.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">{student.name}</h3>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <span>Section {student.section}</span>
                      <span>•</span>
                      <span>Attendance: {student.attendance}%</span>
                      <span>•</span>
                      <span>Grade: {student.grade}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View Profile
                </Button>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="approvals" className="space-y-4 mt-0">
            {pendingApprovals.length > 0 ? (
              pendingApprovals.map((request) => (
                <div key={request.id} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600">{request.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="text-gray-900 mb-1">{request.name}</h3>
                        <div className="flex items-center space-x-4 text-gray-600">
                          <span>{request.department}</span>
                          <span>•</span>
                          <span>{request.year}</span>
                        </div>
                        <p className="text-gray-500 mt-2">Requested: {request.requestDate}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                        Reject
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-2xl p-12 shadow-sm text-center">
                <UserCheck className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No pending approvals</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="assignments" className="space-y-4 mt-0">
            <div className="flex justify-end mb-4">
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Create Assignment
              </Button>
            </div>
            {assignments.map((assignment) => (
              <div key={assignment.id} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-gray-900 mb-2">{assignment.title}</h3>
                    <p className="text-gray-600">Due: {assignment.dueDate}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Submissions
                  </Button>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Submissions</span>
                      <span className="text-gray-900">{assignment.submissions}/{assignment.total}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${(assignment.submissions / assignment.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="attendance" className="space-y-4 mt-0">
            <div className="flex justify-end mb-4">
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Take Attendance
              </Button>
            </div>
            {attendanceSessions.map((session, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-900">{session.date}</h3>
                  <Badge className="bg-green-100 text-green-700">
                    {Math.round((session.present / session.total) * 100)}% Present
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <p className="text-green-600 text-2xl mb-1">{session.present}</p>
                    <p className="text-gray-600">Present</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-xl">
                    <p className="text-red-600 text-2xl mb-1">{session.absent}</p>
                    <p className="text-gray-600">Absent</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <p className="text-blue-600 text-2xl mb-1">{session.total}</p>
                    <p className="text-gray-600">Total</p>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="grades" className="space-y-4 mt-0">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-gray-900 mb-6">Student Grades</h3>
              <div className="space-y-3">
                {students.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white">{student.name.charAt(0)}</span>
                      </div>
                      <span className="text-gray-900">{student.name}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge className="bg-blue-100 text-blue-700">{student.grade}</Badge>
                      <Button variant="outline" size="sm">
                        Edit Grade
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
