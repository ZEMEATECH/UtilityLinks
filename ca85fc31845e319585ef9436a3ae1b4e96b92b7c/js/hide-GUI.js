//Hide GUI
function HideGUI() {
  var x = document.getElementById("GUI");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}