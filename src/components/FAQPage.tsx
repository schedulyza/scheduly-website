import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

type FAQPageProps = {
  onNavigate?: (page: string) => void;
};

export function FAQPage({ onNavigate }: FAQPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'How do I get started with Scheduly?',
          answer: 'Start a free 14-day trial, connect your personal or business Google/Outlook calendar through secure OAuth, add your WhatsApp number, configure services and availability, and you\'re ready to accept bookings.',
        },
        {
          question: 'Do I need a WhatsApp Business account?',
          answer: 'No. Scheduly works with both personal and business WhatsApp numbers. If you prefer a Business profile we\'ll guide you through it, but it isn\'t a requirement.',
        },
        {
          question: 'How long does setup take?',
          answer: 'Most businesses complete the setup process in less than 10 minutes. This includes connecting your calendar, setting up WhatsApp, and configuring your services.',
        },
        {
          question: 'Is there a limit to how many services I can offer?',
          answer: 'No limits! You can add as many services as your business offers. Each service can have its own duration, pricing, and availability settings.',
        },
      ],
    },
    {
      category: 'Features & Functionality',
      questions: [
        {
          question: 'Which calendars does Scheduly support?',
          answer: 'Scheduly supports both personal and work Google/Outlook calendars. We rely on secure OAuth authentication so your login details stay private.',
        },
        {
          question: 'Can customers reschedule or cancel appointments?',
          answer: 'Yes! Customers can easily reschedule or cancel appointments directly through WhatsApp. They simply need to send a message or use the quick action buttons in their booking confirmation.',
        },
        {
          question: 'How do reminders work?',
          answer: 'Automated reminders are sent via WhatsApp at intervals you choose (e.g., 24 hours before, 1 hour before). Both you and your customer receive reminders to reduce no-shows.',
        },
        {
          question: 'Can I block out specific times on my calendar?',
          answer: 'Absolutely! Any events you add to your connected calendar will automatically block those time slots from being bookable. Scheduly syncs in real-time.',
        },
        {
          question: 'Does Scheduly support multiple team members?',
          answer: 'Yes! The Business and Premium plans support multiple users. Each team member can have their own calendar and availability settings.',
        },
      ],
    },
    {
      category: 'Pricing & Billing',
      questions: [
        {
          question: 'Is there a free trial?',
          answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start.',
        },
        {
          question: 'Can I change my plan later?',
          answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any differences.',
        },
        {
          question: 'What happens if I exceed my monthly booking limit?',
          answer: 'If you\'re approaching your limit, we\'ll notify you. You can either upgrade to a higher plan or wait until your next billing cycle. We won\'t cut off your service mid-month.',
        },
        {
          question: 'Do you offer refunds?',
          answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with Scheduly, contact us for a full refund within 30 days of your purchase.',
        },
      ],
    },
    {
      category: 'Security & Privacy',
      questions: [
        {
          question: 'Is my data secure?',
          answer: 'Yes! We use bank-level encryption (256-bit SSL) to protect your data. All calendar connections use OAuth, meaning we never store your calendar credentials. Your data is encrypted both in transit and at rest.',
        },
        {
          question: 'Do you store customer information?',
          answer: 'We only store the minimum information needed to facilitate bookings (phone number, name, and booking details). We comply with POPIA and GDPR regulations.',
        },
        {
          question: 'Can I export my data?',
          answer: 'Yes! You can export all your booking data, customer information, and analytics at any time from your dashboard.',
        },
      ],
    },
    {
      category: 'Technical Support',
      questions: [
        {
          question: 'What kind of support do you offer?',
          answer: 'All plans include email support. Business plans get priority support during business hours (9am-5pm), and Premium plans get 24/7 support via email, chat, and phone.',
        },
        {
          question: 'What if I need help with setup?',
          answer: 'We have comprehensive documentation and video tutorials. Premium plan subscribers also get a dedicated onboarding call with our team.',
        },
      ],
    },
  ];

  const allQuestions = faqs.flatMap((category, categoryIndex) =>
    category.questions.map((q, qIndex) => ({
      ...q,
      category: category.category,
      globalIndex: categoryIndex * 10 + qIndex,
    }))
  );

  return (
    <div className="min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-br from-[#10E0FF] to-[#147BFF] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#10E0FF]/30">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-[#CBD5E1] text-xl max-w-2xl mx-auto">
            Everything you need to know about Scheduly. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-white mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.questions.map((item, qIndex) => {
                  const globalIndex = categoryIndex * 10 + qIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={qIndex}
                      className="bg-[#0F172A] rounded-2xl border border-white/10 hover:border-[#10E0FF]/30 transition-all overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                      >
                        <h5 className="text-white pr-8">{item.question}</h5>
                        <ChevronDown
                          className={`w-5 h-5 text-[#10E0FF] flex-shrink-0 transition-transform ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5 pt-2">
                          <p className="text-[#94A3B8] leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#10E0FF] to-[#147BFF] rounded-3xl blur-2xl opacity-20"></div>
          <div className="relative bg-[#0F172A] rounded-3xl p-12 border border-[#10E0FF]/30 text-center">
            <h3 className="text-white mb-4">Still have questions?</h3>
            <p className="text-[#CBD5E1] mb-8 max-w-xl mx-auto">
              Our support team is here to help. Get in touch and we'll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate?.('contact')}
                className="bg-gradient-to-r from-[#10E0FF] to-[#147BFF] text-white px-8 py-4 rounded-full hover:shadow-xl hover:shadow-[#10E0FF]/50 transition-all"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mt-16">
          <h4 className="text-white mb-6 text-center">Popular Topics</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <button className="bg-[#0F172A] p-6 rounded-2xl border border-white/10 hover:border-[#10E0FF]/50 transition-all text-left group">
              <div className="text-[#10E0FF] mb-2 group-hover:text-[#147BFF] transition-colors">Getting Started</div>
              <div className="text-[#94A3B8] text-sm">Learn the basics</div>
            </button>
            <button className="bg-[#0F172A] p-6 rounded-2xl border border-white/10 hover:border-[#10E0FF]/50 transition-all text-left group">
              <div className="text-[#10E0FF] mb-2 group-hover:text-[#147BFF] transition-colors">Integrations</div>
              <div className="text-[#94A3B8] text-sm">Connect your tools</div>
            </button>
            <button className="bg-[#0F172A] p-6 rounded-2xl border border-white/10 hover:border-[#10E0FF]/50 transition-all text-left group">
              <div className="text-[#10E0FF] mb-2 group-hover:text-[#147BFF] transition-colors">Billing</div>
              <div className="text-[#94A3B8] text-sm">Manage your plan</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
