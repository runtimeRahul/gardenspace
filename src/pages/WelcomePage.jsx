
import { Link } from "react-router-dom";
import { ArrowRight, Check, Sprout } from "lucide-react";
import Logo from "../components/layout/Logo";
import GardenImage from "../components/common/GardenImage";

const benefits = [
  "Keep all your gardens organized",
  "Track plant growth and history",
  "Get timely plant care reminders",
  "Discover plants and gardening tips",
];

export default function WelcomePage() {
  return (
    <main className="min-h-screen w-full bg-white lg:h-screen">
      <div className="grid min-h-screen w-full grid-cols-1 lg:h-full lg:grid-cols-2">
        {/* Left garden image panel */}
        <GardenImage className="min-h-[480px] lg:h-full lg:min-h-0">
          <div className="absolute left-6 top-6 z-20 sm:left-8 sm:top-8 lg:left-10 lg:top-10">
            <Logo variant="large" theme="dark" />
          </div>

          <div className="my-auto max-w-xl pb-5 pt-20 sm:pt-24">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur-sm">
              <Sprout size={17} aria-hidden="true" />
              Your gardening journey starts here
            </div>

            <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl xl:text-6xl">
              Grow your world,
              <br />
              one plant at a time.
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/85 sm:text-base">
              Make space for greenery, build healthy habits, and keep every
              little moment of your gardening journey in one place.
            </p>

            <ul className="mt-7 space-y-4">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm text-white/95 sm:text-base"
                >
                  <Check
                    size={18}
                    className="mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-auto pt-5 text-xs tracking-wide text-white/75">
            GROW · CARE · DISCOVER
          </p>
        </GardenImage>

        {/* Right welcome panel */}
        <section className="flex min-w-0 items-center justify-center px-6 py-12 sm:px-12 lg:h-full lg:px-12 lg:py-8 xl:px-20">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E5EEDC] text-[#173F32]">
                <Sprout size={26} aria-hidden="true" />
              </div>

              <h2 className="font-serif text-3xl font-bold text-[#173F32] sm:text-4xl">
                Welcome to GardenDiaries
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#748074]">
                Your garden has a story. Let's start growing yours.
              </p>
            </div>

            <div className="space-y-4">
              <Link
                to="/signup"
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#173F32] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#245540] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39764D] focus-visible:ring-offset-2"
              >
                Get Started
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link
                to="/login"
                className="flex min-h-12 w-full items-center justify-center rounded-xl border border-[#DCE3D8] bg-white px-5 py-3 text-sm font-semibold text-[#173F32] transition-colors hover:bg-[#F4F7F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39764D] focus-visible:ring-offset-2"
              >
                I already have an account
              </Link>
            </div>

            <p className="mt-6 text-center text-xs leading-5 text-[#929B90]">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
