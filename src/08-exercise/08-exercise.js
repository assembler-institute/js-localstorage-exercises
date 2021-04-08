function exercise08() {
  let user = {
    name: "mark",
    age: 44,
  };

  // Complete the code of the function
  let initial = JSON.parse(localStorage.getItem("ex-08-users"));

  initial.push(user);

  localStorage.setItem("ex-08-users", JSON.stringify(initial));
}

export default exercise08;
