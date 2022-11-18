import Ff3descrizione from "./Ff3descrizione";
import Ff3img from "./Ff3img";
import Ff3like from "./Ff3like";
import Ff3meta from "./Ff3meta";
import Ff3titolo from "./Ff3titolo";

function Ff3(){
    return( <div className = "card">
    <div className = "meta"><Ff3meta></Ff3meta></div>
    <div className = "meta"><Ff3titolo></Ff3titolo></div>
    <hr></hr>
    <div><Ff3img></Ff3img></div>
    <div className = "container">
    <div><Ff3descrizione></Ff3descrizione></div>
    <hr></hr>
    <div className="like"><Ff3like></Ff3like></div>
    </div>
  </div>)
}

export default Ff3;