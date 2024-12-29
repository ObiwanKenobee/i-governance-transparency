import { DashboardNav } from "@/components/dashboard/DashboardNav"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { FinanceMetrics } from "@/components/finance/FinanceMetrics"
import { FinanceCharts } from "@/components/finance/FinanceCharts"
import { RevenueBreakdown } from "@/components/finance/RevenueBreakdown"

export default function PublicFinance() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardNav />
      <main className="flex-1 space-y-6 p-6 md:p-8">
        <DashboardHeader />
        <div className="space-y-8">
          <FinanceMetrics />
          <div className="grid gap-6 md:grid-cols-2">
            <FinanceCharts />
            <RevenueBreakdown />
          </div>
        </div>
      </main>
    </div>
  )
}