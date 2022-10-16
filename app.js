



// grab the main title and change its inner html through functions

let mainTitle = document.querySelector('.forward-title');

function createMultimedia(){
    mainTitle.style.fontFamily = "ohm-bold, sans serif";
    mainTitle.innerHTML = "MULTIMEDIA DESIGNER";   
}

function createContent(){
    mainTitle.style.fontFamily = "ohm-bold, sans serif";
    mainTitle.innerHTML = "CONTENT CREATOR";   
}

function createFrontend(){
    mainTitle.style.fontFamily = "ohm-bold, sans serif";
    mainTitle.innerHTML = "FRONTEND DEVELOPER";
}

function createCopywriter(){
    mainTitle.style.fontFamily = "ohm-bold, sans serif";
    mainTitle.innerHTML = "COPYWRITER";  
}

function createName(){
    
    mainTitle.style.fontFamily = "ohm-bold, sans serif";
    mainTitle.innerHTML = "FEDERICO BARBIERI";
}

// make a function that holds all the other functions and put them in a timeout

function everything(){
    setTimeout(createMultimedia, 1000);
    setTimeout(createContent, 3000);
    setTimeout(createFrontend, 5000);
    setTimeout(createCopywriter, 7000);
    setTimeout(createName, 9000);
    setTimeout(everything, 10000);
}

setTimeout(everything, 1000);