function exercise07() {
  let users = [
    {
      name: "alex",
      age: 24,
    },
    {
      name: "ana",
      age: 34,
    },
  ];

  // Complete the code of the function

  localStorage.setItem("ex-07-users", JSON.stringify(users));
}

export default exercise07;
