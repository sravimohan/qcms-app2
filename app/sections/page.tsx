import { MainLayout } from "../../components/MainLayout";

export default function Sections() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Sections</h1>
            <p className="text-muted-foreground mt-2">
              Organize your forms into logical sections and groups.
            </p>
          </div>

          <button
            type="button"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Create New Section
          </button>
        </div>

        <div className="space-y-4">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Personal Information</h3>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="px-3 py-1 text-sm border border-border rounded hover:bg-accent"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="px-3 py-1 text-sm border border-border rounded hover:bg-accent"
                >
                  Delete
                </button>
              </div>
            </div>
            <p className="text-muted-foreground mb-3">
              Collect basic demographic and contact information from
              respondents.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>5 questions</span>
              <span>Used in 8 forms</span>
              <span>Last updated: 3 days ago</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Feedback & Rating</h3>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="px-3 py-1 text-sm border border-border rounded hover:bg-accent"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="px-3 py-1 text-sm border border-border rounded hover:bg-accent"
                >
                  Delete
                </button>
              </div>
            </div>
            <p className="text-muted-foreground mb-3">
              Standard feedback questions with rating scales and open-ended
              responses.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>7 questions</span>
              <span>Used in 12 forms</span>
              <span>Last updated: 1 week ago</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Product Evaluation</h3>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="px-3 py-1 text-sm border border-border rounded hover:bg-accent"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="px-3 py-1 text-sm border border-border rounded hover:bg-accent"
                >
                  Delete
                </button>
              </div>
            </div>
            <p className="text-muted-foreground mb-3">
              Detailed product assessment questions for quality and satisfaction
              measurement.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>10 questions</span>
              <span>Used in 5 forms</span>
              <span>Last updated: 2 weeks ago</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Demographics</h3>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="px-3 py-1 text-sm border border-border rounded hover:bg-accent"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="px-3 py-1 text-sm border border-border rounded hover:bg-accent"
                >
                  Delete
                </button>
              </div>
            </div>
            <p className="text-muted-foreground mb-3">
              Age, gender, location, and other demographic classification
              questions.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>6 questions</span>
              <span>Used in 15 forms</span>
              <span>Last updated: 1 month ago</span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
