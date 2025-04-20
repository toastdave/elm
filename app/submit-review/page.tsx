"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CareerInfoForm } from "@/components/career-info-form"
import { CompensationForm } from "@/components/compensation-form"
import { EducationForm } from "@/components/education-form"
import { ExperienceForm } from "@/components/experience-form"
import { ReviewSummary } from "@/components/review-summary"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const steps = [
  { id: "career-info", title: "Career Information" },
  { id: "compensation", title: "Compensation" },
  { id: "education", title: "Education" },
  { id: "experience", title: "Experience" },
  { id: "review", title: "Review" },
]

export default function SubmitReviewPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    careerInfo: {
      jobTitle: "",
      industry: "",
      location: "",
      yearsExperience: "",
    },
    compensation: {
      salaryType: "annual",
      salary: "",
      bonus: "",
      stock: "",
      hourlyRate: "",
    },
    education: {
      level: "",
      formalRequired: false,
      fieldOfStudy: "",
      certifications: [],
    },
    experience: {
      enjoyment: 3,
      difficulty: 3,
      workLifeBalance: 3,
      recommend: true,
      comments: "",
    },
  })

  const updateFormData = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...data,
      },
    }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = async () => {
    // In a real application, you would submit the data to your backend here
    console.log("Submitting review:", formData)

    // Simulate submission
    setTimeout(() => {
      window.location.href = "/thank-you"
    }, 1000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container max-w-4xl py-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Submit Your Career Review</h1>
            <p className="text-muted-foreground mt-2">
              Share your career insights to help others make informed decisions.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                {index > 0 && <Separator className="w-6" />}
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium ${
                    index <= currentStep
                      ? "border-rose-600 bg-rose-600 text-white"
                      : "border-muted-foreground text-muted-foreground"
                  }`}
                >
                  {index < currentStep ? <Check className="h-4 w-4" /> : index + 1}
                </div>
              </div>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{steps[currentStep].title}</CardTitle>
              <CardDescription>
                {currentStep === 0 && "Tell us about your job and industry"}
                {currentStep === 1 && "Share compensation details (all information is anonymous)"}
                {currentStep === 2 && "Tell us about your educational background"}
                {currentStep === 3 && "Share your experience and satisfaction with this career"}
                {currentStep === 4 && "Review your information before submitting"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {currentStep === 0 && (
                <CareerInfoForm data={formData.careerInfo} updateData={(data) => updateFormData("careerInfo", data)} />
              )}
              {currentStep === 1 && (
                <CompensationForm
                  data={formData.compensation}
                  updateData={(data) => updateFormData("compensation", data)}
                />
              )}
              {currentStep === 2 && (
                <EducationForm data={formData.education} updateData={(data) => updateFormData("education", data)} />
              )}
              {currentStep === 3 && (
                <ExperienceForm data={formData.experience} updateData={(data) => updateFormData("experience", data)} />
              )}
              {currentStep === 4 && <ReviewSummary data={formData} />}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              {currentStep < steps.length - 1 ? (
                <Button onClick={handleNext} className="bg-rose-600 hover:bg-rose-700">
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit}>Submit</Button>
              )}
            </CardFooter>
          </Card>
        </div>
        <Footer />
      </main>
    </div>
  )
}
