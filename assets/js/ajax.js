$(document).ready(() => {
    $('form#reg').submit((e) => {
        e.preventDefault()
        var name = $('#name_reg').val()
        var user = $('#user_reg').val()
        var pass = $('#pass_reg').val()
        var rp_pass = $('#rp_pass_reg').val()
        var gioi_thieu = $('#gioi-thieu').val()
        if (name.trim() === "") {
            swall('Tên của bạn không được để trống', 'error');
        } else if (user.trim() === "") {
            swall('Tên tài khoản không được bỏ trống', 'error')
        } else if (pass.trim() === "" && rp_pass.trim() === "") {
            swall('mật khẩu không được bỏ trống', 'error')
        } else if (pass.trim() !== rp_pass.trim()) {
            swall('Mật khẩu không khớp')
        } else {
            var formData = new FormData()
            formData.append('name', name)
            formData.append('user', user)
            formData.append('pass', pass)
            formData.append('rp_pass', rp_pass)
            formData.append('gioi_thieu', gioi_thieu)
            $.ajax({
                url: 'ajax/reg.php',
                type: 'post',
                data: formData,
                dataType: 'json',
                contentType: false,
                // cache: false,
                processData: false,
                beforeSend: () => {
                    $('#btn-reg').html(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...`)
                },
                success: (res) => {
                    if (res.status == 0) {
                        swall('thanh cong', 'error')
                        setTimeout(() => {
                            window.location.href = 'home'
                        }, 2000)
                    } else if (res.status == 1) {
                        swall(res.messages, 'error')
                        setTimeout(() => {
                            window.location.reload()
                        }, 2000)
                    }
                }

            })
        }
    })
})