function addPost(post) {
    const table = $("#aaa");
    const tr = document.createElement("tr");
    console.log(post);
    const idCell = document.createElement("td");
    idCell.innerText = post.id;
    tr.appendChild(idCell);
    const titleCell = document.createElement("td");
    titleCell.innerText = post.title || "";
    tr.appendChild(titleCell);
    const authorCell = document.createElement("td");
    authorCell.innerText = post.author || "";
    tr.appendChild(authorCell);
    table.append(tr);
}
function custom(e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const post = Object.fromEntries(form.entries());
  console.log(post);
  $.post("http://localhost:3000/posts", post, function (response) {
    addPost(post)
  });
}
window.onload = function () {
  $.get("http://localhost:3000/posts", function (data) {
    data.forEach((post) => {
    addPost(post)
    });
  });
};
