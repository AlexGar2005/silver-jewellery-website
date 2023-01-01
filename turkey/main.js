
/*let slideIndexauto = 0;
showSlidesauto();

function showSlidesauto() {
  let i;
  let slidesauto = document.getElementsByClassName("mySlides");
  for (i = 0; i < slidesauto.length; i++) {
    slidesauto[i].style.display = "none";  
  }
  slideIndexauto++;
  if (slideIndexauto > slidesauto.length) {slideIndexauto = 1}    
  slidesauto[slideIndexauto-1].style.display = "block";  
  setTimeout(showSlidesauto, 7000); // Change image every 2 seconds
}*/






let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  

}



const header = document.querySelector("header");
const sectionOne = document.querySelector(".mySlides");
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries, sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("row-scrolled");
    } else {
      header.classList.remove("row-scrolled");
    }
  });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);


faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});


const about_par_p = document.getElementById("about_par_p");
const about_par_img = document.getElementById("about_par_img");
const closebtn = document.getElementById("closebtn");
const overlay_h1 = document.getElementById("overlay-content_h1");


function openAbout() {
  document.getElementById("aboutUs").style.width = "100%";
  overlay_h1.style.animationName = "transform_0";
  overlay_h1.style.animationDuration = "1.8s";
  closebtn.style.animationName = "transform_0";
  closebtn.style.animationDuration = "1.8s";
  about_par_img.style.animationName = "transform";
  about_par_img.style.animationDuration = "1.8s";
  about_par_img.style.width = "100%";
  about_par_p.style.animationName = "transform_1";
  about_par_p.style.animationDuration = "1.8s";
  body.style.overflowY = "hidden";
  body.style.overflowX = "hidden";
  }
function closeAbout() {
  document.getElementById("aboutUs").style.width = "0%";
  body.style.overflowY = "visible";
}

const menu_nav = document.getElementById("menu_nav");
const myMenu = document.getElementById("myMenu");

function openMenu() {
  
  myMenu.style.height = "100%";
  //body.style.overflowY = "hidden";
  body.style.overflowX = "hidden";
  menu_nav.style.animationName = "transform";
  menu_nav.style.animationDuration = "1.8s";
  first_menu.style.animationName = "transform_1" ;
  first_menu.style.animationDuration = "1.8s";

}

function closeMenu() {
  body.style.overflowY = "visible";
  myMenu.style.height = "0%";
}

function openNav() {
  document.getElementById("myNav_1").style.width = "100%";
  body.style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("myNav_1").style.width = "0%";
  body.style.overflowY = "visible";
}


const first_menu = document.getElementById("first_menu");
const first_btn = document.getElementById("first_btn");

const second_menu = document.getElementById("second_menu");
const second_btn = document.getElementById("second_btn")

const third_menu = document.getElementById("third_menu");
const third_btn = document.getElementById("third_btn");

const fourth_menu = document.getElementById("fourth_menu");
const fourth_btn = document.getElementById("fourth_btn");

const fifth_menu = document.getElementById("fifth_menu");
const fifth_btn = document.getElementById("fifth_btn");

const sixth_menu = document.getElementById("sixth_menu");
const sixth_btn = document.getElementById("sixth_btn");

const seventh_menu = document.getElementById("seventh_menu");
const seventh_btn = document.getElementById("seventh_btn");

const eighth_menu = document.getElementById("eighth_menu");
const eighth_btn = document.getElementById("eighth_btn");

const ninth_menu = document.getElementById("ninth_menu");
const ninth_btn = document.getElementById("ninth_btn");


const myContent = document.getElementById("overlay_menu_content");


const myArray = [first_menu, second_menu, third_menu, fourth_menu, fifth_menu, sixth_menu, seventh_menu, eighth_menu]
const myArray2 = [ first_btn, second_btn, third_btn, third_menu, fourth_btn, fifth_btn, sixth_btn, seventh_btn, eighth_btn]


function activedFirst() {

  myArray.forEach(function(item){
    item.style.display = "none";  
  });

  myArray2.forEach(function(item){
    item.classList.remove("active");  
  });

  first_menu.style.display = "grid";
  first_btn.classList.add("active");
  
}

function activedSecond() {

  myArray.forEach(function(item){
    item.style.display = "none";  
  });

  myArray2.forEach(function(item){
    item.classList.remove("active");  
  });


  second_menu.style.display = "grid";
  second_btn.classList.add("active");

}



