import Modelo from "./pages/Moldelo";
import Macharia from "./pages/Macharia";
import Moldação from "./pages/Moldação";
import Fusão from "./pages/Fusão";
import "./App.css";
import ESMERIL from "./pages/ESMERIL";
import ACABAMENTO from "./pages/ACAbAMENTO";
import EXPEDIÇÃO from "./pages/EXPEDIÇÃO";
function App() {
  return (
    <>
      <Modelo
        PODRUTO="LUVA VEDAÇÃO 5/8"
        descrição01="QUANTIDADE DE FIGURA: 16."
        descrição02="CAMPANA: 85/04."
      />
      <Moldação
        PODRUTO="MOLDAÇÃO"
        descrição01="PROD./ HORA: 59."
        descrição02="PROD. DIÁRIA: 531."
        descrição03="PESO DO MOLDE: 8,82KG."
      />
      <Macharia PODRUTO="Macharia" />
      <Fusão
        PODRUTO="FUSÃO"
        descrição06="QTD DE MOLDES POR MONTE: 4."
        descrição07="FILTRO: NÃO USA"
        descrição08="MATERIAL ULTILIZADO:GGG40"
        descrição01="PESO DE LASTRO: 4 UNIDADES."
        descrição02="TEMPERATURA DE VAZAMENTO : 1360 a 1410."
        descrição03="APÓS O ENCHIMENTO DOS MOLDES SÓ RETIRAR O PESO DE LASTRO APÓS O ENCHIMENTO DE OUTRAS 3 ÁRVORES."
      />
      <ESMERIL
        PODRUTO="ESMERIL"
      />
      <ACABAMENTO PODRUTO="ACABAMENTO" />
      <EXPEDIÇÃO
        PODRUTO="EXPEDIÇÃO"
        descrição01="TIPO DE EMBALAGEM:SACARIA."
        descrição02="QUANTIDADE POR SACO:50 PEÇAS."
      />
    </>
  );
}

export default App;
