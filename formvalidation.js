function validationForm(){
// label 'for'name is given along with const
//  input id name want to given in bracket

    const name = document.getElementById('exampleInputname').value.trim();
    const email = document.getElementById('exampleInputEmail').value.trim();
    const password=document.getElementById('exampleInputPassword').value.trim();
    const phone = document.getElementById('exampleInputelephone').value.trim();
    let isValid = true;

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('phnError').textContent = '';

 if(name===''){
  document.getElementById('nameError').style.color='red';
  document.getElementById('nameError').textContent='name is required!';
  isValid=false;
    }else{
      document.getElementById('nameError').style.color='green';
      document.getElementById('nameError').textContent='name added successfully'
    }
   


  if(email===''){
    document.getElementById('emailError').style.color='red';
    document.getElementById('emailError').textContent = 'email is mandatory!';
    isValid=false; 
    }else{
      document.getElementById('emailError').style.color='green';
      document.getElementById('emailError').textContent='email added successfully'
    }

   if(password.length<8){
    document.getElementById('passwordError').style.color='red';
        document.getElementById('passwordError').textContent = 'Password is mandatory!(contain atleast 8 characters)';
       isValid=false;
  }else{
    document.getElementById('passwordError').style.color='green';
    document.getElementById('passwordError').textContent='password is added successfully'
  }

     if(phone.length<10){     
      document.getElementById('phnError').style.color='red';    
       document.getElementById('phnError').textContent = 'contact number is mandatory!(must contain 10 characters)';        
        isValid=false;
    }else{
      document.getElementById('phnError').style.color='green';
      document.getElementById('phnError').textContent='contact added successfully'
    }
  return isValid;
}