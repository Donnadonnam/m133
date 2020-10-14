function addToDoList(event) {
  event.preventDefault();
  var text = document.getElementById("input-field").value;
  if (text == "")
    return false;

  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  ul.appendChild(li);
  document.getElementById("input-field").value = "";
  return false;
}

var form = document.getElementById("input");
form.addEventListener("submit", addToDoList);