/* add event listener to the Add button that will listen for a click
   when clicked, add the item to the list
*/
document.getElementById("add-button").addEventListener("click", function () {
  // selecting the text input, and placing the value inside of the variable value
  let value = document.getElementById("task-input").value;
  console.log(value);

  // if there is content
  if (value) {
    addItemToList(value);
    // selects the text input and resets the value to "" (nothing)
    document.getElementById("task-input").value = "";
  }
});

/* 
   add event listener to the input that will listen for a keypress
   when Enter is pressed, add the item to the list
*/
document
  .getElementById("task-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      let value = document.getElementById("task-input").value;
      if (value) {
        addItemToList(value);
        document.getElementById("task-input").value = "";
      }
    }
  });

function addItemToList(value) {
  // selects the list and assigns it to a variable called list
  // <ul id="list"></ul>
  let list = document.getElementById("listItem");

  // creating a li element and assigns it to a variable called item
  // <li></li>
  let item = document.createElement("p");

  // add the class "item" to the element
  // <li class="item"></li>
  item.classList.add("item");
  console.log("this is some random junk to see if I can force a merge conflict");

  // creating a input element and assigns to a variable called checkbox
  // <input />
  let checkbox = document.createElement("input");

  // add the class "checkbox" to the element
  // <input class="checkbox" />
  checkbox.classList.add("checkbox");

  // add the type "checkbox" to the element
  // <input class="checkbox" type="checkbox" />
  checkbox.type = "checkbox";

  // add event listener that listens for a change
  // make the checkbox work by adding or removing a line through the task
  checkbox.addEventListener("change", function () {
    // toggle the class "line-through" to the element
    // if span doesn't have class "line-through": <span class="line-through"></span>
    // if span does have class "line-through">: <span></span>
    taskContent.classList.toggle("line-through");
  });

  // creating a span element and assigning it to a variable called taskContent
  // <span></span>

  // adding the checkbox input element to the li
  /*
     <li>
        <input class="checkbox" type="checkbox" />
     </li>
  */
  item.appendChild(checkbox);

  // adding the span element to the li
  /*
     <li>
        <input class="checkbox" type="checkbox" />
        <span class="task-content">value</span>
     </li>
  */
  item.appendChild(taskContent);

  // adding the delete button element to the li
  /*
     <li>
        <input class="checkbox" type="checkbox" />
        <span class="task-content">value</span>
        <button class="delete-button">Delete</button>
     </li>
  */
  item.appendChild(deleteButton);

  // adding the list item (<li></li>) to <ul id="list"></ul>
  list.appendChild(item);
}
