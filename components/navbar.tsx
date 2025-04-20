"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ElmLogo } from "@/components/elm-logo"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-6 h-16 flex items-center border-b">
      <Link href="/" className="flex items-center gap-2 font-bold text-xl text-rose-600">
        <ElmLogo size={28} />
        <span>Elm</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="ml-auto hidden md:flex items-center gap-4">
        <nav className="flex items-center gap-4 mr-4">
          <Link href="/careers" className="text-sm font-medium hover:text-rose-600 transition-colors">
            Career Reviews
          </Link>
          <Link href="/jobs" className="text-sm font-medium hover:text-rose-600 transition-colors">
            Job Board
          </Link>
          <Link href="/submit-review" className="text-sm font-medium hover:text-rose-600 transition-colors">
            Share Experience
          </Link>
          <Link href="/employers" className="text-sm font-medium hover:text-rose-600 transition-colors">
            Post a Job
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-rose-600 transition-colors">
            About
          </Link>
        </nav>

        <Button asChild size="sm" variant="outline">
          <Link href="/login">Sign In</Link>
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className="ml-auto md:hidden flex items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 mt-6">
              <Link href="/careers" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Career Reviews
              </Link>
              <Link href="/jobs" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Job Board
              </Link>
              <Link href="/submit-review" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Share Experience
              </Link>
              <Link href="/employers" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Post a Job
              </Link>
              <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Button asChild className="mt-4">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  Sign In
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
