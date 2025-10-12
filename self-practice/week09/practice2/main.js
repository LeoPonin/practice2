const inputField = document.getElementById('keyInput');
const keyLog = document.getElementById('keyLog');

keyLog.style.color = 'black';

inputField.addEventListener('keydown', function(event) {
    const key = event.key;
    const p = document.createElement('p');
    p.textContent = `You pressed: ${key}`;
    
    if (key === 'Enter') {
        p.style.color = 'blue';
    } else {
        p.style.color = 'black';
    }
    
    keyLog.appendChild(p);
});