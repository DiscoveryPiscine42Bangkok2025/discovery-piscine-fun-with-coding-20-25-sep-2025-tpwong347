
const balloon = document.getElementById('balloon');

let currentSize = 200;

const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

balloon.addEventListener('click', function() {
    
    currentSize += 10;

    colorIndex = (colorIndex + 1) % colors.length;

    if (currentSize > 420) {
        alert('ระเบิด!');
        currentSize = 200;
        colorIndex = 0;
    }

    updateBalloonStyle();
});

balloon.addEventListener('mouseleave', function() {

    if (currentSize > 200) {
        currentSize -= 5;
    }

    colorIndex = colorIndex - 1;
    if (colorIndex < 0) {
        colorIndex = colors.length - 1;
    }
    
    updateBalloonStyle();
});

function updateBalloonStyle() {
    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
}