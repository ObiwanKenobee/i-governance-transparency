import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Wallet, TrendingUp, TrendingDown, PieChart, Activity } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const metrics = [
  {
    title: "Total Revenue (YTD)",
    value: "$120M",
    target: "$150M",
    icon: Wallet,
    progress: 80,
    trend: "+5% from last month",
    status: "positive",
  },
  {
    title: "Total Expenditure",
    value: "$85M",
    target: "$100M",
    icon: TrendingDown,
    progress: 85,
    trend: "-2% from last month",
    status: "negative",
  },
  {
    title: "Budget Surplus",
    value: "+$5M",
    icon: TrendingUp,
    progress: 92,
    trend: "+3% from last quarter",
    status: "positive",
  },
  {
    title: "Fiscal Score",
    value: "85/100",
    icon: Activity,
    progress: 85,
    trend: "Strong Performance",
    status: "positive",
  },
]

export function FinanceMetrics() {
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
                    {metric.target && (
                      <p className="text-xs text-muted-foreground">
                        Target: {metric.target}
                      </p>
                    )}
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