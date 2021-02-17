// from data.js
var tableData = data;

var tbody = d3.select("tbody");

console.log(data)

data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


  var button = d3.select("#filter-btn")
  var input = d3.select("form")

  button.on("click",runFilter);
  input.on("submit",runFilter);

  function runFilter(){
      d3.event.preventDefault();
      inputElement = d3.select("#datetime");
      var inputValue = inputElement.property("value");
      console.log(inputValue);
      console.log(tableData);
      var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

      console.log(filteredData);

      tbody.html("")

      filteredData.forEach((ufoSighting)=> {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

  }

