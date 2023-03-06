import axios from 'axios'
import React, { Component } from 'react'

export default class Student extends Component {
  constructor(){
    super()
    this.state ={
      firstName:"",
      lastName:"",
      collegeId:"",
      mobileNo:"",
      email:"",
      inputerror:{
      firstName:"",
      lastName:"",
      collegeId:"",
      mobileNo:"",
      email:""
  }
  
 
  
  }
  }

changeState(event){
  let name=event.target.name;
  let value=event.target.value;
  this.setState({[name]:value})

}
  save(){
    let url="http://api.sunilos.com:9080/ORSP10/Student/save"
    axios.post(url,this.state).then((res) => 
    {
      if(res.data.success){
        console.log("bn gaya expert")
      }
      else
        this.setState({ inputerror: res.data.result.inputerror })
        
      }
    ).catch(
      err => {
        console.log(err.name)
        console.log("This is Axios Error")
      }
    )
    }

  render() {
    return (
      <div className='offset-lg-4 col-lg-4'style={{marginTop:80}} >
  <div className='card'>
    <div className='card-header'>
      <h2>Student Form</h2>
    </div>
    <div className='card-body'>

      {/* <div className='form-group'> */}
     <label> FirstName:</label><span style={{color:"red"}}>{this.state.inputerror.firstName}</span>
      <input className='form-control' type="text"name='firstName'value={this.state.firstName}placeholder='First Name'onChange={(event)=>this.changeState(event)}/>
      {/* </div> */}
      <label>LastName:</label><span style={{color:"red"}}>{this.state.inputerror.lastName}</span>
      <input className='form-control' type="text"name='lastName'placeholder='Last Name'onChange={(event)=>this.changeState(event)}value={this.state.lastName}/>
      <label>CollegeId:</label><span style={{color:"red"}}>{this.state.inputerror.collegeId}</span>
      <input className='form-control'type="Number"name='collegeId'placeholder='College Id'onChange={(event)=>this.changeState(event)}value={this.state.collegeId}/>
      <label>MobileNo:</label><span style={{color:"red"}}>{this.state.inputerror.mobileNo}</span>
      <input className='form-control' type="Number"name='mobileNo'
      placeholder='Mobile Number'onChange={(event)=>this.changeState(event)}value={this.state.mobileNo}/>
      <label> Email:</label><span style={{color:"red"}}>{this.state.inputerror.email}</span>
       <input className='form-control' type="email"name='email'placeholder='Email'onChange={(event)=>this.changeState(event)}value={this.state.email}/>
      <br></br>
      </div>
    <div className='card-footer'>
    <button className='btn btn-info'  onClick={() => this.save()}>submit</button>
    </div>
  </div>
</div>
    )
  }
}
