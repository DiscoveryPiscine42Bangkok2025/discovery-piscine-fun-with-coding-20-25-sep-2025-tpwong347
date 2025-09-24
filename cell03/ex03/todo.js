
document.addEventListener('DOMContentLoaded', () => {
    const ftList = document.getElementById('ft_list');
    const newButton = document.getElementById('new-btn');

    const saveList = () => {
        const todos = [];
        
        ftList.querySelectorAll('.todo-item').forEach(item => {
            todos.push(item.textContent);
        });
      
        document.cookie = `todos=${JSON.stringify(todos)}; max-age=31536000; path=/`;
    };

    const loadList = () => {
        const cookies = document.cookie.split('; ');
        const todoCookie = cookies.find(row => row.startsWith('todos='));

        if (todoCookie) {
            try {
                
                const todos = JSON.parse(todoCookie.split('=')[1]);
     
                todos.reverse().forEach(todoText => {
                    createNewTodo(todoText);
                });
            } catch (e) {
                console.error("Error parsing todos from cookie:", e);
            }
        }
    };

    const createNewTodo = (text) => {
        const todoDiv = document.createElement('div');
        todoDiv.className = 'todo-item';
        todoDiv.textContent = text;

        todoDiv.addEventListener('click', () => {
  
            if (confirm(`Do you want to remove this TO DO: "${text}"?`)) {
                todoDiv.remove(); 
                saveList();
            }
        });

        ftList.prepend(todoDiv);
    };

    newButton.addEventListener('click', () => {
        const todoText = prompt("Enter a new TO DO:");

        if (todoText && todoText.trim() !== '') {
            createNewTodo(todoText.trim());
            saveList();
        }
    });

    loadList();
});