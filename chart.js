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
