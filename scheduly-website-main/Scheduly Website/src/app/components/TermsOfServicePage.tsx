export function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#0a0e27] text-white pt-24 pb-20 px-6">
      {/* Background glow effects */}
      <div className="fixed top-20 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-40 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Terms of Service</h1>
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
                Welcome to Scheduly. These Terms of Service ("Terms") constitute a legally binding
                agreement between you ("User", "you", or "your") and Scheduly ("we", "us", or
                "our") regarding your use of the Scheduly platform and services.
              </p>
              <p>
                By accessing, registering for, or using Scheduly in any way, you acknowledge that
                you have read, understood, and agree to be bound by these Terms. If you do not agree
                to these Terms, you must not use our services.
              </p>
              <p>
                These Terms apply to all users of Scheduly, including free trial users, paying
                subscribers, and visitors to our website. Please read these Terms carefully before
                using our services.
              </p>
            </div>
          </section>

          {/* Description of the Service */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              2. Description of the Service
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Scheduly is a WhatsApp-based scheduling assistant designed to help modern service
                teams automate appointment booking, confirmations, and reminders. Our service
                includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Intelligent WhatsApp conversation handling for appointment scheduling
                </li>
                <li>
                  Automatic booking confirmations and reminders sent via WhatsApp
                </li>
                <li>
                  Integration with Google Calendar and Microsoft Outlook for real-time availability
                  management
                </li>
                <li>
                  Automated follow-up messages and appointment updates
                </li>
                <li>
                  Calendar synchronization to prevent double-bookings
                </li>
                <li>
                  Subscription management and payment processing
                </li>
              </ul>
              <p className="mt-4">
                Scheduly is provided as a Software-as-a-Service (SaaS) platform accessible via our
                website and integrations with third-party services. We reserve the right to modify,
                update, or discontinue features of the service at any time, with or without notice,
                to improve performance, add functionality, or comply with legal requirements.
              </p>
              <p>
                The service is provided "as is" and is subject to availability of third-party
                integrations including WhatsApp Business API, Google Calendar, and Microsoft
                Outlook.
              </p>
            </div>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              3. Eligibility
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                To use Scheduly, you must meet the following eligibility requirements:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-white">Age Requirement:</strong> You must be at least 18
                  years of age or the age of legal majority in your jurisdiction, whichever is
                  greater.
                </li>
                <li>
                  <strong className="text-white">Legal Authority:</strong> You must have the legal
                  authority to enter into a binding contract with Scheduly.
                </li>
                <li>
                  <strong className="text-white">WhatsApp Business Account:</strong> You must have
                  legitimate access to and authority to use the WhatsApp Business number connected
                  to your Scheduly account.
                </li>
                <li>
                  <strong className="text-white">Calendar Access:</strong> If using calendar
                  integrations, you must have proper authorization to connect and manage the
                  calendar(s) you integrate with Scheduly.
                </li>
                <li>
                  <strong className="text-white">Business Purpose:</strong> You must use Scheduly
                  for lawful business purposes only.
                </li>
              </ul>
              <p className="mt-4">
                By using Scheduly, you represent and warrant that you meet all eligibility
                requirements. If you are using Scheduly on behalf of an organization, you represent
                that you have the authority to bind that organization to these Terms.
              </p>
            </div>
          </section>

          {/* Account Responsibilities */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              4. Account Responsibilities
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                When you create a Scheduly account, you agree to the following responsibilities:
              </p>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Account Security</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    You are responsible for maintaining the confidentiality of your account login
                    credentials
                  </li>
                  <li>
                    You must use a strong password and keep it secure
                  </li>
                  <li>
                    You must notify us immediately of any unauthorized access or security breach
                  </li>
                  <li>
                    You are solely responsible for all activities that occur under your account
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Accurate Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    You must provide accurate, current, and complete information during registration
                  </li>
                  <li>
                    You must promptly update your account information to keep it accurate
                  </li>
                  <li>
                    Providing false or misleading information may result in account suspension or
                    termination
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Account Usage</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Your account is personal to you and may not be transferred or shared with others
                  </li>
                  <li>
                    You are responsible for all content and messages sent through your Scheduly
                    account
                  </li>
                  <li>
                    You must comply with all applicable laws and regulations when using Scheduly
                  </li>
                </ul>
              </div>

              <p className="mt-4">
                Scheduly reserves the right to suspend or terminate accounts that violate these
                responsibilities or engage in suspicious activity.
              </p>
            </div>
          </section>

          {/* Acceptable Use */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              5. Acceptable Use
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                You agree to use Scheduly only for lawful purposes and in accordance with these
                Terms. You specifically agree NOT to:
              </p>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Prohibited Activities</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Use Scheduly for any illegal activities or to violate any laws or regulations
                  </li>
                  <li>
                    Send spam, unsolicited messages, or engage in any form of harassment through the
                    platform
                  </li>
                  <li>
                    Misuse or abuse the WhatsApp Business API or violate WhatsApp's terms of service
                  </li>
                  <li>
                    Attempt to reverse-engineer, decompile, or disassemble any part of the Scheduly
                    platform
                  </li>
                  <li>
                    Interfere with or disrupt the service or servers connected to the service
                  </li>
                  <li>
                    Use automated systems (bots, scrapers) to access the service in unauthorized ways
                  </li>
                  <li>
                    Attempt to gain unauthorized access to other users' accounts or data
                  </li>
                  <li>
                    Transmit viruses, malware, or any other malicious code
                  </li>
                  <li>
                    Impersonate any person or entity or falsely represent your affiliation
                  </li>
                  <li>
                    Use Scheduly to send deceptive, fraudulent, or misleading messages
                  </li>
                  <li>
                    Collect or harvest personal information from other users without consent
                  </li>
                  <li>
                    Resell, redistribute, or sublicense access to Scheduly without authorization
                  </li>
                </ul>
              </div>

              <p className="mt-4">
                Violation of these acceptable use guidelines may result in immediate suspension or
                termination of your account, and we may report illegal activities to law enforcement
                authorities.
              </p>
            </div>
          </section>

          {/* Subscriptions & Payments */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              6. Subscriptions & Payments
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Free Trial</h3>
                <p>
                  Scheduly offers a 14-day free trial for new users. No payment information is
                  required during the trial period. At the end of the trial, you must subscribe to
                  continue using the service.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Subscription Model</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Scheduly is offered as a monthly subscription service at R59/month (or as
                    otherwise displayed at the time of purchase)
                  </li>
                  <li>
                    Subscriptions automatically renew on a monthly basis unless cancelled
                  </li>
                  <li>
                    Pricing is subject to change with 30 days' notice to existing subscribers
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Billing & Payment</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Payment is processed at the beginning of each billing cycle
                  </li>
                  <li>
                    You authorize Scheduly to charge your selected payment method automatically
                  </li>
                  <li>
                    You are responsible for ensuring your payment information is current and valid
                  </li>
                  <li>
                    Failed payments may result in service suspension until payment is received
                  </li>
                  <li>
                    All fees are exclusive of applicable taxes, which you are responsible for paying
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Cancellation</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    You may cancel your subscription at any time through your account settings
                  </li>
                  <li>
                    Cancellation takes effect at the end of the current billing period
                  </li>
                  <li>
                    You will continue to have access to the service until the end of your paid period
                  </li>
                  <li>
                    No partial refunds are provided for unused portions of the billing period
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Refunds</h3>
                <p>
                  All payments are non-refundable except where required by applicable law. If you
                  believe you are entitled to a refund under local consumer protection laws, please
                  contact us at{' '}
                  <a
                    href="mailto:admin@scheduly.co.za"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    admin@scheduly.co.za
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              7. Third-Party Services
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Scheduly relies on third-party services to provide its functionality, including but
                not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>WhatsApp Business API (Meta Platforms, Inc.)</li>
                <li>Google Calendar (Google LLC)</li>
                <li>Microsoft Outlook / Microsoft Graph (Microsoft Corporation)</li>
                <li>Payment processing providers</li>
                <li>Cloud hosting infrastructure</li>
              </ul>

              <p className="mt-4">
                <strong className="text-white">Important Disclaimers:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Scheduly is dependent on the availability and functionality of these third-party
                  services
                </li>
                <li>
                  We are not responsible for outages, downtime, or disruptions caused by third-party
                  service providers
                </li>
                <li>
                  Your use of third-party services is subject to their respective terms of service
                  and privacy policies
                </li>
                <li>
                  Scheduly does not control and is not liable for the actions, content, or policies
                  of third-party services
                </li>
                <li>
                  Changes to third-party services may affect Scheduly functionality
                </li>
              </ul>

              <p className="mt-4">
                By using Scheduly, you acknowledge and accept these dependencies and agree that
                Scheduly shall not be held liable for issues arising from third-party service
                failures.
              </p>
            </div>
          </section>

          {/* Service Availability */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              8. Service Availability
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                While we strive to provide reliable and continuous service, Scheduly makes no
                guarantee of uninterrupted availability.
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Service Uptime</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    We do not guarantee 100% uptime or availability of the service
                  </li>
                  <li>
                    The service may be temporarily unavailable due to maintenance, updates, or
                    technical issues
                  </li>
                  <li>
                    We will make best efforts to minimize downtime and notify users when possible
                  </li>
                  <li>
                    Scheduled maintenance will be communicated in advance when feasible
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Best-Effort Availability</h3>
                <p>
                  Scheduly operates on a best-effort basis to maintain high availability and
                  performance. However, we reserve the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Perform emergency maintenance without notice</li>
                  <li>Temporarily suspend service to prevent security threats</li>
                  <li>Modify server infrastructure to improve performance</li>
                  <li>Implement rate limits to ensure fair usage</li>
                </ul>
              </div>

              <p className="mt-4">
                You acknowledge that temporary interruptions in service may occur and that Scheduly
                shall not be liable for any damages resulting from service unavailability.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              9. Limitation of Liability
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p className="uppercase text-white font-semibold">
                PLEASE READ THIS SECTION CAREFULLY AS IT LIMITS SCHEDULY'S LIABILITY TO YOU.
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Disclaimer of Warranties</h3>
                <p>
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
                  EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">No Liability for Indirect Damages</h3>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SCHEDULY SHALL NOT BE LIABLE
                  FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                  INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Loss of profits, revenue, or business opportunities</li>
                  <li>Loss of data or information</li>
                  <li>Business interruption</li>
                  <li>Loss of goodwill or reputation</li>
                  <li>Costs of substitute services</li>
                </ul>
                <p className="mt-2">
                  This limitation applies regardless of the legal theory (contract, tort, negligence,
                  or otherwise) and even if Scheduly has been advised of the possibility of such
                  damages.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Liability Cap</h3>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, SCHEDULY'S TOTAL CUMULATIVE LIABILITY TO
                  YOU FOR ANY AND ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE
                  SHALL NOT EXCEED THE TOTAL AMOUNT YOU PAID TO SCHEDULY IN THE 12 MONTHS PRECEDING
                  THE CLAIM, OR R500 (FIVE HUNDRED RAND), WHICHEVER IS GREATER.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">No Guarantee of Results</h3>
                <p>
                  Scheduly does not guarantee:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>That the service will meet your specific requirements</li>
                  <li>That the service will be uninterrupted, timely, or error-free</li>
                  <li>The accuracy or reliability of any information obtained through the service</li>
                  <li>That defects will be corrected within any specific timeframe</li>
                </ul>
              </div>

              <p className="mt-4 text-sm">
                Some jurisdictions do not allow the exclusion or limitation of certain warranties or
                liabilities. In such jurisdictions, the above limitations may not apply to you, and
                our liability will be limited to the maximum extent permitted by law.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              10. Termination
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Termination by You</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    You may cancel your Scheduly account at any time through your account settings
                  </li>
                  <li>
                    Cancellation will take effect at the end of your current billing period
                  </li>
                  <li>
                    You will retain access to the service until the end of the paid period
                  </li>
                  <li>
                    No refunds will be provided for the remainder of the billing period
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Termination by Scheduly</h3>
                <p>
                  Scheduly reserves the right to suspend or terminate your account immediately,
                  without prior notice, if:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You violate these Terms of Service</li>
                  <li>You engage in fraudulent or illegal activity</li>
                  <li>Your account poses a security risk</li>
                  <li>You misuse the service or abuse our systems</li>
                  <li>Your payment method fails repeatedly</li>
                  <li>We are required to do so by law or regulatory authority</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Effect of Termination</h3>
                <p>
                  Upon termination of your account:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your access to the service will be immediately discontinued</li>
                  <li>
                    Your data will be retained for up to 90 days in accordance with our Privacy
                    Policy, after which it may be permanently deleted
                  </li>
                  <li>
                    You may request a data export within 30 days of termination by contacting support
                  </li>
                  <li>All outstanding fees and charges remain due and payable</li>
                  <li>
                    Sections of these Terms that by their nature should survive termination will
                    remain in effect (including liability limitations, intellectual property rights,
                    and dispute resolution)
                  </li>
                </ul>
              </div>

              <p className="mt-4">
                Termination does not relieve you of any obligations incurred prior to termination,
                including payment obligations.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              11. Intellectual Property
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Scheduly Ownership</h3>
                <p>
                  Scheduly and its licensors exclusively own all rights, title, and interest in and
                  to the service, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The Scheduly platform, software, and technology</li>
                  <li>All trademarks, logos, and branding</li>
                  <li>Website content, design, and user interface</li>
                  <li>Documentation and marketing materials</li>
                  <li>Patents, copyrights, trade secrets, and other intellectual property</li>
                </ul>
                <p className="mt-2">
                  Nothing in these Terms grants you any ownership rights to the Scheduly platform or
                  intellectual property.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Your Data</h3>
                <p>
                  You retain all ownership rights to the data you input into Scheduly, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Customer information and contact details</li>
                  <li>Appointment and booking data</li>
                  <li>Messages and communications content</li>
                  <li>Calendar information</li>
                </ul>
                <p className="mt-2">
                  By using Scheduly, you grant us a limited, non-exclusive license to use, process,
                  and store your data solely for the purpose of providing the service to you, as
                  described in our Privacy Policy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Restrictions</h3>
                <p>
                  You may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Copy, modify, or create derivative works of the Scheduly platform</li>
                  <li>Reverse engineer or decompile any part of the service</li>
                  <li>Remove or alter any proprietary notices or labels</li>
                  <li>Use the Scheduly name or trademarks without written permission</li>
                  <li>Frame or mirror any content from the Scheduly website</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Feedback</h3>
                <p>
                  If you provide feedback, suggestions, or ideas about Scheduly, you grant us the
                  right to use, implement, and commercialize such feedback without any obligation or
                  compensation to you.
                </p>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              12. Governing Law
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                These Terms of Service shall be governed by and construed in accordance with the
                laws of the Republic of South Africa, without regard to its conflict of law
                principles.
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Jurisdiction</h3>
                <p>
                  You agree that any legal action or proceeding arising out of or relating to these
                  Terms or your use of Scheduly shall be brought exclusively in the courts of
                  Johannesburg, South Africa, and you consent to the personal jurisdiction of such
                  courts.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Applicable Laws</h3>
                <p>
                  Your use of Scheduly must comply with all applicable laws and regulations,
                  including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Protection of Personal Information Act (POPIA)</li>
                  <li>Electronic Communications and Transactions Act (ECTA)</li>
                  <li>Consumer Protection Act (CPA)</li>
                  <li>WhatsApp Business API Terms of Service</li>
                  <li>Google and Microsoft Terms of Service</li>
                  <li>Any other applicable local, national, or international laws</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">International Users</h3>
                <p>
                  If you are accessing Scheduly from outside South Africa, you are responsible for
                  compliance with your local laws. By using Scheduly, you consent to the transfer of
                  your information to South Africa and processing in accordance with South African
                  law.
                </p>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              13. Changes to Terms
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Scheduly reserves the right to modify, update, or replace these Terms of Service at
                any time at our sole discretion.
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Notification of Changes</h3>
                <p>
                  When we make changes to these Terms:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    We will update the "Last updated" date at the top of this page
                  </li>
                  <li>
                    For material changes, we will notify you via email or through a prominent notice
                    on our website at least 30 days before the changes take effect
                  </li>
                  <li>
                    We may also notify you through in-app notifications or WhatsApp messages
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Acceptance of Changes</h3>
                <p>
                  Your continued use of Scheduly after any changes to these Terms constitutes your
                  acceptance of the updated Terms. If you do not agree to the modified Terms, you
                  must stop using the service and cancel your account.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Review Regularly</h3>
                <p>
                  We encourage you to review these Terms periodically to stay informed of any
                  updates. It is your responsibility to check for changes.
                </p>
              </div>

              <p className="mt-4">
                If you have any questions about changes to these Terms, please contact us at{' '}
                <a
                  href="mailto:admin@scheduly.co.za"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  admin@scheduly.co.za
                </a>
                .
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
              14. Contact Information
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                If you have any questions, concerns, or feedback regarding these Terms of Service,
                please contact us:
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
                We are committed to addressing your questions and concerns promptly. Please allow up
                to 5 business days for a response.
              </p>
            </div>
          </section>
        </div>

        {/* Footer Links */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <div className="flex items-center justify-center gap-6 text-sm">
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
