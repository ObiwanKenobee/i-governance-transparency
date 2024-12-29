import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const requests = [
  {
    id: "REQ-001",
    type: "Permit Application",
    status: "pending",
    date: "2024-02-20",
    priority: "high"
  },
  {
    id: "REQ-002",
    type: "Tax Inquiry",
    status: "resolved",
    date: "2024-02-19",
    priority: "medium"
  },
  {
    id: "REQ-003",
    type: "Infrastructure Report",
    status: "overdue",
    date: "2024-02-18",
    priority: "high"
  },
  {
    id: "REQ-004",
    type: "License Renewal",
    status: "pending",
    date: "2024-02-20",
    priority: "low"
  }
]

export function ServiceRequests() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Service Requests</h2>
        <Badge>234 Active</Badge>
      </div>
      <div className="relative overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((request) => (
              <TableRow key={request.id}>
                <TableCell className="font-medium">{request.id}</TableCell>
                <TableCell>{request.type}</TableCell>
                <TableCell>
                  <Badge variant={
                    request.status === 'resolved' ? 'default' :
                    request.status === 'pending' ? 'secondary' :
                    'destructive'
                  }>
                    {request.status}
                  </Badge>
                </TableCell>
                <TableCell>{request.date}</TableCell>
                <TableCell>
                  <Badge variant={
                    request.priority === 'high' ? 'destructive' :
                    request.priority === 'medium' ? 'secondary' :
                    'default'
                  }>
                    {request.priority}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}