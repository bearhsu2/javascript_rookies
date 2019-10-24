var send = document.querySelector('.send');

send.addEventListener('click', signup, false);

function signup() {

    var email = document.querySelector('.email').value;
    var password = document.querySelector('.password').value;

    var account = {
        email: email,
        password: password
    }

    var accountStr = JSON.stringify(account);

    var xhr = new XMLHttpRequest();
    xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup',true);
    xhr.setRequestHeader('Content-type','application/json');
    xhr.send(accountStr);
    xhr.onload = function () {

        var response = JSON.parse(xhr.responseText);

        alert(response.message);
    }

}
