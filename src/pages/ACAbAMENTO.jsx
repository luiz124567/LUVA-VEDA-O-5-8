import "../pages/ACABAMENTO.css";
import ROSCAGM from "../img/ROSCAGM.webp";
import Gabaritagem from "../img/Gabaritagem.mp4";
function ACABAMENTO(props) {
  return (
    <div>
      <header>{props.PODRUTO}</header>
      <p id="p">INSPEÇÃO NECESSÁRIA:VISUAL E GABARITAGEM DA ROSCA.</p>
        <video src={Gabaritagem} controls poster={ROSCAGM}></video>
    </div>
  );
}
export default ACABAMENTO;