
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const LecturerDashboard = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const courses = [
    {
      id: '1',
      name: 'Computer Science Fundamentals',
      code: 'CS101',
      students: 45,
      atRiskCount: 3
    },
    {
      id: '2',
      name: 'Data Structures & Algorithms',
      code: 'CS201',
      students: 38,
      atRiskCount: 7
    },
    {
      id: '3',
      name: 'Web Development',
      code: 'CS301',
      students: 52,
      atRiskCount: 2
    }
  ];

  const atRiskStudents = [
    { id: '1', name: 'Alice Johnson', course: 'CS201', predictedGrade: 45, riskFactors: ['Low attendance', 'Missing assignments'] },
    { id: '2', name: 'Bob Smith', course: 'CS201', predictedGrade: 52, riskFactors: ['Poor quiz performance'] },
    { id: '3', name: 'Carol Williams', course: 'CS101', predictedGrade: 48, riskFactors: ['Low study hours', 'Poor sleep'] }
  ];

  const studentRoster = [
    { id: '1', name: 'John Doe', email: 'john.doe@university.edu', currentGrade: 78 },
    { id: '2', name: 'Jane Smith', email: 'jane.smith@university.edu', currentGrade: 85 },
    { id: '3', name: 'Alice Johnson', email: 'alice.johnson@university.edu', currentGrade: 45 },
    { id: '4', name: 'Bob Williams', email: 'bob.williams@university.edu', currentGrade: 92 }
  ];

  return (
    <DashboardLayout title="Lecturer Dashboard">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Teaching Excellence Dashboard</h2>
          <p className="text-green-100">Monitor student progress and identify those who need additional support.</p>
        </div>

        {/* At-Risk Students Alert */}
        <Alert className="border-red-200 bg-red-50">
          <AlertTitle className="text-red-800">⚠️ Students At Risk</AlertTitle>
          <AlertDescription className="text-red-700">
            {atRiskStudents.length} students are predicted to be at risk of failing. Review their details below.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="at-risk">At-Risk Students</TabsTrigger>
            <TabsTrigger value="grades">Grade Management</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => setSelectedModule(course.id)}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{course.code}</span>
                      {course.atRiskCount > 0 && (
                        <Badge variant="destructive">{course.atRiskCount} at risk</Badge>
                      )}
                    </CardTitle>
                    <CardDescription>{course.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">{course.students}</div>
                    <div className="text-sm text-gray-600">Enrolled Students</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedModule && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Student Roster - {courses.find(c => c.id === selectedModule)?.name}</CardTitle>
                  <CardDescription>Manage students and their grades</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {studentRoster.map((student) => (
                      <div key={student.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">{student.name}</div>
                          <div className="text-sm text-gray-600">{student.email}</div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-lg font-bold">{student.currentGrade}%</span>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="at-risk" className="space-y-4">
            {atRiskStudents.map((student) => (
              <Card key={student.id} className="border-red-200">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{student.name}</span>
                    <Badge variant="destructive">Predicted: {student.predictedGrade}%</Badge>
                  </CardTitle>
                  <CardDescription>Course: {student.course}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Risk Factors:</div>
                    <div className="flex flex-wrap gap-2">
                      {student.riskFactors.map((factor, index) => (
                        <Badge key={index} variant="outline" className="text-red-600 border-red-300">
                          {factor}
                        </Badge>
                      ))}
                    </div>
                    <div className="pt-3">
                      <Button size="sm" className="mr-2">Contact Student</Button>
                      <Button size="sm" variant="outline">View Full Profile</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="grades" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Grade Entry System</CardTitle>
                <CardDescription>Enter and update student grades</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <p>Grade entry form will be implemented in the next phase.</p>
                  <p className="text-sm mt-2">This will include quiz, assignment, and exam grade entry.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default LecturerDashboard;
