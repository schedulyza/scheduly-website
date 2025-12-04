import { CheckCircle } from 'lucide-react';
import { FREE_TRIAL_URL, WHATSAPP_URL } from '../constants/links';

export function PricingPage() {
  const planFeatures = [
    'Unlimited WhatsApp bookings from your personal or business number',
    'Two-way Google & Outlook calendar sync (personal or work accounts)',
    'Automated confirmations, reminders, and follow-ups',
    'Custom services, durations, buffers, and business hours',
    'Multi-staff scheduling with shared inbox routing',
    'Advanced analytics and monthly performance summaries',
    'API access and custom integrations included',
    'Priority support with a dedicated onboarding call',
  ];

  const highlights = [
    {
      title: 'Launch in minutes',
      description: 'Guided setup walks you through connecting calendars and WhatsApp—no technical skills needed.',
    },
    {
      title: 'Stay organised automatically',
      description: 'Scheduly keeps calendars, staff availability, and customer messaging in sync in real time.',
    },
    {
      title: 'Grow without limits',
      description: 'Add unlimited services, staff, and bookings without paying extra per user or message.',
    },
  ];

  return (
    <div className="min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-white mb-6">One plan with everything included</h1>
          <p className="text-[#CBD5E1] text-xl max-w-2xl mx-auto mb-8">
            Pay R149/month after your 14-day free trial and unlock every premium feature—no confusing tiers or upsells.
          </p>
          <div className="inline-flex items-center space-x-2 bg-[#0F172A] px-6 py-3 rounded-full border border-white/10">
            <CheckCircle className="w-5 h-5 text-[#10E0FF]" />
            <span className="text-[#CBD5E1]">No long-term contracts. Cancel anytime.</span>
          </div>
        </div>

        {/* Single Plan */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#10E0FF] to-[#147BFF] rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-[#0F172A] rounded-3xl p-12 border border-[#10E0FF]/30 shadow-2xl">
              <div className="text-center mb-10">
                <h2 className="text-white text-3xl mb-3">Scheduly Premium</h2>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-6xl gradient-text">R149</span>
                  <span className="text-[#94A3B8] text-lg">/ month</span>
                </div>
                <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
                  Everything we offer—calendar sync, automations, integrations, analytics, support—rolled into one simple subscription after your free trial.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {planFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#10E0FF]/15 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-[#10E0FF]" />
                    </div>
                    <span className="text-[#CBD5E1] text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={FREE_TRIAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#10E0FF] to-[#147BFF] text-white px-8 py-4 rounded-full hover:shadow-xl hover:shadow-[#10E0FF]/50 transition-all text-lg text-center"
                >
                  Start 14-day free trial
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/5 transition-all text-lg text-center"
                >
                  Chat with sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-32">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-[#0F172A] p-8 rounded-2xl border border-white/10 hover:border-[#10E0FF]/30 transition-all"
            >
              <h4 className="text-white mb-3">{item.title}</h4>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-32">
          <h3 className="text-white text-center mb-12">Pricing questions, answered</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#0F172A] p-8 rounded-2xl border border-white/10">
              <h5 className="text-white mb-2">Can I cancel or pause my subscription?</h5>
              <p className="text-[#94A3B8] text-sm">
                Yes. End or pause your subscription any time inside the billing portal—your access stays active until the current cycle finishes.
              </p>
            </div>
            <div className="bg-[#0F172A] p-8 rounded-2xl border border-white/10">
              <h5 className="text-white mb-2">What payment methods do you accept?</h5>
              <p className="text-[#94A3B8] text-sm">
                Pay with major credit cards, debit cards, or EFT. We keep billing simple and transparent.
              </p>
            </div>
            <div className="bg-[#0F172A] p-8 rounded-2xl border border-white/10">
              <h5 className="text-white mb-2">Is there a setup fee?</h5>
              <p className="text-[#94A3B8] text-sm">
                No setup fees and no surprise charges. What you see is what you pay.
              </p>
            </div>
            <div className="bg-[#0F172A] p-8 rounded-2xl border border-white/10">
              <h5 className="text-white mb-2">What happens after the trial?</h5>
              <p className="text-[#94A3B8] text-sm">
                When the 14-day trial ends, your account rolls onto the R149/month plan automatically. Cancel before day 14 and you won’t be charged.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#10E0FF] to-[#147BFF] rounded-3xl blur-2xl opacity-20"></div>
          <div className="relative bg-[#0F172A] rounded-3xl p-12 border border-[#10E0FF]/30 text-center">
            <h3 className="text-white mb-4">Need help before you sign up?</h3>
            <p className="text-[#CBD5E1] mb-8 max-w-2xl mx-auto">
              Tell us how your team works and we’ll walk you through how Scheduly fits into your existing WhatsApp and calendar setup.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#10E0FF] to-[#147BFF] text-white px-8 py-4 rounded-full hover:shadow-xl hover:shadow-[#10E0FF]/50 transition-all inline-block"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
