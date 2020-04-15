window.onscroll = () => {
    let scroll = window.scrollY;

    //seleciona <div clas header scroll>
    const headerScroll = document.querySelector(".header-scroll");

    if (scroll > 300) {
        headerScroll.classList.add("activo");
    } else {
        headerScroll.classList.remove("activo");
    }
};