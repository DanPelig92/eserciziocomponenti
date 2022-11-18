import Ff10titolo from "./Ff10titolo";
import Ff10meta from "./Ff10meta";
import Ff10img from "./Ff10img";
import Ff10descrizione from "./Ff10descrizione";
import Ff10like from "./Ff10like";

function Ff10() {
    return (
        <div className = "card2">
        <div className = "meta"><Ff10meta></Ff10meta></div>
        <div className = "meta"><Ff10titolo></Ff10titolo></div>
        <hr></hr>
        <div><Ff10img></Ff10img></div>
        <div className = "container">
        <div><Ff10descrizione></Ff10descrizione></div>
        <div className="like"><Ff10like></Ff10like></div>
        </div>
      </div>
    );
  }
  
  export default Ff10;