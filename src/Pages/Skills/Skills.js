import React from 'react'
import './Skills.css'
function Skills() {

  return (
    <>
    <h1>hii</h1>
    <h1 className="text-3xl text-center mb-5 mt-0">SKILLS</h1>
      <div className="grid grid-cols-3 gap-0 flex h-screen items-center justify-center">
        <img src={require('../../assets/skills/js.png')} className='img ' />
        <img src={require('../../assets/skills/html.png')} className='img '/>
        <img src={require('../../assets/skills/css.png')} className='img'/>
        <img src={require('../../assets/skills/react.png')} className='img'/>
        <img src={require('../../assets/skills/nodejs.png')} className='img'/>
        <img src={require('../../assets/skills/python.png')} className='img'/>
        <img src={require('../../assets/skills/mongodb.png')} className='img'/>
        <img src={require('../../assets/skills/github.png')} className='img'/>
      </div>

    </>
  )
}

export default Skills
