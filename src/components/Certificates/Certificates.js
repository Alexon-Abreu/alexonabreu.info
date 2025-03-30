import { Component } from 'react'
import uniqid from 'uniqid'
import './Certificates.css'
import BeMyAppLogo from './BeMyAppLogo.jpg';
import IBM_Logo from './IBM_Logo.png'
import CodeademyLogo from './CodeademyLogo.png'
import AmazonWebServicesLogo from './AmazonWebServicesLogo.png'
import CodePathLogo from './CodePathLogo.jpg'


const certificates = [
  {
    title: 'Intro to iOS Development',
    subtitle: '(In Progress)',
    logo: CodePathLogo,
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    subtitle: 'IBM',
    logo: IBM_Logo,
    link: 'https://www.credly.com/badges/e8dc91c2-39e6-47ae-9d9c-030f04f4b3cb/public_url'
  },
  {
    title: 'Built a virtual agent at IBM TechXchange',
    subtitle: 'BeMyApp X IBM',
    logo: BeMyAppLogo,
    link: 'https://www.virtualbadge.io/certificate-validator?credential=1d0e451e-b44c-4c96-9588-acfa12f6882b',
  },
  {
    title: 'Cloud Computing Fundamentals',
    subtitle: 'IBM',
    logo: IBM_Logo,
    link: 'https://www.credly.com/badges/1ceb7d8e-4a36-4c12-bf9d-63653d6946bd/public_url',
  },
  {
    title: "Develop solutions with Azure AI Document Intelligence",
    subtitle: 'Microsoft',
    logo: '',
    link: '',
  },
  {
    title: 'Basics of Quantum Information',
    subtitle: 'IBM',
    logo: IBM_Logo,
    link: 'https://www.credly.com/badges/f7370c87-35b3-489c-ac52-cbc564283723/linked_in_profile',
  },
  {
    title: 'Quantum-Safe Encryption Essentials',
    subtitle: 'IBM',
    logo: IBM_Logo,
    link: 'https://www.credly.com/badges/9dd99e0a-506a-4956-849f-2a29e30b7aa6/linked_in_profile',
  },
  {
    title: "Create a Voice Assistant with OpenAI's GPT-3 and IBM Watson",
    subtitle: 'IBM',
    logo: IBM_Logo,
    link: 'https://courses.cognitiveclass.ai/certificates/126988e2c04d4010bca8cebf0ef38fe7',
  },
  {
    title: 'Intro to ChatGPT',
    subtitle: 'Codecademy',
    logo: CodeademyLogo,
    link: 'https://www.codecademy.com/profiles/AlexonAbreu/certificates/ef9a06323b7d44b091a3ec7816092dc6',
  },
  {
    title: 'Learn C++ Course',
    subtitle: 'Codecademy',
    logo: CodeademyLogo,
    link: 'https://www.codecademy.com/profiles/AlexonAbreu/certificates/b74a2390dfc4127fa5d43fe147425ad0',
  },
  {
    title: 'Learn Python 3 Course',
    subtitle: 'Codecademy',
    logo: CodeademyLogo,
    link: 'https://www.codecademy.com/profiles/AlexonAbreu/certificates/6c152bd262967f8c941c9707ed636bda',
  },
  {
    title: 'IBM Accelerate - Software Developer',
    subtitle: 'IBM',
    logo: IBM_Logo,
    link: 'https://www.credly.com/badges/58d59697-5b38-4e2a-96db-41700346e7b5/linked_in_profile',
  },
  {
    title: 'Building Modern Python Applications on AWS',
    subtitle: 'Amazon Web Services',
    logo: AmazonWebServicesLogo,
    link: 'https://www.coursera.org/account/accomplishments/verify/KLSQKJGMXA5M?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
  },
  {
    title: 'Machine Learning with Python - Level 1',
    subtitle: 'IBM',
    logo: IBM_Logo,
    link: 'https://www.credly.com/badges/a9e4e339-2284-4c45-9078-265ed4958784?source=linked_in_profile',
  },
  {
    title: 'Applied Data Science with Python - Level 2',
    subtitle: 'IBM',
    logo: IBM_Logo,
    link: 'https://www.credly.com/badges/9c8fe71a-6c43-4bbd-8645-4204e10baf62?source=linked_in_profile',
  },
  {
    title: 'Build Your Own Chatbot - Level 1',
    subtitle: 'IBM',
    logo: IBM_Logo,
    link: 'https://www.credly.com/badges/d26d6349-cc55-47f7-8bee-ff2b3a88a2e5?source=linked_in_profile',
  },
  // Add more certificates as needed
]

const Certificates = () => {
  if (!certificates.length) return null

  return (
    <section id='certificates' className='section certificates'>
      <h2 className='section__title'>Certifications</h2>
      <div className='certificates__grid'>
        {certificates.map((cert) => (
          <a
            key={uniqid()}
            href={cert.link}
            target='_blank'
            rel='noopener noreferrer'
            className='cert-card'
          >
            <div className='cert-card__header'>
              <img src={cert.logo} alt={cert.title} className='cert-card__logo' />
            </div>
            <div className='cert-card__body'>
              <h3 className='cert-card__title'>{cert.title}</h3>
              <p className='cert-card__subtitle'>{cert.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Certificates
