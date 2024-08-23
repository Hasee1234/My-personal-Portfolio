            
            hamburger = document.querySelector(".hamburger");
            hamburger.onclick = function() {
            navbar = document.querySelector(".navbar");
            navbar.classList.toggle("active");}



            let home=document.querySelector('a[href="#home"]');
home.onclick=(e)=>{
    e.preventDefault()
    document.querySelector('#home').scrollIntoView({behavior:'smooth'})
}
let about=document.querySelector('a[href="#about"]');
about.onclick=(e)=>{
    e.preventDefault()
    document.querySelector('#about').scrollIntoView({behavior:'smooth'})
}
let project=document.querySelector('a[href="#project"]');
project.onclick=(e)=>{
    e.preventDefault()
    document.querySelector('#project').scrollIntoView({behavior:'smooth'})
}
let contact=document.querySelector('a[href="#contact"]');
contact.onclick=(e)=>{
    e.preventDefault()
    document.querySelector('#contact').scrollIntoView({behavior:'smooth'})
}
