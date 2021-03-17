import React from "react";
import Emoji from "./Emoji";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <p>{props.id} </p>
        <Emoji emoji={props.emoji} />
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

export default Card;
