export default function AuthLayout({
  children,
  welcomePanel,
}) {
  return (
    <main className="min-h-screen bg-[#F7F4E9] p-3 sm:p-5 lg:flex lg:items-center lg:justify-center lg:p-8">
      <div className="mx-auto grid min-h-[calc(100vh-1.5rem)] w-full max-w-7xl overflow-hidden rounded-2xl border border-[#E5E7DF] bg-white shadow-xl sm:min-h-[calc(100vh-2.5rem)] lg:min-h-[min(850px,calc(100vh-4rem))] lg:grid-cols-2">
        {/* Botanical welcome panel */}
        <section className="relative min-h-52 overflow-hidden bg-[#173F32] sm:min-h-64 lg:min-h-full">
          {welcomePanel}
        </section>

        {/* Form panel */}
        <section className="flex items-center justify-center bg-[#FFFDF7] px-5 py-8 sm:px-10 sm:py-12 lg:px-12 xl:px-16">
          <div className="w-full max-w-md">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}