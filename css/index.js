window.addEventListener("DOMContentLoaded", function () {
  let todolist = [];
  let i = 0;
  let list = document.getElementById("tasklist");
  // Loop for localstorage to work nicely
  let count = JSON.parse(localStorage.getItem(localStorage.key(0))).length;
  //   let count = JSON.parse(localStorage.getItem(localStorage.key(i))).length;
  console.log(count);
  for (i = 0; i < count; i++) {
    // Make sure that we only read the todolist from local storage
    todolist = JSON.parse(localStorage.getItem("todolist"));
    // elements: li, deletebutton
    let litem = document.createElement("li");
    let deletebutton = document.createElement("BUTTON");
    deletebutton.classList.add("close");
    deletebutton.textContent = "\u00D7";
    deletebutton.onclick = removeButton;
    // checks localstorage if its clicked before 
    if (todolist[i].jobstatus == true) {
      litem.className = "checked";
    }
    // adding li and button
    litem.textContent = todolist[i].jobname;
    litem.appendChild(deletebutton);
    list.appendChild(litem);
  }
  // when you click li items
  let listItems = document.querySelectorAll("#tasklist li");
  listItems.forEach((item, index) => {
    item.addEventListener("click", (event) => {
      if (todolist[index].jobstatus == false) {
        todolist[index].jobstatus = true;
      } else if (todolist[index].jobstatus == true) {
        todolist[index].jobstatus = false;
      }
      reloadPage();
    });
  });
  newElement = function () {
    let newinput = document.getElementsByClassName("name");
    taskvalue = newinput[0].value;
    // Using if(entered value is not empty) then push
    if (taskvalue.trim() !== "") {
      todolist.push({ jobname: taskvalue, jobstatus: false });
      localStorage.setItem("todolist", JSON.stringify(todolist));
      let ulItem = document.createElement("li");
      // Set the content of the <li>
      ulItem.innerHTML = taskvalue;
      list.appendChild(ulItem);
      newinput[0].value = "";
    }
  };
  // removes single li element
  function removeButton() {
    this.parentElement.remove();
    // todolist[index].
  }
  // to not rewrite code again. reloads
  function reloadPage() {
    localStorage.setItem("todolist", JSON.stringify(todolist));
    window.location.reload();
  }
});
