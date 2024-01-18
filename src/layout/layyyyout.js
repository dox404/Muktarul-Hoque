import React from 'react'
import Navbar from '../Components/Navbar'
import Routes from '../Routers/Routes'
function layout() {
    return (
        <>
            {/* <div className="main grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
                <div classname="left h-screen">

                    <div className="h-screen bg-white-300 overflow-auto lg:overflow-hidden xl:overflow-hidden 2xl:overflow-hidden">
                        <Navbar />

                        <div className='flex h-screen justify-center items-center grid grid-cols-1 gap-0'>
                            <img src={require("../assets/Img/Mani.jpg")} className='h-40 rounded-full  border-4 border-rose-500 block lg:hidden xl:hidden 2xl:hidden m-auto' alt="person" />
                            <div className="pb-10">
                                <Routes />
                            </div>
                        </div>

                    </div>
                </div>
                <div classname="right h-screen w-50">
                    <div className="h-screen bg-red-300 hidden lg:block xl:block 2xl:block">
                        <div className='flex h-screen justify-center items-center h-99 w-99'>
                            <img src={require("../assets/Img/Mani.jpg")} className='rounded-full border-4 border-rose-500 m-auto h-64' alt="person" />
                        </div>
                    </div>
                </div>
            
            </div> */}
            <div className="grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 ">
                <div className="bg-blue-100 col-span-8">
                    <div className="h-screen bg-white-300 overflow-auto lg:overflow-hidden xl:overflow-hidden 2xl:overflow-hidden">
                        <Navbar />

                        <div className='flex h-screen justify-center items-center grid grid-cols-1 gap-0'>
                            <img src={require("../assets/Img/Mani.jpg")} className='h-40 rounded-full  border-4 border-rose-500 block lg:hidden xl:hidden 2xl:hidden m-auto' alt="person" />
                            <div className="pb-10">
                                <Routes />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg-red-100 col-span-4 hidden lg:block xl:block 2xl:block">

                    <div classname="right h-screen w-50 ">
                        <div className="h-screen bg-red-300 ">
                            <div className='flex h-screen justify-center items-center h-99 w-99'>
                                <img src={require("../assets/Img/Mani.jpg")} className='rounded-full border-4 border-rose-500 -mr-50 h-64' alt="person" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default layout
