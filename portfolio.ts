import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Mohd Tahir',
  title: "Hi, I'm Mohd Tahir",
  description: "I'm a passionate Full Stack JavaScript Developer with 5+ years of experience building scalable web and mobile applications using React.js, Next.js, React Native, Node.js, and Express.js. I enjoy creating intuitive, responsive, and high-performance user interfaces while developing secure REST APIs and robust backend solutions. My focus is on delivering seamless, scalable, and production-ready applications that provide exceptional user experiences across platforms.",
  resumeLink: 'https://drive.google.com/file/d/1IqePC9C729kE2UZykvqS0MIQVshUH0H2/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'MohdTahirMT',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://mt-portfolio.github.io/',
  linkedin: 'https://www.linkedin.com/in/mohdtahirmt/',
  github: 'https://github.com/MohdTahirMT',
  instagram: 'https://www.instagram.com/mohdtahir.mt/',
  facebook:
    'https://m.facebook.com/profile.php?eav=AfZJGB0ei7aqhkKrp0x-u-hzuGmdfXk6mFwjrGQkpgo0Vcte7EukbMGCc0DEm6KYPzU&paipv=0',
  twitter: 'https://twitter.com/mohdtahirmt9927',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'Full Stack JavaScript Developer on a mission to build scalable products, craft exceptional user experiences, and continuously master modern technologies.',
  data: [
    {
      title: 'Software Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Building scalable web applications with React.js, Next.js'),
        emoji('⚡ Developing cross-platform mobile apps using React Native'),
        emoji('⚡ Building secure REST APIs with Node.js, Express.js, MySQL & MongoDB'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Typescript',
          iconifyTag: 'logos:typescript-icon',
        },
        {
          skillName: 'ReactJS',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'React Native',
          iconifyTag: 'logos:react',
        },
        {
          skillName: 'NextJS',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NodeJS',
          iconifyTag: 'logos:nodejs',
        },
        {
          skillName: 'ExpressJS',
          iconifyTag: 'logos:express',
        },
        {
          skillName: 'MySQL',
          iconifyTag: 'logos:mysql',
        },
        {
          skillName: 'MongoDB',
          iconifyTag: 'logos:mongodb',
        },
        {
          skillName: 'Firebase',
          iconifyTag: 'logos:firebase',
        },
        {
          skillName: 'Git',
          iconifyTag: 'logos:git-icon',
        },
        {
          skillName: 'Github',
          iconifyTag: 'logos:github-icon',
        },
        {
          skillName: 'Bootstrap',
          iconifyTag: 'logos:bootstrap',
        },
        {
          skillName: 'Material UI',
          iconifyTag: 'logos:material-ui',
        },
        {
          skillName: 'Ant Design',
          iconifyTag: 'logos:ant-design',
        },
        {
          skillName: 'Mantine UI',
          iconifyTag: 'logos:mantine-icon',
        },
        {
          skillName: 'React Query',
          iconifyTag: 'logos:react-query-icon',
        },
        {
          skillName: 'Axios',
          iconifyTag: 'logos:axios',
        },
        {
          skillName: 'Socket IO',
          iconifyTag: 'logos:socket-io',
        },
        {
          skillName: 'Jest',
          iconifyTag: 'vscode-icons:file-type-jest',
        },
        {
          skillName: 'Postman',
          iconifyTag: 'vscode-icons:file-type-postman',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'vscode-icons:file-type-npm',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'vscode-icons:file-type-yarn',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend Development (React.js, Next.js, TypeScript)',
    progressPercentage: '95',
  },
  {
    Stack: 'Mobile App Development (React Native)',
    progressPercentage: '90',
  },
  {
    Stack: 'Backend Development (Node.js, Express.js)',
    progressPercentage: '85',
  },
  {
    Stack: 'Database & APIs (MySQL, MongoDB, REST APIs)',
    progressPercentage: '85',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName:
      'Dr. A.P.J. Abdul Kalam Technical University (Lucknow, Uttar Pradesh)',
    subHeader: 'Bachelor of Technology in Computer Science',
    duration: 'August 2017 - August 2021',
    desc: 'In the college span, Learn about computer fundamentals and many technologies.',
    grade: 'CGPA : 7.2',
    descBullets: [
      'Developed Attendance mobile application.',
      'Developed Library-Management web application.',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Software Engineer (Full Stack JavaScript Developer)',
    company: 'P-CODER TECHNOLOGIES PVT. LTD.',
    companyLogo: '/img/icons/common/pcoder.png',
    date: 'Sep 2021 - Sep 2023',
    desc: 'Developed scalable web and cross-platform mobile applications using React.js, React Native, Node.js, and Express.js. Delivered projects across healthcare, governance, and e-commerce domains, including QYUBIC, Guvrix, and Doctorji. Led approximately 80% of the frontend development for Guvrix, built reusable UI components, integrated REST APIs, Firebase services, and optimized application performance while collaborating closely with cross-functional teams.',
  },
  {
    role: 'Software Engineer (Full Stack JavaScript Developer)',
    company: 'SELUNE TECHNOLOGIES PVT. LTD. (Formerly What To Fabrikat OÜ Pvt. Ltd.)',
    companyLogo: '/img/icons/common/wtf_logo.jpg',
    date: 'Oct 2023 - Present',
    desc: 'Building and enhancing LendStack, a comprehensive fintech platform for loan management, collections, reporting, cash ledger, and subscription management. Developing scalable web applications with React.js, Next.js, TypeScript, and Material UI, cross-platform mobile apps with React Native, and secure REST APIs using Node.js, Express.js, Sequelize, and MySQL. Integrated Firebase services, payment gateways (Razorpay, Stripe, Cashfree), optimized backend performance, and delivered reusable, production-ready solutions.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'LendStack (Web & Mobile)',
    desc: 'Enterprise fintech platform for loan management, borrower onboarding, EMI collections, cash ledger, expense tracking, reporting, subscription management, and payment processing. Developed scalable web and mobile solutions with secure APIs and reusable architecture.',
    techs:
      'React.js Next.js React-Native Node.js Express.js MySQL Sequelize-ORM Firebase MUI Razorpay',
    link: 'https://lendstack.app',
  },
  {
    name: 'QYUBIC (Web & Mobile)',
    desc: 'Cross-platform coupon and rewards platform enabling users to discover exclusive offers, memberships, and discounts from leading brands through responsive web and mobile applications.',
    techs:
      'React.js Next.js React-Native Redux Firebase Axios Bootstrap',
    link: 'https://www.qyubic.com/uae-en',
  },
  {
    name: 'Guvrix',
    desc: 'Enterprise governance platform for data security, compliance, risk assessment, and regulatory management. Led approximately 80% of frontend development, building interactive dashboards and reusable UI components.',
    techs:
      'React.js JavaScript Bootstrap Axios',
    link: 'https://guvrix.com/',
  },
  {
    name: 'Doctorji',
    desc: 'Healthcare platform for doctor discovery, online appointment booking, and hospital management. Built responsive interfaces with seamless API integration to deliver an intuitive patient experience.',
    techs:
      'JavaScript React.js Mantine-UI Axios REST-APIs',
    link: '/',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Mohd Tahir',
  description:
    'A passionate Full Stack Developer and Native Mobile Apps Developer.',
  author: 'Mohd Tahir',
  image: 'https://avatars.githubusercontent.com/u/78682863?v=4',
  url: 'https://mta-portfolio.netlify.app/',
  keywords: [
    'Mohd',
    'Tahir',
    'Mohd Tahir',
    '@MohdTahirMT',
    'MohdTahirMT',
    '@mohdtahirmt',
    'mohdtahirmt',
    'Portfolio',
    'Tahir Portfolio ',
    'Mohd Tahir Portfolio',
  ],
};
