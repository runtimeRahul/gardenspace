
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  UserRound,
  Mail,
  LockKeyhole,
} from "lucide-react";
import SocialAuthButtons from "./SocialAuthButtons";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const navigate = useNavigate();

  const [values, setValues] = useState(initialValues);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;

    setValues((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
      ...(name === "password" ? { confirmPassword: "" } : {}),
    }));

    setStatus("idle");
  }

  function validateForm() {
    const nextErrors = {};
    const fullName = values.fullName.trim();
    const email = values.email.trim();

    if (!fullName) {
      nextErrors.fullName = "Please enter your full name.";
    } else if (fullName.length < 2) {
      nextErrors.fullName =
        "Your name must contain at least 2 characters.";
    }

    if (!email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.password) {
      nextErrors.password = "Please create a password.";
    } else if (values.password.length < 8) {
      nextErrors.password = "Use at least 8 characters.";
    }

    if (!values.confirmPassword) {
      nextErrors.confirmPassword = "Please confirm your password.";
    } else if (values.confirmPassword !== values.password) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("idle");

    if (!validateForm()) return;

    // Frontend demo only: no email is sent and no account is created.
    navigate("/verify-otp", {
      state: {
        email: values.email.trim(),
        fullName: values.fullName.trim(),
      },
    });
  }

  function renderField({
    name,
    label,
    placeholder,
    icon: Icon,
    type = "text",
    show,
    onToggle,
    autoComplete,
  }) {
    const isPassword = Boolean(onToggle);
    const errorId = `${name}-error`;

    return (
      <div>
        <label
          htmlFor={name}
          className="mb-1.5 block text-sm font-medium text-[#26342D]"
        >
          {label}
        </label>

        <div className="relative">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#879487]"
          >
            <Icon size={17} />
          </span>

          <input
            id={name}
            name={name}
            type={isPassword ? (show ? "text" : "password") : type}
            value={values[name]}
            onChange={handleChange}
            placeholder={placeholder}
            autoComplete={autoComplete}
            aria-invalid={Boolean(errors[name])}
            aria-describedby={errors[name] ? errorId : undefined}
            required
            className="min-h-11 w-full rounded-lg border border-[#DFE3DB] bg-white py-2.5 pl-10 pr-11 text-sm text-[#26342D] outline-none transition placeholder:text-[#9AA398] focus:border-[#39764D] focus:ring-2 focus:ring-[#39764D]/15"
          />

          {isPassword && (
            <button
              type="button"
              onClick={onToggle}
              aria-label={
                show
                  ? `Hide ${label.toLowerCase()}`
                  : `Show ${label.toLowerCase()}`
              }
              className="absolute inset-y-0 right-3 flex items-center text-[#788777] hover:text-[#173F32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39764D]"
            >
              {show ? (
                <EyeOff size={17} aria-hidden="true" />
              ) : (
                <Eye size={17} aria-hidden="true" />
              )}
            </button>
          )}
        </div>

        {errors[name] && (
          <p
            id={errorId}
            role="alert"
            className="mt-1 text-xs text-red-700"
          >
            {errors[name]}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="w-full">
      <header className="mb-6">
        <h2 className="font-serif text-3xl font-bold text-[#173F32]">
          Create Your Account
        </h2>

        <p className="mt-2 text-sm text-[#788777]">
          Start your gardening journey today.
        </p>
      </header>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {renderField({
          name: "fullName",
          label: "Full Name",
          placeholder: "Enter your full name",
          icon: UserRound,
          autoComplete: "name",
        })}

        {renderField({
          name: "email",
          label: "Email Address",
          placeholder: "you@example.com",
          icon: Mail,
          type: "email",
          autoComplete: "email",
        })}

        {renderField({
          name: "password",
          label: "Password",
          placeholder: "At least 8 characters",
          icon: LockKeyhole,
          autoComplete: "new-password",
          show: showPassword,
          onToggle: () => setShowPassword((current) => !current),
        })}

        {renderField({
          name: "confirmPassword",
          label: "Confirm Password",
          placeholder: "Enter your password again",
          icon: LockKeyhole,
          autoComplete: "new-password",
          show: showConfirmPassword,
          onToggle: () =>
            setShowConfirmPassword((current) => !current),
        })}

        <button
          type="submit"
          className="flex min-h-11 w-full items-center justify-center rounded-lg bg-[#173F32] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#245844] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39764D] focus-visible:ring-offset-2"
        >
          Sign Up
        </button>
      </form>

      <div className="my-5 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#E5E7DF]" />
        <span className="text-xs text-[#879487]">or</span>
        <span className="h-px flex-1 bg-[#E5E7DF]" />
      </div>

      <SocialAuthButtons
        onGoogleClick={() =>
          setStatus("Google sign-in is not configured yet.")
        }
        onAppleClick={() =>
          setStatus("Apple sign-in is not configured yet.")
        }
      />

      {status && status !== "idle" && (
        <p role="status" className="mt-3 text-center text-sm text-[#76561A]">
          {status}
        </p>
      )}

      <p className="mt-6 text-center text-sm text-[#788777]">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-[#173F32] hover:text-[#39764D] hover:underline"
        >
          Log In
        </Link>
      </p>
    </div>
  );
}
