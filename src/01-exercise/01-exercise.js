(() => localStorage.setItem("ex-01-name", "Alex Parks"))();

function exercise01() {
  // Complete the code of the function

  let name = localStorage.getItem("ex-01-name");
  let heading = document.getElementById("name");

  heading.textContent += ` ${name}`;
}

export default exercise01;
