function showMessage(message) {
    document.getElementById('message').textContent = message;
} 

function changePercentOff(percentage){
    document.getElementById('percent-off').textContent = percentage + '% OFF';
}

document.querySelector('p').style.color = 'yellow';