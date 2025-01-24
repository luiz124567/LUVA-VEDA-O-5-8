import MOLDE_MACHO from "../img/MOLDE_MACHO.webp";
import LUVA_COLOÇÃO_MACHO from "../img/LUVA_COLOÇÃO_MACHO.mp4";
import MACHO_LUVA from "../img/MACHO_LUVA.webp";
import "../pages/Macharia.css";
function Macharia(props) {
  return (
    <div>
      <header>{props.PODRUTO}</header>
      <img src={MACHO_LUVA} />
      <p className="T-SETOR01">MOLDE DA ANCORAGEM 5/8 GM 16 FIGURAS</p>
      <div>
        <video src={LUVA_COLOÇÃO_MACHO} poster={MOLDE_MACHO} controls ></video>
      </div>
    </div>
  );
}
export default Macharia;
