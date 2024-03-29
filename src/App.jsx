
import { useState } from 'react'
import About from './About'
import './App.css'
import Contact from './Contact'
import Footer from './Footer'
import Gallery from './Gallery'
import Hero from './Hero'
import Navbar from './Navbar'
import Programs from './Programs'
import Testimonial from './Testimonial'
import Title from './Title'
import Videoplayer from './Videoplayer'

function App() {
  const[playState, setPlayState] = useState(false);

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Title subTitle='Our Programs' title='What We Offer' />
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subTitle='GALLERY' title='Campus Photos' />
        <Gallery />
        <Title subTitle='TESTIMONIALS' title='What Student Says' />
        <Testimonial />
        <Title subTitle='CONTACT US' title='Get in Touch' />
        <Contact />
        <Footer/>
        <Videoplayer playState={playState}  setPlayState={setPlayState}/>
      </div>
    </>
  )
}

export default App
