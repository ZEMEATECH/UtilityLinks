function gettime ()
{
var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var day = d.getDate();
var month= months[d.getMonth()];
var year = d.getFullYear();
    m = checkTime(m);
    s = checkTime(s);

document.getElementById("hour").innerHTML =h+":"+m+":"+s;
document.getElementById("shortdate").innerHTML = month+" - "+day+" - "+year;
setTimeout(gettime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
