import Link from "next/link"
import { ArrowLeft, Building, FileText, Settings, Users, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Mock company data
const companyData = {
  name: "TechStart Inc.",
  email: "recruiting@techstart.com",
  joinedDate: "April 2023",
  activeJobs: [
    {
      id: 1,
      title: "Junior Software Developer",
      location: "Remote",
      postedDate: "May 10, 2023",
      applicants: 23,
      applicantLimit: 50,
      status: "Active",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      location: "San Francisco, CA",
      postedDate: "May 15, 2023",
      applicants: 18,
      applicantLimit: 40,
      status: "Active",
    },
  ],
  draftJobs: [
    {
      id: 3,
      title: "Product Manager",
      location: "New York, NY",
      lastEdited: "May 14, 2023",
    },
  ],
}

export default function CompanyProfilePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-rose-100 flex items-center justify-center">
                <Building className="h-8 w-8 text-rose-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{companyData.name}</h1>
                <p className="text-muted-foreground">{companyData.email}</p>
              </div>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-64 space-y-4">
              <Card>
                <CardContent className="p-4">
                  <nav className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/company" className="flex items-center">
                        <Building className="mr-2 h-4 w-4" />
                        Company Profile
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/company/jobs" className="flex items-center">
                        <FileText className="mr-2 h-4 w-4" />
                        Job Listings
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/company/applicants" className="flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        Applicants
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/company/settings" className="flex items-center">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Link>
                    </Button>
                  </nav>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Account Info</CardTitle>
                </CardHeader>
                <CardContent className="pb-4 pt-0">
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Account Type:</span>
                      <span>Employer</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Joined:</span>
                      <span>{companyData.joinedDate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex-1">
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="jobs">Job Listings</TabsTrigger>
                  <TabsTrigger value="applicants">Applicants</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Welcome, {companyData.name}</CardTitle>
                      <CardDescription>Here's a summary of your job listings</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6 sm:grid-cols-3">
                      <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                        <span className="text-3xl font-bold">{companyData.activeJobs.length}</span>
                        <span className="text-sm text-muted-foreground">Active Jobs</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                        <span className="text-3xl font-bold">
                          {companyData.activeJobs.reduce((sum, job) => sum + job.applicants, 0)}
                        </span>
                        <span className="text-sm text-muted-foreground">Total Applicants</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                        <span className="text-3xl font-bold">{companyData.draftJobs.length}</span>
                        <span className="text-sm text-muted-foreground">Draft Jobs</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
                        <Link href="/employers">
                          <Plus className="mr-2 h-4 w-4" />
                          Post a New Job
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Active Job Listings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {companyData.activeJobs.length > 0 ? (
                        <div className="space-y-4">
                          {companyData.activeJobs.map((job) => (
                            <div
                              key={job.id}
                              className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 border rounded-lg"
                            >
                              <div>
                                <h3 className="font-medium">{job.title}</h3>
                                <p className="text-sm text-muted-foreground">{job.location}</p>
                                <p className="text-xs text-muted-foreground mt-1">Posted on {job.postedDate}</p>
                              </div>
                              <div className="mt-2 sm:mt-0 sm:text-right">
                                <Badge variant="outline" className="mb-2">
                                  {job.applicants} / {job.applicantLimit} applicants
                                </Badge>
                                <div className="flex gap-2 justify-end">
                                  <Button variant="outline" size="sm">
                                    View Applicants
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    Edit
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-center text-muted-foreground py-4">No active job listings</p>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/company/jobs">View All Job Listings</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="jobs" className="space-y-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Job Listings</CardTitle>
                        <CardDescription>Manage your active and draft job listings</CardDescription>
                      </div>
                      <Button asChild className="bg-rose-600 hover:bg-rose-700">
                        <Link href="/employers">
                          <Plus className="mr-2 h-4 w-4" />
                          Post a New Job
                        </Link>
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="active">
                        <TabsList className="mb-4">
                          <TabsTrigger value="active">Active ({companyData.activeJobs.length})</TabsTrigger>
                          <TabsTrigger value="drafts">Drafts ({companyData.draftJobs.length})</TabsTrigger>
                        </TabsList>
                        <TabsContent value="active">
                          {companyData.activeJobs.length > 0 ? (
                            <div className="space-y-4">
                              {companyData.activeJobs.map((job) => (
                                <div
                                  key={job.id}
                                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 border rounded-lg"
                                >
                                  <div>
                                    <h3 className="font-medium">{job.title}</h3>
                                    <p className="text-sm text-muted-foreground">{job.location}</p>
                                    <p className="text-xs text-muted-foreground mt-1">Posted on {job.postedDate}</p>
                                  </div>
                                  <div className="mt-2 sm:mt-0 sm:text-right">
                                    <Badge variant="outline" className="mb-2">
                                      {job.applicants} / {job.applicantLimit} applicants
                                    </Badge>
                                    <div className="flex gap-2 justify-end">
                                      <Button variant="outline" size="sm">
                                        View Applicants
                                      </Button>
                                      <Button variant="ghost" size="sm">
                                        Edit
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-center text-muted-foreground py-4">No active job listings</p>
                          )}
                        </TabsContent>
                        <TabsContent value="drafts">
                          {companyData.draftJobs.length > 0 ? (
                            <div className="space-y-4">
                              {companyData.draftJobs.map((job) => (
                                <div
                                  key={job.id}
                                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 border rounded-lg"
                                >
                                  <div>
                                    <h3 className="font-medium">{job.title}</h3>
                                    <p className="text-sm text-muted-foreground">{job.location}</p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                      Last edited on {job.lastEdited}
                                    </p>
                                  </div>
                                  <div className="mt-2 sm:mt-0 sm:text-right">
                                    <div className="flex gap-2 justify-end">
                                      <Button variant="outline" size="sm">
                                        Edit Draft
                                      </Button>
                                      <Button variant="ghost" size="sm">
                                        Delete
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-center text-muted-foreground py-4">No draft job listings</p>
                          )}
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="applicants" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Applicants</CardTitle>
                      <CardDescription>Review and manage job applicants</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {companyData.activeJobs.some((job) => job.applicants > 0) ? (
                        <div className="space-y-6">
                          {companyData.activeJobs
                            .filter((job) => job.applicants > 0)
                            .map((job) => (
                              <div key={job.id} className="space-y-4">
                                <h3 className="font-medium text-lg">{job.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                  {job.applicants} applicants • Posted on {job.postedDate}
                                </p>
                                <div className="grid gap-4 md:grid-cols-2">
                                  {Array.from({ length: 2 }).map((_, i) => (
                                    <div key={i} className="p-4 border rounded-lg">
                                      <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                                          <Users className="h-5 w-5 text-muted-foreground" />
                                        </div>
                                        <div>
                                          <h4 className="font-medium">Applicant {i + 1}</h4>
                                          <p className="text-xs text-muted-foreground">Applied 2 days ago</p>
                                        </div>
                                      </div>
                                      <div className="mt-4 flex gap-2">
                                        <Button variant="outline" size="sm" className="flex-1">
                                          View Profile
                                        </Button>
                                        <Button
                                          variant="default"
                                          size="sm"
                                          className="flex-1 bg-rose-600 hover:bg-rose-700"
                                        >
                                          Contact
                                        </Button>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                <div className="flex justify-end">
                                  <Button variant="outline" size="sm">
                                    View All Applicants
                                  </Button>
                                </div>
                              </div>
                            ))}
                        </div>
                      ) : (
                        <p className="text-center text-muted-foreground py-4">No applicants yet</p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
