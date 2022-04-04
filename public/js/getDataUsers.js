

const datos = [
    {
        "id_user": "US001",
        "name_user": "pablo_61",
        "email": "pabloper@email.com",
        "rol": "admin",
    },
    {
        "id_user": "US002",
        "name_user": "joel32",
        "email": "joel32@email.com",
        "rol": "employe",
    },
    {
        "id_user": "US003",
        "name_user": "felipe",
        "email": "pablozas@email.com",
        "pasword": "1jh2ha",
        "rol": "admin",
    }
    
];

var d = '<thead class="thead-dark">'+
    '<tr>' +
    '<th>ID</th>' +
    '<th>NAMES</th>' +
    '<th>EMAIL</th>' +
    '<th>ROLE</th>' +
    '</tr>'+
    '</thead>';

$("#btnCagar").click(function () {
    for (var i = 0; i < datos.length; i++) {
        d += '<tr>' +
            '<td>' + datos[i].id_user + '</td>' +
            '<td>' + datos[i].name_user + '</td>' +
            '<td>' + datos[i].email + '</td>' +
            '<td>' + datos[i].rol + '</td>' +
            '</tr>';
    }
    $("#table_data_users").append(d);
});