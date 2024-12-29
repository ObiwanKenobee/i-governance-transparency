import { Card } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const data = [
  { category: "Healthcare", spent: 30, allocated: 35 },
  { category: "Education", spent: 25, allocated: 30 },
  { category: "Infrastructure", spent: 20, allocated: 25 },
  { category: "Defense", spent: 15, allocated: 20 },
  { category: "Social Welfare", spent: 10, allocated: 15 },
]

const chartConfig = {
  spent: { color: "#2563eb" },
  allocated: { color: "#e2e8f0" },
}

export function FinanceCharts() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Expenditure by Category</h3>
          <p className="text-sm text-muted-foreground">
            Budget allocation vs actual spending
          </p>
        </div>
        <div className="h-[300px]">
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <ChartTooltip />
                <Bar dataKey="allocated" fill={chartConfig.allocated.color} name="Allocated" />
                <Bar dataKey="spent" fill={chartConfig.spent.color} name="Spent" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>
    </Card>
  )
}