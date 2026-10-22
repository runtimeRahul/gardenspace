
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Leaf } from "lucide-react";
import SocialAuthButtons from "./SocialAuthButtons";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setStatus("idle");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};
    const email = formData.email.trim();

    if (!email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      nextErrors.password = "Please enter your password.";
    }

    setErrors(nextErrors);
    setStatus("idle");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    // Authentication will be connected to the backend later.
    setStatus("demo");
  }

  function handleSocialClick(provider) {
    setStatus("idle");
    setErrors({
      form: `${provider} sign-in is not available yet. Authentication needs to be configured.`,
    });
  }

  return (
    <div className="w-full">
      {/* Form heading */}
      <header className="mb-7">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E5EEDC] text-[#173F32]">
          <Leaf size={25} strokeWidth={1.8} aria-hidden="true" />
        </div>

        <h1 className="font-serif text-3xl font-bold tracking-tight text-[#173F32] sm:text-4xl">
          Welcome Back
        </h1>

        <p className="mt-2 text-sm text-[#748074]">
          Sign in to your account.
        </p>
      </header>

      {/* Login form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div>
          <label
            htmlFor="login-email"
            className="mb-2 block text-sm font-semibold text-[#26342D]"
          >
            Email Address
          </label>

          <input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "login-email-error" : undefined}
            className="w-full rounded-xl border border-[#DCE3D8] bg-[#FCFDFB] px-4 py-3.5 text-sm text-[#26342D] outline-none transition placeholder:text-[#A1AAA0] focus:border-[#39764D] focus:ring-4 focus:ring-[#39764D]/10"
          />

          {errors.email && (
            <p
              id="login-email-error"
              role="alert"
              className="mt-1.5 text-xs text-red-700"
            >
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <label
              htmlFor="login-password"
              className="text-sm font-semibold text-[#26342D]"
            >
              Password
            </label>

            <Link
              to="/forgot-password"
              className="text-xs font-semibold text-[#39764D] transition hover:text-[#173F32] hover:underline sm:text-sm"
            >
              Forgot password?
            </Link>
          </div>

          <div className="relative">
            <input
              id="login-password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              aria-invalid={Boolean(errors.password)}
              aria-describedby={
                errors.password ? "login-password-error" : undefined
              }
              className="w-full rounded-xl border border-[#DCE3D8] bg-[#FCFDFB] px-4 py-3.5 pr-12 text-sm text-[#26342D] outline-none transition placeholder:text-[#A1AAA0] focus:border-[#39764D] focus:ring-4 focus:ring-[#39764D]/10"
            />

            <button
              type="button"
              onClick={() => setShowPassword((previous) => !previous)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-[#748074] transition hover:bg-[#E5EEDC] hover:text-[#173F32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39764D]"
            >
              {showPassword ? (
                <EyeOff size={19} aria-hidden="true" />
              ) : (
                <Eye size={19} aria-hidden="true" />
              )}
            </button>
          </div>

          {errors.password && (
            <p
              id="login-password-error"
              role="alert"
              className="mt-1.5 text-xs text-red-700"
            >
              {errors.password}
            </p>
          )}
        </div>

        {/* Remember me */}
        <label className="flex cursor-pointer items-center gap-2.5 text-sm text-[#667367]">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
            className="h-4 w-4 rounded border-[#C8D3C4] accent-[#39764D]"
          />
          Remember me
        </label>

        {/* General message */}
        {errors.form && (
          <p
            role="status"
            className="rounded-xl border border-[#D7E3D0] bg-[#F4F7F0] px-4 py-3 text-sm text-[#39764D]"
          >
            {errors.form}
          </p>
        )}

        {status === "demo" && (
          <p
            role="status"
            className="rounded-xl border border-[#E9D9A9] bg-[#FFF4D6] px-4 py-3 text-sm leading-5 text-[#76561A]"
          >
            Your inputs are valid, but login is not connected yet. No sign-in
            has occurred.
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#173F32] px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#173F32]/10 transition hover:-translate-y-0.5 hover:bg-[#245540] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#39764D]/20"
        >
          Log In
          <Leaf size={17} aria-hidden="true" />
        </button>
      </form>

      {/* Social login divider */}
      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-[#E3E8DF]" />

        <span className="text-[10px] font-semibold tracking-[0.16em] text-[#929B90] sm:text-xs">
          OR CONTINUE WITH
        </span>

        <div className="h-px flex-1 bg-[#E3E8DF]" />
      </div>

      <SocialAuthButtons
        onGoogleClick={() => handleSocialClick("Google")}
        onAppleClick={() => handleSocialClick("Apple")}
      />

      {/* Sign-up navigation */}
      <p className="mt-7 text-center text-sm text-[#748074]">
        New to GardenDiaries?{" "}
        <Link
          to="/signup"
          className="font-semibold text-[#39764D] transition hover:text-[#173F32] hover:underline"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
}
