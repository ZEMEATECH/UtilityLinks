//TEXTBOX
function FourBySix() {
		var zpldatatosend = '^XA^PW832^LL1209^CF0,60^FO50,50^GB100,100,100^FS^FO75,75^FR^GB100,100,100^FS^FO88,88^GB50,50,50^FS^FO220,50^FDZebra Technologies^FS^CF0,30^FO220,115^FD1000 Shipping Lane^FS^FO220,155^FDShelbyville TN 38102^FS^FO220,195^FDUnited States (USA)^FS^FO50,250^GB700,1,3^FS^CFA,30^FO50,300^FDJohn Doe^FS^FO50,340^FD100 Main Street^FS^FO50,380^FDSpringfield TN 39021^FS^FO50,420^FDUnited States (USA)^FS^CFA,15^FO600,300^GB150,150,3^FS^FO638,340^FDPermit^FS^FO638,390^FD123456^FS^FO50,500^GB700,1,3^FS^BY5,2,270^FO100,550^BC^FD12345678^FS^FO50,900^GB700,250,3^FS^FO400,900^GB1,250,3^FS^CF0,40^FO100,960^FDCtr. X34B-1^FS^FO100,1010^FDREF1 F00B47^FS^FO100,1060^FDREF2 BL4H8^FS^CF0,190^FO470,955^FDCA^FS^XZ';
		var ip_addr = document.getElementById("ip_addr").value;
		var url = "http://" + ip_addr + "/pstprnt";
		var test = new XMLHttpRequest();
		test.open('POST', url);
		test.withCredentials = true;
		test.setRequestHeader('Content-Type', 'text/plain');
		test.send(zpldatatosend);		
	}
