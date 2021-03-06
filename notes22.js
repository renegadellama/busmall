'use strict';

var ctx = document.getElementById('chart').getContext('2d');
'use strict';
//local storage
// localStorage.clear() clears out local storage
//use a single js page for every html page.
//in js create a function that allows for local storage.
// funtion saveProductsToLocalStorage(allProducts){
//  JSON.stringify(allProducts) turns all objects into strings.  local storage can support numbers or strings.  to convert back, use allProducts = JSON.parse(allProducts);
//}

function saveProductsToLocalStorage(allProducts){
  localStorage.allProducts = JSON.stringify(allProducts);
  console.log('saved to localStorage');
};
// saves allProducts to localStorage
picContainer.addEventListener('click', handlePicContainer, false);

//USE THE SAVE PRODUCTS TO STORAGE FUNCTION AFTER THE LAST CLICK FUNCTION;
//vvv USE VARIABLES FOR THE PARSED INFO IN GRAPH vvv
var allProducts = JSON.parse(localStorage.allProducts);

function allProductClicks(products){
  var productClicks = [];
  for (var i = 0; i < products.length; i++) {
    productClicks.push(products[i].clicks);
  }
  console.log('all product clicks: ', productClicks);
  return productClicks;
}

function allProductNames(products){
  var productNames = [];
  for (var i = 0; i < products.length; i++) {
    productNames.push(products[i].name);
  }
  console.log('all product names: ', productClicks);
  return productNames;
}

//use funtions to get data and then populate to chart.
var clickData = allProductClicks(allProducts);
var nameData = allProductNames(allProducts);

// var data = [12, 4, 9, 3, 100, 55, 31];
var labelColors = ['#bc0000','green','blue','black','cyan','#6d3d05','salmon'];

var chartData = {
  type: 'bar',
  data: {
    labels: nameData,
    datasets: [{ //this is an array of one object\
      label: '# of votes / products',
      data: clickData,
      backgroundColor: labelColors
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
// chartData.options.scales.yAxes[0].ticks.beginAtZero = true;

var myChart = new Chart(ctx, chartData);
