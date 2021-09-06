
import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import ChartView from './ChartView';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// reactstrap components
import Btc from 'cryptocurrency-icons/svg/icon/btc.svg';
import Eth from 'cryptocurrency-icons/svg/icon/eth.svg';
import Ticker from 'react-ticker'
import { Pie3D } from 'react-pie3d'
import Bnb from 'cryptocurrency-icons/svg/icon/bnb.svg';
import Mana from 'cryptocurrency-icons/svg/icon/mana.svg';
import Matic from 'cryptocurrency-icons/svg/icon/matic.svg';
import Ada from 'cryptocurrency-icons/svg/icon/ada.svg';
import Dot from 'cryptocurrency-icons/svg/icon/dot.svg';
import Sol from 'cryptocurrency-icons/svg/icon/sol.svg';
import Dgb from 'cryptocurrency-icons/svg/icon/dgb.svg';
import Grt from 'cryptocurrency-icons/svg/icon/grt.svg';
import Ksm from 'cryptocurrency-icons/svg/icon/ksm.svg';
import Doge from 'cryptocurrency-icons/svg/icon/doge.svg';
import usdt from './usdt.png'
import tfuel from './tfuel.png'
import uni from './uni.png'
import vet from './vet.png'
import ftt from './ftt.png'
import ftm from './ftm.png'
import alice from './alice.png'
import gtc from './gtc.png'
import axs from './axs.png'
import ata from './ata.png'
import rune from './rune.png'
import fil from './fil.png'
import link from './link.png'
import luna from './luna.png'
import theta from './theta.png'

import logo from './FInalCryptologo.png';

import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  FormGroup,
  Label,
  Input,
  Form,
  Table,
  Row,
  Col,
  CardText,
  CardSubtitle,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import ChartViewer from './ChartViewer';
// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";
import { Modal } from "react-bootstrap";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { FormControl,InputLabel,FormHelperText,Select } from '@material-ui/core';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { set, useForm } from "react-cool-form";  
import axios from "axios";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import './DashBoard.css';
import 'react-tabs/style/react-tabs.css';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import Chart from "chart.js";
import ReactFusioncharts from "react-fusioncharts";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Fab from '@material-ui/core/Fab';
// import MuiAutoComplete from "./MuiAutoComplete";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import NativeSelect from '@material-ui/core/NativeSelect';
import Tooltip from "@material-ui/core/Tooltip";
import swal from "sweetalert";
import LoadDash from "./load_dash";
import LoadDashMobile from "./loadDash_mobile";
import cryptologo from './FInalCryptologo.png';
import ruppee from './ruppee.png'
import Binance from "node-binance-api";
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from "react-switch";
import { PieChart } from 'react-minimal-pie-chart';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

const data_pie = [
  { value: 10, label: 'apples', color: 'red' }, 
  { value: 20, label: 'bananas', color: 'green' },
  { value: 30, label: 'oranges', color: 'blue' },
]
const all_socket = new WebSocket(`wss://stream.binance.com:9443/ws/!miniTicker@arr`);

const Field = ({ label, id, error, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} />
    {error && <p>{error}</p>}
  </div>
);
const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  fab1: {
    margin: 0,
    top: 'auto',
    borderRadius:5,
    background:"green",
    color:"white",
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    height:'50px',
    width:'8.5rem'
  },
  fab2: {
    margin: 0,
    top: 'auto',
    borderRadius:5,
    right: 'auto',
    background:"red",
    color:"white",
    bottom: 20,
    left: 20,
    position: 'fixed',
    height:'50px',
    width:'8.5rem'
  },
}));
const PrettoSlider = withStyles({
  root: {
    color: '#d4a537',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);



const initialPositionValue = "fixed";

function Dashboard(props) {


const [allorder,setallorders] = React.useState([])
  const [showModal, setShow] = React.useState(false);
  const [showModal1,setShow1]=React.useState(false);
  const [showModal2, setShow2] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1= () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
    
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const [buy_total_full ,setbuy_total_full]=React.useState(0);
  const [quant,setQuant]=React.useState([]);
  const [pricee,setPrice]=React.useState([]);
  const [finalQuants,setFinalQuants]=React.useState([]);
  const [finalPrices,setFinalPrices]=React.useState([]);
  const [trade_quantity,settrade_quantity]=React.useState(0);
  const [trade_price,settrade_price]=React.useState(0);
  const [age, setAge] = React.useState('');
  const [trade_symbol,settrade_symbol]=React.useState(0);
  const [trade_type,settrade_type]=React.useState(0);
  const [sell_quantity,setsell_quantity]=React.useState(0);
  const [continueselling,setcontinueselling] = React.useState(false)
  const [switchtrade,setswitchtrade] = React.useState(true)
  const [sell_price,setsell_price]=React.useState(0);
  const [width,setwidth] = React.useState(window.innerWidth)
  const [isOpen, setIsOpen] = React.useState(false);
  const [pair,setpair] = React.useState('BTC/USDT')
  const [tradingvalue,settradingvalue] = React.useState('BTCUSDT');
  const [buy_limit_amount,setbuy_limit_amount] = React.useState(0);
  const [coin_limit_amount,setcoin_limit_amount]=React.useState(0);
  const [buy_limit_price,setbuy_limit_price] = React.useState(0);
  const [buy_market_amount,setbuy_market_amount] = React.useState(0);
  const [buy_market_price,setbuy_market_price] = React.useState(0);
  const [ limit_buy_total,  setlimit_buy_total]=React.useState(0);
  const [mobileswitch1,setmobileswitch1] = React.useState(true)
  const [market_buy_total,setmarket_buy_totol]=React.useState(0);
  const [sell_limit_price,setsell_limit_price] = React.useState(0);
  const [full_trade_sell,set_full_trade_sell] = React.useState(0)
  const [sell_limit_amount,setsell_limit_amount] = React.useState(0);
  const [sell_market_price,setsell_market_price] = React.useState(0);
  const [sell_market_amount,setsell_market_amount] = React.useState(0);
  const [sell_limit_total,  setsell_limit_total]=React.useState(0);
  const [i,seti] = React.useState(1)
  const [sell_market_total,  setsell_market_total]=React.useState(0);
  const [valid,setvalid] = React.useState(true)
  const [valid_s,setvalid_s] = React.useState(true)
  const [btc_u_vol,setbtc_u_vol] = React.useState(0)
  const [btc_vol,setbtc_vol] = React.useState(0)
  const [eth_u_vol,seteth_u_vol] = React.useState(0)
  const [eth_vol,set_eth_vol] = React.useState(0)
  const [bnb_u_vol,setbnb_u_vol] = React.useState(0)
  const [bnb_vol,setbnb_vol] = React.useState(0)
  const [ant_u_vol,setant_u_vol] = React.useState(0)
  const [loadin_cont,setloadin_cont] = React.useState(false)
  const [ant_vol,setant_vol] = React.useState(0)
  const [live_vol,setlivevol] = React.useState(0)
  const [liveprice_BTC,setlive_BTC] = React.useState(0)
  const [liveprice_BTC_u,setlive_BTC_u] = React.useState(0)
  
  const [liveprice_KSM,setlive_KSM] = React.useState(0)
  const [liveprice_KSM_u,setlive_KSM_u] = React.useState(0)

  const [mobileport,setmobile_port] = React.useState(false)
  const [liveprice_ATA,setlive_ATA] = React.useState(0)
  const [liveprice_ATA_u,setlive_ATA_u] = React.useState(0)

  const [liveprice_MANA,setlive_MANA] = React.useState(0)
  const [liveprice_MANA_u,setlive_MANA_u] = React.useState(0)

  const [liveprice_DGB,setlive_DGB] = React.useState(0)
  const [liveprice_DGB_u,setlive_DGB_u] = React.useState(0)

  const [liveprice_FTM,setlive_FTM] = React.useState(0)
  const [liveprice_FTM_u,setlive_FTM_u] = React.useState(0)

  const [liveprice_ALICE,setlive_ALICE] = React.useState(0)
  const [liveprice_ALICE_u,setlive_ALICE_u] = React.useState(0)

  const [liveprice_GTC,setlive_GTC] = React.useState(0)
  const [liveprice_GTC_u,setlive_GTC_u] = React.useState(0)

  const [liveprice_MATIC,setlive_MATIC] = React.useState(0)
  const [liveprice_MATIC_u,setlive_MATIC_u] = React.useState(0)
  
  const [liveprice_AXS,setlive_AXS] = React.useState(0)
  const [liveprice_AXS_u,setlive_AXS_u] = React.useState(0)
  
  const [liveprice_FTT,setlive_FTT] = React.useState(0)
  const [liveprice_FTT_u,setlive_FTT_u] = React.useState(0)
  
  const [liveprice_SOL,setlive_SOL] = React.useState(0)
  const [liveprice_SOL_u,setlive_SOL_u] = React.useState(0)
  
  const [liveprice_RUNE,setlive_RUNE] = React.useState(0)
  const [liveprice_RUNE_u,setlive_RUNE_u] = React.useState(0)
  
  const [liveprice_UNI,setlive_UNI] = React.useState(0)
  const [liveprice_UNI_u,setlive_UNI_u] = React.useState(0)

  const [liveprice_DOT,setlive_DOT] = React.useState(0)
  const [liveprice_DOT_u,setlive_DOT_u] = React.useState(0)
  
  const [liveprice_VET,setlive_VET] = React.useState(0)
  const [liveprice_VET_u,setlive_VET_u] = React.useState(0)
  
  const [liveprice_TFUEL,setlive_TFUEL] = React.useState(0)
  const [liveprice_TFUEL_u,setlive_TFUEL_u] = React.useState(0)

  const [liveprice_GRT,setlive_GRT] = React.useState(0)
  const [liveprice_GRT_u,setlive_GRT_u] = React.useState(0)

  const [liveprice_ADA,setlive_ADA] = React.useState(0)
  const [liveprice_ADA_u,setlive_ADA_u] = React.useState(0)

  const [liveprice_FIL,setlive_FIL] = React.useState(0)
  const [liveprice_FIL_u,setlive_FIL_u] = React.useState(0)

  const [liveprice_LINK,setlive_LINK] = React.useState(0)
  const [liveprice_LINK_u,setlive_LINK_u] = React.useState(0)
  
  const [liveprice_LUNA,setlive_LUNA] = React.useState(0)
  const [liveprice_LUNA_u,setlive_LUNA_u] = React.useState(0)

  const [liveprice_THETA,setlive_THETA] = React.useState(0)
  const [liveprice_THETA_u,setlive_THETA_u] = React.useState(0)
  const [show_buy,setshow_buy] = React.useState(false)
  const [open_btc,setopen_btc] = React.useState(false)
  const [open_eth,setopen_eth] = React.useState(false)
  const [open_BNB,setopen_BNB] = React.useState(false)
  const [open_LUNA,setopen_LUNA] = React.useState(false)
  const [open_MATIC,setopen_MATIC] = React.useState(false)
  const [open_ADA,setopen_ADA] = React.useState(false)
  const [open_ATA,setopen_ATA] = React.useState(false)
  const [open_ALICE,setopen_ALICE] = React.useState(false)
  const [open_LINK,setopen_LINK] = React.useState(false)
  const [open_DGB,setopen_DGB] = React.useState(false)
  const [open_GTC,setopen_GTC] = React.useState(false)
  const [open_KSM,setopen_KSM] = React.useState(false)
  const [open_VET,setopen_VET] = React.useState(false)
  const [open_DOT,setopen_DOT] = React.useState(false)
  const [open_UNI,setopen_UNI] = React.useState(false)
  const [open_RUNE,setopen_RUNE] = React.useState(false)
  const [open_SOL,setopen_SOL] = React.useState(false)
  const [open_FTT,setopen_FTT] = React.useState(false)
  const [open_AXS,setopen_AXS] = React.useState(false)
  const [open_FIL,setopen_FIL] = React.useState(false)
  const [open_FTM,setopen_FTM] = React.useState(false)
  const [open_TFUEL,setopen_TFUEL] = React.useState(false)
  const [open_GRT,setopen_GRT] = React.useState(false)
  const [open_THETA,setopen_THETA] = React.useState(false)
  const [open_MANA,setopen_MANA] = React.useState(false)
  
  const [liveprice_BNB_u,setlive_BNB_u] = React.useState(0)
  const [liveprice_BNB,setlive_BNB] = React.useState(0)
  const [liveprice_ETH,setlive_ETH] = React.useState(0)
  const [liveprice_ETH_u,setlive_ETH_u] = React.useState(0)
  const [liveprice_ANTEAG,setlive_ANTEAG] = React.useState(0)
  const [liveprice_ANTEAG_u,setlive_ANTEAG_u] = React.useState(0)
  const [liveprice,setlive] = React.useState(0)
  const [conversion,setconversion] = React.useState(0);
  const [curr_quant,setcurr] = React.useState(0)
  const [bought_price,set_bought_price] = React.useState()
  const [myorders,setmyorder] = React.useState([]);
  const [fillorders,setfillorders] = React.useState([])
  const [book,setbook] = React.useState([]);
  const [book_s,setbook_s] = React.useState([]);
  const [port,setport] = React.useState(false)
  const [show_sell,setshow_sell] = React.useState(false)
  const [c_order,setc_order] = React.useState([]);
  const toggle = () => setIsOpen(!isOpen);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [BTC_per,setBTC_per] = React.useState(0)
  const [BNB_per,setBNB_per] = React.useState(0);
  const [ETH_per,setETH_per] = React.useState(0);
  const [LINK_per,setLINK_per] = React.useState(0)
  const [LUNA_per,setLUNA_per] = React.useState(0);
  const [THETA_per,setTHETA_per] = React.useState(0)
  const [GRT_per,setGRT_per] = React.useState(0);
  const [TFUEL_per,setTFUEL_per] = React.useState(0);
  const [KSM_per,setKSM_per] = React.useState(0)
  const [ADA_per,setADA_per] = React.useState(0);
  const [VET_per,setVET_per] = React.useState(0);
  const [DOT_per,setDOT_per] = React.useState(0)
  const [UNI_per,setUNI_per] = React.useState(0);
  const [RUNE_per,setRUNE_per] = React.useState(0);
  const [SOL_per,setSOL_per] = React.useState(0)
  const [FTT_per,setFTT_per] = React.useState(0);
  const [AXS_per,setAXS_per] = React.useState(0);  
  const [MATIC_per,setMATIC_per] = React.useState(0)
  const [GTC_per,setGTC_per] = React.useState(0);
  const [ALICE_per,setALICE_per] = React.useState(0);
  const [FIL_per,setFIL_per] = React.useState(0)
  const [ATA_per,setATA_per] = React.useState(0);
  const [FTM_per,setFTM_per] = React.useState(0)
  const [DGB_per,setDGB_per] = React.useState(0);
  const [MANA_per,setMANA_per] = React.useState(0);
  const [anteagle_pro,setanteagle_pro] = React.useState(false);
  // btc_socket.onmessage = evt => {
  //   const g = JSON.parse(evt.data)
  //   if(pair == "BTC/USDT"){
  //     setlive(g["c"])
  //     setlive_BTC_u(g["c"])
  //   }
  //   else if(pair = "BTC/INRD"){
  //     setlive(parseFloat(g["c"]*conversion))
  //     setlive_BTC(parseFloat(g["c"]*conversion))
  //   }
  // }
  // bnb_socket.onmessage = evt => {
  //   const g = JSON.parse(evt.data)
  //   if(pair == "BNB/USDT"){
  //     setlive(g["c"])
  //     setlive_BNB_u(g["c"])
  //   }
  //   else if(pair = "BNB/INRD"){
  //     setlive(parseFloat(g["c"]*conversion))
  //     setlive_BNB(parseFloat(g["c"]*conversion))
  //   }
  // }
  // eth_socket.onmessage = evt => {
  //   const g = JSON.parse(evt.data)
  //   if(pair == "ETH/USDT"){
  //     setlive(g["c"])
  //     setlive_ETH_u(g["c"])
  //   }
  //   else if(pair = "ETH/INRD"){
  //     setlive(parseFloat(g["c"]*conversion))
  //     setlive_ETH(parseFloat(g["c"]*conversion))
  //   }
  // }
  // theta_socket.onmessage = evt => {
  //   const g = JSON.parse(evt.data)
  //   if(pair == "THETA/USDT"){
  //     setlive(g["c"])
  //     setlive_THETA_u(g["c"])
  //   }
  //   else if(pair = "THETA/INRD"){
  //     setlive(parseFloat(g["c"]*conversion))
  //     setlive_THETA(parseFloat(g["c"]*conversion))
  //   }
  // }
  // mana_socket.onmessage = evt => {
  //   const g = JSON.parse(evt.data)
  //   if(pair == "MANA/USDT"){
  //     setlive(g["c"])
  //     setlive_MANA_u(g["c"])
  //   }
  //   else if(pair = "MANA/INRD"){
  //     setlive(parseFloat(g["c"]*conversion))
  //     setlive_MANA(parseFloat(g["c"]*conversion))
  //   }
  // }
  // alice_socket.onmessage = evt => {
  //   const g = JSON.parse(evt.data)
  //   if(pair == "ALICE/USDT"){
  //     setlive(g["c"])
  //     setlive_ALICE_u(g["c"])
  //   }
  //   else if(pair = "ALICE/INRD"){
  //     setlive(parseFloat(g["c"]*conversion))
  //     setlive_ALICE(parseFloat(g["c"]*conversion))
  //   }
  // }
  // tfuel_socket.onmessage = evt => {
  //   const g = JSON.parse(evt.data)
  //   if(pair == "TFUEL/USDT"){
  //     setlive(g["c"])
  //     setlive_TFUEL_u(g["c"])
  //   }
  //   else if(pair = "TFUEL/INRD"){
  //     setlive(parseFloat(g["c"]*conversion))
  //     setlive_TFUEL(parseFloat(g["c"]*conversion))
  //   }
  // }
  // ada_socket.onmessage = evt => {
  //   const g = JSON.parse(evt.data)
  //   if(pair == "ADA/USDT"){
  //     setlive(g["c"])
  //     setlive_ADA_u(g["c"])
  //   }
  //   else if(pair = "ADA/INRD"){
  //     setlive(parseFloat(g["c"]*conversion))
  //     setlive_ADA(parseFloat(g["c"]*conversion))
  //   }
  // }
  // ata_socket.onmessage = evt => {
  //   const g = JSON.parse(evt.data)
  //   if(pair == "ATA/USDT"){
  //     setlive(g["c"])
  //     setlive_ATA_u(g["c"])
  //   }
  //   else if(pair = "ATA/INRD"){
  //     setlive(parseFloat(g["c"]*conversion))
  //     setlive_ATA(parseFloat(g["c"]*conversion))
  //   }
  // }
  // link_socket.onmessage = evt => {
  //   const g = JSON.parse(evt.data)
  //   if(pair == "LINK/USDT"){
  //     setlive(g["c"])
  //     setlive_LINK_u(g["c"])
  //   }
  //   else if(pair = "LINK/INRD"){
  //     setlive(parseFloat(g["c"]*conversion))
  //     setlive_LINK(parseFloat(g["c"]*conversion))
  //   }
  // }
  // luna_socket.onmessage = evt => {
  //   const g = JSON.parse(evt.data)
  //   if(pair == "LUNA/USDT"){
  //     setlive(g["c"])
  //     setlive_LUNA_u(g["c"])
  //   }
  //   else if(pair = "LUNA/INRD"){
  //     setlive(parseFloat(g["c"]*conversion))
  //     setlive_LUNA(parseFloat(g["c"]*conversion))
  //   }
  // }
  // grt_socket.onmessage = evt => {
  //   const g = JSON.parse(evt.data)
  //   if(pair == "GRT/USDT"){
  //     setlive(g["c"])
  //     setlive_GRT_u(g["c"])
  //   }
  //   else if(pair = "GRT/INRD"){
  //     setlive(parseFloat(g["c"]*conversion))
  //     setlive_GRT(parseFloat(g["c"]*conversion))
  //   }
  // }
  // luna_socket.onmessage = evt => {
  //   const g = JSON.parse(evt.data)
  //   if(pair == "LUNA/USDT"){
  //     setlive(g["c"])
  //     setlive_LUNA_u(g["c"])
  //   }
  //   else if(pair = "LUNA/INRD"){
  //     setlive(parseFloat(g["c"]*conversion))
  //     setlive_LUNA(parseFloat(g["c"]*conversion))
  //   }
  // }
  // luna_socket.onmessage = evt => {
  //   const g = JSON.parse(evt.data)
  //   if(pair == "LUNA/USDT"){
  //     setlive(g["c"])
  //     setlive_LUNA_u(g["c"])
  //   }
  //   else if(pair = "LUNA/INRD"){
  //     setlive(parseFloat(g["c"]*conversion))
  //     setlive_LUNA(parseFloat(g["c"]*conversion))
  //   }
  // }
  // luna_socket.onmessage = evt => {
  //   const g = JSON.parse(evt.data)
  //   if(pair == "LUNA/USDT"){
  //     setlive(g["c"])
  //     setlive_LUNA_u(g["c"])
  //   }
  //   else if(pair = "LUNA/INRD"){
  //     setlive(parseFloat(g["c"]*conversion))
  //     setlive_LUNA(parseFloat(g["c"]*conversion))
  //   }
  // }


all_socket.onmessage = evt => {
  const g = JSON.parse(evt.data)
  for(let i=0;i<g.length;i++){
    if(g[i]["s"] == "BTCUSDT"){
     setlive_BTC(parseFloat(g[i]["c"]).toFixed(2))
     const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
     setBTC_per(temp)
     
    }
    if(g[i]["s"] == "BNBUSDT"){
      setlive_BNB(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setBNB_per(temp)
     
    }
    if(g[i]["s"] == "ETHUSDT"){
      setlive_ETH(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setETH_per(temp)
     
    }
    if(g[i]["s"]=="KSMUSDT"){
      setlive_KSM(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setKSM_per(temp)
    }
    if(g[i]["s"]=="ATAUSDT"){
      setlive_ATA(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setATA_per(temp)
    }
    if(g[i]["s"]=="MANAUSDT"){
      setlive_MANA(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setMANA_per(temp)
    }
    if(g[i]["s"]=="FTMUSDT"){
      setlive_FTM(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setFTM_per(temp)
    }
    if(g[i]["s"]=="DGBUSDT"){
      setlive_DGB(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setDGB_per(temp)
    }
    if(g[i]["s"]=="ALICEUSDT"){
      setlive_ALICE(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setALICE_per(temp)
    }
    if(g[i]["s"]=="GTCUSDT"){
      setlive_GTC(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setGTC_per(temp)
    }
    if(g[i]["s"]=="MATICUSDT"){
      setlive_MATIC(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setMATIC_per(temp)
    }
    if(g[i]["s"]=="AXSUSDT"){
      setlive_AXS(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setAXS_per(temp)
    }
    if(g[i]["s"]=="FTTUSDT"){
      setlive_FTT(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setFTT_per(temp)
    }
    if(g[i]["s"]=="SOLUSDT"){
      setlive_SOL(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setSOL_per(temp)
    }
    if(g[i]["s"]=="RUNEUSDT"){
      setlive_RUNE(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setRUNE_per(temp)
    }
    if(g[i]["s"]=="UNIUSDT"){
      setlive_UNI(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setUNI_per(temp)
    }
    if(g[i]["s"]=="DOTUSDT"){
      setlive_DOT(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setDOT_per(temp)
    }
    if(g[i]["s"]=="VETUSDT"){
      setlive_VET(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setVET_per(temp)
    }
    if(g[i]["s"]=="TFUELUSDT"){
      setlive_TFUEL(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setTFUEL_per(temp)
    }
    if(g[i]["s"]=="GRTUSDT"){
      setlive_GRT(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setGRT_per(temp)
    }
    if(g[i]["s"]=="ADAUSDT"){
      setlive_ADA(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setADA_per(temp)
    }
    if(g[i]["s"]=="FILUSDT"){
      setlive_FIL(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setFIL_per(temp)
    }
    if(g[i]["s"]=="LINKUSDT"){
      setlive_LINK(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setLINK_per(temp)
    }
    if(g[i]["s"]=="LUNAUSDT"){
      setlive_LUNA(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setLUNA_per(temp)
    }
    if(g[i]["s"]=="THETAUSDT"){
      setlive_THETA(parseFloat(g[i]["c"]).toFixed(2))
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setTHETA_per(temp)
    }


  }
}

  const toggle1 = () => setDropdownOpen(prevState => !prevState);
  const { form, use } = useForm({
    // (Strongly advise) Provide the default values just like we use React state
    defaultValues: { username: "", email: "", password: "" },
    // The event only triggered when the form is valid
    onSubmit: (values) => alert(JSON.stringify(values, undefined, 2))
  });
  // We can enable the "errorWithTouched" option to filter the error of an un-blurred field
  // Which helps the user focus on typing without being annoyed by the error message
  const errors = use("errors", { errorWithTouched: true });
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  const handleWindowSizeChange = () => {
    setwidth(window.innerWidth)
  };
  let canref = React.useRef(null);
  useEffect(()=>{
    
    window.addEventListener('resize', handleWindowSizeChange());
    setloadin_cont(true)
    setInterval(()=>{

      axios({
        method:"get",
        url: "https://api.exchangerate.host/convert?from=USD&to=INR"
      }).then(res=>{
        localStorage.setItem("conversion",res.data.info.rate)
        setconversion(res.data.info.rate)
        if(pair == "ANTEAG/USDT"){
          setlive(parseFloat(8.08*conversion).toFixed(2))
          setlive_ANTEAG_u(parseFloat(8.08/conversion).toFixed(2))
        }
        if(pair == "ANTEAG/INRD"){
          setlive(8.08)
          setlive_ANTEAG(8.08)
        }
      })
      // axios({
      //   method : 'get',
      //   url :`https://api.anteagle.tech/volume?pair=BTC/USDT`
      // }).then(res=>{
      //   if(res.data.volume){
      //     setbtc_u_vol(res.data.volume)
      //   }
      // })
      // axios({
      //   method : 'get',
      //   url :`https://api.anteagle.tech/volume?pair=BTC/INRD`
      // }).then(res=>{
      //   if(res.data.volume){
      //     setbtc_vol(res.data.volume)
      //   }
      // })
      // axios({
      //   method : 'get',
      //   url :`https://api.anteagle.tech/volume?pair=BNB/USDT`
      // }).then(res=>{
      //   if(res.data.volume){
      //     setbnb_u_vol(res.data.volume)
      //   }
      // })
      // axios({
      //   method : 'get',
      //   url :`https://api.anteagle.tech/volume?pair=BNB/INRD`
      // }).then(res=>{
      //   if(res.data.volume){
      //     setbnb_vol(res.data.volume)
      //   }
      // })
      // axios({
      //   method : 'get',
      //   url :`https://api.anteagle.tech/volume?pair=ANTEAG/USDT`
      // }).then(res=>{
      //   if(res.data.volume){
      //     setant_u_vol(res.data.volume)
      //   }
      // })
      // axios({
      //   method : 'get',
      //   url :`https://api.anteagle.tech/volume?pair=ANTEAG/INRD`
      // }).then(res=>{
      //   if(res.data.volume){
      //     setant_vol(res.data.volume)
      //   }
      // })
      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT` //`https://api.anteagle.tech/liveprice?pair=BTC/USDT`
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='BTC/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='BTC/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_BTC((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_BTC_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })
      //       axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=KSMUSDT` 
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='KSM/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='KSM/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_KSM((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_KSM_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })

      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=ATAUSDT`
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='ATA/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='ATA/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_ATA((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     (parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })


      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=MANAUSDT` 
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='MANA/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='MANA/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_MANA((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_MANA_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })


      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=DGBUSDT`
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='DGB/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='DGB/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_DGB((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_DGB_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })

      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=FTMUSDT` 
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='FTM/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='FTM/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_FTM((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_FTM_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })


      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=ALICEUSDT` 
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='ALICE/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='ALICE/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_ALICE((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_ALICE_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })

      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=GTCUSDT` 
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='GTC/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='GTC/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_GTC((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_GTC_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })

      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=MATICUSDT`
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='MATIC/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='MATIC/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_MATIC((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_MATIC_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })

      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=AXSUSDT` 
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='AXS/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='AXS/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_AXS((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_AXS_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })
      
      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=FTTUSDT` 
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='FTT/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='FTT/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_FTT((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_FTT_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })

      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT`
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='SOL/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='SOL/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_SOL((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_SOL_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })
      
      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=RUNEUSDT` 
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='RUNE/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='RUNE/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_RUNE((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_RUNE_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })

      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=UNIUSDT` 
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='UNI/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='UNI/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_UNI((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_UNI_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })

      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=DOTUSDT` 
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='DOT/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='DOT/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_DOT((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_DOT_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })

      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=VETUSDT` 
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='VET/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='VET/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_VET((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_VET_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })

      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=TFUELUSDT` 
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='TFUEL/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='TFUEL/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_TFUEL((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_TFUEL_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })

      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=GRTUSDT` 
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='GRT/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='GRT/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_GRT((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_GRT_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })

      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=ADAUSDT` 
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='ADA/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='ADA/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_ADA((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_ADA_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })

      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=FILUSDT` 
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='FIL/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='FIL/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_FIL((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_FIL_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })

      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=LINKUSDT` 
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='LINK/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='LINK/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_LINK((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_LINK_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })

      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=LUNAUSDT` 
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='LUNA/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='LUNA/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_LUNA((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_LUNA_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })

      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=THETAUSDT` 
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='THETA/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='THETA/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       console.log(localStorage.getItem("conversion"))
      //       // setlive_THETA((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_THETA_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })

   
      
      
      
      // axios({
      //   method:'get',
      //   url :  `https://api.binance.com/api/v3/ticker/price?symbol=BTCINR` //`https://api.anteagle.tech/liveprice?pair=BTC/USDT`
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='BTC/INRD'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     setlive_BTC(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })
      
      // axios({
      //   method:'get',
      //   url : `https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT`//`https://api.anteagle.tech/liveprice?pair=ETH/USDT`
      // }).then(res=>{
      //   if(res.data){
      //     if(localStorage.getItem("pair")=='ETH/USDT'){
      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='ETH/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       setlive_ETH((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_ETH_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })
     
      // axios({
      //   method:'get',
      //   url : `https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT`    //`https://api.anteagle.tech/liveprice?pair=BNB/USDT`
      // }).then(res=>{
       
      //   if(res.data){
      //     if(localStorage.getItem("pair")=="BNB/USDT"){

      //       setlive(parseFloat(res.data.price).toFixed(3))
      //     }
      //     else if(localStorage.getItem("pair")=='BNB/INRD'){
      //       setlive((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //       setlive_BNB((parseFloat(res.data.price)*localStorage.getItem("conversion")).toFixed(3))
      //     }
      //     setlive_BNB_u(parseFloat(res.data.price).toFixed(3))
      //   }
        
      // })
      axios({
        method : 'get',
        url : `https://api.anteagle.tech/orderbook?pair=${pair}`
      }).then(res2=>{
        var ans2 = []
        var ans3 = []
        for(let i =0;i<res2.data.length;i++){
          var temp = []
          var temp2 = []
          if(res2.data[i].side == 'BUY'){
            temp.push(res2.data[i].price)
            temp.push(res2.data[i].Amount.toFixed(3))
            temp.push((res2.data[i].price*res2.data[i].Amount).toFixed(3))
            temp.push(res2.data[i].pair)
            ans2.push(temp)
          }
          else{
            temp2.push(res2.data[i].price)
            temp2.push(res2.data[i].Amount.toFixed(3))
            temp2.push((res2.data[i].price*res2.data[i].Amount).toFixed(3))
            temp2.push(res2.data[i].pair)
            ans3.push(temp2)
          }
          
        }
        setbook(ans2)
        setbook_s(ans3)
      })
    axios({
        method:"post",
        url : `https://api.anteagle.tech/getorder?userid=${localStorage.getItem("userid")}`,
        headers:{
          'Accept' : 'application/json',
          Authtoken : "jkdhfjkdf"
        }
      }).then(({data})=>{

        var ans = []
        var ans1 = []
        var ans2 = []
        // console.log(data.data)
        for(let i=0;i<data.data.length;i++){
          var temp2 = []
          temp2.push(data.data[i].orderid)
          temp2.push(data.data[i].date)
          temp2.push(data.data[i].pair)
          temp2.push(data.data[i].type)
          temp2.push(data.data[i].side)
          temp2.push(data.data[i].price)
          temp2.push(data.data[i].Amount.toFixed(3))
          temp2.push(data.data[i].filled)
          temp2.push(data.data[i].total.toFixed(3))
          temp2.push(data.data[i].status)
   
          ans2.push(temp2)
          if(data.data[i].status == "FILLED"){
            var temp1 = []
          temp1.push(data.data[i].orderid)
          temp1.push(data.data[i].date)
          temp1.push(data.data[i].pair)
          temp1.push(data.data[i].type)
          temp1.push(data.data[i].side)
          temp1.push(data.data[i].price)
          temp1.push(data.data[i].Amount.toFixed(3))
          temp1.push(data.data[i].filled)
          temp1.push(data.data[i].total.toFixed(3))
         
          temp1.push(data.data[i].status)
          ans1.push(temp1)
          }
          else{
            var temp = []
          temp.push(data.data[i].orderid)
          temp.push(data.data[i].date)
          temp.push(data.data[i].pair)
          temp.push(data.data[i].type)
          temp.push(data.data[i].side)
          temp.push(data.data[i].price)
          temp.push(data.data[i].Amount.toFixed(3))
          temp.push(data.data[i].filled)
          temp.push(data.data[i].total.toFixed(3))
          temp.push(data.data[i].status)
          ans.push(temp)
          }
          
        } 
        setmyorder(ans)
        setfillorders(ans1)
        setallorders(ans2)
      })
      // setc_order(data.data)
     
      axios({
        method : "get",
        url : `https://api.anteagle.tech/allwallet?userid=${localStorage.getItem("userid")}`,
        headers : {
          'Accept' : "application/json"
        }
      }).then(res1=>{
        //console.log(res1.data.data)
        localStorage.setItem("BTC_Coins",res1.data.data.BTC_Coins)
      localStorage.setItem("BNB_Coins",res1.data.data.BNB_Coins)
      localStorage.setItem("ETH_Coins",res1.data.data.ETH_Coins)
      localStorage.setItem("ANTEAG_Coins",res1.data.data.ANT_Coins)
      localStorage.setItem("USDT_Coins",res1.data.data.USDT_Coins)
      localStorage.setItem("INRD_Coins",res1.data.data.INRD_Coins)
      localStorage.setItem("KSM_Coins",res1.data.data.KSM_Coins)
      localStorage.setItem("ATA_Coins",res1.data.data.ATA_Coins)
      localStorage.setItem("MANA_Coins",res1.data.data.MANA_Coins)
      localStorage.setItem("DGB_Coins",res1.data.data.DGB_Coins)
      localStorage.setItem("FTM_Coins",res1.data.data.FTM_Coins)
      localStorage.setItem("ALICE_Coins",res1.data.data.ALICE_Coins)
      localStorage.setItem("GTC_Coins",res1.data.data.GTC_Coins)
      localStorage.setItem("MATIC_Coins",res1.data.data.MATIC_Coins)
      localStorage.setItem("AXS_Coins",res1.data.data.AXS_Coins)
      localStorage.setItem("FTT_Coins",res1.data.data.FTT_Coins)
      localStorage.setItem("SOL_Coins",res1.data.data.SOL_Coins)
      localStorage.setItem("RUNE_Coins",res1.data.data.RUNE_Coins)
      localStorage.setItem("UNI_Coins",res1.data.data.UNI_Coins)
      localStorage.setItem("DOT_Coins",res1.data.data.DOT_Coins)
      localStorage.setItem("VET_Coins",res1.data.data.VET_Coins)
      localStorage.setItem("TFUEL_Coins",res1.data.data.TFUEL_Coins)
      localStorage.setItem("GRT_Coins",res1.data.data.GRT_Coins)
      localStorage.setItem("ADA_Coins",res1.data.data.ADA_Coins)
      localStorage.setItem("FIL_Coins",res1.data.data.FIL_Coins)
      localStorage.setItem("LINK_Coins",res1.data.data.LINK_Coins)
      localStorage.setItem("LUNA_Coins",res1.data.data.LUNA_Coins)
      localStorage.setItem("THETA_Coins",res1.data.data.THETA_Coins)
      

      })
      setloadin_cont(false)
       
    },2000)
    
  
  
  },[])

  const isMobile = width <= 900;
  if (isMobile) {
 ///  Calling API and modeling data for each chart ///
const btcData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}


// const cosmosData = async () => {
//   const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ATOM&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
//   const json = await response.json();
//   const data = json.Data.Data
//   const times = data.map(obj => obj.time)
//   const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
//   return {
//     times,
//     prices
//   }
// }


const ETHData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}



const BNBData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BNB&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}
const LINKData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=LINK&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}
const LUNAData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=LUNA&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}
const THETAData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=THETA&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}
const GRTData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=GRT&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}
const TFUELData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=TFUEL&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}
const KSMData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=KSM&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}
const ADAData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ADA&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}
const VETData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=VET&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}
const DOTData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=DOT&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}
const UNIData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=UNI&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}
const RUNEData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=RUNE&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}
const SOLData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=SOL&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}

const FTTData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=FTT&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}
const AXSData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=AXS&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}
const MATICData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=MATIC&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}
const GTCData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=GTC&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}
const ALICEData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ALICE&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}
const FILData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=FIL&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}
const FTMData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=FTM&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}
const DGBData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=DGB&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}
const MANAData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=MANA&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}
const ATAData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ATA&tsym=USD&limit=119&api_key=ab16b7fe525008413e309a829c72a8d42915737774cefe2b62d05fa5d34e98f9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => mobileswitch1 ? obj.high : (parseFloat(obj.high)*conversion).toFixed(2))
  return {
    times,
    prices
  }
}

