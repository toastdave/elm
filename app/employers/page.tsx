import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function EmployersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Post an Early Career Job</h1>
              <p className="text-muted-foreground mt-2">Reach qualified candidates with 0-5 years of experience</p>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Why post on Elm?</CardTitle>
                <CardDescription>Our early career job board is different</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-rose-100 rounded-full p-1">
                    <Check className="h-4 w-4 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Transparent pay ranges</h3>
                    <p className="text-sm text-muted-foreground">All job postings require clear salary information</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-rose-100 rounded-full p-1">
                    <Check className="h-4 w-4 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Timed openings</h3>
                    <p className="text-sm text-muted-foreground">
                      Set specific opening times to give all candidates a fair chance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-rose-100 rounded-full p-1">
                    <Check className="h-4 w-4 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Limited application slots</h3>
                    <p className="text-sm text-muted-foreground">
                      Set a maximum number of applications to ensure quality reviews
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-rose-100 rounded-full p-1">
                    <Check className="h-4 w-4 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Early career focus</h3>
                    <p className="text-sm text-muted-foreground">Reach candidates with 0-5 years of experience</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
                <CardDescription>Simple, transparent pricing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl font-bold">$199</h3>
                    <span className="text-sm text-muted-foreground">per job posting</span>
                  </div>
                  <p className="text-sm text-muted-foreground">30-day listing with all features included</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-rose-600" />
                    Featured in our weekly newsletter
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-rose-600" />
                    Highlighted on our social media
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-rose-600" />
                    Access to applicant management tools
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-rose-600" />
                    Detailed analytics and insights
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-rose-600 hover:bg-rose-700">Get Started</Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Job Posting Form</CardTitle>
              <CardDescription>Fill out the details for your job posting</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="job-title">Job Title</Label>
                <Input id="job-title" placeholder="e.g. Junior Software Developer" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="e.g. TechStart Inc." />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="e.g. Remote, New York, NY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience Required</Label>
                  <Select>
                    <SelectTrigger id="experience">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="salary-min">Salary Range (Min)</Label>
                  <Input id="salary-min" type="number" placeholder="e.g. 50000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary-max">Salary Range (Max)</Label>
                  <Input id="salary-max" type="number" placeholder="e.g. 70000" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="opening-time">Application Opening Time</Label>
                  <Input id="opening-time" type="datetime-local" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="applicant-limit">Applicant Limit</Label>
                  <Input id="applicant-limit" type="number" placeholder="e.g. 50" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="description">Job Description</Label>
                  <span className="text-xs text-muted-foreground" id="description-count">
                    0/2000 characters
                  </span>
                </div>
                <Textarea
                  id="description"
                  placeholder="Describe the role, responsibilities, and requirements"
                  className="min-h-[150px]"
                  maxLength={2000}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Required Skills (max 5)</Label>
                  <span className="text-xs text-muted-foreground">0/5 skills added</span>
                </div>
                <div className="flex flex-wrap gap-2" id="skills-container">
                  {/* Skills will be added here dynamically */}
                </div>
                <div className="flex gap-2">
                  <Input id="skill-input" placeholder="Add a required skill" className="flex-1" />
                  <Button type="button" variant="secondary" id="add-skill-btn">
                    Add
                  </Button>
                </div>
                <div className="text-xs text-muted-foreground">
                  Examples: React, JavaScript, Project Management, Communication, Data Analysis
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save as Draft</Button>
              <Button className="bg-rose-600 hover:bg-rose-700">Preview & Submit</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
