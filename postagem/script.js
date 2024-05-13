const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('botao', (e) => {
    const name = document.getElementById('email');
    const email = document.getElementById('password');
    const password = document.getElementById('botao');

    e.preventDefault();

    //transformar os dados em JSON
    const userDate = JSON.stringify({
        name: email.value,
        email: password.value,
        password: botao.value
    })


    fetch("http://localhost:8080/auth/signup", {
        method: "Post",
        body: userDate,
        headers: { 'Content-Type': 'application/json ; charset=UTF-8' }
    }).then(result => result.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));

})