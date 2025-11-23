import { ArrowLeft, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface ReportManagementProps {
  onBack: () => void;
}

export function ReportManagement({ onBack }: ReportManagementProps) {
  const reports = [
    {
      id: 1,
      type: 'Inappropriate Content',
      reportedUser: 'John Doe',
      reportedBy: 'Alice Johnson',
      description: 'Posted offensive content in course materials',
      date: 'Nov 22, 2025',
      status: 'pending'
    },
    {
      id: 2,
      type: 'Spam',
      reportedUser: 'Jane Smith',
      reportedBy: 'Bob Smith',
      description: 'Sending spam messages to multiple students',
      date: 'Nov 21, 2025',
      status: 'pending'
    },
    {
      id: 3,
      type: 'Harassment',
      reportedUser: 'Mike Johnson',
      reportedBy: 'Carol White',
      description: 'Harassing behavior in class discussions',
      date: 'Nov 20, 2025',
      status: 'resolved'
    },
    {
      id: 4,
      type: 'Fake Profile',
      reportedUser: 'Test User',
      reportedBy: 'David Lee',
      description: 'Suspected fake student profile',
      date: 'Nov 19, 2025',
      status: 'dismissed'
    }
  ];

  const getStatusColor = (status: string) => {
    if (status === 'pending') return 'bg-orange-100 text-orange-700';
    if (status === 'resolved') return 'bg-green-100 text-green-700';
    if (status === 'dismissed') return 'bg-gray-100 text-gray-700';
    return 'bg-blue-100 text-blue-700';
  };

  const getTypeColor = (type: string) => {
    if (type === 'Inappropriate Content') return 'bg-red-100 text-red-700';
    if (type === 'Spam') return 'bg-orange-100 text-orange-700';
    if (type === 'Harassment') return 'bg-purple-100 text-purple-700';
    return 'bg-blue-100 text-blue-700';
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 pt-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center text-white/90 hover:text-white mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-white mb-2">Report Management</h1>
              <p className="text-purple-100">
                {reports.filter(r => r.status === 'pending').length} pending reports
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-6">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500 mb-2">Pending Reports</p>
            <p className="text-gray-900 text-3xl">
              {reports.filter(r => r.status === 'pending').length}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500 mb-2">Resolved Reports</p>
            <p className="text-gray-900 text-3xl">
              {reports.filter(r => r.status === 'resolved').length}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500 mb-2">Total Reports</p>
            <p className="text-gray-900 text-3xl">{reports.length}</p>
          </div>
        </div>

        {/* Reports List */}
        <div className="space-y-4">
          {reports.map((report) => (
            <div key={report.id} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <Badge className={getTypeColor(report.type)}>{report.type}</Badge>
                      <Badge className={getStatusColor(report.status)}>{report.status}</Badge>
                    </div>
                    <div className="mb-3">
                      <p className="text-gray-900 mb-1">
                        <span className="text-gray-600">Reported User:</span> {report.reportedUser}
                      </p>
                      <p className="text-gray-900 mb-1">
                        <span className="text-gray-600">Reported By:</span> {report.reportedBy}
                      </p>
                      <p className="text-gray-900">
                        <span className="text-gray-600">Date:</span> {report.date}
                      </p>
                    </div>
                    <p className="text-gray-600 bg-gray-50 p-4 rounded-xl">{report.description}</p>
                  </div>
                </div>
                {report.status === 'pending' && (
                  <div className="flex flex-col space-y-2 ml-4">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Resolve
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                      <XCircle className="w-4 h-4 mr-2" />
                      Dismiss
                    </Button>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
