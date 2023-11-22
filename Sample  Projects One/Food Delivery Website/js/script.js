
let navLink = document.querySelector('.navlinks');
let navBar = document.querySelector('#menuBar');

navBar.onclick = () => {
    navLink.classList.toggle('active');
}