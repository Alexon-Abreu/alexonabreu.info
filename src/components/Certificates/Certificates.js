import uniqid from 'uniqid'
import './Certificates.css'

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
