import { University } from '../types';

export const UNIVERSITIES_DATA: University[] = [
  {
    id: 'tdu',
    name: 'Magtymguly adyndaky Türkmen döwlet uniwersiteti',
    shortName: 'TDU',
    city: 'Aşgabat şäheri',
    type: 'national',
    typeLabel: 'Baş döwlet uniwersiteti',
    description: 'Türkmenistanyň baş uniwersiteti bolup, 12 sany fakultetinde tebigy, takyk, ynsanperwer we hukuk ylymlary boýunça ýokary hünärli hünärmenleri taýýarlaýar.',
    establishedYear: 1950,
    badgeColor: 'blue',
    websiteUrl: 'https://tdu.edu.tm',
    faculties: [
      {
        name: 'Matematika fakulteti',
        departments: [
          'Matematiki analiz kafedrasy',
          'Algebra we ähtimallyklar nazaryýeti kafedrasy',
          'Umumy matematika kafedrasy'
        ],
        careerMatchTrait: ['science', 'tech'],
        careerProspects: ['Matematik-alym', 'Aktuariýa we ähtimallyklar seljerijisi', 'Matematika mugallymy']
      },
      {
        name: 'Maglumat tehnologiýalary fakulteti',
        departments: [
          'Amaly matematika we informatika kafedrasy',
          'Maglumatlar ulgamlary we tehnologiýalary kafedrasy'
        ],
        careerMatchTrait: ['tech'],
        careerProspects: ['Amaly matematik-programmist', 'Maglumat ulgamlary inženeri', 'Maglumatlar bazasy arhitektory']
      },
      {
        name: 'Fizika fakulteti',
        departments: [
          'Umumy fizika kafedrasy',
          'Nazary we eksperimental fizika kafedrasy',
          'Radiofizika we elektronika kafedrasy'
        ],
        careerMatchTrait: ['science', 'tech'],
        careerProspects: ['Fizik-barlagçy', 'Radioelektronika inženeri', 'Eksperimental fizika hünärmeni']
      },
      {
        name: 'Himiýa fakulteti',
        departments: [
          'Organiki himiýa kafedrasy',
          'Fiziki himiýa kafedrasy',
          'Organiki däl we analitiki himiýa kafedrasy'
        ],
        careerMatchTrait: ['science', 'medicine'],
        careerProspects: ['Himiýa seljerijisi', 'Analitiki barlaghana tehnology', 'Önümçilik himigi']
      },
      {
        name: 'Biologiýa fakulteti',
        departments: [
          'Botanika kafedrasy',
          'Zoologiýa kafedrasy',
          'Psihologiýa kafedrasy'
        ],
        careerMatchTrait: ['science', 'medicine'],
        careerProspects: ['Biolog-gözlegçi', 'Zoolog we botanik', 'Psiholog-maslahatçy']
      },
      {
        name: 'Geografiýa fakulteti',
        departments: [
          'Geografiýa kafedrasy',
          'Ekologiýa kafedrasy',
          'Gidrometeorologiýa kafedrasy',
          'Kartografiýa kafedrasy'
        ],
        careerMatchTrait: ['science'],
        careerProspects: ['Kartograf-geodezist', 'Gidrometeorolog', 'Ekologiýa gözegçisi']
      },
      {
        name: 'Türkmen dili we edebiýaty fakulteti',
        departments: [
          'Türkmen dili kafedrasy',
          'Türkmen edebiýaty kafedrasy',
          'Žurnalistika kafedrasy',
          'Pedagogika kafedrasy'
        ],
        careerMatchTrait: ['humanities'],
        careerProspects: ['Filolog-edebiýatçy', 'Žurnalist we habarçy', 'Türkmen dili mugallymy']
      },
      {
        name: 'Iňlis dili we edebiýaty fakulteti',
        departments: ['Iňlis dili grammatikasy', 'Terjime nazaryýeti we tejribesi', 'Iňlis edebiýaty'],
        careerMatchTrait: ['humanities'],
        careerProspects: ['Sinxron terjimeçi', 'Iňlis dili mugallymy', 'Halkara aragatnaşyk geňeşçisi']
      },
      {
        name: 'Roman-german we gündogar dilleri fakulteti',
        departments: ['Nemes dili', 'Fransuz dili', 'Pars we arap dilleri', 'Hytaý dili'],
        careerMatchTrait: ['humanities'],
        careerProspects: ['Gündogarşynas', 'Diplomatik terjimeçi', 'Diller mugallymy']
      },
      {
        name: 'Taryh fakulteti',
        departments: ['Türkmenistanyň taryhy', 'Dünýä taryhy', 'Arheologiýa we etnologiýa'],
        careerMatchTrait: ['humanities'],
        careerProspects: ['Taryhçy-arhiwçi', 'Muzeýşynas we arheolog', 'Taryh mugallymy']
      },
      {
        name: 'Hukuk fakulteti',
        departments: [
          'Konstitusiýa hukugy kafedrasy',
          'Raýat hukugy kafedrasy',
          'Jenaýat hukugy kafedrasy'
        ],
        careerMatchTrait: ['humanities', 'economics'],
        careerProspects: ['Kazyýet we prokuratura işgäri', 'Adwokat we hukuk geňeşçisi', 'Notarius']
      }
    ],
    admissionsRequirements: [
      'Orta bilim hakynda şahadatnama (Attestat) ýa-da orta hünär diplom',
      'Ugur dersleri boýunça döwlet giriş synaglary (Matematika/Fizika, Himiýa/Biologiýa ýa-da Edebiýat/Taryh)',
      'Bellenen saglyk kepilnamasy (№ 086/h görnüşi)'
    ]
  },
  {
    id: 'oguzhan',
    name: 'Oguz han adyndaky Inžener-tehnologiýalar uniwersiteti',
    shortName: 'TITU',
    city: 'Aşgabat şäheri',
    type: 'national',
    typeLabel: 'Ýokary tehnologiýalar uniwersiteti',
    description: 'Resmi sahypasy: etut.edu.tm (oguzhan.edu.tm). Okuw prosesi iňlis we ýapon dillerinde alnyp barylýar. 5 sany innowasion fakultetinde sanly kiberhowpsuzlyk, emeli aň, nanotehnologiýalar, mehatronika we biotehnologiýalar boýunça dünýä derejeli inženerler taýýarlanýar.',
    establishedYear: 2016,
    badgeColor: 'indigo',
    websiteUrl: 'https://etut.edu.tm',
    faculties: [
      {
        name: 'Kompýuter ylymlary we maglumat tehnologiýalary fakulteti',
        departments: [
          'Sanly infrastruktura we kiberhowpsuzlyk',
          'Emeli aň we ekspert ulgamlary',
          'Maglumat ulgamlary we tehnologiýalary',
          'Mobil we tor inžiniringi',
          'Animasiýa we grafiki dizaýny',
          'Maglumatlary goramagyň tehniki serişdeleri'
        ],
        careerMatchTrait: ['tech', 'art'],
        careerProspects: [
          'Emeli aň inženeri (AI Developer)',
          'Kiberhowpsuzlyk boýunça auditor',
          'Full-Stack we Mobil goşundy döredijisi',
          'Grafiki we 3D animasiýa dizaýneri'
        ]
      },
      {
        name: 'Kiberfiziki ulgamlar fakulteti',
        departments: [
          'Mehatronika we robot tehnikasy',
          'Awtomatlaşdyrmak we dolandyrmak',
          'Elektronika we nanoelektronika',
          'Biolukmançylyk elektronikasy',
          'Amaly matematika we inženerçilik fizikasy'
        ],
        careerMatchTrait: ['tech', 'science'],
        careerProspects: [
          'Robototehnika inženeri',
          'Biolukmançylyk enjamlary tehnology',
          'Mikroelektronika we sensor inženeri'
        ]
      },
      {
        name: 'Himiki we nanotehnologiýalar fakulteti',
        departments: [
          'Nanomateriallar tehnologiýasy',
          'Himiki inžiniring',
          'Materiallary öwrenmek we täze materiallar',
          'Himiýa tehnologiýasy'
        ],
        careerMatchTrait: ['science', 'tech'],
        careerProspects: [
          'Nanotehnolog',
          'Täze materiallary dörediji alym',
          'Önümçilik himiki inženeri'
        ]
      },
      {
        name: 'Biotehnologiýalar we ekologiýa fakulteti',
        departments: [
          'Öýjük we molekulýar biologiýa',
          'Genetika we bioinžiniring',
          'Biotehnologiýa we mikrobiologiýa',
          'Ekologiýa we tebigatdan peýdalanmak',
          'Kartografiýa we geoinformatika'
        ],
        careerMatchTrait: ['science', 'medicine'],
        careerProspects: [
          'Bioinžener we genetik',
          'Biotehnologiki önümçilik hünärmeni',
          'GIS we geoinformatika seljerijisi'
        ]
      },
      {
        name: 'Innowasiýalaryň ykdysadyýeti fakulteti',
        departments: [
          'Innowasion ykdysadyýet we menejment',
          'Tehnologiýa işewürligi we telekeçilik',
          'Işgärleri dolandyrmak',
          'Filologiýa (Tehniki iňlis we ýapon dili)'
        ],
        careerMatchTrait: ['economics', 'humanities', 'tech'],
        careerProspects: [
          'Tehnologiki taslama ýolbaşçysy (Product Manager)',
          'Innowasion maýa goýum geňeşçisi',
          'Işewürlik tehniki terjimeçisi'
        ]
      }
    ],
    admissionsRequirements: [
      'Iňlis dilini bilmek derejesi we dersler boýunça ýazmaça/dilden synag',
      'Matematika, Fizika ýa-da Himiýa derslerinden giriş synagy',
      'Olimpiada şahadatnamalary we sanly taslamalary bolan dalaşgärlere artykmaçlyk'
    ]
  },
  {
    id: 'tdlu',
    name: 'Myrat Garryýew adyndaky Türkmenistanyň Döwlet lukmançylyk uniwersiteti',
    shortName: 'TDLU',
    city: 'Aşgabat şäheri',
    type: 'national',
    typeLabel: 'Döwlet lukmançylyk uniwersiteti',
    description: 'Resmi sahypasy: tdlu.edu.tm. Türkmenistanda saglygy goraýyş ulgamy üçin lukmanlary, hirurglary, çagalar lukmanlaryny, stomatologlary, farmasewtleri we sanitariýa lukmanlaryny taýýarlaýan baş merkez.',
    establishedYear: 1931,
    badgeColor: 'emerald',
    websiteUrl: 'https://tdlu.edu.tm',
    faculties: [
      {
        name: 'Kesel bejeriş fakulteti',
        departments: ['Bejeriş işi', 'Gospital terapiýasy', 'Umumy hirurgiýa', 'Kardiologiýa we saglygy dikeldiş'],
        careerMatchTrait: ['medicine'],
        careerProspects: ['Lukman-terapewt', 'Hirurg', 'Kardiolog', 'Reanimatolog-anesteziolog']
      },
      {
        name: 'Pediatriýa fakulteti',
        departments: ['Çaga keselleri', 'Gospital pediatriýasy', 'Çagalar hirurgiýasy we neonatologiýa'],
        careerMatchTrait: ['medicine'],
        careerProspects: ['Pediatr-lukman', 'Çagalar hirurgy', 'Neonatolog']
      },
      {
        name: 'Stomatologiýa fakulteti',
        departments: ['Terapewtik stomatologiýa', 'Ortopedik stomatologiýa', 'Çagalar stomatologiýasy'],
        careerMatchTrait: ['medicine', 'art'],
        careerProspects: ['Stomatolog-lukman', 'Ortodont', 'Çagalar diş lukmany']
      },
      {
        name: 'Farmasiýa fakulteti',
        departments: ['Derman serişdeleriniň tehnologiýasy', 'Farmakognoziýa we dermanhana işi', 'Toksikologik himiýa'],
        careerMatchTrait: ['medicine', 'science'],
        careerProspects: ['Prowizor-farmasewt', 'Derman senagaty tehnology', 'Kliniki derman seljerijisi']
      },
      {
        name: 'Keselleriň öňüni alyş fakulteti',
        departments: ['Epidemiologiýa', 'Umumy gigiýena we sanitariýa', 'Mikrobiologiýa we wirusologiýa'],
        careerMatchTrait: ['medicine', 'science'],
        careerProspects: ['Epidemiolog', 'Sanitariýa lukmany', 'Laboratoriýa gözegçisi']
      },
      {
        name: 'Sport lukmançylygy fakulteti',
        departments: ['Sport lukmançylygy', 'Dikeldiş we fizioterapiýa', 'Watançylyk we dikeldiş lukmançylygy'],
        careerMatchTrait: ['medicine'],
        careerProspects: ['Sport toparlarynyň lukmany', 'Reabilitolog-lukman', 'Fizioterapewt']
      }
    ],
    admissionsRequirements: [
      'Biologiýa, Himiýa we Türkmen dili derslerinden giriş synaglary',
      'Saglyk ýagdaýy boýunça doly lukmançylyk barlagyndan geçmek',
      'Ynsanperwerlik we lukmançylyk etikasy söhbetdeşligi'
    ]
  },
  {
    id: 'hngu',
    name: 'Ýagşygeldi Kakaýew adyndaky Halkara nebit we gaz uniwersiteti',
    shortName: 'HNGU',
    city: 'Aşgabat şäheri',
    type: 'national',
    typeLabel: 'Nebit-gaz we energetika uniwersiteti',
    description: 'Resmi sahypasy: iogu.edu.tm. Türkmenistanyň ýangyç-energetika pudagy, geologiýa, gazhimiýa, tor ulgamlary we kiberhowpsuzlyk boýunça ýokary hünärli inženerlerini taýýarlaýar.',
    establishedYear: 2012,
    badgeColor: 'amber',
    websiteUrl: 'https://iogu.edu.tm',
    faculties: [
      {
        name: 'Nebit we gaz fakulteti',
        departments: ['Nebit we gaz guýularyny burawlamak', 'Känleri özleşdirmek we ulanmak', 'Trubaprowod ulgamlary'],
        careerMatchTrait: ['tech'],
        careerProspects: ['Buraw inženeri', 'Nebit-gaz önümçilik inženeri', 'Truba transport tehnology']
      },
      {
        name: 'Geologiýa fakulteti',
        departments: ['Nebit-gaz känleriniň geologiýasy', 'Geofiziki gözleg usullary', 'Gidrogeologiýa we inženerçilik geologiýasy'],
        careerMatchTrait: ['science', 'tech'],
        careerProspects: ['Geolog-gözlegçi', 'Geofizik', 'Gatlaklary seljeriji']
      },
      {
        name: 'Sanly tehnologiýalar we kiberhowpsuzlyk fakulteti',
        departments: ['Kompýuter ulgamlary we torlary', 'Kiberhowpsuzlyk', 'Maglumat ulgamlary we tehnologiýalary'],
        careerMatchTrait: ['tech'],
        careerProspects: ['Kiberhowpsuzlyk inženeri', 'Senagat awtomatika programmisti', 'Tor administratory']
      },
      {
        name: 'Himiýa tehnologiýasy we ekologiýa fakulteti',
        departments: ['Nebiti we gazy gaýtadan işlemegiň himiki tehnologiýasy', 'Senagat ekologiýasy we tebigaty goramak'],
        careerMatchTrait: ['science', 'tech'],
        careerProspects: ['Gazhimiýa zawody tehnology', 'Önümçilik ekology', 'Himiýa inženeri']
      },
      {
        name: 'Energetika we inženerçilik desgalary fakulteti',
        departments: ['Elektrik stansiýalary we torlary', 'Senagat binalarynyň we desgalarynyň gurluşygy'],
        careerMatchTrait: ['tech'],
        careerProspects: ['Energetik-inžener', 'Senagat desgalarynyň gurluşyk inženeri']
      },
      {
        name: 'Ykdysadyýet we dolandyryş fakulteti',
        departments: ['Nebit-gaz pudagynyň ykdysadyýeti', 'Önümçilik menejmenti', 'Buhgalterçilik we audit'],
        careerMatchTrait: ['economics'],
        careerProspects: ['Nebit-gaz pudagynyň ykdysatçysy', 'Taslama maliýeçisi', 'Auditor']
      }
    ],
    admissionsRequirements: [
      'Matematika, Fizika we Himiýa derslerinden döwlet giriş synagy',
      'Orta bilim attestaty ýa-da orta hünär bilimi diplom'
    ]
  },
  {
    id: 'ttii',
    name: 'Türkmenistanyň Telekommunikasiýalar we informatika instituty',
    shortName: 'TTII',
    city: 'Aşgabat şäheri',
    type: 'institute',
    typeLabel: 'Aragatnaşyk we IT instituty',
    description: 'Resmi sahypasy: itit.edu.tm. Ýurdumyzyň sanly ykdysadyýeti, kiberhowpsuzlyk, aragatnaşyk torlary, mobil we web programmirleme, telekommunikasiýalar üçin hünärmenleri taýýarlaýar.',
    establishedYear: 2019,
    badgeColor: 'cyan',
    websiteUrl: 'https://itit.edu.tm',
    faculties: [
      {
        name: 'Maglumat ulgamlarynyň howpsuzlygy fakulteti',
        departments: [
          'Maglumat howpsuzlygy',
          'Telekommunikasiýa ulgamlarynyň goragy',
          'Hasaplaýyş torlarynyň programma üpjünçiligi',
          'Programma inženerligi'
        ],
        careerMatchTrait: ['tech'],
        careerProspects: [
          'Kiberhowpsuzlyk boýunça hünärmen',
          'Kriptografik gorag inženeri',
          'Programma inženeri (Software Engineer)'
        ]
      },
      {
        name: 'Maglumat tehnologiýalary we programmirleme fakulteti',
        departments: [
          'Maglumat ulgamlary we tehnologiýalary',
          'Emeli aň ulgamlary we maglumatlary seljermek (Data Science)',
          'Amaly informatika we awtomatlaşdyrma'
        ],
        careerMatchTrait: ['tech'],
        careerProspects: [
          'Emeli aň programmisti',
          'Full-Stack Developer',
          'Maglumatlar bazasy arhitektory'
        ]
      },
      {
        name: 'Telekommunikasiýalar fakulteti',
        departments: [
          'Aragatnaşyk torlary we kommutasiýa ulgamlary',
          'Köpkanally telekommunikasiýa ulgamlary',
          'Optiki aragatnaşyk torlary'
        ],
        careerMatchTrait: ['tech'],
        careerProspects: [
          'Aragatnaşyk inženeri',
          'Optiki süýüm torlarynyň tehnology',
          'Tor menejeri'
        ]
      },
      {
        name: 'Aragatnaşygyň radiotehnologiýalary fakulteti',
        departments: [
          'Radioaragatnaşyk, radioýaýlym we telewideniýe',
          'Radioelektron ulgamlary we toplumlary',
          'Senagat elektronikasy we elektron howpsuzlyk'
        ],
        careerMatchTrait: ['tech'],
        careerProspects: [
          'Radiotehnika inženeri',
          'Tele-radio ýaýlymlar tehnology',
          'Elektronika inženeri'
        ]
      },
      {
        name: 'Sanly ykdysadyýet we dolandyryş fakulteti',
        departments: [
          'Biznes-informatika',
          'Kärhananyň ykdysadyýeti we sanly dolandyryş',
          'Sanly logistika'
        ],
        careerMatchTrait: ['economics', 'tech'],
        careerProspects: [
          'Biznes analitik',
          'IT taslama dolandyryjysy',
          'Sanly logistika hünärmeni'
        ]
      }
    ],
    admissionsRequirements: [
      'Matematika, Fizika we Türkmen dili derslerinden giriş synaglary',
      'Orta bilim hakyndaky attestat'
    ]
  },
  {
    id: 'tdydi',
    name: 'Türkmen döwlet ykdysadyýet we dolandyryş instituty',
    shortName: 'TDYDI',
    city: 'Aşgabat şäheri',
    type: 'institute',
    typeLabel: 'Ykdysadyýet we maliýe instituty',
    description: 'Resmi sahypasy: tsiem.edu.tm. Milli ykdysadyýet, bank ulgamy, maliýe, salgyt, buhgalteriýa, audit, halkara söwda we marketing boýunça ýokary hünärli ykdysatçylary taýýarlaýar.',
    establishedYear: 1980,
    badgeColor: 'violet',
    websiteUrl: 'https://tsiem.edu.tm',
    faculties: [
      {
        name: 'Maliýe fakulteti',
        departments: ['Maliýe we karz', 'Bank işi', 'Salgytlar we salgyt salmak', 'Gymmatly kagyzlar bazary'],
        careerMatchTrait: ['economics'],
        careerProspects: ['Maliýe analitigi', 'Bankir', 'Salgyt inspektory', 'Maýa goýum geňeşçisi']
      },
      {
        name: 'Ykdysadyýet fakulteti',
        departments: ['Ykdysady nazaryýet', 'Zähmetiň ykdysadyýeti', 'Statistika', 'Buhgalterçilik hasaba alnyşy we audit'],
        careerMatchTrait: ['economics'],
        careerProspects: ['Baş ykdysatçy', 'Auditor', 'Statistika we maglumat seljerijisi']
      },
      {
        name: 'Menejment fakulteti',
        departments: ['Kärhananyň dolandyrylyşy', 'Dünýä ykdysadyýeti we halkara gatnaşyklar', 'Sanly ykdysadyýet'],
        careerMatchTrait: ['economics', 'tech'],
        careerProspects: ['Baş menejer', 'Halkara işewürlik utgaşdyryjysy', 'FinTech hünärmeni']
      },
      {
        name: 'Marketing fakulteti',
        departments: ['Marketing we bazar seljermesi', 'Halkara söwda we logistika', 'Harytşynaslyk'],
        careerMatchTrait: ['economics'],
        careerProspects: ['Marketing direktory', 'Bazar barlagçysy', 'Logistika menejeri']
      }
    ],
    admissionsRequirements: [
      'Matematika, Türkmenistanyň taryhy we Türkmen dili derslerinden döwlet synaglary'
    ]
  },
  {
    id: 'tdbgi',
    name: 'Türkmen döwlet binagärlik-gurluşyk instituty',
    shortName: 'TDBGI',
    city: 'Aşgabat şäheri',
    type: 'institute',
    typeLabel: 'Binagärlik we inženerlik instituty',
    description: 'Resmi sahypasy: tdbgi.edu.tm. Türkmenistanyň ak mermerli binalaryny, ýollaryny, köprülerini, senagat desgalaryny dizaýn edýän we gurluşygyny dolandyrýan arhitektorlary hem-de inženerleri taýýarlaýar.',
    establishedYear: 1963,
    badgeColor: 'teal',
    websiteUrl: 'https://tdbgi.edu.tm',
    faculties: [
      {
        name: 'Binagärlik-gurluşyk fakulteti',
        departments: [
          'Binagärlik we şähergurluşyk',
          'Binalaryň we desgalaryň dizaýny',
          'Senagat we raýat gurluşygy'
        ],
        careerMatchTrait: ['art', 'tech'],
        careerProspects: ['Baş arhitektor', 'Şäher meýilnamalaşdyryjy', 'Bina konstruktory', 'Interýer dizaýneri']
      },
      {
        name: 'Ýol gurluşygy fakulteti',
        departments: ['Awtomobil ýollarynyň we aerodromlaryň gurluşygy', 'Köprüler we tonneller', 'Ýerasty desgalar'],
        careerMatchTrait: ['tech'],
        careerProspects: ['Ýol gurluşyk inženeri', 'Köpri we tonnel konstruktory']
      },
      {
        name: 'Kompýuter tehnologiýasy we awtomatika fakulteti',
        departments: ['Awtomatlaşdyrylan ulgamlar', 'Maglumat-ölçeg tehnikasy', 'Tehniki ulgamlarda dolandyryş'],
        careerMatchTrait: ['tech'],
        careerProspects: ['Awtomatika inženeri', 'Senagat kontrollerlerini programmaçysy']
      },
      {
        name: 'Himiýa tehnologiýasy fakulteti',
        departments: ['Gurluşyk materiallarynyň himiki tehnologiýasy', 'Silikat maddalary we polimerler'],
        careerMatchTrait: ['science', 'tech'],
        careerProspects: ['Gurluşyk materiallary tehnology', 'Önümçilik himigi']
      },
      {
        name: 'Inžener-mehanika fakulteti',
        departments: ['Gurluşyk maşynlary we enjamlary', 'Lift we galdyryjy-transport desgalary'],
        careerMatchTrait: ['tech'],
        careerProspects: ['Mehanik-inžener', 'Senagat enjamlary gözegçisi']
      },
      {
        name: 'Ykdysadyýet we dolandyryş fakulteti',
        departments: ['Gurluşykda ykdysadyýet we dolandyryş', 'Gozgalmaýan emlägiň ekspertizasy'],
        careerMatchTrait: ['economics'],
        careerProspects: ['Gurluşyk smetaçysy', 'Taslama ykdysatçysy']
      }
    ],
    admissionsRequirements: [
      'Binagärlik ugry üçin çyzgy we surat çekmek döredijilik synagy',
      'Matematika we Fizika derslerinden giriş synaglary'
    ]
  },
  {
    id: 'tmddi',
    name: 'Döwletmämmet Azady adyndaky Türkmen milli dünýä dilleri instituty',
    shortName: 'TMDDI',
    city: 'Aşgabat şäheri',
    type: 'institute',
    typeLabel: 'Dünýä dilleri instituty',
    description: 'Resmi sahypasy: datmddi.edu.tm. Iňlis, Rus, Hytaý, Ýapon, Koreý, Arap, Pars, Türk, Nemes, Fransuz, Ispan, Italýan dillerini çuňňur öwredip, ýokary derejeli terjimeçileri we pedagoglary taýýarlaýar.',
    establishedYear: 1972,
    badgeColor: 'rose',
    websiteUrl: 'https://datmddi.edu.tm',
    faculties: [
      {
        name: 'Iňlis dili we edebiýaty fakulteti',
        departments: ['Iňlis dili terjimeçiligi', 'Iňlis dili mugallymçylygy', 'Amaly lingwistika'],
        careerMatchTrait: ['humanities'],
        careerProspects: ['Sinxron terjimeçi', 'ÝOM mugallymy', 'Halkara hyzmatdaşlyk wekili']
      },
      {
        name: 'Gündogar dilleri we edebiýaty fakulteti',
        departments: ['Hytaý dili', 'Ýapon dili', 'Koreý dili', 'Arap dili', 'Pars dili', 'Türk dili'],
        careerMatchTrait: ['humanities'],
        careerProspects: ['Gündogarşynas-diplomat', 'Halkara söwda terjimeçisi', 'Ilçihana işgäri']
      },
      {
        name: 'Ýewropa dilleri we edebiýaty fakulteti',
        departments: ['Nemes dili', 'Fransuz dili', 'Ispan dili', 'Italýan dili'],
        careerMatchTrait: ['humanities'],
        careerProspects: ['Ýewropa dilleri terjimeçisi', 'Medeni gatnaşyklar boýunça bilermen']
      },
      {
        name: 'Rus dili we edebiýaty fakulteti',
        departments: ['Rus dili filologiýasy', 'Rus edebiýaty', 'Terjimeşynaslyk'],
        careerMatchTrait: ['humanities'],
        careerProspects: ['Rus dili terjimeçisi', 'Redaktor', 'Mugallym']
      }
    ],
    admissionsRequirements: [
      'Daşary ýurt dili, Türkmen dili we edebiýaty, Türkmenistanyň taryhy'
    ]
  },
  {
    id: 'hgi',
    name: 'Türkmenistanyň Daşary işler ministrliginiň Halkara gatnaşyklary instituty',
    shortName: 'HGI (IIRMFA)',
    city: 'Aşgabat şäheri',
    type: 'institute',
    typeLabel: 'Diplomatiýa instituty',
    description: 'Resmi sahypasy: iirmfa.edu.tm. Türkmenistanyň daşary syýasaty, halkara diplomatiýasy, halkara hukugy, halkara ykdysady gatnaşyklary we halkara žurnalistikasy boýunça diplomatlary taýýarlaýan baş bilim ojagy.',
    establishedYear: 2008,
    badgeColor: 'blue',
    websiteUrl: 'https://iirmfa.edu.tm',
    faculties: [
      {
        name: 'Halkara gatnaşyklary fakulteti',
        departments: ['Diplomatik gulluk we daşary syýasat', 'Halkara gatnaşyklary nazaryýeti'],
        careerMatchTrait: ['humanities'],
        careerProspects: ['Diplomat', 'Daşary işler ministrliginiň işgäri', 'Ilçihana attaşesi']
      },
      {
        name: 'Halkara hukugy fakulteti',
        departments: ['Halkara köpçülikleýin hukugy', 'Halkara hususy hukugy', 'Deňeşdirme hukukşynaslygy'],
        careerMatchTrait: ['humanities', 'economics'],
        careerProspects: ['Halkara ýurist-geňeşçi', 'Arbitraž kazyýeti bilermeni']
      },
      {
        name: 'Halkara ykdysady gatnaşyklary fakulteti',
        departments: ['Bütindünýä ykdysadyýeti', 'Halkara maýa goýumlary we söwda syýasaty'],
        careerMatchTrait: ['economics'],
        careerProspects: ['Halkara söwda wekili', 'Global ykdysady gatnaşyklar bilermeni']
      },
      {
        name: 'Halkara žurnalistikasy fakulteti',
        departments: ['Halkara habarlar serişdeleri', 'Jemgyýetçilik bilen aragatnaşyk (PR)', 'Media diplomatiýasy'],
        careerMatchTrait: ['humanities', 'art'],
        careerProspects: ['Halkara žurnalist', 'Metbugat geňeşçisi (Press-sekretar)', 'Media seljerijisi']
      }
    ],
    admissionsRequirements: [
      'Türkmenistanyň taryhy, Iňlis dili, Türkmen dili we edebiýaty',
      'Diplomatik hünäre ugrukdyrylan söhbetdeşlik'
    ]
  },
  {
    id: 'metu-partner',
    name: 'Orta Gündogar Tehniki Uniwersiteti (METU / ODTÜ)',
    shortName: 'METU (Türkiýe)',
    city: 'Ankara, Türkiýe',
    type: 'international_partner',
    typeLabel: 'Halkara hyzmatdaş uniwersitet',
    description: 'Resmi sahypasy: metu.edu.tr. Dünýä reýtinglerinde ýokary orunlary eýeleýän, inženerçilik, IT, arhitektura we tebigy ylymlar boýunça Türkmenistanyň ýaşlarynyň iň köp saýlaýan abraýly daşary ýurt uniwersitetleriniň biri.',
    establishedYear: 1956,
    badgeColor: 'red',
    websiteUrl: 'https://metu.edu.tr',
    faculties: [
      {
        name: 'Inženerçilik fakulteti',
        departments: ['Kompýuter inženerligi', 'Aerosmos we uçar gurluşygy', 'Himiýa inženerligi', 'Elektrik-elektronika'],
        careerMatchTrait: ['tech', 'science'],
        careerProspects: ['Global IT inženeri', 'Kosmos we uçar tehnologiýalary barlagçysy']
      },
      {
        name: 'Binagärlik fakulteti',
        departments: ['Binagärlik', 'Şäher we sebit meýilnamalaşdyryş', 'Senagat dizaýny'],
        careerMatchTrait: ['art', 'tech'],
        careerProspects: ['Halkara arhitektor', 'Şäher meýilnamalaşdyryjy']
      },
      {
        name: 'Ykdysadyýet we dolandyryş ylymlary fakulteti',
        departments: ['Halkara gatnaşyklar', 'Biznes administrasiýasy', 'Global ykdysadyýet'],
        careerMatchTrait: ['economics'],
        careerProspects: ['Global korporasiýa menejeri', 'Halkara maliýeçi']
      }
    ],
    admissionsRequirements: ['SAT / ACT halkara synag netijesi ýa-da YÖS synagy', 'Iňlis dili (TOEFL)']
  }
];
