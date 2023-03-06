import React, { Component } from 'react'
// import { createRoot } from 'react-dom/client';

import Dashboard from './component/Dashboard'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './component/Home'
import Registration from './component/Registration'
import Login from './component/Login'
import "./App.css";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      progress : 0
    }
  
  }
  // componentDidMount(){
  //   if(localStorage.getItem("Name")){
  //     const root = createRoot(document.getElementById('root'))
  //     root.render(<Dashboard2 />)     
  //   }
  // }

   setProgress = (pro) => {
    this.setState({progress : pro})
  }

  render() {
   
    return (
      <div>
        <BrowserRouter>
        <Dashboard/>
        <LoadingBar
        color='black'
        progress= {this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />        
    
        <Routes>
         <Route path='/' element={<Home/>}/>
          <Route path='/registration' element={<Registration setProgress={this.setProgress} />}/>
          <Route path='/login' element={<Login/>}/>

          
        </Routes>

        </BrowserRouter>
     
      
        <br></br>
      
      </div>
    )
  }
}
