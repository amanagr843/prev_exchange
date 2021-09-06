/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import logo from "./FInalCryptologo.png";
import logo3 from "./logo3.png"
import {
    AwesomeButton,
    AwesomeButtonProgress,
    AwesomeButtonSocial,
  } from 'react-awesome-button';
  import "react-awesome-button/dist/styles.css";
import ipfs from "./ipfs.png"
import logo2 from "./logo2.png";
import eth from "./eth.svg"
import sarvvid from "./sarvvid.png"
import binance from "./binance90.png"
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import { Row,Col } from "reactstrap";
import axios from "axios";
const all = new WebSocket("wss://stream.binance.com:9443/ws/!miniTicker@arr")
export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [liveprice_BNB,setlive_BNB] = React.useState(0)
  const [liveprice_BTC,setlive_BTC] = React.useState(0)
  const [width,setwidth] = React.useState(window.innerWidth)
  const [liveprice_ETH,setlive_ETH] = React.useState(0)
  const [conversion,setconversion] = React.useState(1);
  const [livenews,setlivenews] = React.useState("")
  const [btc_per,setbtc_per] = React.useState(0)
  const [bnb_per,setbnb_per] = React.useState(0);
  const [eth_per,seteth_per] = React.useState(0);
  const [features,setfeatures] = React.useState([])
  const handleWindowSizeChange = () => {
    setwidth(window.innerWidth)
  };
  useEffect(() => {
    axios({
        method:"get",
        url:"https://api.anteagle.tech/news",
        headers:{
            'Accept' : "Application/JSON",
            'Content-type' : "application/json"
        }
    }).then(res=>{
        if(res.data){
            setlivenews(res.data.news)
        }
    })
    axios({
      method:"get",
      url:"https://api.anteagle.tech/features",
      headers:{
          'Accept' : "Application/JSON",
          'Content-type' : "application/json"
      }
  }).then(res=>{
      if(res.data){
        
          setfeatures(res.data.features)
      }
  })

  all.onmessage = evt => {
    const g = JSON.parse(evt.data)
    for(let i=0;i<g.length;i++){
      if(g[i]["s"] == "BTCUSDT"){
        setlive_BTC(g[i]["c"])
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setbtc_per(temp)
      }
      if(g[i]["s"] == "BNBUSDT"){
        setlive_BNB(g[i]["c"])
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        setbnb_per(temp)
      }
      if(g[i]["s"] == "ETHUSDT"){
        setlive_ETH(g[i]["c"])
        const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
        seteth_per(temp)
      }
    }
  }
  setInterval(()=>{

        axios({
          method:"get",
          url: "https://api.exchangerate.host/convert?from=USD&to=INR"
        }).then(res=>{
          localStorage.setItem("conversion",res.data.info.rate)
          setconversion(res.data.info.rate)
        })
      
       
    },10000)
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const isMobile = width <= 900;
  if(isMobile){
    return (
      <>
        <body style={{overflowX:"hidden"}}>
          
       
           <header className="Header" > 
     
        <img src={logo} className="LogoM" alt="logo" />

        <img src={logo2} className="Logo1M" alt="logo" />
        <img src={logo3} className="Logo2M" alt="logo"  />
      
      
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
      
          <a href="/">Home</a>
          <a href="/">Articles</a>
          <button onClick={()=>{
            localStorage.setItem("land",true)
            window.location.href = "/"
          }}>Login/Register</button>
        </nav>
      </CSSTransition>
      <button style={{marginTop:"-3rem" , marginLeft:"2px"}} onClick={toggleNav} className="Burger">
      ☰
      </button>
     </header>  
       
     
   


    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  
    <span style={{fontSize:"300%",color:"white",textAlign:"center",display:"table",margin:"auto"}}>
        Buy and Sell Crypto with <a href="#" 
       data-toggle="tooltip"
       data-tooltip="🎉 Full Trade Option 🎉                                   🎉 Free 500 INR on first signup  🎉                "
       data-tooltip-location="right"
       data-container="body"
       title="" data-original-title="Insert Title"
       >
         revolutionary features
    </a>
    </span>
    
    <br/>

    <span style={{fontSize:"2rem",textAlign:"center",display:"table",margin:"auto"}}>Experience The Modern Crypto Exchange</span>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <button style={{textAlign:"center",width:"100%",height:"4rem",borderRadius:"10px",backgroundColor:"gold",fontSize:"1.5rem"}}  onClick={()=>{
            localStorage.setItem("land",true)
            window.location.href = "/"
          }}>Register Now</button>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Row style={{marginLeft:"0.8rem"}}>
        <Col style={{paddingBottom:"-1rem"}}>
        <h3 style={{marginTop:"2rem",marginBottom:"10px"}}>BTC/INR  </h3>
        <h3  style={{color:btc_per > 0 ? "green" : "red",marginBottom:"20px"}}>{btc_per} % </h3>
        <h1 style={{marginTop:"0.5rem",color:'gold',fontSize:"1.5rem"}}>₹ {parseFloat(liveprice_BTC*conversion).toFixed(2)}</h1>
        <h4 style={{fontSize:"1.4rem",marginTop:"-1rem",color:'white'}} >$ {parseFloat(liveprice_BTC).toFixed(2)}</h4>
        
        </Col>
        <Col style={{paddingBottom:"-1rem"}}>
        <h3 style={{marginTop:"2rem",marginBottom:"10px"}}>BNB/INR   </h3>
        <h3  style={{color:btc_per > 0 ? "green" : "red",marginBottom:"20px"}}>{bnb_per} %</h3>
        <h1 style={{marginTop:"0.5rem",color:'gold',fontSize:"1.5rem"}}>₹ {parseFloat(liveprice_BNB*conversion).toFixed(2)}</h1>
        <h4 style={{fontSize:"1.4rem",marginTop:"-1rem",color:'white'}} >$ {parseFloat(liveprice_BNB).toFixed(2)}</h4>
        
        </Col> <Col style={{paddingBottom:"-1rem"}}>
        <h3 style={{marginTop:"2rem",marginBottom:"10px"}}>ETH/INR   </h3>
        <h3 style={{color:btc_per > 0 ? "green" : "red",marginBottom:"20px"}}>{eth_per} %</h3>
        <h1 style={{marginTop:"0.5rem",color:'gold',fontSize:"1.5rem"}}>₹ {parseFloat(liveprice_ETH*conversion).toFixed(2)}</h1>
        <h4 style={{fontSize:"1.4rem",marginTop:"-1rem",color:'white'}} >$ {parseFloat(liveprice_ETH).toFixed(2)}</h4>
        
        </Col> <Col style={{paddingBottom:"-1rem"}}>
        <h3 style={{marginTop:"2rem"}}>ANTEAG/INR</h3>
        
        <h1 style={{marginTop:"-1rem",color:'gold',fontSize:"1.5rem"}}>₹ {parseFloat(liveprice_BNB*0.00027169956*conversion).toFixed(3)}</h1>
        <h4 style={{fontSize:"1.4rem",marginTop:"-1rem",color:'white'}} >$ {parseFloat(liveprice_BNB*0.00027169956).toFixed(3)}</h4>
        
        </Col>  <Col style={{paddingBottom:"-1rem"}}>
        <h3 style={{marginTop:"2rem"}}>EAGLEANT/INR</h3>

        <h1 style={{marginTop:"-1rem",color:'gold',fontSize:"1.5rem"}}>₹ 1.00</h1>
        <h4 style={{fontSize:"1.4rem",marginTop:"-1rem",color:'white'}} >$ {(1.00/conversion).toFixed(5)}</h4>
        
        </Col> <Col style={{paddingBottom:"-1rem"}}>
        <h3 style={{marginTop:"2rem"}}>EAGLE/INR</h3>

        <h1 style={{marginTop:"-1rem",color:'gold',fontSize:"1.5rem"}}>₹ 5.00</h1>
        <h4 style={{fontSize:"1.4rem",marginTop:"-1rem",color:'white'}} >$ {(5.00/conversion).toFixed(2)}</h4>
        
        </Col>
    </Row>
  
    <section class="service-section py-5">
  <div class=" container ">
    <div class="row justify-content-center py-3">
      <div class="col-md-8 col-12 text-center">
        <p class="service-main-heading">Features</p>
      </div>
    </div>
    
    
   

   
   <Row >
     {
       features.forEach((element,i) => {
         return(
          <Col >
          <div class="icon-box " >
            <i style={{color:"gold"}}class="fa fa-briefcase service-icon"></i>
            <p style= {{color:"black",fontSize:"2rem",fontWeight:"bold"}}class="service-title"><a href="#">{element.heading}</a></p>
            <p style= {{color:"black"}} class="service-para">{element.subheading}</p>
          </div>
        </Col>
         )
       })
     }   
    </Row>
    
  </div>
</section>
<section class="service-section py-5">
  <div class="container">
<div class="row justify-content-center py-3">
      <div class="col-md-8 col-12 text-center">
        <p class="service-main-heading">Powered By</p>
      </div>
    </div>

<Row style={{marginLeft:"-0.3rem"}}>
<Col><img src={ipfs}/></Col>
<Col><img style={{backgroundColor:"white",marginTop:"0.2rem"}} src={binance}/></Col>
<Col><img src={eth}/></Col>
    <Col><img style={{backgroundColor:"white"}} src={sarvvid}/></Col>
</Row>
</div>
</section>
{/* <div style={{width:"100%",height:"8rem",backgroundColor:"black"}}>
<h1 style={{marginTop:"6rem", textAlign:"center"}}>© Copyright Opulentia Cresco</h1>
</div>    */}
<div class="ticker-wrap">
<div class="ticker">
<div class="ticker__item">{livenews} 🎉</div>
</div>
</div>
 </body>
    </>
  );
  }
  else{
    return (
      <>
  <body style={{overflowX:"hidden"}}>

  

    <header className="Header">
      <img src={logo} className="Logo" alt="logo" />
      <img src={logo2} className="Logo1" alt="logo" />
      <img src={logo3} className="Logo2" alt="logo" />
      
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/">Home</a>
          <a href="/">Articles</a>
          <button onClick={()=>{
            localStorage.setItem("land",true)
            window.location.href = "/"
          }}>Login/Register</button>
        </nav>
      </CSSTransition>
      <button style={{marginTop:"-2rem"}} onClick={toggleNav} className="Burger">
      ☰
      </button>
    </header>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  
    <span style={{fontSize:"300%",color:"white",marginLeft:"2rem"}}>
        Buy and Sell Crypto with <a href="#" 
       data-toggle="tooltip"
       data-tooltip="🎉 Full Trade Option 🎉                                   🎉 Free 500 INR on first signup  🎉                "
       data-tooltip-location="right"
       data-container="body"
       title="" data-original-title="Insert Title"
       >
         revolutionary features
    </a>
    </span>
    
    <br/>

    <span style={{fontSize:"2rem",marginLeft:"2rem"}}>Experience The Modern Crypto Exchange</span>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <button style={{marginLeft:"2rem",width:"25rem",height:"4rem",borderRadius:"10px",backgroundColor:"gold",fontSize:"1.5rem"}}  onClick={()=>{
            localStorage.setItem("land",true)
            window.location.href = "/"
          }}>Register Now</button>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Row style={{marginLeft:"2rem"}}>
        <Col style={{paddingBottom:"-1rem"}}>
        <h3 style={{marginTop:"2rem"}}>BTC/INR   <span style={{color:btc_per > 0 ? "green" : "red"}}>{btc_per} %</span></h3>

        <h1 style={{marginTop:"-1rem",color:'gold'}}>₹ {parseFloat(liveprice_BTC*conversion).toFixed(2)}</h1>
        <h4 style={{fontSize:"1.4rem",marginTop:"-1rem",color:'white'}} >$ {parseFloat(liveprice_BTC).toFixed(2)}</h4>
        
        </Col>
        <Col style={{paddingBottom:"-1rem"}}>
        <h3 style={{marginTop:"2rem"}}>BNB/INR   <span style={{color:btc_per > 0 ? "green" : "red"}}>{bnb_per} %</span></h3>

        <h1 style={{marginTop:"-1rem",color:'gold'}}>₹ {parseFloat(liveprice_BNB*conversion).toFixed(2)}</h1>
        <h4 style={{fontSize:"1.4rem",marginTop:"-1rem",color:'white'}} >$ {parseFloat(liveprice_BNB).toFixed(2)}</h4>
        
        </Col> <Col style={{paddingBottom:"-1rem"}}>
        <h3 style={{marginTop:"2rem"}}>ETH/INR   <span style={{color:btc_per > 0 ? "green" : "red"}}>{eth_per} %</span></h3>

        <h1 style={{marginTop:"-1rem",color:'gold'}}>₹ {parseFloat(liveprice_ETH*conversion).toFixed(2)}</h1>
        <h4 style={{fontSize:"1.4rem",marginTop:"-1rem",color:'white'}} >$ {parseFloat(liveprice_ETH).toFixed(2)}</h4>
        
        </Col> <Col style={{paddingBottom:"-1rem"}}>
        <h3 style={{marginTop:"2rem"}}>ANTEAG/INR</h3>

        <h1 style={{marginTop:"-1rem",color:'gold'}}>₹ {parseFloat(liveprice_BNB*0.00027169956*conversion).toFixed(3)}</h1>
        <h4 style={{fontSize:"1.4rem",marginTop:"-1rem",color:'white'}} >$ {parseFloat(liveprice_BNB*0.00027169956).toFixed(3)}</h4>
        
        </Col>  <Col style={{paddingBottom:"-1rem"}}>
        <h3 style={{marginTop:"2rem"}}>EAGLEANT/INR</h3>

        <h1 style={{marginTop:"-1rem",color:'gold'}}>₹ 1.00</h1>
        <h4 style={{fontSize:"1.4rem",marginTop:"-1rem",color:'white'}} >$ {(1.00/conversion).toFixed(5)}</h4>
        
        </Col> <Col style={{paddingBottom:"-1rem"}}>
        <h3 style={{marginTop:"2rem"}}>EAGLE/INR</h3>

        <h1 style={{marginTop:"-1rem",color:'gold'}}>₹ 5.00</h1>
        <h4 style={{fontSize:"1.4rem",marginTop:"-1rem",color:'white'}} >$ {(5.00/conversion).toFixed(2)}</h4>
        
        </Col>
    </Row>
  
    <section class="service-section py-5">
  <div class="container">
    <div class="row justify-content-center py-3">
      <div class="col-md-8 col-12 text-center">
        <p class="service-main-heading">Features</p>
      </div>
    </div>
   <Row style={{alignContent:"center"}}>
   {
       features.map((element,i) => {
         return(
          <Col>
          <div class="icon-box">
            <i style={{color:"gold"}}class="fa fa-briefcase service-icon"></i>
            <p style= {{color:"black",fontSize:"2rem",fontWeight:"bold"}}class="service-title"><a href="#">{element.heading}</a></p>
            <p style= {{color:"black"}} class="service-para">{element.subheading}</p>
          </div>
        </Col>
         );
       })
     }   
      
    </Row>
  </div>
</section>
<section class="service-section py-5">
  <div class="container">
<div class="row justify-content-center py-3">
      <div class="col-md-8 col-12 text-center">
        <p class="service-main-heading">Powered By</p>
      </div>
    </div>

<Row style={{paddingLeft:"-2rem",marginRight:"-10rem"}}>
<Col><img height="100"  style={{marginTop:"1rem"}} src={ipfs}/></Col>
<Col><img  style={{marginTop:"1.5rem"}}  src={binance}/></Col>
<Col><img height="100" style={{marginTop:"1rem"}} src={eth}/></Col>
  <Col style={{marginTop:"-2rem"}}><img  style={{marginRight:"-3.5rem",maxWidth:"12.7rem"}} src={sarvvid}/></Col>
</Row>
</div>
</section>
{/* <div style={{width:"100%",height:"8rem",backgroundColor:"black"}}>
<h1 style={{marginTop:"5rem", textAlign:"center"}}>© Copyright Opulentia Cresco</h1>
</div>    */}
<div class="ticker-wrap">
<div class="ticker">
<div class="ticker__item">{livenews} 🎉</div>
</div>
</div>
</body>
    </>
  );
  }
 
}
