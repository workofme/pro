<?php
    if(isset($_REQUEST['page'])){
        $page = $_REQUEST['page'] . '.php';
        include "$page";
    }
    else {
 ?>
<div class="container bg py-2">
    <div class="login py-3 w-100">

        <div class="container  ">
            <h1 class="text-white text-center ">Name APP</h1>
            <form class="container bg-light py-5 rounded-lg reg">
                <div class="form-group py-3">
                    <label for="user_login">Tên đăng nhập</label>
                    <input type="text" class="form-control" id="user_login" aria-describedby="emailHelp">

                </div>
                <div class="form-group py-3">
                    <label for="pass_login">Mật khẩu</label>
                    <input type="password" class="form-control" id="pass_login">
                </div>
                <p class="text-right py-2"><i class="text-danger  py-3">Quên mật khẩu </i>  <a href="?page=dangki"><i> Đăng kí tại đây</i></a></p>
                <button type="submit" class="btn btn-primary form-control ">Đăng Nhập</button>
                <p class="text-center py-3"></p>
            </form>
        </div>
    </div>

</div>
    <?php } ?>