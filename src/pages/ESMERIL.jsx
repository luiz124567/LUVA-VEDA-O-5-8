import PONTO_ESMERILAÇÃO from "../img/PONTO_ESMERILAÇÃO.webp";
import ESMERILAÇÃO from "../img/ESMERILAÇÃO.mp4";
import "../pages/Esmeril.css";
function ESMERIL(props) {
  return (
    <div>
      <header>{props.PODRUTO}</header>
      <video className="ponto" src={ESMERILAÇÃO} controls poster={PONTO_ESMERILAÇÃO}></video>
    </div>
  );
}
export default ESMERIL;