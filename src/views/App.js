import React from 'react';
import './App.scss';
import swal from 'sweetalert'
import axios from 'axios';
import logo from './FInalCryptologo.png'
import {Row,Col,CardText,Button} from 'reactstrap'
import {TextField} from '@material-ui/core'
import { Text } from 'react-native';
import Btc from 'cryptocurrency-icons/svg/icon/btc.svg';
import Eth from 'cryptocurrency-icons/svg/icon/eth.svg';
import Bnb from 'cryptocurrency-icons/svg/icon/bnb.svg';
import Doge from 'cryptocurrency-icons/svg/icon/doge.svg'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Load from "./load";
const all = new WebSocket("wss://stream.binance.com:9443/ws/!miniTicker@arr")
export default class Login extends React.Component{
    state = {
        login: true,
        signUpForm: {
            username: "",
            email: "",
            password: ""
        },
        signInForm: {
            email: "",
            password: ""
        },
        live_bit : 0,
        reqsigin : false,
        reqsignup : false,
        live_bnb : 0,
        live_eth : 0,
        liv_ant : 0,
        valid_e : true,
        loading : false,
        valid_p : true,
        valid_u : true,
        usernames : [],
        emails : [],
        visible : false,
        email : "",
        visible1 : false,
        visible2 : false,
        code : "",
        code1 : "",
        password : ""
    };
 getlive(){
    all.onmessage = evt => {
        const g = JSON.parse(evt.data)
        for(let i=0;i<g.length;i++){
          if(g[i]["s"] == "BTCUSDT"){
            this.setState({live_bit : parseFloat(g[i]["c"]).toFixed(2)})
            
            
          }
          if(g[i]["s"] == "BNBUSDT"){
            this.setState({live_bnb : parseFloat(g[i]["c"]).toFixed(2)})
            
            
          }
          if(g[i]["s"] == "ETHUSDT"){
            this.setState({live_eth : parseFloat(g[i]["c"]).toFixed(2)})
            
            
          }
        }
    }
}

      
componentDidMount(){
    this.setState({loading:true})

        axios({
            url : 'https://api.anteagle.tech/allusers',
            method :"get",
            headers:{
              'Accept' : "application/json",
              'Content-type': "Application/json" 
            },  
          }).then(res=>{
              //console.log(res)
              var temp1 = []
              var temp2 = []
             for(let i=0;i<res.data.data.length;i++){
               temp1.push(res.data.data[i].username)
               temp2.push(res.data.data[i].email)
             }
             this.state.usernames =  temp1
               this.state.emails = temp2
            this.setState({loading : false})
           //console.log(this.state.emails)
           //console.log(this.state.usernames)
          }
          )

     this.getlive()
 

}
    render() {
        return (
            
            <div className="login" style={{overflow:""}}>
                <Dialog open={this.state.visible}>
                <DialogContent>
           <CardText style={{color:"black"}}>
            Enter your registered Email Address
           </CardText>
                    <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            placeholder="Email"
            onChange={(e)=>{
                this.setState({email:e.target.value})
            }}
            />
            <br/>
            <Button onClick={()=>{
                this.setState({visible:false})
                this.setState({loading:true})
                axios({
                    method : "post",
                    url : `https://api.anteagle.tech/forgot?email=${this.state.email}`,
                    headers : {
                        'Accept' : "Application/Json",
                        'Content-type' :"application/json"
                    }
                }).then(res=>{
                    if(res.data.success){
                        this.setState({code:res.data.code})
                        this.setState({loading:false})
                        this.setState({visible1:true})
                    }
                    else if(res.data.error){
                        console.log(res.data.error)
                        this.setState({loading:false})
                        swal("Error","This email address has not been registered.Please enter a valid email address.","error")
                    }
                })
            }}>
                Send Verification Code
            </Button>
                </DialogContent>
                </Dialog>
                <Dialog open={this.state.visible1}>
                <DialogContent>
           <CardText style={{color:"black"}}>
            Enter Verification Code
           </CardText>
                    <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Code"
            placeholder="Code"
            onChange={(e)=>{
                this.setState({code1:e.target.value})
            }}
            />
            <br/>
            <Button onClick={()=>{
               if(this.state.code == this.state.code1){
                this.setState({visible1:false})
                this.setState({visible2:true})
            }
            else{
                swal("WRONG!","Error Invalid code","error")
            }
            }}>
               Verify
            </Button>
                </DialogContent>
                </Dialog>
                <Dialog open={this.state.visible2}>
                <DialogContent>
           <CardText style={{color:"black"}}>
            Enter New Password
           </CardText>
                    <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter New Password"
            placeholder="Password"
            onChange={(e)=>{
                this.setState({password:e.target.value})
            }}
            />
    <CardText style={{color:"black"}}>
            Confirm New Password
           </CardText>
                    <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter New Password"
            placeholder="Password"
            onChange={(e)=>{
                this.setState({password:e.target.value})
            }}
            />        
            <br/>
            <Button onClick={()=>{
                this.setState({visible2:false})
                this.setState({loading:true})
                axios({
                    method : "post",
                    url : `https://api.anteagle.tech/edit_pass?password=${this.state.password}&userid=${localStorage.getItem("userid")}`,
                    headers : {
                        "Accept" : "Application/json",
                        "Content-type" : "application/json"
                    }
                }).then(res=>{
                    if(res.data.success){
                        this.setState({loading:false})
                        swal("Success","PASSWORD chnaged successfully, Now login again");
                        
                    }
                })
            }}>
               Submit
            </Button>
                </DialogContent>
                </Dialog>
                {this.state.loading ? <Load /> :
                    <>
                <div className={`login__colored-container ${this.state.login ? 'login__colored-container--left' : 'login__colored-container--right'}`}></div>
                <div className={`login__welcome-back ${this.state.login ? 'login__welcome-back--active' : 'login__welcome-back--inactive'}`}>
                    <div className="login__welcome-back__logo-container"  style={{cursor:"pointer"}} onClick={()=>{
            localStorage.removeItem("land")
            window.location.href = "/"
          }}>
                        <img className="login__welcome-back__logo-container--image" style={{background:"white",borderRadius:"100px"}} src={logo} alt="ANTEAGLE" />
                        ANTEAGLE    
                    </div>
                    <div className="login__welcome-back__main-container">
                        <div className="login__welcome-back__main-container__text-container">
                            <span className="login__welcome-back__main-container__text-container--title">
                                Welcome Back!
                            </span>
                            <span className="login__welcome-back__main-container__text-container--secondary">
                                Earning must go on, please log in.
                            </span>
                        </div>
                        <div onClick={() => {
                            this.setState({
                                login: !this.state.login
                            });
                        }} className="login__welcome-back__main-container__button-container">
                            Sign In
                        </div>
                    </div>
                </div>
                <div className={`login__create-container ${this.state.login ? 'login__create-container--active' : 'login__create-container--inactive'}`}>
                    Create Account
                    <div className="login__create-container__social-container">
                        {/* <img className="login__create-container__social-container--facebook-icon" src={facebook} alt="" /> */}
                        {/* <img className="login__create-container__social-container--google-icon" src={google} alt="" /> */}
                        {/* <img className="login__create-container__social-container--linkedin-icon" src={linkedin} alt="" /> */}
                    </div>
                    <span className="login__create-container--info-text">Use username for your registration</span>
                    <div className="login__create-container__form-container">
                        <form className="login__create-container__form-container__form" onSubmit={(e) => {
                            e.preventDefault();
                            this.signUp();
                        }}>
                            <input
                                className="login__create-container__form-container__form--name"
                                type="text"
                                placeholder="username"
                                value={this.state.signUpForm.name}
                                onChange={(value) => this.setState({
                                    signUpForm: {
                                        username: value.target.value,
                                        email: this.state.signUpForm.email,
                                        password: this.state.signUpForm.password
                                    }
                                })}
                                required />
                            <input
                                className="login__create-container__form-container__form--email"
                                type="email"
                                placeholder="Email"
                                value={this.state.signUpForm.email}
                                onChange={(value) => this.setState({
                                    signUpForm: {
                                        email: value.target.value,
                                        username: this.state.signUpForm.username,
                                        password: this.state.signUpForm.password
                                    }
                                })}
                                required />
                            <input
                                className="login__create-container__form-container__form--password"
                                type="password"
                                placeholder="Password"
                                value={this.state.signUpForm.password}
                                onChange={(value) => this.setState({
                                    signUpForm: {
                                        password: value.target.value,
                                        username: this.state.signUpForm.username,
                                        email: this.state.signUpForm.email
                                    }
                                })}
                                required />
                            <button
                                className="login__create-container__form-container__form--submit">
                                Sign Up
                            </button>
                         <Row style={{marginBottom:"-2rem",marginTop:"2rem"}}>
                             <Col>
                                <img src={Btc}/>
                                <Text style={{color:"white",fontFamily:"Quicksand-Regular",fontSize:"1.3rem"}}>{" "}BTC {"    "}</Text>
                                <br></br>
                                <Text style={{color:"green",fontWeight:"bold",fontFamily:"Quicksand-Regular",fontSize:"1.3rem"}}>{"    "}$ {this.state.live_bit}</Text>
                             </Col>
                             <Col>
                             <img src={Eth}/>
                                <Text style={{color:"white",fontFamily:"Quicksand-Regular",fontSize:"1.3rem"}}>{" "}ETH{"    "}</Text>
                                <br></br>
                                <Text style={{color:"green",fontWeight:"bold",fontFamily:"Quicksand-Regular",fontSize:"1.3rem"}}>{"    "}$ {this.state.live_eth}</Text>
                             </Col>
                             {/* </Row>
                        <Row style={{alignContent:"center"}}> */}
                             <Col>
                             <img src={Bnb}/>
                                <Text style={{color:"white",fontFamily:"Quicksand-Regular",fontSize:"1.3rem"}}>{" "}BNB </Text>
                                <br></br>
                                <Text style={{color:"green",fontWeight:"bold",fontFamily:"Quicksand-Regular",fontSize:"1.3rem"}}>{"    "}$ {this.state.live_bnb}</Text>
                            </Col>

                            <Col>
                            <img src={logo} style={{background:"white",borderRadius:"100px",height:"2rem"}}/>
                                <Text style={{color:"white",fontFamily:"Quicksand-Regular",fontSize:"1.3rem"}}>{" "}ANTEAG</Text>
                                <br></br>
                                <Text style={{color:"green",fontWeight:"bold",fontFamily:"Quicksand-Regular",fontSize:"1.3rem"}}>{"    "}$ {this.state.live_ant}</Text>
                            </Col>
                         </Row>
                            
                        </form>
                    </div>
                </div>
                <div className={`login__login-container ${!this.state.login ? 'login__login-container--active' : 'login__login-container--inactive'}`}>
                    <div className="login__login-container__logo-container"  style={{cursor:"pointer"}} onClick={()=>{
            localStorage.removeItem("land")
            window.location.href = "/"
          }}>
                        <img className="login__login-container__logo-container--image" src={logo} style={{background:"white",borderRadius:"100px"}} alt="ANTEAGLE" />
                        ANTEAGLE
                    </div>
                    <div className="login__login-container__main-container">
                        <div className="login__login-container__main-container__social-container">
                            {/* <img className="login__login-container__main-container__social-container--facebook-icon" src={facebook} alt="" />
                            <img className="login__login-container__main-container__social-container--google-icon" src={google} alt="" />
                            <img className="login__login-container__main-container__social-container--linkedin-icon" src={linkedin} alt="" /> */}
                        </div>
                        <span className="login__create-container--info-text" style={{marginLeft:"-20rem"}}>Use username for your login</span>
                        <div className="login__create-container__form-container__form">
                            <form className="login__create-container__form-container__form__form" onSubmit={(e) => {
                                e.preventDefault();
                                this.signIn();
                                this.setState({reqsigin:true})
                            }}>
                                <input
                                    className="login__create-container__form-container__form--name"
                                    type="name"
                                    placeholder="Email"
                                    value={this.state.signInForm.email}
                                    onChange={(value) => this.setState({
                                        signInForm: {
                                            email: value.target.value,
                                            password: this.state.signInForm.password
                                        }
                                    })}
                                    required />
                                <input
                                    className="login__create-container__form-container__form--password"
                                    type="password"
                                    placeholder="Password"
                                    value={this.state.signInForm.password}
                                    onChange={(value) => this.setState({
                                        signInForm: {
                                            password: value.target.value,
                                            email: this.state.signInForm.email
                                        }
                                    })}
                                    required />
                                <button
                                disabled={this.state.reqsigin}
                               
                                    className="login__create-container__form-container__form--submit">
                                    Sign In
                            </button><br/>
                            <a style={{cursor:"pointer",fontSize:"1rem",textAlign:"center"}} onClick={()=>{
                                this.setState({visible:true})
                                
                            }}>Forgot Password</a>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={`login__hello-container ${!this.state.login ? 'login__hello-container--active' : 'login__hello-container--inactive'}`}>
                    <div className="login__welcome-back__main-container__text-container">
                        <span className="login__welcome-back__main-container__text-container--title">
                            Hello, stranger!
                            </span>
                        <span className="login__welcome-back__main-container__text-container--secondary">
                            Enter your personal details and start your own portfolio!
                        </span>
                    </div>
                    <div disabled={this.state.reqsignup} onClick={() => {
                        this.setState({
                            login: !this.state.login,
                            reqsignup : true,
                        });
                    }} className="login__welcome-back__main-container__button-container">
                        Sign Up
                    </div>
                </div>

                </>
                }
            </div>
        );
    }

