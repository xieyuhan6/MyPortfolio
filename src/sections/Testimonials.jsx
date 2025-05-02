import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'
import Glowcard from '../components/Glowcard'

const Testimonials = () => {
  return (
    <section id="testimonials" className='flex-center section-padding'>
    <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader title="what people say about me" sub="client feedback"/>
        <div className='lg:columns-3 md:columns-2 columns-1 mt-16'>
            {testimonials.map((testimonial)=>(
                <Glowcard card={testimonial}>
                    <div className='flex items-center gap-3'>
                    <div>
                        <img src={testimonial.imgPath} alt={testimonial.name}/>
                    </div>
                    <div>
                        <p className='font-bold'>{testimonial.name}</p>
                    </div>
                    </div>
                </Glowcard>
            ))}
        </div>
    </div>
    </section>
  )
}

export default Testimonials