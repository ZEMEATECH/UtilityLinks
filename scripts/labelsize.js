function SetLabelSize() {
		var zpldatatosend = document.getElementById("Label-Length").value + document.getElementById("Print-Width").value ;
		var ip_addr = document.getElementById("ip_addr").value;
		var url = "http://" + ip_addr + "/pstprnt";
		var test = new XMLHttpRequest();
		test.open('POST', url);
		test.withCredentials = true;
		test.setRequestHeader('Content-Type', 'text/plain');
		test.send(zpldatatosend);		
	}