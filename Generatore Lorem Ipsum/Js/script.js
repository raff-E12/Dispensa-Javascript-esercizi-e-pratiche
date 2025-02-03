// Interazione elementi input
const range_paragraphs = document.getElementById('paragraphs');
const range_words = document.getElementById('words');
const tags_op = document.getElementById('tags');
const include_op = document.getElementById('include');
const btn_gen = document.getElementById('generate');
// elementi di testo
let txt_paragraphs = document.getElementById('paragraphsValue');
let txt_words = document.getElementById('wordsValue');
let box_gen = document.querySelector('.output');

//lista e testo
const tags = [ "p", "h1", "h2","h3", "h4", "h5", "h6", "span",];
const loremIpsumText =
        `Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna 
        aliqua. Diam in arcu cursus euismod 
        quis viverra nibh. Nunc aliquet bibendum
        enim facilisis gravida neque convallis 
        a cras. Sagittis purus sit amet volutpat
        Consequat mauris. Duis ultricies lacus 
        sed turpis tincidunt id. Consequat interdum
        varius sit amet mattis vulputate. Enim sed
        faucibus turpis in eu. Ridiculus mus mauris
        vitae ultricies leo integer malesuada nunc vel.
        Nulla pharetra diam sit amet nisl suscipit.
        Lobortis elementum nibh tellus molestie nunc
        non blandit massa enim. Dis parturient montes
        nascetur ridiculus mus. Justo nec ultrices dui
        sapien eget. Enim tortor at auctor urna nunc.
        Dictumst quisque sagittis purus sit amet volutpat
        consequat mauris nunc.`;

//selezione input tags

tags.forEach((tag)=>{
    let op_tag = document.createElement('option');
    op_tag.value = tag;
    op_tag.textContent = `<${tag}>`;
    op_tag.style.textTransform = 'lowercase';
    tags_op.appendChild(op_tag);
})

//indice di range

range_paragraphs.addEventListener('input', ()=>{
    txt_paragraphs.textContent = range_paragraphs.value;
})

range_words.addEventListener('input', ()=>{
    txt_words.textContent = range_words.value;
})

// funzione lorem-gen input

btn_gen.addEventListener('click', lorem_text_gen);

//quest parte di funzione prede un i valori input
function lorem_text_gen() {
    let value_pars = range_paragraphs.value;
    let value_words = range_words.value;
    let tags_value = tags_op.value;
    let inclued_value = include_op.value;
    const text_fun = gen_text(value_pars, tags_value, inclued_value, value_words);
    text_append(text_fun);
}

// questa parte serve a concatenare più di un array in base alla valore di paragrafo
function gen_text(paragraphs, tags, inclued, words) {
    let array_lorem = [];
    for (i = 0; i < paragraphs; i++) {
       let text_gen =  words_gen(words);
       // il metodo concat serve a creare più valori di stringa o array in generale quando si creano dei loop nel aggiungere valori
        array_lorem = inclued === 'Yes' ? array_lorem.concat(`<${tags}>${text_gen}</${tags}>`) : array_lorem.concat(text_gen);
    }
    console.log(array_lorem);
    //il join serve a concatenare più valori di un array trasformandoli in stringa vero è proprio
    return array_lorem.join("\n");
}

//questo serve ad estrarre il valore di un array per poi convertirlo in una stringa
function words_gen(Numwords) {
    //lo spilt serve a trasformare una stringa in un array di valori suddivisi durante la conversione (Es: 'New Hello' = ['New', 'Hello'])
    let words = loremIpsumText.split(" ");
    //lo slice serve a creare ad estrarre dei valori di un array partendo dal inizio alla fine di un array
    console.log(words.slice(0, Numwords).join(" "));
    if (Numwords < words.length) {
        return words.slice(0, Numwords).join(" ");
    } else {
        return words.join(" ");
    }
}

function text_append(text){
   box_gen.textContent = text;
}