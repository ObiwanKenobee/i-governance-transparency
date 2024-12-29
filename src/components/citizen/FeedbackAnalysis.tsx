import { Card } from "@/components/ui/card"
import { ThumbsUp, ThumbsDown, Minus } from "lucide-react"

const sentiments = [
  {
    type: "Positive",
    percentage: 75,
    count: 1234,
    icon: ThumbsUp,
    color: "text-green-500"
  },
  {
    type: "Neutral",
    percentage: 15,
    count: 421,
    icon: Minus,
    color: "text-gray-500"
  },
  {
    type: "Negative",
    percentage: 10,
    count: 198,
    icon: ThumbsDown,
    color: "text-red-500"
  }
]

export function FeedbackAnalysis() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-6">Feedback Sentiment Analysis</h2>
      <div className="space-y-6">
        {sentiments.map((sentiment) => (
          <div key={sentiment.type} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <sentiment.icon className={`h-5 w-5 ${sentiment.color}`} />
              <span className="font-medium">{sentiment.type}</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-48 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${
                    sentiment.type === 'Positive' ? 'bg-green-500' :
                    sentiment.type === 'Neutral' ? 'bg-gray-500' :
                    'bg-red-500'
                  }`}
                  style={{ width: `${sentiment.percentage}%` }}
                />
              </div>
              <span className="text-sm text-muted-foreground w-16">
                {sentiment.count} ({sentiment.percentage}%)
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}