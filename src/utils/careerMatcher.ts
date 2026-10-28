import { CareerResult, CareerTrait, University } from '../types';

export const TRAIT_DETAILS: Record<CareerTrait, {
  title: string;
  subtitle: string;
  description: string;
  personalityTraits: string[];
  recommendedProfessions: string[];
}> = {
  tech: {
    title: 'Maglumat Tehnologiýalary we Inženerçilik',
    subtitle: 'Logiki pikirlenýän, täze tehnologiýalary we awtomatlaşdyrmagy söýýän dörediji',
    description: 'Siz çylşyrymly meseleleri logiki taýdan çözmäge, programma üpjünçiligini, kiberhowpsuzlygy, robototehnikany we inženerçilik ulgamlaryny döretmäge ýokary ukyplysyňyz. Siziň pikirlenişiňiz durnukly, ulgamlaýyn we gelejege gönükdirilen.',
    personalityTraits: [
      'Ulgamlaýyn we logiki derňew ukyplylygy',
      'Kompýuter we inženerçilik gurallaryna gyzyklanma',
      'Algoritmik we döredijilikli mesele çözüjilik',
      'Täze tehnologiýalary çalt özleşdirmek'
    ],
    recommendedProfessions: [
      'Programma inženeri (Software Engineer / Full-Stack)',
      'Kiberhowpsuzlyk boýunça hünärmen',
      'Emeli aň we maglumatlar seljerijisi (Data Scientist)',
      'Robototehnika we awtomatika inženeri',
      'Ulgam administratory we tor arhitektory'
    ]
  },
  medicine: {
    title: 'Lukmançylyk we Saglygy Goraýyş',
    subtitle: 'Ynsanperwer, adamlara kömek etmäge we durmuşy halas etmäge teşne şahsyýet',
    description: 'Sizde beýleki adamlaryň saglygyna we durmuşyna uly jogapkärçilik, synçylyk we ynsanperwerlik bar. Biologiýa, anatomiýa, farmasewtika we adamyň fiziki-ruhy saglygy siziň iň güýçli ugurlaryňyzdyr.',
    personalityTraits: [
      'Ýokary duýgudaşlyk (empatiýa) we sabyrlylyk',
      'Çalt we sowukganly çözgüt kabul ediş',
      'Biologiki we tebigy ylymlara çuňňur gyzyklanma',
      'Ünsli, jogapkärli we jikme-jiklige synçy'
    ],
    recommendedProfessions: [
      'Hirurg we bejeriş lukmany',
      'Pediatr we çagalar saglygy hünärmeni',
      'Farmasewt we derman öndüriji tehnolog',
      'Stomatolog we diş bejeriş hünärmeni',
      'Lukmançylyk barlaghana hünärmeni we genetiki'
    ]
  },
  science: {
    title: 'Tebigy we Fundamental Ylymlar',
    subtitle: 'Barlagçy, tebigatyň we älemiň kanunalaýyklyklaryny öwrenýän alym',
    description: 'Siz hadysalaryň düýp mazmunyny, tebigatyň fiziki, himiki we astronomiki kanunlaryny derňemegi gowy görýärsiňiz. Barlaghanada tejribeler geçirmek, täze maddalary we formulalary açmak siziň tebigy ukybyňyzdyr.',
    personalityTraits: [
      'Bilesigeliji we ylmy gözlegçilik zehini',
      'Matematiki we tejribe usulyýetine eýermek',
      'Netijeleri seljermek we çaklamalar bermek',
      'Çuňňur konsentrasiýa we gowşamaýan erjellik'
    ],
    recommendedProfessions: [
      'Fizik-teoretik we barlagçy alym',
      'Himiýa tehnology we maddalar inženeri',
      'Biotehnolog we ekolog',
      'Matematik we statistiki seljeriji',
      'Geofizik we geolog-gözlegçi'
    ]
  },
  humanities: {
    title: 'Ynsanperwer Ylymlar we Diller',
    subtitle: 'Söz ussady, halkara aragatnaşygy we medeniýetleri baglanyşdyrjy',
    description: 'Sizde dil baýlygy, çeper pikirlenmek, taryhy we jemgyýetçilik hadysalaryny düşündirmek ukyby örän ösendir. Daşary ýurt dilleri, edebiýat, pedagogika, žurnalistika we diplomatiýa siziň tebigatyňyza doly gabat gelýär.',
    personalityTraits: [
      'Ösen dilden we ýazuw arkaly pikir beýan ediş',
      'Dürli medeniýetlere we taryha hormat',
      'Pedagogik we terbiýeçilik ukyplary',
      'Diplomatiýa we gepleşik alyp barmak ussatlygy'
    ],
    recommendedProfessions: [
      'Terjimeçi we halkara aragatnaşyk hünärmeni',
      'Dil we edebiýat mugallymy / Edebiýatçy',
      'Žurnalist, redaktor we köpçülikleýin habar serişdeleri',
      'Taryhçy, arhiwçi we muzeýşynas',
      'Halkara gatnaşyklar we diplomatiýa işgäri'
    ]
  },
  economics: {
    title: 'Ykdysadyýet, Maliýe we Dolandyryş',
    subtitle: 'Stratejik pikirlenýän, serişdeleri netijeli dolandyrýan lider',
    description: 'Siz serişdeleri, maliýe akymlaryny, bazar kanunlaryny we telekeçilik başlangyçlaryny guramakda ýiti zehinli. Kärhanany dolandyrmak, taslamalary girdejili alyp barmak we döwrebap marketing siziň güýçli tarapyňyzdyr.',
    personalityTraits: [
      'Stratejik we analitiki maliýe sowatlylygy',
      'Liderlik we topar agzalaryny ugrukdyrmak',
      'Riskleri we mümkinçilikleri öňünden görmek',
      'Netijä we girdejä gönükdirilen maksat oýlanşygy'
    ],
    recommendedProfessions: [
      'Maliýe analitigi we bank işi hünärmeni',
      'Taslama dolandyryjysy (Project Manager)',
      'Buhgalter we audit hünärmeni',
      'Bazar seljerijisi (Marketing Specialist)',
      'Logistika we halkara söwda menejeri'
    ]
  },
  art: {
    title: 'Sungat, Dizaýn we Çeper Döredijilik',
    subtitle: 'Estetiki duýgusy ýokary, dünýäni özboluşly owadanlykda görýän dörediji',
    description: 'Sizde reňkleri, şekilleri, heňleri we giňişligi ajaýyp duýmak ukyby bar. Dizaýn, arhitektura, wideo-montaž, aýdym-saz ýa-da teatr sungaty arkaly adamlaryň duýgularyna täsir edip bilersiňiz.',
    personalityTraits: [
      'Göz öňüne getirmek we wizuallaşdyrmak zehini',
      'Estetika we reňk sazlaşygy duýgusy',
      'Standartlardan daşary özboluşly pikirler',
      'Emosional çuňluk we ilham döredijiligi'
    ],
    recommendedProfessions: [
      'Grafiki dizaýner we UI/UX dizaýner',
      'Arhitektor we interýer dizaýneri',
      'Režissýor, operator we wideo döredijisi',
      'Aýdym-saz we kompozitorlyk hünärmeni',
      'Milli çeper sungat we bezeg ussady'
    ]
  }
};

