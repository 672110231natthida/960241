function addFriend() {
  const name = document.getElementById("friendInput").value;
  if (name) {
    const li = document.createElement("li");
    li.textContent = name + " ";
    const btn = document.createElement("button");
    btn.textContent = "x";
    btn.onclick = () => li.remove();
    li.appendChild(btn);
    document.getElementById("friendList").appendChild(li);
    document.getElementById("friendInput").value = "";
  }
}
