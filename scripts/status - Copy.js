function GetStatus() {
		var zpldatatosend = "~HS";
		var ip_addr = document.getElementById("ip_addr").value;		
		var url = "http://" + ip_addr + "/pstprint";
		get.addEventListener("click",e => {
	
		var test = new XMLHttpRequest();
		test.open('GET', url);
		test.onreadystatechange = () =>{
			if test.readyState == 4)
			alert(http.responseText);
		}
		test.withCredentials = true;
		test.setRequestHeader('Content-Type', 'text/plain');
		test.send(zpldatatosend);
	}
}