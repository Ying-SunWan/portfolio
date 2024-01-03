function applyDimensionChanges() {
    const navList = document.getElementById('nav-list');

    if ((window.innerWidth || document.documentElement.clientWidth) > 768) {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight
        const navListHeight = navList.offsetHeight

        navList.style.top = (windowHeight - navListHeight) / 2 + 'px'
        navList.style.left = ''
    } else {
        const windowWidth = window.innerWidth || document.documentElement.clientWidth
        const navListWidth = navList.offsetWidth

        navList.style.top = ''
        navList.style.left = (windowWidth - navListWidth) / 2 + 'px'
    }
}

addEventListener("resize", () => {
    applyDimensionChanges()
})
applyDimensionChanges()