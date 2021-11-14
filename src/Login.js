import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <h2>login</h2>
      <div className="login_logo">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbeeimg.com%2Fimages%2Ff67507130903.png&f=1&nofb=1"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
