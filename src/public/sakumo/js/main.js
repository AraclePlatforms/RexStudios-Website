//hljs.initHighlightingOnLoad();

var listOptions = {
  valueNames: ['name', 'lang', 'code']
};

var snippetList = new List('repo', listOptions);

 snippetList.on('updated', function (list) {
   var items = document.querySelectorAll('.snippet');
   items.forEach(function(item){
     item.style.opacity = 0;
   });
   setTimeout(function(){
     items.forEach(function(item){
       item.style.opacity = 1;
     });
   },150);
 });





$(document).ready(function() {

//MOBILE ONE AND MOBILE THREE
var menu = "close";
$(".mobile-one .menu-toggle, .mobile-three .menu-toggle").click(function() {
    
    if (menu === "close") {
      	$(this).parent().next(".mobile-nav").css("transform", "translate(0, 0)");
     	 menu = "open";
    } else {
      	$(this).parent().next(".mobile-nav").css("transform", "translate(-100%, 0)");
      	menu = "close";
    }
});