import { NUS, GPT, Freelancer } from "../assets/images";
import {
    DynamoDB,
    GCP,
    SendGrid,
    adonis,
    antdesign,
    aws,
    bootstrap,
    car,
    contact,
    css,
    django,
    docker,
    elastic,
    estate,
    express,
    firestore,
    git,
    github,
    gitlab,
    golang,
    heroku,
    html,
    javascript,
    jest,
    jquery,
    linkedin,
    mongodb,
    mui,
    mysql,
    nest,
    netlify,
    nextjs,
    nodejs,
    postgresql,
    pricewise,
    python,
    quasar,
    react,
    redis,
    redux,
    sass,
    snapgram,
    socket,
    stripe,
    summiz,
    tailwindcss,
    threads,
    twilio,
    typescript,
    vercel,
    vue,
    vuex
} from "../assets/icons";

export const SKILL_TYPE = {
    FRONTEND: "Frontend",
    BACKEND: "Backend",
    DATABASE: "Database",
    SERVICE: "Service",
    VERSION_CONTROL: "Version Control",
    DEVOPS: "Devops",
    STATE_MANAGEMENT: "State Management",
    OTHER: "Other",
}

export const skills = [

    {
        imageUrl: nextjs,
        name: "Next.js",
        yoe: 2,
        type: "Frontend",
        order:1
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        yoe: 4,
        type: "Backend",
        order:1
    },
    {
        imageUrl: react,
        name: "React",
        yoe: 4,
        type: "Frontend",
        order:1
    },
    {
        imageUrl: redux,
        name: "Redux",
        yoe: 3,
        type: "State Management",
        order:1
    },
    {
        imageUrl: vuex,
        name: "VueX",
        yoe: 3,
        type: "State Management",
        order:1
    },
    {
        imageUrl: sass,
        name: "Sass",
        yoe: 4,
        type: "Frontend",
        order:1
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        yoe: 4,
        type: "Frontend",
        order:1
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        yoe: 3,
        type: "Frontend",
        order:1
    },
    {
        imageUrl: css,
        name: "CSS",
        yoe: 4,
        type: "Frontend",
        order:1
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        yoe: 4,
        type: "Frontend",
        order:1
    },
    {
        imageUrl: html,
        name: "HTML",
        yoe: 4,
        type: "Frontend",
        order:1
    },
    {
        imageUrl: express,
        name: "Express",
        yoe: 2,
        type: "Backend",
        order:1
    },
    {
        imageUrl: git,
        name: "Git",
        yoe: 4,
        type: "Version Control",
        order:1
    },
    {
        imageUrl: github,
        name: "GitHub",
        yoe: 4,
        type: "Version Control",
        order:1
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        yoe: 1,
        type: "Database",
        order:1
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        yoe: 3,
        type: "Frontend",
        order:1
    },
    {
        imageUrl: adonis,
        name: "AdonisJS",
        yoe: 1,
        type: "Backend",
        order:1
    },
    {
        imageUrl: antdesign,
        name: "Ant Design",
        yoe: 1,
        type: "Frontend",
        order:1
    },
    {
        imageUrl: aws,
        name: "AWS",
        yoe: 2,
        type: "Devops",
        order:1
    },
    {
        imageUrl: GCP,
        name: "Google Cloud",
        yoe: 2,
        type: "Devops",
        order:1
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        yoe: 4,
        type: "Frontend",
        order:1,
    },
    {
        imageUrl: django,
        name: "Django",
        yoe: 0.5,
        type: "Frontend",
        order:1,
    },
    {
        imageUrl: docker,
        name: "Docker",
        yoe: 2,
        type: "Backend",
        order:1,
    },
    {
        imageUrl: DynamoDB,
        name: "DynamoDB",
        yoe: 0.5,
        type: "Database",
        order:1,
    },
    {
        imageUrl: elastic,
        name: "Elastic",
        yoe: 1,
        type: "Service",
        order:1,
    },
    {
        imageUrl: firestore,
        name: "Firebase",
        yoe: 2,
        type: "Database",
        order:1,
    },
    {
        imageUrl: gitlab,
        name: "Gitlab",
        yoe: 2,
        type: "Version Control",
        order:1,
    },
    {
        imageUrl: golang,
        name: "Go",
        yoe: 2,
        type: "Backend",
        order:1,
    },
    {
        imageUrl: heroku,
        name: "Heroku",
        yoe: 2,
        type: "Devops",
        order:1,
    },
    {
        imageUrl: jest,
        name: "Jest",
        yoe: 2,
        type: "Test",
        order:1,
    },
    {
        imageUrl: jquery,
        name: "Jquery",
        yoe: 1,
        type: "Frontend",
        order:1,
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        yoe: 4,
        type: "Database",
        order:1,
    },
    {
        imageUrl: nest,
        name: "NestJS",
        yoe: 2,
        type: "Backend",
        order:1,
    },
    {
        imageUrl: netlify,
        name: "Netlify",
        yoe: 2,
        type: "Devops",
        order:1,
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        yoe: 3,
        type: "Database",
        order:1,
    },
    {
        imageUrl: python,
        name: "Python",
        yoe: 1,
        type: "Backend",
        order:1,
    },
    {
        imageUrl: quasar,
        name: "Quasar",
        yoe: 1,
        type: "Frontend",
        order:1,
    },
    {
        imageUrl: redis,
        name: "Redis",
        yoe: 3,
        type: "Database",
        order:1,
    },
    {
        imageUrl: SendGrid,
        name: "SendGrid",
        yoe: 1,
        type: "Service",
        order:1,
    },
    {
        imageUrl: socket,
        name: "Socket",
        yoe: 2,
        type: "Service",
        order:1,
    },
    {
        imageUrl: stripe,
        name: "Stripe",
        yoe: 2,
        type: "Service",
        order:1,
    },
    {
        imageUrl: twilio,
        name: "Twilio",
        yoe: 1,
        type: "Service",
        order:1,
    },
    {
        imageUrl: vercel,
        name: "Vercel",
        yoe: 2,
        type: "Devops",
        order:1,
    },
    {
        imageUrl: vue,
        name: "Vue.js",
        yoe: 2,
        type: "Frontend",
        order:1,
    },
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "NUS Technology • HCMC",
        company_link: "https://nustechnology.com/",
        icon: NUS,
        iconBg: "#accbe1",
        date: "December 2021 - Present",
        points: [
            "Diverse Project Experience: Contributed to over 10 projects across various industries, including E-commerce, Travel, Construction, Education, Stock, CMS, Security, and Logistics",
            "CI/CD System Construction: Established a CI/CD system on GitHub, streamlining code quality analysis and saving signi cant development time by assisting teammates in code quality evaluation and improvement strategies",
            "Payment System Integration: Implemented the Stripe payment mechanism within applications, facilitating easier user payments and managing complex payment cycles through direct client consultations.",
            "Interface and Performance Strategy: Developed a strategy that enhanced the user interface and doubled the access speed by delivering rapid and high-quality images.",
            `Multi-Stage Delivery Pipeline: Con gured a multi-stage Delivery Pipeline in GKE that
            automated the work ow from code commit to deployment, incorporating custom build steps,
            integrating unit and integration tests, and ensuring artifact storage in Container Registry.`,
            `Multilingual Application Development: Built applications in Golang and NodeJS on an open platform, enabling simultaneous site construction in two languages. Also developed custom Oauth2 authentication using Golang and Authlete.`
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "GPT Group",
        company_link: "https://www.gptgroup.net/",
        icon: GPT,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - November 2021",
        points: [
            "Project Contribution: Played a pivotal role in over 2 major projects, focusing on enhancing code quality and providing crucial code reviews for team members.",
            "Sprint Planning and Management: Determined sprint goals and task lists for each sprint, collaborating with team members to accurately estimate the time and resources needed for each task",
            "Project Ownership and Quality Assurance: Took full ownership of projects, ensuring the codebase was of the highest quality and managing technical debts effectively",
            "Architectural Leadership: Provided critical architectural and design direction, assessed risks, and evaluated the impact of new features and implementations on the system’s integrity.",
            "Code Refactoring and Efficiency: Led efforts in refactoring and creating reusable components, resulting in a significant  reduction of over 200 development hours monthly",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Freelancer",
        company_link: "#",
        icon: Freelancer,
        iconBg: "#b7e4c7",
        date: "2019 - December 2020",
        points: [
            "Adaptive Responsive Design: Implemented advanced responsive design techniques, enabling optimal application use across diverse devices.",
            "WT Authentication and Authorization: Integrated JWT for robust authentication and authorization processes.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Single-Page Application Development: Built a single-page application using React, Redux, and TypeScript for streamlined access to company resources.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/hoainho',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/hoai-nho/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];