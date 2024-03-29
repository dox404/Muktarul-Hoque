import React from 'react'
import './Skills.css'
function Skills() {

  return (
    <>
      {/* <h1 className="text-3xl text-center mt-0 p-0">SKILLS</h1> */}
      <div className="overflow-auto h-full">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 flex h-screen items-center justify-center">
          <div className="flex items-center justify-center">
            <img src={require('../../assets/skills/js.png')} alt='skill' className='img' />
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
      </div>


    </>
  )
}

export default Skills
