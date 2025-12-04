import { MessageCircle, Calendar, CheckCircle, Bell, Users, Smartphone, Cloud, Lock } from 'lucide-react';
import { FREE_TRIAL_URL, WHATSAPP_URL } from '../constants/links';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HowItWorksPage() {
  const steps = [
    {
      icon: Cloud,
      title: 'Start your free trial',
      description: 'Pick Scheduly Premium, launch your 14-day trial, and unlock automation without entering card details.',
      details: [
        'No credit card required to get started',
        'Choose personal or business workspace',
        'Guided onboarding inside WhatsApp and web',
        'Upgrade via secure PayFast checkout when ready',
      ],
    },
    {
      icon: Calendar,
      title: 'Choose the calendar you want Scheduly to manage',
      description: 'Sign in with Google or Outlook using secure OAuth and decide which calendars Scheduly can create, cancel, or reschedule events on.',
      details: [
        'Works with personal or work calendars',
        'Grant access per-calendar, not whole accounts',
        'Real-time sync keeps availability accurate',
        'Full audit trail of every change',
      ],
    },
    {
      icon: Smartphone,
      title: 'Link your WhatsApp number',
      description: 'Tell Scheduly which personal or business WhatsApp number to power. We walk you through QR or API setup in a few taps.',
      details: [
        'Supports WhatsApp Personal or Business',
        'No additional devices required',
        'Custom greeting and routing rules',
        'Instant agent handover when you need it',
      ],
    },
    {
      icon: Users,
      title: 'Configure services and rules',
      description: 'Define services, durations, buffers, and operating hours so every reply sounds like your team.',
      details: [
        'Flexible service catalog and pricing',
        'Smart booking windows and buffers',
        'Automations for cancellations or reschedules',
        'Team routing and assignment rules',
      ],
    },
    {
      icon: MessageCircle,
      title: 'Customers book over WhatsApp',
      description: 'People chat like normal while Scheduly handles questions, suggests times, and confirms the booking.',
      details: [
        'Natural conversation flow',
        'Real-time availability check',
        'Instant confirmations and updates',
        'Collects every booking detail automatically',
      ],
    },
    {
      icon: Bell,
      title: 'Everything stays in sync',
      description: 'Scheduly updates your calendar, sends reminders, and logs every change so nothing slips through.',
      details: [
        'Two-way sync across calendars',
        'Automated reminders and follow-ups',
        'Easy cancel or reschedule commands',
        'Audit-friendly reporting and exports',
      ],
    },
  ];

  const bookingFlow = [
    {
      title: 'Daily overview',
      message: "What's my schedule for the week?",
      sender: 'customer',
    },
    {
      title: 'Scheduly replies in seconds',
      message:
        '📅 Your events:\nFri 14 November\n\n1. Assignment submission for Project management\n   14:00 – 15:00\n2. Cricket match between Midrand Cricket Club and Bakerton Stars\n   15:15 – 19:00\n3. Take Lesedi to the Randburg DTLC\n   10:00 – 14:00',
      sender: 'bot',
    },
    {
      title: 'Cancel a booking',
      message: 'Cancel my coffee date with Rashad tomorrow',
      sender: 'customer',
    },
    {
      title: 'Cancellation done',
      message: '🗑️ Coffee date with Rashad has been removed from your schedule.',
      sender: 'bot',
    },
    {
      title: 'Reschedule request',
      message: 'Move my Assignment Submission for Project Management to tomorrow 12pm',
      sender: 'customer',
    },
    {
      title: 'Reschedule confirmed',
      message:
        '✅ Assignment submission for Project management rescheduled for Friday, 14th November at 12:00 – 13:00.',
      sender: 'bot',
    },
    {
      title: 'Add a new meeting',
      message: 'I have a coffee meeting with Eduvos tomorrow at 9am',
      sender: 'customer',
    },
    {
      title: 'Meeting booked',
      message: '✅ Coffee meeting with Eduvos scheduled for Monday 17 November at 09:00 – 10:00.',
      sender: 'bot',
    },
    {
      title: 'More plans',
      message: 'I have coffee with Shanya at Sandton City Barista on Wednesday at 10am',
      sender: 'customer',
    },
    {
      title: 'Confirmed instantly',
      message: '✅ Coffee with Shanya scheduled for Wednesday 19 November at 10:00 – 11:00.',
      sender: 'bot',
    },
    {
      title: 'Keep the calendar updated',
      message: 'Soccer practice tomorrow at 6pm',
      sender: 'customer',
    },
    {
      title: 'Synced automatically',
      message: '✅ Soccer practice scheduled for Tuesday 18 November at 18:00 – 19:00.',
      sender: 'bot',
    },
    {
      title: 'Add a conference',
      message: 'Conference at Bryanston Convention Center, Friday at 12pm to 5pm',
      sender: 'customer',
    },
    {
      title: 'All set',
      message: '✅ Conference scheduled for Friday 21 November at 12:00 – 17:00.',
      sender: 'bot',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-white mb-6">Watch Scheduly take a booking from hello to confirmed</h1>
            <p className="text-[#CBD5E1] text-xl max-w-2xl mx-auto">
              Set it up once, keep everything inside WhatsApp, and let your calendar update itself in real time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#0F172A] p-6 rounded-2xl border border-white/10 hover:border-[#10E0FF]/50 transition-all">
              <div className="w-12 h-12 bg-[#10E0FF]/20 rounded-xl flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-[#10E0FF]" />
              </div>
              <h5 className="text-white mb-2">Cloud-Based</h5>
              <p className="text-[#94A3B8] text-sm">No installation needed. Works from any device, anywhere.</p>
            </div>
            <div className="bg-[#0F172A] p-6 rounded-2xl border border-white/10 hover:border-[#10E0FF]/50 transition-all">
              <div className="w-12 h-12 bg-[#10E0FF]/20 rounded-xl flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-[#10E0FF]" />
              </div>
              <h5 className="text-white mb-2">Secure</h5>
              <p className="text-[#94A3B8] text-sm">Bank-level encryption and OAuth authentication.</p>
            </div>
            <div className="bg-[#0F172A] p-6 rounded-2xl border border-white/10 hover:border-[#10E0FF]/50 transition-all">
              <div className="w-12 h-12 bg-[#10E0FF]/20 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-[#10E0FF]" />
              </div>
              <h5 className="text-white mb-2">Easy Setup</h5>
              <p className="text-[#94A3B8] text-sm">Get started in less than 10 minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">Set up in six guided steps</h2>
            <p className="text-[#CBD5E1] text-xl max-w-2xl mx-auto">
              Scheduly does the heavy lifting—just follow the prompts and go live in minutes.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 items-center`}
                >
                  <div className="flex-1">
                    <div className="bg-[#0F172A] p-8 rounded-2xl border border-white/10 hover:border-[#10E0FF]/30 transition-all">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#10E0FF] to-[#147BFF] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#10E0FF]/30">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-[#10E0FF] mb-1">Step {index + 1}</div>
                          <h3 className="text-white">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-[#94A3B8] mb-6">{step.description}</p>
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-[#10E0FF] flex-shrink-0 mt-0.5" />
                            <span className="text-[#CBD5E1] text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#10E0FF] to-[#147BFF] rounded-2xl blur-2xl opacity-20"></div>
                      <ImageWithFallback
                        src={
                          index % 2 === 0
                            ? 'https://images.unsplash.com/photo-1554325103-6985922f9a41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxlbmRhciUyMHNjaGVkdWxpbmclMjBkZXNrfGVufDF8fHx8MTc2NDI2MDc5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                            : 'https://images.unsplash.com/photo-1625461291092-13d0c45608b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc2NDI1MTM5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                        }
                        alt={step.title}
                        className="rounded-2xl shadow-2xl w-full h-64 object-cover object-center relative z-10"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WhatsApp Booking Flow */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">A WhatsApp conversation that books itself</h2>
            <p className="text-[#CBD5E1] text-xl max-w-2xl mx-auto">
              Here's what your customers experience when they message your WhatsApp number.
            </p>
          </div>

          <div className="bg-[#0F172A] rounded-3xl shadow-2xl overflow-hidden border border-white/10">
            {/* Phone Header */}
            <div className="bg-gradient-to-r from-[#10E0FF] to-[#147BFF] p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div>Scheduly Bot</div>
                  <div className="text-xs text-white/80">Online</div>
                </div>
              </div>
            </div>
            {/* Chat Messages */}
            <div className="p-6 space-y-4 bg-[#050B17] max-h-[520px] overflow-y-auto">
              {bookingFlow.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-xs text-[#94A3B8] text-center uppercase tracking-[0.2em]">{item.title}</div>
                  <div
                    className={`flex ${
                      item.sender === 'customer' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                        item.sender === 'customer'
                          ? 'bg-[#1E293B] text-white rounded-br-sm border border-white/10'
                          : 'bg-[#111827] text-[#E2E8F0] border border-white/5 rounded-bl-sm'
                      }`}
                    >
                      <div className="whitespace-pre-line text-sm leading-relaxed">{item.message}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to let Scheduly handle the back-and-forth?</h2>
          <p className="text-[#CBD5E1] text-xl mb-8 max-w-2xl mx-auto">
            Join the teams that let WhatsApp conversations convert themselves into organised calendars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={FREE_TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#10E0FF] to-[#147BFF] text-white px-8 py-4 rounded-full hover:shadow-xl hover:shadow-[#10E0FF]/50 transition-all text-center"
            >
              Start Free Trial
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#10E0FF] text-[#10E0FF] px-8 py-4 rounded-full hover:bg-[#10E0FF]/10 transition-all text-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
