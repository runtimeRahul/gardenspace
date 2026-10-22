
import { useNavigate } from "react-router-dom";
import {
  UserRound,
  Mail,
  Leaf,
  ChevronRight,
  Settings,
  ShieldCheck,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

export default function MyProfilePage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const fullName = user?.fullName?.trim() || "Garden Friend";
  const email = user?.email?.trim() || "No email added";

  const initials = fullName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  const profileOptions = [
    {
      title: "Personal information",
      description: "Manage your name and contact details",
      icon: UserRound,
      onClick: () => navigate("/profile/personal-information"),
    },
    {
      title: "Account preferences",
      description: "Manage your GardenDiaries preferences",
      icon: Settings,
      onClick: () => navigate("/settings"),
    },
    {
      title: "Privacy & security",
      description: "Review your account and session information",
      icon: ShieldCheck,
      onClick: () => navigate("/settings"),
    },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6">
      {/* Page heading */}
      <div>
        <p className="text-xs text-[#849082]">
          Workspace / Account / Profile
        </p>

        <h1 className="mt-3 text-2xl font-bold text-[#173F32] sm:text-3xl">
          My Profile
        </h1>

        <p className="mt-2 text-sm leading-6 text-[#788777]">
          View your account details and manage your personal information.
        </p>
      </div>

      {/* Profile summary */}
      <section className="rounded-2xl border border-[#E5E9DF] bg-white p-5 sm:p-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#E5EEDC] text-2xl font-bold text-[#173F32]">
            {initials || <UserRound size={30} />}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="break-words text-xl font-semibold text-[#173F32]">
                {fullName}
              </h2>

              <span className="inline-flex items-center gap-1 rounded-full bg-[#E5EEDC] px-2.5 py-1 text-xs font-medium text-[#39764D]">
                <Leaf size={13} />
                Gardener
              </span>
            </div>

            <p className="mt-2 flex items-center gap-2 break-all text-sm text-[#788777]">
              <Mail size={16} className="shrink-0" />
              {email}
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/profile/personal-information")}
            className="inline-flex min-h-10 items-center justify-center rounded-xl bg-[#173F32] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#245540]"
          >
            Edit profile
          </button>
        </div>
      </section>

      {/* Account details */}
      <section className="overflow-hidden rounded-2xl border border-[#E5E9DF] bg-white">
        <div className="border-b border-[#EDF0E9] px-5 py-4 sm:px-6">
          <h2 className="font-semibold text-[#173F32]">
            Account details
          </h2>

          <p className="mt-1 text-xs text-[#788777]">
            Your current GardenDiaries profile information.
          </p>
        </div>

        <div className="divide-y divide-[#EDF0E9]">
          <div className="flex items-start justify-between gap-4 px-5 py-4 sm:px-6">
            <div>
              <p className="text-xs text-[#849082]">Full name</p>
              <p className="mt-1 break-words text-sm font-medium text-[#173F32]">
                {fullName}
              </p>
            </div>

            <UserRound size={18} className="shrink-0 text-[#849082]" />
          </div>

          <div className="flex items-start justify-between gap-4 px-5 py-4 sm:px-6">
            <div className="min-w-0">
              <p className="text-xs text-[#849082]">Email address</p>
              <p className="mt-1 break-all text-sm font-medium text-[#173F32]">
                {email}
              </p>
            </div>

            <Mail size={18} className="shrink-0 text-[#849082]" />
          </div>
        </div>
      </section>

      {/* Profile navigation */}
      <section className="overflow-hidden rounded-2xl border border-[#E5E9DF] bg-white">
        {profileOptions.map((option) => {
          const Icon = option.icon;

          return (
            <button
              key={option.title}
              type="button"
              onClick={option.onClick}
              className="flex w-full items-center gap-4 border-b border-[#EDF0E9] px-5 py-4 text-left transition last:border-b-0 hover:bg-[#FAFBF8] sm:px-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E5EEDC] text-[#39764D]">
                <Icon size={19} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-[#173F32]">
                  {option.title}
                </span>

                <span className="mt-1 block text-xs leading-5 text-[#788777]">
                  {option.description}
                </span>
              </span>

              <ChevronRight
                size={18}
                className="shrink-0 text-[#849082]"
              />
            </button>
          );
        })}
      </section>
    </div>
  );
}
