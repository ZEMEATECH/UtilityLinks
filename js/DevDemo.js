var available_printers = null;
var selected_category = null;
var default_printer = null;
var selected_printer = null;
var format_start = "^XA^FO100,100^A0N36,36^FDZebra - Test Browser Print^FS^XZ";
var format_end = "^FS^XZ";
var default_mode = true;

function setup_web_print()
{
	$('#printer_select').on('change', onPrinterSelected);
	showLoading("Please wait...");
	default_mode = true;
	selected_printer = null;
	available_printers = null;
	selected_category = null;
	default_printer = null;
	BrowserPrint.getDefaultDevice('printer', function(printer)
	{
		default_printer = printer
		if((printer != null) && (printer.connection != undefined))
		{
			selected_printer = printer;
			var printer_details = $('#printer_details');
			var selected_printer_div = $('#selected_printer');
			
			selected_printer_div.text("Default Printer: " + printer.name);
			hideLoading();
			printer_details.show();
			$('#print_form').show();

		}
		BrowserPrint.getLocalDevices(function(printers)
			{
				available_printers = printers;
				var sel = document.getElementById("printers");
				var printers_available = false;
				sel.innerHTML = "";
				if (printers != undefined)
				{
					for(var i = 0; i < printers.length; i++)
					{
						if (printers[i].connection == 'usb' || 'tcp')
						{
							var opt = document.createElement("option");
							opt.innerHTML = printers[i].connection + ": " + printers[i].uid;
							opt.value = printers[i].uid;
							sel.appendChild(opt);
							printers_available = true;
						}
					}
				}
				
				if(!printers_available)
				{
					document.getElementById("error_div").style.color = "red";
					showErrorMessage("Unable to connect!");
					hideLoading();
					$('#print_form').hide();
					
					return;
				}
				else if(selected_printer == null)
				{
					default_mode = false;
					changePrinter();
					$('#print_form').show();
					hideLoading();
				}
			}, undefined, 'printer');
	}, 
	function(error_response)
	{
		showBrowserPrintNotFound();
		$('#printer_select').hide();
	});
$('#printer_select').show();
};
function showBrowserPrintNotFound()
{   
    $('#printer_select').hide();
	hideLoading();
	document.getElementById("error_div").style.color = "red";
	document.getElementById("error_div").style.margin = "0px 210px";
	showErrorMessage("Restart Browser Print");
};
/*/PRINTER CONTROLS /*/

function Feed()
{
	showLoading("Printing...");
	var zpl = "~PH"
	checkPrinterStatus( function (text){
		if (text == "Ready to Print")
		{
			selected_printer.send(zpl);
			readPrinterStatus();
			hideLoading();
			$('#printer_details').show();
	        $('#printer_select').show();
		}
		else
		{
			showLoading("ERROR!");
			printerError(text);
			setup_web_print()
		}		
	});
};

function Pause()
{
	showLoading("Printing...");
	var zpl = "~PP"
	checkPrinterStatus( function (text){
		if (text == "Ready to Print")
		{
			selected_printer.send(zpl);
			readPrinterStatus();
			hideLoading();
			$('#printer_details').show();
	        $('#printer_select').show();
		}		
		else
		{
			if (text == " PRINTER PAUSED")
			{
			showLoading("Cannot Complete!");
			selected_printer.send(zpl = "~PS");
			readPrinterStatus();
			hideLoading();
			$('#printer_details').show();
	        $('#printer_select').show();
			}
			
			else 
			{	
			 showLoading("ERROR");
			 printerError(text);
			}
		}		
	});
};


function Cancel()
{
	showLoading("Printing...");
	var zpl = "~JA"
	checkPrinterStatus( function (text){
			selected_printer.send(zpl);
			readPrinterStatus();			
			$('#printer_details').show();
	        $('#printer_select').show();
			alert("ALL JOBS CANCELLED!");
			hideLoading();
			
	});
};


