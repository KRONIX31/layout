function dis() {
    if (document.getElementById("disc").style.opacity == '1') { 
    document.getElementById("disc").style.cssText= 'opacity: 0; transform: translateX(400px);';
  }
  else {
   document.getElementById("disc").style.cssText= 'opacity: 1; transform: translateX(-102%);';
  }
} 
function counter() {
    var speed = document.getElementById('text_speed').value;
    var distance = document.getElementById('text_distance').value;
    if (isNaN(speed + distance)){
        alert('Введите числа');
    }
    else{
        var time = distance / speed;
        var time = time*60;
        alert (time + ' минут');
    }
}
/* blog */
const burger = document.querySelector('.burger_wrapper');
if (burger){
    const menu_body = document.querySelector('.menu_body');
    burger.addEventListener("click", function(e) {
        burger.classList.toggle('active');
        menu_body.classList.toggle('active');
    });
}