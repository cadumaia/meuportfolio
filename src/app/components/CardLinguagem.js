import Image from "next/image"

const CardLinguagem = ({ linguagem, setOpenModal }) => {
const { id, titulo, icone, ariaLabel } = linguagem;

return (
<div className="flex flex-wrap justify-center gap-6">
<div onClick={() => setOpenModal(id)} aria-label = {`Abrir modal da linguagem ${ariaLabel}`}
className="group flex flex-col items-center bg-transparent p-2 rounded-md  transition-transform duration-300 hover:scale-105 cursor-pointer">
  <div className="mb-2">
  <Image className="rounded-lg w-12 h-12"
        src={icone}
        alt={titulo}
        width={12}
        height={12}
      />
  </div>
  <h3 className="text-sm font-medium text-gray-500 group-hover:text-sky-500 transition-colors duration-300">{titulo}</h3>
</div>
</div>

 );
};
export default CardLinguagem;