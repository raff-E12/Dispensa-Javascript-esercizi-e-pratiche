const form_input = document.querySelector('.typing-area');
const chat_list = document.querySelector('.chat-list');
const header = document.querySelector(".header");
const inputField = form_input.querySelector(".typing-input");
let user_message = null;

form_input.addEventListener('submit', (e)=>{
    e.preventDefault();
    User_Message_Coming();
    header.classList.add("hide-header");
    chat_list.classList.add("show");
})

function User_Message_Coming(){
    user_message = document.querySelector('.typing-input').value.trim();
    if (user_message) {
        const html_element = `<div class="message-contents">
            <img src="immagini/user.jpg" alt="user-image" class="avatar">
            <p class="text-chat"></p></div>`;
        const message_outgoing = createElement_Message(html_element, 'outgoing');
        message_outgoing.querySelector('.text-chat').textContent = user_message;
        chat_list.appendChild(message_outgoing);
        setTimeout(Show_loading, 500);
    }
}

function createElement_Message(element, ...classname) {
    let div_parent = document.createElement('div');
    div_parent.classList.add('message',...classname);
    div_parent.innerHTML = element;
    return div_parent;
}

function Show_loading(){

    const html_element = `<div class="message-contents">
            <img src="immagini/gemini.svg" alt="user-gemini" class="avatar">
            <p class="text-chat"></p>
             <div class="loading-indicator">
              <div class="loading-bar"></div>
              <div class="loading-bar"></div>
              <div class="loading-bar"></div>
            </div>
            </div>`;
    const message_outgoing = createElement_Message(html_element, 'incoming', 'loading');
    chat_list.appendChild(message_outgoing);
    Generate_API_text(message_outgoing);
}

const Generate_API_text = async (message_outgoing) => {
    const API_KEY = 'KEYS';
    const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;
    const text_element = message_outgoing.querySelector('.text-chat');

    try {
    const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    role: 'user',
                    parts: [{ text: user_message }]
                }]
            })
        }); 
        const data = await response.json();
        const Api_response = data?.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1');
        text_element.textContent = Api_response;
        //console.log(data);
    } 
    catch (error) {
        console.log(error);
    }
    finally{
        message_outgoing.classList.remove('loading');
    }
};

const theme_btn = document.getElementById('theme-toggle-button');

theme_btn.addEventListener('click', ()=>{
    if (!header.classList.contains('light')) {
        header.classList.add('light');
        form_input.classList.add('light');
        chat_list.classList.add('light');
    } else {
        header.classList.remove('light');
        form_input.classList.remove('light');
        chat_list.classList.remove('light');
    }
})

const remove_btn = document.getElementById('delete-chat-button');
remove_btn.addEventListener('click', () => {
    let chat_list_in = document.querySelectorAll('div.message.incoming');
    let chat_list_out = document.querySelectorAll('div.message.outgoing');
    if (confirm('Sei Sicuro di cancellare la lista?')) {
        for (i = 0; chat_list_in.length; i++) {
            chat_list.removeChild(chat_list_in[i]);
            chat_list.removeChild(chat_list_out[i]);
            header.classList.remove("hide-header");
            chat_list.classList.remove("show");
        }
    }
});
