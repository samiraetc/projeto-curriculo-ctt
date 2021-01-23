import React from "react";
import "./App.css"


function App() {

  const fakeAPI =  
    {
      nome: 'Samira Costa',
      ocupacao: 'Frontend Developer',
      resumo: '8 anos e já sei React',
      perfilProfissional: 'Faço miojo bom',
      contatos: [
        {
          id: 1,
          tipo: 'telefone',
          contato: '34 99767-4843'
        },
        {
          id: 2,
          tipo: 'email',
          contato: 'samiramanuelac@gmail.com'
        }
      ],
      educacao: [
        {
          id: 1,
          instituicao: 'IFSP',
          curso: 'Tecnologo em Analise e Desenvolvimento de Sistemas'
        },
        {
          id: 2,
          instituicao: 'Universidad de Ibague',
          curso: 'Mobilidade Academica em Engenharia de Sistemas'
        },
        {
          id: 3,
          instituicao: 'IFTM',
          curso: 'Bacharel em Ciencias da Computação'
        }
      ],
      experiencia: [
        {
          id: 1,
          cargo: 'Frontend Developer',
          periodo: 'Novembro 2020 - Atualmente',
          empresa: 'Mercado Livre',
          local: 'Osasco, São Paulo',
          conteudo: ''
        },
        {
          id: 2,
          cargo: 'Frontend Developer',
          periodo: 'Ago 2020 - Nov 2020',
          empresa: 'LTM Fidelidade',
          local: 'Barueri, São Paulo',
          conteudo: 'Manutença'
        },
        {
          id: 3,
          cargo: 'Web Designer',
          periodo: 'Jul 2019 - Ago 2020',
          empresa: 'e.Mix',
          local: 'Campinas, São Paulo',
          conteudo: 'Desenvolvimento de sites instuticionais e e-commerces para microoemprendedores dos Estados Unidos'
        },
        {
          id: 4,
          cargo: 'Frontend Developer',
          periodo: 'Jan 2019 - Jul 2019',
          empresa: 'SW Brasil ',
          local: 'Uberlandia, Minas Gerais',
          conteudo: 'Fazia nada e ganhava mal'
        },
        {
          id: 4,
          cargo: 'Frontend Developer',
          periodo: 'Dez 2017 - Fev 2018',
          empresa: 'Imperial Creation ',
          local: 'Cairo, Egito',
          conteudo: 'Fazia nada e ganhava mal'
        }
      ]
  }
  return (
    <main>
      <div className="perfil">
        <img src="https://i.pravatar.cc/400" alt="Perfil" />
      </div>
      <div className="biografia">
        <h1>
          Nome Sobrenome
        </h1>
        <div className="ocupacao">Developer</div>
        <p>109 anos e pronta pra ser dev</p>
      </div>

      <div className="titulo">
        Perfil <br /> Profissional
      </div>

      <div className="perfil-profissional">
        <p>
          Faço nada da vida
        </p>
      </div>
      <aside>
        <div className="sidebar">
          <h3>Contatos</h3>

          <button>Mostrar Contatos</button>

          <div className="lista-de-contatos">
            <li>
              <div className="item-contato">
                <h4>TELEFONE</h4>
                <p>(19) 0000-0000</p>
              </div>
            </li>
            <li>
              <div className="item-contato">
                <h4>TELEFONE</h4>
                <p>(19) 0000-0000</p>
              </div>
            </li>
          </div>
        </div>

        <div className="sidebar">
          <h3>Educação</h3>
          <div className="lista-de-formacao">
            <li>
              <h4>Faculdade da vida</h4>
              <p>Uniesquina 2019 - 2022</p>
            </li>
            <li>
              <h4>EMEF</h4>
              <p>Qualquer lugar 2010 - 2013</p>
            </li>
          </div>
        </div>
      </aside>
      <div className="experience">
        <h2>Experiência Profissional</h2>

        <div className="experience-item">
          <div>
            <h4>Developer</h4>
            <span>Novembro 2019 - Atualmente</span>

            <strong>Empresa da hora</strong>
            <span>Campinas - São Paulo</span>
          </div>
          <p>
            Fazia nada
        </p>
        </div>
        <div className="experience-item">

          <div>
            <h4>Developer</h4>
            <span>Agosto 2019 - Novembro 2019</span>

            <strong>Empresa estranha</strong>
            <span>Sumaré - São Paulo</span>
          </div>
          <p>
            Fazia menos
        </p>
        </div>
      </div>
    </main>
  );
}

export default App;