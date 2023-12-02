import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
    url: "https://react.dev/",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
    url: "https://redux.js.org/",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
    url: "https://expressjs.com/",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
    url: "https://www.w3schools.com/js/",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
    url: "https://nodejs.org/en/learn",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
    url: "https://tailwindcss.com/docs/installation",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
    url: "https://git-scm.com/",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
    url: "https://github.com/rkstlohchab",
  },
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
//   {
//     name: "Contact",
//     iconUrl: contact,
//     link: "rkstlohchab@gmail.com",
//   },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/rkstlohchab",
  },
//   {
//     name: "LinkedIn",
//     iconUrl: linkedin,
//     link: "https://www.linkedin.com/in/YourLinkedInUsername",
//   },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "ERC20 Token Exchange",
    description:
      "Built a decentralized exchange for ERC20 tokens, allowing users to trade tokens in a secure and trustless manner.",
    link: "https://github.com/rkstlohchab/BlockChain_BootCamp",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/rkstlohchab/instagram-clone",
  }
];