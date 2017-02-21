'use strict';

//-----------------------constructor----------------------

function PictureSelect(imgName, imgNumber, imgSource) {
  this.imgName = imgName;
  this.imgNumber = imgNumber;
  this.imgSource = imgSource;
  this.views = 0;
  this.clicks = 0;
  this.path = 'img/' + imgName + '.jpg';
}

PictureSelect.prototype.selectImage = function(){
  for (var i = 0; i < picturesAll.length; i++) {
    picturesAll[i];
    console.log(picturesAll[i]);
    return picturesAll[i];
  }
};

//-----------------------------variables------------------------
var bag = new PictureSelect('bag', 1, 'img/bag.jpg');
var banana = new PictureSelect('banana', 2, 'img/banana.jpg' );
var bathroom = new PictureSelect('bathroom', 3, 'img/bathroom.jpg');
var boots = new PictureSelect('boots', 4, 'img/boots.jpg');
var breakfast = new PictureSelect('breakfast', 5, 'img/breakfast.jpg');
var bubblegum = new PictureSelect('bubblegum', 6, 'img/bubblegum.jpg');
var chair = new PictureSelect('chair', 7, 'img/chair.jpg');
var cthulhu = new PictureSelect('cthulhu', 8, 'img/cthulhu.jpg');
var dogduck = new PictureSelect('dogduck', 9, 'img/dog-duck.jpg');
var dragon = new PictureSelect('dragon', 10, 'img/dragon.jpg');
var pen = new PictureSelect('pen', 11, 'img/pen.jpg');
var petsweep = new PictureSelect('petsweep', 12, 'img/pet-sweep.jpg');
var scissors = new PictureSelect('scissors', 13, 'img/scissors.jpg' );
var shark = new PictureSelect('shark', 14, 'img/shark.jpg');
var sweep = new PictureSelect('sweep', 15, 'img/sweep.png');
var tauntaun = new PictureSelect('tauntaun', 16, 'img/tauntaun.jpg');
var unicorn = new PictureSelect('unicorn', 17, 'img/unicorn.jpg');
var usb = new PictureSelect('usb', 18, 'img/usb.gif');
var watercan = new PictureSelect('watercan', 19, 'img/water-can.jpg');
var wineglass = new PictureSelect('wineglass', 20, 'img/wine-glass.jpg');
var randomPics = [];
var clickTally = [];
var totalClicks = 0;
var clickLimit = 25;

var picturesAll = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass];

var chooseRandomPic = function() {
  var randomPic = picturesAll[Math.floor(Math.random() * picturesAll.length)];
  // console.log(randomPic);
  return randomPic;
};

chooseRandomPic();

var threeRandomPics = function(){
  for (var i = 0; i < 3; i++) {
    console.log(i);
    var randomPicture = chooseRandomPic();
    if(i === 0) {
      randomPics.push(randomPicture);
      console.log(randomPics);
    }else if(i !== 0) {
      if(randomPics.includes(randomPicture)){
        i--;
        console.log(randomPics);
      }else{
        randomPics.push(randomPicture);
        console.log(randomPics);
      }
    }
  }
};

threeRandomPics();

PictureSelect.prototype.createImage = function() {
  var imageEl = document.createElement('img');
  imageEl.setAttribute('src', this.imgSource);
  return imageEl;
};

//-------------------------------clickcounter----------------------------

//-------------------------------table----------------------------------

var tableEl = document.createElement('table');

var sectionEl = document.getElementById('pic-table');
sectionEl.appendChild(tableEl);

var runPics = function(){
  var pics = document.createElement('tr');
  tableEl.appendChild(pics);
  for( var i = 0; i < randomPics.length; i++){
    var fieldEl = document.createElement('td');
    fieldEl.appendChild(randomPics[i].createImage());
    pics.appendChild(fieldEl);
  }
  console.log(fieldEl);
};

runPics();
// var choiceA = document.getElementById('choiceA');
// var choiceB = document.getElementById('choiceB');
// var choiceC = document.getElementById('choiceC');
//
// choiceA.appendChild(randomPics[0].createImage());
// choiceB.appendChild(randomPics[1].createImage());
// choiceC.appendChild(randomPics[2].createImage());
//
// var aChoice = function(){
//   var elSelect = document.getElementById('choiceA');
//   elSelect.addEventListener('click', clickCount, false);
// };
//
// var bChoice = function(){
//   var elSelect = document.getElementById('choiceB');
//   elSelect.addEventListener('click', clickCount, false);
// };
//
// var cChoice = function(){
//   var elSelect = document.getElementById('choiceC');
//   elSelect.addEventListener('click', clickCount, false);
// };

// var clickCount = function(event){
//   console.log('Click Works', event);
//   // if(clickCount() === choiceA){
//   //   choiceA.push(clickTally);
//   //   console.log(clickTally);
//   //   return clickTally;
//   // }else if(clickCount() === choiceB){
//   //   choiceB.push(clickTally);
//   //   console.log(clickTally);
//   //   return clickTally;
//   // }else{
//   //   choiceC.push(clickTally);
//   //   console.log(clickTally);
//   //   return clickTally;
//   // }
// };

// aChoice();
// bChoice();
// cChoice();


// var clickCount = function(){
//   console.log('Click works');
// };

// runChoices();
// var runPictures = function(){
//   var tableTimes = document.createElement('tr');
//     var fieldEl = document.createElement('td');
//     fieldEl = randomPics[0];
//     tableTimes.appendChild(fieldEl);
//
//   console.log(randomPics[i]);
// };
//
// runPictures();

// var displayPictures = function(){
//   var firstRow = document.getElementById('pictures-table').rows[0];
//   var x = firstRow.insertCell(-1);
//   x.innerHTML = 'New Cell';
//   var img = document.createElement(randomPics);
//   x.appendChild(randomPics);
// };
//

// displayPictures();

// var runThreePics = function(){
//   document.getElementById('image1').src = randomPics[0].src;
//   document.getElementById('image2').src = randomPics[1].src;
//   document.getElementById('image3').src = randomPics[2].src;
//   console.log(randomPics[0]);
//   console.log(randomPics[1]);
//   console.log(randomPics[2]);
// };
//
// runThreePics();
