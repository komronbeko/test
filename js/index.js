const __form = document.querySelector("#form");
// const __todoInput = document.querySelector("#todoInput");
const __list = document.querySelector("#list");

let todos = [];

window.onclick = render(todos)


__form.addEventListener("submit", (e) =>{
    e.preventDefault()
    
    let {todoInput} = e.target.elements;

    todos.push({name: todoInput.value})

    

    render(todos)

    todoInput.value = ""

})

function deleteTodo (index){

    todos.splice(index, 1)

    render(todos)
    
}


function checkTodo(){
    
}

function render (data){
    let html = ""
    data.forEach((item, index) => {
        html += `
        <li class="item"><button onclick="checkTodo()" class="check-btn">check</button> <span class="todo">${item.name}</span> <div><button class="edit">edit</button><button onclick="deleteTodo(${index})" class="delete-btn">delete</button></div> </li>
        `
    })

    __list.innerHTML = html
}
