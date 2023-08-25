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



var names = ["Lim Teng Chwee", "Chua Li Choo", "Tan Lee Seng", "Dew"]; // (members name)
var userid = ["m111", "m112", "m113", "m114"]; // (members user IDs)
var passwords = ["pw111", "pw112", "pw113", "pw114"]; // (members passwords)
var role = ["Admin", "Resident", "Resident", "Resident"]; // (members roles)
// ---------------------------------------------------------------
var upwd = /^(?=.*[0-9])[a-z0-9]{5}$/; // passwords (lowercase: a-z, numbers 0-9 only)
var user_CredsValid = false; // check if input true or false
var wrapper = hyperform(window); // Custom form validate <--- runs external script for pretty validation (addon feature)
// ---------------------------------------------------------------
var stored_names = document.getElementById('stored_names');
var stored_UserID = document.getElementById('stored_UserID');
var stored_UserPwd = document.getElementById('stored_UserPwd');
var stored_UserRole = document.getElementById('stored_UserRole');

// --------------------------------------------------------------- localStorage stores users login information on brower. (bad practice)
localStorage.setItem("names", JSON.stringify(names));
localStorage.setItem("userid", JSON.stringify(userid));
localStorage.setItem("passwords", JSON.stringify(passwords));
localStorage.setItem("role", JSON.stringify(role));



// ----------------------------- L.O.G.I.N ----------------------------- 
// --------------------------------------------------------------- Stores LOGIN information using localStoroge.
function login() {
    for (var i=0; i<userid.length; i++) {
        if ((stored_UserID.value == userid[i]) && (stored_names.value == names[i]) && (stored_UserPwd.value.match(upwd) == passwords[i]) && (stored_UserRole.value == role[i])) {
            window.alert("✅ Login successful, you will be redirected to EFMAS.");
            window.open("members.html");this.close("login.html");  // open members.html

            var memberName = document.getElementById("stored_names").value
            localStorage.setItem("namevalue", memberName); // Store user name and passes this value to members.html and efmas.html pages
            var memberID = document.getElementById("stored_UserID").value 
            localStorage.setItem("idvalue", memberID); // Store user ID and passes this value to members.html and efmas.html pages
            var memberRole = document.getElementById("stored_UserRole").value 
            localStorage.setItem("rolevalue", memberRole); // Store user Role and passes this value to members.html and efmas.html pages
            
            user_CredsValid = true;
            return true;
            
        } else if (!stored_UserID.value || !stored_names.value || !stored_UserPwd.value.match(upwd) || !stored_UserRole.value) {
            // Prevent user from accessinf EFMAS portal if Credentials validation fail
            window.alert("❌ Login unsuccessful. Please fill in the required fields.");
            user_CredsValid = false;
            return false;

        } else {
            // Prevent user from accessing EFMAS portal if Credentials validation fail
            user_CredsValid = false;
        }
    }
}

  

// ----------------------------- Toggle Password Visibility ----------------------------- Click to toggle "show password" to check if entered correctly
// ---------------- REF ---------------- https://www.w3schools.com/howto/howto_js_toggle_password.asp
function showLoginPwd() {
    var pwd = document.getElementById("stored_UserPwd");
    if (pwd.type === "password") {
        pwd.type = "text";
    } else {
        pwd.type = "password";
    }
}



// ----------------------------- RESETS FORM FIELDS ----------------------------- Remove all text input within login form
// ---------------- REF ---------------- https://www.w3schools.com/jsref/met_form_reset.asp
function clrLoginFormInputs() {
    var clearInputRow = document.getElementsByTagName("input");
    window.alert("Form input field cleared!");
    for (var ii=0; ii < clearInputRow.length; ii++) {
        if (clearInputRow[ii].type == "text") {
            clearInputRow[ii].value = "";
            
        }
        if (clearInputRow[ii].type == "password") {
            clearInputRow[ii].value = "";
          
        }
    }
}
// ---------------- addEventListener to Clear Field Form button to clear text inputs from the TABLE ROW field.
document.getElementById("clrFormBtn").addEventListener("click", clrLoginFormInputs); 


