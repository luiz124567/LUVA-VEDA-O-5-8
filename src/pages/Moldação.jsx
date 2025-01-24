import MOLDE from "../img/MOLDE.webp";
import "../pages/Moldação.css";
function Moldação(props) {
  return (
    <div>
      <header>{props.PODRUTO}</header>
      <img src={MOLDE} />
      <div>
        <p className="P" >{props.descrição01}</p>
        <p className="P">{props.descrição02}</p>
        <p className="P">{props.descrição03}</p>
      </div>
    </div>
  );
}
export default Moldação;