const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('botao', (e) => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    e.preventDefault();

    //transformar os dados em JSON
    const userDate = JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value
    })

    fetch("http://10.92.198.38:8080/auth/signin", {
        method: "Post",
        body: userDate,
        headers: { 'Content-Type': 'application/json ; charset=UTF-8' }
    }).then(result => result.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
        
})

console.log('aplicacao foi')