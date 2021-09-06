import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import axios from 'axios';
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useEffect } from "react";
import swal from "sweetalert";
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

const all = new WebSocket("wss://stream.binance.com:9443/ws/!miniTicker@arr")
export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [usernames,setusernames] = React.useState('');
  const [emails,setemails] = React.useState('');
  const [visible,setvisible] = React.useState(false)
  const [visible1,setvisible1] = React.useState(false)
  const [visible2,setvisible2] = React.useState(false)
  const [email,setemail] = React.useState('');
  const [code1,setcode1] = React.useState('');
  const [code,setcode] = React.useState('')
  const [password,setpassword]  = React.useState('');
  const [email_sign,setemail_sign] = React.useState('');
  const [pass_sign,setpass_sign]= React.useState('');
  const [username_sign,setusername_sign]  = React.useState('');
  useEffect(()=>{ 
    axios({
      url : 'https://api.anteagle.tech/allusers',
      method :"get",
      headers:{
        'Accept' : "application/json"
      },  
    }).then(res=>{
        //console.log(res)
        var temp1 = []
        var temp2 = []
       for(let i=0;i<res.data.data.length;i++){
         temp1.push(res.data.data[i].username)
         temp2.push(res.data.data[i].email)
       }
      setusernames(temp1)
      setemails(temp2)
      
     //console.log(this.state.emails)
     //console.log(this.state.usernames)
    }
    )
    
  },[])
  return (
    <>
    <Dialog open={visible}>
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
                setemail(e.target.value)
            }}
            />
            <br/>
            <Button onClick={()=>{
                setvisible(false)
                
                axios({
                    method : "post",
                    url : `https://api.anteagle.tech/forgot?email=${this.state.email}`,
                    headers : {
                        'Accept' : "Application/Json",
                        'Content-type' :"application/json"
                    }
                }).then(res=>{
                    if(res.data.success){
                        setcode(res.data.code)
                        
                        setvisible1(true)
                    }
                    else if(res.data.error){
                        console.log(res.data.error)
                        
                        swal("Error","This email address has not been registered.Please enter a valid email address.","error")
                    }
                })
            }}>
                Send Verification Code
            </Button>
                </DialogContent>
                </Dialog>
                <Dialog open={visible1}>
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
                setcode1(e.target.value)
            }}
            />
            <br/>
            <Button onClick={()=>{
               if(this.state.code == this.state.code1){
                setvisible1(false)
                setvisible2(true)
            }
            else{
                swal("WRONG!","Error Invalid code","error")
            }
            }}>
               Verify
            </Button>
                </DialogContent>
                </Dialog>
                <Dialog open={visible2}>
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
                setpassword(e.target.value)
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
                setpassword(e.target.value)
            }}
            />        
            <br/>
            <Button onClick={()=>{
                setvisible2(false)
                
                axios({
                    method : "post",
                    url : `https://api.anteagle.tech/edit_pass?password=${this.state.password}&userid=${localStorage.getItem("userid")}`,
                    headers : {
                        "Accept" : "Application/json",
                        "Content-type" : "application/json"
                    }
                }).then(res=>{
                    if(res.data.success){
                        
                        swal("Success","PASSWORD chnaged successfully, Now login again");
                        
                    }
                })
            }}>
               Submit
            </Button>
                </DialogContent>
                </Dialog>
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Username" onChange={(e)=>{
          setusername_sign(e.target.value)
        }}/>
        <Input type="email" placeholder="Email" onChange={(e)=>{
          setemail_sign(e.target.value)
        }}/>
        <Input type="password" placeholder="Password" onChange={(e)=>{
          setpass_sign(e.target.value)
        }} />
        <Input type="password" placeholder="Confirm Password" onChange={(e)=>{
          setpass_sign(e.target.value)
        }} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={async()=>{
         if((emails.find(ele => ele == email_sign) == null) && (usernames.find(ele => ele == username_sign) == null)){
          axios({
              url : `https://api.anteagle.tech/register?username=${username_sign}&password=${pass_sign}&email=${email_sign}`,
              headers:{
                'Accept' : "application/json"
              },
              method : "post",
      
            }).then(async(res)=>{
              if(res.data.success){
                await swal("Registered Successfully","Please check your entered email account and complete verification","success")
                window.location.href = "/"
                
              }
              else{
                await swal("Error","Some Error Occured","error")
                
              }
            })
      }
      else{
          alert("This Email Address or username is already registered, please choose another")   
      }
      }}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
    </>
  );
}
