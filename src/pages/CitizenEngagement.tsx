import { DashboardNav } from "@/components/dashboard/DashboardNav"
import { CitizenMetrics } from "@/components/citizen/CitizenMetrics"
import { ServiceRequests } from "@/components/citizen/ServiceRequests"
import { FeedbackAnalysis } from "@/components/citizen/FeedbackAnalysis"
import { EngagementMap } from "@/components/citizen/EngagementMap"

export default function CitizenEngagement() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="p-4 sm:p-6 lg:p-8 space-y-8 animate-fade-up">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Citizen Engagement Dashboard</h1>
            <p className="text-muted-foreground">Monitor and analyze citizen interactions in real-time</p>
          </div>
        </header>
        <CitizenMetrics />
        <div className="grid gap-6 md:grid-cols-2">
          <ServiceRequests />
          <FeedbackAnalysis />
        </div>
        <EngagementMap />
      </div>
    </div>
  )
}