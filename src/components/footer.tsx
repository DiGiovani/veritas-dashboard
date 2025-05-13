import React from "react";

export function Footer() {
  return (
    <footer className="flex items-center justify-center py-8 bg-[#20202027] text-white">
      <div className="flex w-full h-full max-w-7xl mx-auto px-8 md:px-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {/* About Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">Sobre</h3>
            <p className="text-sm leading-relaxed">
              A Veritas é uma empresa de segurança e serviços, focada em
              soluções em tecnologia para a segurança da informação.
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <p className="text-sm leading-relaxed">
              Rua: 1234, Bairro: Centro
              <br />
              Telefone: (99) 9999-9999
              <br />
              Email:{" "}
              <a
                href="mailto:contato@veritas.seg.br"
                className="text-blue-400 hover:underline"
              >
                contato@veritas.seg.br
              </a>
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-blue-400 hover:underline"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-blue-400 hover:underline"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-blue-400 hover:underline"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="#"
                  className="text-blue-400 hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-400 hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-400 hover:underline"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
