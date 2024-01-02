// FormLogin.jsx

const FormLogin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-529 h-771 flex-shrink-0 bg-white rounded-25 shadow-3xl flex flex-col items-center rounded-lg justify-center">
        <div className="p-20 rounded-lg mb-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-black font-poppins">
              Entrar
            </h1>
          </div>
          <form action="" method="post">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 font-poppins"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="exemplo@email.com"
                id="email"
                className="mt-1 p-2 w-full border rounded-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 font-poppins"
              >
                Senha
              </label>
              <input
                type="password"
                name="password"
                placeholder="senha"
                id="password"
                className="mt-1 p-2 w-full border rounded-full"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 font-poppins"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
