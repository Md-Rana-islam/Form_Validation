function validation(){
    let userName = document.getElementById('username'),
        userEmail = document.getElementById('useremail'),
        nameErorr = document.getElementById('name_erorr'),
        emailErorr = document.getElementById('email_erorr');
    
    if(userName.value == ''){
        nameErorr.innerHTML = 'Please Enter Your Name';
        return false;
    }
    else{
        nameErorr.innerHTML = '';
    }
    if(userEmail.value == ''){
        emailErorr.innerHTML = 'Please Enter Your Email';
        return false;
    }
    else{
        emailErorr.innerHTML = '';
    }
}

