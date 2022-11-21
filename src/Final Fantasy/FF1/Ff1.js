import Ff1titolo from "./Ff1titolo";
import Ff1meta from "./Ff1meta";
import Ff1img from "./Ff1img";
import Ff1descrizione from "./Ff1descrizione";
import Ff1like from "./Ff1like";

function Ff1() {
    return (
        <div className = "card">
        <div className = "meta"><Ff1meta></Ff1meta></div>
        <div className = "meta"><Ff1titolo></Ff1titolo></div>
        <hr></hr>
        <div><Ff1img></Ff1img></div>
        <div className = "container">
        <div><Ff1descrizione></Ff1descrizione></div>
        <hr></hr>
        <div className="like"><Ff1like></Ff1like></div>
        </div>
      </div>
    );
  }
  
  export default Ff1;
  