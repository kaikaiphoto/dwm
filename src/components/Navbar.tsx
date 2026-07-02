import { useState, useEffect } from "react";
import { Menu, X, Music } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "首 页", link: "#home" },
    { name: "艺术经历", link: "#bio" },
    { name: "二胡艺术", link: "#artistry" },
    { name: "艺术理念", link: "#philosophy" },
    { name: "艺术合作", link: "#contact" },
  ];

  return (
    <nav
      id="navbar-container"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-silk-50/80 backdrop-blur-md border-b border-silk-200/50 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-full border border-gold-400 flex items-center justify-center bg-silk-100 group-hover:bg-gold-50 transition-colors duration-300">
            <Music className="w-5 h-5 text-gold-500 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-widest text-ink-900 group-hover:text-gold-600 transition-colors duration-300">
              邓伟民
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-600">
              Erhu Virtuoso
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="font-serif text-sm tracking-widest text-ink-700 hover:text-gold-500 transition-colors duration-300 relative py-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-gold-400 transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 border border-gold-400 text-gold-600 hover:bg-gold-500 hover:text-white transition-all duration-300 text-xs tracking-widest font-serif rounded-sm"
          >
            邀约合作
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-ink-700 hover:text-gold-500 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-silk-100 border-b border-silk-200 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-base tracking-widest text-ink-800 hover:text-gold-500 py-2 border-b border-silk-200/50"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 bg-gold-500 text-white rounded-sm font-serif text-sm tracking-widest hover:bg-gold-600 transition-colors"
              >
                邀约合作
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
