export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a0e27] text-white pt-24 pb-20 px-6">
      {/* Background glow effects */}
      <div className="fixed top-20 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: January 9, 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              1. Introduction
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Scheduly is a WhatsApp-based scheduling assistant that helps modern service teams
                manage appointments efficiently. This Privacy Policy explains how we collect, use,
                store, and protect personal information when you use our website, services, and
                integrations.
              </p>
              <p>
                This policy applies to all users of the Scheduly platform, including visitors to our
                website, trial users, and paying subscribers. By using Scheduly, you agree to the
                collection and use of information in accordance with this policy.
              </p>
              <p>
                Scheduly is committed to protecting your privacy and complying with applicable data
                protection laws, including the Protection of Personal Information Act (POPIA) in
                South Africa and the General Data Protection Regulation (GDPR) for international
                users.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              2. Information We Collect
            </h2>
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  a) Information You Provide
                </h3>
                <p className="mb-2">
                  When you use Scheduly, you may provide us with the following information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Business name and details</li>
                  <li>Messages submitted via contact forms</li>
                  <li>Payment and billing information</li>
                  <li>Calendar preferences and settings</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  b) Information Collected Automatically
                </h3>
                <p className="mb-2">
                  When you visit our website or use our services, we automatically collect:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP address and general location data</li>
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referral source</li>
                  <li>Basic analytics cookies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  c) Information Processed via Integrations
                </h3>
                <p className="mb-2">
                  Through our integrations with third-party services, we process:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>WhatsApp message content (for scheduling purposes only)</li>
                  <li>Calendar data from Google Calendar and Microsoft Outlook</li>
                  <li>Booking details including dates, times, and service types</li>
                  <li>Appointment confirmations and reminders</li>
                  <li>Payment status information (not full credit card details)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              3. How We Use Your Information
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide and operate the Scheduly scheduling service</li>
                <li>To process and confirm appointments</li>
                <li>To send booking confirmations, reminders, and updates via WhatsApp</li>
                <li>To sync appointments with your Google Calendar or Microsoft Outlook</li>
                <li>To respond to customer enquiries and support requests</li>
                <li>To process subscription payments and manage billing</li>
                <li>To improve our platform's performance, features, and reliability</li>
                <li>To send important service updates and notifications</li>
                <li>To detect and prevent fraud, abuse, and security incidents</li>
                <li>To comply with legal obligations and regulatory requirements</li>
                <li>To analyze usage patterns and improve user experience</li>
              </ul>
              <p className="mt-4">
                We will never sell, rent, or share your personal information with third parties for
                marketing purposes without your explicit consent.
              </p>
            </div>
          </section>

          {/* Legal Basis for Processing */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              4. Legal Basis for Processing
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                We process your personal information based on the following legal grounds:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-white">Consent:</strong> You have given explicit consent for
                  us to process your information for specific purposes, such as sending marketing
                  communications.
                </li>
                <li>
                  <strong className="text-white">Contractual Necessity:</strong> Processing is
                  necessary to fulfill our contractual obligations to you, such as providing the
                  Scheduly service you subscribed to.
                </li>
                <li>
                  <strong className="text-white">Legal Obligations:</strong> We are required to
                  process certain information to comply with legal and regulatory requirements.
                </li>
                <li>
                  <strong className="text-white">Legitimate Business Interests:</strong> Processing is
                  necessary for our legitimate interests, such as improving our services, preventing
                  fraud, and ensuring platform security, provided these interests do not override your
                  fundamental rights.
                </li>
              </ul>
            </div>
          </section>

          {/* WhatsApp, Google & Microsoft Integrations */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              5. WhatsApp, Google & Microsoft Integrations
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Scheduly integrates with WhatsApp Business API, Google Calendar, and Microsoft
                Outlook to provide seamless scheduling services. Here's how we handle data from
                these integrations:
              </p>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">WhatsApp Business API</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    We only access and process WhatsApp messages that are directly related to
                    scheduling appointments
                  </li>
                  <li>We do not read, store, or process private messages unrelated to bookings</li>
                  <li>All WhatsApp communication is encrypted end-to-end by WhatsApp</li>
                  <li>
                    We comply with WhatsApp Business API Terms of Service and privacy requirements
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Google Calendar & Microsoft Outlook
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Access to your calendar is permission-based and requires your explicit
                    authorization
                  </li>
                  <li>
                    We only read calendar availability and write appointment entries as needed for
                    scheduling
                  </li>
                  <li>We do not access or store unrelated calendar events or personal information</li>
                  <li>You can revoke calendar access at any time through your account settings</li>
                  <li>
                    We comply with Google API Services User Data Policy and Microsoft Graph API
                    requirements
                  </li>
                </ul>
              </div>

              <p className="mt-4">
                All integrations are designed with privacy and security in mind. We request only the
                minimum permissions necessary to provide our scheduling service.
              </p>
            </div>
          </section>

          {/* Data Storage & Security */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              6. Data Storage & Security
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                We take the security of your personal information seriously and implement
                industry-standard measures to protect it:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-white">Encryption:</strong> All data is encrypted in transit
                  using TLS/SSL protocols and at rest using AES-256 encryption
                </li>
                <li>
                  <strong className="text-white">Secure Servers:</strong> Data is stored on secure,
                  SOC 2 compliant servers with regular security audits
                </li>
                <li>
                  <strong className="text-white">Access Controls:</strong> Access to personal data is
                  strictly limited to authorized personnel who need it to perform their duties
                </li>
                <li>
                  <strong className="text-white">Regular Backups:</strong> We maintain regular encrypted
                  backups to prevent data loss
                </li>
                <li>
                  <strong className="text-white">Monitoring:</strong> Our systems are continuously
                  monitored for security threats and vulnerabilities
                </li>
              </ul>
              <p className="mt-4">
                While we implement strong security measures, no method of transmission over the
                internet or electronic storage is 100% secure. We cannot guarantee absolute security
                but are committed to protecting your information to the best of our ability.
              </p>
              <p>
                <strong className="text-white">Important:</strong> We do not sell, rent, or share
                your personal data with third parties for their marketing purposes.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              7. Data Retention
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes
                outlined in this Privacy Policy, unless a longer retention period is required or
                permitted by law.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-white">Active Accounts:</strong> Data is retained while your
                  account is active and you are using Scheduly services
                </li>
                <li>
                  <strong className="text-white">Cancelled Accounts:</strong> After cancellation, we
                  may retain certain data for up to 90 days to allow for reactivation, after which it
                  is deleted
                </li>
                <li>
                  <strong className="text-white">Legal Requirements:</strong> Some data may be retained
                  longer for legal, accounting, or regulatory compliance purposes (e.g., billing
                  records, transaction history)
                </li>
                <li>
                  <strong className="text-white">Anonymized Data:</strong> We may retain anonymized or
                  aggregated data indefinitely for analytics and service improvement
                </li>
              </ul>
              <p className="mt-4">
                You have the right to request deletion of your personal data at any time. See the
                "User Rights" section below for more information.
              </p>
            </div>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              8. User Rights
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Under applicable data protection laws, including POPIA (South Africa) and GDPR
                (international users), you have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-white">Right to Access:</strong> You can request a copy of
                  the personal information we hold about you
                </li>
                <li>
                  <strong className="text-white">Right to Rectification:</strong> You can request
                  correction of inaccurate or incomplete personal data
                </li>
                <li>
                  <strong className="text-white">Right to Erasure:</strong> You can request deletion of
                  your personal data (subject to legal retention requirements)
                </li>
                <li>
                  <strong className="text-white">Right to Withdraw Consent:</strong> Where processing
                  is based on consent, you can withdraw it at any time
                </li>
                <li>
                  <strong className="text-white">Right to Object:</strong> You can object to processing
                  of your personal data based on legitimate interests
                </li>
                <li>
                  <strong className="text-white">Right to Data Portability:</strong> You can request
                  your data in a structured, machine-readable format
                </li>
                <li>
                  <strong className="text-white">Right to Restrict Processing:</strong> You can request
                  limitation of how we process your data in certain circumstances
                </li>
                <li>
                  <strong className="text-white">Right to Lodge a Complaint:</strong> You can file a
                  complaint with the Information Regulator (South Africa) or your local data
                  protection authority
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{' '}
                <a
                  href="mailto:admin@scheduly.co.za"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  admin@scheduly.co.za
                </a>
                . We will respond to your request within 30 days.
              </p>
            </div>
          </section>

          {/* Cookies & Tracking */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              9. Cookies & Tracking
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Scheduly uses cookies and similar tracking technologies to improve your experience
                on our website and understand how our services are used.
              </p>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">What Are Cookies?</h3>
                <p>
                  Cookies are small text files stored on your device that help us recognize you and
                  remember your preferences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Types of Cookies We Use</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong className="text-white">Essential Cookies:</strong> Required for the website
                    to function properly (e.g., authentication, security)
                  </li>
                  <li>
                    <strong className="text-white">Analytics Cookies:</strong> Help us understand how
                    visitors use our website (e.g., Google Analytics)
                  </li>
                  <li>
                    <strong className="text-white">Preference Cookies:</strong> Remember your settings
                    and preferences
                  </li>
                </ul>
              </div>

              <p className="mt-4">
                We do not use aggressive tracking technologies or sell cookie data to third parties.
                You can control cookie settings through your browser preferences. Note that
                disabling certain cookies may limit website functionality.
              </p>
            </div>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              10. Third-Party Services
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Scheduly uses trusted third-party service providers to support our operations. These
                providers have access to certain personal information only to perform specific tasks
                on our behalf and are obligated to protect your data.
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Third-Party Services We Use
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong className="text-white">Hosting Providers:</strong> For secure data storage
                    and platform infrastructure
                  </li>
                  <li>
                    <strong className="text-white">Analytics Services:</strong> To understand usage
                    patterns and improve our service
                  </li>
                  <li>
                    <strong className="text-white">Payment Processors:</strong> To handle subscription
                    payments securely (we do not store full credit card details)
                  </li>
                  <li>
                    <strong className="text-white">Email Services:</strong> To send transactional
                    emails and communications
                  </li>
                  <li>
                    <strong className="text-white">Customer Support Tools:</strong> To provide efficient
                    customer service
                  </li>
                  <li>
                    <strong className="text-white">WhatsApp Business API:</strong> For WhatsApp
                    messaging functionality
                  </li>
                  <li>
                    <strong className="text-white">Google & Microsoft:</strong> For calendar
                    integration services
                  </li>
                </ul>
              </div>

              <p className="mt-4">
                Each third-party service provider has its own privacy policy governing how they
                handle personal data. We carefully select providers who maintain high privacy and
                security standards. However, Scheduly is not responsible for the privacy practices
                of these third parties.
              </p>
              <p>
                We do not share your personal information with third parties for their own marketing
                purposes without your explicit consent.
              </p>
            </div>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              11. Changes to This Policy
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Scheduly may update this Privacy Policy from time to time to reflect changes in our
                practices, technology, legal requirements, or other factors.
              </p>
              <p>When we make changes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We will update the "Last updated" date at the top of this page</li>
                <li>
                  For significant changes, we will notify you via email or through a prominent notice
                  on our website
                </li>
                <li>We encourage you to review this policy periodically</li>
              </ul>
              <p className="mt-4">
                Your continued use of Scheduly after any changes to this Privacy Policy constitutes
                your acceptance of the updated policy. If you do not agree with the changes, please
                discontinue using our services and contact us to delete your account.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              12. Contact Information
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or
                how we handle your personal information, please contact us:
              </p>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mt-6">
                <p className="mb-2">
                  <strong className="text-white">Email:</strong>{' '}
                  <a
                    href="mailto:admin@scheduly.co.za"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    admin@scheduly.co.za
                  </a>
                </p>
                <p className="mb-2">
                  <strong className="text-white">WhatsApp:</strong>{' '}
                  <a
                    href="https://wa.me/27068811760"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    +27 06 881 1760
                  </a>
                </p>
                <p>
                  <strong className="text-white">Location:</strong> Johannesburg, South Africa
                </p>
              </div>
              <p className="mt-6">
                We are committed to resolving any privacy concerns you may have and will respond to
                your inquiries within a reasonable timeframe.
              </p>
            </div>
          </section>
        </div>

        {/* Footer Links */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <div className="flex items-center justify-center gap-6 text-sm">
            <a
              href="#terms"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <span className="text-slate-600">•</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}