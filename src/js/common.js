// Инициализация
$('#my-element').datepicker([options])

// Доступ к экземпляру объекта
$('#my-element').data('datepicker')

// var elem = document.getElementById('span');
// var elems = document.getElementById('test1');
// function func() {
//     // elems.style.display == 'none' ? elems.style.display = 'flex' : elems.style.display = 'none'
//     elems.style.display = 'flex';
    
// }
// elem.onclick = func;


function func(elem){
    elem.querySelector('.dropdown_content').style.display = 'flex';
  }