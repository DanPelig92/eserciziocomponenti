export default function Bottone(props) {
    return (
      <div className="like">
        <input type="image" className="likeButton" img src={props.bottone} onClick={props.clicca}></input>
      </div>
    );
  }

  