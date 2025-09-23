
const changeColorBtn = document.getElementById('changeColorBtn');

const body = document.body;

function getRandomHexColor() {
    const hexChars = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexChars[Math.floor(Math.random() * 16)];
    }
    return color;
}

if (changeColorBtn) {
    changeColorBtn.addEventListener('click', function() {
        const newColor = getRandomHexColor();
        body.style.backgroundColor = newColor;
    });
} else {
    console.error('หาปุ่มไม่เจอ! โปรดตรวจสอบ ID ของปุ่มในไฟล์ HTML');
}