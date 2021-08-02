// document.addEventListener('DOMContentLoaded', 

//     () => { 
//         document.getElementsByClassName(".fa-bars").onclick = changeVerticalMenuBar;
      
//     });

//document.addEventListener('DOMContentLoaded', () => { document.getElementsByClassName(".vert-nav-link").onclick = changeVerticalMenuBar;} );

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