import { useState, useEffect } from 'react';
import {
  MessageCircle,
  Calendar,
  Clock,
  Zap,
  CheckCircle2,
  Smartphone,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { ContactPage } from './components/ContactPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';
import logoImage from "../assets/logo.png";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact' | 'privacy' | 'terms'>('home');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToPricing = () => {
    setCurrentPage('home');
    setTimeout(() => {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Shared Header Component
  const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <img src={logoImage} alt="Scheduly Logo" className="w-8 h-8 rounded-lg" />
          <span className="font-bold text-xl">Scheduly</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => setCurrentPage('home')}
            className={`transition-colors ${
              currentPage === 'home' ? 'text-white' : 'text-slate-300 hover:text-white'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className={`transition-colors ${
              currentPage === 'contact' ? 'text-white' : 'text-slate-300 hover:text-white'
            }`}
          >
            Contact
          </button>
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

  // Shared Footer Component
  const Footer = () => (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img src={logoImage} alt="Scheduly Logo" className="w-8 h-8 rounded-lg" />
              <span className="font-bold text-xl">Scheduly</span>
            </button>
            <p className="text-slate-400 text-sm">
              WhatsApp-first scheduling for modern service teams
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <a
              href="mailto:admin@scheduly.co.za"
              className="text-slate-400 hover:text-white transition-colors"
            >
              admin@scheduly.co.za
            </a>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setCurrentPage('privacy')}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setCurrentPage('terms')}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-slate-500">
          © 2026 Scheduly. All rights reserved.
        </div>
      </div>
    </footer>
  );

  // Render current page
  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen bg-[#0a0e27] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
        <Header />
        <ContactPage onNavigate={(page) => setCurrentPage(page)} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-[#0a0e27] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
        <Header />
        <PrivacyPolicyPage />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div className="min-h-screen bg-[#0a0e27] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
        <Header />
        <TermsOfServicePage />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            {/* Label pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="text-xs uppercase tracking-wider text-cyan-400">
                Built for Modern Service Teams
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Turn every WhatsApp chat into a{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                confirmed booking
              </span>
              .
            </h1>

            {/* Subheading */}
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Scheduly replies instantly on WhatsApp, confirms appointments, syncs calendars, and
              sends reminders automatically.
            </p>

            {/* CTAs */}
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

          {/* Phone mockup with WhatsApp chat */}
          <div className="max-w-sm mx-auto">
            <div className="relative">
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-[3rem] blur-2xl scale-105" />

              {/* Phone frame */}
              <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl border border-white/10">
                {/* Phone notch */}
                <div className="bg-black rounded-[2.5rem] overflow-hidden">
                  <div className="h-8 bg-black flex items-center justify-center">
                    <div className="w-32 h-6 bg-black rounded-b-2xl" />
                  </div>

                  {/* WhatsApp header */}
                  <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Scheduly</div>
                      <div className="text-xs text-slate-300">Online</div>
                    </div>
                  </div>

                  {/* Chat messages */}
                  <div className="bg-[#0d1117] p-4 space-y-3 min-h-[400px]">
                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-[#005c4b] rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                        <p className="text-sm">Hi! I need to book a haircut for tomorrow at 2pm</p>
                        <span className="text-xs text-slate-400 mt-1 block">10:23 AM</span>
                      </div>
                    </div>

                    {/* Scheduly response */}
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

                    {/* User confirmation */}
                    <div className="flex justify-end">
                      <div className="bg-[#005c4b] rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                        <p className="text-sm">Yes, please!</p>
                        <span className="text-xs text-slate-400 mt-1 block">10:24 AM</span>
                      </div>
                    </div>

                    {/* Scheduly confirmation */}
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

      {/* How It Works */}
      <section className="py-20 px-6 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-xs uppercase tracking-wider text-cyan-400">How It Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Effortless scheduling in 4 simple steps
            </h2>
            <p className="text-slate-400 text-lg">
              From message to confirmed appointment in seconds
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MessageCircle,
                step: '01',
                title: 'Customer Messages',
                description: 'Your client sends a WhatsApp message requesting an appointment',
              },
              {
                icon: Zap,
                step: '02',
                title: 'Smart Processing',
                description: 'Scheduly understands the request and collects booking details',
              },
              {
                icon: CheckCircle2,
                step: '03',
                title: 'Auto-Confirmation',
                description: 'Booking is confirmed automatically with all details clarified',
              },
              {
                icon: Calendar,
                step: '04',
                title: 'Calendar Sync',
                description: 'Appointment added to your calendar with automatic reminders',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">
                    Step {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 relative">
        <div className="absolute left-0 top-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-xs uppercase tracking-wider text-cyan-400">Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything you need to automate scheduling
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: MessageCircle,
                title: 'WhatsApp-First Booking',
                description: 'Customers book directly via WhatsApp - no app downloads required',
              },
              {
                icon: Calendar,
                title: 'Real-Time Calendar Sync',
                description: 'Seamlessly syncs with Google Calendar and Outlook in real-time',
              },
              {
                icon: Clock,
                title: 'Smart Reminders',
                description: 'Automatic follow-ups and reminders to reduce no-shows',
              },
              {
                icon: CheckCircle2,
                title: 'Automatic Confirmations',
                description: 'Instant booking confirmations sent to both you and your clients',
              },
              {
                icon: Smartphone,
                title: 'No App Downloads',
                description: 'Works entirely through WhatsApp - familiar and convenient',
              },
              {
                icon: Zap,
                title: 'Setup in Minutes',
                description: 'Get started quickly with our simple onboarding process',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 relative" id="pricing">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-xs uppercase tracking-wider text-cyan-400">Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-slate-400 text-lg">Start with a 14-day free trial. No credit card required.</p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-5xl font-bold">R149</span>
                    <span className="text-slate-400">/ month</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    <span className="text-sm text-cyan-400">14-day free trial included</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    'Unlimited WhatsApp bookings',
                    'Google & Outlook calendar sync',
                    'Automatic reminders & follow-ups',
                    'Smart booking confirmations',
                    'Real-time availability updates',
                    'Priority customer support',
                    'Cancel anytime',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wandile-nexora.app.n8n.cloud/webhook/choose"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 font-semibold text-center"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 relative">
        <div className="absolute left-0 top-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-xs uppercase tracking-wider text-cyan-400">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently asked questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'How does WhatsApp scheduling work?',
                answer:
                  'Scheduly integrates directly with WhatsApp Business API. When customers message your WhatsApp number, our AI-powered assistant understands their booking request, confirms details, and automatically schedules the appointment in your calendar.',
              },
              {
                question: 'Can I sync Google and Outlook calendars?',
                answer:
                  'Yes! Scheduly seamlessly syncs with both Google Calendar and Outlook. All bookings are automatically added to your calendar in real-time, and we check your availability before confirming appointments.',
              },
              {
                question: 'What happens after the free trial?',
                answer:
                  'After your 14-day free trial, you can subscribe to continue using Scheduly at R149/month. You can cancel anytime with no penalties. If you choose not to subscribe, your service will simply stop at the end of the trial period.',
              },
              {
                question: 'Do customers need to install anything?',
                answer:
                  "No! That's the beauty of Scheduly. Your customers simply send a WhatsApp message to book - they don't need to download any apps or create accounts. It works with the WhatsApp app they already have.",
              },
              {
                question: 'Can I cancel anytime?',
                answer:
                  'Absolutely. You can cancel your subscription at any time from your account settings. There are no long-term contracts or cancellation fees.',
              },
              {
                question: 'Is Scheduly secure?',
                answer:
                  'Yes. We take security seriously. All data is encrypted in transit and at rest. We comply with WhatsApp Business API policies and follow industry-standard security practices to protect your information and your customers data.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to automate your scheduling?
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Join modern service teams using Scheduly to turn WhatsApp chats into confirmed bookings.
            Start your free trial today.
          </p>
          <a
            href="https://wandile-nexora.app.n8n.cloud/webhook/choose"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 font-semibold text-lg"
          >
            Start Free Trial - 14 Days Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
