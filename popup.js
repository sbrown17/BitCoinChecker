$(document).ready(function() {
    var dataPoints = [];
    var date = [];
    var price = [];
    var x = [];
    $.getJSON("https://api.coindesk.com/v1/bpi/historical/close.json", function(data) { 
        var bpi = data[0];
        $.each(bpi, function(date, price){
            dataPoints.push({x: [0], y: parseFloat(price[1])});
        });
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx,{
            data: [{
            type: "line",
                date : price,
            }]
        });
        myChart.render();
    });
});