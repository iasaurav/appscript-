

function table(h,i,j,k,l,m,n,o,p,q) {
  let a="<tr><td>"+h+"</td>"+"<td>"+i+"</td>";
let b="<td>"+j+"</td>"+"<td>"+k+"</td>";
let c="<td>"+l+"</td>"+"<td>"+m+"</td>";
let d="<td>"+n+"</td>"+"<td>"+o+"</td>";
let e="<td>"+p+"</td>"+"<td>"+q+"</td></tr>";
  return a+b+c+d+e;
  }

function crudetable(h,i,j,k) {
  let a="<tr><td>"+h+"</td>"+"<td>"+i+"</td>";
let b="<td>"+j+"</td>"+"<td>"+k+"</td></tr>";
  return a+b;
  }

function trade(h,i,j,k,l,m,n,o) {
let tradingview='https://in.tradingview.com/chart/?symbol=';
let fyers='https://trade.fyers.in/popout/index.html?symbol=';
let ope = "'target='_blank";
let a="<tr><td><a href='"+tradingview+h+ope+"'>NIFTY "+h.slice(16)+"CE</a></td>"+"<td><a href='"+tradingview+i+ope+"'>NIFTY "+i.slice(16)+"PE</a></td>";
let b="<td><a href='"+tradingview+j+ope+"'>BANKNIFTY "+j.slice(20)+"CE</a></td>"+"<td><a href='"+tradingview+k+ope+"'>BANKNIFTY "+k.slice(20)+"PE</a></td>";
let c="<td><a href='"+tradingview+l+ope+"'>FINNIFTY "+l.slice(19)+"CE</a></td>"+"<td><a href='"+tradingview+m+ope+"'>FINNIFTY "+m.slice(19)+"PE</a></td>";
  return a+b+c;
  }


// check if use//
function dhanupstox(h,i,j,k,l,m) {
  let tradingview='https://tv.upstox.com/charts/MCX_FO|';
let tradingvie='https://tv.dhan.co/?symbol=MCXM';
let a="<tr><td><a href='"+tradingvie+h+":"+i+"'target='_blank'>"+i+"</a></td>"+"<td><a href='"+tradingvie+j+":"+k+"'target='_blank'>"+k+"</a></td>";
let b="<td><a href='"+tradingview+h+"?isPopup=true'target='_blank'>"+l+"</a></td>"+"<td><a href='"+tradingview+j+"?isPopup=true'target='_blank'>"+m+"</a></td></tr>";
  return a+b;
  }

function trader(h,i,j,k,l,m,n,o) {
let tradingview='https://in.tradingview.com/chart/?symbol=';
let fyers='https://trade.fyers.in/popout/index.html?symbol=';
let ope = "'target='_blank";
let a="<tr><td><a href='"+tradingview+h+ope+"'>NIFTY "+h.slice(16)+"CE</a></td>"+"<td><a href='"+tradingview+i+ope+"'>NIFTY "+i.slice(16)+"</a></td>";
let b="<td><a href='"+tradingview+j+ope+"'>BANKNIFTY "+j.slice(20)+"CE</a></td>"+"<td><a href='"+tradingview+k+ope+"'>BANKNIFTY "+k.slice(20)+"PE</a></td>";
let c="<td><a href='"+tradingview+l+ope+"'>FINNIFTY "+l.slice(19)+"CE</a></td>"+"<td><a href='"+tradingview+m+ope+"'>FINNIFTY "+m.slice(19)+"PE</a></td>";
let d="<td><a href='"+fyers+n+"&resolution=5&theme=light'>CRUDEOIL "+n.slice(17)+"</a></td>"+"<td><a href='"+fyers+o+"&resolution=5&theme=light'>CRUDEOIL "+o.slice(17)+"</a></td></tr>";
  return a+b+c+d;
  }

function groww(h,i,j,k,l,m,n,o) {
let tradingview='https://groww.in/charts/options/nifty/';
let fyers='https://trade.fyers.in/popout/index.html?symbol=';
let a="<tr><td><a href='"+tradingview+h.slice(4,1000)+"'>NIFTY "+h.slice(-7)+"</a></td>"+"<td><a href='"+tradingview+i.slice(4,1000)+"'>NIFTY "+i.slice(-7)+"</a></td>";
let b="<td><a href='"+tradingview+j.slice(4,1000)+"'>BANKNIFTY "+j.slice(-7)+"</a></td>"+"<td><a href='"+tradingview+k.slice(4,1000)+"'>BANKNIFTY "+k.slice(-7)+"</a></td>";
let c="<td><a href='"+tradingview+l.slice(4,1000)+"'>FINNIFTY "+l.slice(-7)+"</a></td>"+"<td><a href='"+tradingview+m.slice(4,1000)+"'>FINNIFTY "+m.slice(-7)+"</a></td>";
let d="<td><a href='"+fyers+n+"&resolution=5&theme=light'>CRUDEOIL "+n.slice(17)+"</a></td>"+"<td><a href='"+fyers+o+"&resolution=5&theme=light'>CRUDEOIL "+o.slice(17)+"</a></td></tr>";
  return a+b+c+d;
  }



function sensibull(h,i,j,k,l,m,n,o) {
let tradingview='https://web.sensibull.com/chart?tradingSymbol=';
let fyers='https://trade.fyers.in/popout/index.html?symbol=';
let a="<tr><td><a href='"+tradingview+h.slice(4,1000)+"'>NIFTY "+h.slice(-7)+"</a></td>"+"<td><a href='"+tradingview+i.slice(4,1000)+"'>NIFTY "+i.slice(-7)+"</a></td>";
let b="<td><a href='"+tradingview+j.slice(4,1000)+"'>BANKNIFTY "+j.slice(-7)+"</a></td>"+"<td><a href='"+tradingview+k.slice(4,1000)+"'>BANKNIFTY "+k.slice(-7)+"</a></td>";
let c="<td><a href='"+tradingview+l.slice(4,1000)+"'>FINNIFTY "+l.slice(-7)+"</a></td>"+"<td><a href='"+tradingview+m.slice(4,1000)+"'>FINNIFTY "+m.slice(-7)+"</a></td>";
let d="<td><a href='"+fyers+n+"&resolution=5&theme=light'>CRUDEOIL "+n.slice(17)+"</a></td>"+"<td><a href='"+fyers+o+"&resolution=5&theme=light'>CRUDEOIL "+o.slice(17)+"</a></td></tr>";
  return a+b+c+d;
  }

function upstox(h,i,j,k) {
let tradingvie='https://tv.dhan.co/?symbol=MCXM';
let tradingview='https://tv.upstox.com/charts/MCX_FO|';
let a="<tr><td><a href='"+tradingvie+h.slice(7,1000)+":CRUDEOIL'target='_blank'>"+i+"</a></td>"+"<td><a href='"+tradingvie+j.slice(7,1000)+":CRUDEOIL'target='_blank'>"+k+"</a></td>";
  let b="<td><a href='"+tradingview+h+"?isPopup=true'target='_blank'>"+i+"</a></td>"+"<td><a href='"+tradingview+j+"?isPopup=true'target='_blank'>"+k+"</a></td></tr>";
return a+b;
  }
