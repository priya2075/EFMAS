/** 
 * ---------------------------------------------------------------
 *   Title: Javascript assignment for Singapore Polytechnic
 *   Desc: Estate Feedback Management System
 *   Author: Priya 
 *   Group: DICS1
 *   Start date: 07-JULY-2022
 *   End date: 11-Aug-2022
 *  --------------------------------------------------------------- 
**/




// [[ START OF A ]]
// ----------------------------- (a1) F.I.L.T.E.R - S.E.A.R.C.H - T.A.B.L.E ----------------------------- Search function for searching a particular feedback item
// NOTE: This function filters words within the table - [[ at input type="search" ]] -  The search bar.  
// ---------------- REF ---------------- https://stackoverflow.com/questions/51187477/how-to-filter-a-html-table-using-simple-javascript
function searchFeedbackTable() {
	
	// ----------------------------- ADMIN ----------------------------- 
    // ----------------------------- ALLOW ADMIN USER TO VIEW ALL AND FILTER SEARCH ALL USERS' CONTENT ----------------------------- 
    // ---------------- REF ---------------- https://stackoverflow.com/questions/7754013/hiding-columns-in-table-javascript
    var hideTD_User = document.getElementById("showMemberName").innerHTML = localStorage.getItem("namevalue");
    var hideTD_ID = document.getElementById("showMemberID").innerHTML = localStorage.getItem("idvalue");
    var unHideTD_Admin = document.getElementById("showMemberName").innerHTML = localStorage.getItem("namevalue");
    var unHideTD_adminID = document.getElementById("showMemberID").innerHTML = localStorage.getItem("idvalue");

    if (unHideTD_Admin === "Lim Teng Chwee" && unHideTD_adminID === "m111") {
		var input, filter, table, tr, td, cell, i, j;
		input = document.getElementById("filterInput");
		filter = input.value.toUpperCase();
		table = document.getElementById("feedbackTable");
		tr = table.getElementsByTagName("tr");
	
		for (i = 1; i < tr.length; i++) {
			// Hide the row initially.
			tr[i].style.display = "none";
			td = tr[i].getElementsByTagName("td");
			
			for (var j = 0; j < td.length; j++) {
				cell = tr[i].getElementsByTagName("td")[j];
				
				if (cell) {
					if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
						tr[i].style.display = "";
						break;
					} 
				}
			}
		}
    }



	// ----------------------------- NORMAL USERS (m112, m113, m114) ----------------------------- 
    // ----------------------------- HIDE OTHER USERS FROM LOGGED IN USERS ----------------------------- 
    // ---------------- REF ---------------- https://stackoverflow.com/questions/7754013/hiding-columns-in-table-javascript
    var hideTD_User = document.getElementById("showMemberName").innerHTML = localStorage.getItem("namevalue");
    var hideTD_ID = document.getElementById("showMemberID").innerHTML = localStorage.getItem("idvalue");

	// ----------------------------- NORMAL USER - m112 --------------------------------------------------------------------------------------- Chua Li Choo
    if (hideTD_User === "Chua Li Choo" && hideTD_ID === "m112") {
		var input, filter, table, tr, td, cell, i, j;
		input = document.getElementById("filterInput");
		filter = input.value.toUpperCase();
		table = document.getElementById("feedbackTable");
		tr = table.getElementsByTagName("tr");
	
		for (i = 1; i < tr.length; i++) {
			// Hide the row initially.
			tr[i].style.display = "none";
			td = tr[i].getElementsByTagName("td");
			
			for (var j = 0; j < td.length; j++) {
				cell = tr[i].getElementsByTagName("td")[j];
				
				if (cell) {
					if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
						tr[i].style.display = "";
						break;
					} 
				}
			}
		}

        console.log("Other content hidden from:", hideTD_User); // Who is logged in
        console.log("User's ID:", hideTD_ID); // User's ID

		document.querySelectorAll('#feedbackTable tbody tr:nth-child(3)').forEach(el=>el.style.display = 'none');
		document.querySelectorAll('#feedbackTable tbody tr:nth-child(5)').forEach(el=>el.style.display = 'none');
		document.querySelectorAll('#feedbackTable tbody tr:nth-child(6)').forEach(el=>el.style.display = 'none');
		document.querySelectorAll('#feedbackTable tbody tr:nth-child(7)').forEach(el=>el.style.display = 'none');

    }

	// ----------------------------- NORMAL USER - m113 --------------------------------------------------------------------------------------- Tan Lee Seng
    if (hideTD_User === "Tan Lee Seng" && hideTD_ID === "m113") {
		var input, filter, table, tr, td, cell, i, j;
		input = document.getElementById("filterInput");
		filter = input.value.toUpperCase();
		table = document.getElementById("feedbackTable");
		tr = table.getElementsByTagName("tr");
	
		for (i = 1; i < tr.length; i++) {
			// Hide the row initially.
			tr[i].style.display = "none";
			td = tr[i].getElementsByTagName("td");
			
			for (var j = 0; j < td.length; j++) {
				cell = tr[i].getElementsByTagName("td")[j];
				
				if (cell) {
					if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
						tr[i].style.display = "";
						break;
					} 
				}
			}
		}
        console.log("Other content hidden from:", hideTD_User); // Who is logged in
        console.log("User's ID:", hideTD_ID); // User's ID

		document.querySelectorAll('#feedbackTable tbody tr:nth-child(2)').forEach(el=>el.style.display = 'none');
		document.querySelectorAll('#feedbackTable tbody tr:nth-child(4)').forEach(el=>el.style.display = 'none');
		document.querySelectorAll('#feedbackTable tbody tr:nth-child(5)').forEach(el=>el.style.display = 'none');
		document.querySelectorAll('#feedbackTable tbody tr:nth-child(6)').forEach(el=>el.style.display = 'none');
		document.querySelectorAll('#feedbackTable tbody tr:nth-child(7)').forEach(el=>el.style.display = 'none');
    }

	// ----------------------------- TEST USER - m114 --------------------------------------------------------------------------------------- Dew
    if (hideTD_User === "Dew" && hideTD_ID === "m114") {
		var input, filter, table, tr, td, cell, i, j;
		input = document.getElementById("filterInput");
		filter = input.value.toUpperCase();
		table = document.getElementById("feedbackTable");
		tr = table.getElementsByTagName("tr");
	
		for (i = 1; i < tr.length; i++) {
			// Hide the row initially.
			tr[i].style.display = "none";
			td = tr[i].getElementsByTagName("td");
			
			for (var j = 0; j < td.length; j++) {
				cell = tr[i].getElementsByTagName("td")[j];
				
				if (cell) {
					if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
						tr[i].style.display = "";
						break;
					} 
				}
			}
		}
        console.log("Other content hidden from:", hideTD_User); // Who is logged in
        console.log("User's ID:", hideTD_ID); // User's ID

		document.querySelectorAll('#feedbackTable tbody tr:nth-child(2)').forEach(el=>el.style.display = 'none');
		document.querySelectorAll('#feedbackTable tbody tr:nth-child(3)').forEach(el=>el.style.display = 'none');
		document.querySelectorAll('#feedbackTable tbody tr:nth-child(4)').forEach(el=>el.style.display = 'none');
		document.querySelectorAll('#feedbackTable tbody tr:nth-child(5)').forEach(el=>el.style.display = 'none');
    }
	
}

