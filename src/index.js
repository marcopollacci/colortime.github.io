function generateColorTime(){
    const d = new Date();
    const color_date = '#' + appendZero(d.getHours()) + appendZero(d.getMinutes()) + appendZero(d.getSeconds())
    document.getElementById('time').innerHTML = appendZero(d.getHours()) + ':' + appendZero(d.getMinutes()) + ':' + appendZero(d.getSeconds());
    document.getElementById('color').innerHTML = color_date;
    document.body.style.backgroundColor = color_date;
}


const appendZero = check => ('0' + check).slice(-2);

window.onload = function (event) {
    window.setInterval(() => {
        generateColorTime();        
    }, 1000);
};
