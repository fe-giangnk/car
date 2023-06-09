function headerNav(){
    const open = document.querySelector(".mobile-nav--open");
    const close = document.querySelector(".mobile-nav--close");
    const mobileMenu = document.querySelector(".mobile-nav");
    open.addEventListener("click", function (e) {
        mobileMenu.classList.add("show");
    });
    close.addEventListener("click", function (e) {
        mobileMenu.classList.remove("show");
    });
}
export default headerNav;