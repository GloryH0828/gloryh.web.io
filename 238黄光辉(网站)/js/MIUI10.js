
function checkform() {
    $user_name = document.getElementById("login").value;
    $user_pwd = document.getElementById("password").value;
    if ($user_name == '') {
        alert("用户名不能为空");
        return false;
    }

    if ($user_pwd == '') {
        alert("密码不能为空");
        return false;
    }

    return true;
}
