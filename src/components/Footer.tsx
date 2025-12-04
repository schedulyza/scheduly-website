import { Mail } from 'lucide-react';
import { LogoMark } from './LogoMark';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0F1C] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <LogoMark size={52} />
              <div className="flex flex-col leading-tight">
                <span className="text-white text-xl font-semibold">Scheduly</span>
                <span className="text-xs text-[#94A3B8]">WhatsApp scheduling assistant</span>
              </div>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
              Smart scheduling through WhatsApp.
            </p>
            <div className="flex items-center space-x-2 text-[#94A3B8] text-sm">
              <Mail className="w-4 h-4" />
              <a href="mailto:admin@scheduly.co.za" className="hover:text-[#10E0FF] transition-colors">
                admin@scheduly.co.za
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h5 className="text-white mb-4">Navigation</h5>
            <ul className="space-y-3">
              <li>
                <button onClick={() => onNavigate('home')} className="text-[#94A3B8] hover:text-[#10E0FF] transition-colors text-sm">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('how-it-works')} className="text-[#94A3B8] hover:text-[#10E0FF] transition-colors text-sm">
                  How it Works
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="text-[#94A3B8] hover:text-[#10E0FF] transition-colors text-sm">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="text-[#94A3B8] hover:text-[#10E0FF] transition-colors text-sm">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-[#94A3B8] hover:text-[#10E0FF] transition-colors text-sm">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h5 className="text-white mb-4">Legal</h5>
            <ul className="space-y-3">
              <li>
                <button onClick={() => onNavigate('privacy')} className="text-[#94A3B8] hover:text-[#10E0FF] transition-colors text-sm">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="text-[#94A3B8] hover:text-[#10E0FF] transition-colors text-sm">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('refund')} className="text-[#94A3B8] hover:text-[#10E0FF] transition-colors text-sm">
                  Refund Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('security')} className="text-[#94A3B8] hover:text-[#10E0FF] transition-colors text-sm">
                  Security Statement
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-[#94A3B8] text-sm text-center">
            © {currentYear} Scheduly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
