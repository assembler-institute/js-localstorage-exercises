function exercise06() {
  // Complete the code of the function

  let list = document.querySelector(".ex-list");

  let jsonData = localStorage.getItem("ex-06-data");

  let data = JSON.parse(jsonData);

  data.forEach((item) => {
    let li = document.createElement("li");

    li.textContent = item.name;

    list.appendChild(li);
  });
}

export default exercise06;
