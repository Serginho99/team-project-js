const checkbox = document.querySelector('.theme-switcher__checkbox')

checkbox.addEventListener('change', switchTheme)

function switchTheme() {
    document.body.classList.toggle('light')
}