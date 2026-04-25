import { Header } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { LogoBar } from "../components/LogoBar";
import { FeaturesSection } from "../components/FeaturesSection";
import { AssistantsSection } from "../components/AssistantsSection"

export default function Page1() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <Header />
      <Hero />

      {/* Tambahkan komponenmu di sini */}
      <LogoBar />
      <FeaturesSection />
      <AssistantsSection />

    </main>
  );
}