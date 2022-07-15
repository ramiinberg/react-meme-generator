import React from 'react'
import memesData from '../memesData'
import './meme.css'

function Meme() {
  const [memeImage, setMemeImage] = React.useState('')

  const getRandomImage = () => {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const imageUrl = memesArray[randomNumber].url
    setMemeImage(imageUrl)
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
      <img className='meme-image' src={memeImage} alt='Random meme' />
    </>
  )
}

export default Meme
