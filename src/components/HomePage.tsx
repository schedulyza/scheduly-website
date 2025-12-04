import { Calendar, Bell, Users, Zap, MessageCircle, CheckCircle, ArrowRight, Smartphone, Sparkles, Quote } from 'lucide-react';
import { FREE_TRIAL_URL, SUBSCRIPTION_URL, WHATSAPP_URL } from '../constants/links';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: MessageCircle,
      title: 'WhatsApp-first booking',
      description: 'Customers send your WhatsApp message—personal or business—and Scheduly takes it from hello to confirmed booking.',
    },
    {
      icon: Calendar,
      title: 'Real-time calendar sync',
      description: 'Stay in sync with Google and Outlook calendars instantly—no double capturing or clashes.',
    },
    {
      icon: Bell,
      title: 'Smart reminders & follow-ups',
      description: 'Keep no-shows down with automated reminders and follow-ups sent to you and your customers.',
    },
    {
      icon: CheckCircle,
      title: 'Automatic confirmation messages',
      description: 'Send instant confirmations in the same WhatsApp chat where the booking started.',
    },
    {
      icon: Smartphone,
      title: 'No app downloads needed',
      description: 'Customers already live on WhatsApp—keep bookings inside their favourite chat app.',
    },
    {
      icon: Zap,
      title: 'Easy setup — running in 5 minutes',
      description: 'Connect your calendar and WhatsApp once, then go live in minutes with guided setup.',
    },
  ];

  const heroChatMessages = [
    {
      sender: 'customer',
      time: '17:32',
      text: "What's my schedule for the week?",
    },
    {
      sender: 'bot',
      time: '17:33',
      text: '📅 Your events:\nFri 14 November\n\n1. Assignment submission for Project management\n   14:00 – 15:00\n2. Cricket match between Midrand Cricket Club and Bakerton Stars\n   15:15 – 19:00\n3. Take Lesedi to the Randburg DTLC\n   10:00 – 14:00',
    },
    {
      sender: 'customer',
      time: '16:12',
      text: 'Cancel my coffee date with Rashad tomorrow',
    },
    {
      sender: 'bot',
      time: '16:12',
      text: '🗑️ Coffee date with Rashad has been removed from your schedule.',
    },
    {
      sender: 'customer',
      time: '20:34',
      text: 'Move my Assignment Submission for Project Management to tomorrow 12pm',
    },
    {
      sender: 'bot',
      time: '20:34',
      text: '✅ Assignment submission for Project management rescheduled for Friday, 14th November at 12:00 – 13:00.',
    },
    {
      sender: 'customer',
      time: '19:10',
      text: 'I have a coffee meeting with Eduvos tomorrow at 9am',
    },
    {
      sender: 'bot',
      time: '19:10',
      text: '✅ Coffee meeting with Eduvos scheduled for Monday 17 November at 09:00 – 10:00.',
    },
  ];

  const howItWorksSteps = [
    {
      number: '01',
      title: 'Customer sends a WhatsApp message',
      description: 'A customer says hi on your WhatsApp number—no download links, no portals.',
      icon: MessageCircle,
    },
    {
      number: '02',
      title: 'Scheduly chatbot collects booking details',
      description: 'Scheduly chats back, learns the service, time, and details in natural conversation.',
      icon: Users,
    },
    {
      number: '03',
      title: 'Booking is confirmed automatically',
      description: 'Scheduly confirms the slot instantly and sends the full booking summary.',
      icon: CheckCircle,
    },
    {
      number: '04',
      title: 'Appointment added to your calendar',
      description: 'Your calendar updates itself in real time—Google or Outlook—so nothing overlaps.',
      icon: Calendar,
    },
  ];

  const faqs = [
    {
      question: 'How do I get started with Scheduly?',
      answer: 'Sign up for the 14-day free trial, connect either your personal or business Google/Outlook calendar via secure OAuth, plug in your WhatsApp number, define your services and hours, and you\'re ready to take bookings.',
    },
    {
      question: 'Can I sync with both Google and Outlook?',
      answer: 'Yes. You can link any mix of Google and Outlook calendars—personal or business—and Scheduly keeps them in sync so double bookings don\'t happen.',
    },
    {
      question: 'What happens after the free trial?',
      answer: 'You get the full product for 14 days on us. After that you choose a plan that fits your team, starting at R149/month. Cancel before day 14 and you won\'t be charged.',
    },
    {
      question: 'Do customers need to install anything?',
      answer: 'No extra apps. Customers stay in WhatsApp from hello to confirmation, and Scheduly handles the booking conversation for you.',
    },
    {
      question: 'Can I cancel or change plans?',
      answer: 'Absolutely. Upgrade, downgrade, or cancel any time inside the app—your access runs until the end of the billing cycle you\'ve already paid for.',
    },
    {
      question: 'Is Scheduly secure?',
      answer: 'Yes. We use bank-level encryption, OAuth authentication, and never store your calendar passwords. You stay in control of your data.',
    },
  ];

  const testimonials = [
    {
      quote: 'We keep our bookings inside WhatsApp and Scheduly confirms every slot before we even look at the phone.',
      name: 'Lerato M.',
      role: 'Owner, Glow Beauty Studio',
    },
    {
      quote: 'My team shares a single inbox now. Scheduly catches the details and drops them straight into our shared calendar.',
      name: 'Thabo K.',
      role: 'Operations Lead, CapeFit Gyms',
    },
    {
      quote: 'No more back-and-forth. Customers choose a time, Scheduly handles reminders, and the stylists stay focused.',
      name: 'Amy R.',
      role: 'Salon Manager, The Chair Collective',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#10E0FF]/10 via-transparent to-[#147BFF]/10"></div>
        
        <div className="section-shell relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <span className="section-badge section-badge--hero inline-flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
              <span>Built for modern service teams</span>
            </span>
            <h1 className="section-heading section-heading--center mb-6">
              Turn every WhatsApp chat into a confirmed booking.
            </h1>
            <p className="section-subtitle text-center mb-10 leading-relaxed">
              Scheduly replies instantly, secures a time, and keeps everyone informed—so you stay focused on the service while your calendar fills itself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={FREE_TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#10E0FF] to-[#147BFF] text-white px-8 py-4 rounded-full hover:shadow-xl hover:shadow-[#10E0FF]/50 transition-all text-lg inline-flex items-center justify-center space-x-2 group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => onNavigate('pricing')}
                className="border-2 border-[#10E0FF] text-[#10E0FF] px-8 py-4 rounded-full hover:bg-[#10E0FF]/10 transition-all text-lg"
              >
                View Pricing
              </button>
            </div>
          </div>

          {/* Phone Mockup with Glow */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#10E0FF] to-[#147BFF] rounded-3xl blur-3xl opacity-30"></div>
            <div
              className="relative rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
              style={{
                backgroundImage: 'url(/hero-chat.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-[#050B17]/85 backdrop-blur-xl"></div>
              <div className="relative p-6 space-y-4">
                <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#10E0FF] to-[#147BFF] flex items-center justify-center text-white font-semibold">
                      S
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">Scheduly Bot</div>
                      <div className="text-xs text-[#94A3B8]">Always on</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#94A3B8]">WhatsApp</span>
                </div>
                <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
                  {heroChatMessages.map((message, index) => (
                    <div key={index} className={`flex ${message.sender === 'customer' ? 'justify-end' : 'justify-start'}`}>
                      <div className="max-w-[85%] space-y-1">
                        <div className={`text-[11px] uppercase tracking-[0.3em] text-center ${message.sender === 'customer' ? 'text-[#10E0FF]' : 'text-[#94A3B8]' }`}>
                          {message.sender === 'customer' ? 'You' : 'Scheduly'}
                        </div>
                        <div
                          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line shadow-lg shadow-black/20 ${
                            message.sender === 'customer'
                              ? 'bg-gradient-to-r from-[#10E0FF] to-[#147BFF] text-white rounded-br-sm'
                              : 'bg-[#111B2E]/90 text-[#E2E8F0] border border-white/10 rounded-bl-sm'
                          }`}
                        >
                          {message.text}
                        </div>
                        <div className={`text-[10px] text-[#94A3B8] ${message.sender === 'customer' ? 'text-right' : 'text-left'}`}>
                          {message.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-[#147BFF]/10 via-transparent to-[#10E0FF]/10"></div>
        <div className="section-shell relative z-10">
          <div className="flex justify-center mb-10">
            <span className="section-badge">
              <Sparkles className="w-4 h-4" />
              <span>Built for modern service teams</span>
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="audience-card p-10">
              <span className="text-[#10E0FF] text-xs uppercase tracking-[0.3em]">Solo & boutique</span>
              <h3 className="section-heading mt-4 mb-3 text-[1.75rem]">Keep every client conversation personal.</h3>
              <p className="text-[#94A3B8] mb-6">
                Run the business from your phone while Scheduly confirms bookings, sends reminders, and chases no-shows—all in the same chat thread.
              </p>
              <ul className="space-y-3 text-[#CBD5E1] text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#10E0FF] mt-0.5" />
                  <span>Respond professionally even when you\'re fully booked or offline.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#10E0FF] mt-0.5" />
                  <span>Offer WhatsApp as a booking channel without extra admin work.</span>
                </li>
              </ul>
            </div>
            <div className="audience-card p-10">
              <span className="text-[#147BFF] text-xs uppercase tracking-[0.3em]">Growing teams</span>
              <h3 className="section-heading mt-4 mb-3 text-[1.75rem]">Give every staff member a synced schedule.</h3>
              <p className="text-[#94A3B8] mb-6">
                Scheduly captures appointment details, pushes them to shared calendars, and keeps customers updated so your team focuses on delivery.
              </p>
              <ul className="space-y-3 text-[#CBD5E1] text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#147BFF] mt-0.5" />
                  <span>Share a single WhatsApp inbox while Scheduly routes confirmed bookings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#147BFF] mt-0.5" />
                  <span>Sync multiple calendars automatically across locations or team members.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="section-shell">
          <div className="text-center mb-16">
            <h2 className="section-heading section-heading--center mb-6">
              Everything you need to automate your scheduling.
            </h2>
            <p className="section-subtitle">
              Powerful features designed to save you time and delight your customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="feature-card p-8 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#10E0FF]/20 to-[#147BFF]/20 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#10E0FF]/30 transition-all">
                    <Icon className="w-7 h-7 text-[#10E0FF]" />
                  </div>
                  <h4 className="text-white mb-3">{feature.title}</h4>
                  <p className="text-[#94A3B8]">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 relative">
        <div className="section-shell">
          <div className="text-center mb-16">
            <h2 className="section-heading section-heading--center mb-6">How Scheduly Works</h2>
            <p className="section-subtitle">
              From first message to confirmed booking in seconds.
            </p>
          </div>

          <div className="grid how-it-works-grid gap-8">
            {howItWorksSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="step-card">
                  <div className="step-card__inner bg-[#0F172A] rounded-2xl border border-white/10 hover:border-[#10E0FF]/50 transition-all hover:shadow-xl hover:shadow-[#10E0FF]/20 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#10E0FF] to-[#147BFF] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#10E0FF]/30">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-[#10E0FF] mb-2">{step.number}</div>
                    <h4 className="step-card__title text-white">{step.title}</h4>
                    <p className="step-card__description text-[#94A3B8]">{step.description}</p>
                  </div>
                  
                  {/* Connecting Arrow */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="connector-arrow hidden lg:flex">
                      <span className="connector-arrow__line" />
                      <ArrowRight className="connector-arrow__icon" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 relative">
        <div className="section-shell">
          <div className="text-center mb-16">
            <h2 className="section-heading section-heading--center mb-6">Simple, transparent pricing</h2>
            <p className="section-subtitle">
              R149/month after your 14-day free trial. Every premium feature included.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#10E0FF] to-[#147BFF] rounded-3xl blur-xl opacity-20"></div>
              
              {/* Pricing Card */}
              <div className="pricing-card relative p-10 border-2 border-[#10E0FF]/50 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="section-heading section-heading--center text-3xl mb-4">Scheduly Premium</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-6xl gradient-text">R149</span>
                    <span className="text-[#94A3B8] ml-2">/ month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {[
                    'Unlimited WhatsApp bookings from your personal or business number',
                    'Two-way Google & Outlook calendar sync (personal or work)',
                    'Automated confirmations, reminders, and follow-ups',
                    'Custom services, buffers, and business hours',
                    'Advanced analytics and monthly performance summaries',
                    'Priority support with dedicated onboarding',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#10E0FF]/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-[#10E0FF]" />
                      </div>
                      <span className="text-[#CBD5E1]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={FREE_TRIAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-[#10E0FF] to-[#147BFF] text-white px-8 py-4 rounded-full hover:shadow-xl hover:shadow-[#10E0FF]/50 transition-all text-lg text-center"
                  >
                    Start 14-day free trial
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border-2 border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/5 transition-all text-lg text-center"
                  >
                    Chat with sales
                  </a>
                </div>

                <p className="text-[#94A3B8] text-sm text-center mt-6">
                  14-day free trial • No credit card required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0F1C]/60 to-transparent"></div>
        <div className="section-shell relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-heading section-heading--center mb-4">Businesses that trust Scheduly</h2>
            <p className="section-subtitle">Real teams keeping their bookings organised straight from WhatsApp.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card p-8 flex flex-col gap-6"
              >
                <div className="w-12 h-12 rounded-full bg-[#10E0FF]/15 flex items-center justify-center">
                  <Quote className="w-6 h-6 text-[#10E0FF]" />
                </div>
                <p className="text-white text-lg leading-relaxed">“{testimonial.quote}”</p>
                <div>
                  <div className="text-[#10E0FF] text-sm font-medium">{testimonial.name}</div>
                  <div className="text-[#94A3B8] text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative">
        <div className="section-shell max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="section-heading section-heading--center mb-6">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about Scheduly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-card p-8"
              >
                <h5 className="text-white mb-3">{faq.question}</h5>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('faq')}
              className="text-[#10E0FF] hover:text-[#147BFF] transition-colors inline-flex items-center space-x-2"
            >
              <span>View all questions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="section-shell max-w-4xl text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#10E0FF] to-[#147BFF] rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-[#0F172A] rounded-3xl p-16 border border-[#10E0FF]/30">
              <h2 className="section-heading section-heading--center mb-6">Ready to hand over the WhatsApp back-and-forth?</h2>
              <p className="section-subtitle mb-10">
                Launch a 14-day free trial and watch Scheduly confirm bookings while you focus on delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={FREE_TRIAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#10E0FF] to-[#147BFF] text-white px-8 py-4 rounded-full hover:shadow-xl hover:shadow-[#10E0FF]/50 transition-all text-lg inline-flex items-center justify-center space-x-2 group"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/5 transition-all text-lg inline-flex items-center justify-center"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
