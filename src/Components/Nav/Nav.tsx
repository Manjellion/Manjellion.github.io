import '../Style/style.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

function Nav() {
  return (
    <div className='nav-container'>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <ul>
              <li><a href=""><AiFillGithub size={24} /></a></li>
              <li><a href=""><AiFillLinkedin size={24} /></a></li>
            </ul>
        </ul>
    </div>
  )
}

export default Nav