import { Link } from 'react-router-dom'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components/index'

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              job <span>Tracking </span> app
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
              impedit, laborum dolores corrupti debitis ullam reprehenderit
              quas. Eveniet iure iusto ratione ipsam tenetur debitis aspernatur,
              amet ut veniam non labore.
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>

          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  )
}

export default Landing
