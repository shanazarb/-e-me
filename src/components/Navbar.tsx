import React from 'react';
import { Compass, GraduationCap, Users, Building2, BookOpen } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  onStartQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onStartQuiz }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => onNavigate('hero')}
            className="flex items-center gap-2.5 text-left shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-800 transition-colors">
              <Compass className="w-5 h-5 text-amber-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-blue-950 font-sans">
                Çeşme
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-wide">
                Bilim, Başarnyk we Hünär
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <button
              onClick={() => onNavigate('hero')}
              className={`hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeSection === 'hero' ? 'text-blue-900 font-semibold border-b-2 border-blue-900' : ''
              }`}
            >
              Baş sahypa
            </button>
            <button
              onClick={() => onNavigate('test')}
              className={`flex items-center gap-1.5 hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeSection === 'test' ? 'text-blue-900 font-semibold border-b-2 border-blue-900' : ''
              }`}
            >
              <Compass className="w-4 h-4 text-blue-600" />
              Hünär testi
            </button>
            <button
              onClick={() => onNavigate('mentors')}
              className={`flex items-center gap-1.5 hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeSection === 'mentors' ? 'text-blue-900 font-semibold border-b-2 border-blue-900' : ''
              }`}
            >
              <Users className="w-4 h-4 text-blue-600" />
              Mugallymlar & Alymlar
            </button>
            <button
              onClick={() => onNavigate('universities')}
              className={`flex items-center gap-1.5 hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeSection === 'universities' ? 'text-blue-900 font-semibold border-b-2 border-blue-900' : ''
              }`}
            >
              <GraduationCap className="w-4 h-4 text-blue-600" />
              Ýokary okuw mekdepleri
            </button>
            <button
              onClick={() => onNavigate('advice')}
              className={`flex items-center gap-1.5 hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeSection === 'advice' ? 'text-blue-900 font-semibold border-b-2 border-blue-900' : ''
              }`}
            >
              <BookOpen className="w-4 h-4 text-blue-600" />
              Maslahatlar
            </button>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onStartQuiz}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 active:bg-blue-950 rounded-xl shadow-xs transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-amber-300" />
              <span>Testi başla</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="lg:hidden flex items-center justify-around border-t border-slate-200 bg-slate-50 px-2 py-2 overflow-x-auto text-xs font-medium text-slate-700">
        <button
          onClick={() => onNavigate('hero')}
          className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${
            activeSection === 'hero' ? 'bg-white shadow-xs text-blue-900 font-semibold' : ''
          }`}
        >
          Baş sahypa
        </button>
        <button
          onClick={() => onNavigate('test')}
          className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${
            activeSection === 'test' ? 'bg-white shadow-xs text-blue-900 font-semibold' : ''
          }`}
        >
          Hünär testi
        </button>
        <button
          onClick={() => onNavigate('mentors')}
          className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${
            activeSection === 'mentors' ? 'bg-white shadow-xs text-blue-900 font-semibold' : ''
          }`}
        >
          Alymlar
        </button>
        <button
          onClick={() => onNavigate('universities')}
          className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${
            activeSection === 'universities' ? 'bg-white shadow-xs text-blue-900 font-semibold' : ''
          }`}
        >
          ÝOM-ler
        </button>
      </div>
    </header>
  );
};
