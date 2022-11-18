import Ff5titolo from "./Ff5titolo";
import Ff5meta from "./Ff5meta";
import Ff5img from "./Ff5img";
import Ff5descrizione from "./Ff5descrizione";
import Ff5like from "./Ff5like";

function Ff5() {
    return (
        <div className = "card">
        <div className = "meta"><Ff5meta></Ff5meta></div>
        <div className = "meta"><Ff5titolo></Ff5titolo></div>
        <hr></hr>
        <div><Ff5img></Ff5img></div>
        <div className = "container">
        <div><Ff5descrizione></Ff5descrizione></div>
        <hr></hr>
        <div className="like"><Ff5like></Ff5like></div>
        </div>
      </div>
    );
  }
  
  export default Ff5;