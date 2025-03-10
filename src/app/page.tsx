"use client";

import { JobForm } from "@/components/JobForm";

export default function Home() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Job Information Survey
        </h1>
        <JobForm />
      </main>
      <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Job Survey. All rights reserved.
      </footer>
    </div>
  );
}
