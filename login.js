function verifyPassword() {
    var pw = document.getElementById("pswd").value;
  
    if (pw == "") {
        document.getElementById("message").innerHTML = "**Fill the password please!";
        return false;
    }

   
    if (pw.length < 6) {
        document.getElementById("message").innerHTML = "**Password length must be atleast 6 characters";
        return false;
    }

 
    if (pw.length > 15) {
        document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
        return false;
    }

    if (pw.search(/[A-Z]/) == -1) {
        document.getElementById("message").innerHTML = "**mandatory alphanumeric characters";
        return false;

    }
}

function check(){

    var enterEmail = document.getElementById('email').value;
    var enterPswd= document.getElementById('pswd').value;
   
    var getEmail = localStorage.getItem('email');
    var getPswd = localStorage.getItem('pswd');

    

    if(enterEmail == getEmail){
        if(enterPswd == getPswd){

            alert('successfully login',window.location.href = "user.html")

            
        }
        else{
            alert('wrong password')
        }

    }
    else{
        alert('invalid Details')
    }
}





