gsap.registerPlugin(ScrollTrigger);
const { TweenMax, Power0 } = window;

const content = [
  {
    id: 1,
    left: {
      button: true,
      buttonImage:
        "./assets/world-communication-awards-for-best-digital-experience.png",
      title: "ABC 123",
      body: "We are the best web development company in the world",
      caseStudyButton: true,
      comingSoon: false,
      skipButton: true,
      color: "#5f01a4",
    },
    center: {
      title: "25M+ Downloads",
      body: "an appstore & google playstore",
      color: "#5f01a4",
    },
    right: {
      align: "center",
      assets: {
        url: [
          "./assets/nexgtv-entertainment-mobile-app-development.png",
          "./assets/nexgtv-mobile-app-ui-design.png",
        ],
      },
      color: "#d2d1d5",
    },
  },
  {
    id: 2,
    left: {
      button: false,
      buttonImage: "LeftbuttonImage",
      title: "ABC 234",
      body: "We are the best web development company in the world",
      caseStudyButton: true,
      comingSoon: false,
      skipButton: true,
      color: "#4d1bca",
    },
    center: {
      prev: "The Next Big",
      title: "BlockChain",
      body: "Revolution",
      color: "#4d1bca",
    },
    right: {
      align: "space-between",
      content: "center",
      assets: {
        url: [
          "./assets/veme-blockchain-app-developed.png",
          "./assets/veme-app-ui-design.png",
        ],
      },
      color: "#1e0061",
    },
  },
  {
    id: 3,
    left: {
      button: false,
      buttonImage: "LeftbuttonImage",
      title: "ABC 123",
      body: "We are the best web development company in the world",
      caseStudyButton: true,
      comingSoon: false,
      skipButton: true,
      color: "#19273d",
    },
    center: {
      prev: "Powered by advanced",
      title: "UX Stratergy",
      body: "algorithms",
      color: "#19273d",
      image: "./assets/nasa-mobile-app.png",
    },
    right: {
      align: "space-between",
      content: "center",
      assets: {
        url: [
          "./assets/nasa-fitness-tracking-mobile-app.png",
          "assets/measure-total-body-weight-through-fitness-app.png",
        ],
      },
      color: "#11151e",
    },
  },
  {
    id: 4,
    left: {
      button: false,
      buttonImage: "LeftbuttonImage",
      title: "ABC 123",
      body: "We are the best web development company in the world",
      caseStudyButton: true,
      comingSoon: false,
      skipButton: true,
      color: "#19273d",
    },
    center: {
      prev: "The Next Big",
      title: "UX Stratergy",
      body: "and UI design",
      color: "19273d",
      image: "./assets/nasa-mobile-app.png",
    },
    right: {
      align: "center",
      content: "center",
      assets: {
        url: [
          "./assets/domi-img1.png",
          "./assets/ux-strategy-for-mobile-app-devlopment.png",
          "./assets/dominos-bread.png",
          "./assets/dominos-bread1.png",
          "./assets/pizza_box.png",
        ],
      },
      color: "#11151e",
    },
  },
  {
    id: 5,
    left: {
      button: false,
      buttonImage: "LeftbuttonImage",
      title: "ABC 567",
      body: "We are the best web development company in the world",
      caseStudyButton: true,
      comingSoon: false,
      skipButton: true,
      color: "#119852",
    },
    center: {
      prev: "Text Headline",
      title: "Text Headline",
      body: "Footer Headline",
    },
    right: {
      align: "center",
      assets: {
        url: [
          "./assets/karavan-social-networking-app-screen-2.png",
          "./assets/karavan-social-networking-app-screen.png",
          "./assets/karavan_2.png",
          "./assets/social-networking-app-case-study.png",
          "./assets/developers-for-social-media-app.png",
        ],
      },
      color: "#35dbc8",
    },
  },
  {
    id: 6,
    left: {
      button: true,
      buttonImage:
        "./assets/world-communication-awards-for-best-digital-experience.png",
      title: "ABC 678",
      body: "We are the best web development company in the world",
      caseStudyButton: false,
      comingSoon: true,
      skipButton: true,
    },
    center: {
      prev: "Developing ERP Solution for",
      title: "Text Headline",
      body: "in future industry",
      color: "#1b4ea2",
    },
    right: {
      align: "center",
      assets: {
        url: [
          "./assets/erp-app-development-service.png",
          "./assets/interior.jpg",
        ],
      },
      color: "#44e5e4",
    },
  },
  {
    id: 7,
    left: {
      button: false,
      buttonImage:
        "./assets/world-communication-awards-for-best-digital-experience.png",
      title: "ABC 23478",
      body: "We are the best web development company in the world",
      caseStudyButton: true,
      comingSoon: false,
      skipButton: true,
      color: "#082b90",
    },
    center: {
      prev: "Developing ERP Solution for",
      title: "East Asia",
      body: "Countries",
      color: "#082b90",
    },
    right: {
      align: "center",
      assets: {
        url: ["./assets/melltoo-img1.png", "./assets/melltoo-img2.png"],
      },
      color: "black",
    },
  },
];