// /// Error handling ///
// function checkStatus(response) {
//   if (response.ok) {
//     return Promise.resolve(response);
//   } else {
//     return Promise.reject(new Error(response.statusText));
//   }
// }



// /// Charts ///

const refHandler_BTC = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let btcChart = canvas.getContext( "2d" );

  let { times, prices } = await btcData()


  let gradient = btcChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createBtcChart
  createBtcChart = new Chart(btcChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}

const refHandler_ETH = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let ETHChart = canvas.getContext( "2d" );

  let { times, prices } = await ETHData()


  let gradient = ETHChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createETHChart
  createETHChart = new Chart(ETHChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}
const refHandler_LINK = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let LINKChart = canvas.getContext( "2d" );

  let { times, prices } = await LINKData()


  let gradient = LINKChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createLINKChart
  createLINKChart = new Chart(LINKChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}

const refHandler_LUNA = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let LUNAChart = canvas.getContext( "2d" );

  let { times, prices } = await LUNAData()


  let gradient = LUNAChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createLUNAChart
  createLUNAChart = new Chart(LUNAChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}

const refHandler_THETA = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let THETAChart = canvas.getContext( "2d" );

  let { times, prices } = await THETAData()


  let gradient = THETAChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createTHETAChart
  createTHETAChart = new Chart(THETAChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}
const refHandler_GRT = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let GRTChart = canvas.getContext( "2d" );

  let { times, prices } = await GRTData()


  let gradient = GRTChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createGRTChart
  createGRTChart = new Chart(GRTChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}
const refHandler_TFUEL = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let TFUELChart = canvas.getContext( "2d" );

  let { times, prices } = await TFUELData()


  let gradient = TFUELChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createTFUELChart
  createTFUELChart = new Chart(TFUELChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}
const refHandler_KSM = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let KSMChart = canvas.getContext( "2d" );

  let { times, prices } = await KSMData()


  let gradient = KSMChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createKSMChart
  createKSMChart = new Chart(KSMChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}
const refHandler_ADA = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let ADAChart = canvas.getContext( "2d" );

  let { times, prices } = await ADAData()


  let gradient = ADAChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createADAChart
  createADAChart = new Chart(ADAChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}
const refHandler_VET = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let VETChart = canvas.getContext( "2d" );

  let { times, prices } = await VETData()


  let gradient = VETChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createVETChart
  createVETChart = new Chart(VETChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}
const refHandler_DOT = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let DOTChart = canvas.getContext( "2d" );

  let { times, prices } = await DOTData()


  let gradient = DOTChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createDOTChart
  createDOTChart = new Chart(DOTChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}
const refHandler_BNB = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let BNBChart = canvas.getContext( "2d" );

  let { times, prices } = await BNBData()


  let gradient = BNBChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createBNBChart
  createBNBChart = new Chart(BNBChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}
const refHandler_UNI = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let UNIChart = canvas.getContext( "2d" );

  let { times, prices } = await UNIData()


  let gradient = UNIChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createUNIChart
  createUNIChart = new Chart(UNIChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}
const refHandler_RUNE = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let RUNEChart = canvas.getContext( "2d" );

  let { times, prices } = await RUNEData()


  let gradient = RUNEChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createRUNEChart
  createRUNEChart = new Chart(RUNEChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}
const refHandler_SOL = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let SOLChart = canvas.getContext( "2d" );

  let { times, prices } = await SOLData()


  let gradient = SOLChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createSOLChart
  createSOLChart = new Chart(SOLChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}
const refHandler_FTT = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let FTTChart = canvas.getContext( "2d" );

  let { times, prices } = await FTTData()


  let gradient = FTTChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createFTTChart
  createFTTChart = new Chart(FTTChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}
const refHandler_AXS = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let AXSChart = canvas.getContext( "2d" );

  let { times, prices } = await AXSData()


  let gradient = AXSChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createAXSChart
  createAXSChart = new Chart(AXSChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}
const refHandler_MATIC = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let MATICChart = canvas.getContext( "2d" );

  let { times, prices } = await MATICData()


  let gradient = MATICChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createMATICChart
  createMATICChart = new Chart(MATICChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}
const refHandler_GTC = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let GTCChart = canvas.getContext( "2d" );

  let { times, prices } = await GTCData()


  let gradient = GTCChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createGTCChart
  createGTCChart = new Chart(GTCChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}
const refHandler_ALICE = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let ALICEChart = canvas.getContext( "2d" );

  let { times, prices } = await ALICEData()


  let gradient = ALICEChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createALICEChart
  createALICEChart = new Chart(ALICEChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}
const refHandler_FIL = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let FILChart = canvas.getContext( "2d" );

  let { times, prices } = await FILData()


  let gradient = FILChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createFILChart
  createFILChart = new Chart(FILChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}
const refHandler_FTM = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let FTMChart = canvas.getContext( "2d" );

  let { times, prices } = await FTMData()


  let gradient = FTMChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createFTMChart
  createFTMChart = new Chart(FTMChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}
const refHandler_DGB = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let DGBChart = canvas.getContext( "2d" );

  let { times, prices } = await DGBData()


  let gradient = DGBChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createDGBChart
  createDGBChart = new Chart(DGBChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}
const refHandler_MANA = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let MANAChart = canvas.getContext( "2d" );

  let { times, prices } = await MANAData()


  let gradient = MANAChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createMANAChart
  createMANAChart = new Chart(MANAChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}
