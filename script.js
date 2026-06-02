let items = [];
window.prompt();
function addItems(){

    let input = document.getElementById("intext");

    

    let text = input.value;

    if(text == ""){
        alert("Please enter the text");
        return; 
    }

    let newitems = {
        id: Date.now(),
        text: text
    };

    items.push(newitems);

   
listItems();
    input.value = "";
}
function listItems(){
    let listItem = document.getElementById("listItem");
    listItem.innerHTML="";
     for (let i = 0; i < items.length; i++) {
        let li = document.createElement("li");
        li.setAttribute("data-id", items[i].id);
    li.innerHTML = `
        <span>${items[i].text}</span>

        <div>
            <button onclick="editItem(${items[i].id})">
                Edit
            </button>

            <button onclick="deleteItem(${items[i].id})">
                Delete
            </button>
        </div>
    `;

    listItem.appendChild(li);
        
     }
    
}
function deleteItem(id){

    items = items.filter(item => item.id !== id);

    let li = document.querySelector(`[data-id='${id}']`);

    li.remove();
    listItems();
}

function editItem(id){

    let item = items.find(item => item.id === id);

    let updatedText = prompt("Edit task", item.text);

    if(updatedText !== null && updatedText !== ""){

        item.text = updatedText;

        let li = document.querySelector(`[data-id='${id}']`);

        li.querySelector("span").innerText = updatedText;
    }
    listItems();
}