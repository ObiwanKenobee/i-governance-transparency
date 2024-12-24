import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Wallet, Users, Radio, LineChart } from "lucide-react"

const metrics = [
  {
    title: "Budget Utilization",
    value: "65%",
    icon: Wallet,
    progress: 65,
  },
  {
    title: "Citizen Service Requests",
    value: "1,234",
    icon: Users,
    progress: 80,
  },
  {
    title: "Infrastructure Health",
    value: "92%",
    icon: Radio,
    progress: 92,
  },
  {
    title: "Transparency Score",
    value: "85%",
    icon: LineChart,
    progress: 85,
  },
]

export function DashboardMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title} className="p-6">
          <div className="flex items-center space-x-4">
            <metric.icon className="h-8 w-8 text-primary" />
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </p>
              <h3 className="text-2xl font-bold">{metric.value}</h3>
            </div>
          </div>
          <Progress value={metric.progress} className="mt-4" />
        </Card>
      ))}
    </div>
  )
}