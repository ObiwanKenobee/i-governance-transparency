import { Card } from "@/components/ui/card"
import { Users, MessageSquare, Vote, Clock } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const metrics = [
  {
    title: "Active Users",
    value: "12,453",
    icon: Users,
    change: "+15% from last month",
    status: "positive"
  },
  {
    title: "Service Requests",
    value: "843",
    icon: MessageSquare,
    change: "234 pending, 609 resolved",
    status: "neutral"
  },
  {
    title: "Poll Participation",
    value: "76%",
    icon: Vote,
    change: "+5% from last poll",
    status: "positive"
  },
  {
    title: "Response Time",
    value: "4.2h",
    icon: Clock,
    change: "-30min from last month",
    status: "positive"
  }
]

export function CitizenMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title} className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-primary/10 rounded-full">
              <metric.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
              <h3 className="text-2xl font-bold">{metric.value}</h3>
            </div>
          </div>
          <Progress value={75} className="mt-4" />
          <p className={`mt-2 text-sm ${
            metric.status === 'positive' ? 'text-green-600' :
            metric.status === 'negative' ? 'text-red-600' :
            'text-gray-600'
          }`}>
            {metric.change}
          </p>
        </Card>
      ))}
    </div>
  )
}