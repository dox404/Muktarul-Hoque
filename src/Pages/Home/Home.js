import React from 'react'
import ExampleDoc from './Resume/MUKTARUL_HOQUE-CV(2023).pdf'
function Home() {
  return (
    <>

      <div className="items gap-1">
        <div className="h-auto w-auto">
          <h1 className="font-semibold text-4xl name-text">MUKTARUL HOQUE</h1>
          <p>I am a dedicated and versatile software engineer passionate
            about crafting innovative solutions using cutting-edge
            technologies. With expertise in Node.js and
            React.js,Proficient in HTML and CSS, .My proficiency extends
            to MongoDB, allowing me to design efficient
            database.Additionally, I am well-versed in Git and GitHub,
            leveraging version control systems to collaborate effectively
            within teams, track changes, and maintain code integrity
            throughout the development lifecycle</p>
        </div>
        <div class="flex gap-4">
          <a href={ExampleDoc} download><button className="btn btn-primary  flex-auto w-45">Download Resume</button></a>
          <button className="btn btn-outline flex-auto w-45">Hire Me</button>

        </div>
      </div>
    </>
  )
}

export default Home





