import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from './Blog'
import Content1 from '../Details/Content1'
import Content2 from '../Details/Content2'

function Routing() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='/content1' element={<Content1/>}/>
        <Route path='/content2' element={<Content2/>}/>
      </Routes>
    </>
  )
}

export default Routing
