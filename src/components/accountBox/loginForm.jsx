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


export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
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
      
     //console.log(emails)
     //console.log(usernames)
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
                    url : `https://api.anteagle.tech/forgot?email=${email}`,
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
               if(code == code1){
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
                    url : `https://api.anteagle.tech/edit_pass?password=${password}&userid=${localStorage.getItem("userid")}`,
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
        <Input type="email" onChange={(e)=>{
          setusername_sign(e.target.value)
        }} placeholder="Email" />
        <Input type="password" onChange={(e)=>{
          setpass_sign(e.target.value)
        }} placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#" onClick={()=>{setvisible(true)}}>Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={(e)=>{
        
        axios({
          url : `https://api.anteagle.tech/login?username=${username_sign}&password=${pass_sign}`,
          headers:{
            'Accept' : "application/json"
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
      }}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
    </>
  );
}
