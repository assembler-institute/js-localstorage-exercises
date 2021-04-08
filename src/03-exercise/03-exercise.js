function exercise03() {
  // Complete the code of the function

  let storage = localStorage.getItem("ex-03-city");

  document.getElementById("name").textContent = storage;

  localStorage.removeItem("ex-03-city");
}

export default exercise03;
