import './meme.css'

const Meme = () => (
  <main className='main'>
    <form className="meme-form">
      <input type='text' placeholder='Top text' className='meme-top-input' />
      <input type='text' placeholder='Bottom text' className='meme-bottom-input'/>
      <button className='meme-new-image'>Get a new meme image 🖼</button>
    </form>
  </main>
)

export default Meme