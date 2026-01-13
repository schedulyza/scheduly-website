import { useState } from "react";
import {
  MessageCircle,
  Calendar,
  Clock,
  Zap,
  CheckCircle2,
  Smartphone,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/Logo BG removed.png";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) pricingSection.scrollIntoView({ behavior: "smooth" });
  };

  const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src={logoImage} alt="Scheduly Logo" className="w-8 h-8 rounded-lg" />
          <span className="font-bold text-xl">Scheduly</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white transition-colors">
            Home
          </Link>
          <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="text-xs uppercase tracking-wider text-cyan-400">
                Built for Modern Service Teams
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Turn every WhatsApp chat into a{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                confirmed booking
              </span>
              .
            </h1>

            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Scheduly replies instantly on WhatsApp, confirms appointments, syncs calendars, and
              sends reminders automatically.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wandile-nexora.app.n8n.cloud/webhook/choose"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 font-semibold"
              >
                Start Free Trial
              </a>
              <button
                onClick={scrollToPricing}
                className="px-8 py-4 rounded-full border-2 border-white/20 hover:border-white/40 transition-all font-semibold"
              >
                View Pricing
              </button>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="max-w-sm mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-[3rem] blur-2xl scale-105" />
              <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl border border-white/10">
                <div className="bg-black rounded-[2.5rem] overflow-hidden">
                  <div className="h-8 bg-black flex items-center justify-center">
                    <div className="w-32 h-6 bg-black rounded-b-2xl" />
                  </div>

                  <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Scheduly</div>
                      <div className="text-xs text-slate-300">Online</div>
                    </div>
                  </div>

                  <div className="bg-[#0d1117] p-4 space-y-3 min-h-[400px]">
                    <div className="flex justify-end">
                      <div className="bg-[#005c4b] rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                        <p className="text-sm">Hi! I need to book a haircut for tomorrow at 2pm</p>
                        <span className="text-xs text-slate-400 mt-1 block">10:23 AM</span>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="bg-[#1f2937] rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                        <p className="text-sm">
                          Perfect! I can book you for a haircut tomorrow at 2:00 PM. Let me confirm
                          the details:
                        </p>
                        <div className="mt-2 space-y-1 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-cyan-400" />
                            <span>Tomorrow, Jan 9, 2026</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-cyan-400" />
                            <span>2:00 PM</span>
                          </div>
                        </div>
                        <p className="text-sm mt-2">Should I confirm this booking?</p>
                        <span className="text-xs text-slate-400 mt-1 block">10:23 AM</span>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-[#005c4b] rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                        <p className="text-sm">Yes, please!</p>
                        <span className="text-xs text-slate-400 mt-1 block">10:24 AM</span>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="bg-[#1f2937] rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                        <p className="text-sm flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-400" />
                          All set! Your haircut is booked for tomorrow at 2:00 PM.
                        </p>
                        <p className="text-sm mt-2 text-slate-400">
                          ✓ Added to your Google Calendar
                          <br />✓ Reminder set for 1 hour before
                        </p>
                        <span className="text-xs text-slate-400 mt-1 block">10:24 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Keep the rest of your sections exactly the same:
          How It Works, Features, Pricing, FAQ, Final CTA
          (copy/paste them from your App.tsx below this comment)
      */}

      <Footer />
    </div>
  );
}
