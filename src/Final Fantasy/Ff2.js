import Ff2titolo from "./Ff2titolo";
import Ff2meta from "./Ff2meta";
import Ff2img from "./Ff2img";
import Ff2descrizione from "./Ff2descrizione";
import Ff2like from "./Ff2like";

function Ff2() {
    return (
        <div className = "card">
        <div className = "meta"><Ff2meta></Ff2meta></div>
        <div className = "meta"><Ff2titolo></Ff2titolo></div>
        <hr></hr>
        <div><Ff2img></Ff2img></div>
        <div className = "container">
        <div><Ff2descrizione></Ff2descrizione></div>
        <hr></hr>
        <div className ="like"><Ff2like></Ff2like></div>
        </div>
      </div>
    );
  }
  
  export default Ff2;
  