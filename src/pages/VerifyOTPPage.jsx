
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  RefreshCw,
  Sprout,
} from "lucide-react";

import OTPInput from "../components/auth/OTPInput";
import Logo from "../components/layout/Logo";
import gardeningVibes from "../assets/images/gardening-vibes.png";

const OTP_LENGTH = 6;
const RESEND_SECONDS = 30;

function generateOTP() {
  return String(
    Math.floor(100000 + Math.random() * 900000)
  );
}

function maskEmail(email) {
  if (!email || !email.includes("@")) {
    return "";
  }

  const [localPart, domain] = email.trim().split("@");

  if (!localPart || !domain) {
    return "";
  }

  const visibleCharacters = Math.min(2, localPart.length);
  const maskedCharacters = Math.max(
    3,
    localPart.length - visibleCharacters
  );

  return `${localPart.slice(0, visibleCharacters)}${"*".repeat(
    maskedCharacters
  )}@${domain}`;
}

export default function VerifyOTPPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email?.trim() || "";

  const [generatedOTP, setGeneratedOTP] = useState(generateOTP);
  const [enteredOTP, setEnteredOTP] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (secondsLeft <= 0 || status === "verified") {
      return undefined;
    }

    const timerId = window.setTimeout(() => {
      setSecondsLeft((current) => Math.max(0, current - 1));
    }, 1000);

    return () => window.clearTimeout(timerId);
  }, [secondsLeft, status]);

  function handleOTPChange(value) {
    setEnteredOTP(value.slice(0, OTP_LENGTH));
    setMessage("");

    if (status !== "verified") {
      setStatus("idle");
    }
  }

  function handleVerify(event) {
    event.preventDefault();

    if (enteredOTP.length !== OTP_LENGTH) {
      setStatus("error");
      setMessage("Please enter all six digits.");
      return;
    }

    if (enteredOTP !== generatedOTP) {
      setStatus("error");
      setMessage("Incorrect OTP. Please check the code and try again.");
      return;
    }

    setStatus("verified");
    setMessage("Email verified successfully!");
  }

  function handleResend() {
    if (secondsLeft > 0 || status === "verified") {
      return;
    }

    setGeneratedOTP(generateOTP());
    setEnteredOTP("");
    setSecondsLeft(RESEND_SECONDS);
    setStatus("idle");
    setMessage("A new demo OTP has been generated. Check the prompt below.");
  }

  const formattedTime = `00:${String(secondsLeft).padStart(2, "0")}`;

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#173F32] px-4 py-8 sm:px-6">
      {/* Botanical background */}
      <img
        src={gardeningVibes}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Forest-green overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#102D23]/80 via-[#173F32]/65 to-[#102D23]/85"
      />

      {/* OTP card */}
      <section className="relative z-10 w-full max-w-md rounded-3xl border border-white/50 bg-white/95 p-6 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-9">
        <div className="mb-7 flex justify-center">
          <Logo variant="large" />
        </div>

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E5EEDC] text-[#173F32]">
          <Mail size={30} strokeWidth={1.8} aria-hidden="true" />
        </div>

        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold tracking-tight text-[#173F32] sm:text-4xl">
            Verify your email
          </h1>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#748074]">
            Enter the six-digit verification code shown in the demo prompt.
          </p>

          <p className="mt-3 break-all text-sm font-semibold text-[#39764D]">
            {maskEmail(email) || "Your registered email"}
          </p>
        </div>

        {/* Demo OTP prompt */}
        <div
          role="status"
          className="mt-6 rounded-xl border border-[#D7E3D0] bg-[#F4F7F0] p-4 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-[#39764D]">
            Demo OTP — not sent by email
          </p>

          <p className="mt-2 font-mono text-2xl font-bold tracking-[0.25em] text-[#173F32]">
            {generatedOTP}
          </p>

          <p className="mt-2 text-xs leading-5 text-[#748074]">
            For frontend testing only. This code is displayed on screen.
          </p>
        </div>

        <form onSubmit={handleVerify} className="mt-7">
          <label className="mb-3 block text-center text-sm font-medium text-[#26342D]">
            Enter verification code
          </label>

          <OTPInput
            value={enteredOTP}
            onChange={handleOTPChange}
            disabled={status === "verified"}
          />

          {message && (
            <p
              role="status"
              aria-live="polite"
              className={`mt-4 text-center text-sm leading-5 ${
                status === "error"
                  ? "text-red-700"
                  : status === "verified"
                    ? "text-[#39764D]"
                    : "text-[#76561A]"
              }`}
            >
              {message}
            </p>
          )}

          {status === "verified" ? (
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#173F32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#245540] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39764D] focus-visible:ring-offset-2"
            >
              Continue to GardenDiaries
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={enteredOTP.length !== OTP_LENGTH}
              className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#173F32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#245540] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39764D] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Verify email
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          )}
        </form>

        {status !== "verified" && (
          <div className="mt-6 text-center">
            <p className="text-sm text-[#748074]">
              Didn't receive a code?
            </p>

            <button
              type="button"
              onClick={handleResend}
              disabled={secondsLeft > 0}
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#39764D] transition hover:text-[#173F32] disabled:cursor-not-allowed disabled:text-[#929B90]"
            >
              {secondsLeft > 0 ? (
                <>Resend available in {formattedTime}</>
              ) : (
                <>
                  <RefreshCw size={15} aria-hidden="true" />
                  Generate new demo OTP
                </>
              )}
            </button>
          </div>
        )}

        <div className="mt-7 border-t border-[#E5E7DF] pt-5">
          <Link
            to="/signup"
            className="mx-auto flex items-center justify-center gap-2 text-sm font-medium text-[#748074] transition hover:text-[#173F32]"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Sign Up
          </Link>
        </div>

        <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-[#929B90]">
          <Sprout size={14} aria-hidden="true" />
          GROW · CARE · DISCOVER
        </p>
      </section>
    </main>
  );
}
