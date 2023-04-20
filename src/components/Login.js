import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const [error, setError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const handleClick = async (e) => {
    e.preventDefault();
   try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/1");
      console.log(data);
      setUser(data);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={!userName || !password} onClick={handleClick}>
          Login
        </button>
        <span
          data-testid="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          Something went wrong{" "}
        </span>
        <div>{user.name}</div>
      </form>
    </div>
  );
};

export default Login;
