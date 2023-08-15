var countDowndate = new Date("Aug 30 , 2023 14:42:11").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDowndate - now;
     
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / (1000));

    document.getElementById("demo").innerHTML = days + "D" + hours + "H" + minutes + "M" + seconds + "S";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";

    }

    


}, 1000);