'use strict';

// Creating cloud
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;

// Creating bar
var BAR_GAP_X = 40;
var BAR_GAP_Y = 250;
var BAR_GAP_FONT = 20;
var BAR_X = CLOUD_X + BAR_GAP_X;
var BAR_Y = CLOUD_Y + BAR_GAP_Y;
var BAR_MAX_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_DISTANCE = 50 + BAR_WIDTH;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var randomColor = function () {
  var r = Math.floor(Math.random());

  return 'rgba(0, 0, 255,' + r + ')';
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], BAR_X + BAR_DISTANCE * i, BAR_Y);
    if (players === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = randomColor;
    }
    ctx.fillRect(BAR_X + BAR_DISTANCE * i, BAR_Y - BAR_GAP_FONT, BAR_WIDTH, -(BAR_MAX_HEIGHT * times[i] / maxTime));
  }
};
