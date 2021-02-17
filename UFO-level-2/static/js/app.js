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

      console.log(dateinputValue)
      console.log(cityinputValue)
      console.log(stateinputValue)
      console.log(countryinputValue)
      console.log(shapeinputValue)


      // var filteredData = tableData


      if (dateinputValue == ""){
        filteredData = tableData}
      else{
        filteredData = tableData.filter(ufo => ufo.datetime === dateinputValue)
      }

      if (cityinputValue == ""){
        filteredData2 = filteredData;}
      else{
        filteredData2 = filteredData.filter(ufo => ufo.city === cityinputValue)
      }

      if (stateinputValue == ""){
        filteredData3 = filteredData2;}
      else{
        filteredData3 = filteredData2.filter(ufo => ufo.state === stateinputValue)
      }

      if (countryinputValue == ""){
        filteredData4 = filteredData3;}
      else{
        filteredData4 = filteredData3.filter(ufo => ufo.country === countryinputValue)
      }
      if (shapeinputValue == ""){
        filteredData5 = filteredData4;}
      else{
        filteredData5 = filteredData4.filter(ufo => ufo.shape === shapeinputValue)
      }

      console.log(filteredData5);

      tbody.html("")

      filteredData5.forEach((ufoSighting)=> {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

  }


  var reset = d3.select("#reset-btn");
  reset.on("click",runReset);

  function runReset(){
    d3.event.preventDefault();
    data.forEach((ufoSighting) => {
      var row = tbody.append("tr");
      Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        console.log(`Table Reset`)
      });
    });

  }
