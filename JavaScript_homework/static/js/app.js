var tableData = data;

function createTable() {

  d3.event.preventDefault()  

  selection = d3.select("#datetime")

  date_value = selection.property("value")

  date_input = data.filter(d => d.datetime==date_value)

  var tbody = d3.select("tbody");

  d3.select("tbody").html("")

  date_input.forEach(function(ufoSighting) {
  console.log(ufoSighting);
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = tbody.append("td");
    cell.text(value);
  });
  });
}

d3.select("#filter-btn").on("click", createTable)