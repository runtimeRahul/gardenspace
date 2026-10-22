import {
  Sprout,
  BellRing,
  BookOpen,
  Users,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    id: "garden",
    icon: Sprout,
    title: "Track Your Garden",
    description:
      "Keep all your gardens and plants organized in one beautiful space.",
    to: "/my-space",
  },
  {
    id: "reminders",
    icon: BellRing,
    title: "Care Reminders",
    description:
      "Stay on top of watering, pruning, and feeding with timely reminders.",
    to: "/tasks",
  },
  {
    id: "guides",
    icon: BookOpen,
    title: "Expert Guides",
    description:
      "Learn about plant care, growing conditions, and seasonal gardening.",
    to: "/plant-library",
  },
  {
    id: "community",
    icon: Users,
    title: "Join Community",
    description:
      "Discover gardening inspiration and share your growing journey.",
    to: "/community",
  },
];

export default function FeatureSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="border-t border-[#E7E5DA] bg-white/60"
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        {/* Section heading */}
        <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#39764D]">
            Everything you need to grow
          </p>

          <h2
            id="features-heading"
            className="mt-3 font-serif text-3xl font-bold text-[#173F32] sm:text-4xl"
          >
            A happier garden starts here
          </h2>

          <p className="mt-4 text-base leading-7 text-[#647365]">
            Simple tools to help you nurture your plants,
            build healthy habits, and enjoy every stage of
            your gardening journey.
          </p>
        </div>

        {/* Responsive feature grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              to={feature.to}
            />
          ))}
        </div>
      </div>
    </section>
  );
}