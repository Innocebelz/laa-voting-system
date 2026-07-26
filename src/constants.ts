import { ElectionCategory } from './types';

// ─────────────────────────────────────────────────────────────────────────────
// USAA ELECTION DATA 2026
//
// HOW TO UPDATE:
//   • Add/remove candidates inside any `candidates` array.
//   • Change a candidate's name, manifesto, or image freely at any time.
//   • NEVER change `id` or `dbKey` once real votes have been cast — those
//     values are stored in the database. Changing them breaks the tally.
//   • Upload candidate photos to Cloudinary and paste the URL into `image`.
//   • If a position has only one candidate, set unopposed: true.
// ─────────────────────────────────────────────────────────────────────────────

export const ELECTION_DATA: ElectionCategory[] = [

  // ── 1. PRESIDENT ──────────────────────────────────────────────────────────
  {
    position: 'President',
    dbKey: 'president',
    unopposed: false,
    candidates: [
      {
        id: 'pres_1',
        name: 'Omara Abraham Christopher',
        manifesto: 'Promoting unity, academic excellence, and community development through transparent leadership and inclusive representation.',
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1785063293/omara_h4jk6l.png',
      },
      {
        id: 'pres_2',
        name: 'Akampamya Agaston',
        manifesto: 'Building a stronger, more inclusive, and progressive students’ union through servant leadership, transparent governance, and effective advocacy.',
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1785076261/agaston_k729hw.png',
      },
      {
        id: 'pres_3',
        name: 'Natukunda Isaiah',
        manifesto: 'Building a stronger, more inclusive, and progressive students’ union through servant leadership, transparent governance, and effective advocacy.',
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1781651678/david_teokfo.jpg',
      },
    ],
  },

  // ── 2. MALE VICE PRESIDENT ────────────────────────────────────────────────
  {
    position: 'Male Vice President',
    dbKey: 'male_vice_president',
    unopposed: false,
    candidates: [
      {
        id: 'mvp_1',
        name: 'Zziwa Charles',
        manifesto: 'Enhancing student welfare and fostering a vibrant campus life through dedicated service and community engagement.',
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1785076262/ziwa_fawrkn.png',
      },
      {
        id: 'mvp_2',
        name: 'Okata Ben',
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1785063301/okata_szw3au.png',
        manifesto: 'A United Ugandan Community in Algeria.', // fallback, keep this filled too
        vision: 'A United Ugandan Community in Algeria.',
        keyPriorities: [
          'Representation: Ensure every student\'s voice is heard and valued.',
          'Student Welfare: Strengthen support systems for academic and personal well-being.',
          'Unity: Foster stronger connections among Ugandan students across all cities.',
          'Accountability: Promote transparent, responsive, and service-driven leadership.',
        ],
        motto: 'Built by All, For All.',
      },
    ],
  },

  // ── 3. FEMALE VICE PRESIDENT ──────────────────────────────────────────────
  {
    position: 'Female Vice President',
    dbKey: 'female_vice_president',
    unopposed: true, // UNOPPOSED - 50% Rule Applies
    candidates: [
      {
        id: 'fvp_1',
        name: 'Ankunda Dorothy Nyonza',
        manifesto: 'Prioritizing student welfare and fostering a vibrant campus community through effective representation.',
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1785065021/nyonza_gsfrjt.png',
      },
    ],
  },

  // ── 4. MINISTER OF FINANCE ────────────────────────────────────────────────
  {
    position: 'Minister of Finance',
    dbKey: 'minister_of_finance',
    unopposed: true, // UNOPPOSED - 50% Rule Applies
    candidates: [
      {
        id: 'mfin_1',
        name: 'Wamala Barnabas',
        manifesto: 'Transparent financial management and secure funding initiatives for USAA.',
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1781651676/antony_fwcp2k.jpg',
      },
    ],
  },

  // ── 5. MINISTER OF EDUCATION AND SPORTS ───────────────────────────────────
  {
    position: 'Minister of Education and Sports',
    dbKey: 'minister_of_education',
    unopposed: false,
    candidates: [
      {
        id: 'medu_1',
        name: 'Kwikiriza Moris',
        manifesto: 'Dedicated to academic excellence, co-curricular development, and sports.',
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1785063292/ohms_ynwb7v.png',
      },
      {
        id: 'medu_2',
        name: 'Muhindo Brian',
        manifesto: 'Promoting transparent debates and accountable leadership in the assembly.',
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1785065020/brian_oqqtif.png',
      },
      {
        id: 'medu_3',
        name: 'Omongin David Silas',
        manifesto: 'Promoting transparent debates and accountable leadership in the assembly.',
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1785063293/silas_mqwdy1.png',
      },
    ],
  },

  // ── 6. GENERAL SECRETARY ──────────────────────────────────────────────────
  {
    position: 'General Secretary',
    dbKey: 'general_secretary',
    unopposed: true, // UNOPPOSED - 50% Rule Applies
    candidates: [
      {
        id: 'gsec_1',
        name: 'Karungi Jane',
        manifesto: 'Streamlining communication and record-keeping for the entire association.',
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1785065020/jane_xavulw.png',
      },
    ],
  },

  // ── 7. MINISTER OF INFORMATION AND PUBLICITY ──────────────────────────────
  {
    position: 'Minister of Information and Publicity',
    dbKey: 'minister_of_information',
    unopposed: true, // UNOPPOSED - 50% Rule Applies
    candidates: [
      {
        id: 'minf_1',
        name: 'Kisira Chrispus',
        manifesto: 'Enhancing transparency and stakeholder engagement through accessible communication channels.',
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1785063292/kisira_mr7knm.png',
      },
    ],
  },
];