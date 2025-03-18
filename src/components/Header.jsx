import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'

const Header = () => {
  return (
    <header className='h-auto p-4 flex flex-col'>
        <NavBar />
        {/* <Hero /> */}
    </header>
  )
}

export default Header