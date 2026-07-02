import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Artistry from "./components/Artistry";
import Philosophy from "./components/Philosophy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-silk-50 selection:bg-gold-200 selection:text-ink-950 font-sans overflow-x-hidden antialiased">
      {/* Sticky Translucent Header */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main id="main-content">
        {/* Hero Banner with Portrait */}
        <Hero />

        {/* Detailed Biography & Mentor Heritage */}
        <Bio />

        {/* Artistry Showcase & Interactive Audioplayer */}
        <Artistry />

        {/* Artistic Philosophies & Thinking */}
        <Philosophy />

        {/* Contact Form & Collaboration channel */}
        <Contact />
      </main>

      {/* Structured Footer with stamp seal and top-scroll */}
      <Footer />
    </div>
  );
}
