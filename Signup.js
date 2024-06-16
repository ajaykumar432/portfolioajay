
function signup(){
    let input1 = document.querySelector("#names")
    let input2 = document.querySelector("#phone")
    let input3 = document.querySelector("#email")
    let input4 = document.querySelector("#password")
    
    if(input1.value===""){
        alert ("Please enter username")
    }
    else if(input2.value===""){
        alert("please enter contact number")
    }
    else if(input3.value===""){
        alert("please enter email")
    }
    else if(input4.value===""){
        alert("please enter password")
    }
    else{
        alert("Sign up successfull")
         localStorage.setItem("email", input3.value)
         localStorage.setItem("password", input4.value)
    }
}

