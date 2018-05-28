/*Slider*/

(function() {
  var sliderBtn1 = document.body.querySelector('.slider-btn-1');
  var sliderBtn2 = document.body.querySelector('.slider-btn-2');
  var sliderBtn3 = document.body.querySelector('.slider-btn-3');

  var feachuresSlider1 = document.body.querySelector('.feachures-slider-1');
  var feachuresSlider2 = document.body.querySelector('.feachures-slider-2');
  var feachuresSlider3 = document.body.querySelector('.feachures-slider-3');

  var feachuresLearnMore1 = document.body.querySelector('.feachures-learn-more-1');
  var feachuresLearnMore2 = document.body.querySelector('.feachures-learn-more-2');
  var feachuresLearnMore3 = document.body.querySelector('.feachures-learn-more-3');

  var fuchArray = [clickButton1, clickButton2, clickButton3];
  var i = 1;

  var timerId = setInterval(function() {
    fuchArray[i++]();
    if(i > 2) i = 0;
  }, 4000);

  function clickButton1() {
    feachuresSlider1.classList.add('active-feachures-item');
    feachuresSlider2.classList.remove('active-feachures-item');
    feachuresSlider3.classList.remove('active-feachures-item');

    sliderBtn1.classList.add('active-slider-btn');
    sliderBtn2.classList.remove('active-slider-btn');
    sliderBtn3.classList.remove('active-slider-btn');

    feachuresLearnMore1.setAttribute('tabindex', '0');
    feachuresLearnMore2.setAttribute('tabindex', '-1');
    feachuresLearnMore3.setAttribute('tabindex', '-1');
  }

  function clickButton2() {
    feachuresSlider1.classList.remove('active-feachures-item');
    feachuresSlider2.classList.add('active-feachures-item');
    feachuresSlider3.classList.remove('active-feachures-item');

    sliderBtn1.classList.remove('active-slider-btn');
    sliderBtn2.classList.add('active-slider-btn');
    sliderBtn3.classList.remove('active-slider-btn');

    feachuresLearnMore1.setAttribute('tabindex', '-1');
    feachuresLearnMore2.setAttribute('tabindex', '0');
    feachuresLearnMore3.setAttribute('tabindex', '-1');
  }

  function clickButton3() {
    feachuresSlider1.classList.remove('active-feachures-item');
    feachuresSlider2.classList.remove('active-feachures-item');
    feachuresSlider3.classList.add('active-feachures-item');

    sliderBtn1.classList.remove('active-slider-btn');
    sliderBtn2.classList.remove('active-slider-btn');
    sliderBtn3.classList.add('active-slider-btn');

    feachuresLearnMore1.setAttribute('tabindex', '-1');
    feachuresLearnMore2.setAttribute('tabindex', '-1');
    feachuresLearnMore3.setAttribute('tabindex', '0');
  }

  function stopSlider() {
    clearInterval(timerId);
  }

  sliderBtn1.addEventListener('click', clickButton1);
  sliderBtn1.addEventListener('click', stopSlider);

  sliderBtn2.addEventListener('click', clickButton2);
  sliderBtn2.addEventListener('click', stopSlider);

  sliderBtn3.addEventListener('click', clickButton3);
  sliderBtn3.addEventListener('click', stopSlider);
})();
