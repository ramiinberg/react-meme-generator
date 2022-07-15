import React from 'react'
import memesData from '../memesData'
import './meme.css'

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  })
  const [allMemeImages] = React.useState(memesData)

  const getRandomImage = () => {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const imageUrl = memesArray[randomNumber].url
    setMeme((prevState) => ({
      ...prevState,
      randomImage: imageUrl,
    }))
  }

  return (
    <>
      <div className='meme'>
        <input type='text' placeholder='Top text' className='meme-top-input' />
        <input
          type='text'
          placeholder='Bottom text'
          className='meme-bottom-input'
        />
        <button
          type='button'
          className='meme-new-image'
          onClick={getRandomImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <img className='meme-image' src={meme.randomImage} alt='Random meme' />
    </>
  )
}

export default Meme
