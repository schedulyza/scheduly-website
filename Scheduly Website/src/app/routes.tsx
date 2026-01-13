import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ContactPage } from "./components/ContactPage";
import { PrivacyPolicyPage } from "./components/PrivacyPolicyPage";
import { TermsOfServicePage } from "./components/TermsOfServicePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* ContactPage currently expects onNavigate, so we pass a no-op for now */}
      <Route path="/contact" element={<ContactPage onNavigate={() => {}} />} />

      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsOfServicePage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
