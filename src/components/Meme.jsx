import React from 'react'
import memesData from '../memesData'
import './meme.css'

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })
  const [allMemeImages] = React.useState(memesData)

  const getRandomImage = () => {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const imageUrl = memesArray[randomNumber].url
    setMeme(prevState => ({
      ...prevState,
      randomImage: imageUrl
    }))
  }

  const handleChange = event => {
    const { name, value } = event.target
    setMeme(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <>
      <div className='form'>
        <input
          type='text'
          name='topText'
          value={meme.topText}
          placeholder='Top text'
          onChange={handleChange}
          className='form-top-input'
        />
        <input
          type='text'
          name='bottomText'
          value={meme.bottomText}
          placeholder='Bottom text'
          onChange={handleChange}
          className='form-bottom-input'
        />
        <button
          type='button'
          className='form-new-image'
          onClick={getRandomImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className='meme'>
        <img className='meme-image' src={meme.randomImage} alt='Random meme' />
        <h2 className='meme--text top'>One does not simply</h2>
        <h2 className='meme--text bottom'>Walk into Mordor</h2>
      </div>
    </>
  )
}

export default Meme
