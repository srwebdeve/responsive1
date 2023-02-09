var menu = document.querySelector(".menu");
var heading =document.querySelector(".heading");

var nm = 0;

menu.addEventListener("click", function(){
    var nm2 =nm ++;
    nm2=nm; 
console.log(nm2);
var x = nm2%2; 
if  (x===0) {
    heading.style.display="none";
    menu.style.boxShadow="";
}
else {
    heading.style.display="flex"; 
    menu.style.boxShadow="none";

}
}); 

var menudiv = document.querySelector(".menudiv");
var f = document.querySelector(".f");
f.addEventListener("focus", function(){
    menudiv.style.display="block";
});
f.addEventListener("focusout", function(){
    setTimeout(() => {
    menudiv.style.display="none";
        
    }, 200);

});

var content = document.querySelector(".content");
var menu1 = document.querySelector(".menu1");
var menu2 = document.querySelector(".menu2");
var menu3 = document.querySelector(".menu3");
var menu4 = document.querySelector(".menu4");

menu1.addEventListener("click", function(){
    content.style.backgroundColor="red";
});
menu2.addEventListener("click", function(){
    content.style.backgroundColor="green";
});
menu3.addEventListener("click", function(){
    content.style.backgroundColor="yellow";
});
menu4.addEventListener("click", function(){
    content.style.backgroundColor="white";
});

var ddd = devicePixelRatio;
console.log(ddd);