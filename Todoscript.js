document.getElementById("addTask").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(removeButton);
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
});