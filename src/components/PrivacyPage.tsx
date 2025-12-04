import { Shield } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div className="min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-[#10E0FF] to-[#147BFF] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#10E0FF]/30">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-white mb-4">Privacy Policy</h1>
          <p className="text-[#94A3B8]">Last updated: 2 December 2025</p>
        </div>

        {/* Content */}
        <div className="bg-[#0F172A] rounded-3xl border border-white/10 p-8 md:p-12 space-y-8">
          <section>
            <h3 className="text-white mb-4">Introduction</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              Scheduly is operated by Logistics Prime Central ("Scheduly", "we", "us", or "our"). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website, WhatsApp automation, calendar integrations, and related services (collectively, the "Services").
            </p>
            <p className="text-[#CBD5E1] leading-relaxed mt-4">
              We comply with the Protection of Personal Information Act, 2013 ("POPIA"), the General Data Protection Regulation ("GDPR"), and other applicable privacy laws. By accessing or using the Services you agree to the practices described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Personal Information We Collect</h3>
            <p className="text-[#CBD5E1] leading-relaxed mb-4">
              We collect the following categories of information when you interact with Scheduly:
            </p>
            <ul className="list-disc list-inside space-y-3 text-[#94A3B8] ml-4">
              <li>
                <span className="text-white">Account and contact details</span> – name, business name, email address, phone number, and role provided when you sign up, start a free trial, or contact support.
              </li>
              <li>
                <span className="text-white">Calendar access permissions</span> – OAuth tokens and metadata that allow us to read and write to selected Google or Outlook calendars. We never store your calendar passwords.
              </li>
              <li>
                <span className="text-white">WhatsApp connection information</span> – personal or business WhatsApp number, message metadata, and configuration preferences required to automate booking conversations.
              </li>
              <li>
                <span className="text-white">Communication content</span> – booking details, customer names, service selections, and instructions shared through WhatsApp conversations processed by the Scheduly bot.
              </li>
              <li>
                <span className="text-white">Usage and device data</span> – log data, IP address, browser type, pages visited, and engagement metrics collected via analytics to maintain and improve the Services.
              </li>
              <li>
                <span className="text-white">Billing information</span> – transaction references, PayFast identifiers, or other payment processor data when you convert to a paid subscription. Card details are processed by our payment partners and never stored on our servers.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-white mb-4">How We Use Your Information</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              We process personal information to:
            </p>
            <ul className="list-disc list-inside space-y-3 text-[#94A3B8] ml-4 mt-4">
              <li>Provide, configure, and maintain the Services, including automated WhatsApp booking flows and calendar syncing.</li>
              <li>Authenticate your identity and secure your account.</li>
              <li>Deliver onboarding, support, and service notifications related to your use of Scheduly.</li>
              <li>Detect, prevent, and respond to fraud, abuse, or technical issues.</li>
              <li>Analyse usage to improve performance, develop new features, and measure marketing effectiveness.</li>
              <li>Comply with legal obligations, enforce our agreements, and defend our rights.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-white mb-4">Legal Bases for Processing</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              We rely on the following legal bases when processing personal information:
            </p>
            <ul className="list-disc list-inside space-y-3 text-[#94A3B8] ml-4 mt-4">
              <li><span className="text-white">Performance of a contract</span> – to deliver the Services according to our Terms of Service.</li>
              <li><span className="text-white">Legitimate interests</span> – to secure our platform, improve functionality, and communicate relevant updates while safeguarding your rights.</li>
              <li><span className="text-white">Consent</span> – for optional analytics, marketing communications, or where required by WhatsApp, Google, or Microsoft integrations.</li>
              <li><span className="text-white">Legal compliance</span> – to meet regulatory obligations, respond to lawful requests, and maintain records.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-white mb-4">How We Share Information</h3>
            <p className="text-[#CBD5E1] leading-relaxed mb-4">
              We only share personal information with third parties when necessary to provide the Services, comply with the law, or with your consent. Categories of recipients include:
            </p>
            <ul className="list-disc list-inside space-y-3 text-[#94A3B8] ml-4">
              <li>Cloud infrastructure providers that host our application and databases in secure data centres.</li>
              <li>Communication partners such as WhatsApp Business API providers that deliver messages on your behalf.</li>
              <li>Calendar providers Google LLC and Microsoft Corporation to sync availability and events.</li>
              <li>Payment processors including PayFast for subscription billing and invoicing.</li>
              <li>Professional advisers (legal, accounting, compliance) who support our operations under confidentiality agreements.</li>
            </ul>
            <p className="text-[#CBD5E1] leading-relaxed mt-4">
              We do not sell your personal information and we require all processors to implement appropriate safeguards and use the information only for the agreed purposes.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Data Retention</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              We retain personal information for as long as your account is active or as needed to deliver the Services. When you request deletion or terminate your account, we remove or anonymise data within 30 days unless we must keep it to comply with legal, tax, or reporting obligations. WhatsApp conversation history can be cleared by you at any time inside your account settings.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Data Security</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              We implement administrative, technical, and physical safeguards to protect personal information, including encryption in transit, role-based access controls, audit logging, and secure OAuth flows for calendar integrations. Despite our efforts, no system is completely secure; please notify us immediately if you suspect unauthorised access to your account.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Third-Party Services</h3>
            <p className="text-[#CBD5E1] leading-relaxed mb-4">
              Scheduly integrates with trusted partners to deliver core functionality. These providers process limited personal information under their own privacy policies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#94A3B8] ml-4">
              <li>Google Calendar and Google Workspace APIs</li>
              <li>Microsoft Outlook and Office 365 APIs</li>
              <li>Meta WhatsApp Business Platform providers</li>
              <li>PayFast and other PCI-DSS compliant payment processors</li>
              <li>Analytics and error monitoring tools configured with privacy controls</li>
            </ul>
            <p className="text-[#CBD5E1] leading-relaxed mt-4">
              We vet third parties for compliance and limit the data shared to what is essential for the integration.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">International Data Transfers</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              Our servers and service providers may be located outside your country, including in the European Union, United States, and South Africa. When we transfer personal information across borders we rely on adequacy decisions, standard contractual clauses, or other lawful transfer mechanisms to protect your rights.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Your Rights</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              Depending on your jurisdiction, you may have the right to access, correct, update, restrict, or delete personal information we hold about you, as well as the right to object to processing, request data portability, or withdraw consent. To exercise these rights, contact us at <a href="mailto:admin@scheduly.co.za" className="text-[#10E0FF] hover:text-[#147BFF] transition-colors">admin@scheduly.co.za</a>. We will respond within 30 days and may request proof of identity before completing your request.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Cookies and Tracking</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              We use cookies and similar technologies to remember your preferences, authenticate sessions, and analyse site usage. You can manage cookie settings in your browser. Disabling cookies may limit certain Scheduly features, but the Service remains accessible.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Children's Privacy</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              Scheduly is not directed to children under 16 and we do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete it.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Changes to This Policy</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make material updates we will notify you via email or an in-app banner and update the "Last updated" date above. Continued use of the Services after changes take effect indicates acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Contact Us</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              If you have questions about this Privacy Policy or would like to exercise your privacy rights, please contact us at:
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
