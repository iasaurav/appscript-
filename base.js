function myFunctionartist() {
  // Get the selected value
  var art = document.getElementById("artist").value;
  
    var duckduckgo="https://duckduckgo.com/?va=g&t=hf&q=wynk%3A+"+art+"+&ia=web";
    
    
     var bing="https://bing.com/search?q=wynk%3A+"+art;
  // Open a new window with the selected URL
  window.open(duckduckgo, '_blank');
  window.open(bing, '_blank');
}
  


