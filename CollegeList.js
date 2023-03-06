import React, { Component } from 'react'
import axios from 'axios';
 import Table from 'react-bootstrap/Table';

export default class CollegeList extends Component {
    constructor(){
        super()
        this.state={
            list:[],
            message:""

        }
    this.get()
    }
    get(){
        let url="http://api.sunilos.com:9080/ORSP10/College/search";
        axios.post(url,this.state).then(res =>{
        if(res.data.success){
        this.setState({list:res.data.result.data})
        console.log(this.state.list)
        }
        });
    }
    delete(id){
        let url='http://api.sunilos.com:9080/ORSP10/College/delete/'+id
        axios.get(url).then(()=>{
          // this.setstate({message:"Data Deleted"})
           this.get()
           alert("Data deleted ")
        }
        )
    }
  render() {
    return (
        <div>
    <Table stripbged bordered hover style={{marginTop:100}}>
        <thead>
        <tr>
        <th>index</th>
        <th>Name</th>
        <th>Id</th>
        <th>Address</th>
        <th>City</th>
        <th>state</th>
        <th>PhoneNo</th>
        </tr>
        </thead>
        <tbody>

        {
            this.state.list.map((ele,index)=>(
                <tr>
                    <td>{index+1}</td>
                    <td>{ele.name}</td>
                    <td>{ele.id}</td>
                    <td>{ele.address}</td>
                    <td>{ele.city}</td>
                    <td>{ele.state}</td>
                    <td>{ele.phoneNo}</td>
                    <button className='btn btn-success' onClick={()=>this.delete(ele.id)}>Delete</button>
                </tr>
                ))
        }



</tbody>
    </Table>
        </div>
    )
  }
}
