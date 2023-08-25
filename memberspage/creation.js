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


// ---------------------------------------------------------- a) Declare Variables 
var memArray = [];
var newArr = [];
var msg;

// ---------------------------------------------------------- b) This function is to create and object based on the parameters passed in
function MemberObj(id, name, pswd, role) {
    this.id = id;
    this.name = name;
    this.pswd = pswd;
    this.role = role;
}

// ---------------------------------------------------------- c) Push existing memebers
function existingMembers() {
    var member1 = new MemberObj("m111", "Lim Teng Chwee", "pw111", "Admin");
    var member2 = new MemberObj("m112", "Chua Li Choo", "pw112", "Resident");
    var member3 = new MemberObj("m113", "Tan Lee Seng", "pw113", "Resident");
    var member4 = new MemberObj("m114", "Dew", "pw114", "Resident"); 

    memArray = [member1, member2, member3, member4];
    console.log("myArray:", memArray);
}

//---------------------------------------------------------- d) This function is to create NEW MEMBER and NEW object based on the parameters passed in 
function customCreateMember(uMemID, uMemName, uMemPswd, uMemRole) {
    var member = new MemberObj(uMemID, uMemName, uMemPswd, uMemRole);
    memArray.push(member);
}

// ---------------------------------------------------------- e) Input parameters to add new members using the submit form  
function addMember() {
    var uMemID = document.getElementById("memID").value;
    var uMemName = document.getElementById("memName").value;
    var uMemPswd = document.getElementById("memPswd").value;
    var uMemRole = document.getElementById("memRole").value;
    customCreateMember(uMemID, uMemName, uMemPswd, uMemRole);
}

// ---------------------------------------------------------- f) Prepare list members message to print display in HTML page  
function prepareHTMLMsg() {
	msg = "<table id='myTable' align='right' border=0 cellspacing='4'><th>ID</th><th>Name</th><th>Password</th><th>Role</th>";

    for(let i=0; i<memArray.length; i++){
        if (memArray[i]) {
            msg += "<tr><td>" + memArray[i].id + "</td>" + "<td>" + memArray[i].name + "<td>" + memArray[i].pswd + "</td>" + "<td>" + memArray[i].role + "</td></tr>";
            newArr.push(memArray[i]);
            
        } 
    }

    msg += "</table>";
    return msg;
}
