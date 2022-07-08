function check() {

    var valid = true, error = "", field = "";

    field = document.getElementById("email");
    error = document.getElementById("icon-error");
    message = document.getElementById("err")

    if (!field.checkValidity()) {
        valid = false;
        error.style.display = "initial";
        message.innerHTML = 'Please provide a valid email';
    } 
    return valid;   
}