window.onload = function() {
    document.getElementById('first').innerText = localStorage.getItem('name');
    document.getElementById('second').innerText = localStorage.getItem('email');
    document.getElementById('third').innerText = localStorage.getItem('contact');
    document.getElementById('fourth').innerText = localStorage.getItem('countryId');
    document.getElementById('five').innerText = localStorage.getItem('stateId');

};

var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var email = document.getElementById('contact').value;
var countryId = document.getElementById('countryId').value;
var stateId = document.getElementById('stateId').value;

let formData = {};
formData.name = name;
formData.email = email;
formData.contact = contact;
formData.countryId = countryId;
formData.stateId = stateId;


let formDataArry = localStorage.getItem('formDataArry') || []

formDataArry.push(formData)

localStorage.setItem('formDataArry',formDataArry )