// src/App.jsx
import GlobalStyles    from './styles/GlobalStyles';
import Navbar          from './components/Navbar';
import HeroSection     from './components/HeroSection';
import MissionsSection from './components/MissonsSection';
import ProgrammesSection from './components/ProgrammesSection';
import ParcoursSection from './components/ParcoursSection';
import ValeursSection  from './components/ValeursSection';
import ContactSection  from './components/ContactSection';
import Footer          from './components/Footer';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen bg-[#F9F7F2] text-[#2D2D2D]">
        <Navbar />
        <HeroSection />
        <MissionsSection />
        <ProgrammesSection />
        <ParcoursSection />
        <ValeursSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}