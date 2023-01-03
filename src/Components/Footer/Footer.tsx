import { Button } from '@mui/material'
import '../Style/style.css'

function Footer() {

  function scrollToTop() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return (
    <div className='footer-container'>
        <p>@Manjil</p>
        <Button onClick={() => {
          scrollToTop()
        }}>
          Back to the top
        </Button>
    </div>
  )
}

export default Footer