function QuickTest()
{
	showLoading("Printing...");
	checkPrinterStatus(function (text){
		if (text == "Ready to Print")
		{
			selected_printer.send(format_start, printerError);
			$('#printer_details').show();
	        $('#printer_select').show();
			alert("QUICK TEST SENT!");
		}
		else
		{
			alert("ERROR, REVIEW YOUR SETTINGS!");
			printerError(text);
		}
	});
	
};

function Calibrate()
{
	showLoading("Printing...");
	var zpl = "~JC"
	checkPrinterStatus( function (text){
	
			selected_printer.send(zpl);
				$('#printer_details').show();
	        $('#printer_select').show();
			alert("CALIBRATING PLEASE WAIT...");
		
	});
	
};

function Reset()
{
	showLoading("Setting to Black Mark...");
	var zpl = '! U1 do "device.reset" "" '
	checkPrinterStatus( function (text){
		if (text == "Ready to Print")
		{
			selected_printer.send(zpl);
			$('#printer_details').show();
	        $('#printer_select').show();
			alert("PRINTER IS RESETTING!");
		}
		else
		{
			alert("ERROR, REVIEW YOUR SETTINGS");
			printerError(text);
		}
	});
	
};


function SetToBlackMark()
{
	showLoading("Setting to Black Mark...");
	var zpl = "^XA^MNM^JUS^XZ~PH"
	checkPrinterStatus( function (text){
		if (text == "Ready to Print")
		{
			selected_printer.send(zpl);
			$('#printer_details').show();
	        $('#printer_select').show();
			alert("BLACK MARK MODE...");
		}
		else
		{
			alert("ERROR, REVIEW YOUR SETTINGS");
			printerError(text);
		}
	});
	
};

function SetToGap()
{
	showLoading("Printing...");
	var zpl = "^XA^MNY^JUS^XZ~PH"
	checkPrinterStatus( function (text){
		if (text == "Ready to Print")
		{
			selected_printer.send(zpl);
			$('#printer_details').show();
	        $('#printer_select').show();
			alert("GAP/NOTCH MODE...");
		}
		else
		{
			alert("ERROR, REVIEW YOUR SETTINGS");
			printerError(text);
		}
	});
	
};
function SetToJournal()
{
	showLoading("Printing...");
	var zpl = "^XA^MNN^JUS^XZ~PH"
	checkPrinterStatus( function (text){
		if (text == "Ready to Print")
		{
			selected_printer.send(zpl);
			$('#printer_details').show();
	        $('#printer_select').show();
			alert("JOURNAL/CONTINUOUS MODE");
		}
		else
		{
			alert("ERROR, REVIEW YOUR SETTINGS");
			printerError(text);
		}
	});
};


function SetToThermalTransfer()
{
	showLoading("Printing...");
	var zpl = "^XA^MTT^JUS^XZ"
	checkPrinterStatus( function (text){		
			selected_printer.send(zpl);
			readPrinterStatus();			
			$('#printer_details').show();
	        $('#printer_select').show();
			alert("THERMAL TRANSFER MODE");
			hideLoading();
				
	});
};

function SetToDirectThermal()
{
	showLoading("Printing...");
	var zpl = "^XA^MTD^JUS^XZ"
	checkPrinterStatus( function (text){
		if (text == "Ready to Print")
		{
			selected_printer.send(zpl);
			readPrinterStatus();			
			$('#printer_details').show();
	        $('#printer_select').show();
			alert("DIRECT THERMAL MODE");
			hideLoading();
		}
		else
		{
			printerError(text);
		}		
	});
};
/*/END OF BUTTONS/*/

/*/Common Functions /*/

