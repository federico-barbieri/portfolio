

// grab topic span and write letter by letter as an animation

let mainTitle = document.querySelector('.topics-span');




function createMath(){
    mainTitle.style.fontFamily = "ohm-bold, sans serif";
    mainTitle.innerHTML = "MATHS";
    
}

function createCancel(){
    mainTitle.style.fontFamily = "bungee, sans serif";
    mainTitle.innerHTML = "CANCEL CULTURE";
    
}

function createArt(){
    mainTitle.style.fontFamily = "all-round-gothic, sans serif";
    mainTitle.innerHTML = "ART";
    
    
}

function createPhilo(){
    
    mainTitle.style.fontFamily = "courage, sans serif";
    mainTitle.innerHTML = "PHILOSOPHY";
}

function createHistory(){
    
    mainTitle.style.fontFamily = "poiret-one, sans serif";
    mainTitle.innerHTML = "HISTORY";
}

function createTech(){
    
    mainTitle.style.fontFamily = "nasalization, sans serif";
    mainTitle.innerHTML = "TECHNOLOGY";
}

function createScience(){
    
    mainTitle.style.fontFamily = "ff-nuvo-mono-web-pro, sans serif";
    mainTitle.innerHTML = "SCIENCE";
}


function everything(){
    setTimeout(createMath, 100);
    setTimeout(createCancel, 1000);
    setTimeout(createArt, 2000);
    setTimeout(createPhilo, 3000);
    setTimeout(createHistory, 4000);
    setTimeout(createTech, 5000);
    setTimeout(createScience, 6000);
    setTimeout(everything, 7000);
}

setTimeout(everything, 1000);



// grab gigantic svg and switch between devices

let gigantic = document.querySelector('.gigantic-svg');

function switchSrc8(){
    gigantic.src = "img/chess8.svg";
}

function switchSrc5(){
    gigantic.src = "img/chess5.svg";
}

function switchsources(){
    setTimeout(switchSrc8, 1000);
    setTimeout(switchSrc5, 3000);
    setTimeout(switchsources, 5000);
}

setTimeout(switchsources, 1000);
