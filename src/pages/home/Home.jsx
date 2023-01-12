import React from 'react'
import "./Home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import RectangleCard from "../../components/card/rectangularCard/RectangleCard";
import Revenue from "../../components/card/revenue/Revenue";
import Chart from "../../components/card/chart/Chart";

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className='center-top'>
          <RectangleCard type="user" />
          <RectangleCard type="order" />
          <RectangleCard type="earnings" />
          <RectangleCard type="balance" />
        </div>
        <div className='center'>
          <Revenue />
          <Chart />
        </div>
      </div>
    </div>
  )
}

export default Home