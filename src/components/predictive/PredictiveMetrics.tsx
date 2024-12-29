import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, AlertCircle, Users } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const metrics = [
  {
    title: "Revenue Forecast",
    value: "$200M",
    trend: "+15% from last quarter",
    status: "positive",
    icon: TrendingUp,
    description: "Projected tax revenue for Q4 2024",
  },
  {
    title: "Expenditure Trends",
    value: "+15%",
    trend: "Healthcare spending increase",
    status: "warning",
    icon: TrendingDown,
    description: "Expected healthcare spending increase next quarter",
  },
  {
    title: "Infrastructure Risk",
    value: "5%",
    trend: "Critical maintenance needed",
    status: "negative",
    icon: AlertCircle,
    description: "Likelihood of major infrastructure failures in Region A",
  },
  {
    title: "Service Demands",
    value: "+10%",
    trend: "Permit applications",
    status: "positive",
    icon: Users,
    description: "Projected increase in permit applications for Q1 2025",
  },
]

export function PredictiveMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <TooltipProvider key={metric.title}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Card className="p-6 transition-all hover:shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className={`rounded-full p-3 ${
                    metric.status === 'positive' ? 'bg-green-100 text-green-600' :
                    metric.status === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-red-100 text-red-600'
                  }`}>
                    <metric.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      {metric.title}
                    </p>
                    <h3 className="text-2xl font-bold">{metric.value}</h3>
                    <p className={`text-sm ${
                      metric.status === 'positive' ? 'text-green-600' :
                      metric.status === 'warning' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {metric.trend}
                    </p>
                  </div>
                </div>
              </Card>
            </TooltipTrigger>
            <TooltipContent>
              <p>{metric.description}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  )
}