document.addEventListener('DOMContentLoaded', 

    () => { 
        document.querySelector(".fa-bars").onclick = changeVerticalMenuBar;
        document.querySelector(".fa-times").onclick = changeVerticalMenuBar;
        navLinks = document.querySelectorAll(".vert-nav-link");
        navLinks.forEach( element => (element.onclick = changeVerticalMenuBar) );

        mainGalleryImages = document.querySelectorAll(".main-gallery");
        mainGalleryImages.forEach(element => {
            element.onclick = openFullImage;
        });
                
        document.querySelector(".image-placeholder-close").onclick = closeFullImage;
        
                                
    });

