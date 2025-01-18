import Image from "next/image"; // Usar Image do Next.js para otimização de imagens

const CardProjeto = ({ projeto, setOpenModal }) => {
  const { id, titulo, descricao, imagem, ariaLabel } = projeto;

  return (
    <div onClick={() => setOpenModal(id)} aria-label={`Abrir modal do projeto ${ariaLabel}`}
    className="card bg-neutral-900 shadow-lg text-center rounded-lg p-6 hover:shadow-xl transition duration-300 cursor-pointer hover:opacity-75"
    >
      <Image className="rounded-lg w-full h-auto"
        src={imagem}
        alt={titulo}
        width={400} // Ajuste o tamanho conforme necessário
        height={300} // Ajuste o tamanho conforme necessário
      />
      <h3 className="text-xl font-semibold pt-3 mb-3">{titulo}</h3>
      <p className="text-gray-400">{descricao}</p>
      <button onClick={() => setOpenModal(id)} aria-label={`Abrir modal do projeto ${ariaLabel}`}
        className="text-blue-500 mt-4 inline-block hover:text-blue-700"
      >
        Ver mais
      </button>
    </div>
  );
};

export default CardProjeto;