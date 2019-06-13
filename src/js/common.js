var elem = document.querySelector('div.dropdown_vis__input_svg');
var elems = document.getElementById('test1');
elem.onclick = elems.style.display = 'none';;
function func() {
    if (elems.style.display == 'none') {
      elems.style.display = 'flex';
    } else {
      elems.style.display = 'none'
    }
  }
  elem.onclick = func;

  var elem1 = document.querySelector('div.dropdown_bedroom__input_svg');
  var elems1 = document.querySelector('div.dropdown_bedroom_content');
  elem1.onclick = elems1.style.display = 'none';;
  function func1() {
      if (elems1.style.display == 'none') {
        elems1.style.display = 'flex';
      } else {
        elems1.style.display = 'none'
      }
    }
    elem1.onclick = func1;

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
  elem2.onclick = func2;

var like = document.querySelector('div.like_button_checklist__overlay');
var like_span = document.querySelector('span#like_span');

like.addEventListener('click', like1);

function like1() {
  like_span.innerHTML = +like_span.innerHTML + 0.5;
  like.removeEventListener('click', like1);
  like.addEventListener('click', like2);
}
function like2() {
  like_span.innerHTML = +like_span.innerHTML - 0.5;
  like.removeEventListener('click', like2);
  like.addEventListener('click', like1);
}




// Инициализация
$('#my-element').datepicker([options])

// Доступ к экземпляру объекта
$('#my-element').data('datepicker')

var $start = $('#start'),
    $end = $('#end');

$start.datepicker({
    onSelect: function (fd, date) {
        $end.data('datepicker')
                .update('minDate', date);

        $end.focus();
    }
})

$end.datepicker({
    onSelect: function (fd, date) {
        $start.data('datepicker')
                .update('maxDate', date)
    }
})


