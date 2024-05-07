
function nifty(i) {
  let fyers="https://trade.fyers.in/popout/index.html?symbol="; 
let fyersend="&resolution=5&theme=light";
  let groww="https://groww.in/charts/options/nifty/"+i.slice(4,100); 
  let sensibull="https://web.sensibull.com/chart?tradingSymbol="; 
let result = i.slice(-5);
  let a="<tr><td><a href='"+groww+"CE'target='_blank'>"+result+"</a></td>"+"<td><a href='"+groww+"PE'target='_blank'>"+result+"</a></td>";
let b="<td><a href='"+sensibull+i+"CE'target='_blank'>"+result+"</a></td>"+"<td><a href='"+sensibull+i+"'target='_blank'>"+result+"</a></td>";
let c="<td><a href='"+fyers+i+"CE"+fyersend+"'target='_blank'>"+result+"</a></td>"+"<td><a href='"+i+"PE"+fyersend+"'target='_blank'>"+result+"</a></td></tr>";
  return a+b+c;
  }


function banknifty(i) {
  let fyers="https://trade.fyers.in/popout/index.html?symbol="; 
let fyersend="&resolution=5&theme=light";
  let groww="https://groww.in/charts/options/banknifty/"+i.slice(4,100); 
  let sensibull="https://web.sensibull.com/chart?tradingSymbol="; 
let result = i.slice(-5);
  let a="<tr><td><a href='"+groww+"CE'target='_blank'>"+result+"</a></td>"+"<td><a href='"+groww+"PE'target='_blank'>"+result+"</a></td>";
let b="<td><a href='"+sensibull+i+"CE'target='_blank'>"+result+"</a></td>"+"<td><a href='"+sensibull+i+"'target='_blank'>"+result+"</a></td>";
let c="<td><a href='"+fyers+i+"CE"+fyersend+"'target='_blank'>"+result+"</a></td>"+"<td><a href='"+i+"PE"+fyersend+"'target='_blank'>"+result+"</a></td></tr>";
  return a+b+c;
  }

function finnifty(i) {
  let fyers="https://trade.fyers.in/popout/index.html?symbol="; 
let fyersend="&resolution=5&theme=light";
  let groww="https://groww.in/charts/options/finnifty/"+i.slice(4,100); 
  let sensibull="https://web.sensibull.com/chart?tradingSymbol="; 
let result = i.slice(-5);
  let a="<tr><td><a href='"+groww+"CE'target='_blank'>"+result+"</a></td>"+"<td><a href='"+groww+"PE'target='_blank'>"+result+"</a></td>";
let b="<td><a href='"+sensibull+i+"CE'target='_blank'>"+result+"</a></td>"+"<td><a href='"+sensibull+i+"'target='_blank'>"+result+"</a></td>";
let c="<td><a href='"+fyers+i+"CE"+fyersend+"'target='_blank'>"+result+"</a></td>"+"<td><a href='"+i+"PE"+fyersend+"'target='_blank'>"+result+"</a></td></tr>";
  return a+b+c;
  }



function sensex(i) {
  let fyers="https://trade.fyers.in/popout/index.html?symbol="; 
let fyersend="&resolution=5&theme=light";
  let groww="https://groww.in/charts/options/sp-bse-sensex/"+i.slice(4,100); 
  let sensibull="https://web.sensibull.com/chart?tradingSymbol="; 
let result = i.slice(-5);
  let a="<tr><td><a href='"+groww+"CE'target='_blank'>"+result+"</a></td>"+"<td><a href='"+groww+"PE'target='_blank'>"+result+"</a></td>";
let b="<td><a href='"+sensibull+i+"CE'target='_blank'>"+result+"</a></td>"+"<td><a href='"+sensibull+i+"'target='_blank'>"+result+"</a></td>";
let c="<td><a href='"+fyers+i+"CE"+fyersend+"'target='_blank'>"+result+"</a></td>"+"<td><a href='"+i+"PE"+fyersend+"'target='_blank'>"+result+"</a></td></tr>";
  return a+b+c;
  }

function bankex(i) {
  let fyers="https://trade.fyers.in/popout/index.html?symbol="; 
let fyersend="&resolution=5&theme=light";
  let groww="https://groww.in/charts/options/sp-bse-bankex/"+i.slice(4,100); 
  let sensibull="https://web.sensibull.com/chart?tradingSymbol="; 
let result = i.slice(-5);
  let a="<tr><td><a href='"+groww+"CE'target='_blank'>"+result+"</a></td>"+"<td><a href='"+groww+"PE'target='_blank'>"+result+"</a></td>";
let b="<td><a href='"+sensibull+i+"CE'target='_blank'>"+result+"</a></td>"+"<td><a href='"+sensibull+i+"'target='_blank'>"+result+"</a></td>";
let c="<td><a href='"+fyers+i+"CE"+fyersend+"'target='_blank'>"+result+"</a></td>"+"<td><a href='"+i+"PE"+fyersend+"'target='_blank'>"+result+"</a></td></tr>";
  return a+b+c;
  }



function fnof(i) {
  let fyers="https://trade.fyers.in/popout/index.html?symbol=NSE:"+i+"-EQ&resolution=5&theme=light";
  let groww="https://groww.in/charts/futures/"+i; 
  let sensibull="https://web.sensibull.com/chart?tradingSymbol="+i; 
let option='https://instaoptions.fyers.in/instruments#instrument='+i;
let sensibulloption='https://web.sensibull.com/option-chain?tradingsymbol='+i+'&expiry=';
var currentDate = new Date();
var year = currentDate.getFullYear().toString().substr(-2);
var month = currentDate.toLocaleString('default', { month: 'short' }).toUpperCase();
var formattedDate = year + month+"FUT";
  let a="<td><a href='"+fyers+"'target='_blank'>"+i+"</a></td>";  
  let b="<td><a href='"+option+"'target='_blank'>"+i+"</a></td>";
let c="<td><a href='"+sensibull+formattedDate+"'target='_blank'>"+i+"</a></td>";
  let d="<td><a href='"+sensibulloption+"'target='_blank'>"+i+"</a></td>";
  let e="<td><a href='"+groww+formattedDate+"'target='_blank'>"+i+"</a></td></tr>";
  return a+b+c+d+e;
  }


function fno(i) {
  let fyers="https://trade.fyers.in/popout/index.html?symbol=NSE:"+i+"-EQ&resolution=5&theme=light";
  let groww="https://groww.in/charts/futures/"+i; 
  let sensibull="https://web.sensibull.com/chart?tradingSymbol="+i; 
let option='https://instaoptions.fyers.in/instruments#instrument='+i;
let sensibulloption='https://web.sensibull.com/option-chain?tradingsymbol='+i+'&expiry=';
  let a="<td><a href='"+fyers+"'target='_blank'>"+i+"</a></td>";  
  let b="<td><a href='"+option+"'target='_blank'>"+i+"</a></td>";
let c="<td><a href='"+sensibull+"'target='_blank'>"+i+"</a></td>";
  let d="<td><a href='"+sensibulloption+"'target='_blank'>"+i+"</a></td></tr>";
  return a+b+c+d;
  }



function option(e) {
return "<option value='"+e+"CE'>"+"<option value='"+e+"PE'>";
}


  