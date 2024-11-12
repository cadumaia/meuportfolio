'use client'
import Image from "next/image";
import { useState } from "react";



export default function Home() {
  const [openModal, setOpenModal] = useState(null);
  return (
      //navbar desktop acima e mobile, abaixo.
<>
<link rel="icon" href="/iconcm.png"/>
      {/*Navbar Desktop*/}
      <nav className="bg-black-900 rounded pb-8">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-center font-sans">
              <div className="flex flex-shrink-0 items-center">
                <Image className="h-8 hover:scale-110" src="/graduationiconblue.svg" width = {30} height = {30} alt="icone" />
              </div>
              <div className="hidden flex sm:ml-6 sm:block">
                <div className=" flex space-x-5">
                  <a href="#" className="rounded-md bg-gray-800 px-3 py-2 text-m font-medium text-white hover:text-sky-500" aria-current="page">Início</a>
                  <a href="#" className="rounded-md px-3 py-2 text-m font-medium text-gray-300 hover:text-sky-500">Sobre Mim</a>
                  <a href="#" className="rounded-md px-3 py-2 text-m font-medium text-gray-300 hover:text-sky-500">Projetos</a>
                  <a href="#" className="rounded-md px-3 py-2 text-m font-medium text-gray-300 hover:text-sky-500">Contato</a>
                </div>
              </div>
            </div>
          </div>
        </div>

    {/*Navbar Mobile*/}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Início</a>
            <a href="#" className="block rounded-md px-3 py-2 text-m font-medium text-gray-300  hover:text-sky-500">Sobre Mim</a>
            <a href="#" className="block rounded-md px-3 py-2 text-m font-medium text-gray-300  hover:text-sky-500">Projetos</a>
            <a href="#" className="block rounded-md px-3 py-2 text-m font-medium text-gray-300  hover:text-sky-500">Contato</a>
          </div>
        </div>
      </nav>

    {/* Corpo do Site*/}
      
      {/*<div className = "container mx-auto w-2/3 h-96 bg-[#242b2b]/40 rounded-[15px] text-xl py-2 ">
      </div> */}


<div className= "content-box grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto h-3/5 w-3/5 bg-neutral-900 rounded-lg shadow-xl overflow-hidden hover:scale-105 duration-150 hover:text-sky-500 md:hover:opacity-75 transition ease-in-out">
  
  {/* Coluna do conteúdo*/}
  <div className="flex flex-col justify-center p-4 overflow-y-auto">
    <h1 className="titulo text-center align-top text-2xl font-bold mb-10">
      Olá, sou Cadu Maia, Bem-vindo/a ao meu Portfólio!
    </h1>
    <p className="texto text-m leading-relaxed transition ease-in-out">
      Sou formado em Informática pelo Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE) e venho construindo uma trajetória focada no desenvolvimento de soluções eficientes e funcionais. Com experiência em tecnologias como React, Node.js, SQL, Firebase e WordPress, tenho trabalhado em diversos projetos, desde e-commerces voltados para o ramo fitness até sistemas de gestão para construtoras.
      <br/> <br/>
      Busco sempre aprimorar minhas habilidades e estou constantemente explorando novas tecnologias, atualmente me aprofundando em Tailwind CSS para trazer ainda mais modernidade e responsividade aos meus projetos.
      
      Minha trajetória inclui participação na Apple Developer Academy e em treinamentos como o curso de Introdução à Cibersegurança da Cisco, onde pude expandir meu conhecimento sobre boas práticas de desenvolvimento seguro e trabalhar em equipe.
      <br/> <br/>
      Estou animado para novos desafios e oportunidades que me permitam crescer profissionalmente e contribuir com soluções criativas e eficazes para problemas reais. Vamos juntos transformar ideias em realidade!
    </p>
  </div>

  {/* Coluna da imagem*/}
  <div className="flex justify-end items-center">
    <img 
      className="rounded-lg w-96" 
      src="/fotoperfil.png" 
      alt="Cadu" 
    />
  </div>
</div>

<div className="container mx-auto p-4 p-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Meus Projetos</h1>
      <div className="grid gap-4 md:grid-cols-3">
        
        {/* Projeto 1 */}
        <div className="bg-neutral-900 shadow-lg text-center rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
          <img className = "rounded-lg w-full h-auto"
          src = "/fotoprojetols.png"/>
          <h3 className="text-xl font-semibold pt-3 mb-2">Projeto 1</h3>
          <p className="text-gray-400">Descrição breve do projeto. Explique o que ele faz e suas principais funcionalidades.</p>
          <button onClick={() => setOpenModal("modal1")} className="text-blue-500 mt-4 inline-block hover:text-blue-700">Ver mais</button>
        </div>

        {/* Projeto 2 */}
        <div className="bg-neutral-900 shadow-lg text-center rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
        <img className = "rounded-lg w-full h-auto"
          src = "/fotoprojetoempyrean.png"/>
          <h3 className="text-xl font-semibold pt-3 mb-2">Projeto 2</h3>
          <p className="text-gray-400">Descrição breve do projeto. Explique o que ele faz e suas principais funcionalidades.</p>
          <button onClick={() => setOpenModal("modal2")} className="text-blue-500 mt-4 inline-block hover:text-blue-700">Ver mais</button>
        </div>

        {/* Projeto 3 */}
        <div className="bg-neutral-900 shadow-lg rounded-lg p-6 text-center over:shadow-xl transition duration-300 ease-in-out">
          <img className = "rounded-lg w-full h-auto"
            src = "/fotoprojetotodo.png"/>
          <h3 className="text-xl font-semibold pt-3 mb-2">Projeto 3</h3>
          <p className="text-gray-400">Descrição breve do projeto. Explique o que ele faz e suas principais funcionalidades.</p>
          <button onClick={() => setOpenModal("modal3")} className="text-blue-500 mt-4 inline-block hover:text-blue-700">Ver mais</button>
        </div>
      </div>

      {/* Modal Projeto 1 */}
      {openModal === "modal1" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
          <div className="bg-neutral-900 rounded-lg p-6 w-3/5 h-3/5">
            <h3 className="text-xl font-semibold mb-2">Detalhes do Projeto 1</h3>
            <p className="text-gray-400">Aqui você pode colocar uma descrição mais detalhada do projeto, tecnologias usadas, desafios, etc.</p>
            <button onClick={() => setOpenModal(null)} className="text-red-500 mt-4 inline-block hover:text-red-700">Fechar</button>
          </div>
        </div>
      )}

      {/* Modal Projeto 2 */}
      {openModal === "modal2" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
          <div className="bg-neutral-900 rounded-lg p-6 w-3/5 h-3/5">
            <h3 className="text-xl font-semibold mb-2">Detalhes do Projeto 2</h3>
            <p className="text-gray-400">Aqui você pode colocar uma descrição mais detalhada do projeto, tecnologias usadas, desafios, etc.</p>
            <button onClick={() => setOpenModal(null)} className="text-red-500 mt-4 inline-block hover:text-red-700">Fechar</button>
          </div>
        </div>
      )}

      {/* Modal Projeto 3 */}
      {openModal === "modal3" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
          <div className="bg-neutral-900 rounded-lg p-6 w-3/5 h-3/5">
            <h3 className="text-xl font-semibold mb-2">Detalhes do Projeto 3</h3>
            <p className="text-gray-400">Aqui você pode colocar uma descrição mais detalhada do projeto, tecnologias usadas, desafios, etc.</p>
            <button onClick={() => setOpenModal(null)} className="text-red-500 mt-4 inline-block hover:text-red-700">Fechar</button>
          </div>
        </div>
      )}
    </div>
</>
    
  );
}
