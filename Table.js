let id =0;

document.getElementById('add').addEventListener('click', () => {
    let createDate = new Date();
    let table =document.getElementById('meals')
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('day').value;
    row.insertCell(1).innerHTML = document.getElementById('food').value;

    let actions = row.insertCell(3);
    Remove.appendChild(createDeleteButton(id++));
    document.getElementById('food').value = '';
});


