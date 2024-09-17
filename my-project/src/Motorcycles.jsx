import { useEffect, useState } from 'react';
import Swal from "sweetalert2";

import imgMotoBlue from "/public/MBlue.png";
import imgMotogreen from "/public/Mgreen.png";
import imgMotoRed from "/public//MRed.png";
import imgMotoWhite from "/public/MWhite.png";

export default function Motorcycles() {

  // Modo dark
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const [user, setUser] = useState("");
  useEffect(() => {
    const NomeDoUsuarioCadastrado = JSON.parse(
      localStorage.getItem("RegistroObject")
    );
    if (NomeDoUsuarioCadastrado) {
      setUser(NomeDoUsuarioCadastrado.nomeRegistradoObject);
    }
  }, []);

  const [selectMoto, setSelectMoto] = useState(imgMotoBlue);
  function MotoSelecionada(x) {
    if (x == 1) {
      setSelectMoto(imgMotoBlue);
    } else if (x == 2) {
      setSelectMoto(imgMotoRed);
    } else if (x == 3) {
      setSelectMoto(imgMotogreen);
    } else if (x == 4) {
      setSelectMoto(imgMotoWhite);
    }
  }

  function MoreDetails() {
    if (selectMoto == imgMotoBlue) {
      Swal.fire({
        html: `
        <div class="border-l-2 font-bold">
          <p class="font-bold text-left pl-2 text-lg text-Black">PERFORMANCE</p>
          <h1 class= "text-left text-sm text-BlackTransparent pl-2">Yamaha YZF-R15 ABS</h1></div>
        <p class="font-bold text-xl my-2 text-left text-Black">MOTOR 155CC COM REFRIGERAÇÃO LÍQUIDA</p>
        <p class="text-BlackTransparent text-base text-left">A nova moto carenada da Yamaha, a YZF-R15 ABS, estreia na categoria de motos sportfun, esportivas e divertidas. Irmã mais nova da R3 ABS, membro da família R-Series, tem um potente motor que combina performance e estilo.</p>
        <p class="text-left mt-2 text-sm text-Puple font-bold">Para mais informações entre em contato</p>
      `,
        imageUrl: imgMotoBlue,imageWidth: 300,imageHeight: 250,
        confirmButtonText: "OK",
        confirmButtonColor: "#0086C9",
      });
    } else if (selectMoto == imgMotoRed) {
      Swal.fire({
        html: `
        <div class="border-l-2 font-bold">
          <p class="font-bold text-left pl-2 text-lg text-Black">PERFORMANCE</p>
          <h1 class= "text-left text-sm text-BlackTransparent pl-2">Honda CB200F</h1></div>
        <p class="font-bold text-xl my-2 text-left text-Black">MOTOR 200CC COM INJEÇÃO ELETRÔNICA</p>
        <p class="text-BlackTransparent text-base text-left">A Honda CB200F vem com um motor poderoso e eficiente, oferecendo desempenho de alto nível. Ideal para quem busca agilidade e força, é uma moto que combina robustez com economia de combustível.</p>
        <p class="text-left mt-2 text-sm text-Puple font-bold">Para mais informações entre em contato</p>
      `,
      imageUrl: imgMotoRed,imageWidth: 300,imageHeight: 250,
        confirmButtonText: "OK",
        confirmButtonColor: "#A0061A",
      });
    } else if (selectMoto == imgMotoWhite) {
      Swal.fire({
        html: `
        <div class="border-l-2 font-bold">
          <p class="font-bold text-left pl-2 text-lg text-Black">PERFORMANCE</p>
          <h1 class= "text-left text-sm text-BlackTransparent pl-2">Suzuki GSX-S300</h1></div>
        <p class="font-bold text-xl my-2 text-left text-Black">MOTOR 300CC COM DUPLO COMANDO</p>
        <p class="text-BlackTransparent text-base text-left">A Suzuki GSX-S300 é perfeita para aqueles que buscam potência e controle. Equipada com um motor de 300cc, ela traz tecnologias avançadas que garantem uma performance ágil nas ruas e estradas.</p>
        <p class="text-left mt-2 text-sm text-Puple font-bold">Para mais informações entre em contato</p>
      `,
      imageUrl: imgMotoWhite,imageWidth: 300,imageHeight: 250,
        confirmButtonText: "OK",
        confirmButtonColor: "#000000",
      });
    } else if (selectMoto == imgMotogreen) {
      Swal.fire({
      html: `
        <div class="border-l-2 font-bold">
          <p class="font-bold text-left pl-2 text-lg text-Black">PERFORMANCE</p>
          <h1 class= "text-left text-sm text-BlackTransparent pl-2">Kawasaki Ninja 250R</h1></div>
        <p class="font-bold text-xl my-2 text-left text-Black">MOTOR 250CC COM ALTO TORQUE</p>
        <p class="text-BlackTransparent text-base text-left">A Kawasaki Ninja 250R é a escolha ideal para quem procura uma moto com ótimo desempenho e estilo esportivo. Seu motor oferece uma aceleração rápida e uma experiência de pilotagem suave.</p>
        <p class="text-left mt-2 text-sm text-Puple font-bold">Para mais informações entre em contato</p>
      `,
      imageUrl: imgMotogreen,imageWidth: 300,imageHeight: 250,
        confirmButtonText: "OK",
        confirmButtonColor: "#3CB905",
      });
    }
  }

  return (
    <div className="bg-[url('/BgMotoLight.png')] dark:bg-[url('/BgMotoDark.png')] h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between">
      <header className="flex px-6 py-2 justify-between items-center">
        <div className="flex items-center gap-3">
          {darkMode ? (
            <img className="w-20 mobile:w-14" src="IconMotoLigth.png" alt="ícone de moto"/>
          ) : (
            <img className="w-20 mobile:w-14" src="IconMoto.png" alt="ícone de moto"/>
          )}
          <h1 className="font-bold dark:text-White text-4xl mobile:text-2xl">RideXperience</h1>
        </div>
        <div className="flex items-center gap-3 ">
        <button onClick={toggleDarkMode} className="focus:outline-none">
          {darkMode ? (
            <i className="fas fa-sun dark:text-White text-Black text-2xl"></i>
          ) : (
            <i className="fas fa-moon dark:text-White text-Black text-2xl"></i>
          )}
        </button>
          <i className="mobile:hidden dark:bg-White dark:text-Black fas fa-user bg-Black text-White px-4 py-2 rounded-full text-lg"></i>
          <p className=" dark:text-White mobile:hidden font-bold text-md">{user}</p>
        </div>
      </header>

      <main className="h-full p-5 flex flex-col items-center justify-around">
        <div className="flex items-center justify-center gap-4 ">
          <p onClick={() => MotoSelecionada(1)} className="bg-Black dark:text-Black dark:bg-White dark:hover:bg-Puple text-White px-5 py-3 rounded-lg font-bold cursor-pointer hover:bg-Puple"
          >
            01
          </p>
          <p
            onClick={() => MotoSelecionada(2)}
            className="bg-Black dark:text-Black dark:bg-White dark:hover:bg-Puple text-White px-5 py-3 rounded-lg font-bold cursor-pointer hover:bg-Puple"
          >
            02
          </p>
          <p
            onClick={() => MotoSelecionada(3)}
            className="bg-Black dark:text-Black dark:bg-White dark:hover:bg-Puple text-White px-5 py-3 rounded-lg font-bold cursor-pointer hover:bg-Puple"
          >
            03
          </p>
          <p
            onClick={() => MotoSelecionada(4)}
            className="bg-Black dark:text-Black dark:bg-White dark:hover:bg-Puple text-White px-5 py-3 rounded-lg font-bold cursor-pointer hover:bg-Puple"
          >
            04
          </p>
        </div>
        <div className="flex flex-row items-center justify-center mobile:flex-col">
          <img
            id="ImgMoto"
            className="max-w-xl w-full mt-4"
            src={selectMoto}
            alt="Img de moto disponível"
          />
        </div>
        <div className="bg-Black dark:bg-White dark:text-Black dark:hover:bg-Puple text-White font-bold px-5 py-2 cursor-pointer rounded-md hover:bg-Puple">
          <button onClick={() => MoreDetails()}>Saiba mais</button>
        </div>
      </main>

      <footer className="flex px-6 py-2 justify-between items-center dark:text-White">
        <div className="flex  items-center gap-3">
          <i className="fab fa-facebook-f text-xl cursor-pointer"></i>
          <i className="fab fa-instagram text-xl cursor-pointer"></i>
          <i className="fab fa-twitter text-xl cursor-pointer"></i>
          <p className="text-BlackTransparent dark:text-White text-xs font-semibold">(+55) 9 9999-9999</p>
        </div>
      </footer>
    </div>
  );
}
