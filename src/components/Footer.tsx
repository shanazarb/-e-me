import React from 'react';
import { Compass, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
  onStartQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onStartQuiz }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-blue-800 flex items-center justify-center text-white">
                <Compass className="w-5 h-5 text-amber-300" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                Çeşme
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Türkmenistanyň okuwçylary, talyplary we mugallymlary üçin bilim, başarnyk we hünär platformasy. Okuwçylaryň dogry kär saýlamagyna we ylym adamlarymyzyň mirasyny öwrenmegine ýardam berýär.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs">
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
                Bölümler
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => onNavigate('hero')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Baş sahypa
                  </button>
                </li>
                <li>
                  <button
                    onClick={onStartQuiz}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    «Öz başarnygyňy bil» testi
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('mentors')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Mugallymlar & Alymlar
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('universities')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Ýokary okuw mekdepleri
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
                Maglumat
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => onNavigate('advice')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Halypa maslahatlary
                  </button>
                </li>
                <li>
                  <span className="text-slate-400">Türkmenistan</span>
                </li>
                <li>
                  <span className="text-slate-400">Web / Android / iOS</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quote */}
          <div className="md:col-span-3 text-xs leading-relaxed border-t md:border-t-0 md:border-l border-slate-800 pt-6 md:pt-0 md:pl-6">
            <span className="text-amber-400 font-semibold block mb-1">Şygar:</span>
            <p className="italic text-slate-300">
              «Ylym akyl ýagtylygydyr, başarnyk bolsa şol ýagtylygy döredijilikli durmuşa geçirmekdir.»
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} «Çeşme» platformasy. Ähli hukuklar goralan.</p>
          <p className="flex items-center gap-1.5">
            <span>Türkmenistanyň ýaşlary we bilimi üçin döredildi</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
