import { Link, useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import logoImage from "../assets/Logo BG removed.png";

export default function App() {
  const location = useLocation();

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
          href="https://wandile-nexora.app.n8n.cloud/webhook/choose"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
        >
          Start Free Trial
        </a>
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
      <Footer />
    </div>
  );
}
