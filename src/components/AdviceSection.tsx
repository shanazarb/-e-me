import React from 'react';
import { BookOpen, Sparkles, Award, Lightbulb, Compass, CheckCircle } from 'lucide-react';

export const AdviceSection: React.FC = () => {
  const advices = [
    {
      icon: Compass,
      title: 'Kär saýlanyňyzda ukybyňyzy we şatlyk berýän işiňizi utgaşdyryň',
      text: 'Diňe adyna ýa-da wagtlaýyn gyzyklanma görä däl-de, günüňizi 8 sagat şol işe bagyşlap biljekdigiňizi we onuň size ruhy kanagat berýändigini göz öňünde tutuň. «Öz başarnygyňy bil» testi şu ýerde ilkinji ugrukdyryjydyr.',
      category: 'Hünär saýlawy'
    },
    {
      icon: BookOpen,
      title: 'Mekdep okuw kitaplarynyň esaslaryny çuňňur özleşdiriň',
      text: 'Professor Hudaýguly Agajanow, Myratdurdy Annagurbanow ýaly uly alymlarymyzyň ýazan kitaplary ýönekeý dilden çuňňur ylmy düşünjeleri berýär. Şol esaslary bilmezden, ýokary tehnologiýalara çalasyn ýetip bolmaýar.',
      category: 'Ylmy çeşmeler'
    },
    {
      icon: Award,
      title: 'Olimpiada taýýarlygy: gündelik erjellik we kyn meseleler',
      text: 'Halypa mugallymlaryň nygtaýşy ýaly, olimpiada ýeňişleri bir gijede gazanylmaýar. Günde azyndan 1-2 sany çözmesi kyn meseläni çözüp, ýalňyşlaryňyzy seljermek — beýniniň iň güýçli türgenleşigidir.',
      category: 'Olimpiada tejribesi'
    },
    {
      icon: Lightbulb,
      title: 'Döwrebap tehnologiýalary we dilleri utgaşdyryň',
      text: 'Haýsy kärde işleseňiz hem — lukmançylyk, inženerlik, oba hojalygy ýa-da pedagogika — sanly tehnologiýalary we iňlis dilini bilmek sizi dünýä derejeli hünärmene öwrer.',
      category: 'Kämilleşmek'
    }
  ];

  return (
    <section id="advice-section" className="py-14 lg:py-22 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-semibold mb-3">
            <Lightbulb className="w-3.5 h-3.5 text-blue-700" />
            <span>Bilim we Terbiýe</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Halypalaryň Nesihatlary we Okuwçylar üçin Maslahatlar
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Türkmenistanyň ylym we bilim meýdanynda uly yz galdyran professorlaryň hem-de halypalaryň ýaş nesle galdyran gymmatly nesihatlary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advices.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-white text-blue-900 border border-slate-200 font-mono">
                      {adv.category}
                    </span>
                    <Icon className="w-5 h-5 text-blue-900" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {adv.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {adv.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
