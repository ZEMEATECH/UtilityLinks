//Hide GUI based
function showCard() {
  var t = document.getElementById("showTabletop");
  var k = document.getElementById("showKiosk");
  var s = document.getElementById("showSoftware");
  var d = document.getElementById("showDesktop");
  var dx = document.getElementById("showDocuments");
  var l = document.getElementById("showLinks");
  var m = document.getElementById("showMobile");
  var c = document.getElementById("showCard");
  var p = document.getElementById("showProg");

  if (c.style.display === "block" 
  && dx.style.display === "none"
  && t.style.display === "none"
  && d.style.display === "none"
  && s.style.display === "none"
  && l.style.display === "none"
  && m.style.display === "none"
  && k.style.display === "none"
  && p.style.display === "none"
  )
  {
    c.style.display = "block";
	dx.style.display = "none";
	t.style.display = "none";
	d.style.display = "none";
	s.style.display = "none";
	l.style.display = "none";
	m.style.display = "none";
	k.style.display = "none";
	p.style.display = "none";
  } else {
    c.style.display = "block";
	
	dx.style.display = "none";
	t.style.display = "none";
	d.style.display = "none";
	s.style.display = "none";
	l.style.display = "none";
	m.style.display = "none";
	k.style.display = "none";
	p.style.display = "none";
  }
}