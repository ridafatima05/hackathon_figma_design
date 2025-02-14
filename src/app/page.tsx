import BottomHeader from '@/components/bottomheader'
import DontMiss from '@/components/dontmiss'
import Essential from '@/components/essential'
import Featured from '@/components/featured'
import Footer from '@/components/footer'
import GearUp from '@/components/gearup'
import Header from '@/components/header'
import Hero from '@/components/hero'
import HeroSec from '@/components/herosec'
import HeroSecTwo from '@/components/herosectwo'
import Navigation from '@/components/navigation'
import TopHeader from '@/components/topheader'
import React from 'react'


const Home = () => {
  return (
    <div>
      <TopHeader/>
      <Header/>
      <BottomHeader/>
      <Hero/>
      <HeroSec/>
      <HeroSecTwo/>
      <Featured/>
      <GearUp/>
      <DontMiss/>
      <Essential/>
      <Navigation/>
      <Footer/>

    </div>
  )
}

export default Home
