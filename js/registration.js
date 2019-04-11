//pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"

var password = document.getElementById("pass");
var copassword = document.getElementById("copass");
var phone = document.getElementById("phone");
var phalert = document.getElementById("phalert");
var palert = document.getElementById("palert");
var sbutton = document.getElementById("sButton");

var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;

function phoneCheck(phone){
    var OK = re.exec(phone.value);
    if (!OK){
        phalert.textContent = (' Input in this format: ###-###-####');
        sbutton.disabled = true;
    }
    
    else{
        phalert.textContent = (" ");
        sbutton.disabled = false;
    }
}

function passCheck(){
    if(password.value===copassword.value){
        sbutton.disabled = false;
        palert.textContent = (" ");
    }
    else{
        sbutton.disabled = true;
        palert.textContent = (' Please make sure the password matches');
    }
}


sbutton.addEventListener('click', function (event) {
    signupForm.submit();
  });