import sacaria from "../img/sacaria.webp";

function EXPEDIÇÃO(props) {
  return (
    <div>
      <header>{props.PODRUTO}</header>
      <img className="pçs" src={sacaria} />
      <p>{props.descrição01}</p>
      <p>{props.descrição02}</p>
    </div>
  );
}
export default EXPEDIÇÃO;
