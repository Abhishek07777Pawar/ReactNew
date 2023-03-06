import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './log.css';
import { createRoot } from 'react-dom/client';
import App1 from '../App1';

//import Registration from './Registration';
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginId: "",                
      password: "",
      inputerror:{
        loginId: "",
        password: "",
        message: "",
      }
    }
  }
  changeState(event) {
    let name = event.target.name;
    let value = event.target.value;

    // this.setState({form:{[name]:value}});
    this.setState({ [name]: value });
  }
  login() {
    console.log("kesa ho")
    let url = "http://api.sunilos.com:9080/ORSP10/Auth/login";
    //let url="http://api.sunilos.com:9080/ORSP10/User/search";
    axios.post(url, this.state).then(
      res => {
        console.log(res)
        if (res.data.success) {
          localStorage.setItem("Name", res.data.result.data.name)
         
          const root = createRoot(document.getElementById('root'))
          root.render(<App1/>        
          );
        } else {

          this.setState({ inputerror: res.data.result.inputerror })

        }
      }
    ).catch(
      err => {
        console.log("this is error handling..")
        console.log(err)
        console.log("server down hai..")

      }
    )
  }
  // create() {
  //   const root = createRoot(document.getElementById('root'));
  //   root.render(
  //     <React.StrictMode>
  //       <Registration />
  //     </React.StrictMode>,

  //   );

 // }
  //  login(){
  //  console.log(this.state.loginId);
  //  console.log(this.state.password)
  //          if(this.state.loginId==="admin"&&this.state.password==="admin"){
  //            console.log("login succcessfull...")
  //       // this.state.message="login successfull"
  //         // this.setState({message:"Login successfull"})
  //             const root = createRoot(document.getElementById('root'));
  //                   root.render( 
  //                          <React.StrictMode>
  //                       <Registration/>
  //                         </React.StrictMode>,

  //                 );  

  //                   }
  //     if(this.state.loginId==="" && this.state.password==="admin"){
  //       this.setState({form:{message1:"invalid userid"}})
  //       console.log("case1")
  //     }

  //   if(this.state.loginId=="admin" && this.state.password==""){
  //     console.log("case2")
  //       this.setState({form:{ message2:"invalid  password"}})
  //      }

  //            else{
  //             console.log("erro aata hai..")
  //         //       // this.state.message="invalid userid and password"
  //         this.setState({form:{message1:"invalid userid",message2:"invald password"}})
  //               // this.setState({ message2:"invalid  password"})
  //            }

  //    }

    //}
  reset() {
    this.setState({
      loginId: "",
      password: "",
      message1: "",
      message2: "",
      inputerror: {
      
      }
    })
  }
  render() {
    return (
     
      <div className="row">
  <div className='offset-lg-3 col-lg-6'>
    <div className='card'>
      <div className='card-header'>
        <h2>user login</h2>
      </div>
      <div className='card-body'>
        {/* <div className='form-group'> */}
        <label>LoginId<span></span></label>
        <input className='form-control' type="Text" name='loginId' placeholder='LoginId'value={this.state.loginId}onChange={(event) => this.changeState(event)}></input>
        <h6 style={{color:"red"}}> {this.state.inputerror.loginId}</h6>
        {/* </div> */}
        <br></br>
        {/* <div className='form-group'> */}
        <label>Password</label>
        <input className='form-control' type="Text" name="password" placeholder=' password' value={this.state.password} onChange={(event) => this.changeState(event)}></input> 
        <h6 style={{color:"red"}}> {this.state.inputerror.password}</h6> <br></br>
        {/* </div> */}
      </div>
      <div className='card-footer'>
      <button className='btn btn-primary' onClick={() => this.login()}>login</button>
      {/* &nbsp;&nbsp;&nbsp; */}
      <button id='f5'  className='btn btn-info' onClick={() => this.reset()}>RESET</button>
      <Link id='f6'className='btn btn-success'to="/Registration"><h6>New User</h6></Link>
      </div>
    </div>
  </div>
</div>
    )
  }
}
 // <>
      //   <div className='lsd' >
      //     <center>

      //       <br></br>
      //       <h1>LOGIN FORM</h1>
      //       <br></br>
      //       <input id='f9' type="Text" name='loginId' placeholder='LoginId'value={this.state.loginId}onChange={(event) => this.changeState(event)}></input><br></br>
      //       {/* <h6>{this.state.form.message1}</h6>  */}
      //       {/* <h1>{this.state.form.loginId}</h1>  */}
      //       <h6 style={{color:"red"}}> {this.state.inputerror.loginId}</h6>
      //       <br></br>
      //       <br></br>
      //       <input type="Text" name="password" placeholder=' password' value={this.state.password} onChange={(event) => this.changeState(event)}></input> <br></br>
      //       {/* <h6> {this.state.form.message2} </h6>  */}
      //       <h6 style={{color:"red"}}> {this.state.inputerror.password}</h6> 
      //       <br></br>
      //       <button style={{ background: "skyblue" }} onClick={() => this.login()}>login</button>
      //       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      //       <button onClick={() => this.reset()}>RESET</button>
      //       {/* <Link className="nav-link active " onClick={() => this.create()}><h6><u>create new account</u></h6></Link>
      //       <br></br> */}
      //     <Link to="/Registration"><h6>create new account</h6></Link>
      //     </center>
      //   </div>
      // </>

















