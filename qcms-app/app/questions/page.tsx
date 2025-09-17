import { Button } from "@/components/primitives/Button";
import { MainLayout } from "../../components/MainLayout";

export default function Questions() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Questions</h1>
            <p className="text-muted-foreground mt-2">
              Build and manage your question library with various question
              types.
            </p>
          </div>

          <Button variant="primary">Create New Question</Button>
        </div>

        <div className="flex gap-4 mb-6">
          <label htmlFor="question-type" className="sr-only">
            Filter by question type
          </label>
          <select
            id="question-type"
            className="px-3 py-2 border border-input rounded-md bg-background"
          >
            <option>All Types</option>
            <option>Multiple Choice</option>
            <option>Text Input</option>
            <option>Rating Scale</option>
            <option>Yes/No</option>
            <option>Date</option>
          </select>

          <input
            type="text"
            placeholder="Search questions..."
            className="flex-1 px-3 py-2 border border-input rounded-md bg-background"
            aria-label="Search questions"
          />
        </div>

        <div className="space-y-4">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">
                  How would you rate our service?
                </h3>
                <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full mt-2">
                  Rating Scale
                </span>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">
                  Edit
                </Button>
                <Button variant="secondary" size="sm">
                  Delete
                </Button>
              </div>
            </div>
            <p className="text-muted-foreground mb-3">
              1-5 scale rating question for service satisfaction measurement.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>Used in 8 forms</span>
              <span>245 responses</span>
              <span>Last used: 2 days ago</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">
                  What is your primary reason for contacting us?
                </h3>
                <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full mt-2">
                  Multiple Choice
                </span>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">
                  Edit
                </Button>
                <Button variant="secondary" size="sm">
                  Delete
                </Button>
              </div>
            </div>
            <p className="text-muted-foreground mb-3">
              Multiple choice question with options: Support, Sales, Billing,
              General Inquiry.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>Used in 12 forms</span>
              <span>567 responses</span>
              <span>Last used: 1 day ago</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">
                  Please provide additional comments or suggestions
                </h3>
                <span className="inline-block px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full mt-2">
                  Text Input
                </span>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">
                  Edit
                </Button>
                <Button variant="secondary" size="sm">
                  Delete
                </Button>
              </div>
            </div>
            <p className="text-muted-foreground mb-3">
              Open-ended text area for detailed feedback and suggestions.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>Used in 15 forms</span>
              <span>423 responses</span>
              <span>Last used: 3 days ago</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">
                  Would you recommend us to others?
                </h3>
                <span className="inline-block px-2 py-1 text-xs bg-orange-100 text-orange-800 rounded-full mt-2">
                  Yes/No
                </span>
              </div>
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
              Binary yes/no question for Net Promoter Score calculation.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>Used in 6 forms</span>
              <span>298 responses</span>
              <span>Last used: 1 week ago</span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
