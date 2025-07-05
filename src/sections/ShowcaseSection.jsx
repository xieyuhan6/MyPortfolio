import { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
    const sectionRef=useRef(null);
    const project1Ref=useRef(null);
    const project2Ref=useRef(null);
    const project3Ref=useRef(null);
useGSAP(()=>{
    const projects=[project1Ref.current,project2Ref.current,project3Ref.current];
    projects.forEach((card,index)=>{
        gsap.fromTo(
            card,
            {y:50,opacity:0},
            {y:0,opacity:1,delay:0.3*(index+1),scrollTrigger:{trigger:card,start:"top bottom-=100"}}
        );
    });
    gsap.fromTo(sectionRef.current,{opacity:0},{opacity:1,duration:1.5})
},[]);

  return (
    <section ref={sectionRef} id='work' className='app-showcase'>
    <div className='w-full'>
        <div className='showcaselayout'>
            <div  ref={project1Ref} className='first-project-wrapper'>
                <img src='/images/aiinterview.jpg' alt="firstproject"/>
                   <div className='text-content'>
                        <a href="https://ai-interview-jzwo.vercel.app/" className='underline'>
                            <h2>AII nterview Mocking Site</h2>
                        </a>
                {/* <p className='text-white-50 md:text-xl'>An app</p> */}
                    </div>
            </div>
            <div className='project-list-wrapper overflow-hidden'>
                <div ref={project2Ref} className='project'>
                    <div className='image-wrapper bg-[#ffefdb]'>
                        <img src='/images/Toolbox.png' alt="secondproject"/>
                    </div>  
                    <div className='group'>
                        <a href="https://toolbox-pwgl.vercel.app/" className='underline'>
                            <h2>ToolBox</h2>
                        </a>
                    </div>
                </div>    
        {/* <div ref={project3Ref} className='project'>
        <div className='image-wrapper bg-[#ffe7eb]'>
            <img src='/images/project3.png' alt="thirdproject"/>
        <h2>YC directory</h2>
        </div> */}
        {/* </div> */}
            </div>
        </div>
    </div>
    </section>
  )
}

export default ShowcaseSection