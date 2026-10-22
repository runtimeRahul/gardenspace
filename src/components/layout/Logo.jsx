
import { Link } from "react-router-dom";
import { Sprout } from "lucide-react";

export default function Logo({
  variant = "large",
  theme = "light",
  className = "",
  iconSize,
}) {
  const isSmall = variant === "small";
  const isDark = theme === "dark";

  const iconClasses = isDark
    ? "bg-[#F7F4E9] text-[#173F32]"
    : "bg-[#173F32] text-[#F7F4E9]";

  const textClasses = isDark
    ? "text-white"
    : "text-[#173F32]";

  return (
    <Link
      to="/"
      aria-label="GardenDiaries home"
      title="GardenDiaries"
      className={`inline-flex shrink-0 items-center justify-center gap-2 no-underline ${className}`}
    >
      {/* Logo icon */}
      <span
        className={`flex shrink-0 items-center justify-center ${
          isSmall
            ? "h-9 w-9 rounded-xl"
            : "h-9 w-9 rounded-lg"
        } ${iconClasses}`}
      >
        <Sprout
          size={iconSize ?? (isSmall ? 23 : 22)}
          strokeWidth={2.2}
          aria-hidden="true"
        />
      </span>

      {/* Brand name — hidden for the small variant */}
      {!isSmall && (
        <span
          className={`font-serif text-lg font-bold tracking-tight ${textClasses}`}
        >
          GardenDiaries
        </span>
      )}
    </Link>
  );
}
