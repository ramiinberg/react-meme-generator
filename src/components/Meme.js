import memesData from '../memesData'
import './meme.css'

const Meme = () => {
  const getRandomImage = () => {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const imageUrl = memesArray[randomNumber].url
    console.log(imageUrl)
  }

  return (
    <div className="meme">
      <input type='text' placeholder='Top text' className='meme-top-input' />
      <input type='text' placeholder='Bottom text' className='meme-bottom-input'/>
      <button className='meme-new-image' onClick={getRandomImage}>Get a new meme image 🖼</button>
    </div>
  )
}

export default Meme
