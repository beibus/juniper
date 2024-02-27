import React from 'react'
import Forecaster from "../../components/Forecaster/Forecaster"
import Outdoor from "../../components/Outdoor/Outdoor"
import Reviews from "../../components/Reviews/Reviews"
import FAQ from "../../components/FAQ/FAQ"
import Download from "../../components/Download/Download"




const Home = () => {
  return (
    <div>
      <Forecaster />
      <Outdoor />
      <Reviews />
      <FAQ />
      <Download />
    </div>
  )
}

export default Home