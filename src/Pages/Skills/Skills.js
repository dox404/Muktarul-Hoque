import React from 'react'
import './Skills.css'
function Skills() {

  return (
    <>
      <h1 className="text-3xl text-center mb-5 mt-0">SKILLS</h1>
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 flex h-screen items-center justify-center overflow-scroll">
        <div className="flex items-center justify-center ">
          <img src={require('../../assets/skills/js.png')} alt='skill' className='img items-center justify-center' />
        </div>
        <div className="flex items-center justify-center">
          <img src={require('../../assets/skills/html.png')} alt='skill' className='img ' />
        </div>
        <div className="flex items-center justify-center">
          <img src={require('../../assets/skills/css.png')} alt='skill' className='img' />
        </div>
        <div className="flex items-center justify-center">
          <img src={require('../../assets/skills/react.png')} alt='skill' className='img' />
        </div>
        <div className="flex items-center justify-center">
          <img src={require('../../assets/skills/nodejs.png')} alt='skill' className='img' />
        </div>
        <div className="flex items-center justify-center">
          <img src={require('../../assets/skills/python.png')} alt='skill' className='img' />
        </div>
        <div className="flex items-center justify-center">
          <img src={require('../../assets/skills/mongodb.png')} alt='skill' className='img' />
        </div>
        <div className="flex items-center justify-center">
          <img src={require('../../assets/skills/github.png')} alt='skill' className='img' />
        </div>
      </div>

    </>
  )
}

export default Skills
