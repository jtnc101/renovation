document.addEventListener('DOMContentLoaded', 

    () => { 
        document.querySelector(".fa-bars").onclick = changeVerticalMenuBar;
        document.querySelector(".fa-times").onclick = changeVerticalMenuBar;
        navLinks = document.querySelectorAll(".vert-nav-link");
        navLinks.forEach( element => (element.onclick = changeVerticalMenuBar) );


        
                                
    });

