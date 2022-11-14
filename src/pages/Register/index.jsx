import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, Text } from "../../components";

const Register = () => {
  const [RegisterData, setRegisterData] = useState({
    username: "",
    password: "",
    tempatKerja: "",
    jmlKaryawan: "",
  });

  const handleChange = (e) => {
    setRegisterData({
      ...RegisterData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(RegisterData);
  };

  return (
    <div className="text-center">
      <div className="mt-12">
        <Text variant="h1" weight="semiBold">
          MoneyNote
        </Text>
        <Text variant="p1" className="pt-5">
          Register
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
        <Input
          placeholder="nama Tempat Kerja"
          name="tempatKerja"
          onChange={handleChange}
        />
        <Input
          placeholder="Karyawan"
          name="jmlKaryawan"
          onChange={handleChange}
        />
        <Button className="w-fit my-5" type="submit">
          Register
        </Button>
        <Text variant="p2" weight="normal">
          Sudah memiliki akun?
          <Link to="/login">
            <b> Login</b>
          </Link>
        </Text>
      </form>
    </div>
  );
};

export default Register;
