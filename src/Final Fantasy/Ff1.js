import Titolo from "./ComponentiCarte/Titolo";
import Meta from "./ComponentiCarte/Meta";
import Immagine from "./ComponentiCarte/Immagine";
import Descrizione from "./ComponentiCarte/Descrizione";
import Bottone from "./ComponentiCarte/Bottone";
import {useState} from "react"

function Ff1() {

  const [statoDescrizione, modificaDescrizione] = useState(true);

  function mostraDescrizione(){
    modificaDescrizione(!statoDescrizione)
  }

    return (
        <div className = "card">
        <Meta meta="(1987)" />
        <Titolo titolo="Final Fantasy I" />
        <hr></hr>
        <Immagine immagine="https://static.wikia.nocookie.net/finalfantasy/images/a/ae/Final_Fantasy_logo.jpg" className ="imgvera" />
        <div className = "container">
          {statoDescrizione ? 
          <Descrizione descrizione="Prima che il mondo entrasse nell'Età Oscura, quattro cristalli di potere controllavano e 
          regolavano i quattro elementi (Terra, Acqua, Fuoco e Vento) e diffondevano, con la loro luce, 
          pace e armonia nel mondo. Un triste giorno la luce dei cristalli si esaurì e l'ordine naturale 
          del pianeta fu irrimediabilmente alterato." /> : 
          <Descrizione descrizione = "Non ti piace" />}
       
        <hr></hr>
      {statoDescrizione ? 
        <Bottone bottone="https://pngimg.com/uploads/like/like_PNG15.png" clicca={mostraDescrizione} /> : 
        <Bottone bottone="https://www.freeiconspng.com/thumbs/youtube-dislike-png/youtube-dislike-png-red-clipart-13.png" clicca ={mostraDescrizione}/>}
        </div>
      </div>
    );
  }
  
  export default Ff1;
  