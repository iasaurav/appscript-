function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Sync Now')
    .addItem('Google Drive', 'run')
    .addToUi();
}



function Saurav() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.setActiveSheet(ss.getSheetByName("Saurav"));
  var foldername = 'Saurav';                     // Replace your folder name 
here
  var folderlisting = 'listing of folder ' + foldername;
  var ssparents = DriveApp.getFoldersByName(foldername)
  var sheet = ss.getActiveSheet();
  // Enter the name to display the results in google sheet
  var headers = [["Date", "File Owner", "File Name", "File Share", "File URL"]]
;
  // Change here google sheet Range as per above header which is mentioned by 
you
  sheet.getRange("A1:E").clear();
  sheet.getRange("A1:E1").setValues(headers);
  // No need to change here.
  var folder = ssparents.next();
  var files = folder.getFiles();
  var i = 1;
  while (files.hasNext()) {
    var file = files.next();
    if (ss.getId() == file.getId()) {
      continue;
    }
    // enter carefully your headers name in below
    sheet.getRange(i + 1, 1, 1, 5).setValues([[file.getLastUpdated(), file.
getOwner().getName(), file.getName(), file.getSharingPermission(),file.getId()]
]);
    i++;
var sheet = ss.getSheetByName("Saurav");            
var range = sheet.getRange("A2:E");                 
range.sort([{column: 3, ascending: true}]);        
 }}


function aa() {
  var sheet = SpreadsheetApp.getActive().getSheetByName("Saurav");
  var lastRow = sheet.getLastRow();
  var formula = '=if(A2="","",drive(text(A2,"dd-mm-yyyy"),E2,C2))';
  var sourceRange = sheet.getRange(2, 6);
  sourceRange.setFormula(formula);
  var destinationRange = sheet.getRange(2, 6, lastRow - 1, 1);
  sourceRange.autoFill(destinationRange, SpreadsheetApp.
    AutoFillSeries.DEFAULT_SERIES)
}






function drive(h, i, j) {
  let open = "'target='_blank"
  let a = "<tr><td>" + h + "</td>";
  let b = "<td><a href='https://drive.google.com/uc?export=download&id=" + i + 
open+ "'>" + j + "</a></td><tr>";
  return a + b;
}
