import React from "react";
import Intro from '../src/components/intro'
import Portfolio from '../src/components/portfolio'
import Footer from '../src/components/footer'
import Contact from '../src/components/contact'


function App (){
  return (
    <div className='App'>
      <Intro />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}


export default App;
