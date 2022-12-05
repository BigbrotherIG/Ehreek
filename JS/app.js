
//    const menuLogo = document.querySelector("")
const navLinks = document.querySelector(".nav-links")
const logoMenu = document.querySelector(".logomenu")
const logoExit = document.querySelector(".logoexit")

let faqDropMenu = document.querySelectorAll(".faq-dropdown")
let arrowUp = document.querySelectorAll(".arrow-up")
let arrowDown = document.querySelectorAll(".arrow-down")

// arrowDown.forEach(() => {
//    if(arrowDown.length == []) {}
// })

// arrowUp.forEach(() => {
//    if(arrowUp.length == []) {}
// })

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

   // let arrowLinks = arrowDown.length; arrowUp.length; faqDropMenu.length;
   // let i = 0;
   // while(i < arrowLinks){
   //    console.log("click")
   //    arrowDown[i].classList.toggle("active");
   //    arrowUp[i].classList.toggle("active");
   //    i++;
   // }
   
   arrowDown.forEach(changeDown => changeDown.addEventListener("click", (links) => {
      console.log("click me")
      var faqLinks = faqDropMenu.length
      var i = 0;
      while(i < faqLinks){
         arrowUp[i].classList.toggle("active")
         arrowDown[i].classList.toggle("active")
         faqDropMenu[i].classList.toggle("active");
         i++;
      }
   }))

   arrowUp.forEach(changeUp => changeUp.addEventListener("click", () => {
      console.log("click you")
      var faqLinks = faqDropMenu.length
      var i = 0;
      let arrow1 = document.getElementById('arrowbtn-1')
      while(i < faqLinks){
         if( i == arrow1){
            
         }
         arrowUp[i].classList.toggle("active")
         arrowDown[i].classList.toggle("active")
         faqDropMenu[i].classList.toggle("active");
         i++;
      }
   }))