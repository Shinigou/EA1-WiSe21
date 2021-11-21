var Africa2008 : number = 1028;
var Africa2018 : number = 1235.5;

var SouthAmerica2008 : number = 1132.6;
var SouthAmerica2018 : number = 1261.5;

var Europe2008 : number = 4965.7;
var Europe2018 : number = 4209.3;

var NorthAmerica2008 : number = 6600.4;
var NorthAmerica2018 : number = 6035.6;

var Asia2008 : number = 12954.7;
var Asia2018 : number = 16274.1;

var Australia2008 : number = 1993;
var Australia2018 : number = 2100.5;

var SummeGlobal : number = Africa2018 + SouthAmerica2018 + Europe2018 + NorthAmerica2018 + Asia2018 + Australia2018;

/*Berechnung Africa*/
var Africa1 : number = (100/SummeGlobal) * Africa2018;
var Africa2 : number = ((100/Africa2008) * Africa2018) - 100;
var Africa3 : number = Africa2018 - Africa2008;

/*Berechnung SouthAmerica*/
var SouthAmerica1 : number = (100/SummeGlobal) * SouthAmerica2018;
var SouthAmerica2 : number = ((100/SouthAmerica2008) * SouthAmerica2018) - 100;
var SouthAmerica3 : number = SouthAmerica2018 - SouthAmerica2008;

/*Berechnnung Europe*/
var Europe1 : number = (100/SummeGlobal) * Europe2018;
var Europe2 : number = ((100/Europe2008) * Europe2018) - 100;
var Europe3 : number = Europe2018 - Europe2008;

/*Berechnung NorthAmerica*/
var NorthAmerica1 : number = (100/SummeGlobal) * NorthAmerica2018;
var NorthAmerica2 : number = ((100/NorthAmerica2008) * NorthAmerica2018) - 100;
var NorthAmerica3 : number = NorthAmerica2018 - NorthAmerica2008;

/*Berechnung Asia*/
var Asia1 : number = (100/SummeGlobal) * Asia2018;
var Asia2 : number = ((100/Asia2008) * Asia2018) - 100;
var Asia3 : number = Asia2018 - Asia2008;

/*Berechnung Australia*/
var Australia1 : number = (100/SummeGlobal) * Australia2018;
var Australia2 : number = ((100/Australia2008) * Australia2018) - 100;
var Australia3 : number = Australia2018 - Australia2008;

/*Africa*/
console.log('Die Emission von Afrika ist: ' + Africa2018 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit ' + Africa1 + ' %');
console.log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' + Africa2 + ' % verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + Africa3 + ' kg CO2');

/*SouthAmerica*/
console.log('Die Emission von Südamerika ist: ' + SouthAmerica2018 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Südamerika damit ' + SouthAmerica1 + ' %');
console.log('Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + SouthAmerica2 + ' % verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + SouthAmerica3 + ' kg CO2');

/*Europe*/
console.log('Die Emission von Europa ist: ' + Europe2018 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit ' + Europe1 + ' %');
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' + Europe2 + ' % verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + Europe3 + ' kg CO2');

/*NorthAmerica*/
console.log('Die Emission von Nordamerika ist: ' + NorthAmerica2018 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Nordamerika damit ' + NorthAmerica1 + ' %');
console.log('Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + NorthAmerica2 + ' % verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + NorthAmerica3 + ' kg CO2');

/*Asia*/
console.log('Die Emission von Asien ist: ' + Asia2018 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Asien damit ' + Asia1 + ' %');
console.log('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ' + Asia2 + ' % verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + Asia3 + ' kg CO2');

/*Australian*/
console.log('Die Emission von Australien ist: ' + Australia2018 + ' kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Australien damit ' + Australia1 + ' %');
console.log('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ' + Australia2 + ' % verändert');
console.log('2018 im Vergleich zu 2008 sind das ' + Australia3 + ' kg CO2');