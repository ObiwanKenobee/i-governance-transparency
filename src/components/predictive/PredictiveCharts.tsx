import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const revenueData = [
  { month: "Jan", actual: 4000, predicted: 4400 },
  { month: "Feb", actual: 3000, predicted: 3200 },
  { month: "Mar", actual: 2000, predicted: 2400 },
  { month: "Apr", actual: 2780, predicted: 2900 },
  { month: "May", actual: 1890, predicted: 2100 },
  { month: "Jun", actual: 2390, predicted: 2500 },
]

export function PredictiveCharts() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Revenue Predictions</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="actual" 
              stroke="#2c7a7b" 
              name="Actual Revenue"
            />
            <Line 
              type="monotone" 
              dataKey="predicted" 
              stroke="#63b3ed" 
              strokeDasharray="5 5" 
              name="Predicted Revenue"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}