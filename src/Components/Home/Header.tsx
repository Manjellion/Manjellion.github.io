import { Button } from '@mui/material'
import '../Style/style.css'

function Header() {
  return (
    <div className='header_container' id='home'>
        <h1>hey, <br /> Manjil here.</h1>
        <h2>Digital crafter.</h2>
        <p>I'm a software developer based in London. <br/> I have great interest in frontend development and everything in between.</p>
        <Button className='header_button'>Send me a message</Button>
    </div>
  )
}

export default Header