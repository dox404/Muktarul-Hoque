import React from 'react'
import ExampleDoc from './Resume/MUKTARUL_HOQUE-CV(2023).pdf'
import { Typewriter } from 'react-simple-typewriter'
import './Home.css'
function Home() {
  return (
    <>

      <div className="items gap-1 w-50 ml-20 mr-20 mt-5">
        <div className="h-auto">
          <h1 className="font-semibold text-4xl name-text"><Typewriter
            words={[' Muktarul Hoque']}
            // loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h1>
          <p className="paragraph-text">I am a dedicated and versatile software engineer passionate
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
          <a href={ExampleDoc} download><button className="btn btn-primary  flex-auto w-45 button">Download Resume</button></a>
          {/* <button className="btn btn-outline flex-auto w-45">Hire Me</button> */}

        </div>
      </div>
    </>
  )
}

export default Home





