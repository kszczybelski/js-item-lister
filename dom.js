const form = document.getElementById('add-form');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');
//Form submit event
form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click', deleteItem);
//Filter event
filter.addEventListener('keyup', filterItems);
//Add item
function addItem(e) {
    e.preventDefault();
    //console.log(1);

    //Get input value
    const newItem = document.getElementById('item').value;
    //Create new li element
    if (newItem != 0) {
    const li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
        //Create delete button element
    const deleteBtn = document.createElement('button');
    //Add class for button delete
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //Append button
    li.appendChild(deleteBtn);
    //Append li to list
    itemList.appendChild(li);
    }else{
        alert('Enter new items !');
    }
    
    
}

//Delete items
function deleteItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You sure?')) {
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
//Filter items
function filterItems(e) {
    // convert text to lowercase
    const text = e.target.value.toLowerCase();
    //console.log(text);
    //Get list
    const items = itemList.getElementsByTagName('li');
    //console.log(items);
    //Convert to an array
    Array.from(items).forEach(function (item) {
        const itemValue = item.firstChild.textContent;
        //console.log(itemName);
        if (itemValue.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}

