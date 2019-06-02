var elem = document.getElementById('test');
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



// Инициализация
$('#my-element').datepicker([options])

// Доступ к экземпляру объекта
$('#my-element').data('datepicker')



