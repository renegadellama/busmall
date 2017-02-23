'use strict';

function runChart(){
var ctx = document.getElementById('chart').getContext('2d');
var numberData = finalClicks;
var labelColors = finalNames;

var chartData = {
  type: 'bar',
  data: {
    labels: labelColors,
    datasets: [{ //this is an array of one object\
      label: '# of votes / color',
      data: numberData,
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
chartData.options.scales.yAxes[0].ticks.beginAtZero = true;

var chart = new Chart(ctx, chartData);
};
