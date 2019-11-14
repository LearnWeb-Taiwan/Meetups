let subMenu = document.getElementsByClassName("nav-sub-menu")[0]
let dropdownMenu = document.getElementsByClassName("nav-dropdown-menu")[0]
let toggleMenu = document.getElementsByClassName("icon-toggle-menu")[0]
let nav = document.getElementsByClassName("navbar-nav")[0]

function responseEffect() {
    let viewWidth = document.body.clientWidth;

    if (viewWidth < 641) {
        toggleMenu.classList.forEach(className => {
        if (!className.match(/^active$/)) {
            toggleMenu.classList.add("active")
        }
        })

        nav.classList.forEach(className => {
        if (!className.match(/^active$/)) {
            nav.classList.add("collapse")
        }
        })
    } else {
        toggleMenu.classList.remove("active")
        nav.classList.remove("collapse")
    }
}

subMenu.addEventListener("click", function() {
    dropdownMenu.classList.toggle("active")
})

toggleMenu.addEventListener("click", function() {
    nav.classList.toggle('active')
})

addEventListener("resize", ()=>responseEffect())

responseEffect()