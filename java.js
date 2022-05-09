
const $cambio = document.getElementById('cambio'),
    $showColor = document.querySelector('.gif');

    let hex = [1, 2, 3,];


document.addEventListener('click', e => {
    if (e.target === $cambio) {
        let color = "#";
        for (let i = 0; i < 6; i++) color += hex[randomNumber()];
        document.body.style.background = color;
    }

})

function randomNumber() {
    return Math.floor(Math.random() * hex.length)
}






