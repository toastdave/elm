import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Define the form schema with validation
const formSchema = z.object({
  jobTitle: z.string().min(2, {
    message: "Job title must be at least 2 characters.",
  }),
  totalCompensation: z.string().refine(
    (val) => {
      const num = parseFloat(val.replace(/[^0-9.]/g, ""));
      return !isNaN(num) && num > 0;
    },
    {
      message: "Please enter a valid compensation amount.",
    }
  ),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  companySize: z.string({
    required_error: "Please select a company size.",
  }),
  yearsOfExperience: z.string().refine(
    (val) => {
      const num = parseFloat(val);
      return !isNaN(num) && num >= 0;
    },
    {
      message: "Please enter a valid number of years.",
    }
  ),
  educationLevel: z.string({
    required_error: "Please select your education level.",
  }),
  doYouLikeIt: z.enum(["yes", "no", "neutral"], {
    required_error: "Please select an option.",
  }),
  wouldRecommend: z.enum(["yes", "no", "maybe"], {
    required_error: "Please select an option.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function JobForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitle: "",
      totalCompensation: "",
      company: "",
      companySize: "",
      yearsOfExperience: "",
      educationLevel: "",
      doYouLikeIt: undefined,
      wouldRecommend: undefined,
    },
  });

  // Handle form submission
  function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
      
      // Optional: reset form
      form.reset();
    }, 1000);
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Job Information Form</h2>
      
      {isSuccess && (
        <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-md">
          Form submitted successfully!
        </div>
      )}
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input placeholder="Software Engineer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="totalCompensation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total Compensation</FormLabel>
                <FormControl>
                  <Input placeholder="$100,000" {...field} />
                </FormControl>
                <FormDescription>
                  Include salary, bonuses, and other benefits
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="Company name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="companySize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Size</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-50">11-50 employees</SelectItem>
                    <SelectItem value="51-200">51-200 employees</SelectItem>
                    <SelectItem value="201-500">201-500 employees</SelectItem>
                    <SelectItem value="501-1000">501-1000 employees</SelectItem>
                    <SelectItem value="1001-5000">1001-5000 employees</SelectItem>
                    <SelectItem value="5001+">5001+ employees</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="yearsOfExperience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Years of Experience</FormLabel>
                <FormControl>
                  <Input type="number" min="0" step="0.5" placeholder="3.5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="educationLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Education Level</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select education level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="high-school">High School</SelectItem>
                    <SelectItem value="associate">Associate&apos;s Degree</SelectItem>
                    <SelectItem value="bachelor">Bachelor&apos;s Degree</SelectItem>
                    <SelectItem value="master">Master&apos;s Degree</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="doYouLikeIt"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Do you like your job?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal">Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="neutral" />
                      </FormControl>
                      <FormLabel className="font-normal">Neutral</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="wouldRecommend"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Would you recommend this job to others?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal">Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="maybe" />
                      </FormControl>
                      <FormLabel className="font-normal">Maybe</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
} 