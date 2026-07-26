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
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1785063293/omara_h4jk6l.png',
        manifesto:
            'Committed to serving students through strong leadership, prioritizing welfare, promoting unity, ensuring accountability, and representing every student effectively.',
        motto: 'Service, Unity & Accountability.',
        keyPriorities: [
          'Promote a culture of service to all students.',
          'Prioritize student welfare and well-being.',
          'Strengthen unity among Ugandan students in Algeria.',
          'Ensure effective and timely communication.',
          'Uphold transparency and accountability in leadership.',
          'Represent students’ interests with integrity and commitment.',
        ],
      },
      {
        id: 'pres_2',
        name: 'Akampamya Agaston',
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1785076261/agaston_k729hw.png',
        manifesto:
            'Committed to putting students first through strong welfare support, academic and career development, transparent leadership, innovation, and unity across all Ugandan students in Algeria.',
        motto: 'Igniting Leadership, Empowering Students.',
        keyPriorities: [
          'Prioritize student welfare through advocacy, emergency support, and stipend-related initiatives.',
          'Promote career growth, mentorship, internships, and networking opportunities.',
          'Advance academic excellence through scholarships, research, and recognition.',
          'Support orientation and integration for newly arrived students.',
          'Strengthen unity through sports, cultural, and social activities.',
          'Ensure transparent communication through regular updates and student feedback.',
          'Expand engagement by conducting outreach across all wilayas.',
          'Promote skills development, innovation, entrepreneurship, and initiatives like Unleash Hack Algiers.',
          'Support the establishment of Wilaya-based SACCOs to encourage saving and emergency financial support.',
          'Prepare students for life after Algeria through career readiness, degree recognition, and academic advocacy.',
        ],
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
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1785076262/ziwa_fawrkn.png',
        manifesto:
            'Committed to promoting unity, advancing student welfare, supporting career growth, and strengthening networking opportunities while ensuring effective communication and student integration.',
        motto: 'Unity, Support & Opportunity.',
        keyPriorities: [
          'Promote unity among all USAA students.',
          'Advocate for student welfare and represent students’ interests.',
          'Provide career support and mentorship opportunities.',
          'Promote networking among students, alumni, and professionals.',
          'Facilitate orientation and smooth integration for new students.',
          'Advocate for further study opportunities and academic progression.',
          'Assist in organizing social events and association meetings.',
          'Ensure effective and timely communication with students.',
        ],
      },
      {
        id: 'mvp_2',
        name: 'Okata Ben',
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1785063301/okata_szw3au.png',
        manifesto: 'A United Ugandan Community in Algeria.',
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
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1785065021/nyonza_gsfrjt.png',
        manifesto: 'Leading with action, unity, and accountability through inclusive student representation and open communication.',
        motto: 'Leading with Action, Unity & Accountability.',
        keyPriorities: [
          'Course-based orientation not limited to nationality.',
          'Introduce an anonymous digital suggestion box.',
          'Organise get-together activities to promote female inclusion.',
        ],
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
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1785109122/wamala_qf24rx.png',
        manifesto:
            'Committed to strengthening students’ financial welfare through accountability, sustainable funding initiatives, and transparent financial management.',
        motto: 'Building Financial Security Through Accountability.',
        keyPriorities: [
          'Expand Wilaya-based SACCOs and strengthen emergency funding.',
          'Ensure rigorous stipend follow-up and reconciliation.',
          'Promote productive youth investment through association subscriptions.',
          'Support surplus budgeting, student loans, and circular funding.',
          'Provide financial counselling and establish a student feedback system.',
        ],
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
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1785063292/ohms_ynwb7v.png',
        manifesto: 'Ensuring equal opportunities for all, creating talk shows and debates, promoting access to study materials, bridging the student-academic board gap, inclusive co-curriculars, mentorship programs, and diverse sports participation.',
        motto: 'Empowering Every Mind, Elevating Every Talent',
        keyPriorities: [
          'Ensuring that everyone gets equal opportunities, without selection.',
          'Creating talk shows, debates, and various public speaking opportunities.',
          'Promoting easy access to study materials by all the members and beneficiaries of the association.',
          'Bridging the gap between the students and the academic board both home and away.',
          'Ensuring that nobody is left behind in terms of co-curriculars.',
          'Organizing mentorship programs for all students of the association depending on the career path of each.',
          'Creating a diverse platform where every sport is exercised and participated in.',
        ],
      },
      {
        id: 'medu_2',
        name: 'Muhindo Brian',
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1785065020/brian_oqqtif.png',
        manifesto:
            'Dedicated to promoting academic excellence, expanding student opportunities, and creating an inclusive environment through sports, talent development, and global connections.',
        motto: 'Excellence, Opportunity & Inclusion.',
        keyPriorities: [
          'Promote academic excellence through student-focused initiatives.',
          'Expand quiz competitions to encourage academic participation.',
          'Organize inter-Wilaya sports competitions to strengthen student interaction.',
          'Introduce online competitions to increase accessibility and engagement.',
          'Support talent development by providing platforms for students to showcase their abilities.',
          'Strengthen global student connections while promoting inclusive student engagement.',
        ],
      },
      {
        id: 'medu_3',
        name: 'Omongin David Silas',
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1785063293/silas_mqwdy1.png',
        manifesto:
            'Committed to advancing academic excellence, expanding sports and co-curricular opportunities, strengthening administrative support, and building lasting alumni networks to empower every USAA student.',
        motto: 'Empowering Students Through Excellence, Opportunity & Unity.',
        keyPriorities: [
          'Establish strategic peer-led mentorship networks to enhance academic success.',
          'Provide comprehensive French and Arabic language support systems.',
          'Introduce prestigious academic recognition and excellence awards.',
          'Develop clear industrial training and internship roadmaps for students.',
          'Expand sports and co-curricular activities, including basketball, swimming, and jump games.',
          'Strengthen administrative advocacy, simplify university processes, and foster active alumni and global diaspora engagement.',
        ],
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
        name: 'KARUNGI JANE',
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1785065020/jane_xavulw.png',
        manifesto:
            'Committed to fostering effective communication, strengthening student representation, promoting transparency and accountability, and building a united and inclusive USAA community.',
        motto: 'Unity Through Communication and Accountability.',
        keyPriorities: [
          'Promote effective and timely communication between the association and students.',
          'Strengthen student representation by ensuring students’ voices are heard.',
          'Uphold transparency and accountability in all association activities.',
          'Foster unity and inclusion by creating an environment where every student feels valued.',
        ],
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
        image: 'https://res.cloudinary.com/dbdgbj4qz/image/upload/v1785063292/kisira_mr7knm.png',
        manifesto: 'Ensuring timely communication, a centralized digital information hub, professional USAA branding, the Voice of USAA newsletter, stronger student engagement, and transparency and accountability.',
        motto: 'For Clear Communication, Transparency & Progress.',
        keyPriorities: [
          'Ensure timely and accurate communication for all students.',
          'Create a centralized digital information hub for official updates and opportunities.',
          'Promote a professional USAA image through quality branding and media.',
          'Launch the Voice of USAA digital newsletter.',
          'Strengthen student feedback and engagement.',
          'Uphold transparency, accountability, and unity in USAA.',
        ],
      },
    ],
  },
];