const refHandler_ATA = async(canvas) => {
  if(i > 1){
    return
  }
  if (!canvas) {
    return};

  let ATAChart = canvas.getContext( "2d" );

  let { times, prices } = await ATAData()


  let gradient = ATAChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;
  seti(2)
  let createATAChart
  createATAChart = new Chart(ATAChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}



// // async function printCosmosChart() {
// //   let { times, prices } = await cosmosData()

// //   let cosmosChart = document.getElementById('cosmosChart').getContext('2d');

// //   let gradient = cosmosChart.createLinearGradient(0, 0, 0, 400);

// //   gradient.addColorStop(0, 'rgba(27,30,54,.5)');
// //   gradient.addColorStop(.425, 'rgba(46,49,72,0)');

// //   Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
// //   Chart.defaults.global.defaultFontSize = 12;
// //   let createCosmosChart
// //   createCosmosChart = new Chart(cosmosChart, {
// //     type: 'line',
// //     data: {
// //       labels: times,
// //       datasets: [{
// //         label: "",
// //         data: prices,
// //         backgroundColor: gradient,
// //         borderColor: 'rgba(46,49,72,1)',
// //         borderJoinStyle: 'round',
// //         borderCapStyle: 'round',
// //         borderWidth: 3,
// //         pointRadius: 0,
// //         pointHitRadius: 10,
// //         lineTension: .2,
// //       }]
// //     },

// //     options: {
// //       title: {
// //         display: false,
// //         text: 'Heckin Chart!',
// //         fontSize: 35
// //       },

// //       legend: {
// //         display: false
// //       },

// //       layout: {
// //         padding: {
// //           left: 0,
// //           right: 0,
// //           top: 0,
// //           bottom: 0
// //         }
// //       },

// //       scales: {
// //         xAxes: [{
// //           display: false,
// //           gridLines: {}
// //         }],
// //         yAxes: [{
// //           display: false,
// //           gridLines: {}
// //         }]
// //       },

// //       tooltips: {
// //         callbacks: {
// //           //This removes the tooltip title
// //           title: function() {}
// //        },
// //         //this removes legend color
// //         displayColors: false,
// //         yPadding: 10,
// //         xPadding: 10,
// //         position: 'nearest',
// //         caretSize: 10,
// //         backgroundColor: 'rgba(255,255,255,.9)',
// //         bodyFontSize: 15,
// //         bodyFontColor: '#303030' 
// //       }
// //     }
// //   });
// // }


// // async function printEthereumChart() {
// //   let { times, prices } = await ethereumData()

// //   let ethereumChart = document.getElementById('ethereumChart').getContext('2d');

// //   let gradient = ethereumChart.createLinearGradient(0, 0, 0, 400);

// //   gradient.addColorStop(0, 'rgba(78,56,216,.5)');
// //   gradient.addColorStop(.425, 'rgba(118,106,192,0)');

// //   Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
// //   Chart.defaults.global.defaultFontSize = 12;

// //   let createEthereumChart
// //   createEthereumChart = new Chart(ethereumChart, {
// //     type: 'line',
// //     data: {
// //       labels: times,
// //       datasets: [{
// //         label: '$',
// //         data: prices,
// //         backgroundColor: gradient,
// //         borderColor: 'rgba(118,106,192,1)',
// //         borderJoinStyle: 'round',
// //         borderCapStyle: 'round',
// //         borderWidth: 3,
// //         pointRadius: 0,
// //         pointHitRadius: 10,
// //         lineTension: .2,
// //       }]
// //     },

// //     options: {
// //       title: {
// //         display: false,
// //         text: 'Heckin Chart!',
// //         fontSize: 35
// //       },

// //       legend: {
// //         display: false
// //       },

// //       layout: {
// //         padding: {
// //           left: 0,
// //           right: 0,
// //           top: 0,
// //           bottom: 0
// //         }
// //       },

// //       scales: {
// //         xAxes: [{
// //           display: false,
// //           gridLines: {}
// //         }],
// //         yAxes: [{
// //           display: false,
// //           gridLines: {}
// //         }]
// //       },

// //       tooltips: {
// //         callbacks: {
// //           //This removes the tooltip title
// //           title: function() {}
// //        },
// //         //this removes legend color
// //         displayColors: false,
// //         yPadding: 10,
// //         xPadding: 10,
// //         position: 'nearest',
// //         caretSize: 10,
// //         backgroundColor: 'rgba(255,255,255,.9)',
// //         bodyFontSize: 15,
// //         bodyFontColor: '#303030' 
// //       }
// //     }
// //   });
// // }


// /// Update current price ///
// // async function updateEthereumPrice() {
// //   let { times, prices } = await ethereumData()
// //   let currentPrice = prices[prices.length-1].toFixed(2);

// //   document.getElementById("ethPrice").innerHTML = "$" + currentPrice;
// // }

// // async function updateCosmosPrice() {
// //   let { times, prices } = await cosmosData()
// //   let currentPrice = prices[prices.length-1].toFixed(2);

// //   document.getElementById("atomPrice").innerHTML = "$" + currentPrice;
// // }

// async function updateBitcoinPrice() {
//   let { times, prices } = await btcData()
//   let currentPrice = prices[prices.length-1].toFixed(2);

//   document.getElementById("btcPrice").innerHTML = "$" + currentPrice;
// }

// // updateEthereumPrice()
// // updateCosmosPrice()
// updateBitcoinPrice()

// printBtcChart()
// // printCosmosChart()
// printEthereumChart()
    return ( 
      

      <div className="content" style={{marginLeft:"0.8rem"}}>
        {loadin_cont ? <LoadDashMobile /> : 
//         <>

      
//        </> 
<>
{
  anteagle_pro ? 

  <>
    <div style={{marginTop:'5rem'}}>
  <span>
  <CardText>AntEagle Pro</CardText>
<Switch onChange={(e)=>{
  setanteagle_pro(e)
}} checked={anteagle_pro} checkedIcon={false} uncheckedIcon={false}/>


  </span>
 

</div>
          <Row style={{marginBottom:"0.6rem",height:"7rem"}}>
        <div>
      <Navbar color="dark" light expand="md" style={{width:"100%"}}>
       
        <NavbarToggler style={{margin:"auto"}} onClick={toggle}>
        <span style={{fontSize:"2rem",color:"white",borderColor:"white"}}> {pair.substr(0,pair.indexOf("/"))} : {localStorage.getItem(`${pair.substr(0,pair.indexOf("/"))}_Coins`)} </span>
        <span style={{fontSize:"2rem",color:"white",borderColor:"white"}}> {pair.substr(pair.indexOf("/")+1,pair.length)} : {localStorage.getItem(`${pair.substr(pair.indexOf("/")+1,pair.length)}_Coins`)}  </span>

        
          
        </NavbarToggler>

       

          <Nav className="mr-auto" navbar>
            <NavItem style={{marginLeft:"1rem"}}> 
            
            <UncontrolledDropdown setActiveFromChild>
            
          <DropdownToggle tag="a" style={{fontSize:"1rem",borderRadius:"10px",borderWidth:'1px',borderColor:"white"}}  caret>
            {pair}   
          </DropdownToggle>
         
          <DropdownMenu style={{maxHeight:"12rem" ,overflow:"scroll"}}>
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('BTC/USDT');localStorage.setItem("pair",'BTC/USDT');settradingvalue('BTCUSDT');setlive(liveprice_BTC_u);setlivevol(btc_u_vol)}}>BTC/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('BTC/INRD');localStorage.setItem("pair",'BTC/INRD');settradingvalue('BTCINR');setlive(liveprice_BTC);setlivevol(btc_vol)}}>BTC/INRD</DropdownItem>
            
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ETH/USDT');localStorage.setItem("pair",'ETH/USDT');settradingvalue('ETHUSDT');setlive(liveprice_ETH_u);setlivevol(eth_u_vol)}}>ETH/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ETH/INRD');localStorage.setItem("pair",'ETH/INRD');settradingvalue('ETHINR');setlive(liveprice_ETH);setlivevol(eth_vol)}}>ETH/INRD</DropdownItem>
            
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('BNB/USDT');localStorage.setItem("pair",'BNB/USDT');settradingvalue('BNBUSDT');setlive(liveprice_BNB_u);setlivevol(bnb_u_vol)}}>BNB/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('BNB/INRD');localStorage.setItem("pair",'BNB/INRD');settradingvalue('BNBINR');setlive(liveprice_BNB);setlivevol(bnb_vol)}}>BNB/INR</DropdownItem>
            
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('KSM/USDT');localStorage.setItem("pair",'KSM/USDT');settradingvalue('KSMUSDT');setlive(liveprice_KSM_u);setlivevol(btc_u_vol)}}>KSM/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('KSM/INRD');localStorage.setItem("pair",'KSM/INRD');settradingvalue('KSMINR');setlive(liveprice_KSM);setlivevol(bnb_vol)}}>KSM/INRD</DropdownItem>
            
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('ATA/USDT');localStorage.setItem("pair",'ATA/USDT');settradingvalue('ATAUSDT');setlive(liveprice_ATA_u);setlivevol(btc_u_vol)}}>ATA/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ATA/INRD');localStorage.setItem("pair",'ATA/INRD');settradingvalue('ATAINR');setlive(liveprice_ATA);setlivevol(bnb_vol)}}>ATA/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('MANA/USDT');localStorage.setItem("pair",'MANA/USDT');settradingvalue('MANAUSDT');setlive(liveprice_MANA_u);setlivevol(btc_u_vol)}}>MANA/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('MANA/INRD');localStorage.setItem("pair",'MANA/INRD');settradingvalue('MANAINR');setlive(liveprice_MANA);setlivevol(bnb_vol)}}>MANA/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('DGB/USDT');localStorage.setItem("pair",'DGB/USDT');settradingvalue('DGBUSDT');setlive(liveprice_DGB_u);setlivevol(btc_u_vol)}}>DGB/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('DGB/INRD');localStorage.setItem("pair",'DGB/INRD');settradingvalue('DGBINR');setlive(liveprice_DGB);setlivevol(bnb_vol)}}>DGB/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('FTM/USDT');localStorage.setItem("pair",'FTM/USDT');settradingvalue('FTMUSDT');setlive(liveprice_FTM_u);setlivevol(btc_u_vol)}}>FTM/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('FTM/INRD');localStorage.setItem("pair",'FTM/INRD');settradingvalue('FTMINR');setlive(liveprice_FTM);setlivevol(bnb_vol)}}>FTM/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('ALICE/USDT');localStorage.setItem("pair",'ALICE/USDT');settradingvalue('ALICEUSDT');setlive(liveprice_ALICE_u);setlivevol(btc_u_vol)}}>ALICE/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ALICE/INRD');localStorage.setItem("pair",'ALICE/INRD');settradingvalue('ALICEINR');setlive(liveprice_ALICE);setlivevol(bnb_vol)}}>ALICE/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('GTC/USDT');localStorage.setItem("pair",'GTC/USDT');settradingvalue('GTCUSDT');setlive(liveprice_GTC_u);setlivevol(btc_u_vol)}}>GTC/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('GTC/INRD');localStorage.setItem("pair",'GTC/INRD');settradingvalue('GTCINR');setlive(liveprice_GTC);setlivevol(bnb_vol)}}>GTC/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('MATIC/USDT');localStorage.setItem("pair",'MATIC/USDT');settradingvalue('MATICUSDT');setlive(liveprice_MATIC_u);setlivevol(btc_u_vol)}}>MATIC/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('MATIC/INRD');localStorage.setItem("pair",'MATIC/INRD');settradingvalue('MATICINR');setlive(liveprice_MATIC);setlivevol(bnb_vol)}}>MATIC/INRD</DropdownItem>
          
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('AXS/USDT');localStorage.setItem("pair",'AXS/USDT');settradingvalue('AXSUSDT');setlive(liveprice_AXS_u);setlivevol(btc_u_vol)}}>AXS/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('AXS/INRD');localStorage.setItem("pair",'AXS/INRD');settradingvalue('AXSINR');setlive(liveprice_AXS);setlivevol(bnb_vol)}}>AXS/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('FTT/USDT');localStorage.setItem("pair",'FTT/USDT');settradingvalue('FTTUSDT');setlive(liveprice_FTT_u);setlivevol(btc_u_vol)}}>FTT/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('FTT/INRD');localStorage.setItem("pair",'FTT/INRD');settradingvalue('FTTINR');setlive(liveprice_FTT);setlivevol(bnb_vol)}}>FTT/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('SOL/USDT');localStorage.setItem("pair",'SOL/USDT');settradingvalue('SOLUSDT');setlive(liveprice_SOL_u);setlivevol(btc_u_vol)}}>SOL/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('SOL/INRD');localStorage.setItem("pair",'SOL/INRD');settradingvalue('SOLINR');setlive(liveprice_SOL);setlivevol(bnb_vol)}}>SOL/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('RUNE/USDT');localStorage.setItem("pair",'RUNE/USDT');settradingvalue('RUNEUSDT');setlive(liveprice_RUNE_u);setlivevol(btc_u_vol)}}>RUNE/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('RUNE/INRD');localStorage.setItem("pair",'RUNE/INRD');settradingvalue('RUNEINR');setlive(liveprice_RUNE);setlivevol(bnb_vol)}}>RUNE/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('UNI/USDT');localStorage.setItem("pair",'UNI/USDT');settradingvalue('UNIUSDT');setlive(liveprice_UNI_u);setlivevol(btc_u_vol)}}>UNI/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('UNI/INRD');localStorage.setItem("pair",'UNI/INRD');settradingvalue('UNIINR');setlive(liveprice_UNI);setlivevol(bnb_vol)}}>UNI/INRD</DropdownItem>
            
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('DOT/USDT');localStorage.setItem("pair",'DOT/USDT');settradingvalue('DOTUSDT');setlive(liveprice_DOT_u);setlivevol(btc_u_vol)}}>DOT/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('DOT/INRD');localStorage.setItem("pair",'DOT/INRD');settradingvalue('DOTINR');setlive(liveprice_DOT);setlivevol(bnb_vol)}}>DOT/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('VET/USDT');localStorage.setItem("pair",'VET/USDT');settradingvalue('VETUSDT');setlive(liveprice_VET_u);setlivevol(btc_u_vol)}}>VET/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('VET/INRD');localStorage.setItem("pair",'VET/INRD');settradingvalue('VETINR');setlive(liveprice_VET);setlivevol(bnb_vol)}}>VET/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('TFUEL/USDT');localStorage.setItem("pair",'TFUEL/USDT');settradingvalue('TFUELUSDT');setlive(liveprice_TFUEL_u);setlivevol(btc_u_vol)}}>TFUEL/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('TFUEL/INRD');localStorage.setItem("pair",'TFUEL/INRD');settradingvalue('TFUELINR');setlive(liveprice_TFUEL);setlivevol(bnb_vol)}}>TFUEL/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('GRT/USDT');localStorage.setItem("pair",'GRT/USDT');settradingvalue('GRTUSDT');setlive(liveprice_GRT_u);setlivevol(btc_u_vol)}}>GRT/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('GRT/INRD');localStorage.setItem("pair",'GRT/INRD');settradingvalue('GRTINR');setlive(liveprice_GRT);setlivevol(bnb_vol)}}>GRT/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('ADA/USDT');localStorage.setItem("pair",'ADA/USDT');settradingvalue('ADAUSDT');setlive(liveprice_ADA_u);setlivevol(btc_u_vol)}}>ADA/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ADA/INRD');localStorage.setItem("pair",'ADA/INRD');settradingvalue('ADAINR');setlive(liveprice_ADA);setlivevol(bnb_vol)}}>ADA/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('FIL/USDT');localStorage.setItem("pair",'FIL/USDT');settradingvalue('FILUSDT');setlive(liveprice_FIL_u);setlivevol(btc_u_vol)}}>FIL/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('FIL/INRD');localStorage.setItem("pair",'FIL/INRD');settradingvalue('FILINR');setlive(liveprice_FIL);setlivevol(bnb_vol)}}>FIL/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('LINK/USDT');localStorage.setItem("pair",'LINK/USDT');settradingvalue('LINKUSDT');setlive(liveprice_LINK_u);setlivevol(btc_u_vol)}}>LINK/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('LINK/INRD');localStorage.setItem("pair",'LINK/INRD');settradingvalue('LINKINR');setlive(liveprice_LINK);setlivevol(bnb_vol)}}>LINK/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('LUNA/USDT');localStorage.setItem("pair",'LUNA/USDT');settradingvalue('LUNAUSDT');setlive(liveprice_LUNA_u);setlivevol(btc_u_vol)}}>LUNA/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('LUNA/INRD');localStorage.setItem("pair",'LUNA/INRD');settradingvalue('LUNAINR');setlive(liveprice_LUNA);setlivevol(bnb_vol)}}>LUNA/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('THETA/USDT');localStorage.setItem("pair",'THETA/USDT');settradingvalue('THETAUSDT');setlive(liveprice_FIL_u);setlivevol(btc_u_vol)}}>THETA/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('THETA/INRD');localStorage.setItem("pair",'THETA/INRD');settradingvalue('THETAINR');setlive(liveprice_FIL);setlivevol(bnb_vol)}}>THETA/INRD</DropdownItem>
            
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ANTEAG/USDT');localStorage.setItem("pair",'ANTEAG/USDT');settradingvalue('ANTEAGUSDT');setlive(liveprice_ANTEAG_u);setlivevol(ant_u_vol)}}>ANTEAG/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('ANTEAG/INRD');localStorage.setItem("pair",'ANTEAG/INRD');settradingvalue('ANTEAGINR');setlive(liveprice_ANTEAG);setlivevol(ant_vol)}}>ANTEAG/INRD</DropdownItem>
          
          </DropdownMenu>
        </UncontrolledDropdown>
            </NavItem>
            <Collapse isOpen={isOpen} navbar>      
            <NavItem style={{marginLeft:"1rem"}}>
              <CardText>Current {pair.substr(0,pair.indexOf('/'))} Price</CardText><CardText style={{color:"green",fontWeight:"bold"}}>{pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2)} {pair.substr(pair.indexOf('/')+1,pair.length)}</CardText>
            </NavItem>
            {/* <NavItem style={{marginLeft:"1rem"}}>
              <CardText>24 hour {pair.substr(0,pair.indexOf('/'))} Volume</CardText><CardText style={{color:"green",fontWeight:"bold parseFloat(THETA_per) >0 ? 'green' : 'red'"}}>{live_vol} {pair.substr(pair.indexOf('/')+1,pair.length)}</CardText>
            </NavItem> */}
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>BTC Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("BTC_Coins")}</CardText>
            </NavItem>
            
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>KSM Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("KSM_Coins")}</CardText>
            </NavItem>
            
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>ATA Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("ATA_Coins")}</CardText>
            </NavItem>
            
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>MANA Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("MANA_Coins")}</CardText>
            </NavItem>
            
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>DGB Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("DGB_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>FTM Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("FTM_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>ALICE Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("ALICE_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>GTC Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("GTC_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>MATIC Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("MATIC_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>AXS Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("AXS_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>FTT Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("FTT_Coins")}</CardText>
            </NavItem>


            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>SOL Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("SOL_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>RUNE Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("RUNE_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>UNI Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("UNI_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>DOT Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("DOT_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>VET Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("VET_Coins")}</CardText>
            </NavItem>
            
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>TFUEL Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("TFUEL_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>GRT Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("GRT_Coins")}</CardText>
            </NavItem>
            
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>ADA Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("ADA_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>FIL Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("FIL_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>LINK Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("LINK_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>LUNA Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("LUNA_Coins")}</CardText>
            </NavItem>

            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>THETA Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("THETA_Coins")}</CardText>
            </NavItem>

           
            
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>ETH Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("ETH_Coins")}</CardText>
            </NavItem>
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>USDT Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("USDT_Coins")}</CardText>
            </NavItem>
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>ANTEAG Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("ANTEAG_Coins")}</CardText>
            </NavItem>
            <NavItem style={{marginLeft:"1rem"}}>
            <CardText>INRD Wallet</CardText><CardText style={{color:"yellow"}} >{localStorage.getItem("INRD_Coins")}</CardText>
            </NavItem>


</Collapse>          
       
</Nav>
         
        
      </Navbar>
    </div>
        </Row>
       
{pair == 'ANTEAG/USDT' || pair == 'ANTEAG/INRD' ? <ChartViewer  className="apexcharts-tooltip"/>: 
<TradingViewWidget
    symbol={tradingvalue}
    theme={Themes.DARK}
    locale="en"
    width="100%"
    height="800vh"
  />}


      
        <Row>
         
          <Col className="mr-auto ml-auto" lg="6">

          </Col>
          <Col lg="6">
           
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
             <h3> Order Book (BUY)</h3>
              </CardHeader>
              <CardBody>
   
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Price</th>
                      <th>Amount</th>
                      <th>Total</th>
                      <th>pair</th>
                    </tr>
                  </thead>
                  <tbody>
                    {book.map((ans1,i)=>{
                      return(
                        <tr>
                          {ans1.map((res1,i)=>{
                            return(
                              <td>{res1}</td>
                            )
                          })}
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
               
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
             <h3> Order Book (SELL)</h3>
              </CardHeader>
              <CardBody>
   
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Price</th>
                      <th>Amount</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                  {book_s.map((ans1,i)=>{
                      return(
                        <tr>
                          {ans1.map((res1,i)=>{
                            return(
                              <td>{res1}</td>
                            )
                          })}
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
               
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Col xs="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Order Table</CardTitle>
              </CardHeader>
              <CardBody>
              <Tabs>
                <TabList>
                  <Tab>Open Orders({myorders.length})</Tab>
                  <Tab>Trade History</Tab>
                  <Tab>Order History ({allorder.length})</Tab>
                  
                </TabList>
                <TabPanel>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                    <th>Order ID</th>
                      <th>Date</th>
                      <th>Pair</th>
                      <th>type</th>
                      <th>Side</th>
                      <th>Price</th>
                      <th> Amount</th>
                      <th>Filled</th>
                      <th>Total</th>
                      <th>status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                
                 {myorders.map((ans,i)=>{
                   return(
                    <tr>
                      {  ans.map((res,i)=>{
                    return(
                      <td>{res}</td>
                    )
                   })}
                  <td><Button title="Cancel" onClick={()=>{
                    axios({
                      method:'post',
                      url : `https://api.anteagle.tech/cancel?userid=${localStorage.getItem("userid")}`,
                      headers:{
                        "Accept": "application/json, text/plain, */*",
                        'Content-type' : "application/json"
                      },
                      data : JSON.stringify({
                        date : ans[0],
                        pair : ans[1],
                        type : ans[2],
                        side : ans[3],
                        price : ans[4],
                        Amount : ans[5],
                        filled : ans[6],
                        total : ans[7],
                        status : ans[8],
                        
                      })
                    }).then(res=>{
                      //console.log(res.data)
                      swal("Canceled","Your order Canceled Successfully","success")
                    })
                  }}>Cancel</Button></td>
                       </tr>
                   )
                 
                      
                 })}
               
                    
                  </tbody>
                </Table>
                </TabPanel>
                <TabPanel>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                    <th>Order ID</th>
                      <th>Date</th>
                      <th>Pair</th>
                      <th>type</th>
                      <th>Side</th>
                      <th>Price</th>
                      <th> Amount</th>
                      <th>Filled</th>
                      <th>Total</th>
                      <th>status</th>
                    </tr>
                  </thead>
                  <tbody>
                
                 {allorder.map((ans,i)=>{
                   return(
                    <tr>
                      {  ans.map((res,i)=>{
                    return(
                      <td>{res}</td>
                    )
                   })}
                 
                       </tr>
                   )
                 
                      
                 })}
               
                    
                  </tbody>
                </Table>
                </TabPanel>
                <TabPanel>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                    <th>Order ID</th>
                      <th>Date</th>
                      <th>Pair</th>
                      <th>type</th>
                      <th>Side</th>
                      <th>Price</th>
                      <th> Amount</th>
                      <th>Filled</th>
                      <th>Total</th>
                      <th>status</th>
                    </tr>
                  </thead>
                  <tbody>
                
                 {fillorders.map((ans,i)=>{
                   return(
                    <tr>
                      {  ans.map((res,i)=>{
                    return(
                      <td>{res}</td>
                    )
                   })}
                 
                       </tr>
                   )
                 
                      
                 })}
               
                    
                  </tbody>
                </Table>
                </TabPanel>
               </Tabs>
              </CardBody>
            </Card>
          </Col>
          <Modal show={showModal} onHide={handleClose}>
        
        
        <Card className="card-chart">
              
              <CardBody>

                 <Tabs>
                    <TabList>
                      <Tab>Single Trade</Tab>
                      <Tab>Fulltrade</Tab>
                    </TabList>
                    <TabPanel>
                    <Tabs>
                    <CardHeader>
                
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  BUY
                </CardTitle>
              </CardHeader>
    <TabList>
      <Tab>Limit</Tab>
      <Tab>Market</Tab>
    </TabList>

    <TabPanel>
    <Form >
    <Label>Price</Label>
    <Input  onChange={(event)=>{
      setbuy_limit_price(parseFloat(event.target.value) )

    }} placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`}></Input>
    <Label>Amount</Label>
   
    
    <Input invalid={!valid} style={{color:"white"}} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} disabled={true} value={buy_limit_amount} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
     if(parseFloat(event.target.value*buy_limit_price)>parseFloat(localStorage.getItem(curr))){
      setvalid(false)
     }
     else{
      setvalid(true)
      // setlimit_buy_total(parseFloat(event.target.value)*parseFloat(buy_limit_price))
     }
      
    }}></Input>

      <Label>Total</Label>
   <Input invalid={!valid} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      
     if(parseFloat(event.target.value)>parseFloat(localStorage.getItem(curr))){
        setvalid(false)
     }
     else{
      setvalid(true)
    
      setbuy_limit_amount(parseFloat(parseFloat(event.target.value) /parseFloat(buy_limit_price)) )
     }
      
    }}></Input>

    <Button disabled={!valid} onClick={()=>{
      axios({
        method:"POST",
        url:"https://api.anteagle.tech/neworder",    
        headers:{
          "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Limit",
          side : "BUY",
          price : buy_limit_price,
          Amount : buy_limit_amount,
          filled : "0.0",
          total : buy_limit_price * buy_limit_amount
        }),
      }).then(res=>{})
    
      if(pair[pair.length-1] == 'T'){
        axios({
          method:"POST",
          url:"https://api.anteagle.tech/neworder",
          headers:{
            "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
            "Content-Type": "application/json",
            Authtoken:"sfsfsff"
          },
          data: JSON.stringify({
            userid : localStorage.getItem("userid"),
            date: "2021-06-21",
            pair: pair.replace("USDT","INRD"),
            type : "Limit",
            side : "BUY",
            price : buy_limit_price*conversion,
            Amount : buy_limit_amount,
            filled : "0.0",
            total : buy_limit_price*conversion*buy_limit_amount
          }),
        }).then(res=>{console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"})
      }
      else{
        axios({
          method:"POST",
          url:"https://api.anteagle.tech/neworder",
          headers:{
            "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
            "Content-Type": "application/json",
            Authtoken:"sfsfsff"
          },
          data: JSON.stringify({
            userid : localStorage.getItem("userid"),
            date: "2021-06-21",
            pair: pair.replace("INRD","USDT"),
            type : "Limit",
            side : "BUY",
            price : buy_limit_price/conversion,
            Amount : buy_limit_amount,
            filled : "0.0",
            total : (buy_limit_price/conversion)*buy_limit_amount
          }),
        }).then(res=>{console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"})
      }

      
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}`
      //console.log(parseFloat(localStorage.getItem(`${curr}_Coins`)) - buy_limit_price*buy_limit_amount)
      const end = parseFloat(localStorage.getItem(`${curr}_Coins`)) - buy_limit_price*buy_limit_amount;
      const range=-9999;                                     //add range
      if( end < 0 && end > range){
        alert("Are you sure that you want to proceed further?");
        var te = parseFloat(localStorage.getItem(`${curr}_Debt`));
        if(te === null){
          te = 0;
        }
        localStorage.setItem(`${curr}_Coins`,end);
        localStorage.setItem(`${curr}_Debt `,end+te);        //set debt
        //console.log("The debt is "+end+te);
      }
       
      else if(end<range) alert("Cannot go beyond this range"); 
      else{
        localStorage.setItem(`${curr}_Coins`,end)
        
      }

      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${end}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json",
        }
      }).then(res=>{
        //console.log(res.data)
      })
    }}>Submit</Button>
    </Form>
    </TabPanel>
    <TabPanel>
    <Form >
    <Label>Price</Label>
    <Input placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} style={{color:"white"}} value={pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2)} disabled onChange={(event)=>{
      setbuy_market_price(event.target.value)
    }}></Input>
    <Label>Amount</Label>
    <Input  disabled={true} style={{color:"white"}} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={buy_market_amount} onChange={(event)=>{
      setbuy_market_amount(event.target.value)
    }} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`}></Input>

      <Label>Total</Label>
   <Input invalid={!valid} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
    setbuy_market_price(parseFloat(pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2)))
     if(parseFloat(event.target.value)>parseFloat(localStorage.getItem(curr))){
      setvalid(false)
      
     }
     else{
      setvalid(true)
      
      setbuy_market_amount(parseFloat(event.target.value)/parseFloat(buy_market_price))
     }
      
    }}></Input>
    <Button  disabled={!valid} onClick={()=>{
      axios({
        method:"POST",
        url:"https://api.anteagle.tech/neworder",
        headers:{
          "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Market",
          side : "BUY",
          price : buy_market_price,
          Amount : parseFloat(buy_market_amount).toFixed(5),
          filled : "0.0",
          total : buy_market_price*buy_market_amount
        }),
      }).then(res=>{console.log(res.data)})
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}`
      const tem = parseFloat(localStorage.getItem(`${curr}_Coins`)) - (parseFloat(buy_market_price)*parseFloat(buy_market_amount))
      alert(parseFloat(localStorage.getItem(`${curr}_Coins`)))
      alert(tem)
      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${tem}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json",
        }
      }).then(res=>{
        console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"
      })
    }}>Submit</Button>
    </Form>
    </TabPanel>
  </Tabs>

                    </TabPanel>
                    <TabPanel>
                 
                    <Row > {/* fulltrade */}
   
   { switchtrade ?
   <Col className="mr-auto ml-auto" lg="6">
       <Tabs>
   <TabList>
     <Tab>Limit</Tab>
     <Tab>Market</Tab>
   </TabList>

   <TabPanel>
          <Card className="card-chart">
            <CardHeader>
              
              <CardTitle tag="h3">
                <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                BUY
              </CardTitle>
            </CardHeader>
            <CardBody>
           
   
             
             <Form >
  <Label>Price</Label>
   <Input  onChange={(event)=>{
     setbuy_limit_price(parseFloat(event.target.value) )
     var tempPrice=pricee;
     tempPrice.push(event.target.value);
     setPrice(tempPrice);

   }} placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`}></Input>
   <Label>Amount</Label>
  
   
   <Input invalid={!valid}  style={{color:"white"}} disabled={true} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={buy_limit_amount} onChange={(event)=>{
     const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
    if(parseFloat(event.target.value*buy_limit_price)>parseFloat(localStorage.getItem(curr))){
     setvalid(false)
    }
    else{
     setvalid(true)
     //setbuy_limit_amount(parseFloat(event.target.value))
     var tempQuant=quant;
     tempQuant.push(event.target.value);
     setQuant(tempQuant);
    }
     
   }}></Input>

     <Label>Total</Label>
  <Input invalid={!valid} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
     const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
     //alert(curr)
    if(parseFloat(event.target.value)>parseFloat(localStorage.getItem(curr))){
       setvalid(false)
    }
    else{
     setvalid(true)
     
     setbuy_limit_amount(parseFloat(parseFloat(event.target.value) /parseFloat(buy_limit_price)) )
     var tempQuant=quant;
     tempQuant.push(parseFloat(event.target.value)/parseFloat(buy_limit_price));
     setQuant(tempQuant);
    }
     
   }}></Input>

 
 
  <Button type="reset" disabled={!valid} onClick={()=>{
   
    
   
   const tempQ=finalQuants;
   tempQ.push(quant[quant.length-1])
   const tempP=finalPrices;
   tempP.push(pricee[pricee.length-1])
   localStorage.setItem(`purchased_quantity_${pair}`,parseFloat(quant[quant.length-1]))
   setFinalQuants(tempQ)
   setFinalPrices(tempP)
   setQuant([])
   setPrice([])
    //console.log("final quant is",finalQuants,"final price is",finalPrices);
   setcurr(quant)
   set_bought_price(pricee)
    setswitchtrade(false)
    
  }}>Submit</Button>
  </Form>
  

  
             </CardBody>
           </Card>
           </TabPanel>
           <TabPanel>
           <Card className="card-chart">
            <CardHeader>
              
              <CardTitle tag="h3">
                <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                BUY
              </CardTitle>
            </CardHeader>
            <CardBody>
           
   
             
             <Form >
             <Label>Price</Label>
  <Input disabled style={{color:"white"}}  type="number" step="any" value={pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2)} onChange={(event)=>{
     var tempPrice=pricee;
     tempPrice.push(event.target.value);
     setPrice(tempPrice);
     // settrade_price(parseFloat(event.target.value) )

   }} ></Input>
  <Label>Amount</Label>
  <Input   value={buy_market_amount} disabled={true} style={{color:"white"}} type="number" step="any" name="quantity"  onChange={(event)=>{
     var tempQuant=quant;
     tempQuant.push(event.target.value);
     setQuant(tempQuant);
     // settrade_quantity(parseFloat(event.target.value) )

   }}> </Input>

 
 <Label>Total</Label>
  <Input invalid={!valid} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
     const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
     
    if(parseFloat(event.target.value)>parseFloat(localStorage.getItem(curr))){
       setvalid(false)
    }
    else{
     setvalid(true)
    
     setbuy_market_amount(parseFloat(parseFloat(event.target.value) /parseFloat(pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2))).toFixed(4) )
     var tempQuant=quant;
     tempQuant.push(parseFloat(parseFloat(event.target.value) /parseFloat(pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2))).toFixed(4) );
     setQuant(tempQuant);
    }
     
   }}></Input>
  <Button type="reset" disabled={!valid} onClick={()=>{
   
    
    var tempPrice=pricee;
    tempPrice.push(pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2));
    setPrice(tempPrice);
   const tempQ=finalQuants;
   tempQ.push(quant[quant.length-1])
   const tempP=finalPrices;
   tempP.push(pricee[pricee.length-1])
   localStorage.setItem(`purchased_quantity_${pair}`,parseFloat(quant[quant.length-1]))
   setFinalQuants(tempQ)
   setFinalPrices(tempP)
   setQuant([])
   setPrice([])
    //console.log("final quant is",finalQuants,"final price is",finalPrices);
   setcurr(quant)
   set_bought_price(pricee)
    setswitchtrade(false)
    
  }}>Submit</Button>
  </Form>
  

  
             </CardBody>
           </Card>
           </TabPanel>
           </Tabs>
         </Col>
     :
         <Col className="mr-auto ml-auto" lg="6">
          <Card className="card-chart">
            <CardHeader>
              
              <CardTitle tag="h3">
                <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                Sell
              </CardTitle>
              {/* <section>
           <label>MUI autocomplete</label>
           <MuiAutoComplete control={control} />
         </section> */}
          <FormControl variant="outlined" className={classes.formControl}>
       <InputLabel id="demo-simple-select-outlined-label">TYPE</InputLabel>
       <Select
         labelId="demo-simple-select-outlined-label"
         id="demo-simple-select-outlined"
         value={age}
         onChange={(e)=>{
           setAge(e.target.value)
         }}
         label="Age"
       >
         <MenuItem value={'STOP LOSS'}>STOP LOSS</MenuItem>
         <MenuItem value={'TAKE PROFIT'}>TAKE PROFIT</MenuItem>
   
       </Select>
     </FormControl>
            </CardHeader>
            <CardBody>
           
             <Tabs>
             
             <Form >
 
  <Label>Selling Price</Label>
  <Input  type="number" step="any" name="price_sell" onChange={(event)=>{
     const tempPrice=pricee;
     tempPrice.push(event.target.value)
     setPrice(tempPrice)
     // setsell_price(parseFloat(event.target.value) )

   }}></Input>

<Label>Selling Amount</Label>
  <Input style={{color:"white"}} disabled type="number" value={full_trade_sell} name="quantity_sell" onChange={(event)=>{
     if(parseFloat(finalQuants[0])-parseFloat(event.target.value) < 0 ){
       //alert("Cannot sell more than you buy");
     }
     else if(parseFloat(localStorage.getItem(`purchased_quantity_${pair}`))-parseFloat(event.target.value)<0){
       //alert(`Only ${parseFloat(localStorage.getItem("purchased_quantity"))-parseFloat(event.target.value)} Left to sell`)
     }
     else{
       if(finalQuants.length == 1){
         localStorage.setItem(`purchased_quantity_${pair}`,parseFloat(finalQuants[0])-parseFloat(event.target.value))
       }
       else{
       localStorage.setItem(`purchased_quantity_${pair}`,parseFloat(localStorage.getItem(`purchased_quantity_${pair}`))-parseFloat(event.target.value))
       }
       const tempQuant=quant;
       tempQuant.push(event.target.value)
       setQuant(tempQuant)
     }
       // setsell_quantity(parseFloat(event.target.value) )

   }}> </Input>
 
 <Slider
       defaultValue={30}
       getAriaValueText={(value)=>{set_full_trade_sell(localStorage.getItem(`purchased_quantity_${pair}`)*value/100)
       quant.push(localStorage.getItem(`purchased_quantity_${pair}`)*value/100)
       if(value == 100){
         setcontinueselling(true)
       }
       else{
         setcontinueselling(false)
       }
     }
   
     }
       aria-labelledby="discrete-slider"
       valueLabelDisplay="auto"
       step={10}
       marks
       min={0}
       max={100}
     />
   
    
  <Button type="reset" disabled={continueselling}  onClick={()=>{
  
   const tempQ=finalQuants;
   tempQ.push(quant[quant.length-1])
   const tempP=finalPrices;
   tempP.push(pricee[pricee.length-1])
   setFinalQuants(tempQ)
   setFinalPrices(tempP)
    //console.log("final quant is",finalQuants,"final price is",finalPrices);
   //alert(quant)
    const ans = localStorage.getItem(`purchased_quantity_${pair}`)-quant[quant.length-1]
    localStorage.setItem(`purchased_quantity_${pair}`,ans)
  }}>Continue Selling</Button>
    

<Button type="reset"  disabled={!continueselling} onClick={()=>{
   const tempQ=finalQuants;
   tempQ.push(quant[quant.length-1])
   const tempP=finalPrices;
   tempP.push(pricee[pricee.length-1])
   setFinalQuants(tempQ)
   setFinalPrices(tempP)
   // setQuant([])
   // setPrice([])
    //console.log("final quant is",finalQuants,"final price is",finalPrices);
    setswitchtrade(true)
 axios({
   method : "POST",
   url : "https://api.anteagle.tech/full_trade",
   headers : {
     "Accept" : "application, text/plain, */*",
     "Content-Type" : "application/json"
   },
   data : JSON.stringify({
     prices : finalPrices,
     quantities : finalQuants,
     pair : pair,
     type : "LIMIT",
     userid:localStorage.getItem("userid")
   })
 }).then(res=>{
   if(res.data.success){
    
     var total=finalPrices[0]*finalQuants[0];
     console.log(total)
     var first = pair.substring(0,pair.indexOf("/"))
     var second=pair.substring(pair.indexOf("/")+1, pair.length)
     const tem = (parseFloat(localStorage.getItem(`${second}_Coins`)) - total).toFixed(3)
     const c= pair.substr(pair.lastIndexOf("/")+1,pair.length).toLowerCase()
     alert(tem);
     alert(c);
     axios({
       method:"post",
       url : `https://api.anteagle.tech/get${c}?coins=${tem}&userid=${localStorage.getItem("userid")}`,
       headers:{
         "Accept": "application/json"
       }
     }).then(res=>{
       console.log(res.data);
       swal("Success","Order Submitted Successfully it will execute as you have decided","success")
     })
     setFinalPrices([])
     setFinalQuants([])
   }
 })
 //  axios({
 //      method:"POST",
 //      url:"https://api.anteagle.tech/order",
 //      headers:{
 //        "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
 //        "Content-Type": "application/json",
 //      },
 //      data: JSON.stringify({
       
 //       quantity:finalQuants[0],   //quant[quant.length-1],  //trade_quantity,
 //       price: finalPrices[0],      //pricee[pricee.length-1],     //trade_price,
 //       pair:pair,
 //       type:'LIMIT',
 //       mode:"buy"

 //      }),
     
 //    }).then(res=>{console.log(res.data);
 //    localStorage.setItem("assigned_no",res.data.assigned_no)
 //    localStorage.setItem("order_id",res.data.order_id)
 //    localStorage.setItem("purchased_quantity",res.data.purchased_quantity)
 //    })
 //    for(var i=1;i<finalQuants.length-1;i++){
 //     axios({
 //      method:"POST",
 //      url:"https://anteagle.tech/fulltrade",
 //      headers:{
 //        "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
 //        "Content-Type": "application/json",

 //      },
 //      data: JSON.stringify({
 //         quantity: finalQuants[i],  //quant[quant.length-1], //sell_quantity,
 //         price:  finalPrices[i],  //</Form>pricee[pricee.length-1],//sell_price,
 //         pair:pair,
 //         type:'LIMIT',
 //         mode:"sell",
 //         assigned_no : localStorage.getItem("assigned_no"),
 //         order_id:localStorage.getItem("order_id"),
 //         purchased_quantity:localStorage.getItem("purchased_quantity")

 //      }),
 //    }).then(res=>{console.log(res.data)})
 //    }
 //    axios({
 //      method:"POST",
 //      url:"https://api.anteagle.tech/submitorder",
 //      headers:{
 //        "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
 //        "Content-Type": "application/json",

 //      },
 //      data: JSON.stringify({
 //         quantity:finalQuants[finalQuants.length-1],  //quant[quant.length-1], //sell_quantity,
 //         price:  finalPrices[finalPrices.length-1], //Form>pricee[pricee.length-1],//sell_price,
 //         pair:pair.replace("/",""),
 //         type:'LIMIT',
 //         mode:"sell",
 //         assigned_no : localStorage.getItem("assigned_no"),
 //         purchased_quantity:localStorage.getItem("purchased_quantity")
       
 //      }),
 //    }).then(res=>{console.log(res.data)
 //     setFinalPrices([])
 //     setFinalQuants([])
 //    setswitchtrade(true)
 //    })

 
  }}>Submit</Button>
  </Form>
  

