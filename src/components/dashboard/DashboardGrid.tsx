import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, LineChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const financeData = [
  { month: 'Jan', revenue: 4000, expenditure: 2400 },
  { month: 'Feb', revenue: 3000, expenditure: 1398 },
  { month: 'Mar', revenue: 2000, expenditure: 9800 },
  { month: 'Apr', revenue: 2780, expenditure: 3908 },
  { month: 'May', revenue: 1890, expenditure: 4800 },
  { month: 'Jun', revenue: 2390, expenditure: 3800 },
]

const citizenData = [
  { month: 'Jan', requests: 65 },
  { month: 'Feb', requests: 59 },
  { month: 'Mar', requests: 80 },
  { month: 'Apr', requests: 81 },
  { month: 'May', requests: 56 },
  { month: 'Jun', requests: 55 },
]

export function DashboardGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Public Finance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={financeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#1a365d" />
              <Bar dataKey="expenditure" fill="#2c7a7b" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Citizen Service Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={citizenData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="requests" stroke="#1a365d" fill="#63b3ed" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}