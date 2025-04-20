"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function EducationForm({ data, updateData }) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="level">Highest Education Level</Label>
        <Select value={data.level} onValueChange={(value) => updateData({ level: value })}>
          <SelectTrigger id="level">
            <SelectValue placeholder="Select education level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high-school">High School</SelectItem>
            <SelectItem value="associate">Associate's Degree</SelectItem>
            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
            <SelectItem value="master">Master's Degree</SelectItem>
            <SelectItem value="doctorate">Doctorate/PhD</SelectItem>
            <SelectItem value="trade-school">Trade School</SelectItem>
            <SelectItem value="self-taught">Self-taught</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="fieldOfStudy">Field of Study (if applicable)</Label>
        <Input
          id="fieldOfStudy"
          placeholder="e.g. Computer Science, Nursing, Business"
          value={data.fieldOfStudy}
          onChange={(e) => updateData({ fieldOfStudy: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label>Is formal education required for your role?</Label>
        <RadioGroup
          value={data.formalRequired ? "yes" : "no"}
          onValueChange={(value) => updateData({ formalRequired: value === "yes" })}
          className="flex flex-col space-y-1"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="required-yes" />
            <Label htmlFor="required-yes" className="font-normal">
              Yes, formal education is required
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="required-no" />
            <Label htmlFor="required-no" className="font-normal">
              No, alternative paths are viable
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="certifications">Certifications or Licenses (if applicable)</Label>
        <Textarea
          id="certifications"
          placeholder="List any relevant certifications or licenses, one per line"
          value={(data.certifications || []).join("\n")}
          onChange={(e) => updateData({ certifications: e.target.value.split("\n").filter(Boolean) })}
          className="min-h-[100px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="educationAdvice">Education Advice for Newcomers</Label>
        <Textarea
          id="educationAdvice"
          placeholder="What advice would you give to someone starting in this field regarding education?"
          value={data.educationAdvice}
          onChange={(e) => updateData({ educationAdvice: e.target.value })}
          className="min-h-[100px]"
        />
      </div>
    </div>
  )
}
