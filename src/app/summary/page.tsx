import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainSection from './components/MainSection'

export default function page() {
  return (
    <div>
        <Navbar/>
        <MainSection/>
        <Footer/>
    </div>
  )
}
