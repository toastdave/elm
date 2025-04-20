"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Clock, Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Pagination } from "@/components/pagination"

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
    tags: ["React", "JavaScript", "Remote"],
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
    tags: ["Marketing", "Social Media", "Content Creation"],
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
    tags: ["SQL", "Python", "Data Visualization"],
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
    tags: ["HR", "Recruiting", "People Operations"],
  },
  {
    id: 5,
    title: "Junior Product Designer",
    company: "DesignHub",
    location: "San Francisco, CA",
    salary: "$75,000 - $90,000",
    experience: "1-3 years",
    openingTime: "2023-05-17T14:00:00",
    applicantLimit: 35,
    currentApplicants: 29,
    description: "Create beautiful, intuitive interfaces for our suite of digital products.",
    postedDate: "3 days ago",
    tags: ["UI/UX", "Figma", "Product Design"],
  },
  {
    id: 6,
    title: "Financial Analyst",
    company: "Capital Growth Partners",
    location: "Boston, MA",
    salary: "$65,000 - $75,000",
    experience: "1-3 years",
    openingTime: "2023-05-19T10:00:00",
    applicantLimit: 45,
    currentApplicants: 31,
    description: "Analyze financial data and prepare reports to guide investment decisions.",
    postedDate: "2 days ago",
    tags: ["Finance", "Excel", "Financial Modeling"],
  },
  {
    id: 7,
    title: "Customer Success Associate",
    company: "ServicePro",
    location: "Remote",
    salary: "$55,000 - $65,000",
    experience: "0-2 years",
    openingTime: "2023-05-22T09:00:00",
    applicantLimit: 80,
    currentApplicants: 45,
    description: "Help our customers get the most value from our software platform.",
    postedDate: "1 day ago",
    tags: ["Customer Service", "SaaS", "Remote"],
  },
  {
    id: 8,
    title: "Junior Project Manager",
    company: "BuildRight Construction",
    location: "Denver, CO",
    salary: "$60,000 - $70,000",
    experience: "2-4 years",
    openingTime: "2023-05-26T11:00:00",
    applicantLimit: 30,
    currentApplicants: 0,
    description: "Coordinate construction projects from planning to completion.",
    postedDate: "Just posted",
    openingSoon: true,
    tags: ["Project Management", "Construction", "Scheduling"],
  },
  {
    id: 9,
    title: "Content Writer",
    company: "Digital Media Co.",
    location: "Remote",
    salary: "$55,000 - $65,000",
    experience: "1-3 years",
    openingTime: "2023-05-21T09:00:00",
    applicantLimit: 50,
    currentApplicants: 27,
    description: "Create engaging content for various digital platforms and client websites.",
    postedDate: "2 days ago",
    tags: ["Writing", "SEO", "Content Strategy"],
  },
  {
    id: 10,
    title: "Junior Accountant",
    company: "Financial Solutions Inc.",
    location: "Chicago, IL",
    salary: "$60,000 - $70,000",
    experience: "0-2 years",
    openingTime: "2023-05-18T10:00:00",
    applicantLimit: 40,
    currentApplicants: 22,
    description: "Assist with financial reporting, accounts payable/receivable, and general ledger maintenance.",
    postedDate: "4 days ago",
    tags: ["Accounting", "QuickBooks", "Excel"],
  },
  {
    id: 11,
    title: "Sales Development Representative",
    company: "GrowthTech",
    location: "Austin, TX",
    salary: "$50,000 - $65,000",
    experience: "0-2 years",
    openingTime: "2023-05-19T09:00:00",
    applicantLimit: 60,
    currentApplicants: 38,
    description: "Generate qualified leads and build relationships with potential customers.",
    postedDate: "3 days ago",
    tags: ["Sales", "CRM", "Lead Generation"],
  },
  {
    id: 12,
    title: "IT Support Specialist",
    company: "TechHelp Solutions",
    location: "Remote",
    salary: "$55,000 - $70,000",
    experience: "1-3 years",
    openingTime: "2023-05-20T10:00:00",
    applicantLimit: 45,
    currentApplicants: 19,
    description: "Provide technical support and troubleshooting for internal teams and clients.",
    postedDate: "2 days ago",
    tags: ["IT Support", "Networking", "Troubleshooting"],
  },
]

export default function JobsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const totalPages = Math.ceil(jobListings.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentJobs = jobListings.slice(startIndex, endIndex)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Early Career Job Board</h1>
              <p className="text-muted-foreground mt-2">
                Transparent opportunities for professionals with 0-5 years of experience
              </p>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-[250px_1fr]">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Filters</h3>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Experience Level</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="exp-0-1" />
                      <Label htmlFor="exp-0-1" className="text-sm font-normal">
                        0-1 years
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="exp-1-3" />
                      <Label htmlFor="exp-1-3" className="text-sm font-normal">
                        1-3 years
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="exp-3-5" />
                      <Label htmlFor="exp-3-5" className="text-sm font-normal">
                        3-5 years
                      </Label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Location</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="loc-remote" />
                      <Label htmlFor="loc-remote" className="text-sm font-normal">
                        Remote
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="loc-ny" />
                      <Label htmlFor="loc-ny" className="text-sm font-normal">
                        New York
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="loc-sf" />
                      <Label htmlFor="loc-sf" className="text-sm font-normal">
                        San Francisco
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="loc-other" />
                      <Label htmlFor="loc-other" className="text-sm font-normal">
                        Other
                      </Label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Salary Range</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="salary-50k" />
                      <Label htmlFor="salary-50k" className="text-sm font-normal">
                        $50k - $70k
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="salary-70k" />
                      <Label htmlFor="salary-70k" className="text-sm font-normal">
                        $70k - $90k
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="salary-90k" />
                      <Label htmlFor="salary-90k" className="text-sm font-normal">
                        $90k+
                      </Label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Application Status</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="status-open" />
                      <Label htmlFor="status-open" className="text-sm font-normal">
                        Currently Open
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="status-soon" />
                      <Label htmlFor="status-soon" className="text-sm font-normal">
                        Opening Soon
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="status-available" />
                      <Label htmlFor="status-available" className="text-sm font-normal">
                        Slots Available
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-rose-600 hover:bg-rose-700">Apply Filters</Button>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex-1 relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search jobs by title, company, or location" className="pl-8" />
                </div>
                <Select>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                    <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                    <SelectItem value="applicants">Fewest Applicants</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-6">
                {currentJobs.map((job) => (
                  <Card key={job.id} className={job.openingSoon ? "border-rose-200" : ""}>
                    {job.openingSoon && (
                      <div className="bg-rose-50 px-4 py-1 text-sm text-rose-600 font-medium flex items-center justify-between">
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          Opening Soon
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
                        <div className="flex flex-wrap gap-2">
                          {job.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
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

              <div className="flex justify-center mt-8">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
