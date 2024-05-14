/* const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('botao', (e) => {

    e.preventDefault();

    //transformar os dados em JSON
    const userDate = JSON.stringify({

    })


    fetch("http://localhost:8080/feed/post", {
        method: "Post",
        body: userDate,
        headers: { 'Content-Type': 'application/json ; charset=UTF-8' }
    }).then(result => result.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));

}) */


const form = document.getElementById("form");
 
form.addEventListener("submit", function (e) {
 
    const title = document.getElementById("titulo");
    const content = document.getElementById("descricao");
    const image = document.getElementById("img");
    const token = localStorage.getItem('token');
 
    e.preventDefault();
 
    const formData = new FormData();
    formData.append("image", image.files[0]);
    formData.append("title", title.value);
    formData.append("content", content.value);
 
    fetch("http://10.92.198.38:8080/feed/post", {
        method: "POST",
        body: formData,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .then((result) => result.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
})