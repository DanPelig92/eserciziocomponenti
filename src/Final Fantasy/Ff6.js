import Ff6titolo from "./Ff6titolo";
import Ff6meta from "./Ff6meta";
import Ff6img from "./Ff6img";
import Ff6descrizione from "./Ff6descrizione";
import Ff6like from "./Ff6like";

function Ff6() {
    return (
        <div className = "card2">
        <div className = "meta"><Ff6meta></Ff6meta></div>
        <div className = "meta"><Ff6titolo></Ff6titolo></div>
        <hr></hr>
        <div><Ff6img></Ff6img></div>
        <div className = "container">
        <div><Ff6descrizione></Ff6descrizione></div>
        <hr></hr>
        <div className="like"><Ff6like></Ff6like></div>
        </div>
      </div>
    );
  }
  
  export default Ff6;