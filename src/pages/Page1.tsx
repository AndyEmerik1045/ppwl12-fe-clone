import { Header } from '../components/Navbar'; // Sesuaikan nama fungsi di Navbar.tsx
import { Hero } from '../components/Hero';

export default function Page1() {
  return (
    <main className="min-h-screen bg-[#0f172a]">
      <Header />
      <Hero />
    </main>
  );
}