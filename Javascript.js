const Admin="admin";
const Password=12345;

const User="user";
const Password1 =23456;

function buttonF(){
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    if(Admin==name&&Password==password){
        window.open("/Admin.html");
    }
    else if(User==name&&Password1==password){
        window.open('\User.html');
    }
    else{
        alert("Error please try anagin");
    }
}