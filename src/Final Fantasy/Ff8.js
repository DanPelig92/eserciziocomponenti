import Ff8titolo from "./Ff8titolo";
import Ff8meta from "./Ff8meta";
import Ff8img from "./Ff8img";
import Ff8descrizione from "./Ff8descrizione";
import Ff8like from "./Ff8like";

function Ff8() {
    return (
        <div className = "card2">
        <div className = "meta"><Ff8meta></Ff8meta></div>
        <div className = "meta"><Ff8titolo></Ff8titolo></div>
        <hr></hr>
        <div><Ff8img></Ff8img></div>
        <div className = "container">
        <div><Ff8descrizione></Ff8descrizione></div>
        <div className="like"><Ff8like></Ff8like></div>
        </div>
      </div>
    );
  }
  
  export default Ff8;