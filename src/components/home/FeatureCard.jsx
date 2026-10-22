import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  to = "/",
}) {
  return (
    <Link
      to={to}
      className="group flex h-full flex-col rounded-2xl border border-[#E7E5DA] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C8D9BC] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#39764D] focus:ring-offset-2 sm:p-6"
    >
      {/* Icon and arrow */}
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5EEDC] text-[#173F32] transition duration-300 group-hover:bg-[#173F32] group-hover:text-white">
          {Icon && <Icon size={24} strokeWidth={1.8} />}
        </span>

        <ArrowUpRight
          size={20}
          className="text-[#91A08F] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#173F32]"
        />
      </div>

      {/* Card content */}
      <h3 className="mt-5 font-serif text-xl font-bold text-[#173F32]">
        {title}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-6 text-[#647365]">
        {description}
      </p>
    </Link>
  );
}