    signUp() {
        if((this.state.emails.find(ele => ele == this.state.signUpForm.email) == null) && (this.state.usernames.find(ele => ele == this.state.signUpForm.username) == null)){
            axios({
                url : `https://api.anteagle.tech/register?username=${this.state.signUpForm.username}&password=${this.state.signUpForm.password}&email=${this.state.signUpForm.email}&telegram=${this.state.signUpForm.telegram}`,
                headers:{
                  'Accept' : "application/json"
                },
                method : "post",
        
              }).then(res=>{
                if(res.data.success){
                  swal("Registered Successfully","Please check your entered email account and complete verification","success")
                  this.setState({
                    signUpForm: {
                        password: "",
                        username: "",
                        email : ""
                    }
                });
                }
                else{
                  swal("Error","Some Error Occured","error")
                }
              })
        }
        else{
            alert("This Email Address or username is already registered, please choose another")   
        }
      
        
    }

    signIn() {
        
       

        axios({
          url : `https://api.anteagle.tech/login?username=${this.state.signInForm.email}&password=${this.state.signInForm.password}`,
          headers:{
            'Accept' : "aaplication/json"
          },
          method : "post"
        }).then(res=>{
          if(res.data.success){
            swal("Login Successfull","Proceeding to Home Page","success")
            localStorage.setItem("jwt","test")
            localStorage.setItem("username",res.data.username)
            localStorage.setItem("BTC_Coins",res.data.BTC_Coins)
            localStorage.setItem("ETH_Coins",res.data.ETH_Coins)
            localStorage.setItem("BNB_Coins",res.data.BNB_Coins)
            localStorage.setItem("ANTEAG_Coins",res.data.ANT_Coins)
            localStorage.setItem("USDT_Coins",res.data.USDT_Coins)
            localStorage.setItem("INRD_Coins",res.data.INRD_Coins)
            localStorage.setItem("KSM_Coins",res.data.KSM_Coins)
            localStorage.setItem("ATA_Coins",res.data.ATA_Coins)
            localStorage.setItem("MANA_Coins",res.data.MANA_Coins)
            localStorage.setItem("DGB_Coins",res.data.DGB_Coins)
            localStorage.setItem("FTM_Coins",res.data.FTM_Coins)
            localStorage.setItem("ALICE_Coins",res.data.ALICE_Coins)
            localStorage.setItem("GTC_Coins",res.data.GTC_Coins)
            localStorage.setItem("MATIC_Coins",res.data.MATIC_Coins)
            localStorage.setItem("AXS_Coins",res.data.AXS_Coins)
            localStorage.setItem("FTT_Coins",res.data.FTT_Coins)
            localStorage.setItem("SOL_Coins",res.data.SOL_Coins)
            localStorage.setItem("RUNE_Coins",res.data.RUNE_Coins)
            localStorage.setItem("UNI_Coins",res.data.UNI_Coins)
            localStorage.setItem("DOT_Coins",res.data.DOT_Coins)
            localStorage.setItem("VET_Coins",res.data.VET_Coins)
            localStorage.setItem("TFUEL_Coins",res.data.TFUEL_Coins)
            localStorage.setItem("GRT_Coins",res.data.GRT_Coins)
            localStorage.setItem("ADA_Coins",res.data.ADA_Coins)
            localStorage.setItem("FIL_Coins",res.data.FIL_Coins)
            localStorage.setItem("LINK_Coins",res.data.LINK_Coins)
            localStorage.setItem("LUNA_Coins",res.data.LUNA_Coins)
            localStorage.setItem("THETA_Coins",res.data.THETA_Coins)
            localStorage.setItem("userid",res.data.userid)
            localStorage.setItem("chat",res.data.chat)
            window.location = "/"
          }
          else if(res.data.unverified){
            swal("UNVERIFIED","Please verify your email id first","warning")
          }
          else{
            swal("Error","Invalid username or Password please try agin","error")
          }
        })
        this.setState({
          signInForm: {
              password: "",
              email: ""
          }
      });
    }
}



