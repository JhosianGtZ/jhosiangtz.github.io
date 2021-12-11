window.addEventListener("scroll", function(){
  
    let header = document.querySelector("nav");
    
    header.classList.toggle("nav-solid" , window.scrollY > 0);
    
  });