"use client"

import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export function ExperienceForm({ data, updateData }) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div>
          <Label>Job Enjoyment</Label>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-muted-foreground">Not Enjoyable</span>
            <span className="text-sm text-muted-foreground">Very Enjoyable</span>
          </div>
          <Slider
            value={[data.enjoyment || 3]}
            min={1}
            max={5}
            step={1}
            onValueChange={(value) => updateData({ enjoyment: value[0] })}
            className="mt-2"
          />
          <div className="flex items-center justify-between mt-1">
            <span className="text-xs">1</span>
            <span className="text-xs">2</span>
            <span className="text-xs">3</span>
            <span className="text-xs">4</span>
            <span className="text-xs">5</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label>Job Difficulty</Label>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-muted-foreground">Not Challenging</span>
            <span className="text-sm text-muted-foreground">Very Challenging</span>
          </div>
          <Slider
            value={[data.difficulty || 3]}
            min={1}
            max={5}
            step={1}
            onValueChange={(value) => updateData({ difficulty: value[0] })}
            className="mt-2"
          />
          <div className="flex items-center justify-between mt-1">
            <span className="text-xs">1</span>
            <span className="text-xs">2</span>
            <span className="text-xs">3</span>
            <span className="text-xs">4</span>
            <span className="text-xs">5</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label>Work-Life Balance</Label>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-muted-foreground">Poor Balance</span>
            <span className="text-sm text-muted-foreground">Excellent Balance</span>
          </div>
          <Slider
            value={[data.workLifeBalance || 3]}
            min={1}
            max={5}
            step={1}
            onValueChange={(value) => updateData({ workLifeBalance: value[0] })}
            className="mt-2"
          />
          <div className="flex items-center justify-between mt-1">
            <span className="text-xs">1</span>
            <span className="text-xs">2</span>
            <span className="text-xs">3</span>
            <span className="text-xs">4</span>
            <span className="text-xs">5</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Would you recommend this career to others?</Label>
        <RadioGroup
          value={data.recommend ? "yes" : "no"}
          onValueChange={(value) => updateData({ recommend: value === "yes" })}
          className="flex flex-col space-y-1"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="recommend-yes" />
            <Label htmlFor="recommend-yes" className="font-normal">
              Yes, I would recommend this career
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="recommend-no" />
            <Label htmlFor="recommend-no" className="font-normal">
              No, I would not recommend this career
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="comments">Additional Comments</Label>
        <Textarea
          id="comments"
          placeholder="Share any additional insights about your career experience"
          value={data.comments}
          onChange={(e) => updateData({ comments: e.target.value })}
          className="min-h-[150px]"
        />
      </div>
    </div>
  )
}
