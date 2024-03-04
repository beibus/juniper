import React from 'react'
import Forecaster from "../../components/Forecaster/Forecaster"
import Features from "../../components/Features/Features"
import Outdoor from "../../components/Outdoor/Outdoor"
import Reviews from "../../components/Reviews/Reviews"
import FAQ from "../../components/FAQ/FAQ"
import Download from "../../components/Download/Download"
import "./Home.css"

const Home = () => {
  return (
    <div className="general">
      <Forecaster />
      <Outdoor />
      <Reviews />
      <FAQ />
      <Download />
    </div>
  )
}

export default Home