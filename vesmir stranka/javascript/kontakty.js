//#region NAVIGACIA 
const h = document.getElementById("hamburger");
const navList = document.getElementById("list");

//hamburger
h.addEventListener('click', function active() {
    navList.classList.toggle('active');
});
//#endregion

//#region REGISTRACIA

const password = document.getElementById("first_password");
const confirm_password = document.getElementById("con_password");
const emailaddress = document.getElementById("email");

//funkcia ktorá kontroluje, či sú splnené požadované podmienky
function submit(){
  if (checkbox() && yourage() && name() && email() && pass()){                                  
    window.open("textarea.html","_self");
}}

//checkbox
function checkbox(){
  if(document.getElementById('checkbox').checked) {
    return true;
  }else{
    alert("Potvrď");
}}

//vek
function yourage(){
  let age = document.getElementById("age").value;
  if(age == ''){
    alert("Zadaj vek");
  }
  else if(parseInt(age)>18){
    return true;    
  }else{
   alert("Nemaš dosť rokov");
  }
}

//meno
function name(){
  if(document.getElementById('name').value== ''){
    alert("Zadaj meno");
  }else{
    return true;
  }}

//email
function email(){
  if(document.getElementById('email').value== ''){
    alert("Zadaj email");
  }else if(emailaddress.value.search("@") == -1){
    alert("Nespravny email");
  }
  else{
    return true;
  }}

//#endregion 

//#region KREATIVNY BOD 2

function pass(){
  //lowerCaseLetters obsahuje regex, ktorý predstavuje všetky malé písmená abecedy
  const lowerCaseLetters = /[a-z]/;
  //upperCaseLetters obsahuje regex, ktorý predstavuje všetky velké písmená abecedy
  const upperCaseLetters = /[A-Z]/;
  //numbers obsahuje regex, ktorý predstavuje všetky číslice od 0 po 9
  const numbers = /[0-9]/;

  if(password.value == ''){  //kontroluje obsah hesla
    alert("Zadaj heslo");
  }
  else if(password.value != confirm_password.value) {  //kontroluje zhodu s overovacím heslom
    alert("Hesla sa nezhoduju"); 
  } 
  else if(password.value.length < 8){   //dĺžka hesla
    alert("Musi obsahovat aspon 8 znakov");
  }
  else if(password.value.search(lowerCaseLetters) == -1){    //obsah maleho písmena
    alert("Neobsahuje male pismeno");
  }
  else if(password.value.search(upperCaseLetters) == -1){    //obsah veľkého písmena
    alert("Neobsahuje velke pismeno");
  }
  else if(password.value.search(numbers) == -1){   //obsah čísla
    alert("Neobsahuje cislo");
  }
  else {
    return true;                  //keď je všetko splnené, vráti true
  }
}
//#endregion 