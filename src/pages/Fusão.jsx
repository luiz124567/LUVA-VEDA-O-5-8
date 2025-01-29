import MOLDEFUNDIDO from "../img/MOLDEFUNDIDO.webp";
import MOLDE_LUVA from "../img/MOLDE_LUVA.webp";
import "../pages/Fusão.css";
function Fusão(props) {
  return (
    <div>
      <header>{props.PODRUTO}</header>
      <img className="pçs" src={MOLDE_LUVA} />
      <p>{props.descrição06}</p>
      <p>{props.descrição07}</p>
      <p>{props.descrição08}</p>
      <p>{props.descrição09}</p>
      <div>
        <img src={MOLDEFUNDIDO} />
      </div>
      <div>
        <p>{props.descrição01}</p>
        <p>{props.descrição02}</p>
        <p>{props.descrição03}</p>
        <p>{props.descrição04}</p>
        <p>{props.descrição05}</p>
      </div>
    </div>
  );
}
export default Fusão;