import { DollarSign } from 'lucide-react';

export function RefundPage() {
  return (
    <div className="min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-[#10E0FF] to-[#147BFF] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#10E0FF]/30">
            <DollarSign className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-white mb-4">Refund Policy</h1>
          <p className="text-[#94A3B8]">Last updated: 2 December 2025</p>
        </div>

        {/* Content */}
        <div className="bg-[#0F172A] rounded-3xl border border-white/10 p-8 md:p-12 space-y-8">
          <section>
            <h3 className="text-white mb-4">Our Commitment</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              Scheduly is built to automate bookings straight from WhatsApp while keeping your calendars up to date. If the experience falls short, we will work with you to make it right. This Refund Policy explains when refunds are available and how to request one in accordance with the Consumer Protection Act of South Africa and other applicable laws.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Free Trial</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              Every new Scheduly Premium workspace starts with a 14-day free trial. We do not collect card details during the trial period. You can cancel at any time before the trial ends and no charges will apply.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Monthly Subscription Refunds</h3>
            <p className="text-[#CBD5E1] leading-relaxed mb-4">
              After your trial, subscriptions renew monthly at R149 (VAT inclusive) through PayFast. Because access to the platform and integrations is provisioned immediately, we do not provide automatic refunds for partial months already used. We may, at our discretion, provide a pro-rated refund where:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#94A3B8] ml-4">
              <li>You experienced a verified service outage lasting longer than 48 consecutive hours that was within our control.</li>
              <li>Billing was processed in error after you cancelled before the renewal date.</li>
              <li>A duplicate charge was issued for the same billing period.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-white mb-4">How to Request a Refund</h3>
            <p className="text-[#CBD5E1] leading-relaxed mb-4">
              To ask for a refund or billing review, please send an email to <a href="mailto:admin@scheduly.co.za" className="text-[#10E0FF] hover:text-[#147BFF] transition-colors">admin@scheduly.co.za</a> with the following:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-[#94A3B8] ml-4">
              <li>Your Scheduly workspace name and account email.</li>
              <li>The invoice number or PayFast transaction reference you are querying.</li>
              <li>A short description of the issue and any supporting screenshots or logs.</li>
            </ol>
            <p className="text-[#CBD5E1] leading-relaxed mt-4">
              Our support team will acknowledge receipt within two business days and aim to resolve or provide a decision within five business days.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">When Refunds Are Not Available</h3>
            <p className="text-[#CBD5E1] leading-relaxed mb-4">
              Refunds will not be issued where the request relates to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#94A3B8] ml-4">
              <li>Services or consulting hours already delivered.</li>
              <li>Third-party fees charged by WhatsApp, Google, Microsoft, or PayFast.</li>
              <li>Feature requests or limitations disclosed during onboarding.</li>
              <li>Accounts suspended for violating our Terms of Service or WhatsApp policies.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-white mb-4">Cancellation</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              You can cancel your subscription at any time from within your Scheduly billing settings or by emailing support. Cancellation stops future renewals, and you will retain access until the current billing cycle ends.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Processing Time</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              Approved refunds will be processed via the original payment method. Once approved, PayFast typically releases funds within 5–10 business days. We will send you written confirmation once a refund has been issued.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Chargebacks and Disputes</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              If you initiate a chargeback without first contacting us, we may pause your account while we investigate. We encourage you to reach out so we can resolve billing issues quickly and avoid interruptions to your automations.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Changes to This Policy</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              We may update this Refund Policy from time to time. When significant updates are made we will notify active customers via email or in-app notice and update the "Last updated" date above.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Contact Us</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              For refund requests or questions about this policy, please contact us:
            </p>
            <div className="mt-4 p-4 bg-[#0A0F1C] rounded-xl border border-white/10">
              <p className="text-[#CBD5E1]">
                Email: <a href="mailto:admin@scheduly.co.za" className="text-[#10E0FF] hover:text-[#147BFF] transition-colors">admin@scheduly.co.za</a>
              </p>
              <p className="text-[#CBD5E1] mt-2">
                Response time: We respond within 2 business days
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
