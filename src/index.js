document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const createToDo = document.getElementById("new-task-description").value;
    const li = document.createElement("li");
    li.textContent = createToDo;
document.querySelector("#tasks").appendChild(li);
document.querySelector("form").reset()

  })
});

// function create(todo){
//   let p = document.createElement('p')
//   let button = document.createElement("button")
//   button.textContent = 'delete'
//   button.addEventListener('click', handleDelete)
//   console.log(p)
//   p.textContent = `${todo} `
//   document.getElementById("tasks").appendChild(p)
//   p.appendChild(button)
// }

// function handleDelete(event){
//   event.target.parentNode.remove()
// }
