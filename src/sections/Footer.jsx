import React from 'react'
import {socialImgs} from "../constants/index.js"

const Footer = (props) => {
  return (
    <div className="flex justify-center items-center h-40 space-x-6">
    {socialImgs.map((img)=>
      <a href={img.link} key={img.name}>
        <img src={img.imgPath} alt={img.name} className="w-10 h-10 hover:opacity-80 transition-opacity duration-200"/>
      </a>
    )}
    </div>
  )
}

export default Footer