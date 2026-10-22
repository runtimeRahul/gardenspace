
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/#features" },
  { label: "Plants", to: "/plant-library" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `whitespace-nowrap text-sm font-medium transition-colors ${
      isActive
        ? "text-[#173F32]"
        : "text-[#667367] hover:text-[#39764D]"
    }`;

  return (
    <header className="relative z-50 border-b border-[#E6E9DF] bg-[#F7F4E9]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <Logo variant="large" />

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={navLinkClass}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Single welcome button */}
        <Link
          to="/welcome"
          className="hidden items-center gap-2 rounded-xl bg-[#173F32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#245540] sm:inline-flex"
        >
          Get Started
          <ArrowRight size={17} />
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#DCE3D8] text-[#173F32] transition hover:bg-[#E5EEDC] sm:hidden"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-[#E6E9DF] bg-[#F7F4E9] px-5 pb-5 pt-3 sm:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-[#E5EEDC] text-[#173F32]"
                      : "text-[#667367] hover:bg-[#E5EEDC] hover:text-[#173F32]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/welcome"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-[#173F32] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#245540]"
            >
              Get Started
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
