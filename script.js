//button to appear a photo of lolcat

//var lolcatButton = document.getElementById("lolcatButton");
//var lolcatImage = document.getElementById("lolcatImage");
//var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/napTime.jpg";
//var Button = function()
//{
 //lolcatImage.src = image;
//}

//lolcatButton = addEventListener('click', Button);

//query command shorter expression of javacript
$(document).ready(function() {
   //var lolcatButton = document.getElementById("lolcatButton");
   var loldogImage = document.getElementById("loldogImage");
   var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/napTime.jpg";

   var showMeTheLolcat = function() {
      loldogImage.src = image;
   };

   $("#lolcatButton").click(showMeTheLolcat);

});
//to prompt message when you click on show the lolcatbutton
var text;
var question = prompt("Do you really want to see the LOLCat?");
switch(question) {
    case "OK":
        text = "Excellent choice!";  
    break;
    case "Cancel":
        text = "Ok, but why did you click on it!";
    break;
}
