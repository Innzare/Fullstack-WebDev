var elem = document.getElementById('test');
var elems = document.getElementById('test1');
function func() {
    elems.style.display == 'none' ? elems.style.display = 'flex' : elems.style.display = 'none';

  }
  elem.onclick = func;



// Инициализация
$('#my-element').datepicker([options])

// Доступ к экземпляру объекта
$('#my-element').data('datepicker')



