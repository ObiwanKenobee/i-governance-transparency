import { DashboardNav } from "@/components/dashboard/DashboardNav"
import { PredictiveMetrics } from "@/components/predictive/PredictiveMetrics"
import { PredictiveCharts } from "@/components/predictive/PredictiveCharts"
import { RiskAnalysis } from "@/components/predictive/RiskAnalysis"

export default function PredictiveAnalytics() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      <main className="container mx-auto p-4 space-y-6 animate-fade-up">
        <h1 className="text-3xl font-bold">Predictive Analytics Dashboard</h1>
        <PredictiveMetrics />
        <div className="grid gap-6 md:grid-cols-2">
          <PredictiveCharts />
          <RiskAnalysis />
        </div>
      </main>
    </div>
  )
}