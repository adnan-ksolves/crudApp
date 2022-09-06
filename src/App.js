import React from 'react'
import {BrowserRouter as Router ,Routes , Route } from 'react-router-dom'
import Nav from "./Components/Nav"
import Students from './Components/Students'
import Teachers from "./Components/Teachers"
import StudentsAdd from './Components/StudentsAdd'
import TeachersAdd from './Components/TeachersAdd'
import TeachersUpdate from './Components/TeachersUpdate'
import StudentsUpdate from './Components/StudentsUpdate'

const App = () => {
  return (
    <div>
     

        <Router>
         <Nav/>
         <Routes>
          <Route path="/" element={<Students/>}></Route>
          <Route path="/add" element={<StudentsAdd/>}></Route>
          <Route path="/update" element={<StudentsUpdate/>}></Route>
          <Route path="/teachers" element={<Teachers/>}></Route>
          <Route path="/teachers/add" element={<TeachersAdd/>}></Route>  
          <Route path="/teachers/update" element={<TeachersUpdate/>}></Route>     
         </Routes>
        </Router>

      
    </div>
  )
}

export default App
