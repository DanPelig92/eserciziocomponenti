import Ff7titolo from "./Ff7titolo";
import Ff7meta from "./Ff7meta";
import Ff7img from "./Ff7img";
import Ff7descrizione from "./Ff7descrizione";
import Ff7like from "./Ff7like";

function Ff7() {
    return (
        <div className = "card2">
        <div className = "meta"><Ff7meta></Ff7meta></div>
        <div className = "meta"><Ff7titolo></Ff7titolo></div>
        <hr></hr>
        <div><Ff7img></Ff7img></div>
        <div className = "container">
        <div><Ff7descrizione></Ff7descrizione></div>
        <hr></hr>
        <div className="like"><Ff7like></Ff7like></div>
        </div>
      </div>
    );
  }
  
  export default Ff7;