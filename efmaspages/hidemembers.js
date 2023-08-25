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




/* ---------------------------------------------------------- 
   This lists logged in user data only and hides other users' data. 
   E.g., User Dew is logged in. Only she can view her content. 
----------------------------------------------------------  */
function hideNonMemberTDRow() {
    // ---------------- REF ---------------- https://stackoverflow.com/questions/7754013/hiding-columns-in-table-javascript
    var hideTD_User = document.getElementById("showMemberName").innerHTML = localStorage.getItem("namevalue");
    var hideTD_ID = document.getElementById("showMemberID").innerHTML = localStorage.getItem("idvalue");

    if (hideTD_User === "Chua Li Choo" && hideTD_ID === "m112") {
        console.log("Other content hidden from:", hideTD_User); // Who is logged in
        console.log("User's ID:", hideTD_ID); // User's ID

		document.querySelectorAll('#feedbackTable tbody tr:nth-child(3)').forEach(el=>el.style.display = 'none');
		document.querySelectorAll('#feedbackTable tbody tr:nth-child(5)').forEach(el=>el.style.display = 'none');
		document.querySelectorAll('#feedbackTable tbody tr:nth-child(6)').forEach(el=>el.style.display = 'none');
		document.querySelectorAll('#feedbackTable tbody tr:nth-child(7)').forEach(el=>el.style.display = 'none');
    }

    if (hideTD_User === "Tan Lee Seng" && hideTD_ID === "m113") {
        console.log("Other content hidden from:", hideTD_User); // Who is logged in
        console.log("User's ID:", hideTD_ID); // User's ID

		document.querySelectorAll('#feedbackTable tbody tr:nth-child(2)').forEach(el=>el.style.display = 'none');
		document.querySelectorAll('#feedbackTable tbody tr:nth-child(4)').forEach(el=>el.style.display = 'none');
		document.querySelectorAll('#feedbackTable tbody tr:nth-child(5)').forEach(el=>el.style.display = 'none');
		document.querySelectorAll('#feedbackTable tbody tr:nth-child(6)').forEach(el=>el.style.display = 'none');
		document.querySelectorAll('#feedbackTable tbody tr:nth-child(7)').forEach(el=>el.style.display = 'none');
    }

    if (hideTD_User === "Dew" && hideTD_ID === "m114") {
        console.log("Other content hidden from:", hideTD_User); // Who is logged in
        console.log("User's ID:", hideTD_ID); // User's ID

		document.querySelectorAll('#feedbackTable tbody tr:nth-child(2)').forEach(el=>el.style.display = 'none');
		document.querySelectorAll('#feedbackTable tbody tr:nth-child(3)').forEach(el=>el.style.display = 'none');
		document.querySelectorAll('#feedbackTable tbody tr:nth-child(4)').forEach(el=>el.style.display = 'none');
		document.querySelectorAll('#feedbackTable tbody tr:nth-child(5)').forEach(el=>el.style.display = 'none');
    }
	
}hideNonMemberTDRow(); 
