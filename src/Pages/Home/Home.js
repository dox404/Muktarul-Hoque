import React from 'react'
// import ExampleDoc from './Resume/MUKTARUL_HOQUE-CV(2023).pdf'
import Navbar from '../../Components/Navbar'
import './Home.css'
function Home() {
    return (
        <>
            <div class="w-full h-full">
                <div class="grid grid-cols-2 divide-x shadow-2xl">
                    <div className="left">
                        <Navbar />

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

                        <div className="translate-x-6">
                            <img src={require('./Img/Person.png')}/>
                        </div>

                        <h1 className="Sevillana">Muktarul Hoque</h1>
                    </div>
                    <div className="right flex items-center justify-center">
                        <img src={require("./Img/Person.png")} className='h-auto rounded-full border-4 border-rose-500' alt="person" />


                    </div>

                </div>
            </div>
        </>
    )
}

export default Home
