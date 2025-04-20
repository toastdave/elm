import Link from "next/link"
import { ArrowLeft, Building, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Mock job data
const job = {
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
  aboutCompany:
    "TechStart Inc. is a fast-growing startup focused on creating intuitive web applications for small businesses. Founded in 2018, we've helped over 500 companies streamline their operations with our software solutions.",
  responsibilities: [
    "Develop and maintain web applications using React, JavaScript, and related technologies",
    "Collaborate with designers to implement user interfaces",
    "Write clean, maintainable, and efficient code",
    "Participate in code reviews and contribute to team discussions",
    "Debug issues and implement fixes in existing applications",
  ],
  requirements: [
    "1-3 years of experience in web development",
    "Proficiency in JavaScript, HTML, and CSS",
    "Experience with React or similar frontend frameworks",
    "Basic understanding of RESTful APIs",
    "Strong problem-solving skills and attention to detail",
    "Bachelor's degree in Computer Science or related field (or equivalent experience)",
  ],
  benefits: [
    "Competitive salary and equity options",
    "Flexible remote work policy",
    "Health, dental, and vision insurance",
    "401(k) matching",
    "Professional development budget",
    "Unlimited PTO policy",
  ],
  applicationProcess: [
    "Initial application review (1-2 days)",
    "Technical assessment (take-home project)",
    "First interview with hiring manager",
    "Second interview with team members",
    "Final interview with leadership",
    "Offer and onboarding",
  ],
}

export default function JobDetailPage({ params }) {
  const jobId = params.id

  // In a real application, you would fetch the job data based on the ID

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <Button asChild variant="outline" size="sm">
              <Link href="/jobs">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Jobs
              </Link>
            </Button>
            <Badge variant="outline" className="text-xs">
              Posted {job.postedDate}
            </Badge>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">{job.title}</h1>
              <div className="flex flex-wrap gap-2 items-center text-muted-foreground">
                <div className="flex items-center">
                  <Building className="h-4 w-4 mr-1" />
                  {job.company}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {job.location}
                </div>
                <Badge variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-200">
                  {job.salary}
                </Badge>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Application Status</CardTitle>
                <CardDescription>This job has limited application slots</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Applications</span>
                    <span className="font-medium">
                      {job.currentApplicants} / {job.applicantLimit}
                    </span>
                  </div>
                  <Progress value={(job.currentApplicants / job.applicantLimit) * 100} className="h-2" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>Applications opened on May 15, 9:00 AM</span>
                  </div>
                  <Badge variant="outline">{job.experience} experience</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-rose-600 hover:bg-rose-700">Apply Now</Button>
              </CardFooter>
            </Card>

            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-bold">About the Role</h2>
                <p>{job.description}</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-bold">About {job.company}</h2>
                <p>{job.aboutCompany}</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-bold">Responsibilities</h2>
                <ul className="list-disc pl-5 space-y-1">
                  {job.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-bold">Requirements</h2>
                <ul className="list-disc pl-5 space-y-1">
                  {job.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-bold">Benefits</h2>
                <ul className="list-disc pl-5 space-y-1">
                  {job.benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-bold">Application Process</h2>
                <ol className="list-decimal pl-5 space-y-1">
                  {job.applicationProcess.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>

            <Separator />

            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h3 className="font-medium">Ready to apply?</h3>
                <p className="text-sm text-muted-foreground">
                  Applications are reviewed on a first-come, first-served basis
                </p>
              </div>
              <Button className="bg-rose-600 hover:bg-rose-700">Apply Now</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
