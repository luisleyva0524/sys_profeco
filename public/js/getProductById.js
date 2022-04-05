

const formSendId = document.getElementById("send_id");

formSendId.addEventListener("submit", (event) => {
   event.preventDefault();
   let id_product = document.getElementById("id_product").value; 
   const url = 'http://localhost:3000/sys/profeco/products/' + id_product;

   fetch(url, {
         method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
   })
       .then( response => response.json())
       .then(data => viewData(data))
       .catch( error => console.log(error))
       

        const viewData = (data) => {
            console.log(data);
            let body = "";
            for (var i = 0; i < data.length; i++) {
                body += `<tr>    
        <td>${data[i].id_product}</td>
        <td>${data[i].name}</td>
        <td>${data[i].price}</td>
        <td>${data[i].fk_product}</td>
        </tr>`
            }            
            document.getElementById('data').innerHTML = body
        }
        
});














