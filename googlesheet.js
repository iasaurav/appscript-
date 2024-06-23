function youtuber(p,i, n) {
  let audio = 'https://ytaud.io/play/';
  let video = 'https://www.genfrom.com/process.php?u=';
  let ope = "'target='_blank";
let c="<tr><td><a href='#'id='b"+p+"'data-video ='"+i+"'class='light'>"+n.slice(0,35)+"</a></td>";
 let a = "<td><a href='" + audio + i + ope + "'>Audio-Player</a></td>";
  let b = "<td><a href='" + video + encodeURIComponent('https://m.youtube.com/watch?v=' + i) + ope + "'>Download-Now</a></td></tr>";
  return c+a + b;
}







function pay(o,p,n) {
let a="paytmmp://pay?pa="+o+ "&pn=" + p + "&am=";
let qr= "https://chart.googleapis.com/chart?chs-250x250&cht-qr&chl=";
let encoded = qr + encodeURIComponent(a);
 return "<div class='gallery'><a href='"+a+"'><img src='"+n+"'></a><div class='desc'><a href='"+encoded+"'>"+p+"</div></div>";
  }





function array(a) {
return "'"+a+"',";
}




function Id () {
  return SpreadsheetApp.getActiveSpreadsheet().getId()
}







function blog(a) {
let u=a.replace(/^.*\//, '');
     let newStr = u.replace(/.html/g,'');
return newStr;
}




function shop(h) {
let amazon='https://www.amazon.in/s?k=';
let bigbasket='https://www.bigbasket.com/ps/?q=';
let flipkart='https://www.flipkart.com/search?q=';
let flipkartg='https://www.flipkart.com/grocery/pr/search?q=';
  let a="<tr><td><a href='"+amazon+h+"'>"+h+"</a></td>";
  let b="<td><a href='"+bigbasket+h+"'>"+h+"</a></td>";
  let c="<td><a href='"+flipkart+h+"'>"+h+"</a></td>";
  let d="<td><a href='"+flipkartg+h+"&sid=eat%2Fnvt&marketplace=GROCERY&sourceFeatureType=mmpSplit&pageUID=1680176472603'>"+h+"</a></td><tr>";
  return a+b+c+d;
  }


function youtube(i, n) {
  let audio = 'https://ytaud.io/play/';
  let video = 'https://www.genfrom.com/process.php?u=';
  let ope = "'target='_blank";
  let a = "<tr><td><a href='" + audio + i + ope + "'>" + n.slice(0, 35) + "</a></td>";
  let b = "<td><a href='" + video + encodeURIComponent('https://m.youtube.com/watch?v=' + i) + ope + "'>Download-Now</a></td></tr>";
  return a + b;
}


function contact(h,message,i,j,k,l) {
  let whatsapp="https://api.whatsapp.com/send?phone=91"+h+"&text="+message; 
  let a="<tr><td><a href='"+whatsapp+"'>"+i+"</a></td>";
  let b="<td><a href='tel:"+j+"'>"+j+"</a></td>";
  let c="<td><a href='tel:"+k+"'>"+k+"</a></td>";
  let d="<td><a href=='tel:"+l+"'>"+l+"</a></td></tr>";
  return a+b+c+d;
  }



function book(a,b,c,a) {
  return "<tr><td><a href='https://ncert.nic.in/textbook/pdf/"+a+"dd.zip'>"+b
+"</a></td><td><a href='https://ncert.nic.in/textbook/pdf/"+c+"dd.zip'>"+a+"</a></td></tr>";
  }


function dues(p,i,n) {
  let upi='0302jan@paytm';
let link='https://gpay.app.goo.gl/pay-T8wH7S8sEGh';
  return "<div class='gallery'><a href='paytmmp://pay?pa="+upi+"&pn=saurav&am="
+p+"'><img src='"+i+"'></a><div class='desc'><a href='"+link+"'>"+n+"</div></div>";
  }







function ytplaylist (b) {
    let yt="https://syncwith.com/youtube/playlist/"+b.slice(-34)+".csv"
  +"";
    return yt;
    }







function artist(b,c) {
  let a="https://www.google.com/search?q=wynk: ";
  return "<tr><td><a href='"+a+b+"'>"+b+"</a></td>"+"<td><a href='"+a+c+"'>"+c
+"</a></td></tr>";
  }




function youtubeid(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return '';
    }
}


function HYPERLINK (a, b) { 
return "("+a+"', '"+b+"')";

}

function paytm (o, p, q) { let a= "paytmmp://pay?pa="+o+ "&pn=" + p + "&am=" + q;
 return "<a href='" + a + "'>" + p + "</a>";
}

