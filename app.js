'use strict';

var parentBus = document.getElementById('parentBus');
var imgLeft = document.getElementById('imgLeft');
var imgCenter = document.getElementById('imgCenter');
var imgRight = document.getElementById('imgRight');

var leftIndex = null;
var centerIndex = null;
var rightIndex = null;

var imageClicks = 0;
var totalClicks = 25; //change this to 25 

Busmall.allImages=[];
var indexArr=['', '', ''];

//Constructor Function
function Busmall(name, image){
    this.name = name;
    this.image = image;
    this.clicked = 0;
    this.viewed = 0;

    Busmall.allImages.push(this);
}


//Random Number Function - anonymous
function randomImage(){
    var randomNumber = Math.floor(Math.random() * Busmall.allImages.length);
    return randomNumber;
}

//Display images Function (render?)
function renderBusmall(){
    
    do{
    leftIndex = randomImage();
    centerIndex = randomImage();
    rightIndex = randomImage();

// //    former while loop from lab 11:
//     } while 
//         (leftIndex === centerIndex || leftIndex === rightIndex || centerIndex === rightIndex);
// {
    //updated while loop including array comparison for previous and current populations of images
    } while
    (leftIndex === centerIndex || leftIndex === rightIndex || centerIndex === rightIndex || indexArr.includes(leftIndex) ||indexArr.includes(centerIndex) || indexArr.includes(rightIndex));

    console.log('renderBusmall');
    imgLeft.src = Busmall.allImages[leftIndex].image;
    Busmall.allImages[leftIndex].viewed++;

    imgCenter.src = Busmall.allImages[centerIndex].image;
    Busmall.allImages[centerIndex].viewed++;
    
    imgRight.src = Busmall.allImages[rightIndex].image;
    Busmall.allImages[rightIndex].viewed++;
    

    indexArr[0] = leftIndex;
    indexArr[1] = centerIndex;
    indexArr[2] = rightIndex;
    console.log(indexArr[0]);

    
    console.log('bag', bag.viewed);
    console.log('shark', shark.viewed);
    console.log('dragon', dragon.viewed);
};

//instantiations
var bag = new Busmall('bag', '/img/bag.jpg');
var banana = new Busmall('banana', '/img/banana.jpg');
var bathroom = new Busmall('bathroom', '/img/bathroom.jpg');
var boots = new Busmall('boots', '/img/boots.jpg');
var breakfast = new Busmall('breakfast', '/img/breakfast.jpg');
var bubblegum = new Busmall('bubblegum', '/img/bubblegum.jpg');
var chair = new Busmall('chair', '/img/chair.jpg');
var cthulhu = new Busmall('cthulhu', '/img/cthulhu.jpg');
var dogDuck = new Busmall('dogDuck', '/img/dog-duck.jpg');
var dragon = new Busmall('dragon', '/img/dragon.jpg');
var pen = new Busmall('pen', '/img/pen.jpg');
var petSweep = new Busmall('petSweep', '/img/pet-sweep.jpg');
var scissors = new Busmall('scissors', '/img/scissors.jpg');
var shark = new Busmall('shark', '/img/shark.jpg');
var sweep = new Busmall('sweep', '/img/sweep.png');
var tauntaun = new Busmall('tauntaun', '/img/tauntaun.jpg');
var unicorn = new Busmall('unicorn', '/img/unicorn.jpg');
var usb = new Busmall('usb', '/img/usb.gif');
var waterCan = new Busmall('waterCan', '/img/water-can.jpg');
var wineGlass = new Busmall('wineGlass', '/img/wine-glass.jpg');

//function to handle event listener
var handleClickOnImage = function (event){
    //condition to increment total number of image votes
    var imgClicked = event.target.id;
    if(imgClicked ==='imgLeft' || imgClicked === 'imgCenter' || imgClicked === 'imgRight'){
        imageClicks++;


    //conditions that increments clicks for imgLeft, imgCenter and imgRight    
        if (imgClicked === 'imgLeft') {
            Busmall.allImages[leftIndex].clicked++;
        } else if (imgClicked === 'imgCenter'){
            Busmall.allImages[centerIndex].clicked++;
        } else if (imgClicked === 'imgRight'){
                    Busmall.allImages[rightIndex].clicked++;
                } else {
                    alert('That is not a valid selection');
                }
        console.log(imgClicked);
            }
    //condition that counts the number of total image votes
    if(imageClicks === totalClicks){
        parentBus.removeEventListener('click', handleClickOnImage);
        alert('Thank you for your input. We value your opinion!');
    
        for(var i=0; i<Busmall.allImages.length; i++){
            var busmall = Busmall.allImages[i];
            alert(`${busmall.name} received ${busmall.clicked} votes with ${busmall.viewed} views.`);
        } 
    }else{
            renderBusmall();
    }
};
    
    



//event listener
parentBus.addEventListener('click', handleClickOnImage);


//call render function
renderBusmall();
