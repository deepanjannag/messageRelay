document.querySelector('#message-form').addEventListener('submit', buttonClicked);

function buttonClicked(e) {
    e.preventDefault();     //IMPORTANT

    document.querySelector('.message-content').innerText = document.querySelector('#message').value;
}