import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { PricingPage } from './components/PricingPage';
import { HowItWorksPage } from './components/HowItWorksPage';
import { FAQPage } from './components/FAQPage';
import { ContactPage } from './components/ContactPage';
import { PrivacyPage } from './components/PrivacyPage';
import { TermsPage } from './components/TermsPage';
import { RefundPage } from './components/RefundPage';
import { SecurityPage } from './components/SecurityPage';

type Page = 'home' | 'pricing' | 'how-it-works' | 'faq' | 'contact' | 'privacy' | 'terms' | 'refund' | 'security';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const navigateTo = (page: string) => {
    if (
      page === 'home' ||
      page === 'pricing' ||
      page === 'how-it-works' ||
      page === 'faq' ||
      page === 'contact' ||
      page === 'privacy' ||
      page === 'terms' ||
      page === 'refund' ||
      page === 'security'
    ) {
      setCurrentPage(page);
    } else {
      setCurrentPage('home');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'pricing':
        return <PricingPage />;
      case 'how-it-works':
        return <HowItWorksPage />;
      case 'faq':
        return <FAQPage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      case 'refund':
        return <RefundPage />;
      case 'security':
        return <SecurityPage />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
