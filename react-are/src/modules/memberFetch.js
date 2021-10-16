const fetchOption = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
  credentials: "include",
};

const fetchLogin = async (u_id, u_pw) => {
  fetchOption.body = JSON.stringify({ u_id, u_pw });
  const res = await fetch("http://localhost:5000/users/login", fetchOption);
  console.log("res", res);

  const users = await res.json();

  console.table(users);
};

const fetchUser = () => {};

const fetchJoin = () => {};

export { fetchLogin };