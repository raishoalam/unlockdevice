let btnEl = document.getElementById('btn');
let contEl = document.getElementById('cont');
let imageEl = document.getElementById('image');



btnEl.onclick = function() {
    contEl.textContent = 'Your Device Is Unlocked';
    contEl.style.color = '#fff';
    btnEl.textContent = 'Lock';
    btnEl.padding = '10px 20px';
    imageEl.src = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png';
}