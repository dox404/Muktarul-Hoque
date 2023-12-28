import React from 'react'
import './default.css'
import Navbar from '../Components/Navbar'
import Routes from '../Routers/Routes'
function layout() {
    return (
        <>
            {/* <div class="w-screen h-screen"> */}
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:lg-cols-2 ">
                <div className="left h-screen relative">
                    <Navbar />
                    <div className="h-full flex justify-center items-center">
                    <div>
                        <img src={require("../assets/Img/Person.png")} className='h-40 rounded-full  border-4 border-rose-500 block lg:hidden xl:hidden 2xl:hidden m-auto' alt="person" />
                        {/* <div className="overflow-hidden"> */}
                        <Routes />
                        {/* </div> */}
                        </div>
                    </div>



                </div>
                <div className="right grid items-center justify-center h-screen bg-blue-300 hidden lg:block xl:block 2xl:block">
                    <img src={require("../assets/Img/Person.png")} className='rounded-full border-4 border-rose-500 m-auto h-auto' alt="person" />
                </div>

            </div>
            {/* </div> */}
        </>
    )
}

export default layout
