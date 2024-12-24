import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Wallet, Users, Radio, LineChart } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const metrics = [
  {
    title: "Budget Utilization",
    value: "65%",
    icon: Wallet,
    progress: 65,
    trend: "+5% from last month",
    status: "positive",
  },
  {
    title: "Citizen Service Requests",
    value: "1,234",
    icon: Users,
    progress: 80,
    trend: "-2% from last month",
    status: "negative",
  },
  {
    title: "Infrastructure Health",
    value: "92%",
    icon: Radio,
    progress: 92,
    trend: "+3% from last month",
    status: "positive",
  },
  {
    title: "Transparency Score",
    value: "85%",
    icon: LineChart,
    progress: 85,
    trend: "No change",
    status: "neutral",
  },
]

export function DashboardMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <TooltipProvider key={metric.title}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Card className="p-6 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <metric.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      {metric.title}
                    </p>
                    <h3 className="text-2xl font-bold">{metric.value}</h3>
                  </div>
                </div>
                <Progress value={metric.progress} className="mt-4" />
                <p className={`mt-2 text-xs ${
                  metric.status === 'positive' ? 'text-green-600' :
                  metric.status === 'negative' ? 'text-red-600' :
                  'text-gray-600'
                }`}>
                  {metric.trend}
                </p>
              </Card>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to view detailed analytics</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  )
}