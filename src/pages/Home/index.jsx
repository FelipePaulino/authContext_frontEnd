import { useContext } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";
import { AuthContext } from "../../context/AuthContext"

export const Home = () => {
  const {signOut} = useContext(AuthContext)
  let userEmail = (localStorage.getItem('user') ?? '')


  userEmail = userEmail.replace(/[{}"]/g,"");

  return (
    
    <LayoutComponents>
        <div className="home-content">
          <h1 className="home-title">
            <span style={{ color: "black", marginLeft: "120px" }}>Bem Vindo</span>
          </h1>
          <br />          
          <p style={{ color: "black", marginLeft: "50px" }} className="home-description">
            Você esta logado como {userEmail.split(":",3)[2]}
          </p>
        </div>
      <button onClick={signOut} className="login-form-btn-signOut">sair</button>
    </LayoutComponents>
  );
};
