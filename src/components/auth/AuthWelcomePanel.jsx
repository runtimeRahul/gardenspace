import { Check, Sprout } from "lucide-react";

export default function AuthWelcomePanel({
  title = "Join Our Green Community",
  description = "Everything you need to grow a thriving garden.",
  benefits = [
    "Track your plants",
    "Get personalized care tips",
    "Set reminders",
    "Learn from experts",
    "Be part of a supportive community",
  ],
}) {
  return (
    <div className="relative flex min-h-52 h-full flex-col justify-between overflow-hidden bg-[#173F32] p-6 text-white sm:min-h-64 sm:p-8 lg:p-10">
      {/* Botanical background image */}
      <img
        src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=85"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      {/* Dark overlay for readable text */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#102D23]/75 via-[#173F32]/75 to-[#102D23]/95" />

      {/* Brand mark */}
      <div className="relative z-10 flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-[#DCE8B8] backdrop-blur-sm">
          <Sprout size={23} strokeWidth={2} />
        </span>

        <span className="font-serif text-lg font-bold tracking-tight">
          GardenDiaries
        </span>
      </div>

      {/* Welcome content */}
      <div className="relative z-10 mt-8 sm:mt-10 lg:mt-0">
        <h1 className="max-w-md font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        <p className="mt-4 max-w-md text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
          {description}
        </p>

        {/* Benefits */}
        <ul className="mt-6 space-y-3 sm:mt-8">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-3 text-sm text-white/95 sm:text-base"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DCE8B8] text-[#173F32]">
                <Check size={13} strokeWidth={3} />
              </span>

              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Decorative botanical accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -right-10 h-40 w-40 rounded-full border border-white/15 sm:h-56 sm:w-56"
      />
    </div>
  );
}