window.addEventListener("DOMContentLoaded", function () {
  let todolist = [];
  let count,i = 0;
  let list = document.getElementById("tasklist");
  // Loop for localstorage to work nicely
  if (localStorage.getItem(localStorage.key(0))) {
    count = JSON.parse(localStorage.getItem(localStorage.key(0))).length;
  }

  //   let count = JSON.parse(localStorage.getItem(localStorage.key(i))).length;
  console.log(count);
  for (i = 0; i < count; i++) {
    // Make sure that we only read the todolist from local storage
    todolist = JSON.parse(localStorage.getItem("todolist"));
    // elements: li, deletebutton
    let litem = document.createElement("li");
    let deletebutton = document.createElement("span");
    deletebutton.classList.add("close");
    deletebutton.textContent = "\u00D7";
    deletebutton.onclick = removeButton;
    licount = `${i}`;
    litem.setAttribute("id", licount);
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
      savelocal();
    });
  });
  newElement = function () {
    let newinput = document.getElementsByClassName("name");
    taskvalue = newinput[0].value;
    // Using if(entered value is not empty) then push
    if (taskvalue.trim() !== "") {
      todolist.push({ jobname: taskvalue, jobstatus: false });
      // localStorage.setItem("todolist", JSON.stringify(todolist));
      // let ulItem = document.createElement("li");
      // // Set the content of the <li>
      // ulItem.innerHTML = taskvalue;
      // list.appendChild(ulItem);
      newinput[0].value = "";
      reloadPage();
      savelocal();
    }
  };
  // removes single li element
  function removeButton(item) {
    let x = item.target.parentElement;
    getlocal();
    // todolist = JSON.parse(localStorage.getItem("todolist"));
    todolist.splice(x.id, 1);
    // localStorage.setItem("todolist", JSON.stringify(todolist));
    savelocal();
    reloadPage();
  }
  // to not rewrite code again. reloads
  function reloadPage() {
    window.location.reload();
  }
  function savelocal() {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }
  function getlocal() {
    todolist == JSON.parse(localStorage.getItem("todolist"));
  }
});
