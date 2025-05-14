"use client";

import { Card } from "@/components/ui/card";
import { scrollToSection } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-dvw min-h-dvh">
      <div
        className="flex w-full min-h-[calc(100dvh-96px)]"
        style={{
          backgroundImage: "url('/caminhonete.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="flex px-0 md:px-64 items-center justify-center w-full h-full min-h-[calc(100dvh-96px)]"
          style={{
            backdropFilter: "blur(5px)",
            background: "rgba(0,0,0,0.25)",
          }}
        >
          <h1 className="text-7xl font-bold text-center text-gray-900 dark:text-gray-100 text-sans">
            A verdade na proteção.
            <br />A força na entrega.
          </h1>
        </div>
      </div>

      <div
        id="services"
        className="flex flex-col items-center justify-center w-full  px-0 md:px-64 py-8 bg-[#09090B]"
      >
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 text-sans">
          Nossos Serviços
        </h2>
        <div className="flex flex-col md:flex-row">
          <Card
            className="w-96 h-96 m-4 cursor-pointer"
            onClick={() => scrollToSection("security")}
          >
            <div className="flex flex-col items-center justify-center w-full h-full">
              <Image
                src="/veritas-security-logo.png"
                alt="Veritas Logo Segurança"
                width={256}
                height={256}
                className="w-64 h-64"
              />

              <p className="mt-4 text-lg text-center text-gray-700 font-bold dark:text-gray-300">
                Segurança Patrimonial
              </p>
            </div>
          </Card>
          <Card
            className="w-96 h-96 m-4 cursor-pointer"
            onClick={() => scrollToSection("facilities")}
          >
            <div className="flex flex-col items-center justify-center w-full h-full">
              <Image
                src="/veritas-facilities-logo.png"
                width={256}
                height={256}
                alt="Veritas Logo Facilidades"
                className="w-64 h-64"
              />

              <p className="mt-4 text-lg text-center text-gray-700 font-bold dark:text-gray-300">
                Facilities
              </p>
            </div>
          </Card>
        </div>

        <div
          id="security"
          className="flex flex-col-reverse gap-8 px-2 md:flex-row items-center w-full mt-16"
        >
          <div className="flex flex-col items-center justify-center w-full">
            <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-100">
              Segurança Patrimonial
            </h3>
            <p className="mt-4 text-lg text-center text-gray-700 dark:text-gray-300 max-w-4xl">
              Nossa empresa oferece serviços de segurança patrimonial de alta
              qualidade, garantindo a proteção de bens, instalações e pessoas.
              Contamos com uma equipe altamente treinada e tecnologias avançadas
              para proporcionar tranquilidade e confiança aos nossos clientes.
              Seja para empresas, condomínios ou eventos, estamos prontos para
              atender às suas necessidades com excelência.
            </p>
          </div>
          <Image
            src="/security-image.png"
            alt="Seguranca patrimonial"
            width={1440}
            height={1200}
            className="w-[500px]"
          />
        </div>

        <div
          id="facilities"
          className="flex flex-col gap-8 px-2 md:flex-row  items-center w-full mt-16"
        >
          <Image
            src="/facilities-image.png"
            alt="Seguranca patrimonial"
            width={1440}
            height={1051}
            className="w-[500px]"
          />
          <div className="flex flex-col items-center justify-center w-full">
            <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-100">
              Facilities
            </h3>
            <p className="mt-4 text-lg text-center text-gray-700 dark:text-gray-300 max-w-4xl">
              Oferecemos soluções completas de facilities para atender às
              demandas de sua empresa. Nossos serviços incluem limpeza,
              manutenção, recepção e suporte operacional, garantindo um ambiente
              funcional e organizado. Com uma equipe qualificada e comprometida,
              proporcionamos eficiência e qualidade para o seu negócio.
            </p>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="flex flex-col items-center justify-center w-full px-0 md:px-64 py-8 bg-[#09090B]">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 text-sans">
            Sobre nós
          </h2>
          <p className="mt-4 text-lg text-center text-gray-700 dark:text-gray-300 max-w-4xl">
            A Veritas é uma empresa de segurança e serviços, focada em soluções
            em tecnologia para a segurança da informação. Com uma equipe
            altamente qualificada e comprometida, oferecemos serviços
            personalizados para atender às necessidades de nossos clientes.
            Nossa missão é garantir a proteção e a tranquilidade de nossos
            clientes, utilizando as melhores práticas e tecnologias disponíveis
            no mercado.
          </p>
        </div>
      </div>
    </div>
  );
}
