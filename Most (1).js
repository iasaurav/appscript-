

document.write("<div id='blogs'><\/div><p id=\"female\"> <\/p><\/br><\/br> <p id=\"male\"> <\/p> <\/br><\/br><p id=\"mail\"> <\/p><div id='git'><\/div><div id='gith'><\/div>");

  
  let open = "'target='_blank'>";
  
  var select = document.getElementById("female"); 
select.innerHTML = "";
  let url='https://www.google.com/search?q=wynk:';
  
// Populate list with options:
for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    select.innerHTML += "<a href='"+url+opt+open+opt+"</a>, ";
}
  
  
  
  var selec = document.getElementById("male"); 

// Optional: Clear all existing options first:
selec.innerHTML = "";
// Populate list with options:
for(var a = 0; a < option.length; a++) {
    var op = option[a];
    selec.innerHTML += "<a href='"+url+op+open+op+"</a>, ";
}
  
  
  
  
  
  
  var sele = document.getElementById("mail"); 

let email='https://mail.google.com/mail/u/0/?ui=2#';
  
  
  
https://mail.google.com/mail/u/0/?ui=2#search/
sele.innerHTML = "";
// Populate list with options:
for(var b = 0; b < optio.length; b++) {
    var oa = optio[b];
    sele.innerHTML += "<a href='"+email+oa+open+oa+"</a>, ";
}

  
  
  

  
  
  
  
  
  var selc = document.getElementById("git"); 
var github = ['Ab.js','All.js','Due.js','contact.css','embed.txt','googlesheet','googlesheetdrive','ncert.js','post.js','saurav.js','select.js','YouTube.js','appscript']; 

// Optional: Clear all existing options first:
selc.innerHTML = "";
// Populate list with options:
for(var c = 0; c < github.length; c++) {
    var oap = github[c];
    selc.innerHTML += "<a href='https://github.com/iasaurav/iasaurav/blob/main/" + oap + "'>" + oap.charAt(0).toUpperCase() + oap.slice(1) + "</a>";
}
  
  

  
  var selct = document.getElementById("gith"); 


// Optional: Clear all existing options first:
selct.innerHTML = "";
// Populate list with options:
for(var co = 0; co < github.length; co++) {
    var oap = github[co];
    selct.innerHTML += "<a href='https://gitcodeembedder.blogspot.com/?gh=iasaurav/iasaurav/main/" + oap + "'>" + oap.charAt(0).toUpperCase() + oap.slice(1) + "</a>";
}
  
  
  
var blog = ['drive','saurav','ncert','bookmark','paymentdue','contact_20','bank-form','youtube']; 
  var seleb = document.getElementById("blogs"); 


  
  
  

seleb.innerHTML = "";
// Populate list with options:
for(var bl = 0; bl < blog.length; bl++) {
    var blo = blog[bl];
    seleb.innerHTML += "<a href='/p/"+blo+".html'target='_blank'>"+blo+"</a>, ";
}

   

  
  

