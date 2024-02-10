var page = 1,
  currentPage;

let nextBtn = document.getElementById("nextBtn");
let partEl = document.querySelectorAll(".part");
const loadingScreen = document.querySelector(".loading-screen"),
  loadingText = document.querySelectorAll(".loading-screen .text-wrapper h1");

let
  zoomOut = [.8, 1],
  zoomIn = [1.2, 1],
  fadeIn = [0, 1],
  fadeOut = [1, 0];

const changePart = () => {
  console.log(page, currentPage);
  anime.timeline()
    .add({
      targets: partEl[currentPage-1],
      opacity: [1, 0],
      translateY: 20,
      duration: 500,
      easing: "easeOutExpo",
      complete: () => {
        partEl[currentPage-1].style.display = "none";
      }
    })
    .add({
      targets: partEl[page-1],
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 500,
      easing: "easeOutExpo",
      begin: () => {
        partEl[page-1].style.display = "flex";
      }
    })
}

const next = () => {
  console.log("h", page+1, partEl.length-1);
  if (page+1 > partEl.length) return;
  console.log("b");
  currentPage = page;
  page++;
  changePart();
}
const prev = () => {
  if (page-1 < 0) return;
  currentPage = page;
  page--;
  changePart();
}

window.addEventListener("DOMContentLoaded", () => {
  
  setTimeout(function() {
    anime.timeline({loop: false})
      .add({
        targets: loadingText[0],
        opacity: fadeIn,
        scale: zoomOut,
        duration: 700,
        easing: "easeOutExpo",
      })
      .add({
        targets: loadingText[0],
        opacity: fadeOut,
        duration: 300,
        easing: "easeOutExpo",
      })
      .add({
        targets: loadingText[1],
        opacity: fadeIn,
        scale: zoomOut,
        duration: 560,
        easing: "easeOutExpo",
      })
      .add({
        targets: loadingText[1],
        opacity: fadeOut,
        duration: 200,
        easing: "easeOutExpo",
      })
      .add({
        targets: loadingText[2],
        opacity: fadeIn,
        scale: zoomOut,
        duration: 700,
        easing: "easeOutExpo",
      })
      .add({
        targets: loadingText[2],
        opacity: fadeOut,
        duration: 400,
        easing: "easeOutExpo",
      })
      .add({
        targets: loadingText[3],
        opacity: fadeIn,
        scale: [1, 1.3],
        rotate: 12,
        duration: 1000,
        easing: "easeOutExpo",
      })
      .add({
        targets: loadingText[3],
        opacity: fadeOut,
        duration: 400,
        easing: "easeOutQuad",
      })
      .add({
        targets: loadingScreen,
        height: 0,
        duration: 550,
        easing: "easeInQuad",
        complete: () => {
          main();
        },
      })
      
  }, 1000);
  
  
  
  function main(){
    partEl[page-1].style.opacity = 1;
    partEl[page-1].style.display = "flex";
  }
  
  let lolSizeBtn = document.querySelectorAll(".lolSizeBtn");
  lolSizeBtn.forEach((el) => {
    el.onclick = () => {
      anime({
        targets: el,
        scale: 0,
        translateX: [0, -50],
        translateY: 300,
        duration: 700,
        easing: "easeInQuad"
      });
    }
  });
  let nextBtns = document.querySelectorAll(".nextBtn");
  nextBtns.forEach((nextBtn) => {
    nextBtn.onclick = () => {
      next();
    }
  });
  let prevBtns = document.querySelectorAll(".prevBtn");
  prevBtns.forEach((prevBtn) => {
    prevBtn.onclick = () => {
      prev();
    }
  });
  
  let openMsgBtn = document.getElementById("openMsgBtn"),
    msgBox = document.getElementById("msg");
  openMsgBtn.onclick = () => {
    anime({
      targets: msgBox,
      height: 480,
      duration: 1000,
      easing: "easeOutQuad",
      begin: () => {
        document.querySelector(".instruction").style.display = "none";
      }
    });
  }
});