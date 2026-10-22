import { Link } from "react-router-dom";
import { ArrowRight, Sprout } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#F7F4E9]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-20">
        {/* Hero content */}
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D7E3D0] bg-[#E5EEDC] px-4 py-2 text-sm font-medium text-[#39764D]">
            <Sprout size={17} />
            <span>Your personal gardening companion</span>
          </div>

          <h1 className="max-w-xl font-serif text-4xl font-bold leading-tight tracking-tight text-[#173F32] sm:text-5xl lg:text-6xl xl:text-7xl">
            Grow Your Story
            <br className="hidden sm:block" /> One Plant at a Time
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#536357] sm:text-lg sm:leading-8">
            Cultivate your green space, nurture your plants, and
            document every little victory. Your garden journey
            starts here.
          </p>

          {/* Call-to-action buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/signup"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#173F32] px-6 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#245844] focus:outline-none focus:ring-2 focus:ring-[#39764D] focus:ring-offset-2"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/plant-library"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#C8D5C2] bg-white/70 px-6 py-3 font-semibold text-[#173F32] transition hover:bg-[#E5EEDC] focus:outline-none focus:ring-2 focus:ring-[#39764D] focus:ring-offset-2"
            >
              Explore Plants
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-[#647365]">
            <span className="flex -space-x-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#F7F4E9] bg-[#DCE8D4]">
                <Sprout size={15} className="text-[#173F32]" />
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#F7F4E9] bg-[#C8D9BC]">
                <Sprout size={15} className="text-[#173F32]" />
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#F7F4E9] bg-[#E8DCC4]">
                <Sprout size={15} className="text-[#173F32]" />
              </span>
            </span>
            <span>Every great garden starts with one plant.</span>
          </div>
        </div>

        {/* Botanical hero image */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#E5EEDC] sm:-right-7 sm:-top-7 sm:h-36 sm:w-36" />

          <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full bg-[#DCE8D4] sm:-bottom-7 sm:-left-7 sm:h-36 sm:w-36" />

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-4 border-white/80 shadow-xl sm:aspect-[5/4] lg:aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=85"
              alt="Healthy green plants growing in a sunlit garden"
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />

            {/* Image overlay label */}
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/50 bg-white/90 p-4 shadow-lg backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E5EEDC] text-[#173F32]">
                  <Sprout size={24} />
                </span>

                <div>
                  <p className="font-serif text-lg font-bold text-[#173F32]">
                    A little growth every day
                  </p>
                  <p className="mt-1 text-sm text-[#647365]">
                    Plan, nurture, and celebrate your garden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}