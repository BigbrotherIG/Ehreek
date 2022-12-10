
//    const menuLogo = document.querySelector("")
const navLinks = document.querySelector(".nav-links")
const logoMenu = document.querySelector(".logomenu")
const logoExit = document.querySelector(".logoexit")

let faqDropMenu = document.querySelectorAll(".faq-dropdown")
let arrowUp = document.querySelectorAll(".arrow-up")
let arrowDown = document.querySelectorAll(".arrow-down")

logoMenu.addEventListener("click", openMenu)
   
   function openMenu() {
      logoMenu.classList.toggle("active")
      logoExit.classList.toggle("active")
      navLinks.classList.toggle("active")
   }
   
   logoExit.addEventListener("click", () => {
      logoExit.classList.toggle("active")
      logoMenu.classList.toggle("active")
      navLinks.classList.toggle("active")
   })
   
   document.querySelectorAll(".nav-links").forEach(links => links.addEventListener("click", () => {
      openMenu()
      logoExit.classList.remove("active")
   }))

   /* arrowDown.forEach(changeDown => changeDown.addEventListener("click", (links) => {
      console.log("click me")
      var faqLinks = faqDropMenu.length
      var i = 0;
      while(i < faqLinks){
         arrowUp[i].classList.toggle("active")
         arrowDown[i].classList.toggle("active")
         faqDropMenu[i].classList.toggle("active");
         i++;   
      }
   })) */

  /* arrowUp.forEach(changeUp => changeUp.addEventListener("click", () => {
      console.log("click you")
      var faqLinks = faqDropMenu.length
      var i = 0;
      let arrow1 = document.getElementById('arrowbtn-1')
      while(i < faqLinks){
         arrowUp[i].classList.toggle("active")
         arrowDown[i].classList.toggle("active")
         faqDropMenu[i].classList.toggle("active");
         i++;
      }
   })) */

   // FAQ's buttons for popping the content hidden
   document.getElementById("arrowbtn-1").addEventListener("click", (changeDown) => {
      arrowDown[0].classList.toggle("active")
      arrowUp[0].classList.toggle("active")
      document.getElementById("faq-1").classList.toggle("active")
   })
   document.getElementById("arrowbtn-2").addEventListener("click", (changeDown) => {
      arrowDown[1].classList.toggle("active")
      arrowUp[1].classList.toggle("active")
      document.getElementById("faq-2").classList.toggle("active")
   })
   document.getElementById("arrowbtn-3").addEventListener("click", (changeDown) => {
      arrowDown[2].classList.toggle("active")
      arrowUp[2].classList.toggle("active")
      document.getElementById("faq-3").classList.toggle("active")
   })
   document.getElementById("arrowbtn-4").addEventListener("click", (changeDown) => {
      arrowDown[3].classList.toggle("active")
      arrowUp[3].classList.toggle("active")
      document.getElementById("faq-4").classList.toggle("active")
   })
