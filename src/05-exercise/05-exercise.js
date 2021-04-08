function exercise05() {
  // Complete the code of the function

  let city = localStorage.getItem("ex-05-city");

  if (city) {
    document.querySelector("#name").textContent = city;
  } else {
    localStorage.setItem("ex-05-city", "Barcelona");
    document.querySelector("#name").textContent = "Barcelona";
  }
}

export default exercise05;
