export function ReviewSummary({ data }) {
  const { careerInfo, compensation, education, experience } = data

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h3 className="text-lg font-medium">Career Information</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="font-medium">Job Title:</div>
          <div>{careerInfo.jobTitle || "Not provided"}</div>

          <div className="font-medium">Industry:</div>
          <div>{careerInfo.industry || "Not provided"}</div>

          <div className="font-medium">Location:</div>
          <div>{careerInfo.location || "Not provided"}</div>

          <div className="font-medium">Years of Experience:</div>
          <div>{careerInfo.yearsExperience || "Not provided"}</div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-medium">Compensation</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {compensation.salaryType === "annual" ? (
            <>
              <div className="font-medium">Annual Salary:</div>
              <div>
                {compensation.currency || "USD"} {compensation.salary || "Not provided"}
              </div>

              <div className="font-medium">Annual Bonus:</div>
              <div>
                {compensation.currency || "USD"} {compensation.bonus || "Not provided"}
              </div>

              <div className="font-medium">Annual Stock/Equity:</div>
              <div>
                {compensation.currency || "USD"} {compensation.stock || "Not provided"}
              </div>
            </>
          ) : (
            <>
              <div className="font-medium">Hourly Rate:</div>
              <div>
                {compensation.currency || "USD"} {compensation.hourlyRate || "Not provided"}
              </div>
            </>
          )}

          <div className="font-medium">Benefits:</div>
          <div>{compensation.benefits?.length ? compensation.benefits.join(", ") : "None specified"}</div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-medium">Education</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="font-medium">Highest Education Level:</div>
          <div>{education.level || "Not provided"}</div>

          <div className="font-medium">Field of Study:</div>
          <div>{education.fieldOfStudy || "Not provided"}</div>

          <div className="font-medium">Formal Education Required:</div>
          <div>{education.formalRequired ? "Yes" : "No"}</div>

          <div className="font-medium">Certifications/Licenses:</div>
          <div>{education.certifications?.length ? education.certifications.join(", ") : "None specified"}</div>

          <div className="font-medium">Education Advice:</div>
          <div>{education.educationAdvice || "Not provided"}</div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-medium">Experience</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="font-medium">Job Enjoyment:</div>
          <div>{experience.enjoyment}/5</div>

          <div className="font-medium">Job Difficulty:</div>
          <div>{experience.difficulty}/5</div>

          <div className="font-medium">Work-Life Balance:</div>
          <div>{experience.workLifeBalance}/5</div>

          <div className="font-medium">Would Recommend:</div>
          <div>{experience.recommend ? "Yes" : "No"}</div>

          <div className="font-medium">Additional Comments:</div>
          <div className="col-span-2 mt-1">{experience.comments || "No additional comments"}</div>
        </div>
      </div>
    </div>
  )
}
