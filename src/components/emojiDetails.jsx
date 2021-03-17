import React from "react";
import Card from "./Card";

function emojiDetails(emojis) {
  return (
    <Card
      key={emojis.id}
      id={emojis.id}
      emoji={emojis.emoji}
      name={emojis.name}
      meaning={emojis.meaning}
    />
  );
}

export default emojiDetails;