</Tabs>
   

          </CardBody>
        </Card>
      </Col>
   }
   <Col lg="6" md="12">
           <Card className="card-tasks" style={{overflow:"auto"}}>
             <CardHeader>
            <h3> Trade Overview</h3>
             </CardHeader>
             <CardBody>
  
             <VerticalTimeline layout={'1-column-left'} >
               { finalPrices.map((ans,i)=>{
                 return(
                   <VerticalTimelineElement  
                   contentStyle={{ background: i > 0 ? '#ff0000' : '#1d8cf8', color: '#fff', width:'40%',height:"20%" }} 
                   contentArrowStyle={{ borderRight: `15px solid  ${i > 0 ? '#ff0000' : '#1d8cf8'}` }}>
                       <h1 >{i > 0 ? 'Sell' : 'Buy'}</h1>
                       <p>Price:{ans}</p>
                       <p>Quantity:{finalQuants[i]}</p>
                   </VerticalTimelineElement>
                 )
                 })
               }
             </VerticalTimeline>
              
             </CardBody>
           </Card>
         </Col>
  </Row>  {/*fulltrade */} 
                    </TabPanel>

                 </Tabs>

          
              </CardBody>
            </Card>
      </Modal>
      
      <Modal show={showModal2} onHide={handleClose2}>
        <Card className="card-chart">
              <CardHeader>
                
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> SELL
                </CardTitle>
              </CardHeader>
              <CardBody>
              <Tabs>
    <TabList>
      <Tab>Limit</Tab>
      <Tab>Market</Tab>
    </TabList>

    <TabPanel>
    <Form >
    <Label>Price</Label>
    <Input placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      setsell_limit_price(parseFloat(event.target.value))
    }}></Input>
    <Label>Amount</Label>
    <Input invalid={!valid_s} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={sell_limit_amount} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      if(parseFloat(event.target.value) > parseFloat(localStorage.getItem(curr))){
        setvalid_s(false)
      }
      else{
        setvalid_s(true)
        setsell_limit_amount(parseFloat(event.target.value))
      }
      
    }} ></Input>
 <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{
          const g = parseFloat(localStorage.getItem("BTC_Coins")*value/100).toFixed(5) 
          setsell_limit_amount(parseFloat(localStorage.getItem("BTC_Coins")*value/100).toFixed(5))
          setsell_limit_total(g*sell_limit_price)
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
     
      <Label>Total</Label>
   <Input invalid={!valid_s} disabled={true}  style={{color:"white"}} value={sell_limit_total} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf("/")+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(0,pair.indexOf('/'))}_Coins`
      const curdebt = `${pair.substr(0,pair.indexOf('/'))}_Debt`
      

     if(parseFloat(parseFloat(event.target.value)/parseFloat(sell_limit_price))>parseFloat(localStorage.getItem(curr))){
        // alert("do you want to transact");
       const debt=parseFloat(localStorage.getItem(curr) )- parseFloat(event.target.value*buy_limit_price);
       if(localStorage.getItem(curdebt) +debt > -9999  )
        localStorage.setItem( curdebt,localStorage.getItem(curdebt) +debt );
        //console.log(localStorage.getItem(curdebt) +debt);
        
        setvalid_s(false)
     }
     else{
      setvalid_s(true)
      // setsell_limit_amount(parseFloat(event.target.value)/parseFloat(sell_limit_price))
     }
      
    }}></Input>
    <Button disabled={!valid_s} onClick={()=>{
      axios({
        method:"POST",
        url:"https://api.anteagle.tech/neworder",
        headers:{
          "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Limit",
          side : "SELL",
          price : parseFloat(sell_limit_price),
          Amount : sell_limit_amount,
          filled : "0.0",
          total : sell_limit_price*sell_limit_amount
        }),
      }).then(res=>{console.log(res.data)})
      const curr = `${pair.substr(0,pair.indexOf('/'))}`
      //console.log(localStorage.getItem(`${curr}_Coins`) - sell_limit_amount)
      const end = localStorage.getItem(`${curr}_Coins`) - sell_limit_amount;
      localStorage.setItem(`${curr}_Coins`,end)
      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${end}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json",
        }
      }).then(res=>{
        console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"
      })
    }}>Submit</Button>
    </Form>
    </TabPanel>
    <TabPanel>
    <Form > 
    <Label>Price</Label>
    <Input placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} value={pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2)} disabled style={{color:"white"}} onChange={(event)=>{
      setsell_market_amount(parseFloat(event.target.value))
    }} ></Input>
    <Label>Amount</Label>
    <Input placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={sell_market_amount} onChange={(event)=>{
      setsell_market_amount(parseFloat(event.target.value))
    }} ></Input>

    <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{
          const g = parseFloat(localStorage.getItem("BTC_Coins")*value/100).toFixed(5) 
          setsell_market_amount(parseFloat(localStorage.getItem("BTC_Coins")*value/100).toFixed(5))
          setsell_market_total(g*(pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2)))
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
     
      <Label>Total</Label>
   <Input invalid={!valid_s} value={sell_market_total} disabled={true} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf("/")+1,pair.length)}`} style={{color : "white"}}onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      const curdebt = `${pair.substr(0,pair.indexOf('/'))}_Debt`
     if((parseFloat(event.target.value)/parseFloat(sell_market_price))>localStorage.getItem(curr)){
      setvalid_s(false)
     }
     else{
      setvalid_s(true)
      // setsell_market_amount(parseFloat(event.target.value)/parseFloat(sell_market_price))
     }
      
    }}></Input>
    <Button disabled={!valid_s} onClick={()=>{
      axios({
        method:"POST",
        url:"https://api.anteagle.tech/neworder",
        headers:{
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Market",
          side : "SELL",
          price : (pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2)),
          Amount : parseFloat(sell_market_amount),
          filled : "0.0",
          total : parseFloat( (pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2) ) *sell_market_amount),
        }),
      }).then(res=>{})
      var tem= parseFloat(localStorage.getItem(`${pair.substr(0,pair.indexOf('/'))}_Coins`))-parseFloat(sell_market_amount)
      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${pair.substr(0,pair.indexOf('/')).toLowerCase()}?coins=${tem}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json"
        }
      }).then(res=>{
        console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"
      })
    }}>Submit</Button>
    </Form>
    </TabPanel>
  </Tabs>
              </CardBody>
            </Card>
      </Modal>

      <Fab 
variant="extended"
className={classes.fab1}
onClick={handleShow}
>
        Buy
      </Fab>
     
      <Fab 
      variant="extended"
         
          className={classes.fab2}
onClick={handleShow2}
      >
        Sell
      </Fab>
  </> :
  <>
  {/* <PieChart style={{marginLeft:"-1rem"}}
  data={[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ]}
/> */}

<Dialog open={show_buy} onClose={()=>{
  setshow_buy(false)
}} >
  
  

 <Form style={{padding:"20px"}}>
  <CardHeader styke={{fontWeight:"bold"}}>BALANCE : {localStorage.getItem(`${mobileswitch1 ? 'USDT' : 'INRD'}_Coins`)} {`${mobileswitch1 ? 'USDT' : 'INRD'}`}</CardHeader>
    <Label style={{color:"black",fontWeight:"bold"}}>Price</Label>
    <Input value={liveprice} disabled={true} style={{color:"white"}} onChange={(event)=>{
      setbuy_limit_price(parseFloat(event.target.value) )

    }} placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`}></Input>



<Label style={{color:"black",fontWeight:"bold"}}>Enter Amount</Label>
   <Input invalid={!valid} style={{color : 'black'}} placeholder={`Enter AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      
     if(parseFloat(event.target.value)>parseFloat(localStorage.getItem(curr))){
        setvalid(false)
     }
     else{
      setvalid(true)
    
      setbuy_limit_amount(parseFloat(parseFloat(event.target.value) /parseFloat(liveprice)) )
     }
      
    }}></Input>

    <Label style={{color:"black",fontWeight:"bold"}}>You will recieve</Label>
   
    
    <Input invalid={!valid} style={{color:"white"}} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} disabled={true} value={buy_limit_amount} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
     if(parseFloat(event.target.value*buy_limit_price)>parseFloat(localStorage.getItem(curr))){
      setvalid(false)
     }
     else{
      setvalid(true)
      // setlimit_buy_total(parseFloat(event.target.value)*parseFloat(buy_limit_price))
     }
      
    }}></Input>


    <Button disabled={!valid} onClick={()=>{
      axios({
        method:"POST",
        url:"https://api.anteagle.tech/neworder",    
        headers:{
          "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Limit",
          side : "BUY",
          price : liveprice,
          Amount : buy_limit_amount,
          filled : "0.0",
          total : liveprice * buy_limit_amount
        }),
      }).then(res=>{
        const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}`
        //console.log(parseFloat(localStorage.getItem(`${curr}_Coins`)) - liveprice*buy_limit_amount)
        const end = parseFloat(localStorage.getItem(`${curr}_Coins`)) - liveprice*buy_limit_amount;
        const range=-9999;                                     //add range
        if( end < 0 && end > range){
          alert("Are you sure that you want to proceed further?");
          var te = parseFloat(localStorage.getItem(`${curr}_Debt`));
          if(te === null){
            te = 0;
          }
          localStorage.setItem(`${curr}_Coins`,end);
          localStorage.setItem(`${curr}_Debt `,end+te);        //set debt
          //console.log("The debt is "+end+te);
        }
         
        else if(end<range) alert("Cannot go beyond this range"); 
        else{
          localStorage.setItem(`${curr}_Coins`,end)
          
        }
  
        axios({
          method:"post",
          url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${end}&userid=${localStorage.getItem("userid")}`,
          headers:{
            "Accept": "application/json",
          }
        }).then(res=>{
          swal("Success","Order Submitted Successfully","success");window.location.href = "/"
        })
      })
    
      // if(pair[pair.length-1] == 'T'){
      //   axios({
      //     method:"POST",
      //     url:"https://api.anteagle.tech/neworder",
      //     headers:{
      //       "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
      //       "Content-Type": "application/json",
      //       Authtoken:"sfsfsff"
      //     },
      //     data: JSON.stringify({
      //       userid : localStorage.getItem("userid"),
      //       date: "2021-06-21",
      //       pair: pair.replace("USDT","INRD"),
      //       type : "Limit",
      //       side : "BUY",
      //       price : liveprice,
      //       Amount : buy_limit_amount,
      //       filled : "0.0",
      //       total : liveprice*buy_limit_amount
      //     }),
      //   }).then(res=>{console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"})
      // }
      // else{
      //   axios({
      //     method:"POST",
      //     url:"https://api.anteagle.tech/neworder",
      //     headers:{
      //       "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
      //       "Content-Type": "application/json",
      //       Authtoken:"sfsfsff"
      //     },
      //     data: JSON.stringify({
      //       userid : localStorage.getItem("userid"),
      //       date: "2021-06-21",
      //       pair: pair.replace("INRD","USDT"),
      //       type : "Limit",
      //       side : "BUY",
      //       price : liveprice,
      //       Amount : buy_limit_amount,
      //       filled : "0.0",
      //       total : (liveprice)*buy_limit_amount
      //     }),
      //   }).then(res=>{console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"})
      // }

      
     
    }}>Submit</Button>
    </Form>

