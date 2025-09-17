import { MainLayout } from "../../components/MainLayout";

export default function Forms() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Forms</h1>
            <p className="text-muted-foreground mt-2">
              Create and manage your data collection forms.
            </p>
          </div>

          <button
            type="button"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Create New Form
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">Customer Feedback</h3>
              <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                Active
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Collect customer satisfaction and improvement suggestions.
            </p>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>245 responses</span>
              <span>Updated 2 days ago</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">Employee Survey</h3>
              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                Draft
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Annual employee engagement and satisfaction survey.
            </p>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>0 responses</span>
              <span>Created 1 week ago</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">Product Registration</h3>
              <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                Active
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              New product registration and warranty information.
            </p>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>89 responses</span>
              <span>Updated 5 days ago</span>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Form Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">Total Forms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">8</div>
              <div className="text-sm text-muted-foreground">Active Forms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1,247</div>
              <div className="text-sm text-muted-foreground">
                Total Responses
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">89%</div>
              <div className="text-sm text-muted-foreground">
                Avg Completion
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
