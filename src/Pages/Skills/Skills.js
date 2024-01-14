import React from 'react'
import './Skills.css'
function Skills() {

  return (
    <>
      <div className="grid flex items-center justify-center">
        <div className=" grid grid-cols-1 items-center justify-center gap-5">
          <div className="grid grid-cols-1 gap-10">
            <div className="flex">
              <h1 className="title-text">ReactJS:</h1>
              <div className="relative h-5 rounded-full bg-gray-200 w-96 ml-5">
                <div className="h-full animate-pulse rounded-full bg-blue-500" style={{ width: "90%" }}>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">90%</span>
                </div>
              </div>
            </div>
            <div className="flex">
              <h1 className="title-text">NodeJS:</h1>
              <div className="relative h-5 rounded-full bg-gray-200 w-96 ml-5">
                <div className="h-full animate-pulse rounded-full bg-blue-500" style={{ width: "90%" }}>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">90%</span>
                </div>
              </div>
            </div>

            <div className="flex">
              <h1 className="title-text">MongoDB:</h1>
              <div className="relative h-5 rounded-full bg-gray-200 w-96 ml-5">
                <div className="h-full animate-pulse rounded-full bg-blue-500" style={{ width: "70%" }}>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">70%</span>
                </div>
              </div>
            </div>
            <div className="flex">
              <h1 className="title-text">HTML&CSS:</h1>
              <div className="relative mb-5 h-5 rounded-full bg-gray-200 w-96 ml-5">
                <div className="h-full animate-pulse rounded-full bg-blue-500" style={{ width: "75%" }}>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">75%</span>
                </div>
              </div>
            </div>
          </div>



          {/* <div className="bg-gray-300 rounded-full w-full">
          <div className="w-1/2 py-0.5 flex items-center justify-center rounded-full bg-blue-500">
            <p className="text-xs text-white font-bold leading-none">50%</p>
          </div>
        </div> */}


        </div>
      </div>

    </>
  )
}

export default Skills
