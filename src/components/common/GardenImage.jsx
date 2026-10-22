
import gardeningVibes from "../../assets/images/gardening-vibes.png";

export default function GardenImage({ children, className = "" }) {
  return (
    <section
      className={`relative isolate flex min-h-[320px] flex-col overflow-hidden rounded-2xl bg-[#173F32] p-6 text-white sm:p-8 lg:min-h-0 lg:rounded-none lg:p-10 xl:p-12 ${className}`}
    >
      {/* Background image */}
      <img
        src={gardeningVibes}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      {/* Muted forest-green overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#173F32]/75 via-[#173F32]/45 to-[#102D23]/70"
      />

      {/* Soft bottom gradient for readable content */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gradient-to-t from-[#102D23]/40 via-transparent to-transparent"
      />

      {/* Page-specific content */}
      <div className="relative z-10 flex flex-1 flex-col">
        {children}
      </div>
    </section>
  );
}
