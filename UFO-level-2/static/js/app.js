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
      // date
      var dateinput = d3.select("#datetime");
      var dateinputValue = dateinput.property("value");

      // city
      var cityinput = d3.select("#city");
      var cityinputValue = cityinput.property("value");

      // state
      var stateinput = d3.select("#state");
      var stateinputValue = stateinput.property("value");

      // country
      var countryinput = d3.select("#country");
      var countryinputValue = countryinput.property("value");

      // shape
      var shapeinput = d3.select("#shape");
      var shapeinputValue = shapeinput.property("value");

      
      console.log(tableData);
      var filteredData = tableData.filter(
        ufo => ufo.datetime === dateinputValue).filter(
          ufo => ufo.city === cityinputValue).filter(
            ufo => ufo.state === stateinputValue).filter(
              ufo => ufo.country === countryinputValue).filter(
                ufo => ufo.shape === countryinputValue)


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

