/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const formDataUser = document.getElementById("send_data_user");

formDataUser.addEventListener("submit", (event) => {
    event.preventDefault();

    let id_user = document.getElementById("id_user").value;
    let name_user = document.getElementById("name_user").value;
    let email = document.getElementById("email").value;
    let pasword = document.getElementById("pasword").value;
    let rol = document.getElementById("rol").value;

    let allData = {
        id_user: id_user,
        name_user: name_user,
        email: email,
        pasword: pasword,
        rol: rol
    };

   const converJson = JSON.stringify(allData);


    fetch('http://localhost:3000/sys/profeco/users/add', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: converJson
    })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
           
});





