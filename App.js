import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "π": "Grinning Face with Big Eyes",
  "π": "Grinning Face with Smiling Eyes",
  "π": "Beaming Face with Smiling Eyes",
  "π": "Grinning Squinting Face",
  "π": "Grinning Face with Sweat",
  "π": "Rolling on the Floor Laughing",
  "π€£": "Face with Tears of Joy",
  "π": "Slightly Smiling Face",
  "π": "Upside-Down Face",
  "π": "Winking Face",
  "π": "Smiling Face with Smiling Eyes",
  "π": "Smiling Face with Halo",
  "π": "Smiling Face with Hearts",
  "π₯°": "Smiling Face with Heart-Eyes",
  "π": "Star-Struck",
  "π€©": "Face Blowing a Kiss",
  "π": "Kissing Face",
  "π": "Smiling Face",
  "βΊοΈ": "Kissing Face with Closed Eyes",
  "π": "Kissing Face with Smiling Eyes",
  "π": "Smiling Face with Tear",
  "π₯²": "Face Savoring Food",
  "π": "Face with Tongue",
  "π": "Winking Face with Tongue",
  "π": "Zany Face",
  "π€ͺ": "Squinting Face with Tongue"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "eee kaa hai!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>eee kaun sa Emoji hai?</h1>

      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>

      <h3>emojis we know</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
