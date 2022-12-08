
const toggleButton = document.getElementsByClassName('toggle-bar')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('navbar-on')
})