function activedThird() {

  myArray.forEach(function(item){
    item.style.display = "none";  
  });

  myArray2.forEach(function(item){
    item.classList.remove("active");  
  });


  third_menu.style.display = "grid";
  third_btn.classList.add("active");

}


function activedFourth() {
 
  myArray.forEach(function(item){
    item.style.display = "none";  
  });

  myArray2.forEach(function(item){
    item.classList.remove("active");  
  });


  fourth_menu.style.display = "grid";
  fourth_btn.classList.add("active");

}


function activedFifth() {
  
  myArray.forEach(function(item){
    item.style.display = "none";  
  });

  myArray2.forEach(function(item){
    item.classList.remove("active");  
  });

  fifth_menu.style.display = "grid";
  fifth_btn.classList.add("active");

}

function activedSixth() {
  
  myArray.forEach(function(item){
    item.style.display = "none";  
  });

  myArray2.forEach(function(item){
    item.classList.remove("active");  
  });

  sixth_menu.style.display = "grid";
  sixth_btn.classList.add("active");

}



function activedSeventh() {
 
  myArray.forEach(function(item){
    item.style.display = "none";  
  });

  myArray2.forEach(function(item){
    item.classList.remove("active");  
  });

  seventh_menu.style.display = "grid";
  seventh_btn.classList.add("active");


}


function activedEighth() {
  
  myArray.forEach(function(item){
    item.style.display = "none";  
  });

  myArray2.forEach(function(item){
    item.classList.remove("active");  
  });

  eighth_menu.style.display = "grid";
  eighth_btn.classList.add("active");
}







const con_par_img = document.getElementById("con_par_img");
const con_par_p = document.getElementById("con_par_p");
const body = document.querySelector("body");
const myContacts = document.getElementById("myContacts");

function openContact() {
  myContacts.style.width = "100%";
  body.style.overflowY = "hidden";
  con_par_img.style.animationName = "transform";
  con_par_img.style.animationDuration = "1.8s";
  con_par_img.style.width = "100%";
  con_par_p.style.animationName = "transform_1" ;
  con_par_p.style.animationDuration = "1.8s";
}

function closeContact() {
  myContacts.style.width = "0%";
  body.style.overflowY = "visible";
}





function openPopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('act');
}
function closePopup() {
  const popup = document.getElementById('popup');
  popup.classList.remove('act');
}

function openPopuptwo() {
  const popuptwo = document.getElementById('popuptwo');
  popuptwo.classList.add('act');
}
function closePopuptwo() {
  const popuptwo = document.getElementById('popuptwo');
  popuptwo.classList.remove('act');
}

function openPopupthree() {
  const popupthree = document.getElementById('popupthree');
  popupthree.classList.add('act');
}
function closePopupthree() {
  const popupthree = document.getElementById('popupthree');
  popupthree.classList.remove('act');
}

function openPopupfour() {
  const popupfour = document.getElementById('popupfour');
  popupfour.classList.add('act');
}
function closePopupfour() {
  const popupfour = document.getElementById('popupfour');
  popupfour.classList.remove('act');
}

function openPopupfive() {
  const popupfive = document.getElementById('popupfive');
  popupfive.classList.add('act');
}
function closePopupfive() {
  const popupfive = document.getElementById('popupfive');
  popupfive.classList.remove('act');
}

function openPopupsix() {
  const popupsix = document.getElementById('popupsix');
  popupsix.classList.add('act');
}
function closePopupsix() {
  const popupsix = document.getElementById('popupsix');
  popupsix.classList.remove('act');
}

function openPopupseven() {
  const popupseven = document.getElementById('popupseven');
  popupseven.classList.add('act');
}
function closePopupseven() {
  const popupseven = document.getElementById('popupseven');
  popupseven.classList.remove('act');
}

function openPopupeight() {
  const popupeight = document.getElementById('popupeight');
  popupeight.classList.add('act');
}

function closePopupeight() {
  const popupeight = document.getElementById('popupeight');
  popupeight.classList.remove('act');
}

function openPopupnine() {
  const popupnine = document.getElementById('popupnine');
  popupnine.classList.add('act');
}
function closePopupnine() {
  const popupnine = document.getElementById('popupnine');
  popupnine.classList.remove('act');
}

function openPopupten() {
  const popupten = document.getElementById('popupten');
  popupten.classList.add('act');
}
function closePopupten() {
  const popupten = document.getElementById('popupten');
  popupten.classList.remove('act');
}

