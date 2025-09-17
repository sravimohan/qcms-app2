"use client";

import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { LeftNavigation } from "./LeftNavigation";
import { ThemeProvider } from "./ThemeProvider";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <ThemeProvider defaultTheme="system" storageKey="enterprise-app-theme">
      <div className="min-h-screen bg-background font-sans antialiased">
        {/* Header */}
        <Header
          onMenuToggle={toggleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />

        <div className="flex h-[calc(100vh-4rem)]">
          {/* Left Navigation */}
          <LeftNavigation isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

          {/* Main content area */}
          <main className="flex-1 flex flex-col lg:ml-0 overflow-hidden">
            {/* Page content */}
            <div className="flex-1 overflow-auto p-4 lg:p-6">{children}</div>

            {/* Footer */}
            <Footer />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
