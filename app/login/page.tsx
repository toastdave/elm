"use client"

import { useState } from "react"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc"
import { FaLinkedin } from "react-icons/fa"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleGoogleLogin = async () => {
    setIsLoading(true)
    // In a real app, this would redirect to Google OAuth
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  const handleLinkedInLogin = async () => {
    setIsLoading(true)
    // In a real app, this would redirect to LinkedIn OAuth
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Welcome to Elm</CardTitle>
            <CardDescription className="text-center">Sign in to access your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs defaultValue="job-seeker" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="job-seeker">Job Seeker</TabsTrigger>
                <TabsTrigger value="employer">Employer</TabsTrigger>
              </TabsList>
              <TabsContent value="job-seeker" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Button
                    className="w-full flex items-center justify-center gap-2"
                    variant="outline"
                    onClick={handleGoogleLogin}
                    disabled={isLoading}
                  >
                    <FcGoogle className="h-5 w-5" />
                    <span>Continue with Google</span>
                  </Button>
                  <Button
                    className="w-full flex items-center justify-center gap-2"
                    variant="outline"
                    onClick={handleLinkedInLogin}
                    disabled={isLoading}
                  >
                    <FaLinkedin className="h-5 w-5 text-[#0077b5]" />
                    <span>Continue with LinkedIn</span>
                  </Button>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  By continuing, you agree to our{" "}
                  <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                    Privacy Policy
                  </Link>
                  .
                </div>
              </TabsContent>
              <TabsContent value="employer" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Button
                    className="w-full flex items-center justify-center gap-2"
                    variant="outline"
                    onClick={handleGoogleLogin}
                    disabled={isLoading}
                  >
                    <FcGoogle className="h-5 w-5" />
                    <span>Continue with Google</span>
                  </Button>
                  <Button
                    className="w-full flex items-center justify-center gap-2"
                    variant="outline"
                    onClick={handleLinkedInLogin}
                    disabled={isLoading}
                  >
                    <FaLinkedin className="h-5 w-5 text-[#0077b5]" />
                    <span>Continue with LinkedIn</span>
                  </Button>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  By continuing, you agree to our{" "}
                  <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                    Privacy Policy
                  </Link>
                  .
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button asChild variant="link" className="w-full">
              <Link href="/">Back to Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
