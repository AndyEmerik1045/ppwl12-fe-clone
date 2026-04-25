import { Header } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { LogoBar } from "../components/LogoBar";
import { FeaturesSection } from "../components/FeaturesSection";
import { AssistantsSection } from "../components/AssistantsSection";
import { WorkTogetherSection } from "../components/WorkTogetherSection";
import { QuoteSection } from "../components/QuoteSection";
import { SavingsCalculator } from "../components/SavingsCalculator";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { TryForFreeSection } from "../components/TryForFreeSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <LogoBar />
      <FeaturesSection />
      <AssistantsSection />
      <WorkTogetherSection />
      <QuoteSection />
      <SavingsCalculator />
      <TestimonialsSection />
      <TryForFreeSection />
      <Footer />
    </main>
  );
}
