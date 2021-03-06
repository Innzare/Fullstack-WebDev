import './../Form_Elements/doughnut/rotapie/jquery.rotapie'
const Rotopie = require("./../Form_Elements/doughnut/rotapie/jquery.rotapie");

$('.doughnut__chart').rotapie({
  slices: [
      { color: '#FFBA9C', amount: 520, unit: "ГОЛОСОВ"}, // If color not set, slice will be transparant.
      { color: '#BC9CFF', amount: 260, unit: "ГОЛОСОВ"}, // Font color to render percentage defaults to 'color' but can be overriden by setting 'fontColor'.
      { color: '#6FCF97', amount: 260, unit: "ГОЛОСОВ"},
      { color: '#919191', amount: 0, unit: "ГОЛОСОВ"}
  ],
});
  
// BUTTONS
    var buttonOne = document.querySelector('div.button__click_me_one');
    function buttonClickOne() {
      buttonOne.classList.toggle('button__click_me_one__active');
    }
    buttonOne.onclick = buttonClickOne;

    var buttonTwo = document.querySelector('div.button__click_me_two');
    function buttonClickTwo() {
      buttonTwo.classList.toggle('button__click_me_two__active');
    }
    buttonTwo.onclick = buttonClickTwo;

    var buttonThree = document.querySelector('div.button__click_me_three');
    function buttonClickThree() {
      buttonThree.classList.toggle('button__click_me_three__active');
    }
    buttonThree.onclick = buttonClickThree;


// DROPDOWN
    var elem = document.querySelector('div.dropdown_vis__input_svg');
    var elems = document.querySelector('div.dropdown_content');
    // elem.onclick = elems.style.display = 'none';
     function func() {
        if (elems.style.display == 'none') {
          elems.style.display = 'inline-block';
        } else {
          elems.style.display = 'none'
        }
      }
window.onload = elem.onclick = func;

    var elem1 = document.querySelector('div.dropdown_bedroom__input_svg');
    var elems1 = document.querySelector('div.dropdown_bedroom_content');
    elem1.onclick = elems1.style.display = 'none';
    function func1() {
        if (elems1.style.display == 'none') {
          elems1.style.display = 'inline-block';
        } else {
          elems1.style.display = 'none'
        }
      }
      window.onload = elem1.onclick = func1;

// CHECKBOX
    var elem2 = document.querySelector('div.expendable_checkbox_list__svg');
    var elems2 = document.querySelector('div.expendable_checkbox_list__content');

    elem2.onclick = elems2.style.display = 'none';
    function func2() {
    elem2.classList.toggle('expendable_checkbox_list__svgg');
        if (elems2.style.display == 'none') {
          elems2.style.display = 'inline-block';
        } else {
          elems2.style.display = 'none';
        }
      }
      window.onload = elem2.onclick = func2;


// LIKE BUTTON
    var like = document.querySelector('div.like_button_checklist__overlay');
    var like_span = document.querySelector('span#like_span');

    like.addEventListener('click', like1);

    function like1() {
      like_span.innerHTML = +like_span.innerHTML + 1;
      like.removeEventListener('click', like1);
      like.addEventListener('click', like2);
    }
    function like2() {
      like_span.innerHTML = +like_span.innerHTML - 1;
      like.removeEventListener('click', like2);
      like.addEventListener('click', like1);
    }

function time () {
   return 
}
    
// RANGE-SLIDER
    var rangeSlider = document.getElementById('slider-range');

    noUiSlider.create(rangeSlider, {
      start: [5000, 10000],
      connect: true,
      range: {
          'min': 0,
          'max': 15000
      }
  });

    var rangeSliderValueElement = document.getElementById('slider-range-value');

    rangeSlider.noUiSlider.on('update', function (values) {
        rangeSliderValueElement.innerHTML = values.join(' - ') + ' ₽';
    });


// AIRDATEPICKER
// Инициализация
$('#my-element').datepicker([options])

// // Доступ к экземпляру объекта
$('#my-element').data('datepicker')

