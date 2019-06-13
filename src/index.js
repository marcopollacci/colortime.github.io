function generateColorTime(){
    let d = new Date();
    let color_date = '#' + appendZero(d.getHours()) + appendZero(d.getMinutes()) + appendZero(d.getSeconds())
    document.getElementById('time').innerHTML = appendZero(d.getHours()) + ':' + appendZero(d.getMinutes()) + ':' + appendZero(d.getSeconds());
    document.getElementById('color').innerHTML = color_date;
    document.body.style.backgroundColor = color_date;
}


function appendZero(check){
    if(check <= 9) {
        return "0" + check;
    }
    return check;
}

window.onload = function (event) {
    window.setInterval(() => {
        generateColorTime();        
    }, 1000);
};
