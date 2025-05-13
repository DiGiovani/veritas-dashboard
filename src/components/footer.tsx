export function Footer() {
  return (
    <footer className="flex items-center justify-center py-4">
      <div className="flex w-full h-full max-w-7xl mx-auto px-8 md:px-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold">Sobre</h3>
            <p className="mt-4 text-sm">
              A Veritas uma empresa de segurança e serviços, focada em soluções
              em tecnologia para a segurança da informação.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold">Contato</h3>
            <p className="mt-4 text-sm">
              Rua: 1234, Bairro: Centro
              <br />
              Telefone: (99) 9999 9999
              <br />
              Email:{" "}
              <a href="mailto:contato@veritas.com.br">contato@veritas.seg.br</a>
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold">Links</h3>
            <ul className="mt-4 text-sm">
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#services">Serviços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold">Redes Sociais</h3>
            <ul className="mt-4 text-sm">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
