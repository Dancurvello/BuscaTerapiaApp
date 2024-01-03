import { useState } from "react";
import GoogleSignIn from "./GoogleSignIn";
import "./FormLogin.css";

const FormLogin = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleRegisterClick = () => {
    setIsLoginForm(false);
  };

  const handleBackToLoginClick = () => {
    setIsLoginForm(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen gradient-background ">
      <div
        className={`w-529 h-771 flex-shrink-0 bg-fefffe rounded-30 shadow-3xl flex flex-col items-center rounded-lg justify-center ${
          isLoginForm ? "login-form" : "register-form"
        }`}
      >
        <div
          className="p-20 rounded-lg mb-8"
          style={{ paddingTop: "30px", paddingBottom: "30px" }}
        >
          <div className="text-center">
            <h1
              className="text-4xl font-bold mb-4 text-black font-poppins"
              style={{ paddingBottom: "30px" }}
            >
              Registrar
            </h1>
          </div>
          <form action="" method="post">
            <div className="mb-4" style={{ paddingBottom: "8px" }}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 font-poppins"
              ></label>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                id="email"
                className="mt-1 p-2 w-full border-none rounded-full shadow-4xl"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 font-poppins"
              ></label>
              <input
                type="password"
                name="password"
                placeholder="Senha"
                id="password"
                className="mt-1 p-2 w-full border-none rounded-full shadow-4xl "
                required
              />
            </div>
            <div className="flex justify-end">
              <p
                className="text-gray-400 font-lato text-sm"
                style={{ paddingBottom: "30px" }}
              >
                Esqueceu a senha?
              </p>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300 font-poppins font-bold"
              >
                Entrar
              </button>
              <br />
              <br />
              <GoogleSignIn />
            </div>
          </form>
        </div>
        <div>
          {isLoginForm ? (
            <div>
              <p>Não tem uma conta?</p>
              <div style={{ paddingBottom: "25px" }}>
                <a
                  href="/register"
                  className="text-blue-500"
                  onClick={handleRegisterClick}
                >
                  Registrar-se
                </a>
              </div>
            </div>
          ) : (
            <div>
              <p>Já tem uma conta?</p>
              <div style={{ paddingBottom: "25px" }}>
                <a
                  href="/login"
                  className="text-blue-500"
                  onClick={handleBackToLoginClick}
                >
                  Voltar para o login
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
