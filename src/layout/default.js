import React from 'react'
// import './default.css'
import Navbar from '../Components/Navbar'
import Routes from '../Routers/Routes'
function layout() {
    return (
        <>
            {/* <div class="w-screen h-screen"> */}
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:lg-cols-2">
                <div className="left h-screen relative">
                    <Navbar />
                    <div className="h-full flex justify-center items-center sm:overflow-y-scroll md:overflow-y-scroll">
                        <div>
                            <img src={require("../assets/Img/Mani.jpg")} className='h-40 rounded-full  border-4 border-rose-500 block lg:hidden xl:hidden 2xl:hidden m-auto mt-10 mb-5' alt="person" />
                            <Routes />
                        
                        </div>
                    </div>



                </div>
                
                <div className="right flex h-screen justify-center items-center bg-blue-300 hidden lg:block xl:block 2xl:block">
                
                <div className="flex absolute mt-5 gap-3">
               <a href ="https://github.com/dox404" target="_blank"><img src={require("../assets/Social/githubb.png")} className='h-10 w-10' alt="github" /></a> 
               <a href='https://www.linkedin.com/in/muktarul-hoque-45b04b208/' target="_blank"> <img src={require("../assets/Social/linkedinnn.png")} className='h-10 w-10' alt="linkedin" /></a>
                </div>
                    <div className='flex h-screen justify-center items-center h-97 w-92'>
                        <img src={require("../assets/Img/Mani.jpg")} className='rounded-full border-4 border-rose-500 m-auto h-64  animate-pulse hover:animate-bounce' alt="person" />
                    </div>
                </div>

            </div>
            {/* </div> */}
        </>
    )
}

export default layout
