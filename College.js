import React, { Component } from 'react'
import axios from 'axios';
export default class College extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      phoneNo: "",
      message : "",
      inputError: {
        address: "",
        city: "",
        name: "",
        state: "",
        phoneNo: ""

      }
    }
  }
  changeState(event) {
    let name = event.target.name;
    let value = event.target.value
    this.setState({ [name]: value })
  }
  save() {
    let url = "http://api.sunilos.com:9080/ORSP10/College/save"
    axios.post(url, this.state).then((res) => {
      if (res.data.success) {
        // console.log("bn gaya expert")
      }
      else
        this.setState({ inputError: res.data.result.inputerror })

    }
    ).catch(
      err => {
        this.setState({message : err.name})
        // console.log(err.name)
        // console.log("This is Axios Error")
      }
    )
  }

  render() {
    return (

      <div className="row">
        {/* <center> */}
        <div className='offset-lg-4 col-lg-4' style={{ marginTop: -22 }}>
          <div className='card'>
            <div className='card-header'>
              <h2>College Form</h2>
              {this.state.message}
            </div>
            <div className='card-body'>

              {/* <div className='form-group'> */}
              <label>Name:</label><span style={{ color: "red" }}>{this.state.inputError.name}</span>
              <input className='form-control' type='text' name='name' placeholder='Name' onChange={(event) => this.changeState(event)} />
              {/* </div> */}
              <label>Address:</label><span style={{ color: "red" }}>{this.state.inputError.address}</span>
              <input className='form-control' type='text' name='address' placeholder='Name' onChange={(event) => this.changeState(event)} />
              <label>City:</label><span style={{ color: "red" }}>{this.state.inputError.city}</span>
              <input className='form-control' type='text' name='city' placeholder='Name' onChange={(event) => this.changeState(event)} />
              <label>state:</label><span style={{ color: "red" }}>{this.state.inputError.state}</span>
              <input className='form-control' type='text' name='state' placeholder='Name' onChange={(event) => this.changeState(event)} />
              <label>PhoneNo:</label><span style={{ color: "red" }}>{this.state.inputError.phoneNo}</span>
              <input className='form-control' type='text' name='phoneNo' placeholder='Name' onChange={(event) => this.changeState(event)} />

            </div>

            <div className='card-footer'>
              <input className='btn btn-info ' type="button" value="Submit" onClick={(event) => this.save(event)} />

            </div>
          </div>
        </div>
        {/* </center> */}
      </div>
    )
  }
}
