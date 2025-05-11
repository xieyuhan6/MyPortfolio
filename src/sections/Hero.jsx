import { words } from "../constants/index.js"
import Buttons from '../components/Buttons.jsx'
// import HeroExperience from "../components/Models/HeroModels/HeroExperience.jsx"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimatedCounter from '../components/AnimatedCounter.jsx'

const Hero = () => {
    useGSAP((()=>{
        gsap.fromTo(".hero-text h1",
            {y:50,opacity:0},
            {y:0,opacity:1,stagger:0.2,duration:1,ease:"power2.inOut"}
        )
    }
    ))
  return (
    <section id="hero" className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src='/images/bg.png' alt="background"/>
        </div>
        <div className='hero-layout'>
           <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
        {/* <figure>
        <div className='hero-3d-layout border-red-200'> */}
        {/* <HeroExperience/> */}
        {/* </div>
        </figure> */}
            {/* <div className='flex flex-col gap-7'> */}
                <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10">
                    <div className='hero-text  mt-20'>
                        <h1>Shaping
                            <span className='slide'>
                            <span className='wrapper'>
                            {words.map(
                                (word,index)=>(
                                    <span key={index} className='flex items-center md:gap-3 gap-1 pb-2 w-100'>
                                      <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'/>
                                      <span>{word.text}</span>
                                    </span>
                                )
                            )}
                            </span>
                            </span>
                        </h1>
                        <h1>into Real projects</h1>
                        <h1>that Deliver Results</h1>
                        <p className='text-white-50 md:text-xl relative z-10'>Hi, I am YuhanXie</p>               
                        <Buttons className="md:w-80 md:h-70 w-60 h-12"id="work" text="see my work"/>
                </div>    
                <div className="w-full flex justify-center md:justify-end md:relative z-20">
                    <AnimatedCounter/>
                </div>
                </div>
            </header>
        </div>
    </section>
  )
}

export default Hero