
import Logo from "../components/layout/Logo";
import GardenImage from "../components/common/GardenImage";
import SignUpForm from "../components/auth/SignUpForm";

export default function SignUpPage() {
  return (
    <main className="min-h-screen w-full bg-white lg:h-screen lg:overflow-hidden">
      <div className="grid min-h-screen w-full grid-cols-1 lg:h-full lg:grid-cols-2">
        {/* Left garden image panel */}
        <GardenImage className="min-h-[280px] lg:h-full lg:min-h-0">
          {/* Logo at the top-left */}
          <div className="absolute left-6 top-6 z-20 sm:left-8 sm:top-8 lg:left-10 lg:top-10">
            <Logo variant="large" theme="dark" />
          </div>

          {/* Supporting content */}
          <div className="my-auto max-w-lg pb-6 pt-20 sm:pt-24">
            <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl xl:text-6xl">
              Grow your own
              <br />
              green space.
            </h1>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/85 sm:text-base">
              Create a space to nurture your plants, record their growth, and
              enjoy every step of your gardening journey.
            </p>
          </div>

          <p className="mt-auto pt-5 text-xs tracking-wide text-white/75">
            GROW · CARE · DISCOVER
          </p>
        </GardenImage>

        {/* Signup form directly on the right */}
        <section className="flex min-w-0 items-center justify-center px-6 py-10 sm:px-12 lg:h-full lg:overflow-y-auto lg:px-12 xl:px-20">
          <div className="w-full max-w-xl">
            <SignUpForm />
          </div>
        </section>
      </div>
    </main>
  );
}
