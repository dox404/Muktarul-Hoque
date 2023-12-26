import React from 'react'

import Navbar from '../../Components/Navbar'
import './maincontainer.css'
import Routes from '../../Routers/Routes'
function Container() {
    return (
        <>
            <div class="w-screen h-full">
                <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:lg-cols-2 ">
                    <div className="left h-screen"> 
                        <Navbar />
                        <Routes/>
                    </div>
                    <div className="right grid items-center justify-center h-screen bg-blue-300">
                        <img src={require("./Img/Person.png")} className='h-auto rounded-full border-4 border-rose-500' alt="person" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Container
