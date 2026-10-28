import React, { useState, useEffect } from 'react';
import { QuizOption, CareerResult, University } from '../types';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import { buildCareerResult } from '../utils/careerMatcher';
import {
  Compass,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  GraduationCap,
  Sparkles,
  BookOpen,
  Share2,
  Check,
  Search,
  X
} from 'lucide-react';

interface CareerTestProps {
  universities: University[];
  onSelectUniversity: (uniShortName: string) => void;
}

export const CareerTest: React.FC<CareerTestProps> = ({ universities, onSelectUniversity }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, { trait: any; points: number }>>({});
  const [result, setResult] = useState<CareerResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [facultyKeyword, setFacultyKeyword] = useState('');

  // Restore saved quiz result from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('cesme_career_result');
      if (saved) {
        setResult(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const progressPercentage = Math.round(((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100);

  const handleSelectOption = (option: QuizOption) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: {
        trait: option.trait,
        points: option.points
      }
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Calculate final result
      const finalResult = buildCareerResult(answers, universities);
      setResult(finalResult);
      try {
        localStorage.setItem('cesme_career_result', JSON.stringify(finalResult));
      } catch {
        // ignore
      }
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleRetake = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setResult(null);
    try {
      localStorage.removeItem('cesme_career_result');
    } catch {
      // ignore
    }
  };

  const handleCopySummary = () => {
    if (!result) return;
    const text = `«Çeşme» Platformasy — «Öz başarnygyňy bil» Test Netijäm:\n\nEsasy Ugrum: ${result.title}\n${result.subtitle}\n\nMaslahat berilýän kärler:\n${result.recommendedProfessions.map(p => `• ${p}`).join('\n')}\n\nMaslahat berilýän uniwersitet fakultetleri:\n${result.recommendedFaculties.slice(0, 5).map(f => `• ${f.universityShortName}: ${f.facultyName}`).join('\n')}\n\n«Çeşme» platformasynda barlap görüň!`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const isCurrentAnswered = answers[currentQuestion?.id] !== undefined;

  return (
    <section id="career-test-section" className="py-12 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-blue-700" />
            <span>Hünär we Ukyp Barlagy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            «Öz başarnygyňy bil» Testi
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Käriňiz näbellimi? 12 sany soraga hakyky islegiňize görä jogap beriň we ukybyňyza iň gabat gelýän kärleri hem-de Türkmenistanyň degişli fakultetlerini anyklaň.
          </p>
        </div>

        {!result ? (
          /* Test Questions Interface */
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8 lg:p-10">
            {/* Progress Bar & Counter */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                <span>
                  Sorag {currentQuestionIndex + 1} / {QUIZ_QUESTIONS.length}
                </span>
                <span className="font-mono tabular-nums text-blue-900">{progressPercentage}% Tamamlandy</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-900 transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="mb-8">
              <span className="text-xs font-semibold text-blue-800 tracking-wider uppercase">
                {currentQuestion.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2 leading-snug">
                {currentQuestion.question}
              </h3>
            </div>

            {/* 4 Interactive Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = answers[currentQuestion.id]?.trait === option.trait;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(option)}
                    className={`text-left p-5 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-blue-900 bg-blue-50/70 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                          {option.label}
                        </span>
                        <div
                          className={`w-5 h-5 rounded-full shrink-0 flex items-center justify-center border transition-colors ${
                            isSelected
                              ? 'border-blue-900 bg-blue-900 text-white'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Öňki</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!isCurrentAnswered}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <span>
                  {currentQuestionIndex === QUIZ_QUESTIONS.length - 1 ? 'Netijäni Gör' : 'Indiki'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Test Results Showcase */
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-10">
            {/* Top Banner */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-950 text-white mb-8 shadow-sm">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-amber-300 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Siziň Esasy Hünär Ugruňyz</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {result.title}
              </h3>
              <p className="text-blue-100 text-sm sm:text-base font-medium mt-2 leading-relaxed">
                {result.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed max-w-3xl border-t border-white/10 pt-4">
                {result.description}
              </p>
            </div>

            {/* 2-Column Split: Strengths vs Recommended Careers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Personality Strengths */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Siziň Esasy Başarnyklaryňyz</span>
                </h4>
                <ul className="space-y-2.5">
                  {result.personalityTraits.map((trait, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-2 shrink-0" />
                      <span>{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Professions */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-blue-700" />
                  <span>Maslahat Berilýän Kärler</span>
                </h4>
                <ul className="space-y-2.5">
                  {result.recommendedProfessions.map((prof, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                      <span className="text-blue-900 font-mono text-xs mt-0.5">0{i + 1}.</span>
                      <span>{prof}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Trait Scores Breakdown */}
            <div className="mb-10 p-6 rounded-xl border border-slate-200 bg-white">
              <h4 className="text-base font-bold text-slate-900 mb-4">
                Ukyplaryň Barlag Bal Paýlanyşy
              </h4>
              <div className="space-y-3">
                {[
                  { key: 'tech', label: 'Maglumat Tehnologiýalary & Inženerçilik', color: 'bg-blue-600' },
                  { key: 'medicine', label: 'Lukmançylyk & Saglygy Goraýyş', color: 'bg-emerald-600' },
                  { key: 'science', label: 'Tebigy & Fundamental Ylymlar', color: 'bg-amber-600' },
                  { key: 'humanities', label: 'Ynsanperwer Ylymlar & Diller', color: 'bg-rose-600' },
                  { key: 'economics', label: 'Ykdysadyýet & Dolandyryş', color: 'bg-purple-600' },
                  { key: 'art', label: 'Sungat & Dizaýn', color: 'bg-teal-600' },
                ].map(item => {
                  const score = result.traitScores[item.key as keyof typeof result.traitScores] || 0;
                  const maxPossible = 18;
                  const pct = Math.min(Math.round((score / maxPossible) * 100), 100);
                  return (
                    <div key={item.key} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold text-slate-700">
                        <span>{item.label}</span>
                        <span className="font-mono tabular-nums text-slate-500">{score} bal ({pct}%)</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full transition-all duration-500`}
                          style={{ width: `${Math.max(pct, 5)}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Matching University Faculties in Turkmenistan */}
            <div className="mb-10">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Maslahat Berilýän Uniwersitetler we Fakultetler
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Siziň test netijäňize laýyklykda Türkmenistanyň ýokary okuw mekdepleriniň fakultetleri:
                  </p>
                </div>

                {/* Search Bar for faculties */}
                <div className="w-full sm:w-64 relative shrink-0">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={facultyKeyword}
                    onChange={e => setFacultyKeyword(e.target.value)}
                    placeholder="Fakultet ýa-da kär gözläň..."
                    className="w-full pl-9 pr-8 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-900 bg-slate-50"
                  />
                  {facultyKeyword && (
                    <button
                      type="button"
                      onClick={() => setFacultyKeyword('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {(() => {
                const filteredFaculties = result.recommendedFaculties.filter(fac => {
                  if (!facultyKeyword.trim()) return true;
                  const q = facultyKeyword.toLowerCase().trim();
                  return (
                    fac.facultyName.toLowerCase().includes(q) ||
                    fac.universityName.toLowerCase().includes(q) ||
                    fac.universityShortName.toLowerCase().includes(q)
                  );
                });

                if (filteredFaculties.length === 0) {
                  return (
                    <div className="p-6 text-center bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500">
                      «{facultyKeyword}» sözi boýunça maslahat berlen fakultet tapylmady.
                    </div>
                  );
                }

                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {filteredFaculties.map((fac, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between"
                      >
                        <div>
                          <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-900 font-bold text-xs font-mono">
                            {fac.universityShortName}
                          </span>
                          <h5 className="text-sm font-bold text-slate-900 mt-2 leading-snug">
                            {fac.facultyName}
                          </h5>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                            {fac.universityName}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => onSelectUniversity(fac.universityShortName)}
                          className="mt-3.5 text-xs font-semibold text-blue-900 hover:text-blue-700 flex items-center gap-1 transition-colors self-start cursor-pointer"
                        >
                          <span>Fakultet hakda okaň</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <button
                type="button"
                onClick={handleRetake}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4 text-slate-500" />
                <span>Testi täzeden geç</span>
              </button>

              <button
                type="button"
                onClick={handleCopySummary}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-amber-300" />
                    <span>Nusgasy alyndy!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span>Netijäni nusgala</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
