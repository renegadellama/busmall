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
var oldRandomPics = [];
var totalClicks = 0;
var clickLimit = 25;
var tableEl = document.getElementById('pic-table');
var rowEl = document.createElement('tr');
tableEl.appendChild(rowEl);
var fieldEl = document.createElement('td');
var picturesAll = [
  bag,
   banana,
    bathroom,
     boots,
      breakfast,
       bubblegum,
        chair,
         cthulhu,
          dogduck,
           dragon,
            pen,
             petsweep,
              scissors,
               shark,
                sweep,
                 tauntaun,
                  unicorn,
                   usb,
                    watercan,
                     wineglass
                   ];

var chooseRandomPic = function() {
  var randomPic = picturesAll[Math.floor(Math.random() * picturesAll.length)];
  // console.log(randomPic);
  return randomPic;
};

chooseRandomPic();

var threeRandomPics = function(){
  console.log('!!!!!!!!!!!!!!!!!!!');
  console.log('threeRandomPics,   oldRandomPics: ', oldRandomPics);
  for (var i = 0; i < 3; i++) {
    console.log(randomPics);
    var randomPicture = chooseRandomPic();
    console.log('randomPicture: ', randomPicture);
    // if(i === 0) {
    //   randomPics.push(randomPicture);
      // console.log(randomPics);
    // }else if(i !== 0) {
      if(randomPics.includes(randomPicture) || oldRandomPics.includes(randomPicture)){
        i--;
        // console.log(randomPics);
      }else{
        randomPics.push(randomPicture);
        // console.log(randomPics);
      }
    // }
  }
};

threeRandomPics();

PictureSelect.prototype.createImage = function(i) {
  var imageEl = document.createElement('img');
  imageEl.setAttribute('src', this.imgSource);
  imageEl.setAttribute('id', this.imgName);
  imageEl.dataset.index = i;
  return imageEl;
};

//-------------------------------clickcounter----------------------------

//-------------------------------table----------------------------------

function runCreateTable(){
  for( var i = 0; i < randomPics.length; i++){
    var fieldEl = document.createElement('td');
    fieldEl.appendChild(randomPics[i].createImage(i));
    rowEl.appendChild(fieldEl);
  }
};

runCreateTable();

function incrementScores(index){
  console.log('incrementScores, randomPics: ', randomPics[index]);
  randomPics[index].clicks++;
}

function resetBoard(){
  rowEl.innerHTML = '';
  oldRandomPics = randomPics;
  randomPics = [];
}

function lastClick(){
  totalClicks = 0;
    totalClicks.clicks++
  if (totalClicks > 3){
    return totalClicks;
  }
}

function clickCount(event) {
  console.log('event: ', event);
  console.log(event.target.id);
  console.log(fieldEl);
  console.log(randomPics[event.target.dataset.index]);

  incrementScores(event.target.dataset.index);
  resetBoard();
  chooseRandomPic();
  threeRandomPics();
  runCreateTable();
  lastClick();
};

rowEl.addEventListener('click', clickCount, false);

// var bChoice = function(){
//   var elSelect = document.getElementById('td');
//   elSelect.addEventListener('click', clickCount, false);
// };
//
// var cChoice = function(){
//   var elSelect = document.getElementById('choiceC');
//   elSelect.addEventListener('click', clickCount, false);
// };


// };
// clickCount();
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
