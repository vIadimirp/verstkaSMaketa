const input = document.querySelector('#msg-input');
const messages = document.querySelector('.main__content');


function toLength(s, l) {
    return '0'.repeat(l - s.toString().length) + s.toString();
}

function makePost(text) {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    const message = document.createElement('div');
    message.classList.add('message');
    const messageImage = document.createElement('img');
    messageImage.classList.add('message__userimage');
    messageImage.src = 'images/icons/friend-5.png';
    const messageMain = document.createElement('div');
    messageMain.classList.add('message__main');
    const messageHeader = document.createElement('div');
    messageHeader.classList.add('message__header');
    const messageUsername = document.createElement('div');
    messageUsername.classList.add('message__username');
    messageUsername.innerHTML = 'user132784618';
    const messageTime = document.createElement('div');
    messageTime.classList.add('message__time');
    messageTime.innerHTML = hours > 11 ? `${hours - 12}:${toLength(minutes, 2)} PM` : `${hours}:${toLength(minutes, 2)} AM`;
    const messageText = document.createElement('div');
    messageText.classList.add('message__text');
    messageText.innerHTML = text;

    message.appendChild(messageImage);
    message.appendChild(messageMain);
    messageMain.appendChild(messageHeader);
    messageHeader.appendChild(messageUsername);
    messageHeader.appendChild(messageTime);
    messageMain.appendChild(messageText);
    messages.appendChild(message);
}

input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        makePost(e.target.value);
        e.target.value = '';
    }
});
