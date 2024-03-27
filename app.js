
const toggle  = ()=>{

}


const bars = document.getElementById('bars');

bars.addEventListener('click' , ()=>{
    const ul = document.getElementById('ul');
    if (ul.style.top === "-300px") {
        ul.style.top = "50px";
      } else {
        ul.style.top = "-300px";
      }
   



})



const navLink = document.querySelectorAll('.ul li a');
console.log(navLink)

navLink.forEach(links => {
  return console.log(links)
})