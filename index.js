gsap.registerPlugin(ScrollTrigger);

 
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
      align : "space-between",
      content : "center",
      assets: {
        url: [
          "./assets/veme-blockchain-app-developed.png",
          "./assets/veme-blockchain-app-developed.png",
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
      image : "./assets/nasa-mobile-app.png"
    },
    right: {
      align: "space-between",
      content : "center",
      assets: {
        url: [
          "./assets/nasa-fitness-tracking-mobile-app.png","assets/measure-total-body-weight-through-fitness-app.png"
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
      image : "./assets/nasa-mobile-app.png"
    },
    right: {
      align: "center",
      content : "center",
      assets: {
        url: [
          "./assets/domi-img1.png",
          "./assets/ux-strategy-for-mobile-app-devlopment.png",
          "./assets/dominos-bread.png",
          "./assets/dominos-bread1.png",
          "./assets/dominos-masala.png",
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
          "./assets/karavan-social-networking-app-screen.png", "./assets/karavan_2.png","./assets/social-networking-app-case-study.png"
        ],
      },
      color: "#35dbc8",
    },
  },
  {
    id: 6,
    left: {
      button: false,
      buttonImage: "LeftbuttonImage",
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
      buttonImage: "./assets/world-communication-awards-for-best-digital-experience.png",
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
        url: [
          "./assets/melltoo-img1.png",
          "./assets/melltoo-img2.png",
        ],
      },
      color: "black",
    },
  },
  
 
];

// fetchLeft Content
var leftContent = document.getElementById("leftContent");
content.forEach((d) => {
  leftContent.innerHTML += `<div class="d-flex flex-column justify-content-start align-items-start m-1" style="min-height : 280px " >
                    ${
                      d.left.button === true
                        ? `<img src=${d.left.buttonImage} alt="button"></img>`
                        : ""
                    }
     
                   <div class="d-flex flex-column text-white " style="font-size : 70px">
                       <span style="font-size : 70px">${d.left.title}</span>
     
                        <span class="fs-5">${d.left.body}</span>
                   </div>
                   </div>`;
});

// fetchCenter
var centerContent = document.getElementById("centerContent");
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

//  fetch Right

var rightContent = document.getElementById("rightContent");
content.forEach((d) => {
  rightContent.innerHTML += `<div class="d-flex m-6 justify-content-center align-items-center bg-suceess" style="min-height : 100vh" >
                               ${d.right.assets.url[0] ? `<img src=${d.right.assets.url[0]}></img>` : "" }
                               ${d.right.assets.url[1] ? `<img src=${d.right.assets.url[1]}></img>` : "" }
                               ${d.right.assets.url[2] ? `<img src=${d.right.assets.url[2]}></img>` : "" }

                               ${d.right.assets.url[3] ? `<img src=${d.right.assets.url[3]}></img>` : "" }
                             </div>`;
});


// Define an array of colors you want to cycle through

const colors = ["#5f01a4", "#4d1bca", "#11103a" ,"#19273d", "#1b4ea2" , "#082b90" , "#119852" ];

//  default color :
var left = document.querySelector("#left");
var center = document.querySelector("#center");
var right = document.querySelector("#rightContent");

left.style.backgroundColor = "#5f01a4";
center.style.backgroundColor = "#5f01a4";


// Function to change background color
function changeBackgroundColor(index) {
  var left = document.querySelector("#left");
  left.style.backgroundColor = colors[index];
}

function changeBackgroundColorCenter(index) {
  var center = document.querySelector("#center");
  center.style.backgroundColor = colors[index];
}

// Create ScrollTrigger for each 100vh section
for (let i = 1; i <= 7; i++) {
  ScrollTrigger.create({
    start: i * 1000, // Start at every 100vh
    end: (i + 1) * 1000, // End at the next 100vh
    onEnter: () => changeBackgroundColor(i),
  });
}

// Create ScrollTrigger for each 100vh section
for (let i = 1; i <= 7; i++) {
  ScrollTrigger.create({
    start: i * 1000, // Start at every 100vh
    end: (i + 1) * 1000, // End at the next 100vh
    onEnter: () => changeBackgroundColorCenter(i),
  });
}

function changeBackgroundColorCenter(index) {
  var center = document.querySelector("#center");
  console.log(colors[index]);
  center.style.backgroundColor = colors[index];
}





// svg buttons
// data-scroll-to="0"
const dots = document.querySelectorAll(".dots-nav");
console.log(dots);
var pageIndex = [1,2,3,4,5,6,7];
const windowHeight = window.innerHeight;

dots.forEach((dots)=>{
    dots.addEventListener("click",(e)=>{
      const targetScrollPosition = (dots.getAttribute('data-scroll-to')) * windowHeight;

      gsap.to(window, {
          scrollTo: {
              y: targetScrollPosition,
          },
          duration: 0, // Animation duration in seconds
      });
      
      const targetIndex = (dots.getAttribute('data-scroll-to')) * 280;
      gsap.to("#leftContent",{
            scrollTo: {
               y: targetIndex,
            },
             duration: 1,
      })
      
      const targetIndexCenter = (dots.getAttribute('data-scroll-to')) * 220;
      gsap.to("#centerContent",{
            scrollTo: {
               y: targetIndexCenter,
            },
             duration: 1,
      })
    })
  })