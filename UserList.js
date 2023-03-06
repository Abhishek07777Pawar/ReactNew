import axios from 'axios'
import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
export default class UserList extends Component {
    constructor(props){
        super(props)
        this.state={
         list:[]
        }
        this.search()
    }
    search(){
        let url='http://api.sunilos.com:9080/ORSP10/User/search'
        axios.post(url,this.state).then((res)=>{
            if(res.data.success){
                this.setState({list:res.data.result.data})
            }
            
        })
    }
    delete(id){
        let url='http://api.sunilos.com:9080/ORSP10/User/delete/'+id
        axios.get(url).then(()=>{
            this.search()
            alert("Data deleted")
        })
    }
  render() {
    return (
      <div>
<input type='text'name=' loginId'placeholder='search by LoginId'value={this.props.loginId}></input>
<Table  striped bordered hover style={{marginTop:100}}>
    <tr>
        <th>Index</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Login Id</th>
        <th>Role Id</th>
    </tr>
    <tbody>
        {
        this.state.list.map((ele,index)=>(
            <tr>
                <th>{index+1}</th>
                <th>{ele.firstName}</th>
                <th>{ele.lastName}</th>
                <th>{ele.loginId}</th>
                <th>{ele.roleId}</th>
                <button className='btn btn-info'onClick={()=>this.delete(ele.id)}>Delete</button>
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
