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
  description:
    "I'm passionate Full Stack developer having an experience of frontend technologies like React.js, Next.js also backend technologies like Node.js, Express.js with Database like MySQL, MongoDB and Native mobile apps development with React Native.",
  resumeLink: '',
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
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Node.js & Express.js'),
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
          skillName: 'NodeJS',
          iconifyTag: 'vscode-icons:file-type-node',
        },
        {
          skillName: 'ExpressJS',
          iconifyTag: 'logos:express',
        },
        {
          skillName: 'MongoDB',
          iconifyTag: 'vscode-icons:file-type-mongo',
        },
        {
          skillName: 'MySQL',
          iconifyTag: 'vscode-icons:file-type-mysql',
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
          skillName: 'vsCode',
          iconifyTag: 'vscode-icons:file-type-vscode',
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
    Stack: 'Backend',
    progressPercentage: '80',
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
    role: 'Software Engineer',
    company: 'P-CODER TECHNOLOGIES PVT LTD.',
    companyLogo: '/img/icons/common/pcoder.png',
    date: 'Sep 2021 – PRESENT',
    desc: 'As a seasoned full-stack developer, my expertise encompasses a broad spectrum of web application technologies, with a focus on leveraging the power of React.js and Next.js. These dynamic frameworks enable me to craft engaging and responsive user interfaces, enhancing the overall user experience. My proficiency extends further to the realm of native mobile app development, where I harness the capabilities of React Native to create compelling apps that seamlessly operate on both Android and iOS platforms. Shifting focus to the backend development, I have a strong command of Node.js and Express.js. These technologies enable me to construct robust server-side architectures that facilitate seamless communication between the frontend and backend. With a keen understanding of RESTful APIs and server-side logic, I ensure that data flows efficiently and securely throughout the application ecosystem. Databases play a pivotal role in any data-driven application, and I have adeptly worked with two prominent options: MySQL and MongoDB.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'QYUBIC (Online Coupon and Discount)',
    desc: 'This web application provides coupons and discount on top brands & categories. ',
    techs: 'Next.js Redux.js Bootstrap CSS3 Axios More...',
    link: 'https://www.qyubic.com/uae-en',
  },
  {
    name: 'Doctorji (Doctor’s Appointment System)',
    desc: 'This web application provides services like appointment, best doctor and hospital treatment according to your preferrence.',
    techs: 'Reaxt.js Mantine-UI Node.js Express.js MongoDB Axios More...',
    link: 'https://www.doctorji.co.in/',
  },
  {
    name: 'Guvrix (Data Management)',
    desc: 'This web application provides many data services like DATA SECURITY, DATA USAGE, DATA REGULATIONS etc',
    techs: 'React.js Bootstrap CSS3 Axios More...',
    link: 'https://guvrix.com/',
  },
  {
    name: 'QYUBIC Mobile App (Online Coupon and Discount)',
    desc: 'This web application provides coupons and discount on top brands & categories. ',
    techs:
      'React-Native Firebase Redux.js Axios Stylesheet(CSS) Native-Base More...',
    link: 'https://play.google.com/store/apps/details?id=com.qyubic',
  },
  {
    name: 'LendStack (Loan Management App)',
    desc: 'This mobile application provides many services like Loan, EMI, Credit etc',
    techs: 'React-Native Redux.js Axios Stylesheet(CSS) Native-Base More...',
    link: 'https://play.google.com/store/apps/details?id=com.lendstack',
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
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
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
