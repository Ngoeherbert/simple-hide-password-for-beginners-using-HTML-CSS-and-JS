var closeEye = document.getElementById("close-eye");
var password = document.getElementById('password')
closeEye.onclick = function(){
    if (password.type === 'password') {
        password.type = "text"
        closeEye.src = 'open-eye-removebg-preview.png'
    }else{
        password.type = "password"
        closeEye.src = 'close-eye-removebg-preview.png'
    }
}

