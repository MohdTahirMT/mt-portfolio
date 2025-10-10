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
  description: "I'm a passionate Frontend Developer with experience in building modern web and mobile applications using React.js, Next.js, and React Native. I focus on creating intuitive, responsive, and high-performance user interfaces that deliver seamless experiences across platforms.",
  resumeLink: 'https://drive.google.com/file/d/12Wz0RNchAKpMbLHC0D-b69tDNAo8DSij/view?usp=sharing',
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
  subTitle: 'Frontend Dev on a mission to explore every pixel, every framework, and every idea.',
  data: [
    {
      title: 'Software Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building Native Mobile Apps in React Native'),
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
          skillName: 'Git',
          iconifyTag: 'logos:git-icon',
        },
        {
          skillName: 'Github',
          iconifyTag: 'logos:github-icon',
        },
        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'Bootstrap',
          iconifyTag: 'logos:bootstrap',
        },
        {
          skillName: 'jQuery',
          iconifyTag: 'logos:jquery',
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
          skillName: 'Firebase',
          iconifyTag: 'vscode-icons:file-type-firebase',
        },
        {
          skillName: 'Chat GPT',
          iconifyTag: 'logos:openai-icon',
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
    Stack: 'Frontend (Design & Development)', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Mobile Apps',
    progressPercentage: '80',
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
    role: 'Software Engineer (Full Stack Developer)',
    company: 'P-CODER TECHNOLOGIES PVT LTD.',
    companyLogo: '/img/icons/common/pcoder.png',
    date: 'Sep 2021 – Sep 2023',
    desc: 'Delivered multiple web and mobile projects, gaining solid experience in the full frontend development lifecycle and modern UI engineering. 1) QYUBIC (Web & Mobile App): Built and maintained cross-platform applications using React Native, React.js, JavaScript, Firebase, Axios, and CSS, providing users with a seamless experience for accessing exclusive coupons and discounts. 2) Guvrix (Data Management): Led frontend development (covering 80% of the platform) using React.js, Bootstrap, Axios, and CSS, focusing on building intuitive dashboards and interactive data visualizations. 3) Doctorji (Doctor Appointment System): Developed the frontend interface with React.js, Mantine UI, and Axios, enabling users to book and manage online appointments easily with a smooth, responsive UI. Strengthened expertise in scalable UI architecture, performance optimization, and cross-functional collaboration, consistently delivering high-quality, production-ready frontend solutions.',
  },
  {
    role: 'Software Engineer (Full Stack Developer)',
    company: 'WHAT TO FABRIKAT OÜ PVT LTD.',
    companyLogo: '/img/icons/common/wtf_logo.jpg',
    date: 'Oct 2023 – PRESENT',
    desc: 'Contributing to LendStack, a comprehensive loan management platform with modules for loan collections, reporting, and cash ledger management. Mobile App: Building and optimizing cross-platform mobile features using React Native, JavaScript, and Firebase, ensuring smooth performance and excellent UX on both Android and iOS. Web App: Developing modern, responsive interfaces using React.js, Next.js, JavaScript, Axios, Firebase, and Material UI, focusing on scalability, usability, and pixel-perfect design implementation. Collaborating closely with product, design, and QA teams to deliver high-quality user experiences, emphasizing clean architecture, reusable components, and maintainable frontend codebases.Contributing to LendStack, a comprehensive loan management platform with modules for loan collections, reporting, and cash ledger management. Mobile App: Building and optimizing cross-platform mobile features using React Native, JavaScript, and Firebase, ensuring smooth performance and excellent UX on both Android and iOS. Web App: Developing modern, responsive interfaces using React.js, Next.js, JavaScript, Axios, Firebase, and Material UI, focusing on scalability, usability, and pixel-perfect design implementation. Collaborating closely with product, design, and QA teams to deliver high-quality user experiences, emphasizing clean architecture, reusable components, and maintainable frontend codebases.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'LendStack WebApp (Loan Management and Cash Ledger)',
    desc: 'This web application provides many services like Loan, EMI, Credit etc',
    techs: 'React.js JavaScript Firebase Material UI and More...',
    link: 'https://lendstack.app',
  },
  {
    name: 'LendStack (Loan Management App)',
    desc: 'This mobile application provides many services like Loan, EMI, Credit etc',
    techs: 'React-Native Redux.js Axios Stylesheet(CSS) Native-Base More...',
    link: 'https://play.google.com/store/apps/details?id=com.lendstack',
  },
  {
    name: 'QYUBIC (Online Coupon and Discount)',
    desc: 'This web application provides coupons and discount on top brands & categories. ',
    techs: 'Next.js Redux.js Bootstrap CSS3 Axios More...',
    link: 'https://www.qyubic.com/uae-en',
  },
  {
    name: 'QYUBIC Mobile App (Online Coupon and Discount)',
    desc: 'This web application provides coupons and discount on top brands & categories. ',
    techs:
      'React-Native Firebase Redux.js Axios Stylesheet(CSS) Native-Base More...',
    link: 'https://play.google.com/store/apps/details?id=com.qyubic',
  },
  {
    name: 'Guvrix (Data Management)',
    desc: 'This web application provides many data services like DATA SECURITY, DATA USAGE, DATA REGULATIONS etc',
    techs: 'React.js Bootstrap CSS3 Axios More...',
    link: 'https://guvrix.com/',
  },
  {
    name: 'Doctorji (Doctor’s Appointment System)',
    desc: 'This web application provides services like appointment, best doctor and hospital treatment according to your preferrence.',
    techs: 'React.js Mantine-UI Axios More...',
    link: 'https://www.doctorji.co.in/',
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
