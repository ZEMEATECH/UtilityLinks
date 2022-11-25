const clocks = document.getElementsByClassName("clocks");

function updateClocks() {
  for (let clock of clocks) {
    let timezone = clock.dataset.timezone;
    let time = new Date().toLocaleTimeString("en-US", {
      hour: '2-digit',
      minute:'2-digit',
      second:'2-digit',
      timeZone: timezone

    });
    clock.textContent = time;
  }
}

function gettime ()
{
var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
var day = d.getDate();
var month= months[d.getMonth()];
var year = d.getFullYear();
 
document.getElementById("shortdate").innerHTML = month+"  "+day+"  "+year;
}

// Update every minute:
setInterval(updateClocks, 600);
updateClocks();