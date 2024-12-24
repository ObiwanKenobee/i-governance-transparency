import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { LayoutDashboard, Wallet, LineChart, Users, Radio, Settings, HelpCircle } from "lucide-react"
import { Link } from "react-router-dom"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Wallet, label: "Public Finance", href: "/dashboard/finance" },
  { icon: LineChart, label: "Predictive Analytics", href: "/dashboard/analytics" },
  { icon: Users, label: "Citizen Engagement", href: "/dashboard/engagement" },
  { icon: Radio, label: "Infrastructure", href: "/dashboard/infrastructure" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  { icon: HelpCircle, label: "Help & Support", href: "/dashboard/help" },
]

export function DashboardNav() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex h-16 items-center px-4">
        <Link to="/" className="flex items-center font-semibold">
          <span className="text-xl">i-GOFP</span>
          <span className="text-xs ml-2 text-muted-foreground">Powered by DOGE</span>
        </Link>
        <NavigationMenu className="mx-6 hidden md:block">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link 
                  to={item.href} 
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <button className="md:hidden ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  )
}