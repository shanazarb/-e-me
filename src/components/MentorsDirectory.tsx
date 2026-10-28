import React, { useState } from 'react';
import { MentorScientist } from '../types';
import {
  Users,
  Search,
  BookOpen,
  Award,
  Quote,
  Mail,
  Phone,
  Send,
  Calendar,
  X,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface MentorsDirectoryProps {
  mentors: MentorScientist[];
}

export const MentorsDirectory: React.FC<MentorsDirectoryProps> = ({ mentors }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMentorForModal, setSelectedMentorForModal] = useState<MentorScientist | null>(null);
  const [expandedBooksMentorId, setExpandedBooksMentorId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Ähli ugurlar' },
    { id: 'math_physics', label: 'Fizika & Matematika' },
    { id: 'it_tech', label: 'IT & Kiberhowpsuzlyk' },
    { id: 'chemistry_biology', label: 'Himiýa & Biologiýa' },
    { id: 'medicine', label: 'Lukmançylyk' },
    { id: 'languages', label: 'Diller & Filologiýa' },
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesCategory = selectedCategory === 'all' || mentor.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesQuery =
      mentor.name.toLowerCase().includes(q) ||
      mentor.title.toLowerCase().includes(q) ||
      mentor.institution.toLowerCase().includes(q) ||
      mentor.publishedBooks.some(b => b.title.toLowerCase().includes(q)) ||
      mentor.olympiadAchievements.some(o => o.competition.toLowerCase().includes(q));

    return matchesCategory && matchesQuery;
  });

  return (
    <section id="mentors-section" className="py-14 lg:py-22 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-semibold mb-3">
              <Users className="w-3.5 h-3.5 text-amber-800" />
              <span>Ylmy Miras we Pedagogik Halypalar</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Mugallymlar, Alymlar we Kitap Awtorlary
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Türkmenistanyň mekdep okuw kitaplaryny ýazan meşhur alymlaryň, professorlaryň awtobiografiýasy, kitaplary, şahsy şygarlary we olimpiada ýeňijilerini taýýarlan halypalaryň sanawy bilen tanyşyň.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-80 relative shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Alym, kitap ýa-da ugur gözläň..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent bg-slate-50/50"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-semibold scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map(mentor => {
            const isBooksExpanded = expandedBooksMentorId === mentor.id;
            return (
              <div
                key={mentor.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6">
                  {/* Card Header with Badges */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-mono">
                      {mentor.categoryLabel}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {mentor.lifespan}
                    </span>
                  </div>

                  {/* Name and Title */}
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {mentor.name}
                  </h3>
                  <p className="text-xs font-medium text-blue-900 mt-1">
                    {mentor.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {mentor.institution}
                  </p>

                  {/* Motto / Personal Quote */}
                  <div className="mt-4 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/70 text-amber-950">
                    <div className="flex items-start gap-2">
                      <Quote className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <p className="text-xs italic leading-relaxed font-medium">
                        {mentor.motto}
                      </p>
                    </div>
                  </div>

                  {/* Biography snippet */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {mentor.biography}
                  </p>

                  {/* Published Books Section */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-blue-800" />
                        <span>Neşir eden kitaplary ({mentor.publishedBooks.length})</span>
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedBooksMentorId(isBooksExpanded ? null : mentor.id)
                        }
                        className="text-xs text-blue-700 hover:text-blue-900 flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>{isBooksExpanded ? 'Ýap' : 'Görkez'}</span>
                        {isBooksExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    {isBooksExpanded && (
                      <div className="mt-2.5 space-y-2 text-xs">
                        {mentor.publishedBooks.map((book, bIdx) => (
                          <div
                            key={bIdx}
                            className="p-2.5 rounded-lg bg-slate-50 border border-slate-100"
                          >
                            <div className="flex justify-between items-start gap-2">
                              <span className="font-semibold text-slate-900">{book.title}</span>
                              <span className="text-slate-400 font-mono shrink-0">{book.year}</span>
                            </div>
                            <span className="inline-block text-[11px] text-blue-800 font-medium mt-0.5">
                              {book.gradeOrType}
                            </span>
                            <p className="text-slate-600 mt-1 text-[11px] leading-relaxed">
                              {book.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Olympiad Achievements & Students */}
                  {mentor.olympiadAchievements.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-2">
                        <Award className="w-4 h-4 text-amber-600" />
                        <span>Olimpiada üstünlikleri & Talyplary</span>
                      </span>
                      <div className="space-y-1.5 text-xs text-slate-600">
                        {mentor.olympiadAchievements.slice(0, 2).map((ach, aIdx) => (
                          <div key={aIdx} className="bg-slate-50 p-2 rounded-md">
                            <div className="flex justify-between items-center text-[11px]">
                              <span className="font-semibold text-slate-800">{ach.competition}</span>
                              <span className="text-amber-800 font-bold">{ach.medalLabel}</span>
                            </div>
                            <p className="text-[11px] text-slate-500 mt-0.5">
                              Talyplar: <span className="text-slate-700">{ach.students.join(', ')}</span> ({ach.year} ý.)
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer Action */}
                <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedMentorForModal(mentor)}
                    className="text-xs font-semibold text-blue-900 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Doly terjimehaly & Aragatnaşyk</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredMentors.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
            <Users className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-700">Hiç bir alym ýa-da mugallym tapylmady</p>
            <p className="text-xs text-slate-500 mt-1">Gözleg sözüňizi üýtgedip ýa-da beýleki ugru saýlap görüň.</p>
          </div>
        )}

        {/* Detailed Modal for Mentor Biography & Contact */}
        {selectedMentorForModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
              <button
                type="button"
                onClick={() => setSelectedMentorForModal(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="pr-6">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-blue-100 text-blue-900">
                  {selectedMentorForModal.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-3">
                  {selectedMentorForModal.name}
                </h3>
                <p className="text-sm font-medium text-blue-900">
                  {selectedMentorForModal.title}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {selectedMentorForModal.institution} ({selectedMentorForModal.lifespan})
                </p>
              </div>

              {/* Motto quote */}
              <div className="mt-5 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950">
                <p className="text-xs italic font-medium leading-relaxed">
                  {selectedMentorForModal.motto}
                </p>
              </div>

              {/* Full Biography */}
              <div className="mt-6">
                <h4 className="text-sm font-bold text-slate-900 mb-2">Ömür we döredijilik ýoly</h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {selectedMentorForModal.biography}
                </p>
              </div>

              {/* Quotes / Inspirational Advice */}
              {selectedMentorForModal.quotesOrAdvice.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Halypanyň ýaşlara nesihatlary</h4>
                  <ul className="space-y-2">
                    {selectedMentorForModal.quotesOrAdvice.map((q, qIdx) => (
                      <li key={qIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Contact Information */}
              <div className="mt-6 pt-5 border-t border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 mb-3">Habarlaşmak we kabul ediş tertibi</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {selectedMentorForModal.contact.email && (
                    <div className="p-3 rounded-lg bg-slate-50 flex items-center gap-2.5 text-slate-700">
                      <Mail className="w-4 h-4 text-blue-700 shrink-0" />
                      <span className="truncate">{selectedMentorForModal.contact.email}</span>
                    </div>
                  )}
                  {selectedMentorForModal.contact.phone && (
                    <div className="p-3 rounded-lg bg-slate-50 flex items-center gap-2.5 text-slate-700">
                      <Phone className="w-4 h-4 text-blue-700 shrink-0" />
                      <span>{selectedMentorForModal.contact.phone}</span>
                    </div>
                  )}
                  {selectedMentorForModal.contact.telegram && (
                    <div className="p-3 rounded-lg bg-slate-50 flex items-center gap-2.5 text-slate-700">
                      <Send className="w-4 h-4 text-blue-700 shrink-0" />
                      <span>{selectedMentorForModal.contact.telegram}</span>
                    </div>
                  )}
                  {selectedMentorForModal.contact.officeHours && (
                    <div className="p-3 rounded-lg bg-slate-50 flex items-start gap-2.5 text-slate-700 col-span-full">
                      <Calendar className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                      <span>{selectedMentorForModal.contact.officeHours}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedMentorForModal(null)}
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
