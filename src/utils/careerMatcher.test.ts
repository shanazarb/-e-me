import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateCareerTrait, matchUniversityFaculties, buildCareerResult } from './careerMatcher';
import { University } from '../types';

test('calculateCareerTrait correctly picks dominant trait by points', () => {
  const sampleAnswers = {
    1: { trait: 'tech' as const, points: 2 },
    2: { trait: 'tech' as const, points: 3 },
    3: { trait: 'medicine' as const, points: 1 },
  };

  const result = calculateCareerTrait(sampleAnswers);
  assert.equal(result, 'tech');
});

test('calculateCareerTrait handles medicine preference correctly', () => {
  const sampleAnswers = {
    1: { trait: 'science' as const, points: 1 },
    2: { trait: 'medicine' as const, points: 5 },
    3: { trait: 'humanities' as const, points: 2 },
  };

  const result = calculateCareerTrait(sampleAnswers);
  assert.equal(result, 'medicine');
});

test('matchUniversityFaculties correctly filters faculties matching trait', () => {
  const mockUniversities: University[] = [
    {
      id: 'tdu',
      name: 'Magtymguly adyndaky Türkmen döwlet uniwersiteti',
      shortName: 'TDU',
      city: 'Aşgabat',
      type: 'national',
      typeLabel: 'Döwlet uniwersiteti',
      description: 'Ýurdumyzyň iň uly we köpugurly uniwersiteti',
      establishedYear: 1950,
      badgeColor: 'blue',
      faculties: [
        {
          name: 'Matematika we maglumat tehnologiýalary fakulteti',
          departments: ['Amaly matematika', 'Programmirleme'],
          careerMatchTrait: ['tech', 'science'],
          careerProspects: ['Programmist', 'Matematik'],
        },
        {
          name: 'Türkmen filologiýasy fakulteti',
          departments: ['Türkmen dili', 'Edebiýat'],
          careerMatchTrait: ['humanities'],
          careerProspects: ['Filolog', 'Mugallym'],
        }
      ],
      admissionsRequirements: ['Döwlet synagy', 'Başlangyç söhbetdeşlik']
    }
  ];

  const techMatches = matchUniversityFaculties('tech', mockUniversities);
  assert.equal(techMatches.length, 1);
  assert.equal(techMatches[0].universityShortName, 'TDU');
  assert.equal(techMatches[0].facultyName, 'Matematika we maglumat tehnologiýalary fakulteti');

  const artMatches = matchUniversityFaculties('art', mockUniversities);
  assert.equal(artMatches.length, 0);
});

test('buildCareerResult returns complete profile with traits and faculties', () => {
  const mockUniversities: University[] = [
    {
      id: 'oguzhan',
      name: 'Oguz han adyndaky Inžener-tehnologiýalar uniwersiteti',
      shortName: 'Oguz han ITU',
      city: 'Aşgabat',
      type: 'national',
      typeLabel: 'Tehnologiýa uniwersiteti',
      description: 'Ýokary tehnologiýalar uniwersiteti',
      establishedYear: 2016,
      badgeColor: 'indigo',
      faculties: [
        {
          name: 'Kompýuter ylymlary we maglumat tehnologiýalary fakulteti',
          departments: ['Emeli aň', 'Kiberhowpsuzlyk'],
          careerMatchTrait: ['tech'],
          careerProspects: ['AI Developer', 'Security Engineer'],
        }
      ],
      admissionsRequirements: ['Matematika, Fizika, Iňlis dili synaglary']
    }
  ];

  const answers = {
    1: { trait: 'tech' as const, points: 5 }
  };

  const result = buildCareerResult(answers, mockUniversities);
  assert.equal(result.primaryTrait, 'tech');
  assert.ok(result.personalityTraits.length > 0);
  assert.ok(result.recommendedProfessions.length > 0);
  assert.equal(result.recommendedFaculties.length, 1);
});
