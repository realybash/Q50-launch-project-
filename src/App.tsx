import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EventDetails } from './components/EventDetails';
import { Testimonials } from './components/Testimonials';
import { UrgencyCTA } from './components/UrgencyCTA';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LiveJoinNotification } from './components/LiveJoinNotification';
import { AdScriptModal } from './components/AdScriptModal';
import { LAUNCH_DETAILS } from './data/content';

export default function App() {
  const [isAdScriptOpen, setIsAdScriptOpen] = useState(false);
  const [claimedSlots, setClaimedSlots] = useState(LAUNCH_DETAILS.claimedSlots);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenAdScripts={() => setIsAdScriptOpen(true)}
        claimedSlots={claimedSlots}
      />

      {/* Main Landing Page Sections */}
      <main className="flex-grow">
        {/* Hero Section with 7-Day Countdown & Shaking CTA Button */}
        <Hero claimedSlots={claimedSlots} />

        {/* About Section: 3 Benefits (Wealth, Growth, Community) */}
        <AboutSection />

        {/* Event Details: Location, Date, Entry Fee */}
        <EventDetails />

        {/* Testimonials: 3 Nigerian Residents */}
        <Testimonials />

        {/* Final CTA Section: Urgency & Shaking CTA Button */}
        <UrgencyCTA claimedSlots={claimedSlots} />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenAdScripts={() => setIsAdScriptOpen(true)} />

      {/* Floating Sticky Elements */}
      <FloatingWhatsApp />
      <LiveJoinNotification />

      {/* Ad Copy Scripts Modal */}
      <AdScriptModal
        isOpen={isAdScriptOpen}
        onClose={() => setIsAdScriptOpen(false)}
      />
    </div>
  );
}
