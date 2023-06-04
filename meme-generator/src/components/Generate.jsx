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

  function handleText(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value
      
    }));
  }
  return (
    <main>
      <div className="main">
        <input
          placeholder="Top Text"
          type="text"
          className="main--upperText"
          name="topText"
          onChange={handleText}
          value={meme.topText}
        />
        <input
          placeholder="Bottom Text"
          type="text"
          className="main--lowerText"
          name="bottomText"
          onChange={handleText}
          value={meme.bottomText}
        />
        <button onClick={getRanImg} className="main--generate-button">
          Get a new image 😎
        </button>
      </div>
      <div className="main--final">
        <img src={meme.randomImage} alt="img" className="generated--img" />
        <h2 className="main--text top">{meme.topText}</h2>
        <h2 className="main--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Generate;
