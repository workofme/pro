$(document).ready(() => {
    $('#back_url').click((e) => {
        e.preventDefault();
        window.history.back();
    })


})

function swall(text, icon) {
    Swal.fire(
        'Thông báo!',
        text,
        icon
    )
}