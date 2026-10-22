
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Search,
  Bell,
  ChevronDown,
  UserRound,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

const pageTitles = {
  "/dashboard": "Overview",
  "/my-plants": "My Plants",
  "/care-schedule": "Care Schedule",
  "/garden-journal": "Garden Journal",
  "/discover": "Discover",
  "/settings": "Settings",
  "/my-profile": "My Profile",
  "/notifications": "Notifications",
};

export default function Topbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [searchQuery, setSearchQuery] = useState("");

  const pageTitle =
    pageTitles[location.pathname] || "GardenDiaries";

  const displayName = user?.fullName?.trim() || "My Profile";

  const initials = displayName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  function handleSearch(event) {
    event.preventDefault();

    const query = searchQuery.trim();

    if (!query) return;

    navigate(`/discover?q=${encodeURIComponent(query)}`);
  }

  function handleProfileClick() {
    navigate("/my-profile");
  }

  function handleNotificationsClick() {
    navigate("/notifications");
  }

  return (
    <header className="sticky top-0 z-30 flex min-h-[76px] w-full items-center justify-between gap-3 border-b border-[#E5E9DF] bg-white/95 px-4 py-3 backdrop-blur sm:px-6 lg:px-8">
      {/* Current page title */}
      <div className="min-w-0 pl-12 md:pl-0">
        <p className="text-xs text-[#849082]">
          GardenDiaries / Workspace
        </p>

        <h1 className="mt-1 truncate text-lg font-semibold text-[#173F32] sm:text-xl">
          {pageTitle}
        </h1>
      </div>

      {/* Dashboard search */}
      <form
        onSubmit={handleSearch}
        role="search"
        className="hidden max-w-sm flex-1 md:block"
      >
        <label
          htmlFor="dashboard-search"
          className="sr-only"
        >
          Search GardenDiaries
        </label>

        <div className="flex items-center gap-2 rounded-xl border border-[#E5E9DF] bg-[#FAFBF8] px-3 transition focus-within:border-[#39764D] focus-within:ring-2 focus-within:ring-[#39764D]/10">
          <Search
            size={18}
            className="shrink-0 text-[#849082]"
            aria-hidden="true"
          />

          <input
            id="dashboard-search"
            type="search"
            value={searchQuery}
            onChange={(event) =>
              setSearchQuery(event.target.value)
            }
            placeholder="Search plants, journals..."
            className="h-10 min-w-0 w-full bg-transparent text-sm text-[#173F32] outline-none placeholder:text-[#9AA395]"
          />
        </div>
      </form>

      {/* Dashboard actions */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        {/* Notifications */}
        <button
          type="button"
          onClick={handleNotificationsClick}
          aria-label="Open notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl text-[#68776A] transition hover:bg-[#F7F4E9] hover:text-[#173F32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39764D]"
        >
          <Bell
            size={20}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <span
            aria-hidden="true"
            className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#719C55]"
          />
        </button>

        {/* Profile: always visible in the dashboard */}
        <button
          type="button"
          onClick={handleProfileClick}
          aria-label={`Open profile: ${displayName}`}
          className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-[#F7F4E9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39764D]"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E5EEDC] text-sm font-semibold text-[#173F32]">
            {initials || (
              <UserRound
                size={19}
                aria-hidden="true"
              />
            )}
          </span>

          <span className="hidden text-left sm:block">
            <span className="block max-w-28 truncate text-sm font-semibold text-[#173F32]">
              {displayName}
            </span>

            <span className="block text-xs text-[#849082]">
              View profile
            </span>
          </span>

          <ChevronDown
            size={16}
            className="hidden text-[#849082] sm:block"
            aria-hidden="true"
          />
        </button>
      </div>
    </header>
  );
}
