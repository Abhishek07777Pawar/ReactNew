import React, { Component } from 'react'
import './reg.css'
import axios from 'axios';
//import { createRoot } from 'react-dom/client';
//import Login from './Login';
import { ReactDOM } from 'react';
import Login from './Login';
import { Link, Route, Routes } from 'react-router-dom';
export default class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginId: "",
      password: "",
      roleId: "",
      firstName: "",
      lastName: "",
      // form: {
      //   loginId: "",
      //   password: "",
      //   roleId: "",
      //   firstName: "",
      //   lastName: "",

      // },
      inputerror: {
        firstName: "",
        lastName: "",
        loginId: "",
        roleId: "",
        password: "",

      },
      roleids: [],

    }
  }
  componentDidMount() {
    this.roleId();
  }



  roleId() {
    this.props.setProgress(40)
    let url = "http://api.sunilos.com:9080/ORSP10/Role/search";
    this.props.setProgress(60)

    axios.post(url, {}).then(role => {
      // console.log(role)
      

      if (role.data.success) {
        this.setState({ roleids: role.data.result.data })
        // console.log(this.state.roleids)
      }
    }
    )
    this.props.setProgress(100)  

  }

  changeId = (event) => {

    this.setState({ roleId: event.target.value })

    // this.state.form.roleId=event.target.value

  }
  save() {
    this.props.setProgress(20)
    this.setState({ inputerror: "" })
    if (this.state.password === "") {
      this.setState({ message: "must not be empty" })
    }
    this.props.setProgress(40)
    let url = "http://api.sunilos.com:9080/ORSP10/User/save"
    this.props.setProgress(60)
    axios.post(url, this.state).then(ele => {
      this.props.setProgress(80)
        if (ele.data.success) {
          // console.log("hello brothre inside")
          // window.location.href = "/login"
          // const root = ReactDOM.createRoot(document.getElementById('root'))
          // root.render(<React.StrictMode>
          //   <Login/>
          // </React.StrictMode>
        //  <div> 
        //   <Link className="nav-link active" to="userlist/">User List</Link>
        //   <Routes>
        //     <Route path='/login'> </Route>
        //   </Routes>
        //   </div>          
          // );
          return (
            // 'login'
              <Login/>

          );

          console.log("hello brothre outside")
        }else{
          this.setState({ inputerror: ele.data.result.inputerror })
      }
      this.props.setProgress(100)
    }).catch(
      err => {
        console.log(err.name)
        console.log("This is Axios Error")
      }
    )
  }


  render() {
    return (
      <div className="row">
        <div className='offset-lg-3 col-lg-6'>
          <div className='card'>
            <div className='card-header'>
              <h2>User Registration</h2>
            </div>
            <div className='card-body'><center>
              <div className='form-group'>
                <label>FirstName</label>
                <input type="text" name='firstName' value={this.state.firstName} placeholder='FirstName' onChange={(e) => this.setState({ firstName: e.target.value })} />
                {this.state.inputerror.firstName}
              </div><br></br>
              <div className='form-group'>
                <label>LastName</label>
                <input type="text" name='lastName' placeholder='Last Name*'
                  value={this.state.lastName}
                  onChange={(e) => this.setState({ lastName: e.target.value })} />
                {this.state.inputerror.lastName}
              </div><br></br>
              <div className='form-group'>
                <label>loginId :</label>
                &nbsp;&nbsp;
                <input type="loginId" name='loginId' placeholder='Login Id *'
                  onChange={(e) => this.setState({ loginId: e.target.value })}
                  value={this.state.loginId} />
                {this.state.inputerror.loginId}
              </div><br></br>
              <div className='form-group'>
                <label>Password</label>
                <input type="text" name='password' placeholder='Password*'
                  onChange={(e) => this.setState({ password: e.target.value })}
                  value={this.state.password} />
                {this.state.message}
              </div><br></br>
              <div className='form-group'>
                <label >Role :</label>&nbsp;&nbsp;&nbsp;&nbsp;<select onClick={this.changeId}>

                  <option>Name</option>
                  {
                    this.state.roleids.map((item) => {
                      return (
                        <option name="roleId" value={item.id}>
                          {item.id}

                        </option>)
                    })
                  }
                </select>
                {this.state.inputerror.roleId}
              </div></center>
            </div>
            <div className='card-footer'>
              <button className='btn btn-primary' onClick={() => this.save()}>submit</button>

            </div>
          </div>
        </div>
      </div>
      // <center>
      //   <div className='reg'>
      //     <br></br>
      //     {/* <h1>HI.....{localStorage.getItem("User")}</h1> */}
      //     <h1>REGISTER HERE</h1>

      //     <br></br>
      //     <br></br>

      //     <label>FirstName :</label>
      //     &nbsp;
      //     <input type="text" name='firstName' value={this.state.firstName} placeholder='FirstName'onChange={(e) => this.setState({ firstName: e.target.value })}/>
      //     {this.state.inputerror.firstName}
      //     {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
      //     <br></br>
      //     <br></br>
      //     <label>LastName :</label>
      //     <input type="text" name='lastName'placeholder='Last Name*'
      //       value={this.state.lastName}
      //       onChange={(e) => this.setState({ lastName:e.target.value })} />
      //     {this.state.inputerror.lastName}
      //     <br></br>
      //     <br></br>
      //     <label>login Id :</label>
      //     &nbsp;&nbsp;
      //     <input id='f8' type="loginId" name='loginId'placeholder='Login Id *'
      //       onChange={(e) => this.setState({ loginId:e.target.value })}
      //       value={this.state.loginId} />
      //     {this.state.inputerror.loginId}
      //     <br></br>
      //     <br></br>
      //     Password :&nbsp;&nbsp;
      //     <input id='f8' type="text" name='password'placeholder='Password*'
      //       onChange={(e) => this.setState({ password: e.target.value })}
      //       value={this.state.password} />
      //     {this.state.message}
      //     <br></br>
      //     <br></br>
      //    <label id='f1'>Role :</label>&nbsp;&nbsp;&nbsp;&nbsp;<select id="f2" onClick={this.changeId}>
      //       <option>Name</option>
      //       {
      //         this.state.roleids.map((item) => {
      //           return (
      //             <option name="roleId" value={item.id}>
      //               {item.id}

      //             </option>)
      //         })
      //       }
      //     </select>
      //     {this.state.inputerror.roleId}
      //     <br></br>
      //     <br></br>
      //     <button onClick={() => this.save()}>submit</button>
      //   </div>
      // </center>
    )
  }
}

