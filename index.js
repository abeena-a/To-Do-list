const inputTask = document.getElementById("inputTask");
const btnAdd = document.getElementById("btnAdd");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

btnAdd.addEventListener('click', () => {

    if (inputTask.value.trim() === '') {
        alert("Enter your task before click on Add button");

    }
    else {
        emptyMessage.style.display = "none";
        const taskItem = document.createElement("li");
        taskItem.className = "list-group-item d-flex justify-content-between align-items-center mb-2 p-3";

        taskItem.innerHTML = `
                                <div class="d-flex text-start">
                                    <input type="checkbox" class="form-check-input me-2 border-black">
                                    
                                    <span class="me-2">${inputTask.value}</span>
                                </div>
                                <div class="d-flex flex-row">
                                    <button class="btn btn-sm btn-dark me-2">Edit</button>
                                    <button class="btn btn-sm btn-danger">Delete</button>
                                </div>
                             `;


        taskList.appendChild(taskItem);


        inputTask.value = '';
        inputTask.focus();

        const btnEdit = taskItem.querySelector(".btn-dark");
        const btnDelete = taskItem.querySelector(".btn-danger");




        btnEdit.addEventListener('click', () => {


            const span = taskItem.querySelector("span");
            const updatedTask = prompt("Update Your Task : " + span.textContent);
            console.log(updatedTask);
            

            if (updatedTask.trim()) {
                span.textContent = updatedTask;
            }

        })



        // btnDelete.addEventListener('click', () => {
        //     const span = taskItem.querySelector("span"); 
        //     const confirmDelete = confirm("Are you sure you want to delete this task: '" + span.textContent + "' ?");

        //     if (confirmDelete) {
        //         taskItem.remove();

        //     }
        //     if (taskList.children.length === 0) {
        //         emptyMessage.style.display = "block";
        //     }
        // });

        btnDelete.addEventListener('click', () => {
  const span = taskItem.querySelector("span");
  const confirmDelete = confirm("Are you sure you want to delete this task: '" + span.textContent + "' ?");

  if (confirmDelete) {
    taskItem.remove();
  }

  // Check if only the emptyMessage remains
  if (taskList.querySelectorAll("li:not(#emptyMessage)").length === 0) {
    emptyMessage.style.display = "block";
  }
});


        const tickCheckbox = taskItem.querySelector("input[type=checkbox]");

        tickCheckbox.addEventListener('click', () => {
            const span = taskItem.querySelector("span");
            if (tickCheckbox.checked) {
                span.style.textDecoration = "line-through";
                btnEdit.disabled = true;
            }
            else {
                // taskItem.className = "d-flex justify-content-between align-items-center mb-2 p-3";
                span.style.textDecoration = "none";
                btnEdit.disabled = false;


            }
        });



    }

})

