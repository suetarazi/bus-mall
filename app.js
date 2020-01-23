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
    //update storage after populating Busmall array with .push from line above
    //updateStorage();
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

     
  //  console.log('bag', bag.viewed);
  //  console.log('shark', shark.viewed);
  //  console.log('dragon', dragon.viewed);
};

//instantiations
function instantiations(){
    new Busmall('bag', '/img/bag.jpg');
    new Busmall('banana', '/img/banana.jpg');
    new Busmall('bathroom', '/img/bathroom.jpg');
    new Busmall('boots', '/img/boots.jpg');
    new Busmall('breakfast', '/img/breakfast.jpg');
    new Busmall('bubblegum', '/img/bubblegum.jpg');
    new Busmall('chair', '/img/chair.jpg');
    new Busmall('cthulhu', '/img/cthulhu.jpg');
    new Busmall('dogDuck', '/img/dog-duck.jpg');
    new Busmall('dragon', '/img/dragon.jpg');
    new Busmall('pen', '/img/pen.jpg');
    new Busmall('petSweep', '/img/pet-sweep.jpg');
    new Busmall('scissors', '/img/scissors.jpg');
    new Busmall('shark', '/img/shark.jpg');
    new Busmall('sweep', '/img/sweep.png');
    new Busmall('tauntaun', '/img/tauntaun.jpg');
    new Busmall('unicorn', '/img/unicorn.jpg');
    new Busmall('usb', '/img/usb.gif');
    new Busmall('waterCan', '/img/water-can.jpg');
    new Busmall('wineGlass', '/img/wine-glass.jpg');
};

//function to handle event listener
var handleClickOnImage = function (event){
    //condition to increment total number of image votes
    var imgClicked = event.target.id;
    if(imgClicked ==='imgLeft' || imgClicked === 'imgCenter' || imgClicked === 'imgRight'){
        imageClicks++;


        //conditions that increments clicks for imgLeft, imgCenter and imgRight    
        if (imgClicked === 'imgLeft') {
            Busmall.allImages[leftIndex].clicked++;
            console.log(Busmall.allImages[leftIndex]);
        } else if (imgClicked === 'imgCenter'){
            Busmall.allImages[centerIndex].clicked++;
            console.log(Busmall.allImages[centerIndex]);
        } else if (imgClicked === 'imgRight'){
            Busmall.allImages[rightIndex].clicked++;
            console.log(Busmall.allImages[rightIndex]);
        } else {
            alert('That is not a valid selection');
        }
        // console.log(imgClicked);
    }
    //condition that counts the number of total image votes
    if(imageClicks === totalClicks){
       // getLocalStorageData();

        parentBus.removeEventListener('click', handleClickOnImage);
        alert('Thank you for your input. We value your opinion!');
        for(var i=0; i<Busmall.allImages.length; i++){
            var busmall = Busmall.allImages[i];
            console.log(`${busmall.name} received ${busmall.clicked} votes with ${busmall.viewed} views.`);
            updateStorage();
                        
        } 
        renderChart();
        console.log('test');
    }else{
        renderBusmall();
    }
}




//update storage function (i.e. local array --> JSON string)
function updateStorage(){
    if (localStorage.length>0){
        getLocalStorageData();
    } else{
        //instantiations();
        
        var arrayString = JSON.stringify(Busmall.allImages);
        localStorage.setItem('key', arrayString);
        
    }
 }
    
    
//get data out of storage
function getLocalStorageData (){
    if (localStorage.length>0){
        var storageData = localStorage.getItem('key');
        var imgData = JSON.parse(storageData);
        Busmall.allImages = imgData;

    }
    renderBusmall();
}

    //call render function
    //renderBusmall();

    instantiations();
    getLocalStorageData();


    //event listener
    parentBus.addEventListener('click', handleClickOnImage);
    
    //render chart function
    function renderChart(){
        
        var labelData = [];
        var clickedData = [];
        var viewedData = [];
    
    for(var i=0; i<Busmall.allImages.length; i++){
        labelData.push(Busmall.allImages[i].name);
        clickedData.push(Busmall.allImages[i].clicked);
        viewedData.push(Busmall.allImages[i].viewed);
    }
    console.log('labelData', labelData);
    console.log('clickedData', clickedData);
    console.log('viewedData', viewedData);

    var ctx = document.getElementById('busmallChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labelData,
            datasets: [{
                label: '# of Clicks',
                data: clickedData,
                backgroundColor: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Gray', 'Brown', 'Black', 'Pink', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Gray', 'Brown', 'Black', 'Pink'],
            }, {
                label: '# of Views',
                data: viewedData,
                backgroundColor: ['rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'],

            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
};
