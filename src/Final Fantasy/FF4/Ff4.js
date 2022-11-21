import Ff4descrizione from "./Ff4descrizione";
import Ff4img from "./Ff4img";
import Ff4like from "./Ff4like";
import Ff4meta from "./Ff4meta";
import Ff4titolo from "./Ff4titolo";

function Ff4(){
    return( <div className = "card">
    <div className = "meta"><Ff4meta></Ff4meta></div>
    <div className = "meta"><Ff4titolo></Ff4titolo></div>
    <hr></hr>
    <div><Ff4img></Ff4img></div>
    <div className = "container">
    <div><Ff4descrizione></Ff4descrizione></div>
    <hr></hr>
    <div className="like"><Ff4like></Ff4like></div>
    </div>
  </div>)
}

export default Ff4;