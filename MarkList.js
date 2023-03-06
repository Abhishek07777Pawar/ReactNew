import axios from 'axios'
import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';

export default class MarkList extends Component {
  constructor(){
    super()
    this.state={
 list:[],
    }
    this.search()
  }
  search(){
    let url="http://api.sunilos.com:9080/ORSP10/Marksheet/search"
    axios.post(url,this.state).then((res)=>{
      if(res.data.success){
        this.setState({list:res.data.result.data})
      }
    })
  }
  delete(id){
    let url='http://api.sunilos.com:9080/ORSP10/Marksheet/delete/'+id
    axios.get(url).then(()=>{
      this.search()
      alert("data deleted")
    })
  }
  render() {
    return (
      <div>
        <Table striped bordered hover style={{marginTop:100}}>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Roll NO</th>
            <th>Physics</th>
            <th>Chemistry</th>
            <th>Maths</th>
          </tr>
          <tbody>
          {
            this.state.list.map((ele,index)=>(
              <tr>
                <td>{index+1}</td>
                <td>{ele.name}</td>
                <td>{ele.rollNo}</td>
                <td>{ele.physics}</td>
                <td>{ele.chemistry}</td>
                <td>{ele.maths}</td>
                <button className='btn btn-success'onClick={()=>this.delete(ele.id)}>Delete</button>
              </tr>
            ))
          }
       </tbody>
        </Table>
      </div>
    )
  }
}
