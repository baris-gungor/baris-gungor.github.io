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
    let item = document.createElement("li");
    let deletebutton = document.createElement("BUTTON");
    let tikbox = document.createElement("input");
    tikbox.type = "checkbox";
    tikbox.id = "tikbox";
    tikbox.className = "tikbox";
    deletebutton.className = "deletebutton";
    deletebutton.innerHTML = "X";
    if (todolist[i].jobstatus == true) {
      tikbox.checked = true;
    }
    // if (tikbox.checked == true) {
    //   todolist[i].jobstatus = true;
    //   console.log(tikbox.checked)
    // }
    deletebutton.onclick = function () {
      for (i = 0; i < count; i++) {
        //if(key(i)== todolist[i].jobname;
      }
      return false;
    };
    item.textContent = todolist[i].jobname;
    list.appendChild(item);
    list.appendChild(deletebutton);
    list.appendChild(tikbox);
  }
  newElement = function () {
    let newinput = document.getElementsByClassName("name");
    taskvalue = newinput[0].value;
    console.log(taskvalue);
    // Using if(entered value is not empty) then push
    if (taskvalue.trim() !== "") {
      todolist.push({ jobname: taskvalue, jobstatus: false });
      localStorage.setItem("todolist", JSON.stringify(todolist));
      let ulItem = document.createElement("li");
      // Set the content of the <li>
      ulItem.innerHTML = taskvalue;
      list.appendChild(ulItem);
    }
  };
});
