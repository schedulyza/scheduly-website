import { ShieldCheck } from 'lucide-react';

export function SecurityPage() {
  return (
    <div className="min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-[#10E0FF] to-[#147BFF] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#10E0FF]/30">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-white mb-4">Security Statement</h1>
          <p className="text-[#94A3B8]">Last updated: 3 December 2025</p>
        </div>

        {/* Content */}
        <div className="bg-[#0F172A] rounded-3xl border border-white/10 p-8 md:p-12 space-y-8">
          <section>
            <h3 className="text-white mb-4">Our Security Commitment</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              Scheduly is built for teams that operate in real time and depend on their calendars and customer conversations to stay accurate. Protecting your business data—and your customers&apos; trust—is fundamental to how we design, build, and operate the platform. This Security Statement summarises the technical and organisational controls we apply to keep your information safe.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Infrastructure Security</h3>
            <ul className="list-disc list-inside space-y-2 text-[#94A3B8] ml-4">
              <li>We host Scheduly on hardened cloud infrastructure with isolated virtual networks and security groups.</li>
              <li>All data in transit travels over TLS 1.2+ with strong cipher suites; insecure protocols are disabled.</li>
              <li>Backups are encrypted at rest and stored in geographically redundant locations for resilience.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-white mb-4">Application Security</h3>
            <ul className="list-disc list-inside space-y-2 text-[#94A3B8] ml-4">
              <li>We follow secure development lifecycle practices, including peer review, automated dependency scanning, and static analysis.</li>
              <li>Environment secrets are managed through secure vaults; production credentials are never stored in source control.</li>
              <li>We segment internal services and apply the principle of least privilege to every integration.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-white mb-4">Data Protection & Privacy</h3>
            <p className="text-[#CBD5E1] leading-relaxed mb-4">
              Scheduly complies with the Protection of Personal Information Act (POPIA) and the General Data Protection Regulation (GDPR). Calendar OAuth tokens are stored using strong encryption and can be revoked by you at any time. We only retain message transcripts and booking metadata as long as they are needed to deliver the service or as required by law.
            </p>
            <p className="text-[#CBD5E1] leading-relaxed">
              Payment details are processed by PayFast, a PCI-DSS compliant payment provider. We never store your card information on Scheduly servers.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Access Control</h3>
            <ul className="list-disc list-inside space-y-2 text-[#94A3B8] ml-4">
              <li>Employee access to production systems is governed by role-based access control (RBAC) and multi-factor authentication.</li>
              <li>All access requests require managerial approval and are reviewed on a quarterly basis.</li>
              <li>Administrative actions are logged and monitored for suspicious behaviour.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-white mb-4">Monitoring & Incident Response</h3>
            <ul className="list-disc list-inside space-y-2 text-[#94A3B8] ml-4">
              <li>We monitor platform health, application logs, and security alerts 24/7.</li>
              <li>Incident response runbooks define roles, communication paths, and resolution timelines for security events.</li>
              <li>Customers are notified promptly of any incident that materially impacts the confidentiality, integrity, or availability of their data.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-white mb-4">Compliance & Certifications</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              We continually assess our controls against industry best practices such as ISO 27001 and SOC 2. While formal certification is in progress, we already map our controls to these frameworks and document evidence for audit purposes.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Responsible Disclosure</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              We welcome reports from the security community. If you discover a vulnerability, please email a detailed description to <a href="mailto:admin@scheduly.co.za" className="text-[#10E0FF] hover:text-[#147BFF] transition-colors">admin@scheduly.co.za</a> with the subject line "Security Report". We request that you do not publicly disclose potential issues until we have confirmed and resolved them.
            </p>
          </section>

          <section>
            <h3 className="text-white mb-4">Contact Us</h3>
            <p className="text-[#CBD5E1] leading-relaxed">
              If you have questions about Scheduly's security posture, please contact us:
            </p>
            <div className="mt-4 p-4 bg-[#0A0F1C] rounded-xl border border-white/10">
              <p className="text-[#CBD5E1]">
                Email: <a href="mailto:admin@scheduly.co.za" className="text-[#10E0FF] hover:text-[#147BFF] transition-colors">admin@scheduly.co.za</a>
              </p>
              <p className="text-[#CBD5E1] mt-2">Response target: within 1 business day</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
