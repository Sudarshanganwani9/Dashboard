import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { TopProductsCard } from "@/components/dashboard/TopProductsCard";
import { AddProfileCard } from "@/components/dashboard/AddProfileCard";
import { AddProfileModal } from "@/components/dashboard/AddProfileModal";
import { DollarSign, Users, TrendingUp, Activity } from "lucide-react";

export default function Dashboard() {
  const [showAddProfile, setShowAddProfile] = useState(false);

  const metrics = [
    {
      title: "Total Revenu",
      value: "$2,129,430",
      change: "+2.5%",
      changeType: "positive" as const,
      icon: DollarSign,
      color: "success" as const,
    },
    {
      title: "Total Transaction",
      value: "1,520",
      change: "+1.7%",
      changeType: "positive" as const,
      icon: TrendingUp,
      color: "warning" as const,
    },
    {
      title: "Total Likes",
      value: "9,721",
      change: "+1.4%",
      changeType: "positive" as const,
      icon: Activity,
      color: "info" as const,
    },
    {
      title: "Total Users",
      value: "9,721",
      change: "+4.2%",
      changeType: "positive" as const,
      icon: Users,
      color: "primary" as const,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Metrics Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ActivityChart />
          <TopProductsCard />
          <AddProfileCard onAddProfile={() => setShowAddProfile(true)} />
        </div>

        {/* Add Profile Modal */}
        <AddProfileModal 
          open={showAddProfile} 
          onOpenChange={setShowAddProfile}
        />
      </div>
    </DashboardLayout>
  );
}