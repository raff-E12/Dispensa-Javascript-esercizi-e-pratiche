var sette = document.getElementById('sette');
var display_calc = document.getElementById('display');
var otto = document.getElementById('otto');
var nove = document.getElementById('nove');
var quattro = document.getElementById('quattro');
var cinque = document.getElementById('cinque');
var sei = document.getElementById('sei');
var uno = document.getElementById('uno');
var due = document.getElementById('due');
var tre = document.getElementById('tre');
var zero = document.getElementById('zero');
var addizione = document.getElementById('plus');
var sottrazione = document.getElementById('meno');
var moltiplicazione = document.getElementById('moltipl');
var divisione = document.getElementById('divisione');
var risultato = document.getElementById('equals');
var clear = document.getElementById('clear');


function Text_Input(Testo){
    display_calc.value += Testo;
}

sette.onclick = function(){
    Text_Input(7);
}

otto.onclick = function(){
    Text_Input(8);
}

nove.onclick = function(){
    Text_Input(9);
}

quattro.onclick = function(){
    Text_Input(4);
}

cinque.onclick = function(){
    Text_Input(5);
}

sei.onclick = function(){
    Text_Input(6);
}

uno.onclick = function(){
    Text_Input(1);
}

due.onclick = function(){
    Text_Input(2);
}

tre.onclick = function(){
    Text_Input(3);
}

zero.onclick = function(){
    Text_Input(0);
}


addizione.onclick = function(){
    Text_Input('+');
}


sottrazione.onclick = function(){
    Text_Input('-');
}

divisione.onclick = function(){
    Text_Input('/');
}

moltiplicazione.onclick = function(){
    Text_Input('*');
}

risultato.onclick = function(){
    var risultato =  display_calc.value = eval(display_calc.value);
    //il metodo eval verifica se questa è un espressione o un istruzione da eseguire.
    if (risultato) {
        display_calc.value = risultato;
    }
    else{
        display_calc.value = '';
    }
}

clear.onclick = function(){
  display_calc.value = '';
}