</Dialog>


<Dialog open={show_sell} onClose={()=>{
  setshow_sell(false)
}} >
  <Form style={{padding:"20px"}}>
  <CardText style={{color : "black",fontWeight:"bold"}}>BALANCE : {localStorage.getItem(`${pair.substring(0,pair.lastIndexOf('/'))}_Coins`)} {pair.substring(0,pair.lastIndexOf('/'))}</CardText>

    <Label style={{color:"black",fontWeight:"bold"}}>Price</Label>
    <Input placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} value={liveprice} disabled={true} style={{color : "white"}} onChange={(event)=>{
      setsell_limit_price(parseFloat(event.target.value))
    }}></Input>
    <Label style={{color:"black",fontWeight:"bold"}}>Amount</Label>
    <Input style={{color:"black"}} invalid={!valid_s} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={sell_limit_amount} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      if(parseFloat(event.target.value) > parseFloat(localStorage.getItem(curr))){
        setvalid_s(false)
      }
      else{
        setvalid_s(true)
        setsell_limit_amount(parseFloat(event.target.value))
      }
      
    }} ></Input>
 <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{
          const g = parseFloat(localStorage.getItem("BTC_Coins")*value/100).toFixed(5) 
          setsell_limit_amount(parseFloat(localStorage.getItem("BTC_Coins")*value/100).toFixed(5))
          setsell_limit_total(g*liveprice)
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
     
      <Label style={{color:"black",fontWeight:"bold"}}>Total</Label>
   <Input invalid={!valid_s} disabled={true}  style={{color:"white"}} value={sell_limit_total} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf("/")+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(0,pair.indexOf('/'))}_Coins`
      const curdebt = `${pair.substr(0,pair.indexOf('/'))}_Debt`
      

     if(parseFloat(parseFloat(event.target.value)/parseFloat(liveprice))>parseFloat(localStorage.getItem(curr))){
        // alert("do you want to transact");
       const debt=parseFloat(localStorage.getItem(curr) )- parseFloat(event.target.value*buy_limit_price);
       if(localStorage.getItem(curdebt) +debt > -9999  )
        localStorage.setItem( curdebt,localStorage.getItem(curdebt) +debt );
        //console.log(localStorage.getItem(curdebt) +debt);
        
        setvalid_s(false)
     }
     else{
      setvalid_s(true)
      // setsell_limit_amount(parseFloat(event.target.value)/parseFloat(liveprice))
     }
      
    }}></Input>
    <Button disabled={!valid_s} onClick={()=>{
      axios({
        method:"POST",
        url:"https://api.anteagle.tech/neworder",
        headers:{
          "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Limit",
          side : "SELL",
          price : parseFloat(liveprice),
          Amount : sell_limit_amount,
          filled : "0.0",
          total : liveprice*sell_limit_amount
        }),
      }).then(res=>{console.log(res.data)})
      const curr = `${pair.substr(0,pair.indexOf('/'))}`
      //console.log(localStorage.getItem(`${curr}_Coins`) - sell_limit_amount)
      const end = localStorage.getItem(`${curr}_Coins`) - sell_limit_amount;
      localStorage.setItem(`${curr}_Coins`,end)
      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${end}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json",
        }
      }).then(res=>{
        console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"
      })
    }}>Submit</Button>
    </Form>

</Dialog>


  <div style={{marginTop:'5rem',marginBottom:"-9rem"}}>
  <Row>
  

<Col style={{marginLeft:"2rem"}}>

<CardText>AntEagle Lite</CardText>
<Switch onChange={(e)=>{
  setanteagle_pro(e)
}} checked={anteagle_pro} checkedIcon={false} uncheckedIcon={false}/>
</Col>

<Col style={{marginRight:"-5rem"}}>
    {/* <CardText style={{fontSize:"1rem",marginLeft:"-2rem"}}>Currency Type : {mobileswitch1 ? 'USDT' : 'INRD'}</CardText>
<Switch onChange={(e)=>{
  setmobileswitch1(e)
}} checked={mobileswitch1} checkedIcon={false} uncheckedIcon={false}/> */}



<CardText >Trading Currency</CardText>
<div class="switch" >
    <input type="checkbox" onChange={()=>{
      setmobileswitch1(!mobileswitch1)
    }}/>
    <label><i></i></label>
</div> 


    </Col>



  </Row>
<Dialog open={mobileport} onClose={()=>{
  setmobile_port(false)
}}>
  <DialogContent>
    <h1 style={{color:"black"}}>YOUR ASSETS</h1>
  <Card style={{display:parseFloat(localStorage.getItem("BTC_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
        
        <CardTitle style={{textAlign:"center"}} tag="h3"><img src={Btc}/> BITCOIN<br/><div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("BTC_Coins")} BTC</div></CardTitle>
      </CardBody>
    </Card>
    <Card style={{display:parseFloat(localStorage.getItem("BNB_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"><img src={Bnb}/>    BNB <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("BNB_Coins")} BNB</div></CardTitle>
      </CardBody>
    </Card>
    <Card style={{display:parseFloat(localStorage.getItem("ETH_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
        
        <CardTitle style={{textAlign:"center"}}  tag="h3"><img src={Eth}/>    ETHEREUM <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("ETH_Coins")} ETH</div></CardTitle>
      </CardBody>
    </Card>
    <Card style={{display:parseFloat(localStorage.getItem("USDT_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
        
        <CardTitle style={{textAlign:"center"}}  tag="h3"><img height="30rem" src={usdt}/>    USDT <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("USDT_Coins")} USDT</div></CardTitle>
      </CardBody>
    </Card>
    <Card style={{display:parseFloat(localStorage.getItem("INRD_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={ruppee}/>    INRD <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("INRD_Coins")} INRD</div></CardTitle>
      </CardBody>
    </Card>

     <Card style={{display:parseFloat(localStorage.getItem("KSM_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Ksm}/>    KUSAMA <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("KSM_Coins")} KSM</div></CardTitle>
      </CardBody>
    </Card>  
    <Card style={{display:parseFloat(localStorage.getItem("ATA_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={ata}/>    AUTOMATA NETWORK <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("ATA_Coins")} ATA</div></CardTitle>
      </CardBody>
    </Card>

     <Card style={{display:parseFloat(localStorage.getItem("MANA_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Mana}/>   DECENTRALAND  <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("MANA_Coins")} MANA</div></CardTitle>
      </CardBody>
    </Card>

     <Card style={{display:parseFloat(localStorage.getItem("DGB_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Dgb}/>    DIGIBYTE <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("DGB_Coins")} DGB</div></CardTitle>
      </CardBody>
    </Card>

     <Card style={{display:parseFloat(localStorage.getItem("FTM_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={ftm}/>    FANTOM <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("FTM_Coins")} FTM</div></CardTitle>
      </CardBody>
    </Card>

     <Card style={{display:parseFloat(localStorage.getItem("ALICE_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={alice}/>    MY NEIGHBOR ALICE <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("ALICE_Coins")} ALICE</div></CardTitle>
      </CardBody>
    </Card>

     <Card style={{display:parseFloat(localStorage.getItem("GTC_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={gtc}/>    GITCOIN <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("GTC_Coins")} GTC</div></CardTitle>
      </CardBody>
    </Card>

     <Card style={{display:parseFloat(localStorage.getItem("MATIC_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Matic}/>    MATIC NETWORK <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("MATIC_Coins")} MATIC</div></CardTitle>
      </CardBody>
    </Card>

     <Card style={{display:parseFloat(localStorage.getItem("AXS_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={axs}/>    AXIE INFINITY <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("AXS_Coins")} AXS</div></CardTitle>
      </CardBody>
    </Card>

     <Card style={{display:parseFloat(localStorage.getItem("FTT_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={ftt}/>    FTX TOKEN <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("FTT_Coins")} FTT</div></CardTitle>
      </CardBody>
    </Card>

     <Card style={{display:parseFloat(localStorage.getItem("SOL_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Sol}/>    SOLANA <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("SOL_Coins")} SOL</div></CardTitle>
      </CardBody>
    </Card>

     <Card style={{display:parseFloat(localStorage.getItem("RUNE_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={rune}/>   THORCHAIN <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("RUNE_Coins")} RUNE</div></CardTitle>
      </CardBody>
    </Card>

     <Card style={{display:parseFloat(localStorage.getItem("UNI_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={uni}/>    UNISWAP <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("UNI_Coins")} UNI</div></CardTitle>
      </CardBody>
    </Card>  

    <Card style={{display:parseFloat(localStorage.getItem("DOT_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Dot}/>    POLKADOT <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("DOT_Coins")} DOT</div></CardTitle>
      </CardBody>
    </Card>

     <Card style={{display:parseFloat(localStorage.getItem("VET_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={vet}/>    VECHAIN <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("VET_Coins")} VET</div></CardTitle>
      </CardBody>
    </Card>

     <Card style={{display:parseFloat(localStorage.getItem("TFUEL_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={tfuel}/>    THETA FUEL <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("TFUEL_Coins")} TFUEL</div></CardTitle>
      </CardBody>
    </Card>  

    <Card style={{display:parseFloat(localStorage.getItem("GRT_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Grt}/>    THE GRAPH <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("GRT_Coins")} GRT</div></CardTitle>
      </CardBody>
    </Card>

     <Card style={{display:parseFloat(localStorage.getItem("ADA_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Ada}/>    CARDANO <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("ADA_Coins")} ADA</div></CardTitle>
      </CardBody>
    </Card>  

    <Card style={{display:parseFloat(localStorage.getItem("FIL_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={fil}/>    FILECOIN <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("FIL_Coins")} FIL</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("LINK_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={link}/>    CHAINLINK <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("LINK_Coins")} LINK</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("LUNA_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={luna}/>    TERRA <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("LUNA_Coins")} LUNA</div></CardTitle>
      </CardBody>
    </Card>

    <Card style={{display:parseFloat(localStorage.getItem("THETA_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={theta}/>    THETA NETWORK <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("THETA_Coins")} THETA</div></CardTitle>
      </CardBody>
    </Card>  
      


    <Card style={{display:parseFloat(localStorage.getItem("ANTEAG_Coins")) > 0 ? 'block' : 'none',paddingBottom:'10px'}}>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={cryptologo} style={{backgroundColor:"white",borderRadius:"20px"}}/>    ANTEAG <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("ANTEAG_Coins")} ANTEAG</div></CardTitle>
      </CardBody>
    </Card>
       

  </DialogContent>
</Dialog>

  <CardTitle style={{fontSize:"1.5rem"}} onClick={()=>{
     
    setmobile_port(true)
    setport(true)
  }}>
  TOTAL PORTFOLIO : <span style={{color : "yellow"}}>
    ₹ {((parseFloat(localStorage.getItem("THETA_Coins"))*parseFloat(liveprice_THETA)*conversion)+(parseFloat(localStorage.getItem("LUNA_Coins"))*parseFloat(liveprice_LUNA)*conversion)+(parseFloat(localStorage.getItem("LINK_Coins"))*parseFloat(liveprice_LINK)*conversion)+(parseFloat(localStorage.getItem("FIL_Coins"))*parseFloat(liveprice_FIL)*conversion)+(parseFloat(localStorage.getItem("ADA_Coins"))*parseFloat(liveprice_ADA)*conversion)+(parseFloat(localStorage.getItem("GRT_Coins"))*parseFloat(liveprice_GRT)*conversion)+(parseFloat(localStorage.getItem("TFUEL_Coins"))*parseFloat(liveprice_TFUEL)*conversion)+(parseFloat(localStorage.getItem("VET_Coins"))*parseFloat(liveprice_VET)*conversion)+(parseFloat(localStorage.getItem("DOT_Coins"))*parseFloat(liveprice_DOT)*conversion)+(parseFloat(localStorage.getItem("UNI_Coins"))*parseFloat(liveprice_UNI)*conversion)+(parseFloat(localStorage.getItem("RUNE_Coins"))*parseFloat(liveprice_RUNE)*conversion)+(parseFloat(localStorage.getItem("SOL_Coins"))*parseFloat(liveprice_SOL)*conversion)+(parseFloat(localStorage.getItem("FTT_Coins"))*parseFloat(liveprice_FTT)*conversion)+(parseFloat(localStorage.getItem("AXS_Coins"))*parseFloat(liveprice_AXS)*conversion)+(parseFloat(localStorage.getItem("MATIC_Coins"))*parseFloat(liveprice_MATIC)*conversion)+(parseFloat(localStorage.getItem("GTC_Coins"))*parseFloat(liveprice_GTC)*conversion)+(parseFloat(localStorage.getItem("ALICE_Coins"))*parseFloat(liveprice_ALICE)*conversion)+(parseFloat(localStorage.getItem("FTM_Coins"))*parseFloat(liveprice_FTM)*conversion)+(parseFloat(localStorage.getItem("MANA_Coins"))*parseFloat(liveprice_MANA)*conversion)+(parseFloat(localStorage.getItem("ATA_Coins"))*parseFloat(liveprice_ATA)*conversion)+(parseFloat(localStorage.getItem("KSM_Coins"))*parseFloat(liveprice_KSM)*conversion) +(parseFloat(localStorage.getItem("BTC_Coins"))*parseFloat(liveprice_BTC)*conversion)+(parseFloat(localStorage.getItem("BNB_Coins"))*parseFloat(liveprice_BNB)*conversion)+(parseFloat(localStorage.getItem("ETH_Coins"))*parseFloat(liveprice_ETH)*conversion)+parseFloat(localStorage.getItem("INRD_Coins"))+(parseFloat(localStorage.getItem("USDT_Coins"))*conversion)).toFixed(2)}
    </span>
</CardTitle>

  <span>
  <CardText style={{fontSize:"1rem"}}>
 <span style={{marginLeft:"3rem"}}>
 <span style={{color:"green", fontWeight:"bold"}}>₹</span> {"   "}INRD : <span style={{color:"yellow"}}>{localStorage.getItem("INRD_Coins")}</span>
   </span> 
{"              "}
<span style={{marginLeft:"3rem"}}>
<span style={{color:"green", fontWeight:"bold"}}>$</span> {"   "}USDT : <span style={{color:"yellow"}}>{localStorage.getItem("USDT_Coins")}</span>
</span>
  
{"              "}
  {/* Other Coins : {((parseFloat(localStorage.getItem("THETA_Coins")))+(parseFloat(localStorage.getItem("LUNA_Coins")))+(parseFloat(localStorage.getItem("LINK_Coins")))+(parseFloat(localStorage.getItem("FIL_Coins")))+(parseFloat(localStorage.getItem("ADA_Coins")))+(parseFloat(localStorage.getItem("GRT_Coins")))+(parseFloat(localStorage.getItem("TFUEL_Coins")))+(parseFloat(localStorage.getItem("VET_Coins")))+(parseFloat(localStorage.getItem("DOT_Coins")))+(parseFloat(localStorage.getItem("UNI_Coins")))+(parseFloat(localStorage.getItem("RUNE_Coins")))+(parseFloat(localStorage.getItem("SOL_Coins")))+(parseFloat(localStorage.getItem("FTT_Coins")))+(parseFloat(localStorage.getItem("AXS_Coins")))+(parseFloat(localStorage.getItem("MATIC_Coins")))+(parseFloat(localStorage.getItem("GTC_Coins")))+(parseFloat(localStorage.getItem("ALICE_Coins")))+(parseFloat(localStorage.getItem("FTM_Coins")))+(parseFloat(localStorage.getItem("MANA_Coins")))+(parseFloat(localStorage.getItem("ATA_Coins")))+(parseFloat(localStorage.getItem("KSM_Coins"))) +(parseFloat(localStorage.getItem("BTC_Coins")))+(parseFloat(localStorage.getItem("BNB_Coins")))+(parseFloat(localStorage.getItem("ETH_Coins")))).toFixed(2)} */}
</CardText>
  </span>
 
</div>
<article class="leaderboard" style={{textAlign:"center"}}>

  <main class="leaderboard__profiles">
    <article class="leaderboard__profile" >
      <img src={Btc} alt="Mark Zuckerberg" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
      setopen_btc(true)
      seti(1)
    }}>Bitcoin(BTC)</span>
    
      <span class="leaderboard__value" style={{color : parseFloat(BTC_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_BTC : (parseFloat(liveprice_BTC*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(BTC_per) >0 ? 'green' : 'red'}}>{BTC_per}%</span></span>
      <Dialog open={open_btc} onClose={()=>{seti(1);setopen_btc(false)}}>
     
      <DialogContent>
 
                    <img src="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg" width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(BTC_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_BTC : (parseFloat(liveprice_BTC*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(BTC_per) >0 ? 'green' : 'red'}}>{BTC_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_BTC}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_BTC : (parseFloat(liveprice_BTC*conversion).toFixed(2))
          setlive(g)
          setpair(`BTC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_BTC : (parseFloat(liveprice_BTC*conversion).toFixed(2))
          setlive(g)
          setpair(`BTC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>

    </article>
    
    <article class="leaderboard__profile">
      <img src={Eth} alt="Ethereum" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
      setopen_eth(true)
      seti(1)
    }}>Ethereum(ETH)</span>
      <span class="leaderboard__value" style={{color : parseFloat(ETH_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_ETH : (parseFloat(liveprice_ETH*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(ETH_per) >0 ? 'green' : 'red'}}>{ETH_per}%</span></span>
      <Dialog open={open_eth} onClose={()=>{seti(1);setopen_eth(false)}}>
     
      <DialogContent>
 
                    <img src="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/eth.svg" width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(ETH_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_ETH : (parseFloat(liveprice_ETH*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(ETH_per) >0 ? 'green' : 'red'}}>{ETH_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_ETH}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_ETH : (parseFloat(liveprice_ETH*conversion).toFixed(2))
          setlive(g)
          setpair(`ETH/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_ETH : (parseFloat(liveprice_ETH*conversion).toFixed(2))
          setlive(g)
          setpair(`ETH/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    
    <article class="leaderboard__profile">
      <img src={Bnb} alt="Elizabeth Holmes" class="leaderboard__picture"/>
      <span class="leaderboard__name"onClick={()=>{
      setopen_BNB(true)
      seti(1)
    }}>Binance(BNB)</span>
      <span class="leaderboard__value" style={{color : parseFloat(BNB_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_BNB : (parseFloat(liveprice_BNB*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(BNB_per) >0 ? 'green' : 'red'}}>{BNB_per}%</span></span>
      <Dialog open={open_BNB} onClose={()=>{seti(1);setopen_BNB(false)}}>
     
      <DialogContent>
 
                    <img src="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/bnb.svg" width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(BNB_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_BNB : (parseFloat(liveprice_BNB*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(BNB_per) >0 ? 'green' : 'red'}}>{BNB_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_BNB}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_BNB : (parseFloat(liveprice_BNB*conversion).toFixed(2))
          setlive(g)
          setpair(`BNB/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_BNB : (parseFloat(liveprice_BNB*conversion).toFixed(2))
          setlive(g)
          setpair(`BNB/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    
    <article class="leaderboard__profile">
      <img src={link} alt="Chainlink (LINK)" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
        setopen_LINK(true)
        seti(1)
      }}>Chainlink (LINK)</span>
      <span class="leaderboard__value" style={{color : parseFloat(LINK_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_LINK : (parseFloat(liveprice_LINK*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color :parseFloat(THETA_per) >0 ? 'green' : 'red'}}>{LINK_per}%</span></span>
      <Dialog open={open_LINK} onClose={()=>{seti(1);setopen_LINK(false)}}>
     
      <DialogContent>
 
                    <img src="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/link.svg" width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(LINK_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_LINK : (parseFloat(liveprice_LINK*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(LINK_per) >0 ? 'green' : 'red'}}>{LINK_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_LINK}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_LINK : (parseFloat(liveprice_LINK*conversion).toFixed(2))
          setlive(g)
          setpair(`LINK/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_LINK : (parseFloat(liveprice_LINK*conversion).toFixed(2))
          setlive(g)
          setpair(`LINK/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    <article class="leaderboard__profile">
      <img src={luna} alt="Terra (LUNA)" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
        setopen_LUNA(true)
        seti(1)
      }}>Terra (LUNA)</span>
      <span class="leaderboard__value" style={{color : parseFloat(LUNA_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_LUNA : (parseFloat(liveprice_LUNA*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(LUNA_per) >0 ? 'green' : 'red'}}>{LUNA_per}%</span></span>
      <Dialog open={open_LUNA} onClose={()=>{seti(1);setopen_LUNA(false)}}>
     
      <DialogContent>
 
                    <img src={luna} width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(LUNA_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_LUNA : (parseFloat(liveprice_LUNA*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(LUNA_per) >0 ? 'green' : 'red'}}>{LUNA_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_LUNA}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_LUNA : (parseFloat(liveprice_LUNA*conversion).toFixed(2))
          setlive(g)
          setpair(`LUNA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_LUNA : (parseFloat(liveprice_LUNA*conversion).toFixed(2))
          setlive(g)
          setpair(`LUNA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    <article class="leaderboard__profile">
      <img src={theta} alt="THETA (THETA)" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
setopen_THETA(true)
        seti(1)
      }}>THETA (THETA)</span>
      <span class="leaderboard__value" style={{color : parseFloat(THETA_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_THETA : (parseFloat(liveprice_THETA*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(THETA_per) >0 ? 'green' : 'red'}}>{THETA_per}%</span></span>
      <Dialog open={open_THETA} onClose={()=>{seti(1);setopen_THETA(false)}}>
     
      <DialogContent>
 
                    <img src={theta} width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(THETA_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_THETA : (parseFloat(liveprice_THETA*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(THETA_per) >0 ? 'green' : 'red'}}>{THETA_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_THETA}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_THETA : (parseFloat(liveprice_THETA*conversion).toFixed(2))
          setlive(g)
          setpair(`THETA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_THETA : (parseFloat(liveprice_THETA*conversion).toFixed(2))
          setlive(g)
          setpair(`THETA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    <article class="leaderboard__profile">
      <img src={Grt} alt="Graph (GRT)" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
setopen_GRT(true)
        seti(1)
      }}>Graph (GRT)</span>
      <span class="leaderboard__value" style={{color : parseFloat(GRT_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_GRT : (parseFloat(liveprice_GRT*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(GRT_per) >0 ? 'green' : 'red'}}>{GRT_per}%</span></span>
      <Dialog open={open_GRT} onClose={()=>{seti(1);setopen_GRT(false)}}>
     
      <DialogContent>
 
                    <img src={Grt} width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(GRT_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_GRT : (parseFloat(liveprice_GRT*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(GRT_per) >0 ? 'green' : 'red'}}>{GRT_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_GRT}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_GRT : (parseFloat(liveprice_GRT*conversion).toFixed(2))
          setlive(g)
          setpair(`GRT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_GRT : (parseFloat(liveprice_GRT*conversion).toFixed(2))
          setlive(g)
          setpair(`GRT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    <article class="leaderboard__profile">
      <img src={tfuel} alt="BNBa Fuel(TFUEL)" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
setopen_TFUEL(true)
        seti(1)
      }}>Thetha Fuel(TFUEL)</span>
      <span class="leaderboard__value" style={{color : parseFloat(TFUEL_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_TFUEL : (parseFloat(liveprice_TFUEL*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(TFUEL_per) >0 ? 'green' : 'red'}}>{TFUEL_per}%</span></span>
      <Dialog open={open_TFUEL} onClose={()=>{seti(1);setopen_TFUEL(false)}}>
     
      <DialogContent>
 
                    <img src={tfuel} width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(TFUEL_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_TFUEL : (parseFloat(liveprice_TFUEL*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(TFUEL_per) >0 ? 'green' : 'red'}}>{TFUEL_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_TFUEL}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_TFUEL : (parseFloat(liveprice_TFUEL*conversion).toFixed(2))
          setlive(g)
          setpair(`TFUEL/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_TFUEL : (parseFloat(liveprice_TFUEL*conversion).toFixed(2))
          setlive(g)
          setpair(`TFUEL/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    <article class="leaderboard__profile">
      <img src={Ksm} alt="Kusuma (KSM)" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
setopen_KSM(true)
        seti(1)
      }}>Kusuma (KSM)</span>
      <span class="leaderboard__value" style={{color : parseFloat(KSM_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_KSM : (parseFloat(liveprice_KSM*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(KSM_per) >0 ? 'green' : 'red'}}>{KSM_per}%</span></span>
      <Dialog open={open_KSM} onClose={()=>{seti(1);setopen_KSM(false)}}>
     
      <DialogContent>
 
                    <img src={Ksm} width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(KSM_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_KSM : (parseFloat(liveprice_KSM*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(KSM_per) >0 ? 'green' : 'red'}}>{KSM_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_KSM}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_KSM : (parseFloat(liveprice_KSM*conversion).toFixed(2))
          setlive(g)
          setpair(`KSM/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_KSM : (parseFloat(liveprice_KSM*conversion).toFixed(2))
          setlive(g)
          setpair(`KSM/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    <article class="leaderboard__profile">
      <img src={Ada} alt="Cardano (ADA)" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
setopen_ADA(true)
        seti(1)
      }}>Cardano (ADA)</span>
      <span class="leaderboard__value" style={{color : parseFloat(ADA_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_ADA : (parseFloat(liveprice_ADA*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(ADA_per) >0 ? 'green' : 'red'}}>{ADA_per}%</span></span>
      <Dialog open={open_ADA} onClose={()=>{seti(1);setopen_ADA(false)}}>
     
      <DialogContent>
 
                    <img src={Ada} width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(ADA_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_ADA : (parseFloat(liveprice_ADA*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(ADA_per) >0 ? 'green' : 'red'}}>{ADA_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_ADA}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_ADA : (parseFloat(liveprice_ADA*conversion).toFixed(2))
          setlive(g)
          setpair(`ADA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_ADA : (parseFloat(liveprice_ADA*conversion).toFixed(2))
          setlive(g)
          setpair(`ADA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    <article class="leaderboard__profile">
      <img src={vet} alt="VeChain (VET)" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
setopen_VET(true)
        seti(1)
      }}>VeChain (VET)</span>
      <span class="leaderboard__value" style={{color : parseFloat(VET_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_VET : (parseFloat(liveprice_VET*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(VET_per) >0 ? 'green' : 'red'}}>{VET_per}%</span></span>
      <Dialog open={open_VET} onClose={()=>{seti(1);setopen_VET(false)}}>
     
      <DialogContent>
 
                    <img src={vet} width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(VET_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_VET : (parseFloat(liveprice_VET*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(VET_per) >0 ? 'green' : 'red'}}>{VET_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_VET}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_VET : (parseFloat(liveprice_VET*conversion).toFixed(2))
          setlive(g)
          setpair(`VET/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_VET : (parseFloat(liveprice_VET*conversion).toFixed(2))
          setlive(g)
          setpair(`VET/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    <article class="leaderboard__profile">
      <img src={Dot} alt="Polkadot (DOT)" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
setopen_DOT(true)
        seti(1)
      }}>Polkadot (DOT)</span>
      <span class="leaderboard__value" style={{color : parseFloat(DOT_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_DOT : (parseFloat(liveprice_DOT*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(DOT_per) >0 ? 'green' : 'red'}}>{DOT_per}%</span></span>
      <Dialog open={open_DOT} onClose={()=>{seti(1);setopen_DOT(false)}}>
     
      <DialogContent>
 
                    <img src={Dot} width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(DOT_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_DOT : (parseFloat(liveprice_DOT*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(DOT_per) >0 ? 'green' : 'red'}}>{DOT_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_DOT}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_DOT : (parseFloat(liveprice_DOT*conversion).toFixed(2))
          setlive(g)
          setpair(`DOT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_DOT : (parseFloat(liveprice_DOT*conversion).toFixed(2))
          setlive(g)
          setpair(`DOT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    <article class="leaderboard__profile">
      <img src={uni} alt="Uniswap (UNI)" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
setopen_UNI(true)
        seti(1)
      }}>Uniswap (UNI)</span>
      <span class="leaderboard__value" style={{color : parseFloat(UNI_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_UNI : (parseFloat(liveprice_UNI*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(UNI_per) >0 ? 'green' : 'red'}}>{UNI_per}%</span></span>
      <Dialog open={open_UNI} onClose={()=>{seti(1);setopen_UNI(false)}}>
     
      <DialogContent>
 
                    <img src={uni} width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(UNI_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_UNI : (parseFloat(liveprice_UNI*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(UNI_per) >0 ? 'green' : 'red'}}>{UNI_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_UNI}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_UNI : (parseFloat(liveprice_UNI*conversion).toFixed(2))
          setlive(g)
          setpair(`UNI/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_UNI : (parseFloat(liveprice_UNI*conversion).toFixed(2))
          setlive(g)
          setpair(`UNI/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    <article class="leaderboard__profile">
      <img src={rune} alt="THORChain (RUNE)" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
setopen_RUNE(true)
        seti(1)
      }}>THORChain (RUNE)</span>
      <span class="leaderboard__value" style={{color : parseFloat(RUNE_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_RUNE : (parseFloat(liveprice_RUNE*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(RUNE_per) >0 ? 'green' : 'red'}}>{RUNE_per}%</span></span>
      <Dialog open={open_RUNE} onClose={()=>{seti(1);setopen_RUNE(false)}}>
     
      <DialogContent>
 
                    <img src={rune} width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(RUNE_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_RUNE : (parseFloat(liveprice_RUNE*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(RUNE_per) >0 ? 'green' : 'red'}}>{RUNE_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_RUNE}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_RUNE : (parseFloat(liveprice_RUNE*conversion).toFixed(2))
          setlive(g)
          setpair(`RUNE/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_RUNE : (parseFloat(liveprice_RUNE*conversion).toFixed(2))
          setlive(g)
          setpair(`RUNE/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    <article class="leaderboard__profile">
      <img src={Sol} alt="SOLANA (SOL)" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
setopen_SOL(true)
        seti(1)
      }}>SOLANA (SOL)</span>
      <span class="leaderboard__value" style={{color : parseFloat(SOL_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_SOL : (parseFloat(liveprice_SOL*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(SOL_per) >0 ? 'green' : 'red'}}>{SOL_per}%</span></span>
      <Dialog open={open_SOL} onClose={()=>{seti(1);setopen_SOL(false)}}>
     
      <DialogContent>
 
                    <img src={Sol} width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(SOL_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_SOL : (parseFloat(liveprice_SOL*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(SOL_per) >0 ? 'green' : 'red'}}>{SOL_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_SOL}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_SOL : (parseFloat(liveprice_SOL*conversion).toFixed(2))
          setlive(g)
          setpair(`SOL/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_SOL : (parseFloat(liveprice_SOL*conversion).toFixed(2))
          setlive(g)
          setpair(`SOL/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    <article class="leaderboard__profile" style={{height:"5rem"}}>
      <img src={ftt} alt="FTX (FTT)" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
setopen_FTT(true)
        seti(1)
      }}>FTX (FTT)</span>
      <span class="leaderboard__value" style={{color : parseFloat(FTT_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_FTT : (parseFloat(liveprice_FTT*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(FTT_per) >0 ? 'green' : 'red'}}>{FTT_per}%</span></span>
      <Dialog open={open_FTT} onClose={()=>{seti(1);setopen_FTT(false)}}>
     
      <DialogContent>
 
                    <img src={ftt} width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(FTT_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_FTT : (parseFloat(liveprice_FTT*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(FTT_per) >0 ? 'green' : 'red'}}>{FTT_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_FTT}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_FTT : (parseFloat(liveprice_FTT*conversion).toFixed(2))
          setlive(g)
          setpair(`FTT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_FTT : (parseFloat(liveprice_FTT*conversion).toFixed(2))
          setlive(g)
          setpair(`FTT/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    <article class="leaderboard__profile">
      <img src={axs} alt="Axie Infinity (AXS)" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
setopen_AXS(true)
        seti(1)
      }}>Axie Infinity (AXS)</span>
      <span class="leaderboard__value" style={{color : parseFloat(AXS_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_AXS : (parseFloat(liveprice_AXS*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(AXS_per) >0 ? 'green' : 'red'}}>{AXS_per}%</span></span>
      <Dialog open={open_AXS} onClose={()=>{seti(1);setopen_AXS(false)}}>
     
      <DialogContent>
 
                    <img src={axs} width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(AXS_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_AXS : (parseFloat(liveprice_AXS*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(AXS_per) >0 ? 'green' : 'red'}}>{AXS_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_AXS}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_AXS : (parseFloat(liveprice_AXS*conversion).toFixed(2))
          setlive(g)
          setpair(`AXS/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_AXS : (parseFloat(liveprice_AXS*conversion).toFixed(2))
          setlive(g)
          setpair(`AXS/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    <article class="leaderboard__profile">
      <img src={Matic} alt="Polygon (MATIC)" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
setopen_MATIC(true)
        seti(1)
      }}>Polygon (MATIC)</span>
      <span class="leaderboard__value" style={{color : parseFloat(MATIC_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_MATIC : (parseFloat(liveprice_MATIC*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(MATIC_per) >0 ? 'green' : 'red'}}>{MATIC_per}%</span></span>
      <Dialog open={open_MATIC} onClose={()=>{seti(1);setopen_MATIC(false)}}>
     
      <DialogContent>
 
                    <img src={Matic} width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(MATIC_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_MATIC : (parseFloat(liveprice_MATIC*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(MATIC_per) >0 ? 'green' : 'red'}}>{MATIC_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_MATIC}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_MATIC : (parseFloat(liveprice_MATIC*conversion).toFixed(2))
          setlive(g)
          setpair(`MATIC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_MATIC : (parseFloat(liveprice_MATIC*conversion).toFixed(2))
          setlive(g)
          setpair(`MATIC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    <article class="leaderboard__profile">
      <img src={gtc} alt="Gitcoin (GTC)" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
setopen_GTC(true)
        seti(1)
      }}>Gitcoin (GTC)</span>
      <span class="leaderboard__value" style={{color : parseFloat(GTC_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_GTC : (parseFloat(liveprice_GTC*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(GTC_per) >0 ? 'green' : 'red'}}>{GTC_per}%</span></span>
      <Dialog open={open_GTC} onClose={()=>{seti(1);setopen_GTC(false)}}>
     
      <DialogContent>
 
                    <img src={gtc} width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(GTC_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_GTC : (parseFloat(liveprice_GTC*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(GTC_per) >0 ? 'green' : 'red'}}>{GTC_per}%</span></span><br/>
        {/* <canvas id="btcChart" ref={refHandler_GTC}></canvas> */}
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_GTC : (parseFloat(liveprice_GTC*conversion).toFixed(2))
          setlive(g)
          setpair(`GTC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_GTC : (parseFloat(liveprice_GTC*conversion).toFixed(2))
          setlive(g)
          setpair(`GTC/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    <article class="leaderboard__profile">
      <img src={alice} alt="Alice (ALICE)" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
setopen_ALICE(true)
        seti(1)
      }}>Alice (ALICE)</span>
      <span class="leaderboard__value" style={{color : parseFloat(ALICE_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_ALICE : (parseFloat(liveprice_ALICE*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(ALICE_per) >0 ? 'green' : 'red'}}>{ALICE_per}%</span></span>
      <Dialog open={open_ALICE} onClose={()=>{seti(1);setopen_ALICE(false)}}>
     
      <DialogContent>
 
                    <img src={alice} width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(ALICE_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_ALICE : (parseFloat(liveprice_ALICE*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(ALICE_per) >0 ? 'green' : 'red'}}>{ALICE_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_ALICE}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_ALICE : (parseFloat(liveprice_ALICE*conversion).toFixed(2))
          setlive(g)
          setpair(`ALICE/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_ALICE : (parseFloat(liveprice_ALICE*conversion).toFixed(2))
          setlive(g)
          setpair(`ALICE/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    <article class="leaderboard__profile">
      <img src={fil} alt="FileCoin (FIL)" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
setopen_FIL(true)
        seti(1)
      }}>FileCoin (FIL)</span>
      <span class="leaderboard__value" style={{color : parseFloat(FIL_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_FIL : (parseFloat(liveprice_FIL*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(FIL_per) >0 ? 'green' : 'red'}}>{FIL_per}%</span></span>
      <Dialog open={open_FIL} onClose={()=>{seti(1);setopen_FIL(false)}}>
     
      <DialogContent>
 
                    <img src={fil} width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(FIL_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_FIL : (parseFloat(liveprice_FIL*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(FIL_per) >0 ? 'green' : 'red'}}>{FIL_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_FIL}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_FIL : (parseFloat(liveprice_FIL*conversion).toFixed(2))
          setlive(g)
          setpair(`FIL/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_FIL : (parseFloat(liveprice_FIL*conversion).toFixed(2))
          setlive(g)
          setpair(`FIL/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    <article class="leaderboard__profile">
      <img src={ftm} alt="Fantom (FTM)" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
setopen_FTM(true)
        seti(1)
      }}>Fantom (FTM)</span>
      <span class="leaderboard__value" style={{color : parseFloat(FTM_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_FTM : (parseFloat(liveprice_FTM*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(FTM_per) >0 ? 'green' : 'red'}}>{FTM_per}%</span></span>
      <Dialog open={open_FTM} onClose={()=>{seti(1);setopen_FTM(false)}}>
     
      <DialogContent>
 
                    <img src={ftm} width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(FTM_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_FTM : (parseFloat(liveprice_FTM*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(FTM_per) >0 ? 'green' : 'red'}}>{FTM_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_FTM}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_FTM : (parseFloat(liveprice_FTM*conversion).toFixed(2))
          setlive(g)
          setpair(`FTM/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_FTM : (parseFloat(liveprice_FTM*conversion).toFixed(2))
          setlive(g)
          setpair(`FTM/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    <article class="leaderboard__profile">
      <img src={Dgb} alt="DigiByte (DGB)" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
setopen_DGB(true)
        seti(1)
      }}>DigiByte (DGB)</span>
      <span class="leaderboard__value" style={{color : parseFloat(DGB_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_DGB : (parseFloat(liveprice_DGB*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(DGB_per) >0 ? 'green' : 'red'}}>{DGB_per}%</span></span>
      <Dialog open={open_DGB} onClose={()=>{seti(1);setopen_DGB(false)}}>
     
      <DialogContent>
 
                    <img src={Dgb} width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(DGB_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_DGB : (parseFloat(liveprice_DGB*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(DGB_per) >0 ? 'green' : 'red'}}>{DGB_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_DGB}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_DGB : (parseFloat(liveprice_DGB*conversion).toFixed(2))
          setlive(g)
          setpair(`DGB/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_DGB : (parseFloat(liveprice_DGB*conversion).toFixed(2))
          setlive(g)
          setpair(`DGB/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    <article class="leaderboard__profile">
      <img src={Mana} alt="Decentraland (MANA)" class="leaderboard__picture"/>
      <span class="leaderboard__name"onClick={()=>{
        setopen_MANA(true)
        seti(1)
      }}>Decentraland (MANA)</span>
      <span class="leaderboard__value" style={{color : parseFloat(MANA_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_MANA : (parseFloat(liveprice_MANA*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(MANA_per) >0 ? 'green' : 'red'}}>{MANA_per}%</span></span>
      <Dialog open={open_MANA} onClose={()=>{seti(1);setopen_MANA(false)}}>
     
      <DialogContent>
 
                    <img src={Mana} width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(MANA_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_MANA : (parseFloat(liveprice_MANA*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(MANA_per) >0 ? 'green' : 'red'}}>{MANA_per}%</span></span><br/>
        <canvas id="btcChart" ref={refHandler_MANA}></canvas>
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_MANA : (parseFloat(liveprice_MANA*conversion).toFixed(2))
          setlive(g)
          setpair(`MANA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_MANA : (parseFloat(liveprice_MANA*conversion).toFixed(2))
          setlive(g)
          setpair(`MANA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>
    <article class="leaderboard__profile">
      <img src={ata} alt="Automata (ATA)" class="leaderboard__picture"/>
      <span class="leaderboard__name" onClick={()=>{
        setopen_ATA(true)
        seti(1)
      }}>Automata  (ATA)</span>
      <span class="leaderboard__value" style={{color : parseFloat(ATA_per) >0 ? 'green' : 'red' }}>{mobileswitch1 ? liveprice_ATA : (parseFloat(liveprice_ATA*conversion).toFixed(2))}<span>{mobileswitch1 ? 'USDT' : 'INRD'}</span><br/><span class="leaderboard__value" style={{color : parseFloat(ATA_per) >0 ? 'green' : 'red'}}>{ATA_per}%</span></span>
      <Dialog open={open_ATA} onClose={()=>{seti(1);setopen_ATA(false)}}>
     
      <DialogContent>
 
        <img src={ata} width="15%"/> 
        <span class="leaderboard__value" style={{textAlign:"cente",marginLeft:"2rem" ,color : parseFloat(ATA_per) >0 ? 'green' : 'red', fontSize:"2rem" }}> {mobileswitch1 ? liveprice_ATA : (parseFloat(liveprice_ATA*conversion).toFixed(2))}<span style={{fontSize: "1rem"}}>{mobileswitch1 ? 'USDT' : 'INRD'}</span>{"        "}<span class="leaderboard__value" style={{color : parseFloat(ATA_per) >0 ? 'green' : 'red'}}>{ATA_per}%</span></span><br/>
        {/* <canvas id="btcChart" ref={refHandler_ATA}></canvas> */}
        <span style={{marginLeft:"1.4rem"}}>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_ATA : (parseFloat(liveprice_ATA*conversion).toFixed(2))
          setlive(g)
          setpair(`ATA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_buy(true)

        }} >Buy</Button>
        <Button onClick={()=>{
          const g = mobileswitch1 ? liveprice_ATA : (parseFloat(liveprice_ATA*conversion).toFixed(2))
          setlive(g)
          setpair(`ATA/${mobileswitch1 ? 'USDT' : 'INRD'}`)
          setshow_sell(true)
        }}>Sell</Button>
        </span>
        
      </DialogContent>
      </Dialog>
    </article>

    </main>
</article>
  </>

}

</>
        }
      </div>
    );
  
  } else {
   
  return (
    
    <>
      <Dialog open={port} onClose={()=>{
        setport(false)
      }} aria-labelledby="form-dialog-title">
        <DialogContent>
        <Card>
      <CardBody>
        
        <CardTitle style={{textAlign:"center"}} tag="h3"><img src={Btc}/> BITCOIN<br/><div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("BTC_Coins")} BTC</div></CardTitle>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"><img src={Bnb}/>    BNB <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("BNB_Coins")} BNB</div></CardTitle>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        
        <CardTitle style={{textAlign:"center"}}  tag="h3"><img src={Eth}/>    ETHEREUM <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("ETH_Coins")} ETH</div></CardTitle>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        
        <CardTitle style={{textAlign:"center"}}  tag="h3"><img height="30rem" src={usdt}/>    USDT <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("USDT_Coins")} USDT</div></CardTitle>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={ruppee}/>    INRD <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("INRD_Coins")} INRD</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Ksm}/>    KUSAMA <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("KSM_Coins")} KSM</div></CardTitle>
      </CardBody>
    </Card>  
    <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={ata}/>    AUTOMATA NETWORK <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("ATA_Coins")} ATA</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Mana}/>   DECENTRALAND  <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("MANA_Coins")} MANA</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Dgb}/>    DIGIBYTE <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("DGB_Coins")} DGB</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={ftm}/>    FANTOM <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("FTM_Coins")} FTM</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={alice}/>    MY NEIGHBOR ALICE <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("ALICE_Coins")} ALICE</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={gtc}/>    GITCOIN <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("GTC_Coins")} GTC</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Matic}/>    MATIC NETWORK <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("MATIC_Coins")} MATIC</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={axs}/>    AXIE INFINITY <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("AXS_Coins")} AXS</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={ftt}/>    FTX TOKEN <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("FTT_Coins")} FTT</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Sol}/>    SOLANA <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("SOL_Coins")} SOL</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={rune}/>   THORCHAIN <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("RUNE_Coins")} RUNE</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={uni}/>    UNISWAP <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("UNI_Coins")} UNI</div></CardTitle>
      </CardBody>
    </Card>  

    <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Dot}/>    POLKADOT <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("DOT_Coins")} DOT</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={vet}/>    VECHAIN <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("VET_Coins")} VET</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={tfuel}/>    THETA FUEL <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("TFUEL_Coins")} TFUEL</div></CardTitle>
      </CardBody>
    </Card>  

    <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Grt}/>    THE GRAPH <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("GRT_Coins")} GRT</div></CardTitle>
      </CardBody>
    </Card>

     <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={Ada}/>    CARDANO <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("ADA_Coins")} ADA</div></CardTitle>
      </CardBody>
    </Card>  

    <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={fil}/>    FILECOIN <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("FIL_Coins")} FIL</div></CardTitle>
      </CardBody>
    </Card>

    <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={link}/>    CHAINLINK <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("LINK_Coins")} LINK</div></CardTitle>
      </CardBody>
    </Card>

    <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={luna}/>    TERRA <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("LUNA_Coins")} LUNA</div></CardTitle>
      </CardBody>
    </Card>

    <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={theta}/>    THETA NETWORK <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("THETA_Coins")} THETA</div></CardTitle>
      </CardBody>
    </Card>  
      


    <Card>
      <CardBody>
       
        <CardTitle style={{textAlign:"center"}}  tag="h3"> <img height="30rem" src={cryptologo} style={{backgroundColor:"white",borderRadius:"20px"}}/>    ANTEAG <div style={{marginBottom:"-2rem", color:"yellow"}}>{localStorage.getItem("ANTEAG_Coins")} ANTEAG</div></CardTitle>
      </CardBody>
    </Card>
       

       </DialogContent>
     </Dialog>
      <div className="content" style={{marginLeft:"0.8rem"}}>
      {loadin_cont ? <LoadDash /> : <>
<Ticker offset="run-in" speed={10}>
                {()=>{<p>ANTEAG is under ICO</p>}}
              </Ticker>
        <Row style={{marginBottom:"0.6rem",height:"7rem"}}>
        <div>
      <Navbar color="dark" light expand="md" style={{width:"100%",marginLeft:"0.5rem",borderRadius:"10px",paddingLeft:"2rem"}}>
       
        <NavbarToggler style={{margin:"auto"}} onClick={toggle}>
        <span style={{fontSize:"2rem",color:"white",borderColor:"white"}}> {pair.substr(0,pair.indexOf("/"))} : {localStorage.getItem(`${pair.substr(0,pair.indexOf("/"))}_Coins`)} </span>
        <span style={{fontSize:"2rem",color:"white",borderColor:"white"}}> {pair.substr(pair.indexOf("/")+1,pair.length)} : {localStorage.getItem(`${pair.substr(pair.indexOf("/")+1,pair.length)}_Coins`)}  </span>

        
          
        </NavbarToggler>

       

          <Nav className="mr-auto" navbar style={{textAlign:"center"}}>
            <NavItem style={{marginLeft:"1rem"}}> 
            
            <UncontrolledDropdown setActiveFromChild>
            
          <DropdownToggle tag="a" style={{fontSize:"1.5rem",borderRadius:"10px",borderWidth:'4px',borderColor:"white"}} >
            {pair}<br/>▼  
          </DropdownToggle>
         
          <DropdownMenu  style={{maxHeight:"20rem" ,overflow:"scroll"}}>
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('BTC/USDT');localStorage.setItem("pair",'BTC/USDT');settradingvalue('BTCUSDT');setlive(liveprice_BTC_u);setlivevol(btc_u_vol)}}>BTC/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('BTC/INRD');localStorage.setItem("pair",'BTC/INRD');settradingvalue('BTCINR');setlive(liveprice_BTC);setlivevol(btc_vol)}}>BTC/INRD</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ETH/USDT');localStorage.setItem("pair",'ETH/USDT');settradingvalue('ETHUSDT');setlive(liveprice_ETH_u);setlivevol(eth_u_vol)}}>ETH/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ETH/INRD');localStorage.setItem("pair",'ETH/INRD');settradingvalue('ETHINR');setlive(liveprice_ETH);setlivevol(eth_vol)}}>ETH/INRD</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('BNB/USDT');localStorage.setItem("pair",'BNB/USDT');settradingvalue('BNBUSDT');setlive(liveprice_BNB_u);setlivevol(bnb_u_vol)}}>BNB/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('BNB/INRD');localStorage.setItem("pair",'BNB/INRD');settradingvalue('BNBINR');setlive(liveprice_BNB);setlivevol(bnb_vol)}}>BNB/INR</DropdownItem>
            
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('KSM/USDT');localStorage.setItem("pair",'KSM/USDT');settradingvalue('KSMUSDT');setlive(liveprice_KSM_u);setlivevol(btc_u_vol)}}>KSM/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('KSM/INRD');localStorage.setItem("pair",'KSM/INRD');settradingvalue('KSMINR');setlive(liveprice_KSM);setlivevol(bnb_vol)}}>KSM/INRD</DropdownItem>
            
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('ATA/USDT');localStorage.setItem("pair",'ATA/USDT');settradingvalue('ATAUSDT');setlive(liveprice_ATA_u);setlivevol(btc_u_vol)}}>ATA/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ATA/INRD');localStorage.setItem("pair",'ATA/INRD');settradingvalue('ATAINR');setlive(liveprice_ATA);setlivevol(bnb_vol)}}>ATA/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('MANA/USDT');localStorage.setItem("pair",'MANA/USDT');settradingvalue('MANAUSDT');setlive(liveprice_MANA_u);setlivevol(btc_u_vol)}}>MANA/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('MANA/INRD');localStorage.setItem("pair",'MANA/INRD');settradingvalue('MANAINR');setlive(liveprice_MANA);setlivevol(bnb_vol)}}>MANA/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('DGB/USDT');localStorage.setItem("pair",'DGB/USDT');settradingvalue('DGBUSDT');setlive(liveprice_DGB_u);setlivevol(btc_u_vol)}}>DGB/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('DGB/INRD');localStorage.setItem("pair",'DGB/INRD');settradingvalue('DGBINR');setlive(liveprice_DGB);setlivevol(bnb_vol)}}>DGB/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('FTM/USDT');localStorage.setItem("pair",'FTM/USDT');settradingvalue('FTMUSDT');setlive(liveprice_FTM_u);setlivevol(btc_u_vol)}}>FTM/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('FTM/INRD');localStorage.setItem("pair",'FTM/INRD');settradingvalue('FTMINR');setlive(liveprice_FTM);setlivevol(bnb_vol)}}>FTM/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('ALICE/USDT');localStorage.setItem("pair",'ALICE/USDT');settradingvalue('ALICEUSDT');setlive(liveprice_ALICE_u);setlivevol(btc_u_vol)}}>ALICE/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ALICE/INRD');localStorage.setItem("pair",'ALICE/INRD');settradingvalue('ALICEINR');setlive(liveprice_ALICE);setlivevol(bnb_vol)}}>ALICE/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('GTC/USDT');localStorage.setItem("pair",'GTC/USDT');settradingvalue('GTCUSDT');setlive(liveprice_GTC_u);setlivevol(btc_u_vol)}}>GTC/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('GTC/INRD');localStorage.setItem("pair",'GTC/INRD');settradingvalue('GTCINR');setlive(liveprice_GTC);setlivevol(bnb_vol)}}>GTC/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('MATIC/USDT');localStorage.setItem("pair",'MATIC/USDT');settradingvalue('MATICUSDT');setlive(liveprice_MATIC_u);setlivevol(btc_u_vol)}}>MATIC/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('MATIC/INRD');localStorage.setItem("pair",'MATIC/INRD');settradingvalue('MATICINR');setlive(liveprice_MATIC);setlivevol(bnb_vol)}}>MATIC/INRD</DropdownItem>
          
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('AXS/USDT');localStorage.setItem("pair",'AXS/USDT');settradingvalue('AXSUSDT');setlive(liveprice_AXS_u);setlivevol(btc_u_vol)}}>AXS/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('AXS/INRD');localStorage.setItem("pair",'AXS/INRD');settradingvalue('AXSINR');setlive(liveprice_AXS);setlivevol(bnb_vol)}}>AXS/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('FTT/USDT');localStorage.setItem("pair",'FTT/USDT');settradingvalue('FTTUSDT');setlive(liveprice_FTT_u);setlivevol(btc_u_vol)}}>FTT/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('FTT/INRD');localStorage.setItem("pair",'FTT/INRD');settradingvalue('FTTINR');setlive(liveprice_FTT);setlivevol(bnb_vol)}}>FTT/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('SOL/USDT');localStorage.setItem("pair",'SOL/USDT');settradingvalue('SOLUSDT');setlive(liveprice_SOL_u);setlivevol(btc_u_vol)}}>SOL/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('SOL/INRD');localStorage.setItem("pair",'SOL/INRD');settradingvalue('SOLINR');setlive(liveprice_SOL);setlivevol(bnb_vol)}}>SOL/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('RUNE/USDT');localStorage.setItem("pair",'RUNE/USDT');settradingvalue('RUNEUSDT');setlive(liveprice_RUNE_u);setlivevol(btc_u_vol)}}>RUNE/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('RUNE/INRD');localStorage.setItem("pair",'RUNE/INRD');settradingvalue('RUNEINR');setlive(liveprice_RUNE);setlivevol(bnb_vol)}}>RUNE/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('UNI/USDT');localStorage.setItem("pair",'UNI/USDT');settradingvalue('UNIUSDT');setlive(liveprice_UNI_u);setlivevol(btc_u_vol)}}>UNI/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('UNI/INRD');localStorage.setItem("pair",'UNI/INRD');settradingvalue('UNIINR');setlive(liveprice_UNI);setlivevol(bnb_vol)}}>UNI/INRD</DropdownItem>
            
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('DOT/USDT');localStorage.setItem("pair",'DOT/USDT');settradingvalue('DOTUSDT');setlive(liveprice_DOT_u);setlivevol(btc_u_vol)}}>DOT/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('DOT/INRD');localStorage.setItem("pair",'DOT/INRD');settradingvalue('DOTINR');setlive(liveprice_DOT);setlivevol(bnb_vol)}}>DOT/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('VET/USDT');localStorage.setItem("pair",'VET/USDT');settradingvalue('VETUSDT');setlive(liveprice_VET_u);setlivevol(btc_u_vol)}}>VET/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('VET/INRD');localStorage.setItem("pair",'VET/INRD');settradingvalue('VETINR');setlive(liveprice_VET);setlivevol(bnb_vol)}}>VET/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('TFUEL/USDT');localStorage.setItem("pair",'TFUEL/USDT');settradingvalue('TFUELUSDT');setlive(liveprice_TFUEL_u);setlivevol(btc_u_vol)}}>TFUEL/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('TFUEL/INRD');localStorage.setItem("pair",'TFUEL/INRD');settradingvalue('TFUELINR');setlive(liveprice_TFUEL);setlivevol(bnb_vol)}}>TFUEL/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('GRT/USDT');localStorage.setItem("pair",'GRT/USDT');settradingvalue('GRTUSDT');setlive(liveprice_GRT_u);setlivevol(btc_u_vol)}}>GRT/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('GRT/INRD');localStorage.setItem("pair",'GRT/INRD');settradingvalue('GRTINR');setlive(liveprice_GRT);setlivevol(bnb_vol)}}>GRT/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('ADA/USDT');localStorage.setItem("pair",'ADA/USDT');settradingvalue('ADAUSDT');setlive(liveprice_ADA_u);setlivevol(btc_u_vol)}}>ADA/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ADA/INRD');localStorage.setItem("pair",'ADA/INRD');settradingvalue('ADAINR');setlive(liveprice_ADA);setlivevol(bnb_vol)}}>ADA/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('FIL/USDT');localStorage.setItem("pair",'FIL/USDT');settradingvalue('FILUSDT');setlive(liveprice_FIL_u);setlivevol(btc_u_vol)}}>FIL/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('FIL/INRD');localStorage.setItem("pair",'FIL/INRD');settradingvalue('FILINR');setlive(liveprice_FIL);setlivevol(bnb_vol)}}>FIL/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('LINK/USDT');localStorage.setItem("pair",'LINK/USDT');settradingvalue('LINKUSDT');setlive(liveprice_LINK_u);setlivevol(btc_u_vol)}}>LINK/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('LINK/INRD');localStorage.setItem("pair",'LINK/INRD');settradingvalue('LINKINR');setlive(liveprice_LINK);setlivevol(bnb_vol)}}>LINK/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('LUNA/USDT');localStorage.setItem("pair",'LUNA/USDT');settradingvalue('LUNAUSDT');setlive(liveprice_LUNA_u);setlivevol(btc_u_vol)}}>LUNA/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('LUNA/INRD');localStorage.setItem("pair",'LUNA/INRD');settradingvalue('LUNAINR');setlive(liveprice_LUNA);setlivevol(bnb_vol)}}>LUNA/INRD</DropdownItem>

            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('THETA/USDT');localStorage.setItem("pair",'THETA/USDT');settradingvalue('THETAUSDT');setlive(liveprice_FIL_u);setlivevol(btc_u_vol)}}>THETA/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('THETA/INRD');localStorage.setItem("pair",'THETA/INRD');settradingvalue('THETAINR');setlive(liveprice_FIL);setlivevol(bnb_vol)}}>THETA/INRD</DropdownItem>


            <DropdownItem style={{color:"red"}} onClick={()=>{setpair('ANTEAG/USDT');localStorage.setItem("pair",'ANTEAG/USDT');settradingvalue('ANTEAGUSDT');setlive(liveprice_ANTEAG_u);setlivevol(ant_u_vol)}}>ANTEAG/USDT</DropdownItem>
            <DropdownItem style={{color:"red"}}  onClick={()=>{setpair('ANTEAG/INRD');localStorage.setItem("pair",'ANTEAG/INRD');settradingvalue('ANTEAGINR');setlive(liveprice_ANTEAG);setlivevol(ant_vol)}}>ANTEAG/INRD</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
            </NavItem>
            <Collapse isOpen={isOpen} navbar>      
            <NavItem style={{marginLeft:"2rem",fontSize:'1.5rem',textAlign:"center"}}>
              <CardText>Current {pair.substr(0,pair.indexOf('/'))} Price</CardText><CardText style={{color:"green",fontWeight:"bold"}}>{pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2)} {pair.substr(pair.indexOf('/')+1,pair.length)}</CardText>
            </NavItem>
            {/* <NavItem style={{marginLeft:"2rem",fontSize:'1.5rem'}}>
              <CardText>24 hour {pair.substr(0,pair.indexOf('/'))} Volume</CardText><CardText style={{color:"green",fontWeight:"bold parseFloat(THETA_per) >0 ? 'green' : 'red'"}}>{live_vol} {pair.substr(pair.indexOf('/')+1,pair.length)}</CardText>
            </NavItem> */}
    <NavItem className="test" onClick={()=>{
      setport(true)
    }} style={{marginLeft:"7rem",fontSize:'1.5rem',cursor:"pointer"}}>
        <CardText>Total Portfolio : ₹ {(    (parseFloat(localStorage.getItem("THETA_Coins"))*parseFloat(liveprice_THETA)*conversion)+(parseFloat(localStorage.getItem("LUNA_Coins"))*parseFloat(liveprice_LUNA)*conversion)+(parseFloat(localStorage.getItem("LINK_Coins"))*parseFloat(liveprice_LINK)*conversion)+(parseFloat(localStorage.getItem("FIL_Coins"))*parseFloat(liveprice_FIL)*conversion)+(parseFloat(localStorage.getItem("ADA_Coins"))*parseFloat(liveprice_ADA)*conversion)+(parseFloat(localStorage.getItem("GRT_Coins"))*parseFloat(liveprice_GRT)*conversion)+(parseFloat(localStorage.getItem("TFUEL_Coins"))*parseFloat(liveprice_TFUEL)*conversion)+(parseFloat(localStorage.getItem("VET_Coins"))*parseFloat(liveprice_VET)*conversion)+(parseFloat(localStorage.getItem("DOT_Coins"))*parseFloat(liveprice_DOT)*conversion)+(parseFloat(localStorage.getItem("UNI_Coins"))*parseFloat(liveprice_UNI)*conversion)+(parseFloat(localStorage.getItem("RUNE_Coins"))*parseFloat(liveprice_RUNE)*conversion)+(parseFloat(localStorage.getItem("SOL_Coins"))*parseFloat(liveprice_SOL)*conversion)+(parseFloat(localStorage.getItem("FTT_Coins"))*parseFloat(liveprice_FTT)*conversion)+(parseFloat(localStorage.getItem("AXS_Coins"))*parseFloat(liveprice_AXS)*conversion)+(parseFloat(localStorage.getItem("MATIC_Coins"))*parseFloat(liveprice_MATIC)*conversion)+(parseFloat(localStorage.getItem("GTC_Coins"))*parseFloat(liveprice_GTC)*conversion)+(parseFloat(localStorage.getItem("ALICE_Coins"))*parseFloat(liveprice_ALICE)*conversion)+(parseFloat(localStorage.getItem("FTM_Coins"))*parseFloat(liveprice_FTM)*conversion)+(parseFloat(localStorage.getItem("MANA_Coins"))*parseFloat(liveprice_MANA)*conversion)+(parseFloat(localStorage.getItem("ATA_Coins"))*parseFloat(liveprice_ATA)*conversion)+(parseFloat(localStorage.getItem("KSM_Coins"))*parseFloat(liveprice_KSM)*conversion) +(parseFloat(localStorage.getItem("BTC_Coins"))*parseFloat(liveprice_BTC)*conversion)+(parseFloat(localStorage.getItem("BNB_Coins"))*parseFloat(liveprice_BNB)*conversion)+(parseFloat(localStorage.getItem("ETH_Coins"))*parseFloat(liveprice_ETH)*conversion)+parseFloat(localStorage.getItem("INRD_Coins"))+(parseFloat(localStorage.getItem("USDT_Coins"))*conversion)).toFixed(2)}</CardText>
    </NavItem>


