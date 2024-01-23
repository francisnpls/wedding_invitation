import React from 'react';
import Navbar from '../layouts/Navbar';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import WeddingInfo from '../components/WeddingInfo';
import Details from '../components/Details';
import GetThere from '../components/GetThere';

const Home = () => {
  return (
    <main className="overflow-hidden"> 
      <Navbar/>
      <Hero/>
      <OurStory/>
      <WeddingInfo/>
      <Details/>
      <GetThere/>
    </main>
  )
}

export default Home