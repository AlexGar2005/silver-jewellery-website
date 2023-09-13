const animItems = document.querySelectorAll('.anim');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 3;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('active');
    } else {
      if (!animItem.classList.contains('no_hide')) {
        animItem.classList.remove('active');
      }
    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageXOffset || document.documentElement.scrollTop;
  return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}
}

function openNav() {
  document.getElementById("mySidenav").classList.add("act");
  document.getElementById("openbtn").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").classList.remove("act");
  document.getElementById("openbtn").style.display = "flex";
}

function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: "smooth"
  })
  let interval = setInterval(() => {
    nextStep();
  },10000);
}
let image = document.getElementById("image");
let footer = document.getElementById("footer");
image.addEventListener("click", () => {
  scrollTo(footer);
  console.log("hi");
});

