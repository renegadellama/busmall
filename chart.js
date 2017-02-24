'use strict';

var numberData = [];
var objectNames = [];

var allData = [];

function turnToRealData(){
  if(typeof(localStorage.lsInfo) !== 'undefined'){
    allData = JSON.parse(localStorage.lsInfo);
  };

  for (var i = 0; i < allData.length; i++) {
    numberData.push(allData[i].clicks);
    objectNames.push(allData[i].imgName);
  }
};

turnToRealData();

var ctx = document.getElementById('chartthing').getContext('2d');

// function runChart(){
  var chartData = {
    type: 'bar',
    data: {
      labels: objectNames,
      datasets: [{ //this is an array of one object\
        label: '# of votes / color',
        data: numberData,
        backgroundColor: 'grey',
      }],
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
  };
  chartData.options.scales.yAxes[0].ticks.beginAtZero = true;

  var chart = new Chart(ctx, chartData);
// };

//------------------------------------LOCAL STORAGE-----------------------------------

// var ctx = document.getElementById('chart').getContext('2d');
// 'use strict';
// //local storage
// // localStorage.clear() clears out local storage
// //use a single js page for every html page.
// //in js create a function that allows for local storage.
// funtion saveProductsToLocalStorage(allPictures){
//  JSON.stringify(allProducts) turns all objects into strings.  local storage can support numbers or strings.  to convert back, use allProducts = JSON.parse(allProducts);
// }
//
// function saveProductsToLocalStorage(allProducts){
//   localStorage.allProducts = JSON.stringify(allProducts);
//   console.log('saved to localStorage');
// };
// // saves allProducts to localStorage
// picContainer.addEventListener('click', handlePicContainer, false);
//
// //USE THE SAVE PRODUCTS TO STORAGE FUNCTION AFTER THE LAST CLICK FUNCTION;
// //vvv USE VARIABLES FOR THE PARSED INFO IN GRAPH vvv
// var allProducts = JSON.parse(localStorage.allProducts);
//
// function allProductClicks(products){
//   var productClicks = [];
//   for (var i = 0; i < products.length; i++) {
//     productClicks.push(products[i].clicks);
//   }
//   console.log('all product clicks: ', productClicks);
//   return productClicks;
// }
//
// function allProductNames(products){
//   var productNames = [];
//   for (var i = 0; i < products.length; i++) {
//     productNames.push(products[i].name);
//   }
//   console.log('all product names: ', productClicks);
//   return productNames;
// }
