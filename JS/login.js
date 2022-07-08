function validate() {
  var u = document.getElementById("username").value;
  var p = document.getElementById("password").value;

    if(u== "") {
    alert("Vui lòng nhập tên!");
    return false;
    }
    if(p == "") {
    alert("Vui lòng nhập mật khẩu!");
    return false;
    }

    alert("Ban da dang nhap thanh cong !")

    return true;
}
function rememberme(){
    alert("Đã ghi nhớ mật khẩu!");
    document.getElementById("check").innerHTML = "Đã ghi nhớ mật khẩu";
}
