var password = document.getElementById("password");

password.addEventListener('keyup', function() {
    checkPassword(password.value)
})
function checkPassword(password) {
    var strengthBar = document.getElementById("strength");
    var strength = 0;
    if (password.length > 10) {
        strength += 1;
    }
    if (password.match(/[a-z]/)) {
            strength += 1;
    }
    if (password.match(/[A-Z]/)) {
        strength += 1;
    }
    if (password.match(/[0-9]/)) {
        strength += 1;
    }
    if (password.match(/[~<>?!@#$%^&*()]+/)) {
        strength += 1;
    }
    
    switch (strength) {
        case 0:
            strengthBar.value = 0;
            break;
            
        case 1:
            strengthBar.value = 20;
            break;

        case 2:
            strengthBar.value = 40;
            break;

        case 3:
            strengthBar.value = 60;
            break;
                    
        case 4:
            strengthBar.value = 80;
            break;
        case 5:
            strengthBar.value = 100;
            break;
    }
}