</Collapse>          
       
</Nav>
         
        
      </Navbar>
    </div>
        </Row>
       
       <br></br>
          
{pair == 'ANTEAG/USDT' || pair == 'ANTEAG/INRD' ? <ChartViewer  className="apexcharts-tooltip"/>: 
<TradingViewWidget

    symbol={tradingvalue}
    theme={Themes.DARK}
    locale="en"
    width="100%"
    height="800vh"
  />}

<Row>
 <Tabs style={{marginTop:"5rem"}}> 
    <TabList>
      <Tab>Single Trade</Tab>
      <Tab>Full Trade</Tab>
    </TabList>
    <TabPanel>
<Row>
         
         <Col className="mr-auto ml-auto" lg="6">
           <Card className="card-chart">
             <CardHeader>
               
               <CardTitle tag="h3">
                 <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                 BUY
               </CardTitle>
             </CardHeader>
             <CardBody>
            
              <Tabs>
    <TabList>
      <Tab>Limit</Tab>
      <Tab>Market</Tab>
    </TabList>

    <TabPanel>
    <Form >
    <Label>Price</Label>
    <Input  onChange={(event)=>{
      setbuy_limit_price(parseFloat(event.target.value) )

    }} placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`}></Input>
    <Label>Amount</Label>
   
    
    <Input invalid={!valid} style={{color:"white"}} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} disabled={true} value={buy_limit_amount} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
     if(parseFloat(event.target.value*buy_limit_price)>parseFloat(localStorage.getItem(curr))){
      setvalid(false)
     }
     else{
      setvalid(true)
      // setlimit_buy_total(parseFloat(event.target.value)*parseFloat(buy_limit_price))
     }
      
    }}></Input>

      <Label>Total</Label>
   <Input invalid={!valid} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      
     if(parseFloat(event.target.value)>parseFloat(localStorage.getItem(curr))){
        setvalid(false)
     }
     else{
      setvalid(true)
    
      setbuy_limit_amount(parseFloat(parseFloat(event.target.value) /parseFloat(buy_limit_price)) )
     }
      
    }}></Input>

    <Button disabled={!valid} onClick={()=>{
      axios({
        method:"POST",
        url:"https://api.anteagle.tech/neworder",    
        headers:{
          "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Limit",
          side : "BUY",
          price : buy_limit_price,
          Amount : buy_limit_amount,
          filled : "0.0",
          total : buy_limit_price * buy_limit_amount
        }),
      }).then(res=>{})
    
      if(pair[pair.length-1] == 'T'){
        axios({
          method:"POST",
          url:"https://api.anteagle.tech/neworder",
          headers:{
            "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
            "Content-Type": "application/json",
            Authtoken:"sfsfsff"
          },
          data: JSON.stringify({
            userid : localStorage.getItem("userid"),
            date: "2021-06-21",
            pair: pair.replace("USDT","INRD"),
            type : "Limit",
            side : "BUY",
            price : buy_limit_price*conversion,
            Amount : buy_limit_amount,
            filled : "0.0",
            total : buy_limit_price*conversion*buy_limit_amount
          }),
        }).then(res=>{console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"})
      }
      else{
        axios({
          method:"POST",
          url:"https://api.anteagle.tech/neworder",
          headers:{
            "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
            "Content-Type": "application/json",
            Authtoken:"sfsfsff"
          },
          data: JSON.stringify({
            userid : localStorage.getItem("userid"),
            date: "2021-06-21",
            pair: pair.replace("INRD","USDT"),
            type : "Limit",
            side : "BUY",
            price : buy_limit_price/conversion,
            Amount : buy_limit_amount,
            filled : "0.0",
            total : (buy_limit_price/conversion)*buy_limit_amount
          }),
        }).then(res=>{console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"})
      }

      
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}`
      //console.log(parseFloat(localStorage.getItem(`${curr}_Coins`)) - buy_limit_price*buy_limit_amount)
      const end = parseFloat(localStorage.getItem(`${curr}_Coins`)) - buy_limit_price*buy_limit_amount;
      const range=-9999;                                     //add range
      if( end < 0 && end > range){
        alert("Are you sure that you want to proceed further?");
        var te = parseFloat(localStorage.getItem(`${curr}_Debt`));
        if(te === null){
          te = 0;
        }
        localStorage.setItem(`${curr}_Coins`,end);
        localStorage.setItem(`${curr}_Debt `,end+te);        //set debt
        //console.log("The debt is "+end+te);
      }
       
      else if(end<range) alert("Cannot go beyond this range"); 
      else{
        localStorage.setItem(`${curr}_Coins`,end)
        
      }

      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${end}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json",
        }
      }).then(res=>{
        //console.log(res.data)
      })
    }}>Submit</Button>
    </Form>
    </TabPanel>
    <TabPanel>
    <Form >
    <Label>Price</Label>
    <Input placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} style={{color:"white"}} value={pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2)} disabled onChange={(event)=>{
      setbuy_market_price(event.target.value)
    }}></Input>
    <Label>Amount</Label>
    <Input  disabled={true} style={{color:"white"}} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={buy_market_amount} onChange={(event)=>{
      setbuy_market_amount(event.target.value)
    }} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`}></Input>

      <Label>Total</Label>
   <Input invalid={!valid} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
    setbuy_market_price(parseFloat(pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2)))
     if(parseFloat(event.target.value)>parseFloat(localStorage.getItem(curr))){
      setvalid(false)
      
     }
     else{
      setvalid(true)
      
      setbuy_market_amount(parseFloat(event.target.value)/parseFloat(buy_market_price))
     }
      
    }}></Input>
    <Button  disabled={!valid} onClick={()=>{
      axios({
        method:"POST",
        url:"https://api.anteagle.tech/neworder",
        headers:{
          "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Market",
          side : "BUY",
          price : buy_market_price,
          Amount : parseFloat(buy_market_amount).toFixed(5),
          filled : "0.0",
          total : buy_market_price*buy_market_amount
        }),
      }).then(res=>{console.log(res.data)})
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}`
      const tem = parseFloat(localStorage.getItem(`${curr}_Coins`)) - (parseFloat(buy_market_price)*parseFloat(buy_market_amount))
      alert(parseFloat(localStorage.getItem(`${curr}_Coins`)))
      alert(tem)
      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${tem}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json",
        }
      }).then(res=>{
        console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"
      })
    }}>Submit</Button>
    </Form>
    </TabPanel>
  </Tabs>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> SELL
                </CardTitle>
              </CardHeader>
              <CardBody>
              <Tabs>
    <TabList>
      <Tab>Limit</Tab>
      <Tab>Market</Tab>
    </TabList>

    <TabPanel>
    <Form >
    <Label>Price</Label>
    <Input placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      setsell_limit_price(parseFloat(event.target.value))
    }}></Input>
    <Label>Amount</Label>
    <Input invalid={!valid_s} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={sell_limit_amount} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      if(parseFloat(event.target.value) > parseFloat(localStorage.getItem(curr))){
        setvalid_s(false)
      }
      else{
        setvalid_s(true)
        setsell_limit_amount(parseFloat(event.target.value))
      }
      
    }} ></Input>
 <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{
          const g = parseFloat(localStorage.getItem("BTC_Coins")*value/100).toFixed(5) 
          setsell_limit_amount(parseFloat(localStorage.getItem("BTC_Coins")*value/100).toFixed(5))
          setsell_limit_total(g*sell_limit_price)
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
     
      <Label>Total</Label>
   <Input invalid={!valid_s} disabled={true}  style={{color:"white"}} value={sell_limit_total} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf("/")+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(0,pair.indexOf('/'))}_Coins`
      const curdebt = `${pair.substr(0,pair.indexOf('/'))}_Debt`
      

     if(parseFloat(parseFloat(event.target.value)/parseFloat(sell_limit_price))>parseFloat(localStorage.getItem(curr))){
        // alert("do you want to transact");
       const debt=parseFloat(localStorage.getItem(curr) )- parseFloat(event.target.value*buy_limit_price);
       if(localStorage.getItem(curdebt) +debt > -9999  )
        localStorage.setItem( curdebt,localStorage.getItem(curdebt) +debt );
        //console.log(localStorage.getItem(curdebt) +debt);
        
        setvalid_s(false)
     }
     else{
      setvalid_s(true)
      // setsell_limit_amount(parseFloat(event.target.value)/parseFloat(sell_limit_price))
     }
      
    }}></Input>
    <Button disabled={!valid_s} onClick={()=>{
      axios({
        method:"POST",
        url:"https://api.anteagle.tech/neworder",
        headers:{
          "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Limit",
          side : "SELL",
          price : parseFloat(sell_limit_price),
          Amount : sell_limit_amount,
          filled : "0.0",
          total : sell_limit_price*sell_limit_amount
        }),
      }).then(res=>{console.log(res.data)})
      const curr = `${pair.substr(0,pair.indexOf('/'))}`
      //console.log(localStorage.getItem(`${curr}_Coins`) - sell_limit_amount)
      const end = localStorage.getItem(`${curr}_Coins`) - sell_limit_amount;
      localStorage.setItem(`${curr}_Coins`,end)
      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${curr.toLowerCase()}?coins=${end}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json",
        }
      }).then(res=>{
        console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"
      })
    }}>Submit</Button>
    </Form>
    </TabPanel>
    <TabPanel>
    <Form > 
    <Label>Price</Label>
    <Input placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} value={pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2)} disabled style={{color:"white"}} onChange={(event)=>{
      setsell_market_amount(parseFloat(event.target.value))
    }} ></Input>
    <Label>Amount</Label>
    <Input placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={sell_market_amount} onChange={(event)=>{
      setsell_market_amount(parseFloat(event.target.value))
    }} ></Input>

    <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{
          const g = parseFloat(localStorage.getItem("BTC_Coins")*value/100).toFixed(5) 
          setsell_market_amount(parseFloat(localStorage.getItem("BTC_Coins")*value/100).toFixed(5))
          setsell_market_total(g*(pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2)))
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
     
      <Label>Total</Label>
   <Input invalid={!valid_s} value={sell_market_total} disabled={true} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf("/")+1,pair.length)}`} style={{color : "white"}}onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      const curdebt = `${pair.substr(0,pair.indexOf('/'))}_Debt`
     if((parseFloat(event.target.value)/parseFloat(sell_market_price))>localStorage.getItem(curr)){
      setvalid_s(false)
     }
     else{
      setvalid_s(true)
      // setsell_market_amount(parseFloat(event.target.value)/parseFloat(sell_market_price))
     }
      
    }}></Input>
    <Button disabled={!valid_s} onClick={()=>{
      axios({
        method:"POST",
        url:"https://api.anteagle.tech/neworder",
        headers:{
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Authtoken:"sfsfsff"
        },
        data: JSON.stringify({
          userid : localStorage.getItem("userid"),
          date: "2021-06-21",
          pair: pair,
          type : "Market",
          side : "SELL",
          price : (pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2)),
          Amount : parseFloat(sell_market_amount),
          filled : "0.0",
          total : parseFloat( (pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2) ) *sell_market_amount),
        }),
      }).then(res=>{})
      var tem= parseFloat(localStorage.getItem(`${pair.substr(0,pair.indexOf('/'))}_Coins`))-parseFloat(sell_market_amount)
      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${pair.substr(0,pair.indexOf('/')).toLowerCase()}?coins=${tem}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json"
        }
      }).then(res=>{
        console.log(res.data);swal("Success","Order Submitted Successfully","success");window.location.href = "/"
      })
    }}>Submit</Button>
    </Form>
    </TabPanel>
    
  </Tabs>
  
              </CardBody>
            </Card>
          </Col>
        </Row>
    </TabPanel>
    <TabPanel>
    
    <Row > {/* fulltrade */}
   
    { switchtrade ?
    <Col className="mr-auto ml-auto" lg="6">
        <Tabs>
    <TabList>
      <Tab>Limit</Tab>
      <Tab>Market</Tab>
    </TabList>

    <TabPanel>
           <Card className="card-chart">
             <CardHeader>
               
               <CardTitle tag="h3">
                 <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                 BUY
               </CardTitle>
             </CardHeader>
             <CardBody>
            
    
              
              <Form >
   <Label>Price</Label>
    <Input  onChange={(event)=>{
      setbuy_limit_price(parseFloat(event.target.value) )
      var tempPrice=pricee;
      tempPrice.push(event.target.value);
      setPrice(tempPrice);

    }} placeholder={`ENTER PRICE in ${pair.substr(pair.indexOf('/')+1,pair.length)}`}></Input>
    <Label>Amount</Label>
   
    
    <Input invalid={!valid}  style={{color:"white"}} disabled={true} placeholder={`ENTER AMOUNT in ${pair.substr(0,pair.indexOf('/'))}`} value={buy_limit_amount} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
     if(parseFloat(event.target.value*buy_limit_price)>parseFloat(localStorage.getItem(curr))){
      setvalid(false)
     }
     else{
      setvalid(true)
      //setbuy_limit_amount(parseFloat(event.target.value))
      var tempQuant=quant;
      tempQuant.push(event.target.value);
      setQuant(tempQuant);
     }
      
    }}></Input>

      <Label>Total</Label>
   <Input invalid={!valid} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      //alert(curr)
     if(parseFloat(event.target.value)>parseFloat(localStorage.getItem(curr))){
        setvalid(false)
     }
     else{
      setvalid(true)
      
      setbuy_limit_amount(parseFloat(parseFloat(event.target.value) /parseFloat(buy_limit_price)) )
      var tempQuant=quant;
      tempQuant.push(parseFloat(event.target.value)/parseFloat(buy_limit_price));
      setQuant(tempQuant);
     }
      
    }}></Input>

  
  
   <Button type="reset" disabled={!valid} onClick={()=>{
    
     
    
    const tempQ=finalQuants;
    tempQ.push(quant[quant.length-1])
    const tempP=finalPrices;
    tempP.push(pricee[pricee.length-1])
    localStorage.setItem(`purchased_quantity_${pair}`,parseFloat(quant[quant.length-1]))
    setFinalQuants(tempQ)
    setFinalPrices(tempP)
    setQuant([])
    setPrice([])
     //console.log("final quant is",finalQuants,"final price is",finalPrices);
    setcurr(quant)
    set_bought_price(pricee)
     setswitchtrade(false)
     
   }}>Submit</Button>
   </Form>
   

   
              </CardBody>
            </Card>
            </TabPanel>
            <TabPanel>
            <Card className="card-chart">
             <CardHeader>
               
               <CardTitle tag="h3">
                 <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                 BUY
               </CardTitle>
             </CardHeader>
             <CardBody>
            
    
              
              <Form >
              <Label>Price</Label>
   <Input disabled style={{color:"white"}}  type="number" step="any" value={pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2)} onChange={(event)=>{
      var tempPrice=pricee;
      tempPrice.push(event.target.value);
      setPrice(tempPrice);
      // settrade_price(parseFloat(event.target.value) )

    }} ></Input>
   <Label>Amount</Label>
   <Input   value={buy_market_amount} disabled={true} style={{color:"white"}} type="number" step="any" name="quantity"  onChange={(event)=>{
      var tempQuant=quant;
      tempQuant.push(event.target.value);
      setQuant(tempQuant);
      // settrade_quantity(parseFloat(event.target.value) )

    }}> </Input>

  
  <Label>Total</Label>
   <Input invalid={!valid} placeholder={`TOTAL AMOUNT in ${pair.substr(pair.indexOf('/')+1,pair.length)}`} onChange={(event)=>{
      const curr = `${pair.substr(pair.indexOf('/')+1,pair.length)}_Coins`
      
     if(parseFloat(event.target.value)>parseFloat(localStorage.getItem(curr))){
        setvalid(false)
     }
     else{
      setvalid(true)
     
      setbuy_market_amount(parseFloat(parseFloat(event.target.value) /parseFloat(pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2))).toFixed(4) )
      var tempQuant=quant;
      tempQuant.push(parseFloat(parseFloat(event.target.value) /parseFloat(pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2))).toFixed(4) );
      setQuant(tempQuant);
     }
      
    }}></Input>
   <Button type="reset" disabled={!valid} onClick={()=>{
    
     
     var tempPrice=pricee;
     tempPrice.push(pair == "BTC/USDT" ? liveprice_BTC : pair == "BTC/INRD" ? parseFloat(liveprice_BTC*conversion).toFixed(2) : pair == "ETH/USDT" ? liveprice_ETH : pair == "ETH/INRD" ? parseFloat(liveprice_ETH*conversion).toFixed(2) : pair == "BNB/USDT" ? liveprice_BNB : pair == "BNB/INRD" ? parseFloat(liveprice_BNB*conversion).toFixed(2) : pair == "KSM/USDT" ? liveprice_KSM : pair == "KSM/INRD" ? parseFloat(liveprice_KSM*conversion).toFixed(2) : pair =="ATA/USDT"? liveprice_ATA : pair=="ATA/INRD" ? parseFloat(liveprice_ATA*conversion).toFixed(2) : pair=="MANA/USDT"? liveprice_MANA : pair=="MANA/INRD" ? parseFloat(liveprice_MANA*conversion).toFixed(2) : pair=="DGB/USDT"?liveprice_DGB: pair=="DGB/INRD"? parseFloat(liveprice_DGB*conversion).toFixed(2) : pair=="FTM/USDT"?liveprice_FTM: pair=="FTM/INRD"? parseFloat(liveprice_FTM*conversion).toFixed(2) : pair=="ALICE/USDT"?liveprice_ALICE: pair=="ALICE/INRD"? parseFloat(liveprice_ALICE*conversion).toFixed(2) : pair=="GTC/USDT"?liveprice_GTC: pair=="GTC/INRD"? parseFloat(liveprice_GTC*conversion).toFixed(2) : pair=="MATIC/USDT"?liveprice_MATIC: pair=="MATIC/INRD"? parseFloat(liveprice_MATIC*conversion).toFixed(2):pair=="AXS/USDT"?liveprice_AXS: pair=="AXS/INRD"? parseFloat(liveprice_AXS*conversion).toFixed(2): pair=="FTT/USDT"?liveprice_FTT: pair=="FTT/INRD"? parseFloat(liveprice_FTT*conversion).toFixed(2) :pair=="SOL/USDT"?liveprice_SOL: pair=="SOL/INRD"? parseFloat(liveprice_SOL*conversion).toFixed(2) :pair=="RUNE/USDT"?liveprice_RUNE: pair=="RUNE/INRD"? parseFloat(liveprice_RUNE*conversion).toFixed(2) :pair=="UNI/USDT"?liveprice_UNI: pair=="UNI/INRD"? parseFloat(liveprice_UNI*conversion).toFixed(2):pair=="DOT/USDT"?liveprice_DOT: pair=="DOT/INRD"? parseFloat(liveprice_DOT*conversion).toFixed(2) :pair=="VET/USDT"?liveprice_VET: pair=="VET/INRD"? parseFloat(liveprice_VET*conversion).toFixed(2):pair=="TFUEL/USDT"?liveprice_TFUEL: pair=="TFUEL/INRD"? parseFloat(liveprice_TFUEL*conversion).toFixed(2):pair=="GRT/USDT"?liveprice_GRT: pair=="GRT/INRD"? parseFloat(liveprice_GRT*conversion).toFixed(2):pair=="ADA/USDT"?liveprice_ADA: pair=="ADA/INRD"? parseFloat(liveprice_ADA*conversion).toFixed(2):pair=="FIL/USDT"?liveprice_FIL: pair=="FIL/INRD"? parseFloat(liveprice_FIL*conversion).toFixed(2):pair=="LINK/USDT"?liveprice_LINK: pair=="LINK/INRD"? parseFloat(liveprice_LINK*conversion).toFixed(2):pair=="LUNA/USDT"?liveprice_LUNA: pair=="LUNA/INRD"? parseFloat(liveprice_LUNA*conversion).toFixed(2):pair=="THETA/USDT"?liveprice_THETA: parseFloat(liveprice_THETA*conversion).toFixed(2));
     setPrice(tempPrice);
    const tempQ=finalQuants;
    tempQ.push(quant[quant.length-1])
    const tempP=finalPrices;
    tempP.push(pricee[pricee.length-1])
    localStorage.setItem(`purchased_quantity_${pair}`,parseFloat(quant[quant.length-1]))
    setFinalQuants(tempQ)
    setFinalPrices(tempP)
    setQuant([])
    setPrice([])
     //console.log("final quant is",finalQuants,"final price is",finalPrices);
    setcurr(quant)
    set_bought_price(pricee)
     setswitchtrade(false)
     
   }}>Submit</Button>
   </Form>
   

   
              </CardBody>
            </Card>
            </TabPanel>
            </Tabs>
          </Col>
      :
          <Col className="mr-auto ml-auto" lg="6">
           <Card className="card-chart">
             <CardHeader>
               
               <CardTitle tag="h3">
                 <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                 Sell
               </CardTitle>
               {/* <section>
            <label>MUI autocomplete</label>
            <MuiAutoComplete control={control} />
          </section> */}
           <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">TYPE</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={(e)=>{
            setAge(e.target.value)
          }}
          label="Age"
        >
          <MenuItem value={'STOP LOSS'}>STOP LOSS</MenuItem>
          <MenuItem value={'TAKE PROFIT'}>TAKE PROFIT</MenuItem>
    
        </Select>
      </FormControl>
             </CardHeader>
             <CardBody>
            
              <Tabs>
              
              <Form >
  
   <Label>Selling Price</Label>
   <Input  type="number" step="any" name="price_sell" onChange={(event)=>{
      const tempPrice=pricee;
      tempPrice.push(event.target.value)
      setPrice(tempPrice)
      // setsell_price(parseFloat(event.target.value) )

    }}></Input>

