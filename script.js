let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let selections = document.querySelector('selection');
let navlinks= document.querySelector('header nav a');

window.onscroll = () =>{
selections.forEach(sec =>{
let top = window.scrollY;
let offset = sec.offsetTop;
let height = sec.offsetHeight;
let id= sec.getAttribute('id');


if(top >= offset && top < offset + height){
navlinks.forEach(links =>{

links.classList.remove('active');
document.querySelector('header nav a[href*='+ id +']').classList.add('active');
})

}

})

}
menuIcon.onclick =()=>{
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');


}