function openPopupeleven() {
  const popupeleven = document.getElementById('popupeleven');
  popupeleven.classList.add('act');
}
function closePopupeleven() {
  const popupeleven = document.getElementById('popupeleven');
  popupeleven.classList.remove('act');
}

function openPopuptwelve() {
  const popuptwelve = document.getElementById('popuptwelve');
  popuptwelve.classList.add('act');
}
function closePopuptwelve() {
  const popuptwelve = document.getElementById('popuptwelve');
  popuptwelve.classList.remove('act');
}

function openPopupthirteen() {
  const popupthirteen = document.getElementById('popupthirteen');
  popupthirteen.classList.add('act');
}
function closePopupthirteen() {
  const popupthirteen = document.getElementById('popupthirteen');
  popupthirteen.classList.remove('act');
}

function openPopupfourteen() {
  const popupfourteen = document.getElementById('popupfourteen');
  popupfourteen.classList.add('act');
}
function closePopupfourteen() {
  const popupfourteen = document.getElementById('popupfourteen');
  popupfourteen.classList.remove('act');
}

function openPopupfifteen() {
  const popupfifteen = document.getElementById('popupfifteen');
  popupfifteen.classList.add('act');
}
function closePopupfifteen() {
  const popupfifteen = document.getElementById('popupfifteen');
  popupfifteen.classList.remove('act');
}

function openPopupsixteen() {
  const popupsixteen = document.getElementById('popupsixteen');
  popupsixteen.classList.add('act');
}
function closePopupsixteen() {
  const popupsixteen = document.getElementById('popupsixteen');
  popupsixteen.classList.remove('act');
}

function openPopupseventeen() {
  const popupseventeen = document.getElementById('popupseventeen');
  popupseventeen.classList.add('act');
}
function closePopupseventeen() {
  const popupseventeen = document.getElementById('popupseventeen');
  popupseventeen.classList.remove('act');
}

function openPopupeighteen() {
  const popupeighteen = document.getElementById('popupeighteen');
  popupeighteen.classList.add('act');
}
function closePopupeighteen() {
  const popupeighteen = document.getElementById('popupeighteen');
  popupeighteen.classList.remove('act');
}

function openPopupninteen() {
  const popupninteen = document.getElementById('popupninteen');
  popupninteen.classList.add('act');
}
function closePopupninteen() {
  const popupninteen = document.getElementById('popupninteen');
  popupninteen.classList.remove('act');
}

function openPopuptwenty() {
  const popuptwenty = document.getElementById('popuptwenty');
  popuptwenty.classList.add('act');
}
function closePopuptwenty() {
  const popuptwenty = document.getElementById('popuptwenty');
  popuptwenty.classList.remove('act');
}

function openPopuptwentyone() {
  const popuptwentyone = document.getElementById('popuptwentyone');
  popuptwentyone.classList.add('act');
}
function closePopuptwentyone() {
  const popuptwentyone = document.getElementById('popuptwentyone');
  popuptwentyone.classList.remove('act');
}

function openPopuptwentytwo() {
  const popuptwentytwo = document.getElementById('popuptwentytwo');
  popuptwentytwo.classList.add('act');
}
function closePopuptwentytwo() {
  const popuptwentytwo = document.getElementById('popuptwentytwo');
  popuptwentytwo.classList.remove('act');
}

function openPopuptwentythree() {
  const popuptwentythree = document.getElementById('popuptwentythree');
  popuptwentythree.classList.add('act');
}
function closePopuptwentythree() {
  const popuptwentythree = document.getElementById('popuptwentythree');
  popuptwentythree.classList.remove('act');
}

function openPopuptwentyfour() {
  const popuptwentyfour = document.getElementById('popuptwentyfour');
  popuptwentyfour.classList.add('act');
}
function closePopuptwentyfour() {
  const popuptwentyfour = document.getElementById('popuptwentyfour');
  popuptwentyfour.classList.remove('act');
}

function openPopuptwentyfive() {
  const popuptwentyfive = document.getElementById('popuptwentyfive');
  popuptwentyfive.classList.add('act');
}
function closePopuptwentyfive() {
  const popuptwentyfive = document.getElementById('popuptwentyfive');
  popuptwentyfive.classList.remove('act');
}

function openPopuptwentysix() {
  const popuptwentysix = document.getElementById('popuptwentysix');
  popuptwentysix.classList.add('act');
}
function closePopuptwentysix() {
  const popuptwentysix = document.getElementById('popuptwentysix');
  popuptwentysix.classList.remove('act');
}

