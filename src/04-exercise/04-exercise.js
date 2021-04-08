// Uncomment these lines if you want to see the result in the browser
// (() => localStorage.setItem("ex-04-city", "Sevilla"))();
// (() => localStorage.setItem("ex-04-name", "Ana Parks"))();
// (() => localStorage.setItem("ex-04-country", "Spain"))();

function exercise04() {
  // Complete the code of the function

  let city = localStorage.getItem("ex-04-city");
  let name = localStorage.getItem("ex-04-name");
  let country = localStorage.getItem("ex-04-country");

  document.querySelector(".city").textContent = city;
  document.querySelector(".name").textContent = name;
  document.querySelector(".country").textContent = country;

  localStorage.clear();
}

export default exercise04;
