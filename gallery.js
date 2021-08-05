// import "helpers";

document.addEventListener('DOMContentLoaded', 

    () => { 
        document.querySelector(".fa-bars").onclick = changeVerticalMenuBar;
        document.querySelector(".fa-times").onclick = changeVerticalMenuBar;
        navLinks = document.querySelectorAll(".vert-nav-link");
        navLinks.forEach( element => (element.onclick = changeVerticalMenuBar) );


        
        allGalleryImages = document.querySelectorAll(".gallery-image");
        allGalleryImages.forEach(element => {
            element.onclick = openFullImage;
        });

        document.querySelector(".all-image-placeholder-close").onclick = closeFullImage;
        
        
                                
    });

