/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import Dialog from '@material-ui/core/Dialog';
import axios from "axios";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  CardText,
  NavLink,
  Nav,
  Container,
  Modal,
  NavbarToggler,
  ModalHeader,
} from "reactstrap";
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FormControl,InputLabel,FormHelperText,Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import swal from "sweetalert";
function AdminNavbar(props) {
  const [final, setFinal]=React.useState("");
  const [collapseOpen, setcollapseOpen] = React.useState(false);
  const [modalSearch, setmodalSearch] = React.useState(false);
  const [age, setAge]=React.useState('USDT');
  const [color, setcolor] = React.useState("navbar-transparent");
  const [ref,setref] = React.useState(false)
  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  });
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setcolor("bg-white");
    } else {
      setcolor("navbar-transparent");
    }
  };
  // this function opens and closes the collapse on small devices
  const toggleCollapse = () => {
    if (collapseOpen) {
      setcolor("navbar-transparent");
    } else {
      setcolor("bg-white");
    }
    setcollapseOpen(!collapseOpen);
  };
  // this function is to open the Search modal
  const toggleModalSearch = () => {
    setmodalSearch(!modalSearch);
  };
  return (
    <>
      <Dialog open={ref} aria-labelledby="form-dialog-title">
       <DialogContent style={{margin:"10px",overflow:"hidden"}}>
      
       
         <CardText style={{color:"black"}}>
           Enter your referral code
         </CardText>
       <TextField
            autoFocus
            margin="dense"
            id="name"
            label="REFERRAL CODE"
            placeholder="CODE"
            
            onChange={(e)=>{
              setFinal(e.target.value)
              
            }}/>

<InputLabel id="demo-simple-select-outlined-label">Type of Coin </InputLabel>
       <Select
         labelId="demo-simple-select-outlined-label"
         id="demo-simple-select-outlined"
         value={age}
         onChange={(e)=>{
           setAge(e.target.value)
    
         }}
         label="Age"
       >
         <MenuItem value={'USDT'}>USDT</MenuItem>
         <MenuItem value={'INRD'}>INRD</MenuItem>
   
       </Select>
            
       </DialogContent>
       <Button  onClick={()=>{ 
         console.log(final,localStorage.getItem("userid"))
         console.log(typeof(final),final)
         setref(false)
         axios({
        method:"POST",
        url:"https://api.anteagle.tech/referral",
        headers:{
          "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          referralcode: final,
          symbol:age
        }),

      }).then(res=>{console.log(res.data)
      
          if(res.data.success){
            const amt=res.data.success;
            const tem = age == "USDT" ? (parseFloat(localStorage.getItem(`${age}_Coins`)) + parseFloat((res.data.success)/75)).toFixed(3) : (parseFloat(localStorage.getItem(`${age}_Coins`)) + res.data.success)
            const c= age
            console.log(tem)
            axios({
            method:"post",
            url : `https://api.anteagle.tech/get${c}?coins=${tem}&userid=${localStorage.getItem("userid")}`,
            headers:{
              "Accept": "application/json"
              }
            }).then(res=>{
                console.log(res.data);
                swal(`${amt} ${age}`,`${amt} ${c} is succesfully appended in your wallet`,"success")
                })
           }
      else{
        swal("Invalid","The referral code entered is invalid: Please try with a different one",'error')
      }
      
      })
         
         
         }}>APPLY</Button>
         <Button onClick={()=>{
           setref(false)
         }}>Cancel</Button>
     </Dialog>
      <Navbar className={classNames("navbar-absolute", color)} expand="lg">
        <Container fluid>
          <div className="navbar-wrapper">
            <div
              className={classNames("navbar-toggle d-inline", {
                toggled: props.sidebarOpened,
              })}
            >
              <NavbarToggler onClick={props.toggleSidebar}>
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </NavbarToggler>
            </div>
            
           

            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              ANTEAGLE
            </NavbarBrand>
            
            </div>
            <Button onClick={()=>{
       setref(true)
     }}> 
       Referral
     </Button>
            
        </Container>
      </Navbar>
     
    </>
  );
}

export default AdminNavbar;
