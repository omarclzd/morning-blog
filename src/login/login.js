import React from "react";
import Button from "../Button";
import PropType from "prop-types";

function Login({ handleLogin, type }) {
  return (
    <div>
      Login
      <Button handleLogin={handleLogin} type={type} />
    </div>
  );
}

Login.porpTypes = {
  type: PropType.string,
  handleLogin: PropType.func
};

export default Login;