<Label>Selling Amount</Label>
   <Input style={{color:"white"}} disabled type="number" value={full_trade_sell} name="quantity_sell" onChange={(event)=>{
      if(parseFloat(finalQuants[0])-parseFloat(event.target.value) < 0 ){
        //alert("Cannot sell more than you buy");
      }
      else if(parseFloat(localStorage.getItem(`purchased_quantity_${pair}`))-parseFloat(event.target.value)<0){
        //alert(`Only ${parseFloat(localStorage.getItem("purchased_quantity"))-parseFloat(event.target.value)} Left to sell`)
      }
      else{
        if(finalQuants.length == 1){
          localStorage.setItem(`purchased_quantity_${pair}`,parseFloat(finalQuants[0])-parseFloat(event.target.value))
        }
        else{
        localStorage.setItem(`purchased_quantity_${pair}`,parseFloat(localStorage.getItem(`purchased_quantity_${pair}`))-parseFloat(event.target.value))
        }
        const tempQuant=quant;
        tempQuant.push(event.target.value)
        setQuant(tempQuant)
      }
        // setsell_quantity(parseFloat(event.target.value) )

    }}> </Input>
  
  <Slider
        defaultValue={30}
        getAriaValueText={(value)=>{set_full_trade_sell(localStorage.getItem(`purchased_quantity_${pair}`)*value/100)
        quant.push(localStorage.getItem(`purchased_quantity_${pair}`)*value/100)
        if(value == 100){
          setcontinueselling(true)
        }
        else{
          setcontinueselling(false)
        }
      }
    
      }
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
    
     
   <Button type="reset" disabled={continueselling}  onClick={()=>{
   
    const tempQ=finalQuants;
    tempQ.push(quant[quant.length-1])
    const tempP=finalPrices;
    tempP.push(pricee[pricee.length-1])
    setFinalQuants(tempQ)
    setFinalPrices(tempP)
     //console.log("final quant is",finalQuants,"final price is",finalPrices);
    //alert(quant)
     const ans = localStorage.getItem(`purchased_quantity_${pair}`)-quant[quant.length-1]
     localStorage.setItem(`purchased_quantity_${pair}`,ans)
   }}>Continue Selling</Button>
     

