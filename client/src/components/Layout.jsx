import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from './index'

const Layout = () => {
  return (
    <>
      <div className='bg-light-100 text-dark-200 dark:bg-dark-100 dark:text-light-200 overflow-hidden'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default Layout