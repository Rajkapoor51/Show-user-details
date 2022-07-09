function verifyPassword() {  
    var pw = document.getElementById("pswd").value;  
   
    if(pw == "") {  
       document.getElementById("message").innerHTML = "**Fill the password please!";  
       return false;  
    }  
     

    if(pw.length < 6) {  
       document.getElementById("message").innerHTML = "**Password length must be atleast 6 characters";  
       return false;  
    }  
    
    
    if(pw.length > 15) {  
       document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
       return false;  
    } 
    
    if(pw.search(/[A-Z]/)==-1){
        document.getElementById("message").innerHTML = "**mandatory alphanumeric characters";  
        return false;  

    }else{
        localStorage.setItem('name', fname.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('contact', contact.value);
        localStorage.setItem('pswd', pswd.value);
        localStorage.setItem('countryId', countryId.value);
        localStorage.setItem('stateId', stateId.value);
        alert("Your account has been created");
        
    }
  }  




 