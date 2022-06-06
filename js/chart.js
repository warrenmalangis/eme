<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {

        var data = google.visualization.arrayToDataTable([
          ['Month', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Average'],
          ['Week 1',  1650,      938,         1222,             998,           1450,      1251.6],
          ['Week 2',  1305,      1120,        2599,             1268,          1288,      1516],
          ['Week 3',  1057,      1167,        1587,             1807,           1397,      1403],
          ['Week 4',  1139,      1110,        1615,             1968,           1215,      1409.4],
        ]);

        var options = {
          title : 'Weekly Sales Report',
          vAxis: {title: 'Income in Pesos (₱)'},
          hAxis: {title: 'April 2022'},
          seriesType: 'bars',
          series: {5: {type: 'line'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
    </script>
    <hr>
    <script type="text/javascript">
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Month", "Sales", { role: "style" } ],
        ["January", 44000, "blue"],
        ["February", 46587, "red"],
        ["March", 51578, "green"],
        ["April", 50245, "color: orange"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Monthly Sales Report",
        width: 1300,
        height: 900,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
      chart.draw(view, options);
  }
  </script>