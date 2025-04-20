import Link from "next/link"
import { ArrowLeft, Briefcase, User, Building, FileText, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Mock user data
const userData = {
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  joinedDate: "May 2023",
  accountType: "Job Seeker",
  applications: [
    {
      id: 1,
      jobTitle: "Junior Software Developer",
      company: "TechStart Inc.",
      appliedDate: "May 10, 2023",
      status: "Under Review",
    },
    {
      id: 2,
      jobTitle: "Marketing Associate",
      company: "Brand Forward",
      appliedDate: "May 15, 2023",
      status: "Interview Scheduled",
    },
  ],
  savedJobs: [
    {
      id: 3,
      jobTitle: "Data Analyst",
      company: "Insight Analytics",
      location: "Chicago, IL",
      salary: "$65,000 - $80,000",
      savedDate: "May 12, 2023",
    },
    {
      id: 4,
      jobTitle: "HR Coordinator",
      company: "PeopleFirst Co.",
      location: "Austin, TX",
      salary: "$50,000 - $60,000",
      savedDate: "May 14, 2023",
    },
  ],
  reviews: [
    {
      id: 1,
      jobTitle: "Software Engineer",
      company: "Tech Solutions Inc.",
      submittedDate: "April 28, 2023",
      status: "Published",
    },
  ],
}

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-rose-100 flex items-center justify-center">
                <User className="h-8 w-8 text-rose-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{userData.name}</h1>
                <p className="text-muted-foreground">{userData.email}</p>
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
                      <Link href="/profile" className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/profile/applications" className="flex items-center">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Applications
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/profile/saved-jobs" className="flex items-center">
                        <Building className="mr-2 h-4 w-4" />
                        Saved Jobs
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/profile/reviews" className="flex items-center">
                        <FileText className="mr-2 h-4 w-4" />
                        My Reviews
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/profile/settings" className="flex items-center">
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
                      <span>{userData.accountType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Joined:</span>
                      <span>{userData.joinedDate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex-1">
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="applications">Applications</TabsTrigger>
                  <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
                  <TabsTrigger value="reviews">My Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Welcome back, {userData.name.split(" ")[0]}</CardTitle>
                      <CardDescription>Here's a summary of your activity on Elm</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6 sm:grid-cols-3">
                      <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                        <span className="text-3xl font-bold">{userData.applications.length}</span>
                        <span className="text-sm text-muted-foreground">Active Applications</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                        <span className="text-3xl font-bold">{userData.savedJobs.length}</span>
                        <span className="text-sm text-muted-foreground">Saved Jobs</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                        <span className="text-3xl font-bold">{userData.reviews.length}</span>
                        <span className="text-sm text-muted-foreground">Reviews Submitted</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
                        <Link href="/jobs">Browse New Jobs</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Applications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {userData.applications.length > 0 ? (
                        <div className="space-y-4">
                          {userData.applications.map((application) => (
                            <div key={application.id} className="flex justify-between items-center">
                              <div>
                                <h3 className="font-medium">{application.jobTitle}</h3>
                                <p className="text-sm text-muted-foreground">{application.company}</p>
                              </div>
                              <div className="text-right">
                                <Badge
                                  variant={
                                    application.status === "Under Review"
                                      ? "outline"
                                      : application.status === "Interview Scheduled"
                                        ? "secondary"
                                        : "default"
                                  }
                                >
                                  {application.status}
                                </Badge>
                                <p className="text-xs text-muted-foreground mt-1">Applied {application.appliedDate}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-center text-muted-foreground py-4">No applications yet</p>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/profile/applications">View All Applications</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="applications" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Applications</CardTitle>
                      <CardDescription>Track the status of your job applications</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {userData.applications.length > 0 ? (
                        <div className="space-y-4">
                          {userData.applications.map((application) => (
                            <div
                              key={application.id}
                              className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 border rounded-lg"
                            >
                              <div>
                                <h3 className="font-medium">{application.jobTitle}</h3>
                                <p className="text-sm text-muted-foreground">{application.company}</p>
                                <p className="text-xs text-muted-foreground mt-1">Applied {application.appliedDate}</p>
                              </div>
                              <div className="mt-2 sm:mt-0 sm:text-right">
                                <Badge
                                  variant={
                                    application.status === "Under Review"
                                      ? "outline"
                                      : application.status === "Interview Scheduled"
                                        ? "secondary"
                                        : "default"
                                  }
                                  className="mb-2"
                                >
                                  {application.status}
                                </Badge>
                                <div className="flex gap-2 justify-end">
                                  <Button variant="outline" size="sm">
                                    View Details
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    Withdraw
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-center text-muted-foreground py-4">No applications yet</p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="saved" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Saved Jobs</CardTitle>
                      <CardDescription>Jobs you've saved for later</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {userData.savedJobs.length > 0 ? (
                        <div className="space-y-4">
                          {userData.savedJobs.map((job) => (
                            <div
                              key={job.id}
                              className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 border rounded-lg"
                            >
                              <div>
                                <h3 className="font-medium">{job.jobTitle}</h3>
                                <p className="text-sm text-muted-foreground">
                                  {job.company} • {job.location}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">Saved on {job.savedDate}</p>
                              </div>
                              <div className="mt-2 sm:mt-0 sm:text-right">
                                <Badge variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-200 mb-2">
                                  {job.salary}
                                </Badge>
                                <div className="flex gap-2 justify-end">
                                  <Button variant="default" size="sm" className="bg-rose-600 hover:bg-rose-700">
                                    Apply Now
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    Remove
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-center text-muted-foreground py-4">No saved jobs yet</p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Reviews</CardTitle>
                      <CardDescription>Career reviews you've submitted</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {userData.reviews.length > 0 ? (
                        <div className="space-y-4">
                          {userData.reviews.map((review) => (
                            <div
                              key={review.id}
                              className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 border rounded-lg"
                            >
                              <div>
                                <h3 className="font-medium">{review.jobTitle}</h3>
                                <p className="text-sm text-muted-foreground">{review.company}</p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Submitted on {review.submittedDate}
                                </p>
                              </div>
                              <div className="mt-2 sm:mt-0 sm:text-right">
                                <Badge variant="outline" className="mb-2">
                                  {review.status}
                                </Badge>
                                <div className="flex gap-2 justify-end">
                                  <Button variant="outline" size="sm">
                                    View Review
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
                        <p className="text-center text-muted-foreground py-4">No reviews submitted yet</p>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
                        <Link href="/submit-review">Submit a New Review</Link>
                      </Button>
                    </CardFooter>
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
