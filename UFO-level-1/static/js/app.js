//table is populating without errors, but there is a large gap at the top
//button is not working

// from data.js
var tableData = data;

// Reference to table body

var tbody = d3.select("tbody");

// Console.log the ufo sighting data from data.js
console.log(tableData);


// Step 5: Use d3 to update each cell's text with ufo sighting data

tableData.forEach(function(sighting) {
  console.log(sighting);
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(function([key, value]) {
    console.log(key, value);

    // Append a cell to the row for each value in tableData object
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {
console.log("run")
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime").property("value");

  console.log(inputElement);

  var inputData = tableData.filter(sighting => sighting.datetime === inputElement);

  console.log(inputData);
  tbody.html("")

  inputData.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);
  
      // Append a cell to the row for each value in tableData object
      var cell = row.append("td");
      cell.text(value);
    });
  });

}