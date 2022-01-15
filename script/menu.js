let show = true;

const menuSection = document.querySelector(".menu-principal")
const menuToggle = menuSection.querySelector(".menu-toggle")
const link = menuSection.querySelector("nav > a")

menuToggle.addEventListener("click", () => {

  document.body.style.overflow = show ? "hidden" : "initial";
  
  menuSection.classList.toggle("on", show)
  show = !show;
})

link.addEventListener("click", () => {

 let status = document.body.style.overflow
 if (status == "hidden"){
   document.body.style.overflow = "initial"
 }
})

