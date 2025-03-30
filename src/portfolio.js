const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/Alexon-Abreu',
  // title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Alexon Abreu',
  role: 'Full-Stack Engineer',
  description:
    'From a young age, I’ve been passionate about technology. It’s given me a way to explore new ideas and express my creativity through software development. Now, as I near the end of my bachelor’s degree in Computer Science, I’m focused on building innovative software with a great team to make a meaningful impact.',
  resume: 'https://drive.google.com/file/d/1FYJy8fX9UleUBJK4XwvcHjwFt0C77Bl7/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/alexon-abreu/',
    github: 'https://github.com/Alexon-Abreu',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'GottaGo',
    subtitle: '(Capstone Project in Progress)',
    description:
      'GottaGo will provide real-time, user-verified information on public bathrooms so that everyone can quickly and confidently find a suitable facility when nature calls.',
    stack: ['React', 'JavaScript', 'CSS', 'HTML', 'Python', 'PostgreSQL', 'Google Takeout'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://docs.google.com/presentation/d/15LZvwkLcXePLMKtYb0vSWoKHqA6kqKGE6MF_z7SdXvs/edit#slide=id.p',
  },
  {
    name: 'NBA Data Mining Project',
    description:
      'Developed a predictive model using NBA player metrics to rank potential nominees for MVP, DPOY, and SMOY awards, aiming to provide an unbiased, data-driven reference for award authenticity.',
    stack: ['Jupyter Notebook', 'Python', 'BRScraper', 'pandas', 'numpy', 'matplotlib', 'seaborn'],
    sourceCode: 'https://github.com/Alexon-Abreu/NBA-Data-Mining-Project.git',
    livePreview: 'https://www.canva.com/design/DAGZNLDa0Vw/SF3QN9rxpl0XGZx_nhFFUQ/view?utm_content=DAGZNLDa0Vw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf6e5773599',
  },
  {
    name: 'Recommendify',
    description:
      'Recommendify is a web application designed to uncover new music and your next favorite artist. Simply sign in with your Spotify account and Recommendify will give you a list of recommended artists to explore! ✨🎶',
    stack: ['React', 'JavaScript', 'CSS', 'HTML', 'Spotify API'],
    sourceCode: 'https://github.com/dluzong/Recommendify.git',
    livePreview: 'https://www.canva.com/design/DAGZZPn7_24/z0HIoenldQX-zy8M0V73hA/view?utm_content=DAGZZPn7_24&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h38dd60f9c7',
  },
 // {
  //   name: 'Project 3',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const certificates = [
  {
    title: 'Basics of Quantum Information',
    subtitle: 'John Watrous',
    logo: 'https://cognizant.scene7.com/is/image/cognizant/ibm-logo?fmt=png-alpha',
    link: 'https://www.credly.com/badges/f7370c87-35b3-489c-ac52-cbc564283723/linked_in_profile',
  },
  {
    title: 'Quantum-Safe Encryption Essentials',
    subtitle: 'Dwaine Snow',
    logo: 'https://cognizant.scene7.com/is/image/cognizant/ibm-logo?fmt=png-alpha',
    link: 'https://www.credly.com/badges/9dd99e0a-506a-4956-849f-2a29e30b7aa6/linked_in_profile',
  },
  {
    title: "Create a Voice Assistant with OpenAI's GPT-3 and IBM Watson",
    subtitle: 'Rav Ahuja',
    logo: 'https://cognizant.scene7.com/is/image/cognizant/ibm-logo?fmt=png-alpha',
    link: 'https://courses.cognitiveclass.ai/certificates/126988e2c04d4010bca8cebf0ef38fe7',
  },
  {
    title: 'Intro to ChatGPT',
    subtitle: 'Zoe Bachman',
    logo: 'https://cdn.icon-icons.com/icons2/2389/PNG/512/codecademy_logo_icon_145396.png',
    link: 'https://www.codecademy.com/profiles/AlexonAbreu/certificates/ef9a06323b7d44b091a3ec7816092dc6',
  },
  {
    title: 'Learn C++ Course',
    subtitle: 'Zoe Bachman',
    logo: 'https://cdn.icon-icons.com/icons2/2389/PNG/512/codecademy_logo_icon_145396.png',
    link: 'https://www.codecademy.com/profiles/AlexonAbreu/certificates/b74a2390dfc4127fa5d43fe147425ad0',
  },
  {
    title: 'Learn Python 3 Course',
    subtitle: 'Zoe Bachman',
    logo: 'https://cdn.icon-icons.com/icons2/2389/PNG/512/codecademy_logo_icon_145396.png',
    link: 'https://www.codecademy.com/profiles/AlexonAbreu/certificates/6c152bd262967f8c941c9707ed636bda',
  },
  // Add more certificates as needed
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C++',
  'Python',
  'Jupyter Notebooks',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git',
  'Docker',
  'Flutter',
  'Dart'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'alexon.abreuramirez26@myhunter.cuny.edu',
}

export { header, about, projects, certificates, skills, contact }
