import axios from 'axios'
import React, { Component } from 'react'

export default class User extends Component {
  constructor(props){
    super(props)
    this.state={
      firstName:"",
      lastName:"",
      loginId:"",
      roleId:"",
      inputerror:{
        firstName:"",
        lastName:"",
        loginId:"",
        roleId:""
      }
    }
  }
  changeState(event){
    let name=event.target.name
    let value=event.target.value
    this.setState({[name]:value})

  }
  save(){
    let url='http://api.sunilos.com:9080/ORSP10/User/save'
    axios.post(url,this.state).then((res)=>{
      if(res.data.success){
        console.log("working")
      }
      else
      this.setState({inputerror:res.data.result.inputerror})
    }).catch(
    err=>{
      console.log(err.name)
    }
    )
  }
  render() {
    return (
      <div style={{marginTop:100}}>
       
        <center>
        <h1>User</h1>
        <label>First Name:</label>
  <input type='text'name='firstName'onChange={(event)=>this.changeState(event)}></input>{this.state.inputerror.firstName}
  <br></br>
  <label>last Name:</label>
  <input type='text'name='lastName'onChange={(event)=>this.changeState(event)}></input>{this.state.inputerror.lastName}
  <br></br>
  <label>Login Id</label>
  <input type='text'name='loginId'onChange={(event)=>this.changeState(event)}></input>{this.state.inputerror.loginId}
  <br></br>
  <label>Role Id:</label>
  <input type='text'name='roleId'onChange={(event)=>this.changeState(event)}></input>{this.state.inputerror.roleId}
  <br></br>
  <input className='btn btn-info' type='button'value='submit'onClick={()=>this.save()}></input>
  </center>
      </div>
    )
  }
}
