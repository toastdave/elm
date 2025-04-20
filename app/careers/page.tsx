"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"

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
  {
    id: 7,
    jobTitle: "Data Scientist",
    industry: "Technology",
    salary: "$110,000",
    enjoyment: 4,
    difficulty: 5,
    recommend: true,
    education: "Master's Degree",
    formalRequired: true,
    reviewCount: 45,
  },
  {
    id: 8,
    jobTitle: "Graphic Designer",
    industry: "Creative",
    salary: "$65,000",
    enjoyment: 5,
    difficulty: 3,
    recommend: true,
    education: "Bachelor's Degree",
    formalRequired: false,
    reviewCount: 62,
  },
  {
    id: 9,
    jobTitle: "Accountant",
    industry: "Finance",
    salary: "$70,000",
    enjoyment: 3,
    difficulty: 3,
    recommend: true,
    education: "Bachelor's Degree",
    formalRequired: true,
    reviewCount: 89,
  },
  {
    id: 10,
    jobTitle: "Human Resources Manager",
    industry: "Business",
    salary: "$85,000",
    enjoyment: 4,
    difficulty: 3,
    recommend: true,
    education: "Bachelor's Degree",
    formalRequired: false,
    reviewCount: 51,
  },
  {
    id: 11,
    jobTitle: "Physical Therapist",
    industry: "Healthcare",
    salary: "$88,000",
    enjoyment: 5,
    difficulty: 4,
    recommend: true,
    education: "Doctorate",
    formalRequired: true,
    reviewCount: 37,
  },
  {
    id: 12,
    jobTitle: "Civil Engineer",
    industry: "Engineering",
    salary: "$87,000",
    enjoyment: 4,
    difficulty: 4,
    recommend: true,
    education: "Bachelor's Degree",
    formalRequired: true,
    reviewCount: 42,
  },
]

export default function CareersPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9
  const totalPages = Math.ceil(careerReviews.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentReviews = careerReviews.slice(startIndex, endIndex)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Career Reviews</h1>
              <p className="text-muted-foreground mt-2">
                Explore honest insights from professionals across various industries
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
                  <h4 className="text-sm font-medium">Industry</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="ind-tech" />
                      <Label htmlFor="ind-tech" className="text-sm font-normal">
                        Technology
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="ind-healthcare" />
                      <Label htmlFor="ind-healthcare" className="text-sm font-normal">
                        Healthcare
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="ind-finance" />
                      <Label htmlFor="ind-finance" className="text-sm font-normal">
                        Finance
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="ind-education" />
                      <Label htmlFor="ind-education" className="text-sm font-normal">
                        Education
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="ind-other" />
                      <Label htmlFor="ind-other" className="text-sm font-normal">
                        Other
                      </Label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Education Required</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="edu-high-school" />
                      <Label htmlFor="edu-high-school" className="text-sm font-normal">
                        High School
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="edu-associate" />
                      <Label htmlFor="edu-associate" className="text-sm font-normal">
                        Associate's Degree
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="edu-bachelor" />
                      <Label htmlFor="edu-bachelor" className="text-sm font-normal">
                        Bachelor's Degree
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="edu-master" />
                      <Label htmlFor="edu-master" className="text-sm font-normal">
                        Master's Degree
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="edu-doctorate" />
                      <Label htmlFor="edu-doctorate" className="text-sm font-normal">
                        Doctorate
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
                  <h4 className="text-sm font-medium">Job Satisfaction</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="enjoy-high" />
                      <Label htmlFor="enjoy-high" className="text-sm font-normal">
                        High Enjoyment (4-5)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="enjoy-medium" />
                      <Label htmlFor="enjoy-medium" className="text-sm font-normal">
                        Medium Enjoyment (3)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="enjoy-low" />
                      <Label htmlFor="enjoy-low" className="text-sm font-normal">
                        Low Enjoyment (1-2)
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
                  <Input placeholder="Search by job title or keyword" className="pl-8" />
                </div>
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
                {currentReviews.map((career) => (
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

              <div className="flex justify-center mt-8">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              </div>

              <div className="flex justify-center mt-8">
                <Button asChild className="bg-rose-600 hover:bg-rose-700">
                  <Link href="/submit-review">Share Your Career Experience</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
