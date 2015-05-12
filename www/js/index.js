var companyCode = "";


function getCompanyCode() {
    document.getElementById('companyOptions').innerHTML = "";
    var coInput = document.getElementById("companyName").value;
    var url = "http://dev.markitondemand.com/Api/v2/Lookup/json?input=";
    var finalURL = url + coInput;
    var colist = "<option value='1' disabled='disabled' selected='selected'>Select a Company...</option>";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            myFunction(myArr);
        }
    }
    xmlhttp.open("GET", finalURL, true);
    xmlhttp.send();

    function myFunction(data) {

        for (var i = 0; i < data.length; i++) {
            colist += "<option value='" + data[i].Symbol + "'>" + data[i].Name + "-" + data[i].Exchange + "</option>";
        }

        document.getElementById('companyOptions').innerHTML = colist;

    }

}

function onCodeSelected() {
    companyCode = $('#companyOptions :selected').val();
}

function getQuotes() {
    
    companyCode = document.getElementById("companyCode").value;
    var url = "http://dev.markitondemand.com/Api/v2/Quote/json?symbol=";
    var finalURL = url + companyCode;
    var receivedQuotes = "<table border = '1'>";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            myFunction(myArr);
        }
    }
    xmlhttp.open("GET", finalURL, true);
    xmlhttp.send();

    function myFunction(data) {


        receivedQuotes += "<tr>";
        receivedQuotes += "<td>Name</td>";
        receivedQuotes += "<td>" + data.Name + "</td>";
        receivedQuotes += "</tr>";

        receivedQuotes += "<tr>";
        receivedQuotes += "<td>Symbol</td>";
        receivedQuotes += "<td>" + data.Symbol + "</td>";
        receivedQuotes += "</tr>";

        receivedQuotes += "<tr>";
        receivedQuotes += "<td>Last Price</td>";
        receivedQuotes += "<td>" + data.LastPrice + "</td>";
        receivedQuotes += "</tr>";

        receivedQuotes += "<tr>";
        receivedQuotes += "<td>Change Percent</td>";
        receivedQuotes += "<td>" + data.ChangePercent + "</td>";
        receivedQuotes += "</tr>";

        receivedQuotes += "<tr>";
        receivedQuotes += "<td>Volume</td>";
        receivedQuotes += "<td>" + data.Volume + "</td>";
        receivedQuotes += "</tr>";

        receivedQuotes += "<tr>";
        receivedQuotes += "<td>High</td>";
        receivedQuotes += "<td>" + data.High + "</td>";
        receivedQuotes += "</tr>";

        receivedQuotes += "<tr>";
        receivedQuotes += "<td>Low</td>";
        receivedQuotes += "<td>" + data.Low + "</td>";
        receivedQuotes += "</tr>";

        receivedQuotes += "<tr>";
        receivedQuotes += "<td>Open</td>";
        receivedQuotes += "<td>" + data.Open + "</td>";
        receivedQuotes += "</tr>";

        receivedQuotes += "</table>";
        document.getElementById('fetchQuotes').innerHTML = receivedQuotes;

    }

}