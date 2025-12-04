import { useState } from 'react';
import { Mail, MapPin, Clock, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = formData;
    const emailSubject = `[Scheduly Contact] ${subject || 'General enquiry'}`;
    const emailBody = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\n${message}`;
    const mailtoLink = `mailto:admin@scheduly.co.za?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-white mb-6">Get in Touch</h1>
          <p className="text-[#CBD5E1] text-xl max-w-2xl mx-auto">
            Have a question or need help? We're here to assist you. Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email Card */}
            <div className="bg-[#0F172A] p-6 rounded-2xl border border-white/10 hover:border-[#10E0FF]/30 transition-all">
              <div className="w-12 h-12 bg-[#10E0FF]/20 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[#10E0FF]" />
              </div>
              <h5 className="text-white mb-2">Email Us</h5>
              <p className="text-[#94A3B8] text-sm mb-3">
                Our support team is available to help
              </p>
              <a
                href="mailto:admin@scheduly.co.za"
                className="text-[#10E0FF] hover:text-[#147BFF] transition-colors text-sm"
              >
                admin@scheduly.co.za
              </a>
            </div>

            {/* Office Hours Card */}
            <div className="bg-[#0F172A] p-6 rounded-2xl border border-white/10 hover:border-[#10E0FF]/30 transition-all">
              <div className="w-12 h-12 bg-[#10E0FF]/20 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#10E0FF]" />
              </div>
              <h5 className="text-white mb-2">Office Hours</h5>
              <div className="space-y-2 text-sm text-[#94A3B8]">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-[#CBD5E1]">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-[#CBD5E1]">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-[#CBD5E1]">Closed</span>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <span>SAST (UTC+2)</span>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-[#0F172A] p-6 rounded-2xl border border-white/10 hover:border-[#10E0FF]/30 transition-all">
              <div className="w-12 h-12 bg-[#10E0FF]/20 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#10E0FF]" />
              </div>
              <h5 className="text-white mb-2">Location</h5>
              <p className="text-[#94A3B8] text-sm">
                Johannesburg, South Africa
              </p>
            </div>

            {/* Quick Response */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#10E0FF] to-[#147BFF] rounded-2xl blur-xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-[#10E0FF] to-[#147BFF] p-6 rounded-2xl">
                <h5 className="text-white mb-2">Quick Response</h5>
                <p className="text-white/90 text-sm">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#0F172A] p-8 rounded-3xl border border-white/10">
              <h3 className="text-white mb-6">Send us a message</h3>
              
              {submitted ? (
                <div className="bg-[#10E0FF]/10 border border-[#10E0FF]/30 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#10E0FF] to-[#147BFF] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#10E0FF]/30">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white mb-2">Message Sent!</h4>
                  <p className="text-[#CBD5E1]">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-[#CBD5E1] mb-2 text-sm">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0F1C] border border-white/10 text-white focus:border-[#10E0FF] focus:ring-2 focus:ring-[#10E0FF]/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[#CBD5E1] mb-2 text-sm">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0F1C] border border-white/10 text-white focus:border-[#10E0FF] focus:ring-2 focus:ring-[#10E0FF]/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-[#CBD5E1] mb-2 text-sm">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0F1C] border border-white/10 text-white focus:border-[#10E0FF] focus:ring-2 focus:ring-[#10E0FF]/20 outline-none transition-all"
                        placeholder="+27 12 345 6789"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-[#CBD5E1] mb-2 text-sm">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0F1C] border border-white/10 text-white focus:border-[#10E0FF] focus:ring-2 focus:ring-[#10E0FF]/20 outline-none transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="sales">Sales Question</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing Question</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#CBD5E1] mb-2 text-sm">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0F1C] border border-white/10 text-white focus:border-[#10E0FF] focus:ring-2 focus:ring-[#10E0FF]/20 outline-none transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#10E0FF] to-[#147BFF] text-white px-8 py-4 rounded-full hover:shadow-xl hover:shadow-[#10E0FF]/50 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>

                  <p className="text-[#94A3B8] text-sm text-center">
                    By submitting this form, you agree to our Privacy Policy.
                  </p>
                </form>
              )}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-[#0F172A] rounded-3xl border border-white/10 overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#0A0F1C] to-[#0F172A] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#10E0FF] mx-auto mb-3" />
                  <p className="text-[#CBD5E1]">Johannesburg, South Africa</p>
                  <p className="text-[#94A3B8] text-sm mt-1">Map view</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Help Section removed per request */}
      </div>
    </div>
  );
}
