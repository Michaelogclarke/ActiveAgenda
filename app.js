//Fetch Todos
fetch("/todos")
  .then((response) => response.json())
  .then((todos) => {
    // Rendering todos
    todos.forEach((todo) => {
      const todoElement = document.createElement("div");
      todoElement.textContent = todo.title;
      document.body.appendChild(todoElement);
    });
  })
  .catch((error) => console.error("Error fetching todos:", error));
