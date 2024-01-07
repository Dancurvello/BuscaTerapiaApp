import { useState } from "react";
import GoogleSignIn from "./GoogleSignIn";
import "./FormLogin.css";

const FormLogin = () => {
  const [isRegisterForm, setIsRegisterForm] = useState(false);

  const handleFormToggle = () => {
    setIsRegisterForm((prev) => !prev);
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen gradient-background ${
        isRegisterForm ? "register-form-container" : ""
      }`}
    >
      {" "}
      <div
        className={`w-529 h-771 flex-shrink-0 bg-fefffe rounded-30 shadow-3xl flex flex-col items-center rounded-lg justify-center ${
          isRegisterForm ? "register-form" : "login-form"
        }`}
      >
        <div className="p-20 rounded-lg mb-8 pt-10">
          <div className="text-center">
            <h1
              className={`text-4xl font-bold mb-4 text-black font-poppins ${
                isRegisterForm ? "flipped-text" : ""
              }`}
              style={{ paddingBottom: "30px" }}
            >
              {isRegisterForm ? "Registrar-se" : "Entrar"}
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
            {isRegisterForm && (
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-600 font-poppins"
                ></label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirmar senha"
                  id="confirmPassword"
                  className="mt-1 p-2 w-full border-none rounded-full shadow-4xl"
                  required
                />
              </div>
            )}
            <div className="flex justify-end">
              <p
                className="text-gray-400 font-lato text-sm"
                style={{ paddingBottom: "30px" }}
              >
                {isRegisterForm ? "" : "Esqueceu a senha?"}
              </p>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300 font-poppins font-bold"
              >
                {isRegisterForm ? "Registrar" : "Entrar"}
              </button>
              <div className="pt-7 text-gray-400 font-lato text-sm">
                <p>OU</p>
              </div>
              <div className="pt-7 text-1xl font-bold mb-4 text-black font-poppins">
                <p>Entrar com o google</p>
              </div>
              <div className="flex items-center justify-center">
                <GoogleSignIn isRegisterForm={isRegisterForm} />
              </div>
            </div>
          </form>
        </div>
        <div>
          <div>
            <p>{isRegisterForm ? "Já tem uma conta?" : "Não tem uma conta?"}</p>
            <div
              className="flex items-center justify-center"
              style={{ paddingBottom: "25px" }}
            >
              <button
                onClick={handleFormToggle}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                {isRegisterForm ? "Entrar" : "Registrar-se"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
