"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CompensationForm({ data, updateData }) {
  const [salaryType, setSalaryType] = useState(data.salaryType || "annual")

  const handleSalaryTypeChange = (value) => {
    setSalaryType(value)
    updateData({ salaryType: value })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Compensation Type</Label>
        <RadioGroup value={salaryType} onValueChange={handleSalaryTypeChange} className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="annual" id="annual" />
            <Label htmlFor="annual" className="font-normal">
              Annual Salary
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="hourly" id="hourly" />
            <Label htmlFor="hourly" className="font-normal">
              Hourly Rate
            </Label>
          </div>
        </RadioGroup>
      </div>

      {salaryType === "annual" ? (
        <>
          <div className="space-y-2">
            <Label htmlFor="salary">Annual Base Salary</Label>
            <div className="flex items-center">
              <Select value={data.currency || "USD"} onValueChange={(value) => updateData({ currency: value })}>
                <SelectTrigger className="w-[80px] rounded-r-none">
                  <SelectValue placeholder="USD" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                  <SelectItem value="CAD">CAD</SelectItem>
                  <SelectItem value="AUD">AUD</SelectItem>
                  <SelectItem value="JPY">JPY</SelectItem>
                </SelectContent>
              </Select>
              <Input
                id="salary"
                type="number"
                placeholder="e.g. 75000"
                className="rounded-l-none"
                value={data.salary}
                onChange={(e) => updateData({ salary: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bonus">Annual Bonus (if applicable)</Label>
            <Input
              id="bonus"
              type="number"
              placeholder="e.g. 10000"
              value={data.bonus}
              onChange={(e) => updateData({ bonus: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="stock">Annual Stock/Equity Value (if applicable)</Label>
            <Input
              id="stock"
              type="number"
              placeholder="e.g. 15000"
              value={data.stock}
              onChange={(e) => updateData({ stock: e.target.value })}
            />
          </div>
        </>
      ) : (
        <div className="space-y-2">
          <Label htmlFor="hourlyRate">Hourly Rate</Label>
          <div className="flex items-center">
            <Select value={data.currency || "USD"} onValueChange={(value) => updateData({ currency: value })}>
              <SelectTrigger className="w-[80px] rounded-r-none">
                <SelectValue placeholder="USD" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD</SelectItem>
                <SelectItem value="EUR">EUR</SelectItem>
                <SelectItem value="GBP">GBP</SelectItem>
                <SelectItem value="CAD">CAD</SelectItem>
                <SelectItem value="AUD">AUD</SelectItem>
                <SelectItem value="JPY">JPY</SelectItem>
              </SelectContent>
            </Select>
            <Input
              id="hourlyRate"
              type="number"
              placeholder="e.g. 25"
              className="rounded-l-none"
              value={data.hourlyRate}
              onChange={(e) => updateData({ hourlyRate: e.target.value })}
            />
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="benefits">Benefits (select all that apply)</Label>
        <div className="grid grid-cols-2 gap-2">
          {[
            "Health Insurance",
            "Dental Insurance",
            "Vision Insurance",
            "401(k)/Retirement",
            "Paid Time Off",
            "Remote Work",
            "Flexible Hours",
            "Professional Development",
          ].map((benefit) => (
            <div key={benefit} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={benefit.replace(/\s+/g, "-").toLowerCase()}
                className="rounded border-gray-300 text-primary focus:ring-primary"
                onChange={(e) => {
                  const currentBenefits = data.benefits || []
                  if (e.target.checked) {
                    updateData({ benefits: [...currentBenefits, benefit] })
                  } else {
                    updateData({ benefits: currentBenefits.filter((b) => b !== benefit) })
                  }
                }}
                checked={(data.benefits || []).includes(benefit)}
              />
              <Label htmlFor={benefit.replace(/\s+/g, "-").toLowerCase()} className="font-normal">
                {benefit}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