let scrollPosition = 1;
function updateScrollPosition() {
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercentage = (window.scrollY / totalHeight) * 100;
  scrollPosition = Math.ceil((scrollPercentage / 100) * 7);
}

 
//  colors chnage on scroll for fixed divs
const colors = [
  "#5f01a4",
  "#4d1bca",
  "#11103a",
  "#19273d",
  "#1b4ea2",
  "#082b90",
  "#119852",
];

//  uniique colors right
const colorsRight = [
  "#d5d3d7",
  "#1e0061",
  "#181549",
  "#11151e",
  "#42e1de",
  "#fff",
  "#16d571",
];
//   body

// elements
//  default color :
var left = document.querySelector("#left");
var center = document.querySelector("#center");
var right = document.querySelector("#rightContent");

//  contents
var leftContent = document.getElementById("leftContent");
var centerContent = document.getElementById("centerContent");
var rightContent = document.getElementById("rightContent");
var leftBody = document.getElementById("leftBody");

 var responsive = document.getElementById("responsive");

 

 content.forEach(d=>{
    responsive.innerHTML += `<div class="position-relative bg-danger overflow-hidden d-flex justify-content-start align-items-center" style="max-height : 100vh; min-width : 100vw">
          <div class="bg-warning container-fluid z-3 position-fixed bottom-0" style="height : 40vh">
                   
                
          ${d.left.button
          ? `<img src=${
              content[scrollPosition - 1].left.buttonImage
            } alt="button"></img>`
          : `<div className='bg-danger w-75 h-100 d-flex justify-content-center align-items-center' ></div>`}
                

                <div class="d-flex flex-column justify-content-start align-items-start m-1 text-white" style="min-height : 120px font-size : 70px">
                  
                    
                 <span style="font-size : 70px">${d.left.title}</span>

                 <span style="font-size : 20px">${d.left.body}</span>
      
                 </div>
          </div>

          <div class="w-100 bg-success over" style="max-height : 100vh, min-width : 100vw">
          ${
            d.right.assets.url[0]
              ? `<img src=${d.right.assets.url[0]}></img>`
              : ""
          }
          ${
            d.right.assets.url[1]
              ? `<img src=${d.right.assets.url[1]}></img>`
              : ""
          }
          ${
            d.right.assets.url[2]
              ? `<img src=${d.right.assets.url[2]}></img>`
              : ""
          }

          ${
            d.right.assets.url[3]
              ? `<img src=${d.right.assets.url[3]}></img>`
              : ""
          }
          ${
            d.right.assets.url[4]
              ? `<img src=${d.right.assets.url[4]}></img>`
              : ""
          }
          </div>

     </div>`
 })

 



//  defining timelines
const tl = gsap.timeline();

content.forEach((d) => {
  leftContent.innerHTML += `<div class="d-flex flex-column justify-content-start align-items-start m-1 text-white" style="min-height : 120px font-size : 70px">
                  
                    
                       <span style="font-size : 70px">${d.left.title}</span>
                   
                   </div>`;
});

