import {
  Mail,
  Clock,
  MapPin,
  CheckCircle2,
  Send,
  MessageCircle,
} from 'lucide-react';
import { useState } from 'react';

interface ContactPageProps {
  onNavigate?: (page: 'privacy') => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be connected to email delivery later
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white pt-24 pb-20 px-6">
      {/* Background glow effects */}
      <div className="fixed top-20 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
            <span className="text-xs uppercase tracking-wider text-cyan-400">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">We're here to help</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have questions about Scheduly? Our team is ready to assist you with any inquiries.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* LEFT SIDE - Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Response Badge */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Quick Response</h3>
                    <p className="text-sm text-slate-400">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp Us</h3>
                  <p className="text-sm text-slate-400 mb-2">
                    Message us directly on WhatsApp
                  </p>
                  <a
                    href="https://wa.me/27068811760"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    +27 06 881 1760
                  </a>
                </div>
              </div>
            </div>

            {/* Email Us */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-sm text-slate-400 mb-2">
                    Our support team is available to help
                  </p>
                  <a
                    href="mailto:admin@scheduly.co.za"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    admin@scheduly.co.za
                  </a>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-3">Office Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Monday – Friday</span>
                      <span className="text-white">9:00 AM – 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Saturday</span>
                      <span className="text-white">10:00 AM – 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Sunday</span>
                      <span className="text-white">Closed</span>
                    </div>
                    <div className="pt-2 border-t border-white/10 mt-3">
                      <span className="text-slate-500 text-xs">Timezone: SAST (UTC +2)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-sm text-slate-400">Johannesburg, South Africa</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="lg:col-span-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-3xl blur-xl" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Get in Touch</h2>
                <p className="text-slate-400 mb-8">
                  Have a question or need help? Fill out the form below and we'll get back to you
                  within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-slate-500"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-slate-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number <span className="text-slate-500">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-slate-500"
                      placeholder="+27 12 345 6789"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%2394a3b8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center',
                      }}
                    >
                      <option value="" className="bg-[#0a0e27]">
                        Select a subject
                      </option>
                      <option value="general" className="bg-[#0a0e27]">
                        General Inquiry
                      </option>
                      <option value="sales" className="bg-[#0a0e27]">
                        Sales Question
                      </option>
                      <option value="support" className="bg-[#0a0e27]">
                        Technical Support
                      </option>
                      <option value="billing" className="bg-[#0a0e27]">
                        Billing Question
                      </option>
                      <option value="partnership" className="bg-[#0a0e27]">
                        Partnership Opportunity
                      </option>
                      <option value="other" className="bg-[#0a0e27]">
                        Other
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-slate-500 resize-none"
                      placeholder="Tell us how we can help you…"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 font-semibold flex items-center justify-center gap-2"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </button>

                    {/* Legal Text */}
                    <p className="text-xs text-slate-500 mt-4 text-center">
                      By submitting this form, you agree to our{' '}
                      <a
                        href="#privacy"
                        className="text-slate-400 hover:text-white transition-colors"
                        onClick={() => onNavigate?.('privacy')}
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}