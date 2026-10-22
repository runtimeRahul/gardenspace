
import { Sprout, Leaf } from "lucide-react";

export default function LoadingScreen({
  message = "Growing your garden...",
}) {
  return (
    <main
      role="status"
      aria-live="polite"
      className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#F7F4E9] px-6 text-center"
    >
      {/* Botanical animation */}
      <div className="relative mb-8 flex h-28 w-28 items-center justify-center">
        <div className="absolute inset-0 animate-ping rounded-full bg-[#E5EEDC] opacity-40" />

        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#C7D8BF] bg-white shadow-sm">
          <Sprout
            size={54}
            strokeWidth={1.6}
            className="animate-pulse text-[#173F32]"
          />

          <Leaf
            size={20}
            className="absolute right-3 top-4 rotate-45 text-[#719C55]"
          />
        </div>
      </div>

      <h1 className="font-serif text-3xl font-bold text-[#173F32]">
        GardenDiaries
      </h1>

      <p className="mt-3 text-sm text-[#39764D]">
        {message}
      </p>

      {/* Growing progress indicator */}
      <div className="mt-6 h-1.5 w-48 overflow-hidden rounded-full bg-[#DDE7D6]">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-[#39764D]" />
      </div>

      <p className="mt-4 text-xs tracking-wide text-[#788777]">
        A little care goes a long way.
      </p>
    </main>
  );
}
                                                                                                                                                                                                                                                                                