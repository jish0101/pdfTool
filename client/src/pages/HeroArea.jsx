import React from 'react'
import { Link } from 'react-router-dom'
import homeIcon from './homeIcon.svg'

const HeroArea = () => {
  return (
    <div className="grid items-center gap-8 text-center my-10 lg:px-20 md:grid-cols-2 md:text-start md:my-28">
      <div className="flex md:ml-12 gap-5 md:gap-8 flex-col">
        <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold">We make PDF easy.</h1>
        <p className="text-2xl">
          All the tools you’ll need to be more productive and work smarter with documents.
        </p>
        <div className="flex gap-5 my-8 justify-center md:justify-start">
        <Link className="filled" to='/pro-subscription'>Get Pro Now</Link>
        <Link className="outlined" to='/pdf-tools'>Explore All Pdf Tools</Link>
        </div>
      </div>
      <div className="flex justify-center">
        <img className="w-2/3 aspect-square" src={homeIcon} alt="Home Logo" />
      </div>
    </div>
  )
}

export default HeroArea