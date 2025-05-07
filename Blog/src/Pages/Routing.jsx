import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from './Blog'
import Content1 from '../Details/Content1'
import Content2 from '../Details/Content2'
import Content3 from '../Details/Content3'
import Content4 from '../Details/Content4'
import Content5 from '../Details/Content5'
import Content6 from '../Details/Content6'
import Content7 from '../Details/Content7'
import Content8 from '../Details/Content8'
import Content9 from '../Details/Content9'
import Content10 from '../Details/Content10'
import Content11 from '../Details/Content11'
import Content12 from '../Details/Content12'
import Content13 from '../Details/Content13'
import Content14 from '../Details/Content14'
import Content15 from '../Details/Content15'

function Routing() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='/blog/1' element={<Content1/>}/>
        <Route path='/blog/2' element={<Content2/>}/>
        <Route path='/blog/3' element={<Content3/>}/>
        <Route path='/blog/4' element={<Content4/>}/>
        <Route path='/blog/5' element={<Content5/>}/>
        <Route path='/blog/6' element={<Content6/>}/>
        <Route path='/blog/7' element={<Content7/>}/>
        <Route path='/blog/8' element={<Content8/>}/>
        <Route path='/blog/9' element={<Content9/>}/>
        <Route path='/blog/10' element={<Content10/>}/>
        <Route path='/blog/11' element={<Content11/>}/>
        <Route path='/blog/12' element={<Content12/>}/>
        <Route path='/blog/13' element={<Content13/>}/>
        <Route path='/blog/14' element={<Content14/>}/>
        <Route path='/blog/15' element={<Content15/>}/>
      </Routes>
    </>
  )
}

export default Routing
