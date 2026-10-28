import React, { useState, useMemo } from 'react';
import { University, UniversityFaculty } from '../types';
import {
  GraduationCap,
  MapPin,
  Calendar,
  Search,
  ExternalLink,
  CheckCircle,
  X,
  ChevronRight,
  Sparkles,
  Briefcase
} from 'lucide-react';

interface UniversityDirectoryProps {
  universities: University[];
  selectedUniShortName?: string | null;
}

export const UniversityDirectory: React.FC<UniversityDirectoryProps> = ({
  universities,
  selectedUniShortName
}) => {
  const [activeType, setActiveType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFacultyModal, setSelectedFacultyModal] = useState<{
    university: University;
    faculty: UniversityFaculty;
  } | null>(null);

  const types = [
    { id: 'all', label: 'Hemme ÝOM-ler' },
    { id: 'national', label: 'Döwlet uniwersitetleri' },
    { id: 'institute', label: 'Ýöriteleşdirilen institutlar' },
    { id: 'international_partner', label: 'Halkara hyzmatdaşlar' },
  ];

  const quickKeywords = [
    'Emeli aň & IT',
    'Lukmançylyk',
    'Kiberhowpsuzlyk',
    'Nebit-gaz',
    'Iňlis dili',
    'Maliýe & Bank',
    'Binagärlik',
    'Robototehnika'
  ];

  // Flat list of all faculties matching the query for instant direct access
  const matchedFacultiesList = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    const results: { university: University; faculty: UniversityFaculty }[] = [];

    for (const uni of universities) {
      if (activeType !== 'all' && uni.type !== activeType) continue;

      for (const fac of uni.faculties) {
        const matchesFacName = fac.name.toLowerCase().includes(q);
        const matchesDept = fac.departments.some(d => d.toLowerCase().includes(q));
        const matchesCareer = fac.careerProspects.some(c => c.toLowerCase().includes(q));
        const matchesUni = uni.name.toLowerCase().includes(q) || uni.shortName.toLowerCase().includes(q);

        if (matchesFacName || matchesDept || matchesCareer || matchesUni) {
          results.push({ university: uni, faculty: fac });
        }
      }
    }
    return results;
  }, [searchQuery, universities, activeType]);

  const filteredUniversities = universities.filter(uni => {
    const matchesType = activeType === 'all' || uni.type === activeType;
    if (!searchQuery.trim()) return matchesType;

    const q = searchQuery.toLowerCase().trim();
    const matchesUni =
      uni.name.toLowerCase().includes(q) ||
      uni.shortName.toLowerCase().includes(q) ||
      uni.city.toLowerCase().includes(q) ||
      uni.description.toLowerCase().includes(q);

    const matchesFaculties = uni.faculties.some(f =>
      f.name.toLowerCase().includes(q) ||
      f.departments.some(d => d.toLowerCase().includes(q)) ||
      f.careerProspects.some(c => c.toLowerCase().includes(q))
    );

    return matchesType && (matchesUni || matchesFaculties);
  });

  return (
    <section id="universities-section" className="py-14 lg:py-22 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-semibold mb-3">
              <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
              <span>Ýokary Bilim Ojaklary</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Türkmenistanyň Ýokary Okuw Mekdepleri & Fakultetler
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Fakultetleri, hünärleri we kär mümkinçiliklerini açar sözler boýunça bada-bat gözläň.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="w-full lg:w-96 relative shrink-0">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Hünär, fakultet ýa-da ÝOM gözläň (mysal: kiberhowpsuzlyk)..."
                className="w-full pl-10 pr-9 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded cursor-pointer"
                  title="Gözlegi arassala"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Quick Keyword Pills for Instant Discovery */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-500 font-medium mr-1 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Tiz gözleg:</span>
          </span>
          {quickKeywords.map((kw, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSearchQuery(kw.split(' ')[0])}
              className="px-3 py-1 rounded-lg bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-700 transition-colors cursor-pointer"
            >
              {kw}
            </button>
          ))}
        </div>

        {/* Filter Tabs & Counter */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-semibold scrollbar-none">
            {types.map(t => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveType(t.id)}
                className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  activeType === t.id
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 font-medium font-mono">
            Tapylan: <span className="font-bold text-slate-900">{filteredUniversities.length}</span> ÝOM
            {searchQuery && (
              <span> · <span className="font-bold text-blue-900">{matchedFacultiesList.length}</span> fakultet/hünär</span>
            )}
          </div>
        </div>

        {/* Instant Matched Faculties Highlight Deck (when searching) */}
        {searchQuery.trim() !== '' && matchedFacultiesList.length > 0 && (
          <div className="mb-10 p-5 sm:p-6 bg-white rounded-2xl border border-blue-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-900" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  «{searchQuery}» sözi boýunça gabat gelen fakultetler we hünär ugurlary ({matchedFacultiesList.length})
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 max-h-80 overflow-y-auto pr-1">
              {matchedFacultiesList.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedFacultyModal({ university: item.university, faculty: item.faculty })}
                  className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50/70 hover:border-blue-400 transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-mono font-bold text-[11px]">
                        {item.university.shortName}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {item.university.city}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-900 leading-snug">
                      {item.faculty.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                      Kafedralar: {item.faculty.departments.join(', ')}
                    </p>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-blue-800 font-medium">
                    <span>Hünärler & talaplar</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* University Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredUniversities.map(uni => {
            const isHighlighted = selectedUniShortName === uni.shortName;
            return (
              <div
                key={uni.id}
                id={`uni-${uni.shortName}`}
                className={`bg-white rounded-2xl border transition-all p-6 sm:p-7 flex flex-col justify-between ${
                  isHighlighted
                    ? 'border-blue-900 ring-2 ring-blue-900/20 shadow-md'
                    : 'border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-1 rounded-lg bg-blue-900 text-white font-mono font-bold text-xs">
                        {uni.shortName}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {uni.typeLabel}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{uni.city}</span>
                    </div>
                  </div>

                  {/* University Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {uni.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Döredilen ýyly: {uni.establishedYear}</span>
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {uni.description}
                  </p>

                  {/* Faculties List */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                      Esasy Fakultetleri ({uni.faculties.length})
                    </h4>
                    <div className="space-y-2">
                      {uni.faculties.map((fac, fIdx) => {
                        const q = searchQuery.toLowerCase().trim();
                        const isMatched =
                          q &&
                          (fac.name.toLowerCase().includes(q) ||
                            fac.departments.some(d => d.toLowerCase().includes(q)) ||
                            fac.careerProspects.some(c => c.toLowerCase().includes(q)));

                        return (
                          <div
                            key={fIdx}
                            onClick={() => setSelectedFacultyModal({ university: uni, faculty: fac })}
                            className={`p-2.5 rounded-lg border transition-colors flex items-center justify-between cursor-pointer group ${
                              isMatched
                                ? 'bg-blue-50/90 border-blue-300'
                                : 'bg-slate-50 border-slate-100 hover:bg-blue-50/60 hover:border-blue-200'
                            }`}
                          >
                            <div>
                              <span className="text-xs font-semibold text-slate-800 group-hover:text-blue-900">
                                {fac.name}
                              </span>
                              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                                Kafedralar: {fac.departments.join(', ')}
                              </p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-900 shrink-0 ml-2" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Admissions Requirements Checklist */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      Kabul ediş talaplary
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {uni.admissionsRequirements.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Link if available */}
                {uni.websiteUrl && (
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={uni.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-blue-900 hover:text-blue-700 flex items-center gap-1.5"
                    >
                      <span>Resmi sahypasyna geç</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <Search className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-800">
              «{searchQuery}» sözi boýunça hiç bir ýokary okuw mekdebi tapylmady
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Başga açar sözüni ýazyň ýa-da «Arassala» düwmesine basyň.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-blue-900 rounded-xl hover:bg-blue-800 transition-colors cursor-pointer"
            >
              Gözlegi arassala
            </button>
          </div>
        )}

        {/* Modal for Faculty Details */}
        {selectedFacultyModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 max-w-xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => setSelectedFacultyModal(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-blue-100 text-blue-900">
                  {selectedFacultyModal.university.shortName}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2.5">
                  {selectedFacultyModal.faculty.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {selectedFacultyModal.university.name}
                </p>
              </div>

              {/* Departments */}
              <div className="mt-5">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Bölümleri we Kafedralary
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedFacultyModal.faculty.departments.map((dept, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium"
                    >
                      {dept}
                    </span>
                  ))}
                </div>
              </div>

              {/* Career Prospects */}
              <div className="mt-5">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Gelejekdäki Iş Orunlary & Hünärler
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {selectedFacultyModal.faculty.careerProspects.map((pros, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-800" />
                      <span>{pros}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedFacultyModal(null)}
                  className="px-5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                >
                  Ýapmak
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
