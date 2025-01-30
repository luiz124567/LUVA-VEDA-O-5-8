import moldelo01 from "../img/modelo01.webp";
import pcs from "../img/pcs.webp";
import LOGO from "../img/LOGO.webp";
import "../pages/Modelo.css";
function Modelo(props) {
  return (
    <div>
      <div>
        <img src={LOGO} />
      </div>
      <header id="nome_produto">{props.PODRUTO}</header>
      <img src={pcs} />
      <p className="T-MODELO">MODELO</p>
      <div>
        <img src={moldelo01} />
      </div>
      <div>
        <p>{props.descrição01}</p>
        <p>{props.descrição02}</p>
        <p>{props.descrição03}</p>
      </div>
    </div>
  );
}
export default Modelo;
