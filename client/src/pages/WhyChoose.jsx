import React from 'react'
import logo from '../assets/01.svg'


const WhyChoose = () => {
    const items = [
        { img: '/src/assets/01.svg', heading: 'People Trust Us', desc: 'Over a billion users have used our service to simplify their work with digital documents.' },
        { img: '/src/assets/02.svg', heading: 'Businesses Trust Us', desc: 'We’re one of the highest-rated PDF software on major B2B software listing platforms: Capterra, G2, and TrustPilot.' },
        { img: '/src/assets/03.svg', heading: 'Our Partners Trust Us', desc: 'Unlock bonus features with the .pdf Chrome Extension, Google Workspace, and Dropbox App—all free to use.' },
        { img: '/src/assets/04.svg', heading: '24/7 Customer Support', desc: 'Get all the help you need with our round-the-clock customer support.' },
        { img: '/src/assets/05.svg', heading: '256-Bit TLS Encryption', desc: 'We use 256-bit TLS encryption for secure information transfer.' },
        { img: '/src/assets/06.png', heading: 'Security Standards', desc: 'Your safety is our priority. .pdf is ISO/IEC 27001, GDPR, and CCPA compliant.' },
    ]
  return (
      <div className='my-32'>
          <h1 className='text-4xl font-bold text-center mb-16'>Why Choose .pdf?</h1>
          <div className='grid gap-16 p-6 md:p-20 lg:w-2/3 w-5/6 m-auto lg:grid-cols-3 grid-cols-1 bg-light-400 dark:bg-dark-400'>
          {items.map((item, index) => (
              <div className='flex flex-col gap-3' key={index}>
                  <img className='w-20 aspect-square mb-2' src={item.img} alt="logo-image" />
                  <h3 className='font-semibold text-xl'>{item.heading}</h3>
                  <p>{item.desc}</p>
              </div>
          ))}
          </div>
    </div>
  )
}

export default WhyChoose