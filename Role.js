import React, { Component } from 'react'
import axios from 'axios'
export default class Role extends Component {
  constructor(){
    super()
    this.state={
      name:"",
      discription:"",
      inputerror:{
        discription:"",
        name:""
      }

    }
  }
  changeState(event){
    let name=event.target.name
    let value=event.target.value
    this.setState({[name]:value})
  }
  save(){
    let url='http://api.sunilos.com:9080/ORSP10/Role/save'
    axios.post(url,this.state).then((res)=>{
      if(res.data.success){
        console.log("working")
      }
      else
      this.setState({inputerror:res.data.result.inputerror})
    }).catch(
      err => {
        console.log("this is error handling..")
        console.log(err)
      }
    )
  }

  render() {
    return (
      <div className='offset-lg-4 col-lg-4'style={{marginTop:80}} >
<div className='card'>
        <div className='card-header'>
          <h1>Add Role</h1>
        </div>
          <label>Name:</label> <p style={{color:"red"}}>{this.state.inputerror.name}</p>
        <input className='form-control' type='text'name='name'placeholder='Name'onChange={(event)=>this.changeState(event)}></input>
       <label>Discription:</label><span style={{color:"red"}}>{this.state.inputerror.discription}</span>
        <input className='form-control' type='text'name='discription'placeholder='write discription'onChange={(event)=>this.changeState(event)}></input>
        
        <div className='card-footer'>
        <input className='btn btn-info' type='button'value="submit"onClick={()=>this.save()}></input>
        </div>
      </div>
      </div>
      
    )
  }
}
