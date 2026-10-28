export type CareerTrait = 'tech' | 'medicine' | 'humanities' | 'economics' | 'science' | 'art';

export interface MentorScientist {
  id: string;
  name: string;
  title: string;
  category: 'math_physics' | 'chemistry_biology' | 'it_tech' | 'languages' | 'medicine' | 'history';
  categoryLabel: string;
  isHistoricalFigure?: boolean;
  lifespan?: string;
  avatarBg: string;
  motto: string;
  biography: string;
  institution: string;
  publishedBooks: {
    title: string;
    year: string;
    description: string;
    gradeOrType: string;
  }[];
  olympiadAchievements: {
    year: number;
    competition: string;
    medal: 'gold' | 'silver' | 'bronze' | 'multiple';
    medalLabel: string;
    students: string[];
  }[];
  contact: {
    email?: string;
    phone?: string;
    telegram?: string;
    officeHours?: string;
  };
  quotesOrAdvice: string[];
}

export interface UniversityFaculty {
  name: string;
  departments: string[];
  careerMatchTrait: CareerTrait[];
  careerProspects: string[];
}

export interface University {
  id: string;
  name: string;
  shortName: string;
  city: string;
  type: 'national' | 'international_partner' | 'institute' | 'academy';
  typeLabel: string;
  description: string;
  establishedYear: number;
  badgeColor: string;
  faculties: UniversityFaculty[];
  admissionsRequirements: string[];
  websiteUrl?: string;
}

export interface QuizOption {
  label: string;
  description: string;
  trait: CareerTrait;
  points: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  category: string;
  options: QuizOption[];
}

export interface CareerResult {
  primaryTrait: CareerTrait;
  traitScores: Record<CareerTrait, number>;
  title: string;
  subtitle: string;
  description: string;
  personalityTraits: string[];
  recommendedProfessions: string[];
  recommendedFaculties: {
    universityShortName: string;
    universityName: string;
    facultyName: string;
  }[];
}
