import { FileText } from 'lucide-react';

export function TermsPage() {
  return (
    <div className="min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-[#10E0FF] to-[#147BFF] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#10E0FF]/30">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-white mb-4">Terms of Service</h1>
          <p className="text-[#94A3B8]">Last updated: 2 December 2025</p>
        </div>

        {/* Content */}
        <div className="bg-[#0F172A] rounded-3xl border border-white/10 p-8 md:p-12 space-y-8">
          <section>
            <h3 className="text-white mb-4">Acceptance of Terms</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              These Terms of Service ("Terms") govern your access to and use of the Scheduly website, WhatsApp automations, calendar integrations, and related services (collectively, the "Services"). By creating an account, connecting your calendar or WhatsApp number, or otherwise using the Services, you agree to be bound by these Terms and our <button onClick={() => window.scrollTo({ top: 0 })} className="text-[#10E0FF] hover:text-[#147BFF] transition-colors underline">Privacy Policy</button>. If you are using the Services on behalf of an organisation, you represent that you have authority to bind that organisation to these Terms.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Who May Use Scheduly</h3>
            <p className="text-[#CBD5E1] leading-relaxed mb-4">
              You must be at least 18 years old and able to form a binding contract to use the Services. You are responsible for ensuring that your use of Scheduly complies with all applicable laws, including POPIA, GDPR, and WhatsApp Business policies.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#94A3B8] ml-4">
              <li>Provide accurate registration information and keep it up to date.</li>
              <li>Maintain the confidentiality of your login credentials and any API keys issued to you.</li>
              <li>Notify us immediately if you suspect unauthorised access to your account.</li>
              <li>Ensure that all WhatsApp numbers and calendars linked to Scheduly are legally controlled by you or your organisation.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-white mb-4">User Accounts</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              When you create an account, you may link personal or business WhatsApp numbers and Google or Outlook calendars. You authorise Scheduly to access the calendars you explicitly select in order to read availability, create events, update bookings, and send reminders on your behalf. You can revoke access at any time via your account settings or the calendar provider’s security centre.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Free Trial, Subscription, and Billing</h3>
            <p className="text-[#CBD5E1] leading-relaxed mb-4">
              Scheduly Premium includes a 14-day free trial with no card required. After the trial you may subscribe for R149/month (VAT inclusive) via secure PayFast checkout. By upgrading you authorise us to charge the applicable subscription amount each billing period until you cancel.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#94A3B8] ml-4">
              <li>Subscriptions renew monthly in advance on the date of purchase.</li>
              <li>Invoices and payment confirmations are emailed to the address on file.</li>
              <li>Failed or disputed payments may result in temporary suspension until resolved.</li>
              <li>We may revise pricing with at least 30 days’ notice sent via email or in-app message.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-white mb-4">Customer Content and Data Ownership</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              You retain ownership of all data, messages, and calendar content transmitted through Scheduly. You grant us a limited license to process that data solely to deliver the Services, provide customer support, and comply with legal obligations. We do not sell customer data or use it to market to your clients.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Acceptable Use</h3>
            <p className="text-[#CBD5E1] leading-relaxed mb-4">
              You agree to use Scheduly responsibly and only for legitimate scheduling and customer communication purposes.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#94A3B8] ml-4">
              <li>Do not send spam, phishing messages, or unlawful marketing content.</li>
              <li>Do not misrepresent your identity or impersonate other businesses.</li>
              <li>Do not attempt to reverse engineer, copy, or exploit the underlying source code.</li>
              <li>Do not interfere with the integrity or performance of the Services.</li>
              <li>Do not use Scheduly to collect or process special categories of personal data without appropriate consent.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-white mb-4">Service Availability and Support</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              We aim for 99.9% uptime and provide email support at <a href="mailto:admin@scheduly.co.za" className="text-[#10E0FF] hover:text-[#147BFF] transition-colors">admin@scheduly.co.za</a>. Planned maintenance will be communicated in advance where feasible. We are not liable for downtime caused by third-party providers such as WhatsApp or calendar platforms, but we will work to resolve issues promptly.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Intellectual Property</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              All Scheduly software, branding, designs, text, graphics, and know-how are owned by Logistics Prime Central or our licensors and are protected by intellectual property laws. Except for the limited right to use the Services, no rights or licenses are granted to you.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Third-Party Services</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              The Services connect to Google, Microsoft, WhatsApp Business, PayFast, and other third-party platforms. Your use of those platforms is subject to their terms and policies. We are not responsible for outages or changes introduced by those providers.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Term, Suspension, and Termination</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              These Terms remain in effect while you access the Services. You may cancel at any time through your Scheduly account or by emailing support. We may suspend or terminate your account if you breach these Terms, fail to pay fees, or create risk to other users. Upon termination we will deactivate automated messaging and retain your data only as described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Disclaimer</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              The Services are provided "as is" and "as available". We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that automated WhatsApp conversations will produce specific business outcomes.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Limitation of Liability</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              To the maximum extent permitted by law, Logistics Prime Central, its directors, employees, and partners shall not be liable for indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising from your use of the Services. Our aggregate liability for all claims relating to the Services is limited to the fees paid to us in the three months preceding the claim.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Indemnification</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              You agree to indemnify and hold Logistics Prime Central and its affiliates harmless from any claims, damages, losses, and expenses (including legal fees) arising from your use of the Services, violation of these Terms, or infringement of any third-party rights.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Changes to These Terms</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              We may update these Terms to reflect changes in our Services or legal obligations. We will notify you of material changes via email or in-app notice. Continued use of the Services after the effective date of updated Terms constitutes acceptance of the changes.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Governing Law and Disputes</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              These Terms are governed by the laws of the Republic of South Africa. Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in Johannesburg, South Africa, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Contact Information</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              If you have questions about these Terms or need assistance, please contact us:
            </p>
            <div className="mt-4 p-4 bg-[#0A0F1C] rounded-xl border border-white/10">
              <p className="text-[#CBD5E1]">
                Email: <a href="mailto:admin@scheduly.co.za" className="text-[#10E0FF] hover:text-[#147BFF] transition-colors">admin@scheduly.co.za</a>
              </p>
              <p className="text-[#CBD5E1] mt-2">Postal address: Logistics Prime Central, Johannesburg, South Africa</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
