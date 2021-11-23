namespace Aufgabe_6 {
/*Europe*/
var continentEU : string = "Europe";
var Europe2008 : number = 4965.7;
var Europe2018 : number = 4209.3;

/*Africa*/
var continentAF : string = "Africa";
var Africa2008 : number = 1028;
var Africa2018 : number = 1235.5;

/*South America*/
var continentSA : string = "SouthAmerica";
var SouthAmerica2008 : number = 1132.6;
var SouthAmerica2018 : number = 1261.5;

/*North America*/
var continentNA : string = "NorthAmerica";
var NorthAmerica2008 : number = 6600.4;
var NorthAmerica2018 : number = 6035.6;

/*Asia*/
var continentAsia : string = "Asia";
var Asia2008 : number = 12954.7;
var Asia2018 : number = 16274.1;

/*Australia*/
var continentAU : string = "Australia";
var Australia2008 : number = 1993;
var Australia2018 : number = 2100.5;


/*SummeGlobal*/
var SummeGlobal: any = Europe2018 + Africa2018 + SouthAmerica2018 + NorthAmerica2018 + Asia2018 + Australia2018;


/*Rechnungen*/
function Emission (continentName: string, number2018: number, number2008: number) {
    document.querySelector(".Area").innerHTML = continentName;
    document.querySelector(".continent").innerHTML = continentName;
    document.querySelector(".emission2018").innerHTML = number2018.toFixed(2);
    document.querySelector(".worldemission").innerHTML = (number2018/SummeGlobal*100).toFixed(2) + "%";
    document.querySelector(".growthbetween").innerHTML = ((number2018/number2008-1)*100).toFixed(2) + "%";
    document.querySelector(".growthabsolute").innerHTML = (number2018-number2008).toFixed(2);
    document.querySelector<HTMLElement>(".Füllung").style.height = (number2018/SummeGlobal*100) + "%";
}

/*Auf Länder klicken*/
window.addEventListener ("load", function(){
    document.querySelector(".europe").addEventListener("click", function (): void { Emission(continentEU, Europe2018, Europe2008)});
    document.querySelector(".northamerica").addEventListener("click", function (): void { Emission(continentNA, NorthAmerica2018, NorthAmerica2008)});
    document.querySelector(".southamerica").addEventListener("click", function (): void { Emission(continentSA, SouthAmerica2018, SouthAmerica2008)});
    document.querySelector(".africa").addEventListener("click", function (): void { Emission(continentAF, Africa2018, Africa2008)});
    document.querySelector(".asia").addEventListener("click", function (): void { Emission(continentAsia, Asia2018, Asia2008)});
    document.querySelector(".australia").addEventListener("click", function (): void { Emission(continentAU, Australia2018, Australia2008)});
})
}
