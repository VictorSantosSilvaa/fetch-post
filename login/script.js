const formulario = document.getElementById('meuFormulario');

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

})