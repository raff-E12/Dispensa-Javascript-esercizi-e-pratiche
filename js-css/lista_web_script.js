window.alert('Benvenuto nella lista, Aggiungi qualsiasi cosa che vuoi, Buona giornata.');



var input_text = document.getElementById('text-input');
var button_add = document.getElementById('button-add');
var testo_log = document.getElementById('testo-logo');
var list_parent = document.getElementById('listner-element');

function AddList(){
    var text_value = input_text.value;
   if(text_value !== ''){
    var add_list = document.createElement('li');
    add_list.className = 'listbox';
    list_parent.appendChild(add_list);
    var text_list = document.createElement('p');
    text_list.className = 'valuelist';
    var checkbox_list = document.createElement('input');
    checkbox_list.type = 'checkbox';
    checkbox_list.onclick = function(){
        if (checkbox_list.classList.contains('completed')) {
            text_list.classList.remove('completed');
        } else {
            text_list.classList.toggle('completed');
        }
    };
    var text_node = document.createTextNode(text_value);
    text_list.appendChild(checkbox_list);
    text_list.appendChild(text_node);
    add_list.appendChild(text_list);
    var button_remove = document.createElement('button');
    button_remove.className = 'buttonclear';
    button_remove.textContent = 'Remove';
    button_remove.onclick = function(){
        list_parent.removeChild(add_list);
        window.alert('Cancellato dalla lista!!');
    };
    add_list.appendChild(button_remove);
    input_text.value ='';
   }
}
//oggetto evento collegato alla variabile input_text con un condizione controlla se la il tasto premuto si corretto, visto che l'oggetto evento controlla le sue caratteristiche.

input_text.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){ //e.key si riferisce alla al tasto premuto dall'utente.
        AddList();
    }
})

button_add.addEventListener('click', AddList);

