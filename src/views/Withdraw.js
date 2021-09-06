import axios from "axios";
import React, { useEffect } from "react";
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormTextProps,
  FormFeedback,
  Label,
  InputGroup,
  InputGroupAddon,
  Input,
  FormText,
  Form,
  Row,
  Col,
  CardFooter,
} from "reactstrap";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import QRCode from "react-qr-code";
import swal from "sweetalert";
const Withdraw = () => {
const [bank,setban] = React.useState([])
const [dropdownOpen, setDropdownOpen] = React.useState(false);
const [splitButtonOpen, setSplitButtonOpen] = React.useState(false);
const [wallet,setwallet] = React.useState(true);
const [amount,setamount] = React.useState(0)
const [currency,setcurrency] = React.useState('');
useEffect(()=>{
    axios({
        method : "get",
        url : `https://api.anteagle.tech/bankdetails?userid=${localStorage.getItem("userid")}`,
        headers : {
            'Accept' : "Application/json",
            'Content-type' : "Application/JSON"
        }
    }).then(res=>{
      if(res.data.res.length == 0){
        swal("Account Alert","You have not registered your Bank Account with us. Please register it First and then only you can withdraw the Amount.","warning")
        window.location.href = '/#/admin/add_money/'
      }
      else{
        console.log(res.data) 
      setban(res.data.res[0])
      }
      
       
    })
       

},[])

    const notificationAlertRef = React.useRef(null);
    const notify = (place) => {
      var color = Math.floor(Math.random() * 5 + 1);
      var type;
      switch (color) {
        case 1:
          type = "primary";
          break;
        case 2:
          type = "success";
          break;
        case 3:
          type = "danger";
          break;
        case 4:
          type = "warning";
          break;
        case 5:
          type = "info";
          break;
        default:
          break;
      }
      var options = {};
      options = {
        place: place,
        message: (
          <div>
            <div>
            Successfully Copied to Clipboard
            </div>
          </div>
        ),
        type: type,
        icon: "tim-icons icon-bell-55",
        autoDismiss: 7,
      };
      notificationAlertRef.current.notificationAlert(options);
    };
    return(
        <>
        <div className="content">
          <Row style={{marginLeft:"0.5rem"}}>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Withdraw Your Amount</h5>
                  <h5 className="title">Total Amount : {localStorage.getItem("INRD_Coins")}</h5>
                </CardHeader> 
                <CardBody>
                  <Form>
                    <Label>Account Number</Label>    
                    <Input placeholder="Copy & Paste Your Address here to withdraw your coins" disabled="true" style={{color:"white"}} value={bank.Acc_no}></Input>
                    <Label>Account Holder Name</Label>
                    <Input placeholder="Enter Amount"  disabled="true" style={{color:"white"}} value={bank.Acc_name}></Input>

                    <Label>Enter Amount</Label>
                    <Input placeholder="Minimum Withdraw Amount 5000 INR" onChange={(e)=>{
                      if(e.target.value < 5000 || e.target.value > parseFloat(localStorage.getItem("INRD_Coins"))){
                        setwallet(true)
                      }
                      else{
                        setwallet(false)
                        setamount(e.target.value)
                      }
                     
                    }}>
                     
                    </Input>
        
                    <FormText>*Your Withdraw amount will be refunded back to this Account only in 10-15 mins</FormText>
                  </Form>
                 
  
                </CardBody>
                <CardFooter>
                  <Button disabled={wallet} className="btn-fill" color="primary" type="submit" onClick={()=>{
                      var end = parseFloat(localStorage.getItem("INRD_Coins")) - amount
                      axios({
                        method:"post",
                        url : `https://api.anteagle.tech/getinrd?coins=${end}&userid=${localStorage.getItem("userid")}`,
                        headers:{
                          "Accept": "application/json",
                        }
                      }).then(res=>{
                        console.log(res.data)
                      })
                       axios({
                        method:"post",
                        url: `https://api.anteagle.tech/requestbank?userid=${localStorage.getItem("userid")}&amount=${amount}`,
                        headers:{
                          'Accept' : 'Application/json',
                          'Content-type' : 'application/json'
                        }
                      }).then(res=>{
                        console.log(res.data)
                        if(res.data.message){
                          swal(`Submitted !!`,`Your request for withdraw has been submitted Successfully. Entered will be transfered to your Account in 15-20 mins \n Your Req ID is ${res.data.id}`,"success");
                          setInterval(()=>{
                            axios({
                              method: "post",
                              url : `https://api.anteagle.tech/checkbank?id=${res.data.id}`,
                              headers:{
                                "Accept" : "Application/json",
                                'Content-type' : "application/json"
                              }
                            }).then(res=>{
                              if(res.data.success){
                                const temp = parseFloat(localStorage.getItem(`INRD_Coins`))+parseFloat(this.state.final); 
                                console.log(temp)
                                  axios({
                                    method : "post",
                                    url : `https://api.anteagle.tech/get${this.state.curr.toLowerCase()}?coins=${temp}&userid=${localStorage.getItem("userid")}`,
                                    headers:{
                                      "Accept" : "Application/json",
                                      'Content-type' : "application/json"
                                    }
                                  }).then(res=>{
                                    window.location.href = "/"
                                  })
                                 
                              }
                            })
                          },1000)
                        }
                      })
                  }}>
                    Withdraw
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            
          </Row>
        </div>
      </>
)
}
export default Withdraw;