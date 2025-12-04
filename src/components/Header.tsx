import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FREE_TRIAL_URL } from '../constants/links';
import { LogoMark } from './LogoMark';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'How It Works', page: 'how-it-works' },
    { name: 'Pricing', page: 'pricing' },
    { name: 'FAQ', page: 'faq' },
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0A0F1C]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-4 group"
          >
            <LogoMark size={56} className="transition-transform group-hover:scale-105" />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-white text-lg font-semibold tracking-tight group-hover:opacity-80 transition-opacity">Scheduly</span>
              <span className="text-xs text-[#94A3B8]">WhatsApp scheduling assistant</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`transition-colors text-sm ${
                  currentPage === item.page
                    ? 'text-[#10E0FF]'
                    : 'text-[#CBD5E1] hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={FREE_TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#10E0FF] to-[#147BFF] text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#10E0FF]/50 transition-all text-sm"
            >
              Start Free Trial
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#CBD5E1]" />
            ) : (
              <Menu className="w-6 h-6 text-[#CBD5E1]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    currentPage === item.page
                      ? 'bg-[#10E0FF]/10 text-[#10E0FF]'
                      : 'text-[#CBD5E1] hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-white/10">
                <a
                  href={FREE_TRIAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#10E0FF] to-[#147BFF] text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-[#10E0FF]/50 transition-all text-center"
                >
                  Start Free Trial
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
