function addTwo(num :number){
    return num+2;
}

addTwo(6);


function getUpper(val:String){
    return val.toUpperCase();
}


getUpper("hello I am converting It to upper case");


function signUpUser(name:String , email : String , isPaid :boolean){
    console.log(name);
    console.log(email);
    console.log(isPaid);
}

signUpUser("hello","bye@gmail.com", false)


let  loginUser = (name:string , email:string ,
    isPaid:boolean =false)=> {}

    loginUser("hello","bye@gmail.com")
    // here we don't want to pass the isPaid value to the function
    // thats why we have wriiten isPaid = false

export{}