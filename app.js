const userInput = document.querySelector(".user_input");
const addUserBtn = document.querySelector(".addUser_btn");
const userContainer = document.querySelector(".user_container");

const addUser = () => {
  const inputValue = userInput.value;
  if (inputValue === "") {
  } else {
    const newLi = document.createElement("li");
    newLi.classList.add("list");
    userContainer.append(newLi);
    const newInput = document.createElement("input");
    newInput.classList.add("list_input");
    newInput.value = inputValue;
    newInput.setAttribute("readonly", true);
    const editBtn = document.createElement("button");
    editBtn.innerText = "EDIT";
    editBtn.style.background = "orange";
    editBtn.style.color = "#fff";
    editBtn.style.border = "2px solid #fff";
    editBtn.style.margin = "1rem";
    editBtn.classList.add("addUser_btn");
    editBtn.addEventListener("click", () => {
      newInput.removeAttribute("readonly", true);
      newInput.style.background = "#fff";
      newInput.style.color = "#000";
    });
    const updateBtn = document.createElement("button");
    updateBtn.innerText = "Update";
    updateBtn.style.background = "green";
    updateBtn.style.color = "#fff";
    updateBtn.style.margin = "1rem";
    updateBtn.style.border = "2px solid #fff";
    updateBtn.classList.add("addUser_btn");
    updateBtn.addEventListener("click", () => {
      newInput.setAttribute("readonly", true);
      newInput.style.background = "rgba(20, 19, 19, 0.616)";
      newInput.style.color = "#fff";
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.background = "red";
    deleteBtn.style.color = "#fff";
    deleteBtn.style.border = "2px solid #fff";
    deleteBtn.classList.add("addUser_btn");
    deleteBtn.addEventListener("click", () => {
      newLi.remove();
    });
    newLi.append(newInput, editBtn, updateBtn, deleteBtn);
    userInput.value = "";
    console.log(newLi);
  }
};

addUserBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addUser();
});
