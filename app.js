'use strict';

var parentBus = document.getElementById('parentBus');
var imgLeft = document.getElementById('imgLeft');
var imgCenter = document.getElementById('imgCenter');
var imgRight = document.getElementById('imgRight');

var leftIndex = null;
var centerIndex = null;
var rightIndex = null;

Busmall.allImages=[];

//Constructor Function
function Busmall(name, image){
    this.name = name;
    this.image = image;

    Busmall.allImages.push(this);
}



//Random Number Function - anonymous
function randomImage(){
    var randomNumber = Math.floor(Math.random() * Busmall.allImages.length);
    return randomNumber;
}

//Display images Function (render?)
function renderBusmall(){
    leftIndex = randomImage();
    centerIndex = randomImage();
    rightIndex = randomImage();
    //console.log('renderBusmall');
    imgLeft.src = Busmall.allImages[leftIndex].image;
    imgCenter.src = Busmall.allImages[centerIndex].image;
    imgRight.src = Busmall.allImages[rightIndex].image;

}

//instantiations
var bag = new Busmall('bag', '/img/bag.jpg');
var banana = new Busmall('banana', '/img/banana.jpg');
var bathroom = new Busmall('bathroom', '/img/bathroom.jpg');
var boots = new Busmall('boots', '/img/boots.jpg');


//event listener



//call render function
renderBusmall();
