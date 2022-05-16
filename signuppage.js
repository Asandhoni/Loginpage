function loginvalidate(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
   
    if (username == "asanmohamed"){
    if (password == "asan1234") alert("Login Successful!!!");
    else alert("Login unsuccessful!!!");}
    else if (username == "dhineshbabu"){
        if (password == "dhinesh1234") alert("Login Successful!!!");
        else alert("Login unsuccessful!!!");}
    else alert ("Username Invalid");
}