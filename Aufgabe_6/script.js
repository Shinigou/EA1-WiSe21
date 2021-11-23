var Aufgabe_6;
(function (Aufgabe_6) {
    /*Europe*/
    var continentEU = "Europe";
    var Europe2008 = 4965.7;
    var Europe2018 = 4209.3;
    /*Africa*/
    var continentAF = "Africa";
    var Africa2008 = 1028;
    var Africa2018 = 1235.5;
    /*South America*/
    var continentSA = "SouthAmerica";
    var SouthAmerica2008 = 1132.6;
    var SouthAmerica2018 = 1261.5;
    /*North America*/
    var continentNA = "NorthAmerica";
    var NorthAmerica2008 = 6600.4;
    var NorthAmerica2018 = 6035.6;
    /*Asia*/
    var continentAsia = "Asia";
    var Asia2008 = 12954.7;
    var Asia2018 = 16274.1;
    /*Australia*/
    var continentAU = "Australia";
    var Australia2008 = 1993;
    var Australia2018 = 2100.5;
    /*SummeGlobal*/
    var SummeGlobal = Europe2018 + Africa2018 + SouthAmerica2018 + NorthAmerica2018 + Asia2018 + Australia2018;
    /*Rechnungen*/
    function Emission(continentName, number2018, number2008) {
        document.querySelector(".Area").innerHTML = continentName;
        document.querySelector(".continent").innerHTML = continentName;
        document.querySelector(".emission2018").innerHTML = number2018.toFixed(2);
        document.querySelector(".worldemission").innerHTML = (number2018 / SummeGlobal * 100).toFixed(2) + "%";
        document.querySelector(".growthbetween").innerHTML = ((number2018 / number2008 - 1) * 100).toFixed(2) + "%";
        document.querySelector(".growthabsolute").innerHTML = (number2018 - number2008).toFixed(2);
        document.querySelector(".Füllung").style.height = (number2018 / SummeGlobal * 100) + "%";
    }
    /*Auf Länder klicken*/
    window.addEventListener("load", function () {
        document.querySelector(".europe").addEventListener("click", function () { Emission(continentEU, Europe2018, Europe2008); });
        document.querySelector(".northamerica").addEventListener("click", function () { Emission(continentNA, NorthAmerica2018, NorthAmerica2008); });
        document.querySelector(".southamerica").addEventListener("click", function () { Emission(continentSA, SouthAmerica2018, SouthAmerica2008); });
        document.querySelector(".africa").addEventListener("click", function () { Emission(continentAF, Africa2018, Africa2008); });
        document.querySelector(".asia").addEventListener("click", function () { Emission(continentAsia, Asia2018, Asia2008); });
        document.querySelector(".australia").addEventListener("click", function () { Emission(continentAU, Australia2018, Australia2008); });
    });
})(Aufgabe_6 || (Aufgabe_6 = {}));
//# sourceMappingURL=script.js.map