import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "Week 1", guest: 400, user: 350 },
  { name: "Week 2", guest: 200, user: 380 },
  { name: "Week 3", guest: 300, user: 200 },
  { name: "Week 4", guest: 450, user: 350 },
];

export function ActivityChart() {
  return (
    <Card className="bg-gradient-card shadow-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-base font-medium">Activities</CardTitle>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded bg-success"></div>
            <span>Guest</span>
          </div>
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded bg-destructive"></div>
            <span>User</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <Bar dataKey="guest" fill="hsl(var(--success))" radius={[2, 2, 0, 0]} />
            <Bar dataKey="user" fill="hsl(var(--destructive))" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}