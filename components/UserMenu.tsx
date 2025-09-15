import { useRouter } from "next/navigation";
import { type Key, Menu, MenuItem, MenuTrigger } from "react-aria-components";
import { Button } from "./primitives/Button";
import { Popover } from "./primitives/Popover";

export default function UserMenu() {
  const router = useRouter();

  const handleMenuAction = (key: Key) => {
    switch (key) {
      case "settings":
        router.push("/settings");
        break;
      case "logout":
        // Handle logout logic here
        console.log("Logout clicked");
        break;
    }
  };

  return (
    <MenuTrigger>
      <Button variant="icon" className="w-8 h-8 rounded-full">
        <svg
          className="w-4 h-4 text-primary-foreground"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
      <Popover placement="bottom end" className="p-1 min-w-[160px]">
        <Menu className="outline-none" onAction={handleMenuAction}>
          <MenuItem
            id="settings"
            className="flex items-center gap-3 px-3 py-2 text-sm text-popover-foreground rounded-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer outline-none border-0"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Settings
          </MenuItem>
          <MenuItem
            id="logout"
            className="flex items-center gap-3 px-3 py-2 text-sm text-popover-foreground rounded-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer outline-none border-0"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}
