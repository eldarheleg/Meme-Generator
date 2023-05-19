import memesData from "../memesData";

function Generate() {
  function getRanImg() {
    const memesArr = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArr.length);
    console.log(memesArr[randomNum].url);
  }
  return (
    <section className="main">
      <input placeholder="Top Text" type="text" className="main--upperText" />
      <input
        placeholder="Bottom Text"
        type="text"
        className="main--lowerText"
      />
      <button onClick={getRanImg} className="main--generate-button">
        Get a new image 😎
      </button>
    </section>
  );
}

export default Generate;
