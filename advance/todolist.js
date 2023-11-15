//Khởi tạo dữ liệu
const todoList = [
  {
    content: "",
    status: false,
  },
  {
    content: "quét nhà",
    status: true,
  },
];

// localStorage.setItem("todolist", JSON.stringify(todoList)); //

function renderTodo() {
  const getData = JSON.parse(localStorage.getItem("todolist"));
  const listTodo = document.querySelector("#myUL");
  listTodo.innerHTML = "";
  getData.forEach((item, index) => {
    listTodo.innerHTML += `

        <li class="li">
         <div class="search__input">
          <input type="checkbox" onclick="updateTodo('${index}')"/>
          <span style="text-decoration:${
            item.status ? "line-through" : "none"
          }">${item.content}</span>
         </div>

          <div class="icon">
          <i class="fa-solid fa-pen fa-lg"  style="color: #eb5505;   cursor: pointer;",></i>
          <i onclick="deleteContent(${index})" class="fa-solid fa-trash fa-lg" style="color: #f70233;cursor: pointer;"></i>
          </div>

        </li>
      `;
  });
}
renderTodo();

//add

function addTodo() {
  const inputElement = document.querySelector("#myInput");
  const inputValue = inputElement.value;

  const newTodo = {
    content: inputValue,
    status: false,
  };

  const localData = JSON.parse(localStorage.getItem("todolist"));

  localData.push(newTodo);

  localStorage.setItem("todolist", JSON.stringify(localData));

  document.querySelector("#myInput").value = "";
  renderTodo();
}

//delete

function deleteContent(index) {
  const dataContent = JSON.parse(localStorage.getItem("todolist"));

  dataContent.splice(index, 1);

  localStorage.setItem("todolist", JSON.stringify(dataContent));

  renderTodo();
}

// update

function updateTodo(index) {
  const dataLocal = JSON.parse(localStorage.getItem("todolist"));

  const newData = dataLocal.map(function (item, i) {
    if (index == i) {
      return {
        content: item.content,
        status: !item.status,
      };
    } else {
      return item;
    }
  });

  localStorage.setItem("todolist", JSON.stringify(newData));
  renderTodo();
}
