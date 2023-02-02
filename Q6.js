let firstName = document.querySelector('.input_fName')
let phone = document.querySelector('.input_phone')
let firstName_err = document.querySelector('.error_Firstname')
let phone_err = document.querySelector('.error_phone')


firstName.addEventListener('keyup', function () {
    let fName = firstName.value;
    if (fName.length == 0 || !fName.match(/^[A-Za-z]$/)) {
        firstName_err.innerHTML = 'Name is required'
        return false
    }
    firstName_err.innerHTML = ''
    return true;

})