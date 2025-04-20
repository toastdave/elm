"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Mock data for career reviews
const careerReviews = [
  {
    id: 1,
    jobTitle: "Software Engineer",
    industry: "Technology",
    salary: "$95,000",
    enjoyment: 4,
    difficulty: 3,
    recommend: true,
    education: "Bachelor's Degree",
    formalRequired: false,
    reviewCount: 128,
  },
  {
    id: 2,
    jobTitle: "Registered Nurse",
    industry: "Healthcare",
    salary: "$75,000",
    enjoyment: 4,
    difficulty: 4,
    recommend: true,
    education: "Bachelor's Degree",
    formalRequired: true,
    reviewCount: 94,
  },
  {
    id: 3,
    jobTitle: "Marketing Manager",
    industry: "Marketing",
    salary: "$85,000",
    enjoyment: 4,
    difficulty: 3,
    recommend: true,
    education: "Bachelor's Degree",
    formalRequired: false,
    reviewCount: 67,
  },
  {
    id: 4,
    jobTitle: "Financial Analyst",
    industry: "Finance",
    salary: "$80,000",
    enjoyment: 3,
    difficulty: 4,
    recommend: true,
    education: "Bachelor's Degree",
    formalRequired: true,
    reviewCount: 82,
  },
  {
    id: 5,
    jobTitle: "UX Designer",
    industry: "Technology",
    salary: "$90,000",
    enjoyment: 4,
    difficulty: 3,
    recommend: true,
    education: "Bachelor's Degree",
    formalRequired: false,
    reviewCount: 56,
  },
  {
    id: 6,
    jobTitle: "High School Teacher",
    industry: "Education",
    salary: "$60,000",
    enjoyment: 4,
    difficulty: 4,
    recommend: true,
    education: "Bachelor's Degree",
    formalRequired: true,
    reviewCount: 73,
  },
]

// Mock data for job listings
const jobListings = [
  {
    id: 1,
    title: "Junior Software Developer",
    company: "TechStart Inc.",
    location: "Remote",
    salary: "$70,000 - $85,000",
    experience: "1-3 years",
    openingTime: "2023-05-15T09:00:00",
    applicantLimit: 50,
    currentApplicants: 23,
    description: "Join our growing team to build innovative web applications using modern technologies.",
    postedDate: "3 days ago",
  },
  {
    id: 2,
    title: "Marketing Associate",
    company: "Brand Forward",
    location: "New York, NY",
    salary: "$55,000 - $65,000",
    experience: "0-2 years",
    openingTime: "2023-05-20T12:00:00",
    applicantLimit: 75,
    currentApplicants: 41,
    description: "Help develop and execute marketing campaigns for our diverse client portfolio.",
    postedDate: "1 day ago",
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "Insight Analytics",
    location: "Chicago, IL",
    salary: "$65,000 - $80,000",
    experience: "2-4 years",
    openingTime: "2023-05-18T10:00:00",
    applicantLimit: 40,
    currentApplicants: 38,
    description: "Turn data into actionable insights that drive business decisions.",
    postedDate: "2 days ago",
  },
  {
    id: 4,
    title: "HR Coordinator",
    company: "PeopleFirst Co.",
    location: "Austin, TX",
    salary: "$50,000 - $60,000",
    experience: "0-2 years",
    openingTime: "2023-05-25T09:00:00",
    applicantLimit: 60,
    currentApplicants: 12,
    description: "Support our HR team in recruiting, onboarding, and employee relations.",
    postedDate: "Just posted",
    openingSoon: true,
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState("careers")

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section id="explore" className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="careers" className="space-y-8" onValueChange={setActiveTab}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Explore Elm</h2>
                  <p className="text-muted-foreground mt-2">Find career insights and early-career job opportunities.</p>
                </div>
                <TabsList>
                  <TabsTrigger value="careers">Career Reviews</TabsTrigger>
                  <TabsTrigger value="jobs">Job Openings</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="careers" className="space-y-8">
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="flex-1 relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search by job title or keyword" className="pl-8" />
                  </div>
                  <Select>
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Industries</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                      <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                      <SelectItem value="enjoyment">Enjoyment</SelectItem>
                      <SelectItem value="reviews">Most Reviews</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {careerReviews.slice(0, 6).map((career) => (
                    <Card key={career.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{career.jobTitle}</CardTitle>
                          <Badge variant="outline">{career.industry}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="font-medium">Avg. Salary:</div>
                            <div>{career.salary}</div>

                            <div className="font-medium">Enjoyment:</div>
                            <div>{career.enjoyment}/5</div>

                            <div className="font-medium">Difficulty:</div>
                            <div>{career.difficulty}/5</div>

                            <div className="font-medium">Education:</div>
                            <div>{career.education}</div>

                            <div className="font-medium">Formal Required:</div>
                            <div>{career.formalRequired ? "Yes" : "No"}</div>

                            <div className="font-medium">Recommended:</div>
                            <div>{career.recommend ? "Yes" : "No"}</div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="text-sm text-muted-foreground">{career.reviewCount} reviews</div>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/careers/${career.id}`}>View Details</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-center">
                  <Button asChild className="bg-rose-600 hover:bg-rose-700">
                    <Link href="/careers">
                      View All Career Reviews
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="jobs" className="space-y-8">
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="flex-1 relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search jobs by title, company, or location" className="pl-8" />
                  </div>
                  <Select>
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Experience</SelectItem>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {jobListings.map((job) => (
                    <Card key={job.id} className={job.openingSoon ? "border-rose-200" : ""}>
                      {job.openingSoon && (
                        <div className="bg-rose-50 px-4 py-1 text-sm text-rose-600 font-medium flex items-center justify-between">
                          <div className="flex items-center">
                            <span>Opening Soon</span>
                          </div>
                          <span>May 25, 9:00 AM</span>
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">{job.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">
                              {job.company} • {job.location}
                            </p>
                          </div>
                          <Badge variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-200">
                            {job.salary}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <p className="text-sm">{job.description}</p>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span>
                                <span className="font-medium">{job.currentApplicants}</span>
                                <span className="text-muted-foreground"> / {job.applicantLimit} applicants</span>
                              </span>
                            </div>
                            <Badge variant="outline">{job.experience} exp</Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="text-sm text-muted-foreground">Posted {job.postedDate}</div>
                        <Button
                          asChild
                          size="sm"
                          className={
                            job.openingSoon
                              ? "bg-muted text-muted-foreground hover:bg-muted"
                              : "bg-rose-600 hover:bg-rose-700"
                          }
                          disabled={job.openingSoon}
                        >
                          <Link href={`/jobs/${job.id}`}>{job.openingSoon ? "Opens Soon" : "Apply Now"}</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-center">
                  <Button asChild className="bg-rose-600 hover:bg-rose-700">
                    <Link href="/jobs">
                      View All Job Openings
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                For employers: Post early-career jobs with transparency
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Reach qualified early-career candidates with transparent job listings that include clear pay ranges and
                fair application processes.
              </p>
            </div>
            <div className="flex gap-4 lg:justify-end">
              <Button asChild className="bg-rose-600 hover:bg-rose-700">
                <Link href="/employers">Post a Job</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/employer-info">Learn more</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
