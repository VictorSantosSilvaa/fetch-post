/* const formulario = document.getElementById('meuFormulario');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');


formulario.addEventListener('botao', (e) => {


    e.preventDefault();

    //transformar os dados em JSON
    const userData = JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value
    })

    fetch("http://10.92.198.38:8080/auth/signup", {
        method: "POST",
        body: userData,
        headers: { 'Content-Type': 'application/json ; charset=UTF-8' }
    }).then(result => result.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    console.log(userData)
}) */

const button = document.getElementById("botao");
const nameu = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

button.addEventListener("click", function (event) {

    event.preventDefault();

    const userData = JSON.stringify({
        name: nameu.value,
        email: email.value,
        password: password.value,

    });
    console.log(userData)

    fetch("http://10.92.198.38:8080/auth/signup", {
        method: "POST",
        body: userData,
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data)
            window.location.href = "/login/index.html";
        })
        .catch((err) => {
            console.log(err)
        });
});