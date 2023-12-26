import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from '../Pages/Home/Home'
import Skills from '../Pages/Skills/Skills'
import Projects from '../Pages/Projects/Projects'
import Contact from '../Pages/Contact/Contact'
function Pages() {
    return (
        <>
            <Routes>

                {/* <Route path='/' element={<Home />}></Route> */}
                <Route path='/skills' element={<Skills />}></Route>
                <Route path='/projects' element={<Projects />}></Route>
                <Route path='/contact' element={<Contact />}></Route>



            </Routes>
        </>
    )
}

export default Pages
