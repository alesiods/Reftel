/*Navbar transparente a Navbar color*/

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 320) {
            $('#navscroll').addClass("gris");
        } else {
            $('#navscroll').removeClass("gris");
            $('#navscroll').addClass("azul");
        }
    });
});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 320) {
            $('#navscroll').addClass("azul");
        } else {
            $('#navscroll').removeClass("azul");
            $('#navscroll').addClass("gris");
        }
    });
});


/*Funcion Formulario*/

const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })


}