let pass1 = document.querySelector('.password');
let pass2 = document.querySelector('.c-password');
let result = document.querySelector('.result');


function checkPassword () {
    result.textContent = pass1.value == pass2.value ? 'Matching' : 'Not Matching';
}

pass1.addEventListener('keyup', () => {
    if (pass2.value.length != 0) checkPassword();
})

pass2.addEventListener('keyup', checkPassword);