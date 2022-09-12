
let chamImage = document.querySelector('.expressions-svg');

function changeSource1(){
    chamImage.src = "img/chamos/early-3d.svg";
}

function changeSource2(){
    chamImage.src = "img/chamos/early.svg";
}

function everything(){
    setTimeout(changeSource1, 0010);
    setTimeout(changeSource2, 1500);
    setTimeout(everything, 3000);
}

setTimeout(everything, 1000);