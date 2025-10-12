import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { DashboardStats } from "@/components/DashboardStats";
import { LandMap } from "@/components/LandMap";
import { NDVIChart } from "@/components/NDVIChart";
import { AIAnalysisCard } from "@/components/AIAnalysisCard";
import { RecentAlerts } from "@/components/RecentAlerts";

export default function Dashboard() {
  const style = {
    "--sidebar-width": "16rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <div className="flex flex-1 flex-col">
          <header className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-4">
              <SidebarTrigger data-testid="button-sidebar-toggle" />
              <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>
            <ThemeToggle />
          </header>
          
          <main className="flex-1 overflow-auto p-6">
            <div className="space-y-6">
              <DashboardStats />
              
              <div className="grid gap-6 lg:grid-cols-2">
                <LandMap />
                <NDVIChart />
              </div>
              
              <div className="grid gap-6 lg:grid-cols-2">
                <AIAnalysisCard />
                <RecentAlerts />
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
