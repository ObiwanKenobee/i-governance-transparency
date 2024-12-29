import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function EngagementMap() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Community Engagement Map</h2>
        <div className="flex space-x-2">
          <Badge variant="default">High Engagement</Badge>
          <Badge variant="secondary">Medium Engagement</Badge>
          <Badge variant="outline">Low Engagement</Badge>
        </div>
      </div>
      <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Interactive map visualization coming soon</p>
      </div>
    </Card>
  )
}