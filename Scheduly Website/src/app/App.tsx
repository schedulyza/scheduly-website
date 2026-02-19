import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import logoImage from "../assets/Logo BG removed.png";
import { ArrowUp, Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./components/ui/sheet";

export default function App() {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

        <a
          href="https://wandile-nexora.app.n8n.cloud/webhook/trial"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
        >
          Start Free Trial
        </a>

        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[#0a0e27] text-white border-white/10"
          >
            <SheetHeader className="pb-2">
              <SheetTitle className="text-white">Menu</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-2 px-4">
              <SheetClose asChild>
                <Link
                  to="/"
                  className={`py-3 rounded-xl px-3 transition-colors ${
                    location.pathname === "/" ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  Home
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  to="/contact"
                  className={`py-3 rounded-xl px-3 transition-colors ${
                    location.pathname === "/contact" ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  Contact
                </Link>
              </SheetClose>
            </div>

            <div className="mt-4 px-4 flex flex-col gap-3">
              <a
                href="https://wandile-nexora.app.n8n.cloud/webhook/trial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 text-center font-semibold"
              >
                Start Free Trial
              </a>

              <a
                href="https://wandile-nexora.app.n8n.cloud/webhook/pay/start"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 rounded-full border-2 border-white/20 hover:border-white/40 transition-all text-center font-semibold"
              >
                Subscribe
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );

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

          <div className="flex flex-col items-center md:items-end gap-4">
            <a href="mailto:admin@scheduly.co.za" className="text-slate-400 hover:text-white transition-colors">
              admin@scheduly.co.za
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

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/10 backdrop-blur-sm shadow-lg shadow-black/20 hover:bg-white/15 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/30 ${
          showScrollTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <Footer />
    </div>
  );
}
