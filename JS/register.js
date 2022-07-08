
function validate() {
var u = document.getElementById("username").value;
var p1 = document.getElementById("password").value;
var p2 = document.getElementById("password-repeat").value;
var e1 = document.getElementById("Email").value;

if(u== "") {
alert("Vui lòng nhập tên!");
return false;
}
if(p1 == "") {
alert("Vui lòng nhập mật khẩu!");
return false;
}
if(p2 != p1) {
alert("Vui lòng xác minh mật khẩu!");
return false;
}
if(e1 == "") {
alert("Vui lòng nhap email!");
return false;
}
alert("Ban da dang ky thanh cong !")
return true;
}
