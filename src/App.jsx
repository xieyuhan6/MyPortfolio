import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
// import LogoSection from './sections/LogoSection'
import FeatureCard from './sections/FeatureCard'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
// import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
        <NavBar/>
        <Hero/>
        <ShowcaseSection/>
        {/* <LogoSection/> */}
        <FeatureCard/>
        <ExperienceSection/>
        <TechStack/>
        {/* <Testimonials/> */}
        <Contact/>
        <Footer/>
    </>
  )
}

export default App