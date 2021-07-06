// Your code goes here
window.onscroll = function () {
    scrollRotate();
};
//events
//1
const funBus = document.querySelector(".intro img");
//2
const welCome = document.querySelector('.intro h2')

//3
const welComemap = document.querySelector('.content-section img')

//4
const waterWorld = document.querySelector('.inverse-content img')

//5
const funSun = document.querySelector('.content-destination img')
//6
const navI = document.querySelector('.nav a')
//7
const pickUr = document.querySelector('.content-destination h2')
//8
const letsG = document.querySelector('.content-section p')
//9
const funB = document.querySelector('.main-navigation h1')
//10
const footER = document.querySelector('.footer p')
// _________________________________________________
document.querySelector("header").style.zIndex = 999;

//----------
funBus.addEventListener("mouseover", function (event) {
  funBus.style.borderLeft = "thick solid #0000FF";
});

funBus.addEventListener("mouseout", function (event) {
  funBus.style.borderLeft = "none";
});



//-----------

welCome.addEventListener("mouseover", function (event){
    welCome.innerHTML = "Do you like jazz?";
  });

  welCome.addEventListener("mouseout", function (event){
    welCome.innerHTML = "Welcome To Fun Bus!";
  });


//---------
  welComemap.addEventListener("mouseover", function (event){
    welComemap.style.transform = "rotate(20deg)";
    
});

welComemap.addEventListener("mouseout", function (event) {
    welComemap.style.transform = "none";
  });

 //---------
 
 
  waterWorld.addEventListener("mouseover", function (event){
    waterWorld.style.transform = "scaleY(1.5)";
});
waterWorld.addEventListener("mouseout", function (event){
    waterWorld.style.transform = "none";
});



//---------------
funSun.addEventListener('mouseover',function (element) {
    document.body.style.backgroundColor = "red";
})
funSun.addEventListener('mouseout',function (element) {
    document.body.style.backgroundColor = "#FFFFFF";
})
//-----------------------------


navI.addEventListener('mouseover',function (element) {
    navI.innerHTML = "It's where you make it";
    document.body.style.backgroundColor = "blue";
  });
  navI.addEventListener('mouseout',function (element) {
    navI.innerHTML = "Home";
    document.body.style.backgroundColor = "#FFFFFF";

  });
  
  //--------------

  pickUr.addEventListener('click', function (event){
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_blank")
})
//----------


letsG.addEventListener("dblclick", function (event){
    letsG.style.transform = "rotate(20deg)";
    
});
letsG.addEventListener("mouseout", function (event){
    letsG.style.transform = "rotate(0deg)";
    
});

//--
funB.addEventListener("wheel", function(event){
    alert("YOU FOUND ME nice");
})

//-------

footER.addEventListener('wheel', function(){
    
   alert('peanutbutter')
    
})