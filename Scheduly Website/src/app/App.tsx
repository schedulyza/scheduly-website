import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AppRoutes from "./routes";
import logoImage from "../assets/Logo BG removed.png";

const SUBSCRIBE_URL = "https://wandile-nexora.app.n8n.cloud/webhook/pay";

export default function App() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src={logoImage} alt="Scheduly Logo" className="w-8 h-8 rounded-lg" />
          <span className="font-bold text-xl">Scheduly</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`transition-colors ${
              location.pathname === "/" ? "text-white" : "text-slate-300 hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className={`transition-colors ${
              location.pathname === "/contact" ? "text-white" : "text-slate-300 hover:text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wandile-nexora.app.n8n.cloud/webhook/choose"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
          >
            Start Free Trial
          </a>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            id="mobile-navigation"
            ref={mobileMenuRef}
            className="fixed top-16 left-4 right-4 z-50 rounded-2xl border border-white/10 bg-[#0a0e27]/95 shadow-2xl shadow-black/40 px-6 py-6 space-y-6"
          >
            <div className="space-y-3">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-lg font-semibold transition-colors ${
                  location.pathname === "/" ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                Home
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-lg font-semibold transition-colors ${
                  location.pathname === "/contact" ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="space-y-3">
              <a
                href="https://wandile-nexora.app.n8n.cloud/webhook/choose"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 font-semibold"
              >
                Start Free Trial
              </a>
              <a
                href={SUBSCRIBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 rounded-full border-2 border-white/15 hover:border-white/30 transition-all font-semibold text-slate-100"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );

  const WHATSAPP_NUMBER = "+27 60 881 1760";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;

  const Footer = () => (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src={logoImage} alt="Scheduly Logo" className="w-8 h-8 rounded-lg" />
              <span className="font-bold text-xl">Scheduly</span>
            </Link>
            <p className="text-slate-400 text-sm">WhatsApp-first scheduling for modern service teams</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <a href="mailto:admin@scheduly.co.za" className="text-slate-400 hover:text-white transition-colors">
              admin@scheduly.co.za
            </a>
            <a href={WHATSAPP_LINK} className="text-slate-400 hover:text-white transition-colors">
              {WHATSAPP_NUMBER}
            </a>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-slate-500">
          © 2026 Scheduly. All rights reserved.
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <Header />
      {/* This padding prevents content hiding behind fixed header */}
      <div className="pt-16">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}
