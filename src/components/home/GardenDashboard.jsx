
import {
  Leaf,
  CalendarCheck,
  BookOpen,
  Sprout,
  ArrowRight,
  Droplets,
  Sun,
} from "lucide-react";
import { Link } from "react-router-dom";

const gardenStats = [
  {
    label: "My Plants",
    value: "0",
    description: "Plants in your collection",
    icon: Leaf,
  },
  {
    label: "Care Tasks",
    value: "0",
    description: "Tasks to complete today",
    icon: CalendarCheck,
  },
  {
    label: "Journal Entries",
    value: "0",
    description: "Moments you've recorded",
    icon: BookOpen,
  },
];

const quickActions = [
  {
    title: "Add your first plant",
    description: "Start building your personal plant collection.",
    icon: Leaf,
    to: "/my-plants",
  },
  {
    title: "Plan plant care",
    description: "Organize watering and other care routines.",
    icon: Droplets,
    to: "/care-schedule",
  },
  {
    title: "Write a garden entry",
    description: "Record your progress and gardening experiences.",
    icon: BookOpen,
    to: "/garden-journal",
  },
];

export default function GardenDashboard() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-8">
      {/* Welcome banner */}
      <section className="relative overflow-hidden rounded-3xl bg-[#173F32] p-6 text-white sm:p-8 lg:p-10">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-[#E5EEDC]">
            <Sprout size={15} />
            YOUR GARDEN SPACE
          </div>

          <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
            Every garden begins with a little care.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
            Keep your plants organized, plan their care, and capture the
            little moments that make your gardening journey special.
          </p>

          <Link
            to="/my-plants"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#E5EEDC] px-5 py-3 text-sm font-semibold text-[#173F32] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#173F32]"
          >
            Explore my garden
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="pointer-events-none absolute -right-8 -top-10 opacity-10">
          <Sprout size={220} strokeWidth={0.8} />
        </div>
      </section>

      {/* Garden statistics */}
      <section aria-labelledby="garden-stats-heading">
        <div className="mb-4">
          <h2
            id="garden-stats-heading"
            className="text-lg font-semibold text-[#173F32]"
          >
            Your garden at a glance
          </h2>
          <p className="mt-1 text-sm text-[#788777]">
            Your collection and activity will appear here.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {gardenStats.map(({ label, value, description, icon: Icon }) => (
            <article
              key={label}
              className="rounded-2xl border border-[#E5E9DF] bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-[#788777]">
                    {label}
                  </p>
                  <p className="mt-3 text-3xl font-bold text-[#173F32]">
                    {value}
                  </p>
                </div>

                <div className="rounded-xl bg-[#E5EEDC] p-3 text-[#39764D]">
                  <Icon size={22} />
                </div>
              </div>

              <p className="mt-3 text-sm text-[#788777]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Quick actions */}
      <section aria-labelledby="quick-actions-heading">
        <div className="mb-4">
          <h2
            id="quick-actions-heading"
            className="text-lg font-semibold text-[#173F32]"
          >
            Let's grow something
          </h2>
          <p className="mt-1 text-sm text-[#788777]">
            Choose what you'd like to do next.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {quickActions.map(({ title, description, icon: Icon, to }) => (
            <Link
              key={title}
              to={to}
              className="group rounded-2xl border border-[#E5E9DF] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#C7D8BF] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39764D]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E5EEDC] text-[#39764D]">
                <Icon size={22} />
              </div>

              <h3 className="font-semibold text-[#173F32]">{title}</h3>

              <p className="mt-2 text-sm leading-6 text-[#788777]">
                {description}
              </p>

              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#39764D]">
                Get started
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Gardening tip */}
      <section className="flex flex-col gap-4 rounded-2xl border border-[#DCE5D5] bg-[#E5EEDC]/60 p-5 sm:flex-row sm:items-center sm:p-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#39764D]">
          <Sun size={24} />
        </div>

        <div>
          <h2 className="font-semibold text-[#173F32]">
            A little gardening reminder
          </h2>
          <p className="mt-1 text-sm leading-6 text-[#68776A]">
            Check the soil before watering. Different plants have different
            needs, and a quick check can help you avoid overwatering.
          </p>
        </div>
      </section>
    </div>
  );
}
