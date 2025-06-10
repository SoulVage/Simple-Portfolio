const closeBtn = document.querySelector(".close-btn")
const burgerMenu = document.querySelector(".burger-menu")
const sidebar = document.querySelector(".sidebar-menu")

burgerMenu.addEventListener("click", ()=> {
    sidebar.classList.add("active")
})
closeBtn.addEventListener("click", ()=> {
    sidebar.classList.remove("active")
})