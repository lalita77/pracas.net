import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from './Blog'
import Content1 from '../Details/Content1'

function Routing() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='/content1' element={<Content1/>}/>
      </Routes>
    </>
  )
}

export default Routing
