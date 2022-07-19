import React from 'react'
import './meme.css'

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: 'one does not simply',
    bottomText: 'walk into mordor',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })
  const [allMemeData, setAllMemeData] = React.useState([])

  const getRandomImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemeData.length)
    const imageUrl = allMemeData[randomNumber].url
    setMeme(prevState => ({
      ...prevState,
      randomImage: imageUrl
    }))
  }

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(resp => resp.json())
      .then(data => {
        const { memes } = data.data
        return setAllMemeData(memes)
      })
  }, [])

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
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </>
  )
}

export default Meme