// ----------------------------- (a2) R.E.S.E.T - T.A.B.L.E - F.U.N.C.T.I.O.N ----------------------------- This clears the input in the search bar. After clicking the "Clear Search Input", user need to click the reset button
// NOTE: The function is used when the user USES THE MOUSE to copy and paste the text in the searchbar. When the "Reset Table" button is pressed, it rerenders the entire table without removing newly added items. It's just an additional feature.
// ---------------- REF ---------------- https://stackoverflow.com/questions/56327784/how-to-reset-a-filter-list-search-box
function clearInputFields() {
	var ele = document.getElementById("searchbar");
	
	for (i = 0; i < ele.childNodes.length; i++) {
		var clearField = ele.childNodes[i];
		if (clearField) {
			switch (clearField.type) {
				case "text":
					clearField.value = "";
					clearField.dispatchEvent(new Event("keyup"));
			}
		}
	} searchFeedbackTable(); // Call searchFeedbackTable(); from (a1) to ClearInputFields() function
}

// ----------------------------- (a3) C.L.E.A.R.S - S.E.A.R.C.H - B.O.X ----------------------------- Remove all text input within search fields
// NOTE: The button that controls "Clear Search Input ". To clear the search bar, the callback function of " searchFeedbackTable at (a1) is added to this function. They need to work together to produce the desired results. "
// ---------------- REF ---------------- https://stackoverflow.com/questions/569357/clear-all-html-fields-using-javascript
function clrSearchTextInput() {
    var clearSearchTxtInput = document.getElementsByClassName("search_q");
	window.alert("Search box form input field is cleared. \nPlease click the 'Reset Table' to rerender database.");
    for (var i=0; i < clearSearchTxtInput.length; i++) {
        if (clearSearchTxtInput[i].type == "search") {
            clearSearchTxtInput[i].value = "";
        }
    }
}	
// ---------------- addEventListener to Search Clear Input button to clear text inputs from the SEARCH BOX field.
document.getElementById("sclrFormBtn").addEventListener("click", clrSearchTextInput); 
// [[ END OF A ]]
