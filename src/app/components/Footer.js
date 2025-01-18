import Image from "next/image";
import Svg from "next/image"
const Footer = ({ Footer }) => {
    return(
<footer className={`text-[#787676] text-sm font-medium select-none`}>
  <div className="container mx-auto flex flex-wrap justify-around items-end">
    <div>
      <h4 className="font-bold text-sm text-white">Contato</h4>
      <Svg className = "transition transform hover:scale-110 hover:filter hover:invert hover:text-sky-400"
      src = "/iconeemail.svg"
      width = {40}
      height = {40}
      alt = {"E-Mail"}
      />

    <a href = "https://www.linkedin.com/in/carlos-eduardo-maia" target="_blank">
      <Svg className = "transition transform hover:scale-110 hover:filter hover:invert hover:text-sky-400"
      src = "/iconelinkedin.svg"
      width = {40}
      height = {40}
      alt = {"E-Mail"}
      />
    </a>


    </div>
    <div>
     
    </div>
    <div className="mt-4">
      <button className="hover:text-sky-400 duration-300">© 2024 - Cadu Maia</button>
    </div>
  </div>
</footer>
    )
}
export default Footer;