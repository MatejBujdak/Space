//#region NAVIGACIA
  const hamburger = document.getElementById('hamburger');
  const navList = document.getElementById("list");

  //hamburger
  hamburger.addEventListener('click', function active(){
      navList.classList.toggle('active');
  });

  //#endregion

//#region SLIDER

  // zaciatocna pozicia
  let slideIndex = 1;

  // spusti showSlides
  showSlides(slideIndex);

  // posuvanie obrazkov
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

  //automaticky nastavy na zaciatok po poslednom obrazku
    if (n > slides.length) {
      slideIndex = 1;
    }  

  // prechod s prveho obrazku na posledny
    if (n < 1) {
      slideIndex = slides.length;
  }

  //nastavy display none vsetkym obrazkom okrem toho, ktory prave zobrazuje
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
  }
  //#endregion

//#region KREATIVNY BOD1

  // vyprazdni kalkulacku
  function clearScreen() {
    document.getElementById("result").value = "";
  }

  // zobrazenie hodnot
  function display(value) {
    document.getElementById("result").value += value;
  }

  // vyhodnotenie vstupu a vratenie vysledku
  function calculate() {
    var p = document.getElementById("result").value;
    var q = parseFloat(p) * 9460730472580;
    document.getElementById("result").value = q + "km";
  }
  //#endregion
