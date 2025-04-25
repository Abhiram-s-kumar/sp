import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'

import Contact from './pages/Contact'

import Course from './pages/Course'
import About from './pages/About'
import Landing from './pages/Landing'


function App() {
  

  return (
    <>
     <Routes>
      <Route path= '/home' element={<Home/>}/>
      <Route path= '/about' element={<About/>}/>
      <Route path= '/course' element={<Course/>}/>
      <Route path= '/' element={<Landing/>}/>
      <Route path= '/contact' element={<Contact/>} />
      
     </Routes>
  
     
    </>
  )
}

export default App
