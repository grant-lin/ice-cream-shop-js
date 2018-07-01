//Instantiate variables for picked flavor and number of scoops.
var pickedFlavor;
var pickedScoops;
var readyFlavor = false;
var readyScoop = false;

//I'm not too happy about the following solution, but it's the first pass. 
//The codes semantics as well as the algorithm are not optimized.

var orderReady = function() {
  if (readyFlavor === true && readyScoop === true) {
    $('#order-summary').text(pickedScoops + ' of ' + pickedFlavor + ' ice cream coming right up!');
  }
}


var setPickedFlavor = function() {
  pickedFlavor = $(event.target).text();
  // event.target is more specific semantically than 'this' if you have wrapping elements(?)
  readyFlavor = true;
  $('#order-summary').text('Ok, ' + pickedFlavor + ' it is. How many scoops?');
  orderReady();
}

var setPickedScoops = function() {
  pickedScoops = $(event.target).text(); 
  readyScoop = true;
  orderReady();
}


$('#scoop li').click(setPickedScoops);
$('#flavor li').click(setPickedFlavor);




//My messy attempt to Deferrends but it did not work. 
//It seems like Ajax call would be required for this
//following interaction where I want the message to 
//write only after both click events are registered.

// var pickedFlavor = $.Deferred();
// var pickedScoops = $.Deferred();
// var readyToMake = false;

// var setPickedFlavor = function() {
//   pickedFlavor.resolve($(this).text());
//   console.log(pickedFlavor);
// }

// var setPickedScoops = function() {
//   pickedScoops.resolve($(this).text());
//   console.log(pickedScoops);
// }

// var printOrderSummary = function(typeFlavor, numScoop) {
//   console.log('working at least');
//   $('#order-summary').text(typeFlavor + ' of ' + numScoop + ' ice cream coming right up!');
// }

// $('.flavor').click(setPickedFlavor);
// $('.scoop').click(setPickedFlavor);
// $.when(pickedFlavor, pickedScoops).done(printOrderSummary);





// Old code from class exercise

// var makeCone = function(flavor, numberScoops) {   
//   console.log('Coming right up!') 
//   console.log('Flavor: ' + flavor); 
//   console.log('Scoops: ' + numberScoops);
// }

// makeCone('chocolate', 3);

// makeCone('vanilla', 1);
