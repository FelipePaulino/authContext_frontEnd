import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

import isaLogo from "../../assets/isaLogo.svg"
import { LayoutComponents } from "../../components/LayoutComponents";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signIn, signed} = useContext(AuthContext)

  const handleSignIn = async (e) => {
    e.preventDefault()
    const data = {
      email,
      password
    }

    await signIn(data)
  }

  if(signed){
    return <Navigate to="/home" />
  }else{

    return (
      <LayoutComponents>
        <form className="login-form" onSubmit={handleSignIn}>
          <span className="login-form-title">
          <img src = {isaLogo} alt="isa Logo" />
          </span>

          <div className="wrap-input">
            <input
              className={email !== "" ? "has-val input" : "input"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>

          <div className="wrap-input">
            <input
              className={password !== "" ? "has-val input" : "input"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Password"></span>
          </div>

          <div className="container-login-form-btn">
            <button type="submit" className="login-form-btn">
              Login
            </button>
          </div>

          <div className="text-center">
            <span className="txt1">Não possui conta? </span>
            <Link className="txt2" to="/register">
              Criar conta.
            </Link>
          </div>
        </form>
      </LayoutComponents>
    );
  }
}

