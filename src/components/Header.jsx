import trollFaceImg from '../images/troll-face.png'
import './header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={trollFaceImg} alt="troll face" className="header-image" />
        <h2>Meme Generator</h2>
      </div>
      <h4 className="header-links">React practising</h4>
    </header>
  )
}

export default Header
