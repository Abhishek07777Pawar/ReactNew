import axios from 'axios'
import React, { Component } from 'react'

export default class Marksheet extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            rollNo:"",
            physics:"",
            chemistry:"",
            maths:"",
            message:"",
            message1:"",
            inputerror:{
                name:"",
                rollNo:"",
                physics:"",
                chemistry:"",
                maths:""
            }

        }
    }
    changeState(event){
        let name=event.target.name
        let value=event.target.value
        this.setState({[name]:value})
    }
    save(){
        // if(this.state.name===""){
        //     this.setState({message1:"must not be empty"})
        // }else{
        //     console.log("ok")
        // }
        let url='http://api.sunilos.com:9080/ORSP10/Marksheet/save'
        axios.post(url,this.state).then((res)=>{
            if(res.data.success){
                alert("Ho gaya save")
            }
            else
            this.setState({inputerror:res.data.result.inputerror})
        }
        ).catch(
            err=>{
            this.setState({ message:err.name})
            }
        )
    }

  render() {
    return (
      <div className="row">
               <div className='offset-lg-4 col-lg-4' style={{ marginTop: -22 }}>
                <div className='card'>
        <div className='card-header'>
            <h3>Marksheet</h3>
            {this.state.message}
            </div>
            <div className='card-body'>
        <label>Name:</label><span style={{ color: "red" }}>{this.state.message1}</span>
        <input className='form-control' type='text'name='name'onChange={(event)=>this.changeState(event)}></input>
        <label>Roll No:</label><span style={{ color: "red" }}>{this.state.inputerror.rollNo}</span>
        <input className='form-control' type='number'name='rollNo 'onChange={(event)=>this.changeState(event)}></input>
        <label>Physics:</label><span style={{ color: "red" }}>{this.state.inputerror.physics}</span>
        <input  className='form-control'type='number'name=' physics'onChange={(event)=>this.changeState(event)}></input>
        <label>Chemistry:</label><span style={{ color: "red" }}>{this.state.inputerror.chemistry}</span>
        <input className='form-control' type='number'name='chemistry'onChange={(event)=>this.changeState(event)}></input>
        <label>Maths:</label><span style={{ color: "red" }}>{this.state.inputerror.maths}</span>
        <input className='form-control' type='number'name=' maths'onChange={(event)=>this.changeState(event)}></input>
        </div>
        {/* <button onClick={()=>}></button> */}
        <div className='card-footer'>
        <input className='btn btn-info ' type="button" value="Submit" onClick={(event)=>this.save(event)}/>
        </div>
        </div>
        </div>
        </div>
    )
  }
}
