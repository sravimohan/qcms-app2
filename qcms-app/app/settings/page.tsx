import { MainLayout } from "@/components/MainLayout";
import { Button } from "@/components/primitives/Button";
import { Select, SelectItem } from "@/components/primitives/Select";

export default function Settings() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-2">
            Configure your application preferences and account settings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Settings Navigation */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Categories</h2>
            <nav className="space-y-1">
              <div className="p-3 bg-accent rounded-md text-accent-foreground">
                General
              </div>
              <div className="p-3 hover:bg-accent rounded-md cursor-pointer transition-colors">
                Account
              </div>
              <div className="p-3 hover:bg-accent rounded-md cursor-pointer transition-colors">
                Security
              </div>
              <div className="p-3 hover:bg-accent rounded-md cursor-pointer transition-colors">
                Notifications
              </div>
              <div className="p-3 hover:bg-accent rounded-md cursor-pointer transition-colors">
                API Keys
              </div>
            </nav>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">General Settings</h3>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="app-name"
                    className="block text-sm font-medium mb-2"
                  >
                    Application Name
                  </label>
                  <input
                    id="app-name"
                    type="text"
                    defaultValue="Enterprise App"
                    className="w-full p-3 border border-input rounded-md bg-background"
                  />
                </div>

                <Select label="Default Language">
                  <SelectItem>English</SelectItem>
                  <SelectItem>Spanish</SelectItem>
                  <SelectItem>French</SelectItem>
                  <SelectItem>German</SelectItem>
                </Select>

                <Select label="Time Zone">
                  <SelectItem>UTC</SelectItem>
                  <SelectItem>EST</SelectItem>
                  <SelectItem>PST</SelectItem>
                  <SelectItem>GMT</SelectItem>
                </Select>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="notifications"
                    className="rounded"
                  />
                  <label htmlFor="notifications" className="text-sm">
                    Enable email notifications
                  </label>
                </div>

                <div className="flex items-center gap-3">
                  <input type="checkbox" id="analytics" className="rounded" />
                  <label htmlFor="analytics" className="text-sm">
                    Allow analytics tracking
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <Button variant="primary">Save Changes</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