function openPopuptwentyseven() {
  const popuptwentyseven = document.getElementById('popuptwentyseven');
  popuptwentyseven.classList.add('act');
}
function closePopuptwentyseven() {
  const popuptwentyseven = document.getElementById('popuptwentyseven');
  popuptwentyseven.classList.remove('act');
}

function openPopuptwentyeight() {
  const popuptwentyeight = document.getElementById('popuptwentyeight');
  popuptwentyeight.classList.add('act');
}
function closePopuptwentyeight() {
  const popuptwentyeight = document.getElementById('popuptwentyeight');
  popuptwentyeight.classList.remove('act');
}

function openPopuptwentynine() {
  const popuptwentynine = document.getElementById('popuptwentynine');
  popuptwentynine.classList.add('act');
}
function closePopuptwentynine() {
  const popuptwentynine = document.getElementById('popuptwentynine');
  popuptwentynine.classList.remove('act');
}

function openPopupthirty() {
  const popupthirty = document.getElementById('popupthirty');
  popupthirty.classList.add('act');
}

function closePopupthirty() {
  const popupthirty = document.getElementById('popupthirty');
  popupthirty.classList.remove('act');
}

function openPopupthirtyone() {
  const popupthirtyone = document.getElementById('popupthirtyone');
  popupthirtyone.classList.add('act');
}
function closePopupthirtyone() {
  const popupthirtyone = document.getElementById('popupthirtyone');
  popupthirtyone.classList.remove('act');
}

function openPopupthirtytwo() {
  const popupthirtytwo = document.getElementById('popupthirtytwo');
  popupthirtytwo.classList.add('act');
}
function closePopupthirtytwo() {
  const popupthirtytwo = document.getElementById('popupthirtytwo');
  popupthirtytwo.classList.remove('act');
}

function openPopupthirtythree() {
  const popupthirtythree = document.getElementById('popupthirtythree');
  popupthirtythree.classList.add('act');
}
function closePopupthirtythree() {
  const popupthirtythree = document.getElementById('popupthirtythree');
  popupthirtythree.classList.remove('act');
}

function openPopupthirtyfour() {
  const popupthirtyfour = document.getElementById('popupthirtyfour');
  popupthirtyfour.classList.add('act');
}
function closePopupthirtyfour() {
  const popupthirtyfour = document.getElementById('popupthirtyfour');
  popupthirtyfour.classList.remove('act');
}

function openPopupthirtyfive() {
  const popupthirtyfive = document.getElementById('popupthirtyfive');
  popupthirtyfive.classList.add('act');
}
function closePopupthirtyfive() {
  const popupthirtyfive = document.getElementById('popupthirtyfive');
  popupthirtyfive.classList.remove('act');
}

function openPopupthirtysix() {
  const popupthirtysix = document.getElementById('popupthirtysix');
  popupthirtysix.classList.add('act');
}
function closePopupthirtysix() {
  const popupthirtysix = document.getElementById('popupthirtysix');
  popupthirtysix.classList.remove('act');
}

function openPopupthirtyseven() {
  const popupthirtyseven = document.getElementById('popupthirtyseven');
  popupthirtyseven.classList.add('act');
}
function closePopupthirtyseven() {
  const popupthirtyseven = document.getElementById('popupthirtyseven');
  popupthirtyseven.classList.remove('act');
}

const hamburger =  document.getElementsByClassName('hamburger')[0];
const hamburgertwo =  document.getElementsByClassName('hamburger')[1];
const hamburgerthree =  document.getElementsByClassName('hamburger')[2];
const hamburgerfour =  document.getElementsByClassName('hamburger')[3];
const navMenu =  document.getElementsByClassName('ul')[0];
const navMenutwo =  document.getElementsByClassName('ul')[1];
const navMenuthree =  document.getElementsByClassName('ul')[2];
const navMenufour =  document.getElementsByClassName('ul')[3];

function barEffect() {
  hamburger.classList.toggle('toggle');
  navMenu.classList.toggle('toggle');

}
function barEffecttwo() {
  hamburgertwo.classList.toggle('toggle');
  navMenutwo.classList.toggle('toggle');
}
function barEffectthree() {
  hamburgerthree.classList.toggle('toggle');
  navMenuthree.classList.toggle('toggle');
}
function barEffectfour() {
  hamburgerfour.classList.toggle('toggle');
  navMenufour.classList.toggle('toggle');
}


