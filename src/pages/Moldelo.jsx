import moldelo from "../img/modelo.webp";
import pcs from "../img/pcs.webp";
import Logo from "../img/Logo.webp";
import "../pages/Modelo.css";
function Modelo(props) {
  return (
    <div>
      <div>
        <img src={Logo} />
      </div>
      <header id="nome_produto">{props.PODRUTO}</header>
      <img src={pcs} />
      <p className="T-MODELO">MODELO</p>
      <div>
        <img src={moldelo} />
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
