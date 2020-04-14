// Smooth Scroll con JS Nativo
document.querySelectorAll(".navbar .nav-link").forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
        preventDefault(e);

        document.querySelector(enlace.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
});

//Camvbiade color
window.onscroll = (e) => {
    const scroll = window.scrollY;

    const header = document.querySelector("#navegacion-principal");
    if (scroll > 300) {
        header.classList.add("bg-success");
    } else {
        header.classList.remove("bg-success");
    }
};

$(document).ready(function() {
    $("#fecha").countdown("2020/06/17", function(evento) {
        $(this).html(
            evento.strftime(
                "<span> %D </span> Dias <span> %H </span> Horas <span> %M </span> Minutos <span> %S </span> Segundos"
            )
        );
    });
});