import React, { Component } from 'react'
//import './style.css'
export class DealerUpdate extends Component {

    submit = (e) => 

    {
    e.preventDefault();
   // const { history } = this.props
   /* let login = {pancardNumber: this.state.pancardNumber,password: this.state.password};
    console.log('login => ' + JSON.stringify(login));
    DealerService.login(login)
    .then((response)=>{this.setState({answer:response.data})});
    console.log('login => ' + JSON.stringify(login));
    if(this.state.answer === "Login Successfull"){
        alert("LOGIN SUCCESSFUL :)")
       // this.props.history.push('/viewConnections');
       e.href='/viewConnections';
    }*/
    }

    render() {
        return (
            <center>
            <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-6 mx-auto">
                <div class="card card0 border-0">
                    <div >

                        <div class="col-lg-7">
                            <div class="card2 card border-0 px-4 py-5">
                                <label><h3> UPDATE PROFILE </h3></label>
                                <div class="row px-9 mb-9">
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Pancard Number</h6></label>
                                    <input className="row px-3" placeholder="Enter PAN No. " />
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> First Name </h6></label>
                                    <input className="row px-3" placeholder="Enter Firstname " />
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Last Name </h6></label>
                                    <input className="row px-3" placeholder="Enter Lastname " />
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Email Id: </h6></label>
                                    <input className="row px-3" placeholder="Email Address" />
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Contact No. </h6></label>
                                    <input className="row px-3" placeholder="Enter Contact Number" />
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Password </h6></label>
                                    <input type="password" className="row px-3" placeholder="Enter Password" />
                                </div>
                                <div className="row px-3">
                                    <label class="mb-1"><h6 class="mb-0 text-sm"> Confirm Password </h6></label>
                                    <input type="password" className="row px-3" placeholder="Enter city" />
                                </div>
                               
                                <button  onClick={this.update} class="btn btn-blue text-center"> Register </button>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-blue py-1">
            <div class="row px-8"> <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2021. All rights reserved.</small>
            </div>
            </div>
        </div>
        </center>
        )
    }
}
export default DealerUpdate;