function paytmb (o, p, q, r) { 
let b = "paytmmp://pay?pa=" + o + "@" + p + ".ifsc.npci&pn=" + q + "&am=" +r;
let qr= "https://chart.googleapis.com/chart?chs-250x250&cht=qr&chl="; return "<a href='" + b + "'>Bank-Account</a>";
} 

function upiq(o, p, q) {
let a="paytmmp://pay?pa="+o+ "&pn=" + p + "&am=" + q;
let qr= "https://chart.googleapis.com/chart?chs-250x250&cht-qr&chl=";
let encoded = qr + encodeURIComponent(a);
return "<a href='" + encoded + "'>Upi-Qr</a>";
}

function bankq(o, p, q, r) {
let b = "paytmmp://pay?pa="+o+ "@" + p + "&pn=" + q + "&am=" + r;
let qr= "https://chart.googleapis.com/chart?chs-250x250&cht=qr&chl="; let encode = qr + encodeURIComponent(b);
return "<a href='" + encode + "'>Bank-Qr</a>";}


function anchor(a,b) {
return "<a href='"+a+"'>"+b+"</a>";
}
function anchorb(c,d) {
return "<a href='"+c+"'target='_blank'>"+d+"</a>";
}
function option(e) {
return "<option value='"+e+"'>";
}
function optionb(f,g) {
return "<option value='"+f+"'>"+g+"</option>";
}
function WhatsApp(h,i) {
return "<a href='//wa.me/91"+h+"'>"+i+"</a>";
}

function phone(j,k) {
return "<a href='tel:"+j+"'>"+k+"</a>";
}
function img(l) {
return "<img src='"+l.slice(32,-18)+"'>";
}
function playstore(n) {
return "<a href='https://play.google.com/store/search?q="+encodeURIComponent(n)+"&=apps'>"+n+"</a>";
}

function uri(phone, web) {
  if (Array.isArray(phone)) {
    return phone.map((row, index) => uri(row[0]), web);
  }
  const phoneNumber = String(phone).replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
;
  return web === true
    ? `//${phoneNumber}`
    : `//${phoneNumber}`;
}


function TRANSLATE(input)
{
  var languageOutput = LanguageApp.translate(input, 'en', 'hi'); 
  return languageOutput;

}

function specialconcat(input, delimiter) {
   if (Array.isArray(input)) {
      var data = '';
      var delim = delimiter == undefined ? "" : delimiter
      for (var i = 0; i < input.length; i++) {
         data += input[i] + delim;
      }
      return delimiter == undefined ? data : data.substring(0, data.length - 1)
   } else {
      return input
   }







function shorter_URL(url) {
    try {
        if (url == undefined) {
            throw 'url is empty or is not a valid url!'
        }
        let content = UrlFetchApp.fetch('https://tinyurl.com/api-create.php?url=' + encodeURI(url));
        if (content.getResponseCode() != 200) {
            return 'An error occured: [ ' + content.getContentText() + ' ]';
        }
        return content.getContentText();
    } catch (e) {
        return 'An error occured: [ ' + e + ' ]';
    }}}



function Anchorg(c,d) {
let a="https://docs.google.com/spreadsheets/d/";
let b="/edit#gid="+c;
return "<a href='"+a+id()+b+"'>"+d+"</a>";
}




function generateNumberList(a,b,c,p) {
  var numbers = [];
  for (var i = a; i <= b; i += c) {
    numbers.push(p+i);
  }
  Logger.log(numbers); // Output the list to the Logger (View -> Logs)
  // Alternatively, you can return the list as a string separated by commas
  return numbers.join(', ');
}




function trade(h,i,j,k,l,m,n,o) {
let tradingview='https://in.tradingview.com/chart/?symbol=';
let fyers='https://trade.fyers.in/popout/index.html?symbol=';
let a="<tr><td><a href='"+tradingview+h+"'>NIFTY "+h.slice(16)+"CE</a></td>"+"<td><a href='"+tradingview+i+"'>NIFTY "+i.slice(16)+"</a></td>";
let b="<td><a href='"+tradingview+j+"'>BANKNIFTY "+j.slice(20)+"CE</a></td>"+"<td><a href='"+tradingview+k+"'>BANKNIFTY "+k.slice(20)+"PE</a></td>";
let c="<td><a href='"+tradingview+l+"'>FINNIFTY "+l.slice(19)+"CE</a></td>"+"<td><a href='"+tradingview+m+"'>FINNIFTY "+m.slice(19)+"PE</a></td>";
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
let tradingview='https://tv.upstox.com/charts/';
let a="<tr><td><a href='"+tradingview+h+"'>"+i+"</a></td>"+"<td><a href='"+tradingview+j+"'>"+k+"</a></td></tr>";
return a;
  }
  
  
  


  



