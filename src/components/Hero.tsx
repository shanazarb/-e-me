import React from 'react';
import { Compass, GraduationCap, Users, BookOpen, Award, ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
  onNavigate: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartQuiz, onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Headline + Visual Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-900 text-xs font-semibold w-fit mb-5">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              <span>Türkmenistanyň okuwçylary we talyplary üçin ýörite platforma</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] text-balance">
              Geljegiňi <span className="text-blue-900">Ylym we Bilim Çeşmesi</span> Bilen Gurna
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Käriňi kesgitlemäge kömek edýän psihologiki testden geç, Türkmenistanyň abraýly uniwersitetleriniň degişli fakultetlerini öwren we mekdep kitaplaryny ýazan beýik alymlaryň hem-de mugallymlaryň tejribesinden ruhlan.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onStartQuiz}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-blue-900 hover:bg-blue-800 active:bg-blue-950 shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer"
              >
                <Compass className="w-5 h-5 text-amber-300" />
                <span>Öz başarnygyňy bil (Testi başla)</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => onNavigate('mentors')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-100 active:bg-slate-200 border border-slate-300 shadow-xs transition-colors cursor-pointer"
              >
                <Users className="w-5 h-5 text-blue-700" />
                <span>Alymlar & Kitaplar</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-mono text-blue-950 tabular-nums">12</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Psihologiki sorag</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-mono text-blue-950 tabular-nums">10+</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">ÝOM & Institutlar</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-mono text-blue-950 tabular-nums">100%</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Mugt we açyk bilim</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3] group">
              <img
                src="/src/assets/images/hero_cesme_education_1793225119354.jpg"
                alt="Çeşme bilim we ylym kitaphanasy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                  «Çeşme» Maksatnamasy
                </span>
                <p className="text-sm sm:text-base font-medium mt-1 text-slate-100">
                  «Ylym öwrenmek — geçmişi sylamak, şu günüňi gurnamak we geljegiňi ýagtyltmakdyr.»
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Highlights Banner */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            onClick={onStartQuiz}
            className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center mb-3 group-hover:bg-blue-900 group-hover:text-white transition-colors">
              <Compass className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-slate-900">«Öz başarnygyňy bil» Testi</h2>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              12 sorag arkaly ukyplaryňyzy seljeriň we haýsy hünäre has meýillidigiňizi anyklaň.
            </p>
          </div>

          <div
            onClick={() => onNavigate('mentors')}
            className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center mb-3 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-slate-900">Mugallymlar & Alymlar</h2>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Kitap awtorlarynyň, professorlaryň awtobiografiýasy, şahsy şygarlary we şägirtleriniň sanawy.
            </p>
          </div>

          <div
            onClick={() => onNavigate('universities')}
            className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-slate-900">Ýokary Okuw Mekdepleri</h2>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              TDU, Oguz han, TDLU, HNGU we beýleki ÝOM-leriň fakultetleri, talaplary we kabul ediş şertleri.
            </p>
          </div>

          <div
            onClick={() => onNavigate('advice')}
            className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-800 flex items-center justify-center mb-3 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-slate-900">Halypa Maslahatlary</h2>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Olimpiadalara taýýarlyk, kitap okamak medeniýeti we dogry hünär saýlamagyň syrlary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
