
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminDashboard = () => {
  const systemStats = {
    totalStudents: 1247,
    totalLecturers: 89,
    activeCourses: 156,
    pendingVerifications: 12
  };

  const recentUsers = [
    { id: '1', name: 'Alice Johnson', email: 'alice.j@university.edu', role: 'student', status: 'pending' },
    { id: '2', name: 'Dr. Smith', email: 'dr.smith@university.edu', role: 'lecturer', status: 'verified' },
    { id: '3', name: 'Bob Williams', email: 'bob.w@university.edu', role: 'student', status: 'pending' }
  ];

  const courses = [
    { id: '1', name: 'Computer Science Fundamentals', code: 'CS101', students: 45, lecturer: 'Dr. Johnson' },
    { id: '2', name: 'Data Structures', code: 'CS201', students: 38, lecturer: 'Dr. Smith' },
    { id: '3', name: 'Web Development', code: 'CS301', students: 52, lecturer: 'Prof. Williams' }
  ];

  return (
    <DashboardLayout title="Admin Dashboard">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">System Administration</h2>
          <p className="text-purple-100">Manage users, courses, and system configurations.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{systemStats.totalStudents}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Lecturers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{systemStats.totalLecturers}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{systemStats.activeCourses}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Verifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{systemStats.pendingVerifications}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="courses">Course Management</TabsTrigger>
            <TabsTrigger value="system">System Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent User Registrations</CardTitle>
                <CardDescription>Review and verify new user accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-gray-600">{user.email}</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={user.role === 'lecturer' ? 'default' : 'secondary'}>
                          {user.role}
                        </Badge>
                        <Badge variant={user.status === 'verified' ? 'default' : 'destructive'}>
                          {user.status}
                        </Badge>
                        {user.status === 'pending' && (
                          <div className="space-x-2">
                            <Button size="sm" variant="outline">Verify</Button>
                            <Button size="sm" variant="destructive">Reject</Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button>View All Users</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Course Management</CardTitle>
                <CardDescription>Manage academic courses and enrollment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {courses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">{course.code} - {course.name}</div>
                        <div className="text-sm text-gray-600">Lecturer: {course.lecturer}</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-lg font-bold">{course.students} students</span>
                        <Button size="sm" variant="outline">Edit</Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button>Add New Course</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>System Configuration</CardTitle>
                <CardDescription>Manage system-wide settings and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <p>System configuration panel will be implemented in the next phase.</p>
                  <p className="text-sm mt-2">This will include academic term settings, grading scales, and more.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
