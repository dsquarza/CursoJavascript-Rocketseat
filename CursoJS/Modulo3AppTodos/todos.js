var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var bntElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('listTodos')) || [];

function renderTodos(){
    listElement.innerHTML = '';
    for (todo of todos){
        var todosElement = document.createElement("li");
        var text = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');

        var posicao = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ posicao +')');
        var linkText = document.createTextNode('Excluir');


        linkElement.appendChild(linkText);    
        todosElement.appendChild(text);
        todosElement.appendChild(linkElement);
        listElement.appendChild(todosElement);
    }
}
renderTodos();

function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value ='';
    renderTodos();
    saveToStorage();
}

bntElement.onclick = addTodo;

function deleteTodo(posicao){
    todos.splice(posicao, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('listTodos', JSON.stringify(todos));
}