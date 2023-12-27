import React from 'react'

import Navbar from '../Components/Navbar'
import Routes from '../Routers/Routes'
// import Image from '../Components/MyImage/image'
function layout() {
    return (
        <>
            <div class="w-screen h-screen">
                <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:lg-cols-2 ">
                    <div className="left h-screen"> 
                        <Navbar />
                        
                        <div className="grid items-center justify-center">
                        <img src={require("../assets/Img/Person.png")} className='h-52 rounded-full  border-4 border-rose-500 block lg:hidden xl:hidden 2xl:hidden' alt="person" />
                        </div>
                        <Routes/>
                        
                    
                    </div>
                    <div className="right grid items-center justify-center h-screen bg-blue-300 hidden lg:block xl:block 2xl:block">
                        <img src={require("../assets/Img/Person.png")} className='h-auto rounded-full border-4 border-rose-500' alt="person" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default layout
