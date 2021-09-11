

function changeVerticalMenuBar () {

    // click bars icon closes or opens vertical menu bar depending on its state.
    // Determine bar's state.

    displayValue = document.querySelector(".vert-nav-bar").style.display;
    
    if(  displayValue === 'none' || displayValue === '' ) {
        document.querySelector(".vert-nav-bar").style.display = 'block';
    } else {
        document.querySelector(".vert-nav-bar").style.display  = 'none';
    }

    // interchange bars icon to times icon.

    timesIconValue = document.querySelector(".fa-times").style.display;

    if( timesIconValue === 'none' || timesIconValue === '' ) {
        document.querySelector(".fa-times").style.display='block';
        document.querySelector(".fa-bars").style.display='none';

    } else {
        document.querySelector(".fa-times").style.display='none';
        document.querySelector(".fa-bars").style.display='block';
    }
}

openFullImage = (e) => {
    element = e.target;
    
    if( element.className === 'main-gallery' ) {
        document.querySelector(".image-placeholder-container").style.display = 'block';
        document.querySelector(".image-placeholder").src = element.src;
    } else {
        document.querySelector(".all-image-placeholder-container").style.display = 'block';
        document.querySelector(".all-image-placeholder").src = element.src;
    }
}

closeFullImage = (e) => {
    element = e.target;
    console.log ( element);
    if( element.className === 'fas fa-times-circle image-placeholder-close') {
        document.querySelector(".image-placeholder").src = '';
        document.querySelector(".image-placeholder-container").style.display = 'none';
    } else {
        document.querySelector(".all-image-placeholder").src = '';
        document.querySelector(".all-image-placeholder-container").style.display = 'none';
    }
}