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
import React, { useEffect } from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";
import { Card as Card1 } from 'react-card-component';
import { Divider } from '@material-ui/core';
import { CgArrowsExchangeV } from "react-icons/cg";

import "./map.css";
import axios from "axios";
import swal from "sweetalert";
function Map() {
  const [from, setfrom] = React.useState("BTC")
  const [to, setto] = React.useState("ANTEAG")
  const [fromvalue, setfromvalue] = React.useState(0)
  const [tovalue, settovalue] = React.useState(0);
  const [live, setlive] = React.useState(0)
  const [enteredText, setEnteredText] = React.useState('');
  const [tocurr, settocurr] = React.useState(null);
  const [valid, setvalid] = React.useState(true)
  const [ETH, setETH] = React.useState(0)
  const [BNB, setBNB] = React.useState(0)
  const [BTC, setBTC] = React.useState(0)
  const [liveusd, setliveusd] = React.useState(0)
  const [ANTEAG, setANTEAG] = React.useState(0)
  const [final, setfinal] = React.useState(0)
  const all = new WebSocket("wss://stream.binance.com:9443/ws/!miniTicker@arr")
  
  all.onmessage = evt => {
    const g = JSON.parse(evt.data)
    for(let i=0;i<g.length;i++){
      if(g[i]["s"] == "BTCUSDT"){
       setBTC(parseFloat(g[i]["c"]).toFixed(2))
       
      }
      if(g[i]["s"] == "BNBUSDT"){
        setBNB(parseFloat(g[i]["c"]).toFixed(2))
       
      }
      if(g[i]["s"] == "ETHUSDT"){
        setETH(parseFloat(g[i]["c"]).toFixed(2))
       
      }
    }
  }
  useEffect(() => {
    setInterval(() => {
      axios({
        method:"get",
        url: "https://api.exchangerate.host/convert?from=USD&to=INR"
      }).then(res=>{
        //console.log(res.data.info.rate)
        setliveusd(res.data.info.rate)
      })
      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT` //`https://api.anteagle.tech/liveprice?pair=BTC/USDT`
      // }).then(res=>{
      //   if(res.data){
      //     setBNB(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })
      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT` //`https://api.anteagle.tech/liveprice?pair=BTC/USDT`
      // }).then(res=>{
      //   if(res.data){
      //     setBTC(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })
      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT` //`https://api.anteagle.tech/liveprice?pair=BTC/USDT`
      // }).then(res=>{
      //   if(res.data){
      //     setETH(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })
      axios({
        method: 'get',
        url: `https://api.anteagle.tech/liveprice?pair=ANTEAG/USDT`
      }).then(res => {
        if (res.data[0]) {
          setANTEAG(res.data[0].price)
        }

      })
    }, 1000)

  }, [])
  return (
    <>
      <div className="content">
        <Row>
          <Col>
            <Card className="card-plain">
              <CardHeader>SWAP YOUR COINS</CardHeader>
              <CardBody style={{ alignSelf: "center" }}>
                <Card1 outlined={true} bordered={true} style={{ background: "#fff", borderRadius: "100px" }}>

                  <div style={{ textColor: "black", marginLeft: "1rem", marginTop: "1rem" }}>
                    <h1 style={{ color: "black", fontWeight: "bold", fontFamily: "Kanit,sans-serif" }}>Exchange</h1>
                    <p style={{ color: "black" }}>Trade Token in an Instant</p>
                  </div>


                  <div className="input" style={{ width: "98%", paddingLeft: "0.4rem" }}>

                    <div style={{ background: "#eeeaf4", borderRadius: "0.7rem" }}>
                      <label style={{ color: "black", padding: "0.3rem", width: "99%" }}>From</label>
                      <p style={{ color: "grey", padding: "0.4rem" }}>Max Available {localStorage.getItem(`${from}_Coins`)}</p>
                      <input placeholder={`ENTER ${from}`} onChange={(e) => {
                        if (parseFloat(e.target.value) > parseFloat(localStorage.getItem(`${from}_Coins`))) {
                          alert("Please Enter Amount less than or equal to your wallet balance")
                          setvalid(false);
                        }
                        else {

                          setfromvalue(parseFloat(e.target.value))
                          //console.log("from>>>>>>>>>>",from)
                          //console.log("to>>>>>>>>>>>>",to)
                          //console.log(parseFloat(e.target.value))

                          setvalid(true)
                          if (from == 'ETH') {  
                          if( to == 'INRD'){
                            setfinal(liveusd * ETH * parseFloat(e.target.value) * 0.98)
                          }
                          else if(to == 'USDT'){
                            setfinal(ETH * parseFloat(e.target.value) * 0.98)
                          }
                          else if(to == 'BNB'){
                            setfinal(((ETH * parseFloat(e.target.value))/(BNB)) * 0.98)
                          }
                          else if(to == 'BTC'){
                            setfinal(BTC * parseFloat(e.target.value) * 0.98)
                          }
                          else{
                            alert("Cannot convert to same type")
                          }}
                          else if (from == 'BTC') {
                            if( to == 'INRD'){
                              //console.log(75 * 2600000 * parseFloat(e.target.value) * 0.98 )
                              setfinal(75 * 2600000 * parseFloat(e.target.value) * 0.98 )
                            }
                            else if(to == 'USDT'){
                              setfinal(BTC * parseFloat(e.target.value) * 0.98 )
                            }
                            else if(to == 'BNB'){
                              setfinal(BNB * parseFloat(e.target.value) * 0.98 )
                            }
                            else if(to == 'ETH'){
                              setfinal(ETH * parseFloat(e.target.value) * 0.98 )
                            }
                            else{
                              alert("Cannot convert to same type")
                            }
                            
                          }
                          else if (from == 'BNB') {  
                            if( to == 'INRD'){
                            setfinal(75 * BTC * parseFloat(e.target.value) * 0.98 )
                          }
                          else if(to == 'USDT'){
                            setfinal(BTC * parseFloat(e.target.value) * 0.98 )
                          }
                          else if(to == 'BTC'){
                            setfinal(BNB * parseFloat(e.target.value) * 0.98 )
                          }
                          else if(to == 'ETH'){
                            setfinal(ETH * parseFloat(e.target.value) * 0.98 )
                          }
                          else{
                            alert("Cannot convert to same type")
                          } }
                          else if (from == 'ANTEAG') { 
                            if( to == 'INRD'){
                              setfinal(75 * BTC * parseFloat(e.target.value) * 0.98 )
                            }
                            else if(from == 'USDT'){
                              setfinal(BTC * parseFloat(e.target.value) * 0.98 )
                            }
                            else if(to == 'BNB'){
                              setfinal(BNB * parseFloat(e.target.value) * 0.98 )
                            }
                            else if(to == 'ETH'){
                              setfinal(ETH * parseFloat(e.target.value) * 0.98 )
                            }
                            else{
                              alert("Cannot convert to same type")
                            }
                           }
                          else if (from == 'USDT') { 
                            if( to == 'INRD'){
                              setfinal(75 * parseFloat(e.target.value) * 0.98 )
                            }
                            else if(to == 'BTC'){
                              setfinal(BTC * parseFloat(e.target.value) * 0.98 )
                            }
                            else if(to == 'BNB'){
                              setfinal(BNB * parseFloat(e.target.value) * 0.98 )
                            }
                            else if(to == 'ETH'){
                              setfinal(ETH * parseFloat(e.target.value) * 0.98 )
                            }
                            else{
                              alert("Cannot convert to same type")
                            }
                           }
                          else if (from == 'INRD') {  
                          
                          if( to == 'BTC'){
                            //console.log(parseFloat(e.target.value) * 0.98 )
                            setfinal((parseFloat(e.target.value)/(BTC*liveusd)) * 0.98 )
                          }
                          else if(to == 'USDT'){
                            setfinal((parseFloat(e.target.value)/(liveusd)) * 0.98 )
                          }
                          else if(to == 'BNB'){
                            setfinal((parseFloat(e.target.value)/(BNB * liveusd)) * 0.98 )
                          }
                          else if(to == 'ETH'){
                            setfinal((parseFloat(e.target.value)/(ETH * liveusd)) * 0.98 )
                          }
                          else{
                            alert("Cannot convert to same type")
                          } }
                        }



                      }} style={{ height: "1.5rem", width: "70%", background: "rgb(238,234,244)", marginTop: "1rem", paddingTop: "0.5rem", marginLeft: "0.2rem" }}></input>

                      <select style={{ background: "rgb(238,234,244)", marginLeft: "0.5rem", marginTop: "0.7rem", height: "1.7rem", width: "20%", position: "absolute" }} onChange={(e) => {
                        setfrom(e.target.value)
                      }}>
                        <option>BTC</option>
                        <option>INRD</option>
                        <option>ETH</option>
                        <option>BNB</option>
                        <option>USDT</option>
                        <option>ANTEAG</option>
                      </select>
                    </div>

                    <CgArrowsExchangeV size={40} style={{ marginLeft: "50%", marginBottom: "1rem" }}></CgArrowsExchangeV>

                    <div style={{ background: "#eeeaf4", borderRadius: "0.7rem" }}>
                      <label style={{ color: "black", padding: "0.3rem", width: "99%" }}>To</label>
                      <input placeholder={`You will Recieve ${final}`} style={{ underlineColorAndroid: "transparent", height: "1.5rem", width: "70%", background: "rgb(238,234,244)", marginTop: "1rem", paddingTop: "0.5rem", marginLeft: "0.2rem" }}></input>
                      <select style={{ background: "rgb(238,234,244)", marginTop: "0.7rem", marginLeft: "0.5rem", height: "1.7rem", width: "20%", position: "absolute" }} onChange={(e) => {
                        setto(e.target.value)
                        switch (e.target.value) {
                          case 'ETH':
                            settocurr(ETH)
                          case 'BTC':
                            settocurr(BTC)
                          case 'BNB':
                            settocurr(BNB)
                          case 'ANTEAG':
                            settocurr(ANTEAG)
                          case 'USDT':
                            settocurr(1)
                          case 'INRD':
                            settocurr(liveusd)
                        }
                      }}>


                        <option>BTC</option>
                        <option>INRD</option>
                        <option>ETH</option>
                        <option>BNB</option>
                        <option>USDT</option>
                        <option>ANTEAG</option>
                      </select>
                    </div>
                    <Button className="btn btn-primary m-6" style={{ marginTop: "3rem", width: "100%" }} disabled={!valid} onClick={() => {
                      if (from.length != 0 || to.length != 0) {
                        if (from.length < localStorage.getItem(`${from}_Coins`) || to.length < localStorage.getItem(`${to}_Coins`)) {
                          const temp =parseFloat(localStorage.getItem(`${from}_Coins`))-parseFloat(fromvalue);
                          const temp1 = parseFloat(localStorage.getItem(`${to}_Coins`))+parseFloat(final)
                          alert(localStorage.getItem(`${to}_Coins`))
                          alert(from)
                          alert(localStorage.getItem(`${from}_Coins`))
                          axios({
                            url : `https://api.anteagle.tech/get${from.toLowerCase()}?coins=${temp}&userid=${localStorage.getItem("userid")}`,
                            method : "POST",
                            headers:{
                              "Accept" : "Application/json",
                              'Content-type' : "application/json"
                            }
                          }).then(res=>{
                            axios({
                              method : 'post',                            
                              url : `https://api.anteagle.tech/get${to.toLowerCase()}?coins=${temp1}&userid=${localStorage.getItem("userid")}`,
                              headers:{
                                "Accept" : "Application/json",
                                'Content-type' : "application/json"
                              }
                            }).then(res=>{
                              swal("SUCCESS","Swap Successfull","Success")
                              window.location = "/"
                            })
                          })
                          
                        }
                      }
                    }}>Convert</Button>
                  </div>

                </Card1>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Map;
