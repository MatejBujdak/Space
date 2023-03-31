//#region NAVIGACIA 

const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("list");

//hamburger
hamburger.addEventListener('click', function active() {
    navList.classList.toggle('active');
});
//#endregion

//#region KREATIVNY BOD 2
function send(){
 if(document.getElementById('textarea').value == ''){
    alert("Zadaj text");
 }else{
    window.open("thank_you_page.html","_self");
 }
}

//#endregion 