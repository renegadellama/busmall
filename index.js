'use strict';


//-----------------------constructor----------------------

function PictureSelect(imgName, imgNumber, imgSource) {
  this.imgName = imgName;
  this.imgNumber = imgNumber;
  this.imgSource = imgSource;
}

PictureSelect.prototype.selectImage = function(){
  for (var i = 0; i < picturesAll.length; i++) {
    picturesAll[i];
    return picturesAll[i];
    console.log(picturesAll[i]);
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


// var banana = new PictureSelect(src = 'img/banana.jpg');

var picturesAll = [bag];
console.log(picturesAll);

// selectImage();
