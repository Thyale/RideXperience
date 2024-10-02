import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "animate.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // Modo dark
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Mostrar inputs de Login e Registro
  const [loginShowInputs, setLoginShowInputs] = useState(true);
  function ShowInputsRegister() {
    setLoginShowInputs(false);
  }
  function ShowInputsLogin() {
    setLoginShowInputs(true);
  }

  // Confirmar se os campos estão preenchidos para registrar
  const [nomeRegistrado, setNomeRegistrado] = useState("");
  const [senhaRegistrado, setSenhaRegistrado] = useState("");
  const [emailRegistrado, setEmailRegistrado] = useState("");
  function CadastroUser() {
    if (
      nomeRegistrado === "" ||
      emailRegistrado === "" ||
      senhaRegistrado === ""
    ) {
      Swal.fire({
        title: "Error",
        text: "Preencha todos os campos antes de registrar!",
        icon: "warning",
        confirmButtonText: "OK",
      });
    } else {
      const registroDados = {
        nomeRegistradoObject: nomeRegistrado,
        emailRegistradoObject: emailRegistrado,
        senhaRegistradoObject: senhaRegistrado,
      };
      localStorage.setItem("RegistroObject", JSON.stringify(registroDados));
      setEmailLogin(emailRegistrado);
      setSenhaLogin(senhaRegistrado);
      setLoginShowInputs(true);
    }
  }

  // Verificar se o usuário está cadastrado
  const [senhaLogin, setSenhaLogin] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  function LoginUser() {
    const ConferindoUser = JSON.parse(localStorage.getItem("RegistroObject"));
    if (
      ConferindoUser &&
      ConferindoUser.emailRegistradoObject === emailLogin &&
      ConferindoUser.senhaRegistradoObject === senhaLogin
    ) {
      navigate("/motorcycles");
    } else {
      Swal.fire({
        title: "Error",
        text: "Usuário ou senha inválidos!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }

  function ForgetPassword() {
    Swal.fire({
      title: "Enviando e-mail de recuperação",
      text: "Um e-mail de recuperação foi enviado para o seu endereço cadastrado!",
      icon: "success",
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      toast: true,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }

  return (
    <div className="dark:bg-[url('/BgLoginDark.png')] bg-[url('/BgLoginLight.png')] h-screen bg-cover bg-center bg-no-repeat flex flex-col">
      <header className="flex flex-row items-center justify-end gap-4 p-5">
        <button onClick={toggleDarkMode} className="focus:outline-none">
          {darkMode ? (
            <i className="fas fa-sun dark:text-White text-Black text-2xl"></i>
          ) : (
            <i className="fas fa-moon dark:text-White text-Black text-2xl"></i>
          )}
        </button>
        <a
          onClick={ShowInputsLogin}
          className="text-black text-Black dark:text-White p-1 border-b-2 font-semibold"
          href="#"
        >
          Login
        </a>
        <button onClick={ShowInputsRegister}>
          <a
            className="bg-Black dark:bg-White dark:text-Black text-White font-semibold py-2 px-4 rounded-3xl"
            href="#"
          >
            Registre-se
          </a>
        </button>
      </header>

      <main className="mobile:w-11/12 w-8/12 flex justify-end mobile:justify-center m-auto">
        {loginShowInputs ? (
          <div
            id="Login"
            className="w-11/12 rounded-xl dark:BoxWhite shadow-2xl max-w-96 p-6 flex-col"
          >
            <h1 className="text-4xl dark:text-White text-Black font-bold text-center mb-6">
              Bem-vindo de volta!
            </h1>
            <form className="flex flex-col gap-2 w-full mb-6">
              <input
                autoComplete="off"
                className="text-BlackTransparent border-none p-2 rounded-xl outline-none"
                type="email"
                name="emailLogin"
                id="emailLogin"
                value={emailLogin}
                onChange={(e) => setEmailLogin(e.target.value)}
                placeholder="Email"
              />

              <input
                autoComplete="off"
                className="text-BlackTransparent border-none p-2 rounded-xl outline-none"
                type="password"
                name="passwordLogin"
                id="passwordLogin"
                value={senhaLogin} 
                onChange={(e) => setSenhaLogin(e.target.value)}
                placeholder="Senha"
              />
              <p
                onClick={ForgetPassword}
                className="text-BlackTransparent dark:text-WhiteTransparent text-right text-xs cursor-pointer"
              >
                Esqueceu a senha?
              </p>
              <input
                className="bg-Black dark:bg-White dark:text-Black text-White cursor-pointer mt-4 p-2 rounded-xl font-bold"
                type="button"
                onClick={LoginUser}
                value="Login"
              />
            </form>
            <p className="text-BlackTransparent text-center dark:text-WhiteTransparent">
              Ou continue com
            </p>
            <div className="flex flex-row gap-2 justify-around items-center text-black mt-4 mb-4 2-full">
              <i className="fab fa-google bg-White px-5 py-3 cursor-pointer rounded-lg text-2xl"></i>
              <i className="fab fa-apple bg-White px-5 py-3 cursor-pointer rounded-lg text-2xl"></i>
              <i className="fab fa-facebook bg-White px-5 py-3 cursor-pointer rounded-lg text-2xl"></i>
            </div>
            <p className="text-BlackTransparent dark:text-WhiteTransparent text-center">
              Não possui conta?{" "}
              <strong
                className="font-bold text-Black dark:text-White cursor-pointer"
                onClick={ShowInputsRegister}
              >
                Criar uma conta!
              </strong>
            </p>
          </div>
        ) : (
          <div
            id="Registro"
            className="w-11/12 rounded-xl dark:BoxWhite shadow-2xl max-w-96 p-6 flex-col"
          >
            <h1 className="text-4xl dark:text-White text-Black font-bold text-center mb-6">
              Registre-se Agora!
            </h1>
            <form className="flex flex-col gap-3 w-full mb-6">
              <input
                autoComplete="off"
                className="text-BlackTransparent border-none p-2 rounded-xl outline-none "
                type="text"
                name="name"
                id="name"
                onChange={(e) => setNomeRegistrado(e.target.value)}
                placeholder="Nome Completo"
              />
              <input
                autoComplete="off"
                className="text-BlackTransparent border-none p-2 rounded-xl outline-none "
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmailRegistrado(e.target.value)}
                placeholder="Email"
              />
              <input
                autoComplete="off"
                className="text-BlackTransparent border-none p-2 rounded-xl outline-none"
                type="password"
                name="password"
                id="password"
                onChange={(e) => setSenhaRegistrado(e.target.value)}
                placeholder="Senha"
              />
              <input
                className="bg-Black dark:bg-White dark:text-Black text-White cursor-pointer mt-4 p-2 rounded-xl font-bold"
                type="button"
                onClick={CadastroUser}
                value="Cadastrar"
              />
            </form>
            <p className="text-BlackTransparent text-center dark:text-WhiteTransparent">
              Já possui conta?{" "}
              <strong
                className="font-bold text-Black dark:text-White cursor-pointer"
                onClick={ShowInputsLogin}
              >
                Faça login!
              </strong>
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
