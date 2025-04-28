import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import { ReactTyped } from 'react-typed'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          <span className='about__name'>{name}</span>
        </h1>
      )}
      
      {role && <h2 className='about__role'>{role}</h2>}

        {/* using ReactTyped to create typing effect on description */}
        <p className='about__desc'>
        <ReactTyped
          strings={[description]}
          typeSpeed={54}
          backSpeed={27}
          loop={false}
          showCursor={true}
        />
      </p>

      <div className='about__contact center'>
        {resume && (
          <a 
            href={resume} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
