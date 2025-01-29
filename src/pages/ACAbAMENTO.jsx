import "../pages/ACABAMENTO.css";
import PECAFINAL from "../img/PECAFINAL.webp";
function ACABAMENTO(props) {
  return (
    <div>
      <header>{props.PODRUTO}</header>
      <p id="p">INSPEÇÃO NECESSÁRIA:VISUAL.</p>
        <img src={PECAFINAL} alt="" />
    </div>
  );
}
export default ACABAMENTO;