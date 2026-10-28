import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CareerTest } from './components/CareerTest';
import { MentorsDirectory } from './components/MentorsDirectory';
import { UniversityDirectory } from './components/UniversityDirectory';
import { AdviceSection } from './components/AdviceSection';
import { Footer } from './components/Footer';

import { MENTORS_DATA } from './data/mentors';
import { UNIVERSITIES_DATA } from './data/universities';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedUniShortName, setSelectedUniShortName] = useState<string | null>(null);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const elementMap: Record<string, string> = {
      test: 'career-test-section',
      mentors: 'mentors-section',
      universities: 'universities-section',
      advice: 'advice-section'
    };

    const targetId = elementMap[sectionId];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleStartQuiz = () => {
    setActiveSection('test');
    const el = document.getElementById('career-test-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectUniversityFromTest = (uniShortName: string) => {
    setSelectedUniShortName(uniShortName);
    setActiveSection('universities');
    const el = document.getElementById('universities-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      const uniCard = document.getElementById(`uni-${uniShortName}`);
      if (uniCard) {
        uniCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 250);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-900 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onStartQuiz={handleStartQuiz}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onStartQuiz={handleStartQuiz}
          onNavigate={handleNavigate}
        />

        {/* Aptitude & Psychological Test Section ("Öz başarnygyňy bil") */}
        <CareerTest
          universities={UNIVERSITIES_DATA}
          onSelectUniversity={handleSelectUniversityFromTest}
        />

        {/* Mentors, Textbook Authors & Scientists Directory */}
        <MentorsDirectory
          mentors={MENTORS_DATA}
        />

        {/* Higher Education Institutions & Faculties Directory */}
        <UniversityDirectory
          universities={UNIVERSITIES_DATA}
          selectedUniShortName={selectedUniShortName}
        />

        {/* Advice and Pedagogical Wisdom Section */}
        <AdviceSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onStartQuiz={handleStartQuiz}
      />
    </div>
  );
}
