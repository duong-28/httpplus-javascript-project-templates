let shoppingListItems = []

const addItem = () => {
    let item = document.getElementById("new-item-text").value;
    shoppingListItems = [...shoppingListItems, item];
    updateItems();
    document.getElementById("new-item-text").value="";
};


const updateItems = () => {
    // First get the list element
    let listElement = document.getElementById("shopping-list-items");
    // Then we clear it of any existing items 
    listElement.innerHTML = "";

    // Then we loop through the shopping list items and add them to the list
    // for (const shoppingItem of shoppingListItems) {
    //     let itemElement = document.createElement("li");
    //     itemElement.innerText = shoppingItem;
    //     listElement.appendChild(itemElement);
    // }

    shoppingListItems.forEach((shoppingItem, index) => {
        let itemElement = document.createElement("li")
        itemElement.innerText = shoppingItem;

        // create a checkoff button
        let checkButton = document.createElement("button")
        checkButton.innerText = "Checked"
        checkButton.onclick = () => checkOffItem(index);

        // create a delete button for each item
        let deleteButton = document.createElement("button")
        deleteButton.innerText = "Remove"
        deleteButton.onclick = () => removeItem(index);

        // append the buttons and item elements to the list
        itemElement.appendChild(checkButton);
        itemElement.appendChild(deleteButton);
        listElement.appendChild(itemElement);
    });
};       

const removeItem = (index) => {
    // Remove the item at the given index
    shoppingListItems.splice(index,1);
    updateItems();
}

const checkOffItem = (index) => {
    let listElement = document.getElementById("shopping-list-items");
    let listItem = listElement.children[index];
    listItem.classList.toggle("bought");
};
   
document.getElementById("new-item-text").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {    
        addItem();
    }
});

const clearItem = () => {
    shoppingListItems = [];
    updateItems();
}