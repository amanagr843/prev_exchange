import React from 'react';
import ReactApexChart from 'react-apexcharts';
import  axios from 'axios';
import temp from 'temp';
class ApexChart extends React.Component {
constructor(props) {
super(props);

this.state = {

  series: [{
    name: 'candle',
    data: []
  }],
  chartlive : [],
  options: {
   
    chart: {
      type: 'candlestick',
      height: 100
    },
    title: {
      text: 'CandleStick Chart',
      align: 'left'
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: false
      }
    }
  },


};
}
componentDidMount(){
  setInterval(()=>{
    axios({
      url:"https://api.anteagle.tech/chartdata",
      method:"get",
      headers:{
        'Accept' : "application/json" 
      }
    }).then(res=>{
      var g = []
      for(let i=0;i<res.data.data.length;i++){
        var temp = {}
        var dateStr=res.data.data[i].time; 
        const test = new Date(dateStr)
        
        var a=dateStr.split(" ");
        var d=a[0].split("-");
        var t=a[1].split(":");
        var formatedDate = new Date(d[0],(d[1]-1),d[2],t[0],t[1],t[2]);
        temp["x"] = test.getTime()
        var temp1 = []
        temp1.push(res.data.data[i].open)
        temp1.push(res.data.data[i].high)
        temp1.push(res.data.data[i].low)
        temp1.push(res.data.data[i].close)
        temp["y"] = temp1 
        // console.log(temp)   
       
        g.push(temp)

      }
      var f = [{
        name : "candle",
        data : g
      }]
      this.setState({series:f})
      //console.log(this.state.series)
    })
   },10000)
}


render() {
  return (
<div id="chart">
  <ReactApexChart options={this.state.options} series={this.state.series} type="candlestick" height={350} />
</div>
          )
        }
      }
export default ApexChart;