function checkPrinterStatus(finishedFunction)
{
	selected_printer.sendThenRead("~HQES", 
				function(text){
						var that = this;
						var statuses = new Array();
						var ok = false;
						var is_error = text.charAt(70);
						var media = text.charAt(88);
						var head = text.charAt(87);
						var pause = text.charAt(84);
						// check each flag that prevents printing
						if (is_error == '0')
						{
							ok = true;
							statuses.push("Ready to Print");
						}
						if (media == '1')
							statuses.push("MEDIA OUT");
						if (media == '2')
							statuses.push("RIBBON OUT");
						if (media == '4')
							statuses.push("HEAD OPEN");
						if (media == '8')
							statuses.push("CUTTER ERROR");
						if (head == '1')
							statuses.push("PRINT HEAD OVERHEATING");
						if (head == '2')
							statuses.push("MOTOR OVERHEATING");
						if (head == '4')
							statuses.push("PRINTHEAD FAULTY");
						if (head == '8')
							statuses.push("INCORRECT PRINTHEAD");
						if (pause == '1')
							statuses.push(" PRINTER PAUSED");
						if ((!ok) && (statuses.Count == 0))
							statuses.push("Error: Unknown Error");
						finishedFunction(statuses.join());
			}, printerError);
};

function readPrinterStatus()
		{                  
			checkPrinterStatus( function (text){
			if (text == "Ready to Print")
		{
			$('#printer_details').show();		
			document.getElementById("error_div").style.backgroundColor = "#9add00";
			printerReady()
		}
		else
		{
			$('#printer_details').show();
			document.getElementById("error_div").style.backgroundColor =  "red";
			printerError(text);


			
		}
	});
};

function hidePrintForm()
{
	$('#print_form').hide();
};

function showPrintForm()
{
	$('#print_form').show();
};

function showLoading(text)
{
	$('#printer_details').hide();
	$('#printer_select').hide();
	$('#loading_message').text(text);
	$('#printer_data_loading').show();
	hidePrintForm();	
};

function printComplete()
{
	hideLoading();
	alert ("Sent Successfully!");
}

function hideLoading()
{
	$('#printer_data_loading').hide();
	if(default_mode == true)
	{
		showPrintForm();
		$('#printer_details').show();
	}
	else
	{
		$('#printer_select').show();
		showPrintForm();
	}
};

function changePrinter()
{
	default_mode = false;
	selected_printer = null;
	$('#printer_details').show();
	if(available_printers == null)
	{
		showLoading("Finding Printers...");
		$('#print_form').hide();
		setTimeout(changePrinter, 50);
		return;
	}
	$('#printer_select').show();
	onPrinterSelected();
}

function onPrinterSelected()
{
	selected_printer = available_printers[$('#printers')[0].selectedIndex];
}
function showErrorMessage(text)
{
	$('#error_div').show();
	$('#error_message').html(text);
}

function printerError(text)
{
	showErrorMessage(text);
}

function showMessage(text)
{
	$('#error_div').show();
	$('#error_message').html(text);
}

function printerReady(text)
{
	showMessage("PRINTER READY");
}

function trySetupAgain()
{
	$('#error_div').hide();
	setup_web_print();
}

/*/ V3 */

function getConfig(){
	BrowserPrint.getApplicationConfiguration(function(config){
		alert(JSON.stringify(config))
	}, function(error){
		alert(JSON.stringify(new BrowserPrint.ApplicationConfiguration()));
	})
}

function writeToSelectedPrinter(dataToWrite)
{
	selected_printer.send(dataToWrite, undefined, errorCallback);
	if (document.getElementById('write_text').value == "")
	{
		alert ("Type some code")
	}	
}
var readCallback = function(readData)
{	
	if(readData === undefined || readData === null)
	{
		alert("ERROR! No Response from Device");
	}
	else
	{
		document.getElementById("results").innerHTML = readData;
	}
	
}
var errorCallback = function(errorMessage){
	alert("Error: " + errorMessage);	
}
function readFromSelectedPrinter()
{
	selected_printer.read(readCallback, errorCallback);	
}