content.forEach((d) => {
  leftBody.innerHTML += `<div class="d-flex flex-column justify-content-start align-items-start m-1 text-white" style="min-height : 80px ;font-size : 20px" >
                      ${d.left.body} 
                   </div>`;
});

content.forEach((d) => {
  centerContent.innerHTML += `<div class="w-75 d-flex flex-column justify-content-center align-items-center m-1" style="min-height : 220px" >
  ${
    d.center.prev
      ? `<span class="w-100 fs-4 text-end">
  ${d.center.prev}
</span>`
      : ""
  }
  <span class="w-100 h1 text-end" style="font-size : 70px" >
  ${d.center.title || d.center.image}
</span>
<span class="w-100 fs-4 text-end">
  ${d.center.body}
</span>
  </div>`;
});

content.forEach((d) => {
  rightContent.innerHTML += `<div class="d-flex justify-content-center align-items-center overflow-hidden position-relative rightPage" style="height : 100vh; width : 55vw" >
                               ${
                                 d.right.assets.url[0]
                                   ? `<img src=${d.right.assets.url[0]}></img>`
                                   : ""
                               }
                               ${
                                 d.right.assets.url[1]
                                   ? `<img src=${d.right.assets.url[1]}></img>`
                                   : ""
                               }
                               ${
                                 d.right.assets.url[2]
                                   ? `<img src=${d.right.assets.url[2]}></img>`
                                   : ""
                               }

                               ${
                                 d.right.assets.url[3]
                                   ? `<img src=${d.right.assets.url[3]}></img>`
                                   : ""
                               }
                               ${
                                 d.right.assets.url[4]
                                   ? `<img src=${d.right.assets.url[4]}></img>`
                                   : ""
                               }
                             </div>`;
});

var leftImage = document.getElementById("leftImage");

var leftStatus = document.getElementById("leftStatus");

// unique and comon classname

var rightPage = document.querySelectorAll(".rightPage");
rightPage[0].childNodes[1].classList.add("rightCard", "rightCard11");
rightPage[0].childNodes[3].classList.add("rightCard", "rightCard12");

rightPage[1].childNodes[1].classList.add("rightCard", "rightCard21");
rightPage[1].childNodes[3].classList.add("rightCard", "rightCard22");

rightPage[2].childNodes[1].classList.add("rightCard", "rightCard31");
rightPage[2].childNodes[3].classList.add("rightCard", "rightCard32");

rightPage[3].childNodes[1].classList.add("rightCard", "rightCard41");
rightPage[3].childNodes[3].classList.add("rightCard", "rightCard42");
rightPage[3].childNodes[5].classList.add("rightCard", "rightCard43");
rightPage[3].childNodes[7].classList.add("rightCard", "rightCard44");
rightPage[3].childNodes[9].classList.add("rightCard", "rightCard45");


console.log(rightPage[4].childNodes);
rightPage[4].childNodes[1].classList.add("rightCard", "rightCard51");
rightPage[4].childNodes[3].classList.add("rightCard", "rightCard52");
rightPage[4].childNodes[5].classList.add("rightCard", "rightCard53");
rightPage[4].childNodes[7].classList.add("rightCard", "rightCard54");
rightPage[4].childNodes[9].classList.add("rightCard", "rightCard55");

rightPage[5].childNodes[1].classList.add("rightCard", "rightCard61");
rightPage[5].childNodes[3].classList.add("rightCard", "rightCard62");

rightPage[6].childNodes[1].classList.add("rightCard", "rightCard71");
rightPage[6].childNodes[3].classList.add("rightCard", "rightCard72");

//  animations
TweenMax.from(".rightCard11", 0.5, {
  y: "100%",
});
TweenMax.to(".rightCard11", 0.5, {
  y: "0%",
});

TweenMax.from(".rightCard12", 0.7, {
  y: "100%",
});
TweenMax.to(".rightCard12", 0.7, {
  y: "0%",
});


