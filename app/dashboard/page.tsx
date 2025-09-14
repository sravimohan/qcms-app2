import { MainLayout } from "../../components/MainLayout";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Monitor your application metrics and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold">Total Forms</h3>
            <p className="text-2xl font-bold text-primary mt-2">24</p>
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold">Active Users</h3>
            <p className="text-2xl font-bold text-primary mt-2">1,247</p>
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold">Responses</h3>
            <p className="text-2xl font-bold text-primary mt-2">8,394</p>
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold">Completion Rate</h3>
            <p className="text-2xl font-bold text-primary mt-2">87%</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2">
              <span className="text-foreground">
                New form "Customer Feedback" created
              </span>
              <span className="text-muted-foreground text-sm">2 hours ago</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-foreground">
                User "john.doe@company.com" completed survey
              </span>
              <span className="text-muted-foreground text-sm">4 hours ago</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-foreground">
                Section "Demographics" updated
              </span>
              <span className="text-muted-foreground text-sm">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
