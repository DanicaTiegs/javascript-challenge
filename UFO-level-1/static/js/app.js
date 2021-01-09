// from data.js
var tableData = data;

// Reference to table body

var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each tableData object
data.forEach(function(tableData) {
  console.log(tableData);
});

// Step 2:  Use `Object.entries` to console.log each ufo sighting value
data.forEach(function(tableData) {
  console.log(tableData);

  Object.entries(tableData).forEach(function([key, value]) {
    console.log(key, value);
  });
});

// Step 3:  Use d3 to append one table row `tr` for each sighting object

data.forEach(function(tableData) {
  console.log(tableData);
Object.entries(tableData).forEach(function([key, value]) {
  console.log(key, value);
});
  var row = tbody.append("tr");
});


// Step 4: Use d3 to append 1 cell per sighting value
data.forEach(function(tableData) {
  console.log(tableData);
  var row = tbody.append("tr");

  Object.entries(tableData).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
  });
});

// Step 5: Use d3 to update each cell's text with ufo sighting data

data.forEach(function(tableData) {
  console.log(tableData);
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});


// Bonus
data = data.filter((day) => {
  return day.high > 80;
})

data.forEach(function(weatherReport) {
  console.log(weatherReport);
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});


// Select the button
var button = d3.select("#button");

//Select input element
var inputElement = d3.select("#example-form-input");

var inputValue = inputElement.property("value");

console.log(inputValue);


// Select the form
//var input = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);


data.forEach(sighting) => {
    console.log(sighting);
console.log('')
}