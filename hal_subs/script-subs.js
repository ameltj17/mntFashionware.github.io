function validate_form(){
  if(validate_name() && validate_email() && validate_phone() && validate_country() && check_agree()){
    document.getElementById('message').innerText = 'You have successfully subscribed to our newspaper!'
    return
  }
  return
}

function validate_name(){
  var name = document.getElementById('name').value
  if(name.length < 1){
    document.getElementById('alert-msg').innerText = '*You have not inputted full name'
    return false
  }
  if(name.includes('1') || name.includes('2') || name.includes('3') || name.includes('4') || name.includes('5') || name.includes('6') || name.includes('7') ||name.includes('8') || name.includes('9') || name.includes('0')){
    document.getElementById('alert-msg').innerText = '*Name can not contain any numbers'
    return false
  }
  document.getElementById('alert-msg').innerText = ''
  return true
}

function validate_email(){
  var email = document.getElementById('email').value
  if(email.length < 1){
    document.getElementById('alert-msg').innerText = '*You have not inputted email'
    return false
  }
  if((!email.includes('@') || (!email.includes('gmail') && !email.includes('yahoo') && !email.includes('outlook')) || (!email.includes('.com') && !email.includes('.co.id')))){
    document.getElementById('alert-msg').innerText = '*Please entered a valid email'
    return false
  }
  document.getElementById('alert-msg').innerText = ''
  return true
}

function validate_pass(){
  var pass = document.getElementById('pass').value
  if(pass.length < 1){
    document.getElementById('alert-msg').innerText = '*You have not inputted password'
    return false
  }
  if(pass.length >= 1 && pass.length < 8){
    document.getElementById('alert-msg').innerText = '*Password length must be 8 digits or more'
    return false
  }
  if(!pass.includes('1') && !pass.includes('2') && !pass.includes('3') && !pass.includes('4') && !pass.includes('5') && !pass.includes('6') && !pass.includes('7') && !pass.includes('8') && !pass.includes('9') && !pass.includes('0')){
    document.getElementById('alert-msg').innerText = '*Password must contain at least one number'
    return false
  }
  if(pass.includes('!') || pass.includes('~') || pass.includes('`') || pass.includes('@') || pass.includes('#') || pass.includes('$') || pass.includes('%') || pass.includes('^') || pass.includes('&') || pass.includes('*') || pass.includes('(') || pass.includes(')') || pass.includes('_') || pass.includes('-') || pass.includes('+') || pass.includes('=') || pass.includes('{') || pass.includes('}') || pass.includes('[') || pass.includes(']') || pass.includes('|') || pass.includes('/') || pass.includes(':') || pass.includes(';') || pass.includes('"') || pass.includes('<') || pass.includes('>') || pass.includes(',') || pass.includes('.') || pass.includes('?')){
    document.getElementById('alert-msg').innerText = '*Password can not contain any special characters'
    return false
  }
  document.getElementById('alert-msg').innerText = ''
  return true
}

function validate_phone(){
  var phone = document.getElementById('phone').value
  if(phone.length < 1){
    document.getElementById('alert-msg').innerText = '*You have not inputted phone number'
    return false
  }
  if(phone.length >= 1 && phone.length < 10){
    document.getElementById('alert-msg').innerText = '*Phone number length must be 10 digits or more'
    return false
  }
  document.getElementById('alert-msg').innerText = ''
  return true
}

function validate_country(){
  var country = document.getElementById('country').value
  if(country == "choose"){
    document.getElementById('alert-msg').innerText = '*Country must be choosed'
    return false
  }
  document.getElementById('alert-msg').innerText = ''
  return true
}

function check_agree(){
  var agree = document.getElementById('agree').checked
  if(agree == false){
    document.getElementById('alert-msg').innerText = 'You have to agree with our Terms and Conditions'
    return false 
  }
  document.getElementById('alert-msg').innerText = ''
  return true
}

