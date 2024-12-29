import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const risks = [
  {
    name: "Budget Deficit Risk",
    score: 80,
    status: "critical",
    description: "High risk of exceeding planned deficit",
  },
  {
    name: "Infrastructure Failure",
    score: 45,
    status: "moderate",
    description: "Moderate risk in transportation sector",
  },
  {
    name: "Revenue Shortfall",
    score: 30,
    status: "low",
    description: "Low risk of missing revenue targets",
  },
  {
    name: "Service Delivery",
    score: 60,
    status: "high",
    description: "High risk of service delays",
  },
]

export function RiskAnalysis() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Risk Assessment</h3>
      <div className="space-y-6">
        {risks.map((risk) => (
          <div key={risk.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{risk.name}</span>
              <span className={`text-sm px-2 py-1 rounded-full ${
                risk.status === 'critical' ? 'bg-red-100 text-red-600' :
                risk.status === 'high' ? 'bg-orange-100 text-orange-600' :
                risk.status === 'moderate' ? 'bg-yellow-100 text-yellow-600' :
                'bg-green-100 text-green-600'
              }`}>
                {risk.score}%
              </span>
            </div>
            <Progress value={risk.score} className={
              risk.status === 'critical' ? 'text-red-600' :
              risk.status === 'high' ? 'text-orange-600' :
              risk.status === 'moderate' ? 'text-yellow-600' :
              'text-green-600'
            } />
            <p className="text-sm text-muted-foreground">{risk.description}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}