import { Header } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { LogoBar } from "../components/LogoBar";
import { FeaturesSection } from "../components/FeaturesSection";
import { AssistantsSection } from "../components/AssistantsSection";
import { QuoteSection } from "../components/QuoteSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { WorkTogetherSection } from "../components/WorkTogetherSection";
import { SavingsCalculator } from "../components/SavingsCalculator";

export default function Page1() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <Header />
      <Hero />

      {/* Tambahkan komponenmu di sini */}
      <LogoBar />
      <FeaturesSection />
      <AssistantsSection />
      <Footer />
      <QuoteSection />
      <TestimonialsSection/>
      <WorkTogetherSection/>
      <SavingsCalculator/>

    </main>
  );
}