// svg buttons
// data-scroll-to="0"
const dots = document.querySelectorAll(".dots-nav");
const windowHeight = window.innerHeight;

// default dot
var dotsst = document.querySelectorAll(".dotsst");
dotsst.forEach((d) => {
  d.classList.add("invisible");
});
dotsst[0].classList.remove("invisible");

content[0].left.button
? (leftImage.innerHTML = `<img src=${
    content[0].left.buttonImage
  } alt="button" class=""></img>`)
: (leftImage.innerHTML = `<div className='bg-danger w-75 h-100 d-flex justify-content-center align-items-center' ></div>`);

content[0].left.comingSoon === true
? (leftStatus.innerHTML = `<a class="text-light text-decoration-none opacity-50" >
Coming Soon
->
</a>`)
: "";

content[0].left.caseStudyButton === true
? (leftStatus.innerHTML = `<a class="text-white text-decoration-none" >
 View case Study
->
</a>`)
: "";


// scroll listener
window.addEventListener("scroll", (e) => {
  // scrollPosiiton
  updateScrollPosition();

  //  content scroll values calculations
  const targetIndex = (scrollPosition - 1) * 115;
  const targetIndexCenter = (scrollPosition - 1) * 230;
  const targetIndexLeftBody = (scrollPosition - 1) * 80;

  //  fetch Image
  dots.forEach((dots) => {
    dots.childNodes[1].childNodes[1].classList.add("invisible");

    dots.addEventListener("click", (e) => {
      const targetScrollPosition =
        dots.getAttribute("data-scroll-to") * window.innerHeight;

      console.log(targetScrollPosition);

      gsap.to(window, {
        scrollTo: {
          y: targetScrollPosition,
        },
        duration: "0s", // Animation duration in seconds
      });

      // e.target.childNodes[1].childNodes[1].classList.add("d-block");

      const targetIndex = dots.getAttribute("data-scroll-to") * 150;
      gsap.to("#leftContent", {
        scrollTo: {
          y: targetIndex,
        },
        duration: 1,
      });

      const targetIndexBody = dots.getAttribute("data-scroll-to") * 80;
      gsap.to("#leftBody", {
        scrollTo: {
          y: targetIndexBody,
        },
        duration: 1,
      });

      const targetIndexCenter = dots.getAttribute("data-scroll-to") * 228;
      gsap.to("#centerContent", {
        scrollTo: {
          y: targetIndexCenter,
        },
        duration: 1,
      });
    });
  });

  content[scrollPosition - 1].left.button
    ? (leftImage.innerHTML = `<img src=${
        content[scrollPosition - 1].left.buttonImage
      } alt="button"></img>`)
    : (leftImage.innerHTML = `<div className='bg-danger w-75 h-100 d-flex justify-content-center align-items-center' ></div>`);

  var dotsst = document.querySelectorAll(".dotsst");
  var transrg = document.querySelectorAll(".transrg");

  left.style.backgroundColor = colors[scrollPosition - 1];
  center.style.backgroundColor = colors[scrollPosition - 1];
  right.style.backgroundColor = colorsRight[scrollPosition - 1];

  content[scrollPosition - 1].left.comingSoon === true
    ? (leftStatus.innerHTML = `<a class="text-light text-decoration-none opacity-50" >
  Coming Soon
  ->
  </a>`)
    : "";

  content[scrollPosition - 1].left.caseStudyButton === true
    ? (leftStatus.innerHTML = `<a class="text-white text-decoration-none" >
     View case Study
  ->
  </a>`)
    : "";

  //  svg animation

  for (let i = 0; i <= scrollPosition - 1; i++) {
    dotsst[i].classList.remove("invisible");
  }

  // for (let i = 0; i <= scrollPosition-1; i++) {
  //   transrg[i].classList.add("opacity-100");
  // }

  //  animations
 
  TweenMax.from(".rightCard21", 0.5, {
    y: "100%",
  });
  TweenMax.to(".rightCard21", 0.5, {
    y: "0%",
  });

  TweenMax.from(".rightCard22", 0.7, {
    y: "-100%",
  });
  TweenMax.to(".rightCard22", 0.7, {
    y: "0%",
  });

  TweenMax.from(".rightCard31", 0.5, {
    y: "100%",
  });
  TweenMax.to(".rightCard31", 0.5, {
    y: "0%",
  });

  TweenMax.from(".rightCard32", 0.7, {
    y: "-100%",
  });
  TweenMax.to(".rightCard32", 0.7, {
    y: "0%",
  });

  TweenMax.from(".rightCard41", 0.5, {
    y: "100%",
  });
  TweenMax.to(".rightCard41", 0.5, {
    y: "0%",
  });

  TweenMax.from(".rightCard42", 0.7, {
    y: "-100%",
  });
  TweenMax.to(".rightCard42", 0.7, {
    y: "0%",
  });
  
  TweenMax.from(".rightCard61", 0.5, {
    y: "100%",
  });
  TweenMax.to(".rightCard61", 0.5, {
    y: "0%",
  });

  TweenMax.from(".rightCard71", 0.5, {
    y: "100%",
  });
  TweenMax.to(".rightCard71", 0.5, {
    y: "0%",
  });

  TweenMax.from(".rightCard72", 0.7, {
    y: "-100%",
  });
  TweenMax.to(".rightCard72", 0.7, {
    y: "0%",
  });

  TweenMax.from(".rightCard55", 0.5, {
    x: "100%",
  });
  TweenMax.to(".rightCard55", 0.5, {
    x: "0%",
  });

  TweenMax.from(".rightCard51", 0.7, {
    y: "100%",
  });
  TweenMax.to(".rightCard51", 0.7, {
    y: "0%",
  });

  TweenMax.from(".rightCard53", 0.7, {
    y: "100%",
  });
  TweenMax.to(".rightCard53", 0.7, {
    y: "0%",
  });

  TweenMax.from(".rightCard52", 0.7, {
    y: "-100%",
  });
  TweenMax.to(".rightCard52", 0.7, {
    y: "0%",
  });

  TweenMax.from(".rightCard54", 0.7, {
    y: "-100%",
  });
  TweenMax.to(".rightCard54", 0.7, {
    y: "0%",
  });

  //  leftImage
  TweenMax.from("#leftImage", 0.7, {
    css: { opacity: 0.5 },
  });
  TweenMax.to("#leftImage", 0.7, {
    css: { opacity: 1 },
  });

  gsap.to("#centerContent", {
    scrollTo: {
      y: targetIndexCenter,
    },
    duration: 1,
  });

  gsap.to("#leftContent", {
    scrollTo: {
      y: targetIndex,
    },
    duration: 1,
  });

  gsap.to("#leftBody", {
    scrollTo: {
      y: targetIndexLeftBody,
    },
    duration: 1,
  });
});


//  default bg
left.style.backgroundColor = "#5f01a4";
center.style.backgroundColor = "#5f01a4";
right.style.backgroundColor = "#d5d3d7";

dotsst[0].classList.remove("invisible");


window.addEventListener("wheel",(e)=>{
 
  updateScrollPosition();
   
  if( e.deltaY > 0){
    gsap.to(window, {
      scrollTo: {
        y: scrollPosition * window.innerHeight,
      },
      duration: 0.01, // Animation duration in seconds
    });
  }
   
   console.log(e.deltaY , scrollPosition*window.innerHeight - window.innerHeight );
   if (e.deltaY < 0 && scrollPosition >= 0) {
    gsap.to(window, {
      scrollTo: {
        y:  ((scrollPosition-2) * window.innerHeight)
      },
      duration: 0.01, // Animation duration in seconds
    });

    TweenMax.from(".rightCard21", 0.5, {
      y: "0%",
    });
    TweenMax.to(".rightCard21", 0.5, {
      y: "100%",
    });
  
    TweenMax.from(".rightCard22", 0.7, {
      y: "0%",
    });
    TweenMax.to(".rightCard22", 0.7, {
      y: "-100%",
    });

   }
})

updateScrollPosition();