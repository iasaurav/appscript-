function trade(h,i,j,k,l,m,p,q,r,s) {
let tradingview='https://in.tradingview.com/symbols/NSE-';
let fyers='https://trade.fyers.in/popout/index.html?symbol=';
let upstox='https://tv.upstox.com/charts/MCX_FO|';
let ope = "'target='_blank";
let a="<tr><td><a href='"+tradingview+h.slice(4,1000)+ope+"'>NIFTY "+h.slice(16)+"CE</a></td>"+"<td><a href='"+tradingview+i+ope+"'>NIFTY "+i.slice(16)+"PE</a></td>";
let b="<td><a href='"+tradingview+j.slice(4,1000)+ope+"'>BANKNIFTY "+j.slice(20)+"CE</a></td>"+"<td><a href='"+tradingview+k+ope+"'>BANKNIFTY "+k.slice(20)+"PE</a></td>";
let c="<td><a href='"+tradingview+l.slice(4,1000)+ope+"'>FINNIFTY "+l.slice(19)+"CE</a></td>"+"<td><a href='"+tradingview+m+ope+"'>FINNIFTY "+m.slice(19)+"PE</a></td>";
  let d="<td><a href='"+upstox+p+"?isPopup=true'target='_blank'>"+q+"</a></td>"+"<td><a href='"+upstox+r+"?isPopup=true'target='_blank'>"+s+"</a></td></tr>";
  return a+b+c+d;
  }


