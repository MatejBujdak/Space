//#region NAVIGACIA
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById("list");

//hamburger
hamburger.addEventListener('click', function active() {
    navList.classList.toggle('active');
});
//#endregion

//#region AKORDEON
const accordion = document.getElementsByClassName("parts");
// cyklus for ktorý sleduje prvok na ktorý sa klikne a následne mu pridá alebo odoberie klasu activation
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("activation");
  });
}
//#endregion

//#region KREATIVNY BOD 3

const banner = document.querySelector(".banner");
//funkcia na pripnutie alebo odobranie klasy left s klasy banner
banner.addEventListener('click', function() {
  banner.classList.toggle('left');
});

//#endregion