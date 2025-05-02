import React from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup'

const AnimatedCounter = () => {
  return (
    <div id="counter" className='padding-x-lg xl:mt-0 mt-32'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-end items-end ml-auto max-w-3xl">
        {/* <div className='mx-auto grid-4-cols'> */}
        {counterItems.map((item)=>(
            <div className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center'>
            <div key={counterItems.label} className='counter-number text-white text-5xl font-bold mb-2'>
            <CountUp suffix={item.suffix} end={item.value}/>
            </div>
            <div className='text-white-50 text-lg'>{item.label}</div>
            </div>
        )

        )
        }
        </div>
    </div>
  )
}

export default AnimatedCounter