export function calculateCareerTrait(answers: Record<number, { trait: CareerTrait; points: number }>): CareerTrait {
  const scores: Record<CareerTrait, number> = {
    tech: 0,
    medicine: 0,
    science: 0,
    humanities: 0,
    economics: 0,
    art: 0
  };

  for (const answer of Object.values(answers)) {
    if (answer && answer.trait) {
      scores[answer.trait] = (scores[answer.trait] || 0) + (answer.points || 1);
    }
  }

  let topTrait: CareerTrait = 'tech';
  let maxScore = -1;

  const traits: CareerTrait[] = ['tech', 'medicine', 'science', 'humanities', 'economics', 'art'];
  for (const trait of traits) {
    if (scores[trait] > maxScore) {
      maxScore = scores[trait];
      topTrait = trait;
    }
  }

  return topTrait;
}

export function matchUniversityFaculties(
  primaryTrait: CareerTrait,
  universities: University[]
): { universityShortName: string; universityName: string; facultyName: string }[] {
  const matches: { universityShortName: string; universityName: string; facultyName: string }[] = [];

  for (const uni of universities) {
    for (const faculty of uni.faculties) {
      if (faculty.careerMatchTrait.includes(primaryTrait)) {
        matches.push({
          universityShortName: uni.shortName,
          universityName: uni.name,
          facultyName: faculty.name
        });
      }
    }
  }

  return matches;
}

export function buildCareerResult(
  answers: Record<number, { trait: CareerTrait; points: number }>,
  universities: University[]
): CareerResult {
  const scores: Record<CareerTrait, number> = {
    tech: 0,
    medicine: 0,
    science: 0,
    humanities: 0,
    economics: 0,
    art: 0
  };

  for (const answer of Object.values(answers)) {
    if (answer && answer.trait) {
      scores[answer.trait] = (scores[answer.trait] || 0) + (answer.points || 1);
    }
  }

  const primaryTrait = calculateCareerTrait(answers);
  const detail = TRAIT_DETAILS[primaryTrait];
  const matchedFaculties = matchUniversityFaculties(primaryTrait, universities);

  return {
    primaryTrait,
    traitScores: scores,
    title: detail.title,
    subtitle: detail.subtitle,
    description: detail.description,
    personalityTraits: detail.personalityTraits,
    recommendedProfessions: detail.recommendedProfessions,
    recommendedFaculties: matchedFaculties
  };
}
