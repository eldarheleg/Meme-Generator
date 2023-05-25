import React from "react";
import memesData from "../memesData";

function Generate() {
  const [memeImg, setMemeImg] = React.useState("");
  function getRanImg() {
    const memesArr = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArr.length);

    setMemeImg(memesArr[randomNum].url);
    console.log(memesArr[randomNum].url);
  }
  return (
    <main>
      <div className="main">
        <input placeholder="Top Text" type="text" className="main--upperText" />
        <input
          placeholder="Bottom Text"
          type="text"
          className="main--lowerText"
        />
        <button onClick={getRanImg} className="main--generate-button">
          Get a new image 😎
        </button>
      </div>
      <img src={memeImg} alt="img" className="generated--img" />
    </main>
  );
}

export default Generate;
