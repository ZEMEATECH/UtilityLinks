//Hide GUI based
function showDesktop() {
  var t = document.getElementById("showTabletop");
  var k = document.getElementById("showKiosk");
  var s = document.getElementById("showSoftware");
  var d = document.getElementById("showDesktop");
  var dx = document.getElementById("showDocuments");
  var l = document.getElementById("showLinks");
  var m = document.getElementById("showMobile");
  var c = document.getElementById("showCard");
  var p = document.getElementById("showProg");

  if (d.style.display === "block" 
  && dx.style.display === "none"
  && t.style.display === "none"
  && k.style.display === "none"
  && s.style.display === "none"
  && l.style.display === "none"
  && m.style.display === "none"
  && c.style.display === "none"
  && p.style.display === "none"
  )
  {
    d.style.display = "block";
	
	dx.style.display = "none";
	t.style.display = "none";
	k.style.display = "none";
	s.style.display = "none";
	l.style.display = "none";
	m.style.display = "none";
	c.style.display = "none";
	p.style.display = "none";
  } else {
    d.style.display = "block";
	
	dx.style.display = "none";
	t.style.display = "none";
	k.style.display = "none";
	s.style.display = "none";
	l.style.display = "none";
	m.style.display = "none";
	c.style.display = "none";
	p.style.display = "none";
  }
}