'use client'
import { useState } from "react";
import projetos from "./dados/projetos";
import linguagens from "./dados/linguagens";
import CardProjeto from "./components/CardProjeto";
import ModalProjeto from "./components/ModalProjeto";
import CardLinguagem from "./components/CardLinguagem";
import ModalLinguagem from "./components/ModalLinguagem";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

export default function Home() {
  const [openModal, setOpenModal] = useState(null);
  return (

<>
<meta name="description" content="Meu Portfólio" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" href="/iconcm.png" />

<Navbar/>

<div data-aos="fade-up" className="container mx-auto mt-8 max-w-full sm:max-w-4xl lg:max-w-6xl px-4 sm:px-6 lg:px-8 select-none">
  <div className="conteudo apresentação mt-10 content-box grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto mb-8 h-3/5 w-5/6 bg-neutral-900 rounded-lg shadow-xl overflow-hidden hover:scale-105 duration-150 hover:text-sky-500 md:hover:opacity-75 animate-slide-in-up select-none">


        <div className="flex flex-col justify-center p-4">
          <h1 className="titulo text-center align-top text-2xl font-bold mb-10">
            Olá, sou Cadu Maia, Bem-vindo/a ao meu Portfólio!
          </h1>
          <p className="texto text-m leading-relaxed transition ease-in-out">
            Sou formado em Informática pelo Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE) e venho construindo uma trajetória focada no desenvolvimento de soluções eficientes e funcionais. Com experiência em tecnologias como React, Node.js, SQL, Firebase e WordPress, tenho trabalhado em diversos projetos, desde e-commerces voltados para o ramo fitness até sistemas de gestão para construtoras.
            <br /> <br />
            Busco sempre aprimorar minhas habilidades e estou constantemente explorando novas tecnologias, atualmente me aprofundando em Tailwind CSS para trazer ainda mais modernidade e responsividade aos meus projetos.

            Minha trajetória inclui participação na Apple Developer Academy e em treinamentos como o curso de Introdução à Cibersegurança da Cisco, onde pude expandir meu conhecimento sobre boas práticas de desenvolvimento seguro e trabalhar em equipe.
            <br /> <br />
            Estou animado para novos desafios e oportunidades que me permitam crescer profissionalmente e contribuir com soluções criativas e eficazes para problemas reais. Vamos juntos transformar ideias em realidade!
          </p>
        </div>




        <div className="imagem perfil flex justify-end items-center">
          <img
            className="rounded-lg w-full max-w-xs sm:max-w-sm lg:max-w-md  hover:opacity-75"
            src="/fotoperfil.png"
            alt="Cadu" />
        </div>
      </div>


    <h2 id="projetos" className="text-2xl font-bold mb-6 text-center">Meus Projetos</h2>
    <div className="container mx-auto px-4 flex justify-center">
      {/* Renderizar os cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((projeto) => (
          <CardProjeto
            key={projeto.id}
            projeto={projeto}
            setOpenModal={setOpenModal} />
        ))}
      </div>

      {/* Renderizar o modal correspondente */}
      {projetos.map(
        (projeto) => openModal === projeto.id && (
          <ModalProjeto
            key={projeto.id}
            projeto={projeto}
            fecharModal={() => setOpenModal(null)} />
        )
      )}
    </div>

    <h2 id = "linguagens" className="text-2xl font-bold mb-6 text-center gap-4 p-4">Tecnologias que Utilizo</h2>
    <div className="flex flex-wrap mx-auto justify-center gap-6">
    {linguagens.map((linguagem) => (
                <CardLinguagem
                  key={linguagem.id}
                  linguagem={linguagem}
                  setOpenModal={setOpenModal} />
    ))}

    {linguagens.map((linguagem) => openModal === linguagem.id && (
                <ModalLinguagem
                  key={linguagem.id}
                  linguagem={linguagem}
                  fecharModal={() => setOpenModal(null)} />
              
    ))}


  </div>
</div> 

< Footer />
  {/*<h2 className="text-2xl font-bold mb-6 text-center gap-4 p-4 transition animate-slide-in-up select-none">Tecnologias que Utilizo </h2>
<div className="flex flex-wrap justify-center gap-6 select-none">

  <div onClick={() => setOpenModal("modalreact")} className="group flex flex-col items-center bg-transparent p-2 rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer">
    <div className="w-12 h-12 mb-2">
      <img src="/iconereact.svg" alt="React" className="w-full h-full group-hover:opacity-80 transition-opacity duration-300"/>
    </div>
    <h3 className="text-sm font-medium text-gray-500 group-hover:text-sky-500 transition-colors duration-300">React</h3>
  </div>

  {openModal === "modalreact" && (
        <div className= "primeiro modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center animate-fadeIn">
          
          <div className="bg-neutral-900 rounded-lg p-6 w-1/3 h-2/5 relative text-center">
          <button onClick={() => setOpenModal(null)} className="absolute top-2 right-2 text-gray-600 hover:text-sky-500"
          >
              ✖
            </button>
            <h3 className="text-xl font-semibold mb-2 text-center">React</h3>  
            <p className="text-gray-400">React é minha principal ferramenta para desenvolver interfaces modernas e dinâmicas. Gosto de sua abordagem baseada em componentes e da flexibilidade que ele oferece para criar aplicações escaláveis.</p>
            
            <ul className="lista de marcadores list-disc pl-5 mt-3 space-y-2 text-gray-400"></ul>
            <p className="titulolista">Finalidades:</p>
                                        <li>Divulgação de consultoria</li>
                                        <li>Links de opções para contato</li>
                                        <li>Multiplataforma</li>
                                        <li>Hospedagem Alterada para melhor qualidade de vida do projeto</li>
            <button onClick={() => setOpenModal(null)} className="text-red-500 mt-4 inline-block items-center hover:text-red-700">Fechar</button>
          </div>
        </div>
  )}





  <div onClick={() => setOpenModal("modaltailwind")} className="group flex flex-col items-center bg-transparent p-2 rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer">
    <div className="w-12 h-12 mb-2">
      <img src="/iconetailwind.svg" alt="Tailwind" className="w-full h-full group-hover:opacity-80 transition-opacity duration-300"/>
    </div>
    <h3 className="text-sm font-medium text-gray-500 group-hover:text-sky-500 transition-colors duration-300">Tailwind</h3>
  </div>

  {openModal === "modaltailwind" && (
        <div className= "primeiro modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 animate-fadeIn">
          
          <div className="bg-neutral-900 rounded-lg p-6 w-1/3 h-2/5 relative text-center">
          <button onClick={() => setOpenModal(null)} className="absolute top-2 right-2 text-gray-600 hover:text-sky-500"
          >
              ✖
            </button>
            <h3 className="text-xl font-semibold mb-2 text-center">Tailwind</h3>  
            <p className="text-gray-400">Tailwind é um framework que revolucionou minha forma de criar interfaces. Com ele, consigo desenvolver layouts responsivos e personalizados de forma ágil, focando no design diretamente no código.</p>
            
            <ul className="lista de marcadores list-disc pl-5 mt-3 space-y-2 text-gray-400"></ul>
            <p className="titulolista">Finalidades, Funcionalidades e Atualizações:</p>
                                        <li>Divulgação de consultoria</li>
                                        <li>Links de opções para contato</li>
                                        <li>Multiplataforma</li>
                                        <li>Hospedagem Alterada para melhor qualidade de vida do projeto</li>
            <button onClick={() => setOpenModal(null)} className="text-red-500 mt-4 inline-block items-center hover:text-red-700">Fechar</button>
          </div>
        </div>
  )}


  <div onClick={() => setOpenModal("modalbootstrap")} className="group flex flex-col transform transition-transform items-center bg-transparent p-2 rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer">
    <div className="w-12 h-12 mb-2">
      <img src="/iconebootstrap.svg" alt="Bootstrap" className="w-full h-full group-hover:opacity-80 transition-opacity duration-300"/>
    </div>
    <h3 className="text-sm font-medium text-gray-500 group-hover:text-purple-500 transition-colors duration-300">Bootstrap</h3>
  </div>
  {openModal === "modalbootstrap" && (
        <div className= "primeiro modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 animate-fadeIn">
          
          <div className="bg-neutral-900 rounded-lg p-6 w-1/3 h-2/5 relative text-center transform scale-90 animate-slideUp">
          <button onClick={() => setOpenModal(null)} className="absolute top-2 right-2 text-gray-600 hover:text-sky-500"
          >
              ✖
            </button>
            <h3 className="text-xl font-semibold mb-2 text-center">Bootstrap</h3>  
            <p className="text-gray-400">Bootstrap foi um dos primeiros frameworks que usei para criar layouts rápidos e responsivos. Ele me ajudou a compreender a estruturação de interfaces e ainda é uma ferramenta que uso em projetos mais simples ou que pedem soluções rápidas.</p>
            
            <ul className="lista de marcadores list-disc pl-5 mt-3 space-y-2 text-gray-400"></ul>
            <p className="titulolista">Finalidades, Funcionalidades e Atualizações:</p>
                                        <li>Divulgação de consultoria</li>
                                        <li>Links de opções para contato</li>
                                        <li>Multiplataforma</li>
                                        <li>Hospedagem Alterada para melhor qualidade de vida do projeto</li>
            <button onClick={() => setOpenModal(null)} className="text-red-500 mt-4  items-center hover:text-red-700">Fechar</button>
          </div>
        </div>
  )}



  <div onClick={() => setOpenModal("modalnext")} className="group flex flex-col items-center bg-transparent p-2 rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer">
    <div className="w-12 h-12 mb-2">
      <img src="/iconenext.svg" alt="nextjs" className="w-full h-full group-hover:opacity-80 transition-opacity duration-300"/>
    </div>
    <h3 className="text-sm font-medium text-gray-500 group-hover:text-white transition-colors duration-300">Next.js</h3>
  </div>
  {openModal === "modalnext" && (
        <div className= "primeiro modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 animate-fadeIn">
          
          <div className="bg-neutral-900 rounded-lg p-6 w-1/3 h-2/5 relative text-center">
          <button onClick={() => setOpenModal(null)} className="absolute top-2 right-2 text-gray-600 hover:text-sky-500"
          >
              ✖
            </button>
            <h3 className="text-xl font-semibold mb-2 text-center">Next.js</h3>  
            <p className="text-gray-400">Next.js é o framework que escolhi para meus projetos mais robustos. Adoro como ele combina performance, SEO e renderização eficiente, me permitindo criar aplicações modernas com facilidade.</p>
            
            <ul className="lista de marcadores list-disc pl-5 mt-3 space-y-2 text-gray-400"></ul>
            <p className="titulolista">Finalidades, Funcionalidades e Atualizações:</p>
                                        <li>Divulgação de consultoria</li>
                                        <li>Links de opções para contato</li>
                                        <li>Multiplataforma</li>
                                        <li>Hospedagem Alterada para melhor qualidade de vida do projeto</li>
            <button onClick={() => setOpenModal(null)} className="text-red-500 mt-4 inline-block items-center hover:text-red-700">Fechar</button>
          </div>
        </div>
  )}



  <div onClick={() => setOpenModal("modalfirebase")} className="group flex flex-col items-center bg-transparent p-2 rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer">
    <div className="w-12 h-12 mb-2">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-full h-full group-hover:opacity-80 transition-opacity duration-300"/>
    </div>
    <h3 className="text-sm font-medium text-gray-500 group-hover:text-yellow-500 transition-colors duration-300">Firebase</h3>
  </div>
  {openModal === "modalfirebase" && (
        <div className= "primeiro modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 animate-fadeIn">
          
          <div className="bg-neutral-900 rounded-lg p-6 w-1/3 h-2/5 relative text-center">
          <button onClick={() => setOpenModal(null)} className="absolute top-2 right-2 text-gray-600 hover:text-sky-500"
          >
              ✖
            </button>
            <h3 className="text-xl font-semibold mb-2 text-center">Firebase</h3>  
            <p className="text-gray-400">Firebase é minha solução favorita para autenticação e banco de dados em tempo real. Ele simplifica a construção de backends e me dá liberdade para focar no desenvolvimento da aplicação em si.</p>
            
            <ul className="lista de marcadores list-disc pl-5 mt-3 space-y-2 text-gray-400"></ul>
            <p className="titulolista">Finalidades, Funcionalidades e Atualizações:</p>
                                        <li>Divulgação de consultoria</li>
                                        <li>Links de opções para contato</li>
                                        <li>Multiplataforma</li>
                                        <li>Hospedagem Alterada para melhor qualidade de vida do projeto</li>
            <button onClick={() => setOpenModal(null)} className="text-red-500 mt-4 inline-block items-center hover:text-red-700">Fechar</button>
          </div>
        </div>
  )}


  
  <div onClick={() => setOpenModal("modalsql")} className="group flex flex-col items-center bg-transparent p-2 rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer">
    <div className="w-12 h-12 mb-2">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="w-full h-full group-hover:opacity-80 transition-opacity duration-300"/>
    </div>
    <h3 className="text-sm font-medium text-gray-500 group-hover:text-blue-500 transition-colors duration-300">SQL</h3>
  </div>
  {openModal === "modalsql" && (
        <div className= "primeiro modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 animate-fadeIn">
          
          <div className="bg-neutral-900 rounded-lg p-6 w-1/3 h-2/5 relative text-center">
          <button onClick={() => setOpenModal(null)} className="absolute top-2 right-2 text-gray-600 hover:text-sky-500"
          >
              ✖
            </button>
            <h3 className="text-xl font-semibold mb-2 text-center">SQL</h3>  
            <p className="text-gray-400">SQL é essencial no meu dia a dia como desenvolvedor. Uso essa linguagem para manipular e organizar dados, garantindo que as aplicações que desenvolvo sejam eficientes e confiáveis</p>
            
            <ul className="lista de marcadores list-disc pl-5 mt-3 space-y-2 text-gray-400"></ul>
            <p className="titulolista">Finalidades, Funcionalidades e Atualizações:</p>
                                        <li>Divulgação de consultoria</li>
                                        <li>Links de opções para contato</li>
                                        <li>Multiplataforma</li>
                                        <li>Hospedagem Alterada para melhor qualidade de vida do projeto</li>
            <button onClick={() => setOpenModal(null)} className="text-red-500 mt-4 inline-block items-center hover:text-red-700">Fechar</button>
          </div>
        </div>
  )}


   
  <div onClick={() => setOpenModal("modalpostgre")} className="group flex flex-col items-center bg-transparent p-2 rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer">
    <div className="w-12 h-12 mb-2">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-full h-full group-hover:opacity-80 transition-opacity duration-300"/>
    </div>
    <h3 className="text-sm font-medium text-gray-500 group-hover:text-blue-600 transition-colors duration-300">PostgreSQL</h3>
  </div>
  {openModal === "modalpostgre" && (
        <div className= "primeiro modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 animate-fadeIn">
          
          <div className="bg-neutral-900 rounded-lg p-6 w-1/3 h-2/5 relative text-center">
          <button onClick={() => setOpenModal(null)} className="absolute top-2 right-2 text-gray-600 hover:text-sky-500"
          >
              ✖
            </button>
            <h3 className="text-xl font-semibold mb-2 text-center">PostgreSQL</h3>  
            <p className="text-gray-400">PostgreSQL é minha escolha quando preciso de um banco de dados robusto. Ele me dá flexibilidade para trabalhar com dados complexos e confiabilidade para projetos que demandam alta performance.</p>
            
            <ul className="lista de marcadores list-disc pl-5 mt-3 space-y-2 text-gray-400"></ul>
            <p className="titulolista">Finalidades, Funcionalidades e Atualizações:</p>
                                        <li>Divulgação de consultoria</li>
                                        <li>Links de opções para contato</li>
                                        <li>Multiplataforma</li>
                                        <li>Hospedagem Alterada para melhor qualidade de vida do projeto</li>
            <button onClick={() => setOpenModal(null)} className="text-red-500 mt-4 inline-block items-center hover:text-red-700">Fechar</button>
          </div>
        </div>
  )}


  <div onClick={() => setOpenModal("modalwordpress")} className="group flex flex-col items-center bg-transparent p-2 rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer">
    <div className="w-12 h-12 mb-2">
      <img src="/iconewordpress.svg" alt="PostgreSQL" className="w-full h-full group-hover:opacity-80 transition-opacity duration-300"/>
    </div>
    <h3 className="text-sm font-medium text-gray-500 group-hover:text-blue-600 transition-colors duration-300">WordPress</h3>
  </div>
  {openModal === "modalwordpress" && (
        <div className= "primeiro modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 animate-fadeIn">
          
          <div className="bg-neutral-900 rounded-lg p-6 w-1/3 h-2/5 relative text-center">
          <button onClick={() => setOpenModal(null)} className="absolute top-2 right-2 text-gray-600 hover:text-sky-500"
          >
              ✖
            </button>
            <h3 className="text-xl font-semibold mb-2 text-center">WordPress</h3>  
            <p className="text-gray-400">Com WordPress, aprendi a criar sites de forma prática e funcional. É uma ferramenta que valorizo por sua versatilidade, especialmente quando preciso entregar soluções rápidas e customizáveis.</p>
            
            <ul className="lista de marcadores list-disc pl-5 mt-3 space-y-2 text-gray-400"></ul>
            <p className="titulolista">Finalidades, Funcionalidades e Atualizações:</p>
                                        <li>Divulgação de consultoria</li>
                                        <li>Links de opções para contato</li>
                                        <li>Multiplataforma</li>
                                        <li>Hospedagem Alterada para melhor qualidade de vida do projeto</li>
            <button onClick={() => setOpenModal(null)} className="text-red-500 mt-4 inline-block items-center hover:text-red-700">Fechar</button>
          </div>
        </div>
  )}
</div>*/}

</>

  );
}