<Button type="reset"  disabled={!continueselling} onClick={()=>{
    const tempQ=finalQuants;
    tempQ.push(quant[quant.length-1])
    const tempP=finalPrices;
    tempP.push(pricee[pricee.length-1])
    setFinalQuants(tempQ)
    setFinalPrices(tempP)
    // setQuant([])
    // setPrice([])
     //console.log("final quant is",finalQuants,"final price is",finalPrices);
     setswitchtrade(true)
  axios({
    method : "POST",
    url : "https://api.anteagle.tech/full_trade",
    headers : {
      "Accept" : "application, text/plain, */*",
      "Content-Type" : "application/json"
    },
    data : JSON.stringify({
      prices : finalPrices,
      quantities : finalQuants,
      pair : pair,
      type : "LIMIT",
      userid:localStorage.getItem("userid")
    })
  }).then(res=>{
    if(res.data.success){
     
      var total=finalPrices[0]*finalQuants[0];
      console.log(total)
      var first = pair.substring(0,pair.indexOf("/"))
      var second=pair.substring(pair.indexOf("/")+1, pair.length)
      const tem = (parseFloat(localStorage.getItem(`${second}_Coins`)) - total).toFixed(3)
      const c= pair.substr(pair.lastIndexOf("/")+1,pair.length).toLowerCase()
      alert(tem);
      alert(c);
      axios({
        method:"post",
        url : `https://api.anteagle.tech/get${c}?coins=${tem}&userid=${localStorage.getItem("userid")}`,
        headers:{
          "Accept": "application/json"
        }
      }).then(res=>{
        console.log(res.data);
        swal("Success","Order Submitted Successfully it will execute as you have decided","success")
      })
      setFinalPrices([])
      setFinalQuants([])
    }
  })
  //  axios({
  //      method:"POST",
  //      url:"https://api.anteagle.tech/order",
  //      headers:{
  //        "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
  //        "Content-Type": "application/json",
  //      },
  //      data: JSON.stringify({
        
  //       quantity:finalQuants[0],   //quant[quant.length-1],  //trade_quantity,
  //       price: finalPrices[0],      //pricee[pricee.length-1],     //trade_price,
  //       pair:pair,
  //       type:'LIMIT',
  //       mode:"buy"

  //      }),
      
  //    }).then(res=>{console.log(res.data);
  //    localStorage.setItem("assigned_no",res.data.assigned_no)
  //    localStorage.setItem("order_id",res.data.order_id)
  //    localStorage.setItem("purchased_quantity",res.data.purchased_quantity)
  //    })
  //    for(var i=1;i<finalQuants.length-1;i++){
  //     axios({
  //      method:"POST",
  //      url:"https://anteagle.tech/fulltrade",
  //      headers:{
  //        "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
  //        "Content-Type": "application/json",
 
  //      },
  //      data: JSON.stringify({
  //         quantity: finalQuants[i],  //quant[quant.length-1], //sell_quantity,
  //         price:  finalPrices[i],  //</Form>pricee[pricee.length-1],//sell_price,
  //         pair:pair,
  //         type:'LIMIT',
  //         mode:"sell",
  //         assigned_no : localStorage.getItem("assigned_no"),
  //         order_id:localStorage.getItem("order_id"),
  //         purchased_quantity:localStorage.getItem("purchased_quantity")

  //      }),
  //    }).then(res=>{console.log(res.data)})
  //    }
  //    axios({
  //      method:"POST",
  //      url:"https://api.anteagle.tech/submitorder",
  //      headers:{
  //        "Accept": "application/json, text/plain, */*", // It can be used to overcome cors errors
  //        "Content-Type": "application/json",

  //      },
  //      data: JSON.stringify({
  //         quantity:finalQuants[finalQuants.length-1],  //quant[quant.length-1], //sell_quantity,
  //         price:  finalPrices[finalPrices.length-1], //Form>pricee[pricee.length-1],//sell_price,
  //         pair:pair.replace("/",""),
  //         type:'LIMIT',
  //         mode:"sell",
  //         assigned_no : localStorage.getItem("assigned_no"),
  //         purchased_quantity:localStorage.getItem("purchased_quantity")
        
  //      }),
  //    }).then(res=>{console.log(res.data)
  //     setFinalPrices([])
  //     setFinalQuants([])
  //    setswitchtrade(true)
  //    })

  
   }}>Submit</Button>
   </Form>
   

</Tabs>
    

           </CardBody>
         </Card>
       </Col>
    }
    <Col lg="6" md="12">
            <Card className="card-tasks" style={{overflow:"auto"}}>
              <CardHeader>
             <h3> Trade Overview</h3>
              </CardHeader>
              <CardBody>
   
              <VerticalTimeline layout={'1-column-left'} >
                { finalPrices.map((ans,i)=>{
                  return(
                    <VerticalTimelineElement  
                    contentStyle={{ background: i > 0 ? '#ff0000' : '#1d8cf8', color: '#fff', width:'40%',height:"20%" }} 
                    contentArrowStyle={{ borderRight: `15px solid  ${i > 0 ? '#ff0000' : '#1d8cf8'}` }}>
                        <h1 >{i > 0 ? 'Sell' : 'Buy'}</h1>
                        <p>Price:{ans}</p>
                        <p>Quantity:{finalQuants[i]}</p>
                    </VerticalTimelineElement>
                  )
                  })
                }
              </VerticalTimeline>
               
              </CardBody>
            </Card>
          </Col>
   </Row>  {/*fulltrade */} 
   
   </TabPanel>

</Tabs>  

</Row> 
  
        <Row>
          <Col lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
             <h3> Order Book (BUY)</h3>
              </CardHeader>
              <CardBody>
   
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Price</th>
                      <th>Amount</th>
                      <th>Total</th>
                      <th>pair</th>
                    </tr>
                  </thead>
                  <tbody>
                    {book.map((ans1,i)=>{
                      return(
                        <tr>
                          {ans1.map((res1,i)=>{
                            return(
                              <td>{res1}</td>
                            )
                          })}
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
               
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
             <h3> Order Book (SELL)</h3>
              </CardHeader>
              <CardBody>
   
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Price</th>
                      <th>Amount</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                  {book_s.map((ans1,i)=>{
                      return(
                        <tr>
                          {ans1.map((res1,i)=>{
                            return(
                              <td>{res1}</td>
                            )
                          })}
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
               
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Col xs="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Order Table</CardTitle>
              </CardHeader>
              <CardBody>
               <Tabs>
                <TabList>
                  <Tab>Open Orders({myorders.length})</Tab>
                  <Tab>Trade History</Tab>
                  <Tab>Order History ({allorder.length})</Tab>
                  
                </TabList>
                <TabPanel>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                    <th>Order ID</th>
                      <th>Date</th>
                      <th>Pair</th>
                      <th>type</th>
                      <th>Side</th>
                      <th>Price</th>
                      <th> Amount</th>
                      <th>Filled</th>
                      <th>Total</th>
                      <th>status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                
                 {myorders.map((ans,i)=>{
                   return(
                    <tr>
                      {  ans.map((res,i)=>{
                    return(
                      <td>{res}</td>
                    )
                   })}
                  <td><Button title="Cancel" onClick={()=>{
                    axios({
                      method:'post',
                      url : `https://api.anteagle.tech/cancel?userid=${localStorage.getItem("userid")}`,
                      headers:{
                        "Accept": "application/json, text/plain, */*",
                        'Content-type' : "application/json"
                      },
                      data : JSON.stringify({
                        date : ans[1],
                        pair : ans[2],
                        type : ans[3],
                        side : ans[4],
                        price : ans[5],
                        Amount : ans[6],
                        filled : ans[7],
                        total : ans[8],
                        status : ans[9],
                        
                      })
                    }).then(res=>{
                      console.log(res.data)
                      swal("Canceled","Your order Canceled Successfully","success")
                    })
                  }}>Cancel</Button></td>
                       </tr>
                   )
                 
                      
                 })}
               
                    
                  </tbody>
                </Table>
                </TabPanel>
                <TabPanel>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                    <th>Order ID</th>
                      <th>Date</th>
                      <th>Pair</th>
                      <th>type</th>
                      <th>Side</th>
                      <th>Price</th>
                      <th> Amount</th>
                      <th>Filled</th>
                      <th>Total</th>
                      <th>status</th>
                    </tr>
                  </thead>
                  <tbody>
                
                 {allorder.map((ans,i)=>{
                   return(
                    <tr>
                      {  ans.map((res,i)=>{
                    return(
                      <td>{res}</td>
                    )
                   })}
                 
                       </tr>
                   )
                 
                      
                 })}
               
                    
                  </tbody>
                </Table>
                </TabPanel>
                <TabPanel>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                    <th>Order ID</th>
                      <th>Date</th>
                      <th>Pair</th>
                      <th>type</th>
                      <th>Side</th>
                      <th>Price</th>
                      <th> Amount</th>
                      <th>Filled</th>
                      <th>Total</th>
                      <th>status</th>
                    </tr>
                  </thead>
                  <tbody>
                
                 {fillorders.map((ans,i)=>{
                   return(
                    <tr>
                      {  ans.map((res,i)=>{
                    return(
                      <td>{res}</td>
                    )
                   })}
                 
                       </tr>
                   )
                 
                      
                 })}
               
                    
                  </tbody>
                </Table>
                </TabPanel>
               </Tabs>
              </CardBody>
            </Card>
          </Col>
          </>        
          }
      </div>
          
    </>
  );
}
}
export default Dashboard;
