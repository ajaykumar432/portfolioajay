function signin(){
    let x = document.querySelector("#email").value 
    let y = document.querySelector("#psw").value 

    let storedemail = localStorage.getItem("email")
    console.log(storedemail);
    let storedpassword = localStorage.getItem("password")
    console.log(storedpassword);

    if(x===storedemail && y===storedpassword){
        alert("login successfull")
    }
    else{
        alert("Incorrect email or password")
    }
}