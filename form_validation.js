// JavaScript source code
var msg = "";
function checkForm(form) {
    var errors = [];
    var re = /^[\w ]+$/;
    if (form.FirstName.value == "") {
        errors.push("First name is empty!");
    } else if (!re.test(form.FirstName.value)) {
        errors.push("First name has invalid characters");
    }
    if (form.FirstName.value.length > 20) {
        errors.push("First name is too long");
    }
    var userEmail = form.EMail.value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        errors.push("Invalid email");
    }
    if (form.Comments.value == "") {
        errors.push("Comments area is empty!");
    }
    if (errors.length > 0) {
        msg = "Errors: \n\n";
        for (var i = 0; i < errors.length; i++) {
            msg += errors[i] + "\n";
        }
        msgHTML = "Errors: </br>";
        for (var i = 0; i < errors.length; i++) {
            msgHTML += errors[i] + "</br>";
        }
        alert(msg);
        document.getElementById('errorMessages').innerHTML = msgHTML;
        return false;
    }
    return true;
}