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



// [[ START OF LOCALSTORAGE & LOGOUT FUNCTION ]]

// ----------------------------- Retrieve user data from localStorage ----------------------------- 
document.getElementById("showMemberName").innerHTML = localStorage.getItem("namevalue");
document.getElementById("showMemberID").innerHTML = localStorage.getItem("idvalue");
document.getElementById("showMemberRole").innerHTML = localStorage.getItem("rolevalue");

// ----------------------------- Logout function ----------------------------- 
// Remove user data from localStorage, logs the user out, and sends them back to the login.html page.
var url = "login.html";
function logout() {
    window.localStorage.clear();
    window.location.reload();
    window.location.href = url;
}
window.logout = logout;

// [[ END OF LOCALSTORAGE & LOGOUT FUNCTION ]] 

