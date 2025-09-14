import { MainLayout } from "../components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Welcome to Enterprise App
          </h1>
          <p className="text-muted-foreground mt-2">
            Your professional dashboard for managing forms, sections, and
            questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-card border border-border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
            <p className="text-muted-foreground">
              Monitor your application metrics and analytics.
            </p>
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Forms</h2>
            <p className="text-muted-foreground">
              Create and manage your data collection forms.
            </p>
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Questions</h2>
            <p className="text-muted-foreground">
              Build and organize your question library.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
