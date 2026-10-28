import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Boş wagtyňyzda aşakdaky işleriň haýsysy bilen meşgullanmak size has uly lezzet berýär?',
    category: 'Gündelik gyzyklanmalar',
    options: [
      {
        label: 'Täze programma, mobil goşundy ýa-da oýun gurnap, onuň nähili işleýändigini barlamak',
        description: 'Sanly enjamlar we tehniki gurallar bilen gyzyklanma',
        trait: 'tech',
        points: 3
      },
      {
        label: 'Tebigat, ösümlikler, adamyň beden gurluşy ýa-da saglygy bejermek hakyndaky filmleri görmek',
        description: 'Janly tebigat we saglygy goraýyş ugruna gyzyklanma',
        trait: 'medicine',
        points: 3
      },
      {
        label: 'Çeper kitaplary, taryhy wakalary okamagy we çuňňur manyly pikirleri ýazmagy',
        description: 'Söz sungaty, edebiýat we jemgyýetçilik gyzyklanmasy',
        trait: 'humanities',
        points: 3
      },
      {
        label: 'Surat çekmek, dizaýn ýasamak, saz diňläp täze heň döretmek ýa-da wideo montaž etmek',
        description: 'Çeper döredijilik we estetiki duýgurlyk',
        trait: 'art',
        points: 3
      }
    ]
  },
  {
    id: 2,
    question: 'Eger-de mekdepde ýa-da uniwersitetde bilelikde taslama tabşyrylsa, haýsy orny eýelemek islärdiňiz?',
    category: 'Toparlaýyn iş we jogapkärçilik',
    options: [
      {
        label: 'Taslamanyň maliýe çykdajylaryny, wagtyny we toparyň meýilnamasyny dolandyrmak',
        description: 'Ykdysady hasaplaşyk we liderlik dolandyryşy',
        trait: 'economics',
        points: 3
      },
      {
        label: 'Taslamanyň tehniki algoritmlerini we awtomatlaşdyrylan kody işläp düzmek',
        description: 'Inženerçilik we IT gurluşy',
        trait: 'tech',
        points: 3
      },
      {
        label: 'Ylmy barlaglary geçirmek, maglumatlary we tejribeleri seljerip formulalara getirmek',
        description: 'Ylmy-barlag we tebigy derňew',
        trait: 'science',
        points: 3
      },
      {
        label: 'Taslamanyň dilden we ýazmaça beýanyny, tanyşdyryş çykyşyny taýýarlamak',
        description: 'Söz ussatlygy we köpçülikleýin aragatnaşyk',
        trait: 'humanities',
        points: 3
      }
    ]
  },
  {
    id: 3,
    question: 'Mekdep derslerinden haýsysy size has aňsat we ýakyn duýulýar?',
    category: 'Okuw başarnyklary',
    options: [
      {
        label: 'Algebra, Geometriýa we Informatika (Logiki formulalar we hasaplamalar)',
        description: 'Matematiki we algoritmik ukyplar',
        trait: 'tech',
        points: 3
      },
      {
        label: 'Himiýa we Biologiýa (Maddalar, molekulalar, adam anatomiýasy we öýjükler)',
        description: 'Biologiki we tebigy bilimler',
        trait: 'medicine',
        points: 3
      },
      {
        label: 'Türkmen dili, Dünýä edebiýaty, Iňlis dili we Taryh',
        description: 'Lingwistika, diller we taryhy paýhas',
        trait: 'humanities',
        points: 3
      },
      {
        label: 'Çyzgy, Surat we Çeper zähmet (Giňişlikde şekillendiriş we dizaýn)',
        description: 'Wizual estetika we konstruksiýa',
        trait: 'art',
        points: 3
      }
    ]
  },
  {
    id: 4,
    question: 'Adamlara kömek etmek babatynda haýsy ýol size has göwnüňize ýaraýar?',
    category: 'Jemgyýetçilik gymmatlyklary',
    options: [
      {
        label: 'Näsag adamlaryň derdine em tapmak, derman taýýarlamak we olary sagdyn durmuşa gaýtarmak',
        description: 'Lukmançylyk we saglygy goraýyş hyzmaty',
        trait: 'medicine',
        points: 4
      },
      {
        label: 'Täze kiber-tehnologiýalar, amatly programmalar we robotlar arkaly agyr işleri ýeňilleşdirmek',
        description: 'Sanly innowasiýalar arkaly jemgyýete peýda bermek',
        trait: 'tech',
        points: 4
      },
      {
        label: 'Ýaş nesle bilim bermek, terbiýelemek, terjime we edebiýat arkaly dünýägaraýyşlaryny giňeltmek',
        description: 'Pedagogika we ynsanperwer goldaw',
        trait: 'humanities',
        points: 4
      },
      {
        label: 'Täze iş orunlaryny döretmek, telekeçiligi we milli önümçiligi ösdürmek',
        description: 'Ykdysady durnuklylyk we işewürlik',
        trait: 'economics',
        points: 4
      }
    ]
  },
  {
    id: 5,
    question: 'Eger elinize uly barlaghana ýa-da iş otagy berilse, nähili gurallar bilen işlemegi saýlardyňyz?',
    category: 'Iş gurallary we gurşaw',
    options: [
      {
        label: 'Mikroskoplar, probirkalar, himiki reagentler we steril lukmançylyk enjamlary',
        description: 'Barlaghana we lukmançylyk gurallary',
        trait: 'medicine',
        points: 3
      },
      {
        label: 'Kuwwatly serwerler, köp ekranly kompýuterler, mikrokontrollerler we elektron platalar',
        description: 'Kompýuter we apparat üpjünçiligi',
        trait: 'tech',
        points: 3
      },
      {
        label: 'Teleskoplar, spektral seljerijiler, tebigy nusgalar we fiziki ölçeg enjamlary',
        description: 'Ylmy gözleg we fundamental gurallar',
        trait: 'science',
        points: 3
      },
      {
        label: 'Grafiki planshet, reňk palitralary, 3D modelleýji gurallar we binagärlik çyzgy stoly',
        description: 'Dizaýn we çeper sungat tehnikasy',
        trait: 'art',
        points: 3
      }
    ]
  },
  {
    id: 6,
    question: 'Haýsy üstünlik sizi has köp guwandyrardy we buýsandyrardy?',
    category: 'Maksat we höweslendirme',
    options: [
      {
        label: 'Halkara programma bäsleşiginde ýeňip, dünýä derejesinde ulanylýan sanly ulgam döretmek',
        description: 'IT we tehnologiýa üstünligi',
        trait: 'tech',
        points: 3
      },
      {
        label: 'Çylşyrymly operasiýany üstünlikli amala aşyryp, ynsanyň saglygyny halas etmek',
        description: 'Lukmançylyk ussatlygy',
        trait: 'medicine',
        points: 3
      },
      {
        label: 'Ýazyp çykaran kitabyňyz ýa-da ylmy gollanmaňyz müňlerçe okuwçynyň elinde elipbiý bolmagy',
        description: 'Ylym, bilim we halypalyk mirasy',
        trait: 'humanities',
        points: 3
      },
      {
        label: 'Döreden telekeçilik kompaniýaňyzyň milli we halkara bazarda uly abraý gazanmagy',
        description: 'Ykdysady we maliýe ýeňşi',
        trait: 'economics',
        points: 3
      }
    ]
  },
  {
    id: 7,
    question: 'Bilesigelijiligiňizi iň köp oýarýan sorag haýsy?',
    category: 'Pelsepe we derňew',
    options: [
      {
        label: '«Älem we atomlar nähili kanunalaýyklykda hereket edýär, tebigatyň baş formulasy näme?»',
        description: 'Fundamental fizika we tebigy ylymlar',
        trait: 'science',
        points: 3
      },
      {
        label: '«Emeli aň adamyň aňy ýaly pikirlenip bilermi, algoritmler dünýäni nädip özgerdýär?»',
        description: 'Maglumat tehnologiýalary we kiberhowpsuzlyk',
        trait: 'tech',
        points: 3
      },
      {
        label: '«Bazar nähili sazlaşýar, serişdeleri nädip iň netijeli paýlap baýlyga ýetmeli?»',
        description: 'Ykdysadyýet we maliýe gurluşy',
        trait: 'economics',
        points: 3
      },
      {
        label: '«Diller nädip döräpdir, taryhda beýik siwilizasiýalar medeniýeti nädip ösdüripdir?»',
        description: 'Taryh, arheologiýa we diller',
        trait: 'humanities',
        points: 3
      }
    ]
  },
  {
    id: 8,
    question: 'Kyn bir kynçylyk ýüze çykanda, meseläni çözmek üçin ilkinji nobatda näme edýärsiňiz?',
    category: 'Mesele çözmek usuly',
    options: [
      {
        label: 'Meseläni böleklere bölüp, her bir ädim üçin anyk logiki algoritm düzýärin',
        description: 'Sistematik we algoritmik çemeleşme',
        trait: 'tech',
        points: 2
      },
      {
        label: 'Ylmy kitaplary, terjimeleri we beýleki tejribeleri öwrenip seljerýärin',
        description: 'Teoretiki we edebi maglumat derňewi',
        trait: 'science',
        points: 2
      },
      {
        label: 'Beýleki adamlar bilen duşuşyp, pikir alyşýaryn we diplomatik gepleşik geçirýärin',
        description: 'Aragatnaşyk we ynsanperwerlik',
        trait: 'humanities',
        points: 2
      },
      {
        label: 'Döredijilikli, hiç kimiň aňyna gelmedik täsin we wizual çykalga gözleýärin',
        description: 'Kreasiýa we çeper döredijilik',
        trait: 'art',
        points: 2
      }
    ]
  },
  {
    id: 9,
    question: 'Eger häzir şahsy kitap tekjäňizi düzmeli bolsaňyz, haýsy bölüm iň baý bolardy?',
    category: 'Şahsy kitaphana',
    options: [
      {
        label: 'Programmirleme dilleri, tor howpsuzlygy we inženerçilik çyzgylary',
        description: 'IT we tehniki edebiýatlar',
        trait: 'tech',
        points: 3
      },
      {
        label: 'Adam biologiýasy, dermanlyk ösümlikler, lukmançylyk ensiklopediýalary',
        description: 'Saglyk we bioylym gollanmalary',
        trait: 'medicine',
        points: 3
      },
      {
        label: 'Dünýä nusgawy şygryýeti, taryhy hekaýalar, sözlükler we terjime işleri',
        description: 'Çeper söz we jemgyýetçilik hazynasy',
        trait: 'humanities',
        points: 3
      },
      {
        label: 'Biznes meýilnamalary, maliýe dolandyryşy, maýa goýum we bazar strategiýalary',
        description: 'Ykdysadyýet we söwda kitaplary',
        trait: 'economics',
        points: 3
      }
    ]
  },
  {
    id: 10,
    question: 'Şäherde gezelenç edip ýörkäňiz, gözüňiz ilki bilen nämä düşýär?',
    category: 'Gözegçilik we synçylyk',
    options: [
      {
        label: 'Binalaryň binagärlik sazlaşygyna, reňk utgaşmasyna we köçeleriň dizaýnyna',
        description: 'Arhitektura we estetiki duýgy',
        trait: 'art',
        points: 3
      },
      {
        label: 'Söwda merkezlerine, banklara we adamlaryň sarp ediş aýratynlyklaryna',
        description: 'Söwda we ykdysady akymlar',
        trait: 'economics',
        points: 3
      },
      {
        label: 'Täze gurnalan howpsuzlyk kameralaryna, swetoforlaryň awtomatikasyna we aragatnaşyk antennalaryna',
        description: 'Sanly infrastruktura we torlar',
        trait: 'tech',
        points: 3
      },
      {
        label: 'Tebigy seýilbaglara, agaçlaryň görnüşlerine we howanyň arassalygyna',
        description: 'Ekologiýa we daşky gurşaw',
        trait: 'science',
        points: 3
      }
    ]
  },
  {
    id: 11,
    question: 'Gelejekde nähili iş gurşawynda işlemek isläp bilersiňiz?',
    category: 'Iş ýeri we şertleri',
    options: [
      {
        label: 'Döwrebap IT ofisinde ýa-da arassa kiber-barlag merkezinde',
        description: 'Innowasion kompýuter gurşawy',
        trait: 'tech',
        points: 3
      },
      {
        label: 'Klinikada, bejeriş hassahanasynda ýa-da dermanhana barlaghanasynda',
        description: 'Kliniki we saglygy goraýyş gurşawy',
        trait: 'medicine',
        points: 3
      },
      {
        label: 'Auditoriýada talyplar bilen ýa-da halkara mejlislerde terjime edip',
        description: 'Mugallymçylyk we halkara diplomatiýa gurşawy',
        trait: 'humanities',
        points: 3
      },
      {
        label: 'Bank edarasynda, korporasiýa ştabynda ýa-da eksport-import biržasynda',
        description: 'Maliýe we işewürlik gurşawy',
        trait: 'economics',
        points: 3
      }
    ]
  },
  {
    id: 12,
    question: 'Siziň üçin hakyky manyly we üstünlikli durmuş näme?',
    category: 'Durmuş pelsepesi',
    options: [
      {
        label: 'Dünýäni özgerdýän kämil tehnologiýany açyp, adamlaryň eline gowşurmak',
        description: 'Innowasiýa we döredijilik',
        trait: 'tech',
        points: 3
      },
      {
        label: 'Agyr ýagdaýa düşen adamlaryň saglygyna şypa bolup, olaryň alkyşyny almak',
        description: 'Ynsanperwerlik we şypakärlik',
        trait: 'medicine',
        points: 3
      },
      {
        label: 'Ylymda täze açyş edip, dünýäniň syrlaryny öwrenmek we watana peýdaly bolmak',
        description: 'Ylmy açyşlar we bilim mirasy',
        trait: 'science',
        points: 3
      },
      {
        label: 'Köp dilleri öwrenip, medeniýetleri birleşdirmek we ýaş nesle görelde bolmak',
        description: 'Pedagogika we halkara baglanyşyk',
        trait: 'humanities',
        points: 3
      }
    ]
  }
];
