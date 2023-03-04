let toggleBars = false

function openBars() {
    let barNavContainer = document.getElementById("nav-bars");

    if (toggleBars) {
        barNavContainer.style.display = 'none';
        toggleBars = false;
    } else {
        barNavContainer.style.display = 'flex';
        toggleBars = true;
    }
}

// let hamburgerIsOpen = false

// function openHamburger() {
//     let barNavContainer = document.getElementById("hamburger-nav-container")

//     if (hamburgerIsOpen) {
//         hamburgerNavContainer.style.display = 'none'
//         hamburgerIsOpen = false;
//     } else {
//         hamburgerNavContainer.style.display = 'block'
//         hamburgerIsOpen = true;
//     }
// }