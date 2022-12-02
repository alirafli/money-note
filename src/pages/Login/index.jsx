import React, { useState } from "react";
import { Button, Input, Text } from "../../components";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

const Login = () => {
  const [LoginData, setLoginData] = useState({ username: "", password: "" });
  const { login } = useUserContext();

  const handleChange = (e) => {
    setLoginData({
      ...LoginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(LoginData);
    login('this is token');
  };

  return (
    <div className="text-center">
      <div className="mt-12">
        <Text variant="h1" weight="semiBold">
          MoneyNote
        </Text>
        <Text variant="p1" className="pt-5">
          Login
        </Text>
      </div>
      <form
        className="mx-auto px-5 w-10/12 lg:w-5/12 mt-10"
        onSubmit={handleSubmit}
      >
        <Input placeholder="Username" name="username" onChange={handleChange} />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          autoComplete="on"
          onChange={handleChange}
        />
        <Button className="w-fit my-5" type="submit">
          Login
        </Button>
        <Text variant="p2" weight="normal">
          Belum memiliki akun?
          <Link to="/register">
            <b> Register</b>
          </Link>
        </Text>
      </form>
    </div>
  );
};

export default Login;
