
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StudentDashboard = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const modules = [
    {
      id: '1',
      name: 'Computer Science Fundamentals',
      code: 'CS101',
      currentGrade: 78,
      predictedFinal: 82,
      status: 'On Track',
      marks: {
        quiz1: 85,
        quiz2: 75,
        assignment1: 80,
        assignment2: 78,
        midterm: 76,
        predicted: 82
      }
    },
    {
      id: '2',
      name: 'Data Structures & Algorithms',
      code: 'CS201',
      currentGrade: 65,
      predictedFinal: 68,
      status: 'At Risk',
      marks: {
        quiz1: 70,
        quiz2: 60,
        assignment1: 65,
        assignment2: 68,
        midterm: 63,
        predicted: 68
      }
    },
    {
      id: '3',
      name: 'Web Development',
      code: 'CS301',
      currentGrade: 92,
      predictedFinal: 94,
      status: 'Excellent',
      marks: {
        quiz1: 95,
        quiz2: 88,
        assignment1: 92,
        assignment2: 94,
        midterm: 91,
        predicted: 94
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Excellent': return 'bg-green-100 text-green-800';
      case 'On Track': return 'bg-blue-100 text-blue-800';
      case 'At Risk': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout title="Student Dashboard">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Welcome to Your Academic Journey</h2>
          <p className="text-blue-100">Track your progress and stay on top of your studies with predictive insights.</p>
        </div>

        <Tabs defaultValue="modules" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="modules">My Modules</TabsTrigger>
            <TabsTrigger value="personal">Personal Data</TabsTrigger>
          </TabsList>

          <TabsContent value="modules" className="space-y-4">
            {/* Modules Overview */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {modules.map((module) => (
                <Card key={module.id} className="hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => setSelectedModule(module.id)}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{module.code}</CardTitle>
                        <CardDescription className="text-sm">{module.name}</CardDescription>
                      </div>
                      <Badge className={getStatusColor(module.status)}>
                        {module.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Current Grade</span>
                          <span className="font-medium">{module.currentGrade}%</span>
                        </div>
                        <Progress value={module.currentGrade} className="h-2" />
                      </div>
                      <div className="text-sm text-gray-600">
                        Predicted Final: <span className="font-medium text-gray-900">{module.predictedFinal}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed View */}
            {selectedModule && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Detailed Marks - {modules.find(m => m.id === selectedModule)?.name}</CardTitle>
                  <CardDescription>Complete breakdown of your performance</CardDescription>
                </CardHeader>
                <CardContent>
                  {(() => {
                    const module = modules.find(m => m.id === selectedModule);
                    if (!module) return null;
                    
                    return (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{module.marks.quiz1}</div>
                          <div className="text-sm text-gray-600">Quiz 1</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{module.marks.quiz2}</div>
                          <div className="text-sm text-gray-600">Quiz 2</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">{module.marks.assignment1}</div>
                          <div className="text-sm text-gray-600">Assignment 1</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">{module.marks.assignment2}</div>
                          <div className="text-sm text-gray-600">Assignment 2</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">{module.marks.midterm}</div>
                          <div className="text-sm text-gray-600">Midterm</div>
                        </div>
                        <div className="text-center p-3 bg-indigo-50 rounded-lg border-2 border-indigo-200">
                          <div className="text-2xl font-bold text-indigo-600">{module.marks.predicted}</div>
                          <div className="text-sm text-indigo-600 font-medium">Predicted Final</div>
                        </div>
                      </div>
                    );
                  })()}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="personal" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Personal Data for Predictive Analytics</CardTitle>
                <CardDescription>
                  Help us provide better predictions by updating your personal information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <p>Personal data form will be implemented in the next phase.</p>
                  <p className="text-sm mt-2">This will include study hours, sleep patterns, and other factors.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
