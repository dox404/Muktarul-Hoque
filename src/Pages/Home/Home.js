import React from 'react'
import ExampleDoc from './Resume/MUKTARUL_HOQUE-CV(2023).pdf'
function Home() {
  return (
    <><div>
      <div className="parent flex items-center justify-center grid items-center justify-center h-full">
      <div className="grid items-center justify-center">
        <div>
          <h1 className="font-semibold text-4xl name-text">MUKTARUL HOQUE</h1>
          <p>Lorem Ipsum is simply d</p>
          <div class="flex gap-4">
            <a href={ExampleDoc} download><button className="btn btn-primary  flex-auto w-45">Download Resume</button></a>
            <button className="btn btn-outline flex-auto w-45">Hire Me</button>
          </div>
        </div>

      </div>
      </div>
      </div>
    </>
  )
}

export default Home




{/* <div className="flex items-center justify-center h-screen">
        <div>
          <h1 className="font-semibold text-4xl">MUKTARUL HOQUE</h1>
          <p>Lorem Ipsum is simply d</p>
          <div class="flex gap-4">
            <a href={ExampleDoc} download><button className="btn btn-primary  flex-auto w-45">Download Resume</button></a>
            <button className="btn btn-outline flex-auto w-45">Hire Me</button>
          </div>
        </div>

      </div> */}




