import Titolo from "./Titolo";
import Meta from "./Meta";
import Immagine from "./Immagine";
import Descrizione from "./Descrizione";
import Bottone from "./Bottone";
import {useState} from "react";
import listaFinalFantasy from "./listaFinalFantasy";

export default function Protype () {

    const [statoDescrizione, modificaDescrizione] = useState(true);

    function mostraDescrizione(){
        modificaDescrizione(!statoDescrizione)
  }
    return (
        <div>
            {listaFinalFantasy.map((elemento) =>{
                return(
                <div className="card" key={elemento.id}>
                    
        <Meta meta={elemento.meta}/>
        <Titolo titolo={elemento.titolo}/>
        <hr></hr>
        <Immagine immagine={elemento.immagine}/>
        <div className="container">
            {statoDescrizione ?
            <Descrizione descrizione={elemento.descrizione}/> :
            <Descrizione descrizione={elemento.descrizione2}/>}</div>
        <hr></hr>
        {statoDescrizione ? 
            <Bottone bottone={elemento.like} clicca={modificaDescrizione} /> : 
            <Bottone bottone={elemento.dislike} clicca ={mostraDescrizione}/>}
        </div>)
        }
        )
        }
        </div>)
        }