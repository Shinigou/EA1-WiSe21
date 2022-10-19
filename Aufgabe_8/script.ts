/* Array */
// tslint:disable-next-line: typedef
var sound = [ 
    new Audio("./assets/hihat.mp3"), 
    new Audio("./assets/kick.mp3"), 
    new Audio("./assets/snare.mp3"),
    new Audio("./assets/A.mp3"), 
    new Audio("./assets/C.mp3"), 
    new Audio("./assets/F.mp3"), 
    new Audio("./assets/G.mp3"), 
    new Audio("./assets/laugh-1.mp3"), 
    new Audio("./assets/laugh-2.mp3") 
    ];

    /*Aufgabe 7.1 */

// tslint:disable-next-line: typedef
window.addEventListener ( "load", function () {
    document.querySelector(".blue1").addEventListener("click", function (): void { (sound[0]).play(); });
    document.querySelector(".blue2").addEventListener("click", function (): void { (sound[1]).play(); });
    document.querySelector(".blue3").addEventListener("click", function (): void { (sound[2]).play(); });
    document.querySelector(".pink1").addEventListener("click", function (): void { (sound[3]).play(); });
    document.querySelector(".pink2").addEventListener("click", function (): void { (sound[4]).play(); });
    document.querySelector(".pink3").addEventListener("click", function (): void { (sound[5]).play(); });
    document.querySelector(".pink4").addEventListener("click", function (): void { (sound[6]).play(); });
    document.querySelector(".yellow1").addEventListener("click", function (): void { (sound[7]).play(); });
    document.querySelector(".yellow2").addEventListener("click", function (): void { (sound[8]).play(); });
    

    /*Aufgabe 7.2 */
    document.querySelector(".playbutton").addEventListener("click", function(): void { play(); });
});

// tslint:disable-next-line: typedef
function play() {
// tslint:disable-next-line: typedef
setInterval(function() {
    (sound[0]).play();
},          500);

// tslint:disable-next-line: typedef
setInterval(function() {
    (sound[1]).play();
},          1000);

// tslint:disable-next-line: typedef
setInterval(function() {
    (sound[2]).play();
},          1500);
}