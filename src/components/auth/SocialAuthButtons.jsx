
import { Apple } from "lucide-react";

function GoogleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      className="h-5 w-5 shrink-0"
      focusable="false"
    >
      <path
        fill="#4285F4"
        d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.9 6.1-15Z"
      />
      <path
        fill="#34A853"
        d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z"
      />
      <path
        fill="#FBBC05"
        d="M12.6 27.7a12 12 0 0 1 0-7.4V15H5.8a20 20 0 0 0 0 17.9l6.8-5.2Z"
      />
      <path
        fill="#EA4335"
        d="M24 11.9c3 0 5.7 1 7.8 3.1l5.9-5.9C34.1 5.8 29.5 4 24 4A20 20 0 0 0 5.8 15l6.8 5.3c1.6-4.8 6.1-8.4 11.4-8.4Z"
      />
    </svg>
  );
}

export default function SocialAuthButtons({
  onGoogleClick,
  onAppleClick,
  disabled = false,
}) {
  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={onGoogleClick}
        disabled={disabled}
        aria-label="Continue with Google"
        className="flex min-h-11 w-full items-center justify-center gap-3 rounded-lg border border-[#E2E4DF] bg-white px-4 py-3 text-sm font-medium text-[#26342D] transition-colors hover:border-[#B9CBB1] hover:bg-[#F8FAF5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39764D] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <GoogleIcon />
        <span>Continue with Google</span>
      </button>

      <button
        type="button"
        onClick={onAppleClick}
        disabled={disabled}
        aria-label="Continue with Apple"
        className="flex min-h-11 w-full items-center justify-center gap-3 rounded-lg border border-[#E2E4DF] bg-white px-4 py-3 text-sm font-medium text-[#26342D] transition-colors hover:border-[#B9CBB1] hover:bg-[#F8FAF5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39764D] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Apple size={19} fill="currentColor" aria-hidden="true" />
        <span>Continue with Apple</span>
      </button>
    </div>
  );
}
