const list = document.getElementById("taskList");
const input = document.getElementById("taskInput");

// Tamamlandı & silme işlemleri
list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed");
  } else if (e.target.className === "close") {
    e.target.parentElement.remove();
  }
});

function addTask() {
  if (input.value.trim() === "") {
    alert("Boş ekleme yapamazsın!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = input.value;

  const span = document.createElement("span");
  span.textContent = "×";
  span.className = "close";

  li.appendChild(span);
  list.appendChild(li);

  input.value = "";
}
