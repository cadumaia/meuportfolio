import React from "react";

const ModalProjeto = ({ projeto, fecharModal }) => {
  const { titulo, conteudo, features, link } = projeto;
 
  return (
    
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center animate-fadeIn">
      <div className="bg-neutral-900 rounded-lg p-6 lg:w-3/5 w-11/12 h-auto max-h-[80vh] relative text-center">
        <button 
        onClick={fecharModal} 
        aria-label={`Fechar modal do projeto ${titulo}`}
        className="absolute top-2 right-2 text-gray-600 hover:text-sky-500"
        >
          ✖
        </button>
        <h3 className="text-xl font-semibold mb-2">{titulo}</h3>
        <p className="text-gray-400 mb-4">{conteudo}</p>
        <ul className="list-disc pl-5 mt-3 space-y-3 text-gray-400 text-left">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <a href={link} target="_blank" rel="noopener noreferrer"
         className="bg-sky-400 text-neutral-900 hover:text-gray-300 font-semibold py-2 px-4 rounded-lg mt-4 inline-block hover:bg-sky-500 transition duration-300 shadow-md hover:shadow-lg">
          Visite o Site
        </a>
        <br />
        <button onClick={fecharModal} aria-label={`Fechar modal do projeto ${titulo}`}
         className="bg-red-500 text-neutral-900 hover:text-gray-300 font-semibold py-2 px-4 rounded-lg mt-4 inline-block hover:bg-red-700 transition duration-300 shadow-md hover:shadow-lg">
         Fechar
        </button>
      </div>
    </div>
  );
};

export default ModalProjeto;
