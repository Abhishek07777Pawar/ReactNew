import axios from 'axios'
import React, { Component } from 'react'
import Table from 'react-bootstrap/esm/Table'

export default class StudentList extends Component {
    constructor (){
        super()
        this.state={
        list:[],
        }
        this.search()
    }
    search(){
        let url='http://api.sunilos.com:9080/ORSP10/Student/search'
        axios.post(url,this.state).then((res)=>{
            this.setState({list:res.data.result.data})
        }
        )
    }
    delete(id){
        let url='http://api.sunilos.com:9080/ORSP10/Student/delete/'+id
        axios.get(url).then(()=>{
            this.search()
            alert("Data deleted")
        })
    }
  render() {
    return (
      <div>
        <Table striped bordered hover style={{marginTop:100}} >
            <thead>
            <tr>
                <th>index</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>College Id</th>
                <th>Mobile No.</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
                {
                    this.state.list.map((ele,index)=>(
                        <tr>
                            <td>{index+1}</td>
                            <td>{ele.firstName}</td>
                            <td>{ele.lastName}</td>
                            <td>{ele.collegeId}</td>
                            <td>{ele.mobileNo}</td>
                            <td>{ele.email}</td>
                            <button className='btn btn-success'onClick={()=>this.delete(ele.id)}>Delete</button>
                        </tr>
                    )
                        
                    )
                }
            </tbody>
        </Table>
      </div>
    )
  }
}
