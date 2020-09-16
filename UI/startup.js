//variables
const inputEl = document.querySelector(".inputEl");
const todos = document.querySelector(".todos");
const singleTodo = document.createElement("p");
const todolist = []

//Events on Html Elements

inputEl.addEventListener("change",function(someparam)
{
    console.log(someparam.target.value);
    todolist.push(someparam.target.value);
    const singleTodo = document.createElement("p")

    todolist.forEach(function(todoitem)
    {
        singleTodo.innerText = todoitem;
        console.log(todolist);

        //! Bug Todos are being repeated on each addition
        
    });
    todos.appendChild(singleTodo)
}
);
inputEl.onchange = createTodo

//