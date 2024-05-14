/* const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('botao', (e) => {

    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const userDate = JSON.stringify({
        email: email.value,
        password: password.value
    })
    if (email && password == userDate) {
        e.preventDefault();

        //transformar os dados em JSON


        fetch("http://10.92.198.38:8080/auth/signup", {
            method: "Post",
            body: userDate,
            headers: { 'Content-Type': 'application/json ; charset=UTF-8' }
        }).then(result => result.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    } else {

    }

}) */

const emailLogin = document.getElementById("email");
const passwordLogin = document.getElementById("password");
const button1 = document.getElementById("botao");

button1.addEventListener("click", function (event) {
    event.preventDefault();

    const userData1 = JSON.stringify({
        email: emailLogin.value,
        password: passwordLogin.value,
    });

    fetch("http://10.92.198.38:8080/auth/signin", {
        method: "POST",
        body: userData1,
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            // Verifica se a resposta da API contém um token
            if (data.token) {
                // Armazena o token no localStorage
                localStorage.setItem('token', data.token);
                console.log('Token armazenado com sucesso:', data.token);
                window.location.href = "/postagem/index.html";
            } else {
                console.log('Token não encontrado na resposta da API');
            }
        })
        .catch((err) => {
            console.log(err);
        });
});