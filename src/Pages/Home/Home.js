import React from 'react'

import Navbar from '../../Components/Navbar'
import './Home.css'
function Home() {
    return (
        <>
            <div class="w-full h-full">
                <div class="grid grid-cols-2 divide-x shadow-2xl">
                    <div className="left">
                        <Navbar />
                        <div className="flex items-center justify-center">

                            <div>
                                <h1 className="font-semibold text-4xl">MUKTARUL HOQUE</h1>
                                <p>Lorem Ipsum is simply d</p>
                                <div class="flex w-100">
                                    <button className="btn btn-primary  flex-auto w-45">Download Resume</button>
                                    <button className="btn btn-outline flex-auto w-45">Hire Me</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="right h-full h-screen flex items-center justify-center">a
                        <img src={require("./Img/Person.png")} />


                    </div>

                </div>
            </div>
        </>
    )
}

export default Home
