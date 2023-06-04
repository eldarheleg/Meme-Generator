import React from "react";
import memesData from "../memesData";

function Generate() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/gk5el.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getRanImg() {
    const memesArr = allMemeImages.data.memes;
    const randomNum = Math.floor(Math.random() * memesArr.length);
    let url = memesArr[randomNum].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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
      <div className="main--final">
        <img src={meme.randomImage} alt="img" className="generated--img" />
        <h2 className="main--text top">something1</h2>
        <h2 className="main--text bottom">something2</h2>
      </div>
    </main>
  );
}

export default Generate;
