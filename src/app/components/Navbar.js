import Image from "next/image";

const Navbar = ({ Navbar }) => {
return(
<nav className="navbardesktop bg-black-900 rounded select-none">
      <div className="sm:px-6">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-center font-sans">
            <div className="flex flex-shrink-0 items-center">
              <Image className="h-8 hover:scale-110" src="/graduationiconblue.svg" width={30} height={30} alt="icone" />
            </div>
            <div className="hidden flex sm:ml-6 sm:block">
              <div className=" flex space-x-5">
                <a href="#" className="rounded-md bg-gray-800 px-3 py-2 text-m font-medium text-white hover:text-sky-500" aria-current="page">Início</a>
                <a href="#" className="rounded-md px-3 py-2 text-m font-medium text-gray-300 hover:text-sky-500">Sobre Mim</a>
                <a href="#projetos" className="rounded-md px-3 py-2 text-m font-medium text-gray-300 hover:text-sky-500">Projetos</a>
                <a href="#" className="rounded-md px-3 py-2 text-m font-medium text-gray-300 hover:text-sky-500">Contato</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="navbar mobile sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Início</a>
          <a href="#" className="block rounded-md px-3 py-2 text-m font-medium text-gray-300  hover:text-sky-500">Sobre Mim</a>
          <a href="#" className="block rounded-md px-3 py-2 text-m font-medium text-gray-300  hover:text-sky-500">Projetos</a>
          <a href="#" className="block rounded-md px-3 py-2 text-m font-medium text-gray-300  hover:text-sky-500">Contato</a>
        </div>
      </div>
</nav>
    )
}
export default Navbar;