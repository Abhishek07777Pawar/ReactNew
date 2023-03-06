import React, { Component } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Student from './component/Student'
import College from './component/College'
import Role from './component/Role'
import User from './component/User'
import Marksheet from './component/Marksheet'
import Dashboard2 from './component/Dashboard2'
import CollegeList from './CollegeList'
import StudentList from './StudentList'
import MarkList from './component/MarkList'
import RoleList from './component/RoleList'
import UserList from './component/UserList'

export default class App1 extends Component {
    
  render() {
    return (
      <>
      <div>
        <BrowserRouter>
        <Dashboard2/>
        <Routes>
        <Route exact path='/student' element={<Student/>}/>
          <Route exact path='/college' element={<College/>}/>
          <Route exact path='/marksheet' element={<Marksheet/>}/>
          <Route exact path='/role' element={<Role/>}/>
          <Route exact path='/user' element={<User/>}/>
          <Route exact path='/collegelist' element={<CollegeList/>}/>
          <Route exact path='/studentlist' element={<StudentList/>}/>
          <Route exact path='/marklist' element={<MarkList/>}/>
          <Route exact path='/rolelist' element={<RoleList/>}/>
          <Route exact path='/userlist' element={<UserList/>}/>
        
        </Routes>
       
        </BrowserRouter>
       
        
      </div>
      
       
       </>
    
    )
  }
}
