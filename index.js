// function to create the index
function createIndex() {
  
  // Get all the different sheet IDs
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var sheets = ss.setActiveSheet(ss.getSheetByName("Index"));
  
  var namesArray = sheetNamesIds(sheets);
  
  var indexSheetNames = namesArray[0];
  var indexSheetIds = namesArray[1];
  
  // check if sheet called sheet called already exists
  // if no index sheet exists, create one
  if (ss.getSheetByName('index') == null) {
    
    var indexSheet = ss.insertSheet('Index',0);
    
  }
  // if sheet called index does exist, prompt user for a different name or option to cancel
  else {
    
    var indexNewName = Browser.inputBox('The name Index is already being used, please choose a different name:', 'Please choose another name', Browser.Buttons.OK_CANCEL);
    
    if (indexNewName != 'cancel') {
      var indexSheet = ss.insertSheet(indexNewName,0);
    }
    else {
      Browser.msgBox('No index sheet created');
    }
    
  }
  
  // add sheet title, sheet names and hyperlink formulas
  if (indexSheet) {
    
    printIndex(indexSheet,indexSheetNames,indexSheetIds);

  }
    
}



// function to update the index, assumes index is the first sheet in the workbook
function updateIndex() {
  
  // Get all the different sheet IDs
  var ss = SpreadsheetApp.getActiveSpreadsheet();
 
var sheets = ss.setActiveSheet(ss.getSheetByName("Index"));
  var indexSheet = sheets[0];
  
  var namesArray = sheetNamesIds(sheets);
  
  var indexSheetNames = namesArray[0];
  var indexSheetIds = namesArray[1];
  
  printIndex(indexSheet,indexSheetNames,indexSheetIds);
}