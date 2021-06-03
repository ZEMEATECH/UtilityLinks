//TEXTBOX
function printLabel() {
		var zpldatatosend = document.getElementById("textbox").value;
		var ip_addr = document.getElementById("ip_addr").value;
		var url = "https://" + ip_addr + "/pstprnt";
		var test = new XMLHttpRequest();
		test.open('POST', url);
		test.withCredentials = true;
		test.setRequestHeader('Content-Type', 'text/plain');
		test.send(zpldatatosend);	
	}
