//#region NAVIGACIA 

const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("list");

//hamburger
hamburger.addEventListener('click', function active(){
    navList.classList.toggle('active');
});
//#endregion
