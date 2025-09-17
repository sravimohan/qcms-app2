import { MainLayout } from "../../components/MainLayout";

export default function Help() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Help & Support</h1>
          <p className="text-muted-foreground mt-2">
            Find answers to common questions and get support for using the
            application.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Help Navigation */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Categories</h2>
            <nav className="space-y-1">
              <div className="p-3 bg-accent rounded-md text-accent-foreground">
                Getting Started
              </div>
              <div className="p-3 hover:bg-accent rounded-md cursor-pointer transition-colors">
                Creating Forms
              </div>
              <div className="p-3 hover:bg-accent rounded-md cursor-pointer transition-colors">
                Managing Questions
              </div>
              <div className="p-3 hover:bg-accent rounded-md cursor-pointer transition-colors">
                Reports & Analytics
              </div>
              <div className="p-3 hover:bg-accent rounded-md cursor-pointer transition-colors">
                Account Settings
              </div>
              <div className="p-3 hover:bg-accent rounded-md cursor-pointer transition-colors">
                Troubleshooting
              </div>
            </nav>
          </div>

          {/* Help Content */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Getting Started</h3>

              <div className="space-y-4">
                <div className="border-b border-border pb-4">
                  <h4 className="font-medium mb-2">
                    How do I create my first form?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Navigate to the Forms section and click "Create New Form".
                    Follow the step-by-step wizard to add sections and questions
                    to your form.
                  </p>
                </div>

                <div className="border-b border-border pb-4">
                  <h4 className="font-medium mb-2">
                    What types of questions can I create?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    You can create multiple choice, text input, rating scale,
                    yes/no, and date questions. Each type has specific settings
                    for customization.
                  </p>
                </div>

                <div className="border-b border-border pb-4">
                  <h4 className="font-medium mb-2">
                    How do I organize questions into sections?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Use the Sections feature to group related questions
                    together. This helps create logical flow in your forms and
                    improves user experience.
                  </p>
                </div>

                <div className="border-b border-border pb-4">
                  <h4 className="font-medium mb-2">
                    Can I see analytics for my forms?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Yes! The Dashboard provides comprehensive analytics
                    including response rates, completion statistics, and
                    detailed response data.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">
                    How do I change my account settings?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Go to Settings to update your profile, notification
                    preferences, security settings, and API configurations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Need More Help?</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-medium mb-2">Contact Support</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Get direct help from our support team.
                  </p>
                  <button
                    type="button"
                    className="text-primary hover:underline text-sm"
                  >
                    Send a Message
                  </button>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-medium mb-2">Documentation</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Browse our comprehensive documentation.
                  </p>
                  <button
                    type="button"
                    className="text-primary hover:underline text-sm"
                  >
                    View Docs
                  </button>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-medium mb-2">Video Tutorials</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Watch step-by-step video guides.
                  </p>
                  <button
                    type="button"
                    className="text-primary hover:underline text-sm"
                  >
                    Watch Videos
                  </button>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-medium mb-2">Community Forum</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Connect with other users and share tips.
                  </p>
                  <button
                    type="button"
                    className="text-primary hover:underline text-sm"
                  >
                    Join Forum
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
