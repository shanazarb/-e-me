import { MentorScientist } from '../types';

export const MENTORS_DATA: MentorScientist[] = [
  {
    id: 'agajanow-hudayguly',
    name: 'Prof. Hudaýguly Agajanow',
    title: 'Fizika-matematika ylymlarynyň doktory, professor',
    category: 'math_physics',
    categoryLabel: 'Fizika we Matematika',
    isHistoricalFigure: true,
    lifespan: '1942 – 2018',
    avatarBg: 'from-amber-600 to-amber-800',
    institution: 'Magtymguly adyndaky Türkmen döwlet uniwersiteti',
    motto: '«Ylym — kökleri ajy, emma miwesi hemmeler üçin datly uly daragtdyr. Okuwçy diňe diňlemezden, barlag geçirip öwrenmelidir.»',
    biography: 'Türkmenistanyň ylmyna we pedagogikasyna çäksiz goşant goşan görnükli fizik alym. 40 ýyldan gowrak uniwersitetde talyplara fizika ugrundan sapak berdi. Orta mekdepler üçin 8-nji we 9-njy synp Fizika okuw kitaplarynyň we tejribe gollanmalarynyň awtory. Onuň ýolbaşçylygynda onlarça kandidatlyk işi goralyp, müňlerçe talyp inžener we alym bolup ýetişdi.',
    publishedBooks: [
      {
        title: 'Fizika: 8-nji synplar üçin okuw kitaby',
        year: '2004',
        gradeOrType: 'Orta mekdep okuw kitaby',
        description: 'Mekanika, ýylylyk hadysalary we termodinamikanyň esaslaryny düşündirýän esasy mekdep kitaby.'
      },
      {
        title: 'Fizika: 9-njy synp (Elektrodinamika we Optika)',
        year: '2006',
        gradeOrType: 'Orta mekdep okuw kitaby',
        description: 'Elektrik meýdany, magnit hadysalary we ýagtylyk optikasy boýunça düşnükli usuly gollanma.'
      },
      {
        title: 'Umumy fizika kursy: Teoriýa we Meseleler ýygyndysy',
        year: '2011',
        gradeOrType: 'Ýokary okuw mekdepleri üçin',
        description: 'Inženerçilik we tebigy ugurly talyplar üçin giňişleýin meseleler kitaby.'
      }
    ],
    olympiadAchievements: [
      {
        year: 2012,
        competition: 'Halkara Fizika Olimpiadasy (IPhO - Estoniýa)',
        medal: 'gold',
        medalLabel: 'Altyn medal',
        students: ['Kerim Allanazarow', 'Dawut Gurbanow']
      },
      {
        year: 2015,
        competition: 'Russiýa Federasiýasy Döwletara Fizika bäsleşigi',
        medal: 'silver',
        medalLabel: 'Kümüş medal',
        students: ['Şöhrat Myradow', 'Merdan Begjanow']
      }
    ],
    contact: {
      email: 'fizika.kafedra@tdu.edu.tm',
      officeHours: 'Ylmy mirasy TDU-nyň Umumy Fizika kafedrasynda tanyşdyrylýar'
    },
    quotesOrAdvice: [
      'Günüňi soragsyz geçirme: her fiziki hadysanyň arkasynda tebigatyň uly kadasy ýatandyr.',
      'Mesele çözmek — zähmeti we sabyrlylygy talap edýär, ýalňyşmakdan gorkmaň, seljermekden lezzet alyň.'
    ]
  },
  {
    id: 'annagurbanow-myratdurdy',
    name: 'Prof. Myratdurdy Annagurbanow',
    title: 'Matematika ylymlarynyň doktory, Türkmenistanyň at gazanan mugallymy',
    category: 'math_physics',
    categoryLabel: 'Matematika we Informatika',
    isHistoricalFigure: false,
    lifespan: 'Häzirki wagtda işjeň halypa',
    avatarBg: 'from-blue-600 to-indigo-800',
    institution: 'Oguz han adyndaky Inžener-tehnologiýalar uniwersiteti',
    motto: '«Matematika — beýniniň gimnastikasydyr. Ol diňe hasaplamak däl, eýsem durmuşda dogry strategik çözgüt tapmak ukybydyr.»',
    biography: 'Halkara matematika olimpiadalarynyň emin agzasy, ýaş zehinleri taýýarlamakda Türkmenistanda iň abraýly halypalaryň biri. 10-njy we 11-nji synp Algebra we Analiziň Başlangyçlary kitaplarynyň awtordaşy. Onuň şägirtleri halkara IMO olimpiadalarynda Türkmenistanyň baýdagyny belende galdyryp gelýärler.',
    publishedBooks: [
      {
        title: 'Algebra we analiziň başlangyçlary: 10-11-nji synplar',
        year: '2017',
        gradeOrType: 'Orta mekdep okuw kitaby',
        description: 'Funksiýalaryň önümi, integrallar we çylşyrymly deňlemeleri çözmegiň iň netijeli usullary.'
      },
      {
        title: 'Olimpiada matematikasynyň usullary we strategiýalary',
        year: '2021',
        gradeOrType: 'Ýöriteleşdirilen gollanma',
        description: 'Sanlar teoriýasy, kombinatorika we geometriki subutnamalar boýunça ýokary derejeli ýygyndy.'
      }
    ],
    olympiadAchievements: [
      {
        year: 2023,
        competition: 'Halkara Matematika Olimpiadasy (IMO - Ýaponiýa)',
        medal: 'silver',
        medalLabel: 'Kümüş medal',
        students: ['Muhammet Myradow', 'Süleýman Jepbarow', 'Aman Orazow']
      },
      {
        year: 2024,
        competition: 'Žautykow adyndaky Halkara Bäsleşik (Almaty)',
        medal: 'gold',
        medalLabel: '2 Altyn, 1 Kümüş medal',
        students: ['Azat Hallyýew', 'Guwanç Annayew']
      }
    ],
    contact: {
      email: 'm.annagurbanov@oguzhan.edu.tm',
      telegram: '@prof_annagurbanov',
      phone: '+993 12 39-85-12',
      officeHours: 'Sişenbe we Penşenbe: 14:00 - 17:00 (Oguz han ITU, 314-nji otag)'
    },
    quotesOrAdvice: [
      'Günde azyndan bir sany kyn olimpiada meselesini çözüň. Beýni myşsa ýalydyr, näçe türgenleşdirseňiz, şonça güýçlener.',
      'Bir meseläni birnäçe usul bilen çözüp bilmek — hakyky alymlygyň ilkinji nyşanydyr.'
    ]
  },
  {
    id: 'hydyrowa-ayna',
    name: 'Dotsent Aýna Hydyrowa',
    title: 'Himiýa ylymlarynyň kandidaty, ýokary derejeli mugallym',
    category: 'chemistry_biology',
    categoryLabel: 'Himiýa we Biologiýa',
    isHistoricalFigure: false,
    lifespan: 'Häzirki wagtda işjeň mugallym',
    avatarBg: 'from-emerald-600 to-teal-800',
    institution: 'Myrat Garryýew adyndaky Türkmenistanyň Döwlet lukmançylyk uniwersiteti',
    motto: '«Himiýa — janly tebigatyň gizlin elipbiýidir. Molekulalary düşünen adam, durmuşyň gözelligine haýran galar.»',
    biography: 'Lukmançylyk uniwersitetinde biohimiýa we derman önümçiliginiň himiki esaslaryndan sapak berýär. 7-nji we 8-nji synp Himiýa okuw kitaplarynyň usuly awtory. Respublikan we halkara Mendeleýew himiýa olimpiadalaryna gatnaşyjy okuwçylary taýýarlamakda köp ýyllyk tejribesi bar.',
    publishedBooks: [
      {
        title: 'Himiýa: 7-nji synplar üçin başlangyç gollanma',
        year: '2016',
        gradeOrType: 'Orta mekdep okuw kitaby',
        description: 'Maddalaryň gurluşy, atomlar we himiki arabaglanyşyklaryň gyzykly tejribeler arkaly beýany.'
      },
      {
        title: 'Bioorganiki himiýanyň esaslary',
        year: '2020',
        gradeOrType: 'Ýokary okuw mekdepleri üçin',
        description: 'Lukmançylyk we farmasewtika talyplary üçin beloklar, fermentler we witaminler barlagy.'
      }
    ],
    olympiadAchievements: [
      {
        year: 2022,
        competition: 'Mendeleýew adyndaky Halkara Himiýa Bäsleşigi',
        medal: 'bronze',
        medalLabel: 'Bürünç medal',
        students: ['Selbi Berdiýewa', 'Japbar Nurberdiýew']
      },
      {
        year: 2024,
        competition: 'Döwlet Himiýa Olimpiadasy (ÝOM-ler arasynda)',
        medal: 'gold',
        medalLabel: '1-nji orun (Toparlaýyn)',
        students: ['Maral Gurbandurdyýewa', 'Ahmet Şyhyýew']
      }
    ],
    contact: {
      email: 'a.hydyrova@tdlu.edu.tm',
      phone: '+993 12 48-12-70',
      officeHours: 'Duşenbe we Çarşenbe: 15:00 - 18:00'
    },
    quotesOrAdvice: [
      'Barlaghanada arassalyk we takyklyk — üstünligiň 90%-idir.',
      'Lukman bolmak isleýän ýaşlar himiýa we biologiýany diňe ýatlaman, olaryň durmuşdaky arabaglanyşygyny öwrenmelidir.'
    ]
  },
  {
    id: 'yagsymyradow-batyr',
    name: 'Batyr Ýagşymyradow',
    title: 'Kompýuter ylymlary boýunça magistr, IT & Olimpiada tälimçisi',
    category: 'it_tech',
    categoryLabel: 'Maglumat Tehnologiýalary & Kiberhowpsuzlyk',
    isHistoricalFigure: false,
    lifespan: 'Häzirki wagtda işjeň tälimçi',
    avatarBg: 'from-cyan-600 to-blue-800',
    institution: 'Türkmenistanyň Telekommunikasiýalar we informatika instituty',
    motto: '«Kody diňe maşyn üçin däl, eýsem adamlaryň durmuşyny ýeňilleşdirmek üçin ýazyň.»',
    biography: 'Algoritmik programmirleme (C++, Python), kiberhowpsuzlyk we bulut tehnologiýalary boýunça ýaşlara tälim berýän ussat inžener. Türkmenistanyň talyplarynyň ICPC we IOI halkara olimpiadalaryna taýýarlyk lagerleriniň gurnaýjysy. Sanly ykdysadyýetiň kibergoragyny kämilleşdirmek boýunça birnäçe milli taslamanyň awtory.',
    publishedBooks: [
      {
        title: 'Algoritmler we maglumatlar gurluşy: Amaly gollanma',
        year: '2022',
        gradeOrType: 'Programmirleme okuw kitaby',
        description: 'Dinamiki programmirleme, graf algoritmleri we maglumat binýatlaryny optimizasiýa etmek.'
      },
      {
        title: 'Kiberhowpsuzlygyň esasy düzgünleri we Tor inženerligi',
        year: '2024',
        gradeOrType: 'Hünär okuw kitaby',
        description: 'Web howpsuzlygy, kriptografiýa we ulgam goragy boýunça tejribe işleri.'
      }
    ],
    olympiadAchievements: [
      {
        year: 2023,
        competition: 'ICPC Merkezi Aziýa Çempionaty (Almaty)',
        medal: 'multiple',
        medalLabel: 'I Derejeli Diplom & Finalist',
        students: ['Begenç Allanow', 'Yhlas Begmyradow', 'Wepa Soltanow']
      },
      {
        year: 2024,
        competition: 'Halkara Sanly Tehnologiýalar Bäsleşigi',
        medal: 'gold',
        medalLabel: 'Altyn medal',
        students: ['Arslan Rozyýew', 'Mekan Gurbanmämmedow']
      }
    ],
    contact: {
      email: 'b.yagshymyradov@ttii.edu.tm',
      telegram: '@batyr_coach_it',
      phone: '+993 65 89-44-12',
      officeHours: 'Her gün: 16:00 - 19:00 (Onlaýn we Ofis)'
    },
    quotesOrAdvice: [
      'Günüňize azyndan 50 setir arassa kod ýazyp başlaň. Teoriýa gowy, emma tejribesiz hünärmen bolup bilmersiňiz.',
      'Iň kyn mesele — iň uly tejribäni berýän meseledir.'
    ]
  },
  {
    id: 'orazow-berdi',
    name: 'Prof. Berdi Orazow',
    title: 'Filologiýa ylymlarynyň doktory, professor, tanymal edebiýatçy alym',
    category: 'languages',
    categoryLabel: 'Diller, Filologiýa we Edebiýat',
    isHistoricalFigure: true,
    lifespan: '1935 – 2012',
    avatarBg: 'from-rose-600 to-red-800',
    institution: 'Magtymguly adyndaky Dil, edebiýat we milli golýazmalar instituty',
    motto: '«Ene dili — halkyň ruhy baýlygy, geçmişiniň şöhraty we geljeginiň binýadydyr.»',
    biography: 'Türkmen edebiýatynyň we dil biliminiň düýpli ylmy esaslaryny derňän, onlarça monografiýalaryň, orta mekdepler üçin Türkmen edebiýaty okuw kitaplarynyň awtory. Magtymguly Pyragynyň, Şabende, Seýdi ýaly nusgawy şahyrlarymyzyň golýazmalaryny ylmy taýdan derňäp, talyplara we mekdep okuwçylaryna miras galdyran beýik alym.',
    publishedBooks: [
      {
        title: 'Türkmen edebiýaty: 10-njy synp üçin okuw kitaby',
        year: '2001',
        gradeOrType: 'Orta mekdep okuw kitaby',
        description: 'XVIII-XIX asyr türkmen nusgawy edebiýatynyň taryhy we derňewi.'
      },
      {
        title: 'Magtymguly Pyragynyň döredijilik ussatlygy',
        year: '2007',
        gradeOrType: 'Ylmy monografiýa',
        description: 'Şahyryň şygyrlaryndaky pelsepewi garaýyşlaryň we söz baýlygynyň lingwistik derňewi.'
      }
    ],
    olympiadAchievements: [
      {
        year: 2010,
        competition: 'Döwlet Diller we Edebiýat Olimpiadasy',
        medal: 'gold',
        medalLabel: '1-nji orun we Baş baýrak',
        students: ['Gülşat Kakajanowa', 'Aýgül Nuryýewa']
      }
    ],
    contact: {
      email: 'edebiyat.institut@ylym.tm',
      officeHours: 'Ylmy mirasy Ylymlar Akademiýasynda we TDU-da saklanylýar'
    },
    quotesOrAdvice: [
      'Kitap okamadyk adam diňe bir ömür ýaşaýar, köp okan adam bolsa müňlerçe ömrüň paýhasyny görýär.',
      'Sözüň gymmatyny biliň, her aýdylan söz ynsanyň medeniýetiniň aýnasydyr.'
    ]
  },
  {
    id: 'meretgeldiyew-sohrat',
    name: 'Dr. Şöhrat Meretgeldiýew',
    title: 'Lukmançylyk ylymlarynyň doktory, professor, hirurg',
    category: 'medicine',
    categoryLabel: 'Lukmançylyk we Farmasewtika',
    isHistoricalFigure: false,
    lifespan: 'Häzirki wagtda işjeň alym-lukman',
    avatarBg: 'from-teal-600 to-emerald-900',
    institution: 'Halkara Kardiologiýa Ylmy-Kliniki Merkezi',
    motto: '«Lukmanyň iň esasy dermany — onuň mähirli sözleri, sowukganly aňy we ykjam elidir.»',
    biography: 'Türkmenistanda kardiologiýa we damar hirurgiýasy boýunça tanymal hünärmen. Talyp ýaşlara kliniki tejribäni we döwrebap hirurgiki usullary öwredýär. «Kliniki hirurgiýa» we «Kardiologiýanyň esaslary» boýunça ýörite okuw gollanmalarynyň awtory. Onlarça halkara ylmy maslahatlarda çykyş eden.',
    publishedBooks: [
      {
        title: 'Döwrebap amaly kardiologiýa',
        year: '2019',
        gradeOrType: 'Lukmançylyk talyplary üçin',
        description: 'Ýürek-damar keselleriniň anyklanyşy we bejerilişinde iň täze tehnologiýalar.'
      },
      {
        title: 'Lukmançylyk etikasy we Deontologiýa',
        year: '2023',
        gradeOrType: 'Pedagogik-amaly gollanma',
        description: 'Lukman bilen näsagyň arasyndaky gatnaşyklar we keseli duýup bejermek usullary.'
      }
    ],
    olympiadAchievements: [
      {
        year: 2023,
        competition: 'Lukmançylyk Talyplarynyň Bütindünýä Bäsleşigi (Ankara)',
        medal: 'gold',
        medalLabel: 'Iki Altyn medal',
        students: ['Mergen Annaberdiýew', 'Aýlar Saparmyradowa']
      }
    ],
    contact: {
      email: 'dr.meretgeldiyev@health.gov.tm',
      phone: '+993 12 40-15-55',
      officeHours: 'Çarşenbe we Anna günleri: 10:00 - 13:00'
    },
    quotesOrAdvice: [
      'Lukmançylyk — bu käre däl, eýsem bütin ömrüňi bagyşlamaly mukaddes gullukdyr.',
      'Öz saglygyny aýap bilmedik adam beýlekileriň saglygyna dogry seredip bilmez.'
    ]
  }
];
