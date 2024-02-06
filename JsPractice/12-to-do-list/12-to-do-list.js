const todoList = [
  { name: "make dinner", dueDate: "2022-12-22" },
  { name: "solve to do", dueDate: "2023-1-22" },
];
renderTodoList();
//generating html
function renderTodoList() {
  let todoListHTML = "";
  todoList.forEach(function (todoObject, index) {
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="todoList.splice(${index},1);
    renderTodoList()" class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });

  // for (let i = 0; i < todoList.length; i++) {

  // }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
//input value data
function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dueDateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dueDateInputElement.value;

  todoList.push({ name, dueDate });

  inputElement.value = "";
  dueDateInputElement.value = "";

  renderTodoList();
}
