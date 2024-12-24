import { Card } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { DashboardMetrics } from "@/components/dashboard/DashboardMetrics"
import { DashboardGrid } from "@/components/dashboard/DashboardGrid"
import { DashboardNav } from "@/components/dashboard/DashboardNav"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="p-4 sm:p-6 lg:p-8 space-y-8">
        <DashboardHeader />
        <DashboardMetrics />
        <DashboardGrid />
      </div>
    </div>
  )
}