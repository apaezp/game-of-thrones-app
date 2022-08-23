import React from 'react';

import HeroSection from "./HeroSection.js";
import Characters from "./Characters.js";
import Books from "./Books.js";
import TvSeries from "./TvSeries.js";
import Footer from "./Footer.js"



function Home() {
  return (
    <>
      <HeroSection />
      <Characters />
      <Books />
      <TvSeries />   
      <Footer />
      
    </>
  );
}

export default Home;