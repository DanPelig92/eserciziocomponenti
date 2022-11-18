import Ff9titolo from "./Ff9titolo";
import Ff9meta from "./Ff9meta";
import Ff9img from "./Ff9img";
import Ff9descrizione from "./Ff9descrizione";
import Ff9like from "./Ff9like";

function Ff9() {
    return (
        <div className = "card2">
        <div className = "meta"><Ff9meta></Ff9meta></div>
        <div className = "meta"><Ff9titolo></Ff9titolo></div>
        <hr></hr>
        <div><Ff9img></Ff9img></div>
        <div className = "container">
        <div><Ff9descrizione></Ff9descrizione></div>
        <div className="like"><Ff9like></Ff9like></div>
        </div>
      </div>
    );
  }
  
  export default Ff9;