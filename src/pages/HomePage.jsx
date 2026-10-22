import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import FeatureSection from "../components/home/FeatureSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F4E9]">
      <Navbar />

      <HeroSection />

      <FeatureSection />
    </main>
  );
}