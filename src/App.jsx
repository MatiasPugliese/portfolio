import React from "react";
import Intro from '../src/components/intro'
import Portfolio from '../src/components/portfolio'
import Footer from '../src/components/footer'
import Contact from '../src/components/contact'
import Navbar from '../src/components/navbar'
import Jobs from '../src/components/jobs'


function App (){
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <Jobs />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}


export default App;
