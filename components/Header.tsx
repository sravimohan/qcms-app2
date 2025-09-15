"use client";

import { Button } from "./primitives/Button";
import { ThemeSwitch } from "./ThemeSwitch";
import UserMenu from "./UserMenu";

interface HeaderProps {
  onMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}

export function Header({ onMenuToggle, isMobileMenuOpen }: HeaderProps) {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4 lg:px-6">
      {/* Mobile menu button and logo */}
      <div className="flex items-center gap-4">
        <Button
          variant="icon"
          size="icon"
          onPress={onMenuToggle}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </Button>

        <h1 className="text-xl font-semibold text-foreground">
          Enterprise App
        </h1>
      </div>

      {/* Right side - Theme toggle and user actions */}
      <div className="flex items-center gap-4">
        <ThemeSwitch />
        <UserMenu />
      </div>
    </header>
  );
}
