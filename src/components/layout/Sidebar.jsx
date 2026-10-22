
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  House,
  Leaf,
  CalendarDays,
  BookOpen,
  Compass,
  Settings,
  Menu,
  X,
  Sprout,
} from "lucide-react";

import Logo from "./Logo";

const navigationItems = [
  { label: "Overview", to: "/dashboard", icon: House },
  { label: "My Plants", to: "/my-plants", icon: Leaf },
  { label: "Care Schedule", to: "/care-schedule", icon: CalendarDays },
  { label: "Garden Journal", to: "/garden-journal", icon: BookOpen },
  { label: "Discover", to: "/discover", icon: Compass },
];

const secondaryItems = [
  { label: "Settings", to: "/settings", icon: Settings },
];

function SidebarLinks({ items, onNavigate }) {
  return items.map(({ label, to, icon: Icon }) => (
    <NavLink
      key={to}
      to={to}
      onClick={onNavigate}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
          isActive
            ? "bg-[#E5EEDC] text-[#173F32]"
            : "text-[#68776A] hover:bg-[#F7F4E9] hover:text-[#173F32]"
        }`
      }
    >
      <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
      <span>{label}</span>
    </NavLink>
  ));
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeSidebar() {
    setIsOpen(false);
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        className="fixed left-4 top-4 z-40 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#DCE5D5] bg-white text-[#173F32] shadow-sm md:hidden"
      >
        <Menu size={21} />
      </button>

      {/* Mobile backdrop */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/35 md:hidden"
        />
      )}

      {/* Sidebar panel */}
      <aside
        aria-label="Main navigation"
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-[#E5E9DF] bg-white px-4 py-5 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex items-center justify-between px-2">
          <Logo variant="small" />

          <button
            type="button"
            onClick={closeSidebar}
            aria-label="Close navigation menu"
            className="rounded-lg p-2 text-[#68776A] hover:bg-[#F7F4E9] md:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-8 rounded-2xl bg-[#F7F4E9] p-4">
          <div className="flex items-center gap-2 text-[#39764D]">
            <Sprout size={20} />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Your garden
            </span>
          </div>
          <p className="mt-2 text-sm leading-5 text-[#68776A]">
            A little care goes a long way.
          </p>
        </div>

        <nav className="mt-7 flex-1" aria-label="Dashboard">
          <p className="mb-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#98A194]">
            Workspace
          </p>

          <div className="space-y-1">
            <SidebarLinks
              items={navigationItems}
              onNavigate={closeSidebar}
            />
          </div>

          <div className="mb-3 mt-8 px-4 text-xs font-semibold uppercase tracking-wider text-[#98A194]">
            Preferences
          </div>

          <div className="space-y-1">
            <SidebarLinks
              items={secondaryItems}
              onNavigate={closeSidebar}
            />
          </div>
        </nav>

        <div className="rounded-xl border border-[#E5E9DF] p-3">
          <p className="text-sm font-semibold text-[#173F32]">
            Grow at your own pace
          </p>
          <p className="mt-1 text-xs leading-5 text-[#68776A]">
            Keep track of the little things that help your plants thrive.
          </p>
        </div>
      </aside>
    </>
  );
}
